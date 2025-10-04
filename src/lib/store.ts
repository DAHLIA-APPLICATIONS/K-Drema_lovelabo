import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, DisplaySettings, ProficiencyLevel, Difficulty } from '@/types/content';

interface AppState {
  progress: UserProgress;
  settings: DisplaySettings;
  updateProgress: (progress: Partial<UserProgress>) => void;
  updateSettings: (settings: Partial<DisplaySettings>) => void;
  addCompletedEpisode: (episodeId: string) => void;
  addSeenNode: (episodeId: string, nodeId: string) => void;
  updateCharacterAffection: (characterId: string, change: number) => void;
  setLevel: (level: ProficiencyLevel) => void;
  setDifficulty: (difficulty: Difficulty) => void;
  setCharacter: (characterId: string | null) => void;
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  currentEpisodeId: null,
  completedEpisodes: [],
  seenNodes: {},
  characterAffection: {},
  selectedLevel: 'starter',
  selectedDifficulty: 'normal',
  selectedCharacter: 'jihun',
};

const initialSettings: DisplaySettings = {
  showJapanese: true,
  showRomanization: true,
  autoPlayTTS: false,
  playerName: '',
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      progress: initialProgress,
      settings: initialSettings,
      updateProgress: (progress) =>
        set((state) => ({
          progress: { ...state.progress, ...progress },
        })),
      updateSettings: (settings) =>
        set((state) => ({
          settings: { ...state.settings, ...settings },
        })),
      addCompletedEpisode: (episodeId) =>
        set((state) => {
          const uniqueEpisodes = state.progress.completedEpisodes.includes(episodeId)
            ? state.progress.completedEpisodes
            : [...state.progress.completedEpisodes, episodeId];
          return {
            progress: {
              ...state.progress,
              completedEpisodes: uniqueEpisodes,
            },
          };
        }),
      addSeenNode: (episodeId, nodeId) =>
        set((state) => {
          const currentSeenNodes = state.progress.seenNodes[episodeId] || [];
          const uniqueNodes = currentSeenNodes.includes(nodeId)
            ? currentSeenNodes
            : [...currentSeenNodes, nodeId];
          return {
            progress: {
              ...state.progress,
              seenNodes: {
                ...state.progress.seenNodes,
                [episodeId]: uniqueNodes,
              },
            },
          };
        }),
      updateCharacterAffection: (characterId, change) =>
        set((state) => {
          const currentAffectionMap = state.progress.characterAffection || {};
          const currentAffection = currentAffectionMap[characterId] || 50;
          const newAffection = Math.max(0, Math.min(100, currentAffection + change));
          return {
            progress: {
              ...state.progress,
              characterAffection: {
                ...currentAffectionMap,
                [characterId]: newAffection,
              },
            },
          };
        }),
      setLevel: (level) =>
        set((state) => ({
          progress: { ...state.progress, selectedLevel: level },
        })),
      setDifficulty: (difficulty) =>
        set((state) => ({
          progress: { ...state.progress, selectedDifficulty: difficulty },
        })),
      setCharacter: (characterId) =>
        set((state) => ({
          progress: { ...state.progress, selectedCharacter: characterId },
        })),
      resetProgress: () =>
        set({
          progress: initialProgress,
        }),
    }),
    {
      name: 'kdrama-love-labo-storage',
    }
  )
);
