import React from 'react';
import { Metadata } from 'next';
import CtcTopPage from '@/components/ctc/CtcTopPage';

export const metadata: Metadata = {
  title: 'Chiang Mai Run Club | 走る。整える。繋がる。チェンマイで。',
  description: 'AI時代に、健康と繋がりを大切にする人たちのコミュニティ。ノマド・フリーランス・経営者が中心。平日 朝ラン 6時〜8時。',
  alternates: {
    canonical: 'https://totonoi-thai.com/ja',
    languages: {
      'ja': 'https://totonoi-thai.com/ja',
    },
  },
  openGraph: {
    title: 'Chiang Mai Run Club | 走る。整える。繋がる。チェンマイで。',
    description: 'AI時代に、健康と繋がりを大切にする人たちのコミュニティ。ノマド・フリーランス・経営者が中心。',
    url: 'https://totonoi-thai.com',
    type: 'website',
  },
};

export default function Home() {
  return <CtcTopPage />;
}
