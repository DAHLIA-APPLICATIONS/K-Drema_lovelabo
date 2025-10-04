'use client';

import type { ProficiencyLevel } from '@/types/content';

interface LevelPickerProps {
  value: ProficiencyLevel;
  onChange: (level: ProficiencyLevel) => void;
}

export function LevelPicker({ value, onChange }: LevelPickerProps) {
  const levels: { value: ProficiencyLevel; label: string; description: string }[] = [
    { value: 'starter', label: 'スターター', description: '超初心者向け' },
    { value: 'a1', label: 'A1レベル', description: '初心者向け' },
    { value: 'a2', label: 'A2レベル', description: '初級者向け' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {levels.map((level) => (
        <button
          key={level.value}
          onClick={() => onChange(level.value)}
          className={`p-6 rounded-xl border-2 transition-all ${
            value === level.value
              ? 'border-primary bg-primary bg-opacity-5 shadow-lg'
              : 'border-gray-200 bg-white hover:border-primary hover:shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-text-primary mb-1">{level.label}</h3>
          <p className="text-sm text-text-secondary">{level.description}</p>
        </button>
      ))}
    </div>
  );
}
