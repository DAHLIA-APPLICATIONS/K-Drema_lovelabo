export type ProficiencyLevel = 'starter' | 'a1' | 'a2';
export type Difficulty = 'easy' | 'normal' | 'hard';

export interface DialogueText {
  korean: string;
  japanese: string;
  romanization: string;
}

export interface QuizOption {
  id: string;
  text: DialogueText;
  isCorrect: boolean;
  affectionChange: number;
  nextNode?: string;
}

export interface Quiz {
  question: DialogueText;
  options: QuizOption[];
}

export interface DialogueNode {
  id: string;
  speaker: 'player' | 'character';
  text: DialogueText;
  quiz?: Quiz;
  nextNode?: string;
  characterEmotion?: 'neutral' | 'happy' | 'sad' | 'excited' | 'angry';
}

export interface Episode {
  id: string;
  title: string;
  level: ProficiencyLevel;
  difficulty: Difficulty;
  description: string;
  characterId: string;
  characterName: string;
  characterNameKorean: string;
  characterImage?: string;
  dialogueNodes: DialogueNode[];
  initialNode: string;
  requiredAffection?: number;
}

export interface UserProgress {
  currentEpisodeId: string | null;
  completedEpisodes: string[];
  seenNodes: Record<string, string[]>;
  characterAffection: Record<string, number>;
  selectedLevel: ProficiencyLevel;
  selectedDifficulty: Difficulty;
  selectedCharacter: string | null;
}

export interface DisplaySettings {
  showJapanese: boolean;
  showRomanization: boolean;
  autoPlayTTS: boolean;
  playerName: string;
}
