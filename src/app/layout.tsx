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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nomad-place-jpn.com"),
  title: "海外ノマドポッドキャスト | タイ移住・ノマド生活コミュニティ",
  description: "タイ在住の日本人ノマドのためのコミュニティメディア。",
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
        "@id": "https://nomad-place-jpn.com/#organization",
        "name": "海外ノマドポッドキャスト",
        "url": "https://nomad-place-jpn.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nomad-place-jpn.com/images/np-logo.jpg",
          "width": 512,
          "height": 512
        },
        "description": "タイ移住・ノマド生活コミュニティ",
        "sameAs": [
          "https://x.com/nomad_place",
          "https://instagram.com/nomad_place"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://nomad-place-jpn.com/#website",
        "url": "https://nomad-place-jpn.com",
        "name": "海外ノマドポッドキャスト",
        "description": "タイ移住・ノマド生活コミュニティ",
        "publisher": {
          "@id": "https://nomad-place-jpn.com/#organization"
        },
        "inLanguage": "ja"
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
