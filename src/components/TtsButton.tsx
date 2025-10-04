'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';
import { speakKorean, stopSpeaking, isSpeaking } from '@/lib/tts';

interface TtsButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
}

export function TtsButton({ text, size = 'md' }: TtsButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeaking(isSpeaking());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      speakKorean(text);
      setSpeaking(true);
    }
  };

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} rounded-full bg-primary text-white hover:bg-opacity-90 transition-all flex items-center justify-center shadow-md hover:shadow-lg`}
      aria-label={speaking ? '音声を停止' : '音声を再生'}
    >
      {speaking ? (
        <VolumeX size={iconSizes[size]} />
      ) : (
        <Volume2 size={iconSizes[size]} />
      )}
    </button>
  );
}
