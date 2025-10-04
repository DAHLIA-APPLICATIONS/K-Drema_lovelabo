'use client';

import { useRouter } from 'next/navigation';
import { Lock, CircleCheck as CheckCircle, Play } from 'lucide-react';
import type { Episode } from '@/types/content';

interface EpisodeListProps {
  episodes: Episode[];
  completedEpisodes: string[];
  characterAffection: Record<string, number>;
}

export function EpisodeList({ episodes, completedEpisodes, characterAffection }: EpisodeListProps) {
  const router = useRouter();

  const handleEpisodeClick = (episode: Episode) => {
    const affection = (characterAffection && characterAffection[episode.characterId]) || 50;
    if (episode.requiredAffection && affection < episode.requiredAffection) {
      alert(`${episode.characterNameKorean} / ${episode.characterName}との好感度${episode.requiredAffection}が必要です`);
      return;
    }
    router.push(`/episode/${episode.id}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'normal':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'hard':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '簡単';
      case 'normal':
        return '普通';
      case 'hard':
        return '難しい';
      default:
        return difficulty;
    }
  };

  if (episodes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-text-secondary">
          選択したレベルと難易度のエピソードはまだありません
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {episodes.map((episode) => {
        const isCompleted = completedEpisodes.includes(episode.id);
        const affection = (characterAffection && characterAffection[episode.characterId]) || 50;
        const isLocked =
          episode.requiredAffection && affection < episode.requiredAffection;

        return (
          <div
            key={episode.id}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden ${
              isLocked ? 'opacity-60' : 'cursor-pointer'
            }`}
            onClick={() => !isLocked && handleEpisodeClick(episode)}
          >
            {episode.characterImage && (
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={episode.characterImage}
                  alt={episode.characterName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{episode.characterNameKorean} / {episode.characterName}</p>
                </div>
                {isCompleted && (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                )}
                {isLocked && <Lock className="w-6 h-6 text-gray-400 flex-shrink-0" />}
              </div>

              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {episode.description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                    episode.difficulty
                  )}`}
                >
                  {getDifficultyLabel(episode.difficulty)}
                </span>
                {episode.requiredAffection && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    好感度 {episode.requiredAffection}+
                  </span>
                )}
              </div>

              {!isLocked && (
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors">
                  <Play size={16} fill="currentColor" />
                  <span className="font-medium">
                    {isCompleted ? 'もう一度プレイ' : 'プレイする'}
                  </span>
                </button>
              )}

              {isLocked && (
                <div className="text-center text-sm text-text-secondary">
                  好感度 {episode.requiredAffection} 必要
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
