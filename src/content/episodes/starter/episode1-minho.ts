import type { Episode } from '@/types/content';

export const starterEpisode1Minho: Episode = {
  id: 'starter-1-minho',
  title: '初めての出会い',
  level: 'starter',
  difficulty: 'easy',
  description: 'オフィスで初めて出会う二人。簡単な挨拶から始まります。',
  characterId: 'minho',
  characterName: 'ミンホ',
  characterNameKorean: '민호',
  characterImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%233b82f6"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold"%3EM%3C/text%3E%3C/svg%3E',
  dialogueNodes: [
    {
      id: 'start',
      speaker: 'character',
      text: {
        korean: '안녕하세요!',
        japanese: 'こんにちは!',
        romanization: 'Annyeonghaseyo!',
      },
      characterEmotion: 'neutral',
      nextNode: 'player-response-1',
    },
    {
      id: 'player-response-1',
      speaker: 'player',
      text: {
        korean: '',
        japanese: '何と答えますか?',
        romanization: '',
      },
      quiz: {
        question: {
          korean: '何と答えますか?',
          japanese: '何と答えますか?',
          romanization: 'Nani to kotaemasu ka?',
        },
        options: [
          {
            id: 'option-1',
            text: {
              korean: '안녕하세요!',
              japanese: 'こんにちは!',
              romanization: 'Annyeonghaseyo!',
            },
            isCorrect: true,
            affectionChange: 5,
            nextNode: 'response-good',
          },
          {
            id: 'option-2',
            text: {
              korean: '안녕히 가세요',
              japanese: 'さようなら',
              romanization: 'Annyeonghi gaseyo',
            },
            isCorrect: false,
            affectionChange: -3,
            nextNode: 'response-confused',
          },
          {
            id: 'option-3',
            text: {
              korean: '네, 감사합니다',
              japanese: 'はい、ありがとうございます',
              romanization: 'Ne, gamsahamnida',
            },
            isCorrect: false,
            affectionChange: -2,
            nextNode: 'response-confused',
          },
        ],
      },
    },
    {
      id: 'response-good',
      speaker: 'character',
      text: {
        korean: '만나서 반가워요!',
        japanese: '会えて嬉しいです!',
        romanization: 'Mannaseo bangawoyo!',
      },
      characterEmotion: 'happy',
      nextNode: 'ask-name',
    },
    {
      id: 'response-confused',
      speaker: 'character',
      text: {
        korean: '음... 처음 만나서 그런데...',
        japanese: 'えっと...初めて会ったんですが...',
        romanization: 'Eum... Cheoeum mannaseo geureonde...',
      },
      characterEmotion: 'neutral',
      nextNode: 'ask-name',
    },
    {
      id: 'ask-name',
      speaker: 'character',
      text: {
        korean: '이름이 뭐예요?',
        japanese: 'お名前は何ですか?',
        romanization: 'Ireumi mwoyeyo?',
      },
      characterEmotion: 'neutral',
      nextNode: 'player-name-response',
    },
    {
      id: 'player-name-response',
      speaker: 'player',
      text: {
        korean: '',
        japanese: '名前を言いましょう',
        romanization: '',
      },
      quiz: {
        question: {
          korean: '自己紹介をしましょう',
          japanese: '自己紹介をしましょう',
          romanization: 'Jiko shoukai wo shimashou',
        },
        options: [
          {
            id: 'option-1',
            text: {
              korean: '저는 [이름]이에요',
              japanese: '私は[名前]です',
              romanization: 'Jeoneun [ireum]ieyo',
            },
            isCorrect: true,
            affectionChange: 5,
            nextNode: 'nice-to-meet',
          },
          {
            id: 'option-2',
            text: {
              korean: '네, 알겠습니다',
              japanese: 'はい、分かりました',
              romanization: 'Ne, algesseumnida',
            },
            isCorrect: false,
            affectionChange: -2,
            nextNode: 'awkward-response',
          },
        ],
      },
    },
    {
      id: 'nice-to-meet',
      speaker: 'character',
      text: {
        korean: '좋은 이름이네요! 저는 민호예요.',
        japanese: '素敵な名前ですね!私はミンホです。',
        romanization: 'Joeun ireumineyo! Jeoneun minhoyeyo.',
      },
      characterEmotion: 'happy',
      nextNode: 'end',
    },
    {
      id: 'awkward-response',
      speaker: 'character',
      text: {
        korean: '어... 이름을 물어봤는데요?',
        japanese: 'えっと...名前を聞いたんですが?',
        romanization: 'Eo... Ireumeul mureobwanneundeyo?',
      },
      characterEmotion: 'neutral',
      nextNode: 'end',
    },
    {
      id: 'end',
      speaker: 'character',
      text: {
        korean: '또 만나요!',
        japanese: 'また会いましょう!',
        romanization: 'Tto mannayo!',
      },
      characterEmotion: 'neutral',
    },
  ],
  initialNode: 'start',
};
