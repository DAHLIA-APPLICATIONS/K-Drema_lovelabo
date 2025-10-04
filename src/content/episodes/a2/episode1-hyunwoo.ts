import type { Episode } from '@/types/content';

export const a2Episode1Hyunwoo: Episode = {
  id: 'a2-1-hyunwoo',
  title: '週末の約束',
  level: 'a2',
  difficulty: 'hard',
  description: '週末の予定について話し、デートの約束をするかもしれません。',
  characterId: 'hyunwoo',
  characterName: 'ヒョヌ',
  characterNameKorean: '현우',
  characterImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23ec4899"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="bold"%3EH%3C/text%3E%3C/svg%3E',
  requiredAffection: 55,
  dialogueNodes: [
    {
      id: 'start',
      speaker: 'character',
      text: {
        korean: '이번 주말에 시간 있으세요?',
        japanese: '今週末、時間ありますか?',
        romanization: 'Ibeon jumare sigan isseuseyo?',
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
              korean: '네, 있어요. 왜요?',
              japanese: 'はい、あります。なぜですか?',
              romanization: 'Ne, isseoyo. Waeyo?',
            },
            isCorrect: true,
            affectionChange: 7,
            nextNode: 'response-excited',
          },
          {
            id: 'option-2',
            text: {
              korean: '글쎄요... 아직 모르겠어요',
              japanese: 'さあ...まだ分かりません',
              romanization: 'Geulsseyo... Ajik moreugesseoyo',
            },
            isCorrect: true,
            affectionChange: -3,
            nextNode: 'response-disappointed',
          },
          {
            id: 'option-3',
            text: {
              korean: '아니요, 바빠요',
              japanese: 'いいえ、忙しいです',
              romanization: 'Aniyo, bappayo',
            },
            isCorrect: true,
            affectionChange: -5,
            nextNode: 'response-sad',
          },
        ],
      },
    },
    {
      id: 'response-excited',
      speaker: 'character',
      text: {
        korean: '같이 영화 보러 갈래요? 새로운 영화가 나왔어요.',
        japanese: '一緒に映画を見に行きませんか?新しい映画が公開されました。',
        romanization: 'Gachi yeonghwa boreo gallaeyo? Saeroun yeonghwaga nawasseoyo.',
      },
      characterEmotion: 'excited',
      nextNode: 'movie-choice',
    },
    {
      id: 'response-disappointed',
      speaker: 'character',
      text: {
        korean: '아... 그럼 계획이 생기면 연락 주세요.',
        japanese: 'あ...じゃあ、予定ができたら連絡ください。',
        romanization: 'A... Geureom gyehoegi saenggimyeon yeonrak juseyo.',
      },
      characterEmotion: 'sad',
      nextNode: 'end-neutral',
    },
    {
      id: 'response-sad',
      speaker: 'character',
      text: {
        korean: '그렇군요... 알겠어요. 다음 기회에요.',
        japanese: 'そうですか...分かりました。次の機会に。',
        romanization: 'Geureongunnyo... Algesseoyo. Daeum gihoeeyo.',
      },
      characterEmotion: 'sad',
      nextNode: 'end-sad',
    },
    {
      id: 'movie-choice',
      speaker: 'player',
      text: {
        korean: '',
        japanese: '',
        romanization: '',
      },
      quiz: {
        question: {
          korean: 'どう返事しますか?',
          japanese: 'どう返事しますか?',
          romanization: 'Dou henji shimasu ka?',
        },
        options: [
          {
            id: 'option-1',
            text: {
              korean: '좋아요! 몇 시에 만날까요?',
              japanese: 'いいですね!何時に会いましょうか?',
              romanization: 'Joayo! Myeot sie mannalkayo?',
            },
            isCorrect: true,
            affectionChange: 10,
            nextNode: 'plan-time',
          },
          {
            id: 'option-2',
            text: {
              korean: '무슨 영화예요?',
              japanese: 'どんな映画ですか?',
              romanization: 'Museun yeonghwayeyo?',
            },
            isCorrect: true,
            affectionChange: 5,
            nextNode: 'explain-movie',
          },
          {
            id: 'option-3',
            text: {
              korean: '영화는 별로 안 좋아해요',
              japanese: '映画はあまり好きじゃないです',
              romanization: 'Yeonghwaneun byeollo an joahaeyo',
            },
            isCorrect: false,
            affectionChange: -8,
            nextNode: 'response-rejected',
          },
        ],
      },
    },
    {
      id: 'plan-time',
      speaker: 'character',
      text: {
        korean: '토요일 오후 2시에 극장 앞에서 만나요!',
        japanese: '土曜日の午後2時に劇場の前で会いましょう!',
        romanization: 'Toyoil ohu dusie geukjang apeseo mannayo!',
      },
      characterEmotion: 'excited',
      nextNode: 'end-happy',
    },
    {
      id: 'explain-movie',
      speaker: 'character',
      text: {
        korean: '로맨틱 코미디예요. 정말 재미있대요!',
        japanese: 'ロマンティック・コメディです。とても面白いそうです!',
        romanization: 'Romaentik komidiyeyo. Jeongmal jaemiitdaeyo!',
      },
      characterEmotion: 'happy',
      nextNode: 'second-chance',
    },
    {
      id: 'second-chance',
      speaker: 'player',
      text: {
        korean: '',
        japanese: '',
        romanization: '',
      },
      quiz: {
        question: {
          korean: '最終決断は?',
          japanese: '最終決断は?',
          romanization: 'Saishuuketsudan wa?',
        },
        options: [
          {
            id: 'option-1',
            text: {
              korean: '그럼 같이 봐요!',
              japanese: 'じゃあ一緒に見ましょう!',
              romanization: 'Geureom gachi bwayo!',
            },
            isCorrect: true,
            affectionChange: 8,
            nextNode: 'plan-time',
          },
          {
            id: 'option-2',
            text: {
              korean: '다시 생각해 볼게요',
              japanese: 'もう一度考えてみます',
              romanization: 'Dasi saenggakhae bolgeyo',
            },
            isCorrect: false,
            affectionChange: -4,
            nextNode: 'end-neutral',
          },
        ],
      },
    },
    {
      id: 'response-rejected',
      speaker: 'character',
      text: {
        korean: '아... 그렇군요. 괜찮아요.',
        japanese: 'あ...そうですか。大丈夫です。',
        romanization: 'A... Geureongunnyo. Gwaenchanayo.',
      },
      characterEmotion: 'sad',
      nextNode: 'end-rejected',
    },
    {
      id: 'end-happy',
      speaker: 'character',
      text: {
        korean: '기대돼요! 그럼 토요일에 봐요!',
        japanese: '楽しみです!じゃあ土曜日に!',
        romanization: 'Gidaedwaeyo! Geureom toyoire bwayo!',
      },
      characterEmotion: 'excited',
    },
    {
      id: 'end-neutral',
      speaker: 'character',
      text: {
        korean: '알겠어요. 연락 기다릴게요.',
        japanese: '分かりました。連絡待ってます。',
        romanization: 'Algesseoyo. Yeonrak gidarilgeyo.',
      },
      characterEmotion: 'neutral',
    },
    {
      id: 'end-sad',
      speaker: 'character',
      text: {
        korean: '다음에 또 물어볼게요.',
        japanese: 'また今度聞きますね。',
        romanization: 'Daeume tto mureobolgeyo.',
      },
      characterEmotion: 'sad',
    },
    {
      id: 'end-rejected',
      speaker: 'character',
      text: {
        korean: '다음에 봐요...',
        japanese: 'また今度...',
        romanization: 'Daeume bwayo...',
      },
      characterEmotion: 'sad',
    },
  ],
  initialNode: 'start',
};
