'use client';

import { User } from 'lucide-react';

interface CharacterAvatarProps {
  characterName: string;
  emotion?: 'neutral' | 'happy' | 'sad' | 'excited' | 'angry';
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CharacterAvatar({
  characterName,
  emotion = 'neutral',
  imageUrl,
  size = 'md'
}: CharacterAvatarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const getEmotionBorder = () => {
    switch (emotion) {
      case 'happy':
      case 'excited':
        return 'border-primary';
      case 'sad':
        return 'border-gray-400';
      case 'angry':
        return 'border-red-500';
      default:
        return 'border-secondary';
    }
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full border-4 ${getEmotionBorder()} overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={characterName}
          className="w-full h-full object-cover"
        />
      ) : (
        <User className="w-2/3 h-2/3 text-secondary" />
      )}
    </div>
  );
}
