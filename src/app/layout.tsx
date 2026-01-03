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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Nomad Place | タイ移住・ノマド生活コミュニティ",
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
  return (
    <html lang="ja">
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
