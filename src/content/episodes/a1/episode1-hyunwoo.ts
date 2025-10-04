import type { Episode } from '@/types/content';

export const a1Episode1Hyunwoo: Episode = {
  id: 'a1-1-hyunwoo',
  title: 'カフェでの会話',
  level: 'a1',
  difficulty: 'normal',
  description: 'カフェで注文をしながら、もっと深く話す機会が訪れます。',
  characterId: 'hyunwoo',
  characterName: 'ヒョヌ',
  characterNameKorean: '현우',
  characterImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23ec4899"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold"%3EH%3C/text%3E%3C/svg%3E',
  dialogueNodes: [
    {
      id: 'start',
      speaker: 'character',
      text: {
        korean: '여기 자주 오세요?',
        japanese: 'ここによく来ますか?',
        romanization: 'Yeogi jaju oseyo?',
      },
      characterEmotion: 'neutral',
      nextNode: 'player-response-1',
    },
    {
      id: 'player-response-1',
      speaker: 'player',
      text: {
        korean: '',
        japanese: '',
        romanization: '',
      },
      quiz: {
        question: {
          korean: 'どう答えますか?',
          japanese: 'どう答えますか?',
          romanization: 'Dou kotaemasu ka?',
        },
        options: [
          {
            id: 'option-1',
            text: {
              korean: '네, 자주 와요',
              japanese: 'はい、よく来ます',
              romanization: 'Ne, jaju wayo',
            },
            isCorrect: true,
            affectionChange: 5,
            nextNode: 'response-interested',
          },
          {
            id: 'option-2',
            text: {
              korean: '아니요, 처음이에요',
              japanese: 'いいえ、初めてです',
              romanization: 'Aniyo, cheoumieyo',
            },
            isCorrect: true,
            affectionChange: 4,
            nextNode: 'response-welcome',
          },
          {
            id: 'option-3',
            text: {
              korean: '잘 모르겠어요',
              japanese: 'よく分かりません',
              romanization: 'Jal moreugesseoyo',
            },
            isCorrect: false,
            affectionChange: -2,
            nextNode: 'response-confused',
          },
        ],
      },
    },
    {
      id: 'response-interested',
      speaker: 'character',
      text: {
        korean: '저도요! 여기 커피가 정말 맛있어요.',
        japanese: '私もです!ここのコーヒーは本当に美味しいです。',
        romanization: 'Jeodoyo! Yeogi keopiga jeongmal masisseoyo.',
      },
      characterEmotion: 'happy',
      nextNode: 'ask-drink',
    },
    {
      id: 'response-welcome',
      speaker: 'character',
      text: {
        korean: '그래요? 좋은 곳을 찾았네요!',
        japanese: 'そうですか?いい場所を見つけましたね!',
        romanization: 'Geuraeyo? Joeun goseul chajanneyo!',
      },
      characterEmotion: 'excited',
      nextNode: 'ask-drink',
    },
    {
      id: 'response-confused',
      speaker: 'character',
      text: {
        korean: '아... 그렇군요.',
        japanese: 'あ...そうですか。',
        romanization: 'A... Geureongunnyo.',
      },
      characterEmotion: 'neutral',
      nextNode: 'ask-drink',
    },
    {
      id: 'ask-drink',
      speaker: 'character',
      text: {
        korean: '뭐 마실래요?',
        japanese: '何を飲みますか?',
        romanization: 'Mwo masillaeyo?',
      },
      characterEmotion: 'neutral',
      nextNode: 'player-drink-choice',
    },
    {
      id: 'player-drink-choice',
      speaker: 'player',
      text: {
        korean: '',
        japanese: '',
        romanization: '',
      },
      quiz: {
        question: {
          korean: '何を注文しますか?',
          japanese: '何を注文しますか?',
          romanization: 'Nani wo chuumon shimasu ka?',
        },
        options: [
          {
            id: 'option-1',
            text: {
              korean: '아메리카노 주세요',
              japanese: 'アメリカーノをください',
              romanization: 'Amerikano juseyo',
            },
            isCorrect: true,
            affectionChange: 3,
            nextNode: 'good-choice',
          },
          {
            id: 'option-2',
            text: {
              korean: '카페라테 한 잔 주세요',
              japanese: 'カフェラテを一杯ください',
              romanization: 'Kapelatte han jan juseyo',
            },
            isCorrect: true,
            affectionChange: 4,
            nextNode: 'sweet-choice',
          },
          {
            id: 'option-3',
            text: {
              korean: '물 주세요',
              japanese: '水をください',
              romanization: 'Mul juseyo',
            },
            isCorrect: true,
            affectionChange: 2,
            nextNode: 'simple-choice',
          },
        ],
      },
    },
    {
      id: 'good-choice',
      speaker: 'character',
      text: {
        korean: '저도 아메리카노 좋아해요!',
        japanese: '私もアメリカーノが好きです!',
        romanization: 'Jeodo amerikano joahaeyo!',
      },
      characterEmotion: 'excited',
      nextNode: 'end',
    },
    {
      id: 'sweet-choice',
      speaker: 'character',
      text: {
        korean: '단 걸 좋아하시는군요. 좋은 선택이에요!',
        japanese: '甘いものが好きなんですね。いい選択です!',
        romanization: 'Dan geol joahashineungunnyo. Joeun seontaegieyo!',
      },
      characterEmotion: 'happy',
      nextNode: 'end',
    },
    {
      id: 'simple-choice',
      speaker: 'character',
      text: {
        korean: '건강을 생각하시는군요!',
        japanese: '健康を考えているんですね!',
        romanization: 'Geongangeul saenggakashineungunnyo!',
      },
      characterEmotion: 'neutral',
      nextNode: 'end',
    },
    {
      id: 'end',
      speaker: 'character',
      text: {
        korean: '다음에 또 여기서 만나요!',
        japanese: '次もここで会いましょう!',
        romanization: 'Daeume tto yeogiseo mannayo!',
      },
      characterEmotion: 'happy',
    },
  ],
  initialNode: 'start',
};
