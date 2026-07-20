import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { reader } from '@/lib/reader';
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  Tag,
  FileText,
  Wallet,
  Home as HomeIcon,
  Briefcase,
  Plane,
  Stethoscope,
  Wifi,
  Train,
  Coffee,
  Building2,
  Youtube,
} from 'lucide-react';
import NoteSalesCTA from '@/components/NoteSalesCTA';

const SITE_URL = 'https://totonoi-thai.com';
const SITE_NAME = 'TOTONOI THAI';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UCSpo7KdBG5sPBhcvSSWDntA';
const NOTE_URL = 'https://note.com/nomad_dayo';
const SITE_TAGLINE = 'タイ移住・ノマド情報メディア';
const SITE_DESCRIPTION =
  'タイ移住のリアルを、現地在住者が実体験で書くメディア。DTVビザの取り方、バンコク・チェンマイの生活費、税金、仕事、エリア選びまで、移住前に知っておきたい情報を網羅しています。';

export const metadata: Metadata = {
  // layout の title.template を上書きし、サイト名の重複を防ぐ
  title: { absolute: `${SITE_NAME} | タイ移住のリアルを、現地在住者が書く` },
  description: SITE_DESCRIPTION,
  keywords: [
    'タイ移住',
    'DTVビザ',
    'バンコク 生活費',
    'チェンマイ 移住',
    'デジタルノマド タイ',
    'タイ 税金',
    'タイ 長期滞在ビザ',
  ],
  alternates: {
    canonical: `${SITE_URL}/ja`,
    languages: { ja: `${SITE_URL}/ja` },
  },
  openGraph: {
    title: `${SITE_NAME} | タイ移住のリアルを、現地在住者が書く`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
};

const CATEGORIES = [
  {
    id: 'visa',
    label: 'ビザ・手続き',
    desc: 'DTV・LTR・エリートビザの取得と比較',
    icon: FileText,
  },
  {
    id: 'money',
    label: 'お金・税金',
    desc: '生活費・資金計画・タイの税務居住者ルール',
    icon: Wallet,
  },
  {
    id: 'living',
    label: '生活情報',
    desc: '住まい・医療・通信・移動のリアル',
    icon: HomeIcon,
  },
  {
    id: 'career',
    label: 'キャリア・移住',
    desc: '仕事の探し方・ノマドとしての稼ぎ方',
    icon: Briefcase,
  },
];

const GUIDES = [
  {
    href: '/nomad-info/dtv-visa',
    title: 'DTVビザ完全ガイド',
    desc: '5年マルチビザの条件・必要書類・申請手順',
    image: '/images/dtv-visa-thumbnail.webp',
    icon: Plane,
  },
  {
    href: '/nomad-info/bangkok-roadmap',
    title: 'バンコク・ノマドロードマップ',
    desc: '渡航から生活立ち上げまでの手順',
    image: '/images/bangkok_nomad_roadmap_thumbnail.webp',
    icon: Building2,
  },
  {
    href: '/nomad-info/tax-money-guide',
    title: 'タイの税金・お金ガイド',
    desc: '税務居住者・送金ルール・銀行口座',
    image: '/images/tax_money_hero.webp',
    icon: Wallet,
  },
  {
    href: '/living/area-guide',
    title: 'エリア選びガイド',
    desc: '住むエリアで生活の満足度は決まる',
    image: '/images/area_guide_hero_photo.webp',
    icon: HomeIcon,
  },
  {
    href: '/living/medical-guide',
    title: '医療・保険ガイド',
    desc: '病院のかかり方と保険の選び方',
    image: '/images/medical_guide_hero.webp',
    icon: Stethoscope,
  },
  {
    href: '/living/sim-guide',
    title: 'SIM・通信ガイド',
    desc: '現地SIMとeSIMの選び方',
    image: '/images/sim_guide_hero.webp',
    icon: Wifi,
  },
  {
    href: '/living/transport-guide',
    title: '交通ガイド',
    desc: 'BTS・MRT・タクシー・配車アプリ',
    image: '/images/transport_hero.webp',
    icon: Train,
  },
  {
    href: '/nomad-info/coworking-guide',
    title: 'コワーキングガイド',
    desc: '仕事がはかどる拠点の選び方',
    image: '/images/coworking_guide_hero.webp',
    icon: Building2,
  },
  {
    href: '/nomad-info/cafe-guide',
    title: 'ノマドカフェガイド',
    desc: '長時間作業できるカフェ',
    image: '/images/cafe_guide_hero.webp',
    icon: Coffee,
  },
];

const FALLBACK_IMAGE = '/images/ogp_default.webp';

function formatDate(value: string | null | undefined) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function Home() {
  const posts = await reader.collections.posts.all();

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.entry.publishedDate ? new Date(a.entry.publishedDate).getTime() : 0;
    const dateB = b.entry.publishedDate ? new Date(b.entry.publishedDate).getTime() : 0;
    return dateB - dateA;
  });

  const [featured, ...rest] = sortedPosts;
  const subFeatured = rest.slice(0, 2);
  const latest = rest.slice(2, 11);

  // 構造化データ: 検索エンジンとAIクローラーにサイトの主題と記事一覧を明示する
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: SITE_TAGLINE,
        description: SITE_DESCRIPTION,
        inLanguage: 'ja',
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/ja/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/character/totonoi-logo.png`,
        },
        sameAs: [YOUTUBE_URL, NOTE_URL],
        areaServed: { '@type': 'Country', name: 'Thailand' },
        knowsAbout: [
          'タイ移住',
          'DTVビザ',
          'デジタルノマド',
          'タイの税務居住者制度',
          'バンコクの生活費',
          'チェンマイの生活',
        ],
      },
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/#blog`,
        url: `${SITE_URL}/ja/blog`,
        name: `${SITE_NAME}のタイ移住情報`,
        inLanguage: 'ja',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        blogPost: sortedPosts.slice(0, 12).map((post) => ({
          '@type': 'BlogPosting',
          headline: post.entry.title,
          description: post.entry.description,
          url: `${SITE_URL}/ja/blog/${post.slug}`,
          datePublished: post.entry.publishedDate ?? undefined,
          articleSection: post.entry.category ?? undefined,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="bg-[#f8f6f2]"
        style={{ fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}
      >
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#0a5a42]/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#d4b572]/20 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0a5a42]/20 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-[#0a5a42] backdrop-blur-sm">
              THAILAND RELOCATION MEDIA
            </p>

            {/* 読点で必ず改行させ、スマホで「現地」が分断されるのを防ぐ */}
            <h1
              className="mb-6 text-3xl font-bold leading-[1.35] tracking-wide text-[#1f2937] md:text-5xl md:leading-[1.3]"
              style={{ wordBreak: 'keep-all' }}
            >
              タイ移住のリアルを、
              <br />
              現地在住者が書く。
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#4b5563] md:text-base md:leading-loose">
              DTVビザの取り方、バンコク・チェンマイの生活費、税金、仕事、エリア選び。
              <br className="hidden md:block" />
              移住してから困らないための情報を、実体験ベースで公開しています。
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a5a42] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0a5a42]/25 transition-all hover:-translate-y-0.5 hover:bg-[#074534] sm:w-auto"
              >
                記事を読む
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/nomad-info/dtv-visa"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0a5a42]/25 bg-white px-8 py-4 text-sm font-bold text-[#0a5a42] transition-all hover:-translate-y-0.5 hover:border-[#0a5a42]/50 sm:w-auto"
              >
                DTVビザガイドを見る
              </Link>
            </div>
          </div>
        </section>

        {/* ================= PICKUP ================= */}
        {featured && (
          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-xl font-bold tracking-wide text-[#1f2937] md:text-2xl">
                注目の記事
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#0a5a42] hover:underline"
              >
                すべて見る <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Featured */}
              <Link href={`/blog/${featured.slug}`} className="group block">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={featured.entry.thumbnail || FALLBACK_IMAGE}
                      alt={featured.entry.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-lg bg-[#0a5a42] px-3 py-1 text-xs font-bold text-white">
                      <Tag className="h-3 w-3" />
                      {featured.entry.category || 'その他'}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="mb-3 text-lg font-bold leading-snug text-[#1f2937] transition-colors group-hover:text-[#0a5a42] md:text-2xl">
                      {featured.entry.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-[#4b5563]">
                      {featured.entry.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      {formatDate(featured.entry.publishedDate)}
                    </span>
                  </div>
                </article>
              </Link>

              {/* Sub featured */}
              <div className="grid gap-6">
                {subFeatured.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                    <article className="flex h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative w-2/5 shrink-0 overflow-hidden bg-slate-100">
                        <Image
                          src={post.entry.thumbnail || FALLBACK_IMAGE}
                          alt={post.entry.title}
                          fill
                          sizes="(max-width: 1024px) 40vw, 20vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center p-5 md:p-6">
                        <span className="mb-2 inline-flex w-fit items-center rounded bg-[#0a5a42]/10 px-2 py-0.5 text-[11px] font-bold text-[#0a5a42]">
                          {post.entry.category || 'その他'}
                        </span>
                        <h3 className="mb-2 line-clamp-3 text-sm font-bold leading-snug text-[#1f2937] transition-colors group-hover:text-[#0a5a42] md:text-base">
                          {post.entry.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="h-3 w-3" />
                          {formatDate(post.entry.publishedDate)}
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= CATEGORIES ================= */}
        <section className="border-y border-black/5 bg-white/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-xl font-bold tracking-wide text-[#1f2937] md:text-2xl">
                知りたいことから探す
              </h2>
              <p className="text-sm text-[#4b5563]">
                タイ移住で必要になる情報を4つのテーマに整理しています。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    href={`/blog?category=${cat.id}`}
                    key={cat.id}
                    className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0a5a42]/30 hover:shadow-md"
                  >
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a5a42]/10 text-[#0a5a42] transition-colors group-hover:bg-[#0a5a42] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mb-2 text-base font-bold text-[#1f2937]">{cat.label}</h3>
                    <p className="text-xs leading-relaxed text-[#4b5563]">{cat.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= GUIDES ================= */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-xl font-bold tracking-wide text-[#1f2937] md:text-2xl">
              目的別・完全ガイド
            </h2>
            <p className="text-sm text-[#4b5563]">
              一つのテーマを最初から最後まで解説した、保存版のガイド記事です。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link href={guide.href} key={guide.href} className="group block">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 text-sm font-bold text-white">
                        <Icon className="h-4 w-4" />
                        {guide.title}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs leading-relaxed text-[#4b5563]">{guide.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#0a5a42]">
                        読む <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ================= NOTE CTA ================= */}
        <section className="border-y border-black/5 bg-white/60 py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-xl font-bold tracking-wide text-[#1f2937] md:text-2xl">
                実際に審査を通った書類を公開しています
              </h2>
              <p className="text-sm text-[#4b5563]">
                記事では書ききれない、そのまま使える実物の資料です。
              </p>
            </div>
            <NoteSalesCTA />
          </div>
        </section>

        {/* ================= LATEST ================= */}
        {latest.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-xl font-bold tracking-wide text-[#1f2937] md:text-2xl">
                最新の記事
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#0a5a42] hover:underline"
              >
                記事一覧へ <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latest.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={post.entry.thumbnail || FALLBACK_IMAGE}
                        alt={post.entry.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-800 backdrop-blur-sm">
                        <Tag className="h-3 w-3 text-[#0a5a42]" />
                        {post.entry.category || 'その他'}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-[#1f2937] transition-colors group-hover:text-[#0a5a42]">
                        {post.entry.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-[#4b5563]">
                        {post.entry.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 border-t border-black/5 pt-4 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        {formatDate(post.entry.publishedDate)}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ================= ABOUT / E-E-A-T ================= */}
        <section className="border-t border-black/5 bg-white/60 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-6 text-xl font-bold tracking-wide text-[#1f2937] md:text-2xl">
              このサイトについて
            </h2>
            <div className="space-y-4 text-sm leading-loose text-[#4b5563] md:text-base">
              <p>
                {SITE_NAME}は、実際にタイに暮らす運営者が、自分で手続きし、自分で払い、自分で失敗した経験をもとに書いているメディアです。
              </p>
              <p>
                ビザの申請書類も、家賃も、病院も、税金の手続きも、すべて実際に通った内容だけを載せています。
                現地に住んでいるからこそ書ける「制度が変わった直後の情報」を、できるだけ早く更新することを大切にしています。
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://lin.ee/WYck3Sx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#06C755]/25 transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                LINEで最新情報を受け取る
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF0000] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF0000]/25 transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <Youtube className="h-4 w-4" />
                ポッドキャストを聴く
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0a5a42]/25 bg-white px-8 py-4 text-sm font-bold text-[#0a5a42] transition-all hover:-translate-y-0.5 hover:border-[#0a5a42]/50 sm:w-auto"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
