'use client';

import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { EpisodeList } from '@/components/EpisodeList';
import { DifficultyToggle } from '@/components/DifficultyToggle';
import { getAvailableEpisodes } from '@/content/episodes';
import { ArrowLeft, Settings } from 'lucide-react';

export default function PlayPage() {
  const router = useRouter();
  const { progress, setDifficulty } = useAppStore();

  const episodes = getAvailableEpisodes(
    progress.selectedLevel,
    progress.selectedDifficulty,
    progress.characterAffection || {},
    progress.selectedCharacter
  );

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'starter':
        return 'スターター';
      case 'a1':
        return 'A1レベル';
      case 'a2':
        return 'A2レベル';
      default:
        return level;
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

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span>ホームに戻る</span>
            </button>
            <button
              onClick={() => router.push('/settings')}
              className="p-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Settings size={20} />
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              エピソードを選択
            </h1>
            <p className="text-text-secondary mb-6">
              {getLevelLabel(progress.selectedLevel)}
            </p>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                難易度を選択
              </h2>
              <div className="flex justify-center">
                <DifficultyToggle
                  value={progress.selectedDifficulty}
                  onChange={setDifficulty}
                />
              </div>
            </div>
          </div>
        </div>

        <EpisodeList
          episodes={episodes}
          completedEpisodes={progress.completedEpisodes}
          characterAffection={progress.characterAffection || {}}
        />

        {episodes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary mb-4">
              このレベルと難易度のエピソードはまだありません
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              レベルを変更する
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
