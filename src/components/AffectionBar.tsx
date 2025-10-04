'use client';

import { Heart } from 'lucide-react';

interface AffectionBarProps {
  affection: number;
  showLabel?: boolean;
}

export function AffectionBar({ affection, showLabel = true }: AffectionBarProps) {
  const getColor = () => {
    if (affection >= 80) return 'bg-primary';
    if (affection >= 50) return 'bg-accent';
    return 'bg-gray-400';
  };

  const getHeartColor = () => {
    if (affection >= 80) return 'text-primary';
    if (affection >= 50) return 'text-accent';
    return 'text-gray-400';
  };

  return (
    <div className="w-full max-w-md">
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-secondary">好感度</span>
          <div className="flex items-center gap-1">
            <Heart className={`w-4 h-4 ${getHeartColor()} fill-current`} />
            <span className="text-sm font-bold text-text-primary">{affection}/100</span>
          </div>
        </div>
      )}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-500 ease-out`}
          style={{ width: `${affection}%` }}
        />
      </div>
    </div>
  );
}
