import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Merriweather, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://t78-community.com"),
  title: "Nomad in Thailand -ノマタイ- | タイ移住・ノマド生活コミュニティ",
  description: "タイ在住の日本人ノマドのためのコミュニティメディア「ノマタイ」。バンコク、チェンマイなどの移住情報、ビザ、コワーキングスペース、イベント情報を発信。",
  keywords: ["タイ移住", "デジタルノマド", "バンコク生活", "チェンマイ生活", "海外ノマド", "ノマタイ", "Nomad in Thailand"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://t78-community.com",
    siteName: "Nomad in Thailand -ノマタイ-",
    images: [
      {
        url: "https://t78-community.com/images/ogp.jpg", // Ensure this path exists or update later
        width: 1200,
        height: 630,
        alt: "Nomad in Thailand -ノマタイ-",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nomad_place",
    creator: "@nomad_place",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ... existing imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://t78-community.com/#organization",
        "name": "Nomad in Thailand -ノマタイ-",
        "alternateName": "ノマタイ",
        "url": "https://t78-community.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://t78-community.com/character/nomad-dog-hero-white.png", // Using existing character as placeholder logo
          "width": 512,
          "height": 512
        },
        "description": "タイ移住・ノマド生活コミュニティ",
        "sameAs": [
          "https://x.com/nomad_place",
          "https://instagram.com/nomad_place",
          "https://www.youtube.com/@T78community"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://t78-community.com/#website",
        "url": "https://t78-community.com",
        "name": "Nomad in Thailand -ノマタイ-",
        "description": "タイ移住・ノマド生活コミュニティ",
        "publisher": {
          "@id": "https://t78-community.com/#organization"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "FAQPage",
        "@id": "https://t78-community.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Nomad in Thailand (ノマタイ) とは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nomad in Thailand (通称：ノマタイ) は、タイ在住の日本人デジタルノマドのためのコミュニティメディアです。バンコクやチェンマイでの生活情報、ビザ情報、コワーキングスペースの紹介、そして定期的な交流イベントの開催を行っています。"
            }
          },
          {
            "@type": "Question",
            "name": "イベントに参加するにはどうすればいいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "毎月開催される「ゆる飲み会」や「カフェ作業会」などは、公式サイトのイベントページまたは公式SNSから誰でも参加申し込みが可能です。"
            }
          },
          {
            "@type": "Question",
            "name": "初心者でもコミュニティに参加できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、大歓迎です。これからタイ移住を考えている方や、ノマドワークを始めたばかりの方も多く在籍しています。"
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${merriweather.variable} ${zenOldMincho.variable} antialiased bg-background text-foreground font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
