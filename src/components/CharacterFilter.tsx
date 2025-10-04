'use client';

import { characters, type Character } from '@/content/characters';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface CharacterFilterProps {
  selectedCharacter: string | null;
  onChange: (characterId: string | null) => void;
  showAffection?: boolean;
  characterAffection?: Record<string, number>;
}

export function CharacterFilter({
  selectedCharacter,
  onChange,
  showAffection = false,
  characterAffection = {}
}: CharacterFilterProps) {
  const characterList = Object.values(characters);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characterList.map((character) => {
          const affection = characterAffection[character.id] || 50;
          return (
            <button
              key={character.id}
              onClick={() => onChange(character.id)}
              className={`relative overflow-hidden rounded-xl border-3 transition-all transform hover:scale-105 text-left ${
                selectedCharacter === character.id
                  ? 'border-primary shadow-xl ring-4 ring-primary/30'
                  : 'border-gray-200 shadow-md hover:border-primary'
              }`}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={character.imageUrl}
                  alt={character.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-bold">{character.name}</h3>
                    <span className="text-sm opacity-90">{character.nameKorean}</span>
                  </div>
                  <p className="text-xs opacity-90 mb-1">{character.age}歳 • {character.occupation}</p>
                  <p className="text-xs opacity-80 mb-2 line-clamp-2">{character.description}</p>

                  {showAffection && (
                    <div className="flex items-center gap-2 mt-2">
                      <Heart size={14} fill="currentColor" className="text-primary" />
                      <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${affection}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold">{affection}</span>
                    </div>
                  )}
                </div>

                {selectedCharacter === character.id && (
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    選択中
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
