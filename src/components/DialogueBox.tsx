'use client';

import { TtsButton } from './TtsButton';
import type { DialogueText } from '@/types/content';

interface DialogueBoxProps {
  text: DialogueText;
  speaker: 'player' | 'character';
  characterName?: string;
  characterNameKorean?: string;
  characterImage?: string;
  emotion?: 'neutral' | 'happy' | 'sad' | 'excited' | 'angry';
  showJapanese: boolean;
  showRomanization: boolean;
}

export function DialogueBox({
  text,
  speaker,
  characterName = 'キャラクター',
  characterNameKorean,
  characterImage,
  emotion = 'neutral',
  showJapanese,
  showRomanization,
}: DialogueBoxProps) {
  const isCharacter = speaker === 'character';

  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        {isCharacter && characterImage && (
          <img
            src={characterImage}
            alt={characterName}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {isCharacter && !characterImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-white/20">
            {isCharacter && (
              <div className="mb-3">
                <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                  {characterNameKorean ? `${characterNameKorean} / ${characterName}` : characterName}
                </span>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold text-text-primary leading-relaxed">
                  {text.korean}
                </p>
                {text.korean && <TtsButton text={text.korean} size="md" />}
              </div>

              {showJapanese && text.japanese && (
                <p className="text-lg text-text-secondary">
                  {text.japanese}
                </p>
              )}

              {showRomanization && text.romanization && (
                <p className="text-sm text-text-secondary/70 italic">
                  {text.romanization}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
