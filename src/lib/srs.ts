export interface VocabularyItem {
  korean: string;
  japanese: string;
  romanization: string;
  lastReviewed: number;
  nextReview: number;
  interval: number;
  easeFactor: number;
  repetitions: number;
}

export const calculateNextReview = (
  item: VocabularyItem,
  quality: number
): VocabularyItem => {
  const now = Date.now();
  let { interval, easeFactor, repetitions } = item;

  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  const nextReview = now + interval * 24 * 60 * 60 * 1000;

  return {
    ...item,
    lastReviewed: now,
    nextReview,
    interval,
    easeFactor,
    repetitions,
  };
};

export const initializeVocabularyItem = (
  korean: string,
  japanese: string,
  romanization: string
): VocabularyItem => {
  return {
    korean,
    japanese,
    romanization,
    lastReviewed: 0,
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
  };
};
