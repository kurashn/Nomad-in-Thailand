import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Noto_Sans_JP, Merriweather, Zen_Old_Mincho } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Breadcrumb from "@/components/Breadcrumb";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://totonoi-thai.com"),
  title: "TOTONOI THAI - タイ移住×ウェルネス | タイ移住・ウェルネスコミュニティ",
  description: "タイ移住とウェルネスをテーマにしたコミュニティメディア「TOTONOI THAI」。バンコク、チェンマイなどの移住情報、ビザ情報のほか、サウナ、リトリート、デジタルデトックスなど心と体を整えるタイ生活を発信。",
  keywords: [
    "タイ移住",
    "ウェルネス",
    "サウナ",
    "リトリート",
    "ウェルネスツーリズム",
    "バンコク生活",
    "チェンマイ生活",
    "TOTONOI THAI",
    "海外生活",
    "タイ移住 費用",
    "タイ ビザ",
    "バンコク サウナ"
  ],
  openGraph: {
    type: "website",
    url: "https://totonoi-thai.com",
    siteName: "TOTONOI THAI",
    images: [
      {
        url: "https://totonoi-thai.com/images/ogp_default.png",
        width: 1200,
        height: 630,
        alt: "TOTONOI THAI - タイ移住×ウェルネス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nomad_place",
    creator: "@nomad_place",
  },
  verification: {
    google: "pwAWlIPQ24eVdNIJiOk6Lo8LFQOOjVJqT8-RKCSp0_E",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://totonoi-thai.com/#organization",
        "name": "TOTONOI THAI",
        "alternateName": "トトノイタイ",
        "url": "https://totonoi-thai.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://totonoi-thai.com/character/totonoi-logo.png",
          "width": 512,
          "height": 512
        },
        "description": "タイ移住とウェルネスをテーマにしたコミュニティメディア",
        "sameAs": [
          "https://x.com/nomad_place",
          "https://instagram.com/nomad_place",
          "https://www.youtube.com/@nomad-thai"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://totonoi-thai.com/#website",
        "url": "https://totonoi-thai.com",
        "name": "TOTONOI THAI",
        "description": "タイ移住・ウェルネスコミュニティ",
        "publisher": {
          "@id": "https://totonoi-thai.com/#organization"
        },
        "inLanguage": locale
      },
      {
        "@type": "FAQPage",
        "@id": "https://totonoi-thai.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "TOTONOI THAI とは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TOTONOI THAI は、タイ移住とウェルネスをテーマにしたコミュニティメディアです。旧「Nomad in Thailand (ノマタイ) 」を前身とし、バンコクやチェンマイでの生活情報、ビザ、サウナやリトリートに関する情報を発信しています。"
            }
          },
          {
            "@type": "Question",
            "name": "イベントに参加するにはどうすればいいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "毎月開催される「ゆる飲み会」や「カフェ作業会」などは、公式SNSから誰でも参加申し込みが可能です。"
            }
          },
          {
            "@type": "Question",
            "name": "初心者でもコミュニティに参加できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、大歓迎です。これからタイ移住を考えている方や、ウェルネスに関心がある方も多く在籍しています。"
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${merriweather.variable} ${zenOldMincho.variable} antialiased bg-background text-foreground font-sans flex flex-col min-h-screen`}
      >
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-WVPS6MH1M3" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-WVPS6MH1M3');
              `}
            </Script>
          </>
        )}
        <NextIntlClientProvider messages={messages}>
          <BreadcrumbJsonLd />
          <Navbar />
          <main className="flex-1 pt-16">
            <Breadcrumb />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
