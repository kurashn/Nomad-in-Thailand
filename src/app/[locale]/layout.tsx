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
    google: "orOsM-QcOd4leoiqTyqlgBR92c9PtfwjKDVGQcOXVIk",
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

  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' || true; // Set to true to force maintenance mode

  if (isMaintenanceMode) {
    return (
      <html lang={locale}>
        <head>
          <title>メンテナンス中 | TOTONOI THAI</title>
        </head>
        <body
          className={`${inter.variable} ${notoSansJP.variable} ${merriweather.variable} ${zenOldMincho.variable} antialiased bg-[#0B0F19] text-white font-sans flex flex-col min-h-screen items-center justify-center p-4`}
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]"></div>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
          <div className="absolute -bottom-[20%] left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-1000"></div>

          <div className="max-w-md w-full p-12 bg-slate-900/60 border border-slate-700/50 rounded-[2rem] text-center shadow-2xl backdrop-blur-md relative z-10">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-widest font-sans uppercase">
              Maintenance
            </h1>
            <p className="text-slate-300 font-medium tracking-widest mt-6 text-sm md:text-base">
              メンテナンス中
            </p>
          </div>
        </body>
      </html>
    );
  }

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
