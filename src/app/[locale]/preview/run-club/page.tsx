import React from 'react';
import { Metadata } from 'next';
import RunClubLP from '@/components/ctc/archive/RunClubLP';

// 非公開プレビュー。旧 Chiang Mai Run Club LP のデザイン保管用。
// 検索エンジン・AIクローラーからは除外し、sitemap にも載せない。
export const metadata: Metadata = {
  title: '【非公開】Chiang Mai Run Club LP プレビュー',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function RunClubPreviewPage() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: '#111827',
          color: '#fff',
          padding: '10px 16px',
          fontSize: '12px',
          textAlign: 'center',
        }}
      >
        非公開プレビュー（noindex）— 旧ランクラブLPの保管ページです。公開サイトからはリンクされていません。
      </div>
      <RunClubLP />
    </>
  );
}
