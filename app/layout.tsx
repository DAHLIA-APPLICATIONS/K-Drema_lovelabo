import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K-Drama Love Labo - 韓国語学習アプリ',
  description: '韓国ドラマのような恋愛要素を取り入れた楽しい韓国語学習アプリ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
