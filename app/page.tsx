'use client';

import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { LevelPicker } from '@/components/LevelPicker';
import { CharacterShowcase } from '@/components/CharacterShowcase';
import { CharacterFilter } from '@/components/CharacterFilter';
import { Heart, Settings, Play } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const { progress, setLevel, setCharacter } = useAppStore();

  const handleStart = () => {
    router.push('/play');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-surface to-accent/10">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => router.push('/settings')}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Settings size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-primary fill-current" />
            <h1 className="text-5xl font-bold text-text-primary">K-Drama Love Labo</h1>
          </div>
          <p className="text-xl text-text-secondary">
            恋愛しながら韓国語を学ぼう
          </p>
        </div>

        <div className="mb-8">
          <CharacterShowcase
            selectedCharacter={progress.selectedCharacter}
            onSelectCharacter={setCharacter}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            レベルを選択
          </h2>
          <LevelPicker
            value={progress.selectedLevel}
            onChange={setLevel}
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleStart}
            className="px-12 py-4 bg-primary text-white rounded-xl text-xl font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            <Play size={28} fill="currentColor" />
            エピソードを選ぶ
          </button>
        </div>

        <div className="mt-12 text-center text-text-secondary text-sm">
          <p>韓国語を学びながら、キャラクターとの関係を深めましょう</p>
          <p className="mt-2">正しい答えを選んで好感度を上げよう!</p>
        </div>
      </div>
    </div>
  );
}
