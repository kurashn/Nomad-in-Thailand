import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Noto_Sans_JP, Merriweather, Zen_Old_Mincho } from "next/font/google";
import "../globals.css";
import "../ctc-top.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
// import Breadcrumb from "@/components/Breadcrumb";
import { Maintenance } from "@/components/Maintenance";
import CtcHeader from "@/components/ctc/CtcHeader";
import CtcFooter from "@/components/ctc/CtcFooter";

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
  title: {
    default: "TOTONOI THAI | タイ移住のリアルを、現地在住者が書く",
    template: "%s | TOTONOI THAI",
  },
  description:
    "タイ移住・デジタルノマドの実務情報メディア。DTVビザの取り方、バンコク・チェンマイの生活費、税金、仕事、エリア選びを現地在住者が実体験で解説します。",
  keywords: [
    "タイ移住",
    "DTVビザ",
    "バンコク 生活費",
    "チェンマイ 移住",
    "デジタルノマド タイ",
    "タイ 税金",
    "タイ 長期滞在ビザ",
    "TOTONOI THAI",
  ],
  applicationName: "TOTONOI THAI",
  authors: [{ name: "TOTONOI THAI" }],
  creator: "TOTONOI THAI",
  publisher: "TOTONOI THAI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://totonoi-thai.com",
    siteName: "TOTONOI THAI",
    locale: "ja_JP",
    images: [
      {
        url: "https://totonoi-thai.com/images/ogp_default.webp",
        width: 1200,
        height: 630,
        alt: "TOTONOI THAI - タイ移住のリアルを、現地在住者が書く",
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

  return (
    <html lang={locale}>
      <head />
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${merriweather.variable} ${zenOldMincho.variable} antialiased`}
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
          {false ? (
            <Maintenance />
          ) : (
            <div className="ctc-page">
              <div className="site">
                <CtcHeader />
                <BreadcrumbJsonLd />
                <main>
                  {children}
                </main>
                <CtcFooter />
              </div>
            </div>
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

