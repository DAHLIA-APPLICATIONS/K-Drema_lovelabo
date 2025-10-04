'use client';

import { useState } from 'react';
import { TtsButton } from './TtsButton';
import { useAppStore } from '@/lib/store';
import { speakKorean } from '@/lib/tts';
import type { Quiz, QuizOption } from '@/types/content';

interface QuizPanelProps {
  quiz: Quiz;
  showJapanese: boolean;
  showRomanization: boolean;
  onAnswer: (option: QuizOption) => void;
}

export function QuizPanel({ quiz, showJapanese, showRomanization, onAnswer }: QuizPanelProps) {
  const { settings } = useAppStore();
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const replaceNamePlaceholder = (text: string) => {
    const playerName = settings.playerName || '[名前]';
    return text.replace(/\[이름\]/g, playerName).replace(/\[名前\]/g, playerName);
  };

  const handleSelect = (option: QuizOption) => {
    if (isAnswered) return;
    setSelectedOption(option);

    if (settings.autoPlayTTS && option.text.korean) {
      speakKorean(replaceNamePlaceholder(option.text.korean));
    }
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    setIsAnswered(true);

    setTimeout(() => {
      onAnswer(selectedOption);
      setSelectedOption(null);
      setIsAnswered(false);
    }, 1500);
  };

  const getOptionStyle = (optionId: string, isCorrect: boolean) => {
    if (selectedOption?.id === optionId && !isAnswered) {
      return 'bg-primary/10 border-primary ring-2 ring-primary';
    }
    if (!isAnswered || selectedOption?.id !== optionId) {
      return 'bg-white hover:bg-surface border-gray-200 hover:border-primary';
    }
    return isCorrect
      ? 'bg-green-100 border-green-500'
      : 'bg-red-100 border-red-500';
  };

  return (
    <div className="bg-surface p-6 rounded-xl border-2 border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-text-primary mb-2">{replaceNamePlaceholder(quiz.question.korean)}</h3>
        {showJapanese && (
          <p className="text-sm text-text-secondary">{replaceNamePlaceholder(quiz.question.japanese)}</p>
        )}
      </div>

      <div className="space-y-3">
        {quiz.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            disabled={isAnswered}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${getOptionStyle(
              option.id,
              option.isCorrect
            )} ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-text-primary">{replaceNamePlaceholder(option.text.korean)}</p>
                  {!settings.autoPlayTTS && option.text.korean && <TtsButton text={replaceNamePlaceholder(option.text.korean)} size="sm" />}
                </div>
                {showJapanese && option.text.japanese && (
                  <p className="text-sm text-text-secondary">{replaceNamePlaceholder(option.text.japanese)}</p>
                )}
                {showRomanization && option.text.romanization && (
                  <p className="text-xs text-text-secondary italic mt-1">
                    {option.text.romanization}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedOption && !isAnswered && (
        <div className="mt-6 text-center">
          <button
            onClick={handleConfirm}
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl font-bold text-lg"
          >
            この回答で決定
          </button>
        </div>
      )}
    </div>
  );
}
