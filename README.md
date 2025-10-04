# K-Drama Love Labo

韓国ドラマのような恋愛要素を取り入れた楽しい韓国語学習アプリ

## 概要

K-Drama Love Laboは、韓国語学習と恋愛シミュレーションを組み合わせた革新的な学習アプリです。キャラクターとの対話を通じて韓国語を学び、正しい答えを選ぶことで好感度を上げていきます。

## 主な機能

- **魅力的なキャラクター**: 3人の個性豊かな韓国人イケメンキャラクター
- **キャラクターアバター**: 感情によって変化するビジュアル表現
- **レベル別学習**: Starter、A1、A2の3つのレベル
- **難易度設定**: 簡単・普通・難しいの3段階
- **インタラクティブな対話**: 分岐するストーリーと選択肢
- **好感度システム**: 正解で好感度アップ、不正解で減少
- **音声読み上げ**: 韓国語のネイティブ発音をTTSで学習
- **日本語訳・ローマ字表示**: 学習をサポートする表示機能
- **進捗管理**: 完了したエピソードと見たノードを記録

## 技術スタック

- **フレームワーク**: Next.js 13 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: Zustand
- **ストレージ**: LocalStorage
- **TTS**: Web Speech API

## セットアップ

### 必要要件

- Node.js 20.x

### インストール

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## プロジェクト構造

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # ホーム画面
│   │   ├── play/              # エピソード選択画面
│   │   ├── episode/[id]/      # エピソードプレイ画面
│   │   └── settings/          # 設定画面
│   ├── components/            # Reactコンポーネント
│   │   ├── AffectionBar.tsx   # 好感度バー
│   │   ├── DialogueBox.tsx    # 対話ボックス
│   │   ├── QuizPanel.tsx      # クイズパネル
│   │   ├── EpisodePlayer.tsx  # エピソードプレイヤー
│   │   ├── EpisodeList.tsx    # エピソードリスト
│   │   ├── LevelPicker.tsx    # レベル選択
│   │   ├── DifficultyToggle.tsx # 難易度トグル
│   │   └── TtsButton.tsx      # TTS音声ボタン
│   ├── lib/                   # ユーティリティ
│   │   ├── store.ts           # Zustandストア
│   │   ├── tts.ts             # TTS機能
│   │   └── srs.ts             # SRS（間隔反復学習）
│   ├── types/                 # TypeScript型定義
│   │   └── content.ts         # コンテンツ型定義
│   ├── content/               # エピソードコンテンツ
│   │   └── episodes/
│   │       ├── index.ts       # エピソード管理
│   │       ├── starter/       # スターターレベル
│   │       ├── a1/            # A1レベル
│   │       └── a2/            # A2レベル
│   └── docs/                  # ドキュメント
│       └── roadmap.md         # 今後の開発計画
├── app/
│   ├── globals.css            # グローバルスタイル
│   └── layout.tsx             # ルートレイアウト
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## カスタマイズ

### 新しいエピソードの追加

1. `src/content/episodes/[level]/` に新しいエピソードファイルを作成
2. `src/content/episodes/index.ts` にエピソードをインポート
3. `allEpisodes` 配列に追加

### テーマカラーの変更

`tailwind.config.ts` で以下のカラーを変更:

- `primary`: メインカラー（デフォルト: #FF4D6D）
- `secondary`: セカンダリカラー（デフォルト: #1F2937）
- `accent`: アクセントカラー（デフォルト: #FFD166）

## デプロイ

### Vercel

```bash
# Vercelにデプロイ
vercel
```

## ライセンス

MIT

## 今後の計画

詳細は `src/docs/roadmap.md` をご覧ください。

主な予定:
- データベース統合（Supabase）
- ユーザー認証システム
- 語彙管理とSRS機能の拡充
- アチーブメントシステム
- ソーシャル機能
