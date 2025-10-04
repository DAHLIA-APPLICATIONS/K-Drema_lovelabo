import { starterEpisode1 } from './starter/episode1';
import { starterEpisode1Minho } from './starter/episode1-minho';
import { starterEpisode1Hyunwoo } from './starter/episode1-hyunwoo';
import { a1Episode1 } from './a1/episode1';
import { a1Episode1Minho } from './a1/episode1-minho';
import { a1Episode1Hyunwoo } from './a1/episode1-hyunwoo';
import { a2Episode1Jihun } from './a2/episode1-jihun';
import { a2Episode1Minho } from './a2/episode1-minho';
import { a2Episode1Hyunwoo } from './a2/episode1-hyunwoo';
import type { Episode, ProficiencyLevel, Difficulty } from '@/types/content';

export const allEpisodes: Episode[] = [
  starterEpisode1,
  starterEpisode1Minho,
  starterEpisode1Hyunwoo,
  a1Episode1,
  a1Episode1Minho,
  a1Episode1Hyunwoo,
  a2Episode1Jihun,
  a2Episode1Minho,
  a2Episode1Hyunwoo,
];

export const getEpisodeById = (id: string): Episode | undefined => {
  return allEpisodes.find((ep) => ep.id === id);
};

export const getEpisodesByLevel = (level: ProficiencyLevel): Episode[] => {
  return allEpisodes.filter((ep) => ep.level === level);
};

export const getEpisodesByLevelAndDifficulty = (
  level: ProficiencyLevel,
  difficulty: Difficulty
): Episode[] => {
  return allEpisodes.filter(
    (ep) => ep.level === level && ep.difficulty === difficulty
  );
};

export const getAvailableEpisodes = (
  level: ProficiencyLevel,
  difficulty: Difficulty,
  characterAffection: Record<string, number>,
  selectedCharacter: string | null = null
): Episode[] => {
  return allEpisodes.filter(
    (ep) =>
      ep.level === level &&
      ep.difficulty === difficulty &&
      (!selectedCharacter || ep.characterId === selectedCharacter) &&
      (!ep.requiredAffection || (characterAffection[ep.characterId] || 50) >= ep.requiredAffection)
  );
};
