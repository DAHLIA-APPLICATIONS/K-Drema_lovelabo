'use client';

import type { Difficulty } from '@/types/content';

interface DifficultyToggleProps {
  value: Difficulty;
  onChange: (difficulty: Difficulty) => void;
}

export function DifficultyToggle({ value, onChange }: DifficultyToggleProps) {
  const options: { value: Difficulty; label: string; color: string }[] = [
    { value: 'easy', label: '簡単', color: 'bg-green-500' },
    { value: 'normal', label: '普通', color: 'bg-blue-500' },
    { value: 'hard', label: '難しい', color: 'bg-red-500' },
  ];

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            value === option.value
              ? `${option.color} text-white shadow-md`
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
