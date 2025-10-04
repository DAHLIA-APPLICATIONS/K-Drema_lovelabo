'use client';

import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { ArrowLeft, Volume2, Eye, Type, RotateCcw } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const { settings, progress, updateSettings, resetProgress } = useAppStore();

  const handleReset = () => {
    if (confirm('本当に進行状況をリセットしますか?この操作は取り消せません。')) {
      resetProgress();
      alert('進行状況がリセットされました');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>

          <h1 className="text-3xl font-bold text-text-primary mb-8">設定</h1>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">プロフィール</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="playerName" className="block text-sm font-medium text-text-primary mb-2">
                    エピソードで使用する名前
                  </label>
                  <input
                    id="playerName"
                    type="text"
                    value={settings.playerName}
                    onChange={(e) => updateSettings({ playerName: e.target.value })}
                    placeholder="名前を入力してください"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">表示設定</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">日本語訳を表示</p>
                      <p className="text-sm text-text-secondary">
                        韓国語の下に日本語訳を表示します
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      updateSettings({ showJapanese: !settings.showJapanese })
                    }
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      settings.showJapanese ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        settings.showJapanese ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">ローマ字を表示</p>
                      <p className="text-sm text-text-secondary">
                        韓国語の発音をローマ字で表示します
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      updateSettings({ showRomanization: !settings.showRomanization })
                    }
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      settings.showRomanization ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        settings.showRomanization ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-text-secondary" />
                    <div>
                      <p className="font-medium text-text-primary">自動音声再生</p>
                      <p className="text-sm text-text-secondary">
                        セリフが表示されたら自動で音声を再生します
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      updateSettings({ autoPlayTTS: !settings.autoPlayTTS })
                    }
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      settings.autoPlayTTS ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        settings.autoPlayTTS ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">進行状況</h2>
              <div className="bg-surface p-4 rounded-lg">
                <div className="mb-4">
                  <p className="text-sm text-text-secondary mb-2">完了エピソード</p>
                  <p className="text-2xl font-bold text-accent">
                    {progress.completedEpisodes.length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-2">キャラクター別好感度</p>
                  <div className="space-y-2">
                    {['jihun', 'minho', 'hyunwoo'].map((characterId) => {
                      const affection = progress.characterAffection?.[characterId] || 0;
                      const characterNames: Record<string, { korean: string; japanese: string }> = {
                        jihun: { korean: '지훈', japanese: 'ジフン' },
                        minho: { korean: '민호', japanese: 'ミンホ' },
                        hyunwoo: { korean: '현우', japanese: 'ヒョヌ' },
                      };
                      const names = characterNames[characterId];
                      return (
                        <div key={characterId} className="flex justify-between items-center">
                          <span className="text-sm text-text-primary">
                            {names.korean} / {names.japanese}
                          </span>
                          <span className="text-lg font-bold text-primary">{affection}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">データ管理</h2>
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <RotateCcw size={20} />
                進行状況をリセット
              </button>
              <p className="text-xs text-text-secondary mt-2 text-center">
                すべての進行状況と好感度がリセットされます
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
