export interface Character {
  id: string;
  name: string;
  nameKorean: string;
  age: number;
  occupation: string;
  personality: string;
  imageUrl: string;
  description: string;
}

export const characters: Record<string, Character> = {
  jihun: {
    id: 'jihun',
    name: 'ジフン',
    nameKorean: '지훈',
    age: 26,
    occupation: 'カフェオーナー',
    personality: '優しくて親切、いつも笑顔で明るい',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%2384cc16"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold"%3EJ%3C/text%3E%3C/svg%3E',
    description: 'ソウルでカフェを経営する26歳。コーヒーと人との出会いが大好き。',
  },
  minho: {
    id: 'minho',
    name: 'ミンホ',
    nameKorean: '민호',
    age: 24,
    occupation: 'K-POPアイドル',
    personality: 'クールでカリスマ的、でも実は寂しがり屋',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%233b82f6"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
    description: '人気K-POPグループのメインボーカル。ステージでは堂々としているが、素顔は意外と恥ずかしがり屋。',
  },
  hyunwoo: {
    id: 'hyunwoo',
    name: 'ヒョヌ',
    nameKorean: '현우',
    age: 25,
    occupation: '大学院生',
    personality: '知的で落ち着いている、ロマンチック',
    imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23ec4899"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold"%3EH%3C/text%3E%3C/svg%3E',
    description: '言語学を専攻する大学院生。本と音楽が好きな25歳。',
  },
};

export const getCharacter = (id: string): Character | undefined => {
  return characters[id];
};
