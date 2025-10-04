'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QuizPanel } from './QuizPanel';
import { AffectionBar } from './AffectionBar';
import { TtsButton } from './TtsButton';
import { ArrowLeft, Settings } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { speakKorean } from '@/lib/tts';
import type { Episode, DialogueNode, QuizOption } from '@/types/content';

interface EpisodePlayerProps {
  episode: Episode;
}

export function EpisodePlayer({ episode }: EpisodePlayerProps) {
  const router = useRouter();
  const { progress, settings, updateCharacterAffection, addSeenNode, addCompletedEpisode } = useAppStore();
  const [currentNodeId, setCurrentNodeId] = useState(episode.initialNode);
  const [dialogueHistory, setDialogueHistory] = useState<DialogueNode[]>([]);

  const currentAffection = (progress.characterAffection && progress.characterAffection[episode.characterId]) || 50;

  const currentNode = episode.dialogueNodes.find((node) => node.id === currentNodeId);

  useEffect(() => {
    if (currentNode && currentNode.speaker === 'character' && !currentNode.quiz) {
      addSeenNode(episode.id, currentNode.id);
      const isAlreadyInHistory = dialogueHistory.some(node => node.id === currentNode.id);
      if (!isAlreadyInHistory) {
        setDialogueHistory((prev) => [...prev, currentNode]);
      }

      if (settings.autoPlayTTS && currentNode.text.korean) {
        speakKorean(currentNode.text.korean);
      }
    }
  }, [currentNodeId, currentNode, episode.id, addSeenNode, dialogueHistory, settings.autoPlayTTS]);

  const handleAnswer = (option: QuizOption) => {
    updateCharacterAffection(episode.characterId, option.affectionChange);

    if (currentNode) {
      addSeenNode(episode.id, currentNode.id);
    }

    if (option.nextNode) {
      setCurrentNodeId(option.nextNode);
    } else if (!currentNode?.nextNode) {
      addCompletedEpisode(episode.id);
      setTimeout(() => {
        router.push('/play');
      }, 2000);
    }
  };

  const handleContinue = () => {
    if (currentNode?.nextNode) {
      setCurrentNodeId(currentNode.nextNode);
    } else {
      addCompletedEpisode(episode.id);
      router.push('/play');
    }
  };

  if (!currentNode) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-text-secondary mb-4">エピソードが見つかりません</p>
          <button
            onClick={() => router.push('/play')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90"
          >
            エピソード選択に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <div className="fixed inset-0 z-0">
        {episode.characterImage && (
          <img
            src={episode.characterImage}
            alt={episode.characterName}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/play')}
            className="flex items-center gap-2 text-white hover:text-primary transition-colors bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              <AffectionBar affection={currentAffection} />
            </div>
            <button
              onClick={() => router.push('/settings')}
              className="p-2 text-white hover:text-primary transition-colors bg-black/50 rounded-lg backdrop-blur-sm"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 via-black/60 to-transparent pb-6">
        <div className="max-w-4xl mx-auto px-6">
          {currentNode.quiz ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-white/20">
              <QuizPanel
                quiz={currentNode.quiz}
                showJapanese={settings.showJapanese}
                showRomanization={settings.showRomanization}
                onAnswer={handleAnswer}
              />
            </div>
          ) : currentNode.speaker === 'character' ? (
            <div className="space-y-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-white/20">
                <div className="mb-3">
                  <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                    {episode.characterNameKorean} / {episode.characterName}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold text-text-primary leading-relaxed">
                      {currentNode.text.korean}
                    </p>
                    {!settings.autoPlayTTS && currentNode.text.korean && <TtsButton text={currentNode.text.korean} size="md" />}
                  </div>

                  {settings.showJapanese && currentNode.text.japanese && (
                    <p className="text-lg text-text-secondary">
                      {currentNode.text.japanese}
                    </p>
                  )}

                  {settings.showRomanization && currentNode.text.romanization && (
                    <p className="text-sm text-text-secondary/70 italic">
                      {currentNode.text.romanization}
                    </p>
                  )}
                </div>
              </div>

              {currentNode.nextNode ? (
                <div className="text-center">
                  <button
                    onClick={handleContinue}
                    className="px-12 py-4 bg-white text-primary rounded-xl hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-3xl font-bold text-lg"
                  >
                    次へ ▶
                  </button>
                </div>
              ) : (
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-white/20 text-center">
                  <p className="text-2xl font-bold text-text-primary mb-6">エピソード完了!</p>
                  <button
                    onClick={() => router.push('/play')}
                    className="px-12 py-4 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl font-bold text-lg"
                  >
                    エピソード選択に戻る
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
