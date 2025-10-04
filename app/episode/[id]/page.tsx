'use client';

import { useParams, useRouter } from 'next/navigation';
import { EpisodePlayer } from '@/components/EpisodePlayer';
import { getEpisodeById } from '@/content/episodes';

export default function EpisodePage() {
  const params = useParams();
  const router = useRouter();
  const episodeId = params.id as string;

  const episode = getEpisodeById(episodeId);

  if (!episode) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            エピソードが見つかりません
          </h1>
          <button
            onClick={() => router.push('/play')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90"
          >
            エピソード選択に戻る
          </button>
        </div>
      </div>
    );
  }

  return <EpisodePlayer episode={episode} />;
}
