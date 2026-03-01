import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { ArrowRight, Wallet, Shield, Smartphone, Heart, ArrowUpRight, Tag, Clock, Leaf, Tent, MessageCircle, Users, BookOpen, Globe, Play } from "lucide-react";

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
          <Link href="https://lin.ee/DqxeADk" className="block group" target="_blank" rel="noopener noreferrer">
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
                  <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-[#06C755]/10 border border-[#06C755]/20 backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06C755] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06C755]"></span>
                    </span>
                    <span className="text-sm font-bold text-[#06C755] tracking-widest uppercase">
                      {tHome('feature.tag')}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-lg whitespace-pre-line">
                    {tHome.rich('feature.title', {
                      nowrap: (chunks) => <span className="whitespace-nowrap">{chunks}</span>
                    })}
                  </h2>

                  <p className="text-slate-100/90 text-lg md:text-xl mb-8 leading-relaxed font-bold max-w-2xl">
                    {tHome('feature.subtitle')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#06C755] text-white font-bold text-base md:text-lg rounded-xl hover:bg-[#05b34d] transition-all duration-300 shadow-lg shadow-[#06C755]/30 group-hover:pl-10">
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
                        <h3 className="font-serif text-3xl text-[#e9c46a] mb-4 leading-tight font-bold">失敗しない<br />タイ移住<br />完全ガイド</h3>
                        <div className="w-10 h-1 bg-white/20 my-2"></div>
                        <p className="text-white/60 text-[10px] font-serif tracking-widest mt-2">FAILURE-FREE</p>
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



      {/* About Section */}
      <section id="about" className="py-24 bg-[#0a0f1c] relative overflow-hidden border-t border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-300 text-xs font-bold tracking-widest uppercase">
              {tHome('about.tag')}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight whitespace-pre-line tracking-tight drop-shadow-lg font-serif">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-emerald-200 to-teal-400">
              {tHome('about.title')}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-teal-50 font-bold mb-10 whitespace-pre-line leading-relaxed drop-shadow-md">
            {tHome('about.subtitle')}
          </p>

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg leading-loose mb-16 max-w-2xl mx-auto text-center font-medium whitespace-pre-line">
            {tHome('about.description')}
          </p>

          {/* Features (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            {/* Feature 1: Info */}
            <div className="group h-full p-8 rounded-[2rem] bg-slate-900/50 border border-slate-700/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 hover:border-cyan-500/30">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-center tracking-wide">{tHome('about.features.info.title')}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed whitespace-pre-line text-center">{tHome('about.features.info.desc')}</p>
              </div>
            </div>

            {/* Feature 2: Community */}
            <div className="group h-full p-8 rounded-[2rem] bg-slate-900/50 border border-slate-700/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 hover:border-orange-500/30 md:translate-y-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-center tracking-wide">{tHome('about.features.community.title')}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed whitespace-pre-line text-center">{tHome('about.features.community.desc')}</p>
              </div>
            </div>

            {/* Feature 3: Support */}
            <div className="group h-full p-8 rounded-[2rem] bg-slate-900/50 border border-slate-700/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 hover:border-green-500/30">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 text-center tracking-wide">{tHome('about.features.practice.title')}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed whitespace-pre-line text-center">{tHome('about.features.practice.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Column Section (New) */}
      <section className="py-20 bg-slate-50">
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



      {/* Community Section (TOTONOI THAI CLUB) */}
      <section id="community" className="py-24 px-4 bg-[#0B0F19] relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-[20%] left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src="/character/totonoi-logo.png" unoptimized
                  alt="Totonoi Dog Logo"
                  fill
                  className="object-contain drop-shadow-2xl animate-bounce-slow"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e9c46a] via-[#f4a261] to-[#e76f51]">
                {tHome('community.title')}
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto font-bold leading-relaxed whitespace-pre-line mb-8">
              {tHome('community.subtitle')}
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {tHome('community.concept')}
            </p>
          </div>

          {/* Discord Vibe Sub-clubs */}
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-[2rem] p-8 lg:p-10 mb-12 backdrop-blur-sm">
            <div className="flex items-start lg:items-center flex-col lg:flex-row gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shrink-0">
                  <span className="text-3xl drop-shadow-lg">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{tHome('community.discord.title')}</h3>
                  <p className="text-slate-400 text-sm md:text-base mt-1.5">{tHome('community.discord.desc')}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Morning */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card">
                <h4 className="font-bold text-white mb-2 text-sm">{tHome('community.discord.morning.title')}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{tHome('community.discord.morning.desc')}</p>
              </div>
              {/* Workout */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card">
                <h4 className="font-bold text-white mb-2 text-sm">{tHome('community.discord.workout.title')}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{tHome('community.discord.workout.desc')}</p>
              </div>
              {/* Sauna */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card">
                <h4 className="font-bold text-white mb-2 text-sm">{tHome('community.discord.sauna.title')}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{tHome('community.discord.sauna.desc')}</p>
              </div>
              {/* Muay Thai */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card">
                <h4 className="font-bold text-white mb-2 text-sm">{tHome('community.discord.muaythai.title')}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{tHome('community.discord.muaythai.desc')}</p>
              </div>
              {/* Meditation */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card">
                <h4 className="font-bold text-white mb-2 text-sm">{tHome('community.discord.meditation.title')}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{tHome('community.discord.meditation.desc')}</p>
              </div>
              {/* Cafe */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card">
                <h4 className="font-bold text-white mb-2 text-sm">{tHome('community.discord.cafe.title')}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{tHome('community.discord.cafe.desc')}</p>
              </div>
            </div>
          </div>

          {/* Membership Tiers (Free vs Paid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">

            {/* Free Tier: OpenChat */}
            <div className="group relative flex flex-col justify-between rounded-[2rem] bg-slate-900 border border-slate-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/30 p-6 sm:p-10">
              <div className="absolute top-0 right-[-2rem] p-6 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 text-emerald-500 pointer-events-none">
                <MessageCircle className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-800 text-slate-300 text-xs font-bold tracking-widest border border-slate-700">
                  {tHome('community.chat.badge', { defaultValue: 'FREE' })}
                </div>
                <h3 className="text-xl md:text-3xl font-black text-white mb-4 whitespace-pre-line leading-tight">
                  {tHome('community.chat.title')}
                </h3>
                <p className="text-emerald-50/70 text-sm md:text-base leading-relaxed whitespace-pre-line mb-10 font-medium">
                  {tHome('community.chat.desc')}
                </p>

                <ul className="space-y-5 mb-12">
                  {(tHome.raw('community.chat.benefits') as string[]).map((benefit, i) => (
                    <li key={`free-benefit-${i}`} className="flex items-center text-emerald-100/90 text-sm font-bold">
                      <div className="rounded-full bg-emerald-500/10 p-1 mr-4 shrink-0">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-slate-800/80">
                <a
                  href="https://lin.ee/E1QFFRn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mb-3 inline-flex items-center justify-center text-sm md:text-base font-bold text-white bg-slate-800 border border-slate-700 px-6 py-4.5 rounded-xl hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 group/btn"
                >
                  {tHome('community.chat.cta')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-xs font-bold text-emerald-500/80 tracking-wider">
                  {tHome('community.chat.password', { defaultValue: '参加時の合言葉：パクチー' })}
                </p>
              </div>
            </div>

            {/* Premium Tier: TOTONOI THAI CLUB */}
            <div className="group relative flex flex-col justify-between rounded-[2rem] bg-gradient-to-b from-[#1a1727] to-[#0a0f1c] border border-amber-500/20 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-500/40 p-6 sm:p-10">
              {/* Premium Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-500/20 transition-all duration-700"></div>

              <div className="absolute top-0 right-[-2rem] p-6 opacity-5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 text-amber-500 pointer-events-none">
                <Tent className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest border border-amber-500/20 shadow-inner">
                  {tHome('community.paid.badge', { defaultValue: 'PREMIUM' })}
                </div>
                <h3 className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 mb-4 whitespace-pre-line leading-tight">
                  {tHome('community.paid.title')}
                </h3>
                <p className="text-amber-50/70 text-sm md:text-base leading-relaxed whitespace-pre-line mb-10 font-medium">
                  {tHome('community.paid.desc')}
                </p>

                <ul className="space-y-5 mb-12">
                  {(tHome.raw('community.paid.benefits') as string[]).map((benefit, i) => (
                    <li key={`paid-benefit-${i}`} className="flex items-center text-amber-50/90 font-bold text-sm">
                      <div className="rounded-full bg-amber-500/20 p-1 mr-4 shrink-0">
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-amber-500/10">

                <a
                  href="https://lin.ee/DqxeADk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center text-sm md:text-base font-bold text-[#1a1727] bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-4.5 rounded-xl hover:from-amber-300 hover:to-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-300 group/btn"
                >
                  {tHome('community.paid.cta')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center mb-8">
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase opacity-80">{tHome('community.events.title')}</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Real Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* THE RESET */}
            <a
              href="https://www.the-reset-th.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full rounded-[2rem] bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/thereset.webp"
                  alt="THE RESET"
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              <div className="relative p-8 flex flex-col h-full z-20">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 backdrop-blur-md border border-green-500/30 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Leaf className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors drop-shadow-md">
                  {tHome('community.events.reset.title')}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow drop-shadow-sm font-medium">
                  {tHome('community.events.reset.desc')}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-bold text-green-400 group-hover:text-green-300 transition-colors bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                    {tHome('community.events.reset.cta')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>

            {/* Wellness Retreat */}
            <a
              href="https://youtu.be/XvF1XOgDkiY?si=KzlxsvnF2rddXFCz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full rounded-[2rem] bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/nomad-camp-villa.png"
                  alt="Wellness Retreat"
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-orange-500/20 via-transparent to-transparent pointer-events-none z-10"></div>

              <div className="relative p-8 flex flex-col h-full z-20">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 backdrop-blur-md border border-orange-500/30 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Tent className="w-8 h-8 text-orange-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors drop-shadow-md">
                  {tHome('community.events.place.title')}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow whitespace-pre-line drop-shadow-sm font-medium">
                  {tHome('community.events.place.desc')}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-bold text-orange-400 group-hover:text-orange-300 transition-colors bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30">
                    {tHome('community.events.place.cta')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2026 Scheduled Events (Notification Center Style) */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-slate-300"></div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{tHome('events.title')}</h2>
            <div className="h-[1px] w-12 bg-slate-300"></div>
          </div>

          <div className="space-y-4">
            {/* News 1: Sponsor Recruitment (Newest First) */}
            <Link href="/nomad-info/sponsor" className="block group">
              <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:translate-x-1 transition-all duration-300">
                <div className="flex items-center gap-4 shrink-0 min-w-[140px]">
                  <span className="text-slate-400 text-sm font-mono tracking-wider">{tHome('events.sponsor.date')}</span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-orange-100 text-orange-700 tracking-wide">{tHome('events.sponsor.tag')}</span>
                </div>
                <div className="flex items-center justify-between w-full gap-4">
                  <p className="text-slate-700 font-bold group-hover:text-orange-600 transition-colors text-lg">
                    {tHome('events.sponsor.title')}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 transition-colors" />
                  </div>
                </div>
              </div>
            </Link>

            {/* News 2: Site Launch */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
              <div className="flex items-center gap-4 shrink-0 min-w-[140px]">
                <span className="text-slate-400 text-sm font-mono tracking-wider">{tHome('events.launch.date')}</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-700 tracking-wide">{tHome('events.launch.tag')}</span>
              </div>
              <p className="text-slate-700 font-medium text-lg">
                {tHome('events.launch.title')}
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* YouTube Section (Cinematic Dark Style) */}
      < section className="py-24 px-4 bg-[#151515] relative overflow-hidden" >
        {/* Ambient Glow */}
        < div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" ></div >

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold tracking-wider mb-6 border border-red-500/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                {tHome('youtube.tag')}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {tHome('youtube.title')}
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                {tHome('youtube.desc')}
              </p>

              <a
                href="https://www.youtube.com/@nomad-thai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-1 group"
              >
                <div className="mr-3 p-1 bg-white/20 rounded-full">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
                {tHome('youtube.cta')}
                <ArrowUpRight className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Video Content */}
            <div className="flex-1 w-full max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
                  <YouTubeEmbed videoId="Ak4-4HWnNLU" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >


    </div >
  );
}
