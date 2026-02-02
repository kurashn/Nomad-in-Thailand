import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { ArrowRight, MapPin, Users, Wallet, Shield, Smartphone, Heart, ArrowUpRight, Tag, Clock } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import Hero from "@/components/Hero";
import { reader } from '@/lib/reader';


export default async function Home() {
  // const t = useTranslations('Hero'); // Moved to Hero component
  const tHome = await getTranslations('Home');

  // Fetch latest posts
  const posts = await reader.collections.posts.all();

  // Sort by date, newest first and take top 3
  const latestPosts = [...posts]
    .sort((a, b) => {
      const dateA = a.entry.publishedDate ? new Date(a.entry.publishedDate).getTime() : 0;
      const dateB = b.entry.publishedDate ? new Date(b.entry.publishedDate).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <Hero />

      {/* Feature Section (Thailand Migration Guide) */}
      <section className="py-16 px-4 bg-[#FFFBF7] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <Link href="/blog/thailand-migration-guide" className="block group">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#2C3E50] shadow-2xl transition-all duration-500 hover:shadow-[#2C3E50]/20 hover:-translate-y-1">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#2C3E50]/70 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] via-[#2C3E50]/90 to-transparent z-10"></div>
                <Image
                  src="/images/posts/thailand-migration-guide/thumbnail.jpg"
                  alt="Thailand Migration Guide"
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>

              <div className="relative z-20 flex flex-col md:flex-row items-center min-h-[400px]">
                {/* Text Content */}
                <div className="p-8 md:p-16 flex-1 w-full md:w-2/3">
                  <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-[#e9c46a]/10 border border-[#e9c46a]/20 backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e9c46a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e9c46a]"></span>
                    </span>
                    <span className="text-sm font-bold text-[#e9c46a] tracking-widest uppercase">
                      {tHome('feature.tag')}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg whitespace-pre-line">
                    {tHome.rich('feature.title', {
                      nowrap: (chunks) => <span className="whitespace-nowrap">{chunks}</span>
                    })}
                  </h2>

                  <p className="text-slate-100/90 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-2xl border-l-4 border-[#e9c46a] pl-6">
                    {tHome('feature.subtitle')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#2a9d8f] text-white font-bold text-base md:text-lg rounded-xl hover:bg-[#268c7f] transition-all duration-300 shadow-lg shadow-[#2a9d8f]/30 group-hover:pl-10">
                      {tHome.rich('feature.cta', {
                        nowrap: (chunks) => <span className="whitespace-nowrap">{chunks}</span>
                      })}
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Visual Decoration (Desktop only) */}
                <div className="hidden md:block w-1/3 h-full relative p-12">
                  {/* Book/Magazine cover effect */}
                  <div className="absolute right-12 top-1/2 -translate-y-1/2 w-64 aspect-[3/4] bg-white rounded-r-2xl rounded-l-sm shadow-[10px_10px_30px_rgba(0,0,0,0.3)] rotate-6 group-hover:rotate-3 transition-transform duration-500 overflow-hidden border-l-8 border-[#1a2530]">
                    <div className="absolute inset-0 bg-[#2C3E50] p-6 flex flex-col justify-between">
                      <div className="border border-[#e9c46a]/30 h-full w-full p-4 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-[#e9c46a] rounded-full flex items-center justify-center mb-6 shadow-md">
                          <ArrowUpRight className="w-8 h-8 text-[#2C3E50]" />
                        </div>
                        <h3 className="font-serif text-3xl text-[#e9c46a] mb-4 leading-tight font-bold">タイ移住<br />完全ガイド</h3>
                        <div className="w-10 h-1 bg-white/20 my-2"></div>
                        <p className="text-white/60 text-xs font-serif tracking-widest mt-2">MIGRATION GUIDE</p>
                        <p className="text-white/40 text-[10px] mt-8">2026 EDITION</p>
                      </div>
                    </div>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Nomad Essentials Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight whitespace-pre-line">
              {tHome('essentials.title')}
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto whitespace-pre-line">
              {tHome('essentials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wise */}
            <Link
              href="/nomad-info/wise"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">{tHome('essentials.wise.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {tHome.rich('essentials.wise.desc', {
                  bold: (chunks) => <span className="font-bold text-green-600">{chunks}</span>
                })}
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-green-500 text-green-600 bg-white group-hover:bg-green-500 group-hover:text-white group-hover:shadow-md">
                {tHome('essentials.wise.cta')}
              </div>
            </Link>

            {/* NordVPN */}
            <Link
              href="/nomad-info/nordvpn"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{tHome('essentials.nordvpn.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {tHome.rich('essentials.nordvpn.desc', {
                  bold: (chunks) => <span className="font-bold text-blue-600">{chunks}</span>
                })}
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-blue-500 text-blue-600 bg-white group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md">
                {tHome('essentials.nordvpn.cta')}
              </div>
            </Link>

            {/* e-SIM (Airalo) */}
            <Link
              href="/nomad-info/airalo"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{tHome('essentials.airalo.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {tHome.rich('essentials.airalo.desc', {
                  bold: (chunks) => <span className="font-bold text-cyan-600">{chunks}</span>
                })}
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-cyan-500 text-cyan-600 bg-white group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-md">
                {tHome('essentials.airalo.cta')}
              </div>
            </Link>

            {/* Insurance (SafetyWing) */}
            <Link
              href="/nomad-info/safetywing"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-red-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">{tHome('essentials.safetywing.title')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                {tHome.rich('essentials.safetywing.desc', {
                  bold: (chunks) => <span className="font-bold text-red-600">{chunks}</span>
                })}
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-red-500 text-red-600 bg-white group-hover:bg-red-500 group-hover:text-white group-hover:shadow-md">
                {tHome('essentials.safetywing.cta')}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Column Section (New) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                {tHome('column.title')}
              </h2>
              <p className="text-slate-500 text-sm whitespace-pre-line">
                {tHome('column.subtitle')}
              </p>
            </div>
            <div className="h-[1px] w-8 bg-slate-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.length > 0 ? (
              latestPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="block group h-full"
                >
                  <article className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Thumbnail */}
                    <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                      <Image
                        src={post.entry.thumbnail || '/images/blog-default.jpg'}
                        alt={post.entry.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Tag */}
                      {post.entry.category && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-700 shadow-sm">
                            <Tag className="w-3 h-3 mr-1 text-blue-500" />
                            {post.entry.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {post.entry.title}
                      </h3>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                        {post.entry.publishedDate && (
                          <span className="text-xs text-slate-400 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {new Date(post.entry.publishedDate).toLocaleDateString('ja-JP', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        )}
                        <div className="flex items-center text-sm font-bold text-blue-600 group-hover:underline">
                          {tHome('column.read')} <ArrowUpRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-slate-400 py-12">
                {tHome('column.noArticles')}
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 group"
            >
              {tHome('column.title')}をもっと見る
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2026 Scheduled Events (Compact Version) */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{tHome('events.title')}</h2>
            <div className="h-[1px] w-8 bg-slate-300"></div>
          </div>

          <div className="space-y-3">
            {/* News 1: Sponsor Recruitment (Newest First) */}
            <Link href="/nomad-info/sponsor" className="block group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-slate-400 text-sm font-mono tracking-wider">{tHome('events.sponsor.date')}</span>
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-orange-100 text-orange-700">{tHome('events.sponsor.tag')}</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-slate-700 font-bold group-hover:text-orange-800 transition-colors">
                    {tHome('events.sponsor.title')}
                  </p>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>

            {/* News 2: Site Launch */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm cursor-default">
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-slate-400 text-sm font-mono tracking-wider">{tHome('events.launch.date')}</span>
                <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-blue-100 text-blue-700">{tHome('events.launch.tag')}</span>
              </div>
              <p className="text-slate-700 font-medium">
                {tHome('events.launch.title')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nomad Camp Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 tracking-tight">{tHome('camp.title')}</h2>
            <div className="h-[1px] w-8 bg-slate-300"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side - Replaced with YouTube Video */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-200 bg-black">
                <YouTubeEmbed videoId="XvF1XOgDkiY" />
              </div>

              {/* Next Event Card - Premium Luxury Design */}
              <div className="bg-neutral-950 rounded-xl p-6 border border-amber-500/20 shadow-xl shadow-amber-900/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-500"></div>
                      <span className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">{tHome('camp.comingSoon')}</span>
                      <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-500"></div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">
                      {tHome('camp.nextDate')}
                    </h3>
                    <p className="text-amber-200/60 font-medium tracking-wide">
                      {tHome('camp.nextLabel')}
                    </p>
                  </div>

                  <div className="text-sm font-medium text-neutral-400 bg-neutral-900/50 px-6 py-4 rounded-lg border border-white/5 backdrop-blur-sm group-hover:border-amber-500/20 transition-colors">
                    <p className="flex items-center justify-center sm:justify-start gap-3 mb-1 text-neutral-200">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      {tHome('camp.location')}
                    </p>
                    <p className="text-xs text-neutral-600 text-center sm:text-left pl-7">
                      {tHome('camp.details')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 whitespace-pre-line">
                  {tHome('camp.heading')}
                </h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {tHome('camp.desc')}
                </p>
              </div>

              {/* Past Achievements */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-500" />
                  {tHome('camp.history')}
                </h4>
                <div className="space-y-3">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="flex items-center justify-between text-sm border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                      <span className="font-medium text-slate-800">{tHome(`camp.historyItems.${index}.place`)}</span>
                      <span className="text-slate-500">{tHome(`camp.historyItems.${index}.date`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-background border-t border-muted">
        <NewsletterCTA />
      </section>

      {/* YouTube Section (Moved to Bottom) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center p-6 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold">
              {tHome('youtube.tag')}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 whitespace-pre-line">{tHome('youtube.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {tHome('youtube.desc')}
          </p>
          <div className="mb-8">
            <YouTubeEmbed videoId="B_HkXPiv7ow" />
          </div>
          <a
            href="https://www.youtube.com/@nomad-thai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            {tHome('youtube.cta')}
          </a>
        </div>
      </section>


    </div>
  );
}
