'use client';

import { CharacterAvatar } from './CharacterAvatar';
import { characters } from '@/content/characters';

interface CharacterShowcaseProps {
  selectedCharacter: string | null;
  onSelectCharacter: (characterId: string | null) => void;
}

export function CharacterShowcase({ selectedCharacter, onSelectCharacter }: CharacterShowcaseProps) {
  const characterList = Object.values(characters);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
        魅力的なキャラクター
      </h2>
      <p className="text-text-secondary text-center mb-6">
        素敵な韓国人男性と一緒に韓国語を学びましょう
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {characterList.map((character) => (
          <button
            key={character.id}
            onClick={() => onSelectCharacter(character.id)}
            className={`bg-surface rounded-xl p-6 text-center transition-all flex flex-col ${
              selectedCharacter === character.id
                ? 'ring-4 ring-primary shadow-lg'
                : 'hover:shadow-md hover:ring-2 hover:ring-primary/50'
            }`}
          >
            <div className="mb-4 flex justify-center">
              <CharacterAvatar
                characterName={character.name}
                imageUrl={character.imageUrl}
                size="xl"
              />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">
              {character.name} <span className="text-sm text-text-secondary">{character.nameKorean}</span>
            </h3>
            <p className="text-sm text-primary font-medium mb-2">
              {character.age}歳・{character.occupation}
            </p>
            <p className="text-sm text-text-secondary mb-3">
              {character.personality}
            </p>
            <p className="text-xs text-text-secondary min-h-[2.5rem]">
              {character.description}
            </p>
            {selectedCharacter === character.id && (
              <div className="mt-3 text-xs font-bold text-primary">
                ✓ 選択中
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
