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

  // Select specific important articles for the top page
  const targetSlugs = ['thailand-migration-guide', 'thailand-long-term-visa-comparison', 'bangkok-living-cost'];
  const latestPosts = targetSlugs
    .map(slug => posts.find(p => p.slug === slug))
    .filter((post): post is NonNullable<typeof post> => post !== undefined);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <Hero />

      {/* Guide Section (LINE Present) */}
      <section className="py-24 px-4 bg-[#020B18]">
        <div className="max-w-[1100px] mx-auto">
          <Link href="https://lin.ee/VRrmYI1" className="block group" target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden bg-[#0a1e27] border border-[#C5A059] transition-all duration-500 hover:shadow-[0_0_50px_rgba(197,160,89,0.3)] hover:-translate-y-1" style={{ borderRadius: '4px' }}>
              
              {/* Corner Ornaments (Gold Frame cutouts) */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C5A059] z-20"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C5A059] z-20"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C5A059] z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C5A059] z-20"></div>

              {/* Inner thin border */}
              <div className="absolute inset-[6px] border border-[#C5A059]/40 z-10 pointer-events-none"></div>

              {/* Background Image with Teal Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/guide-bg.png"
                  alt="Background"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#021622]/95 via-[#042636]/80 to-[#042636]/60"></div>
                <div className="absolute top-0 right-0 w-[400px] h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent"></div>
              </div>

              <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 p-8 md:p-10 lg:p-12 min-h-[340px]">
                
                {/* Left Content */}
                <div className="w-full md:w-auto mb-8 md:mb-0 text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4 leading-snug tracking-wide md:whitespace-nowrap" style={{ fontFamily: "var(--font-zen-old-mincho), serif" }}>
                    <span>タイでのウェルネスイベント</span>
                    <br className="md:hidden" />
                    <span>情報を配信中。</span>
                  </h2>

                  <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed font-medium whitespace-pre-line" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                    {tHome('feature.subtitle')}
                  </p>

                  <div className="inline-flex items-center justify-center px-6 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-sm md:text-base rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(6,199,85,0.4)] group-hover:shadow-[0_8px_30px_rgba(6,199,85,0.6)]">
                    {tHome('feature.cta')}
                    <span className="ml-3 bg-white/20 p-1 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Right Content - 3D Book Mockup */}
                <div className="w-full md:w-auto flex justify-center relative perspective-[1000px]">
                  
                  {/* Glowing effect behind book */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/10 blur-[40px] rounded-full pointer-events-none"></div>

                  <div className="relative w-[180px] md:w-[200px] aspect-[1/1.4] rotate-y-[-15deg] rotate-x-[5deg] rotate-z-[2deg] group-hover:rotate-y-0 transition-transform duration-700 ease-out transform-style-preserve-3d shadow-[20px_20px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[10px_10px_25px_rgba(0,0,0,0.5)]">
                    
                    {/* Book Spine (3D depth) */}
                    <div className="absolute top-0 right-full w-6 h-full bg-[#033a30] origin-right rotate-y-[-90deg] border-y border-l border-white/10"></div>
                    
                    {/* Book Cover */}
                    <div className="absolute inset-0 bg-[#065C4F] rounded-r-md border border-white/20 overflow-hidden flex flex-col justify-center items-center p-4 text-center shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)]">
                      {/* Decorative border */}
                      <div className="absolute inset-2 border border-white/30 rounded-sm pointer-events-none"></div>
                      
                      <div className="z-10 flex flex-col items-center mt-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                          <Leaf className="w-5 h-5 text-[#065C4F]" />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl text-white mb-2 leading-snug tracking-widest whitespace-pre-line" style={{ fontFamily: "var(--font-zen-old-mincho), serif" }}>
                          {tHome('feature.bookTitle')}
                        </h3>
                        <div className="w-6 h-0.5 bg-[#C5A059] my-3"></div>
                        <p className="text-white/90 text-[11px] tracking-widest font-bold" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                          {tHome('feature.bookSub')}
                        </p>
                      </div>

                      {/* Glossy overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Gold Badge */}
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#E2C784] via-[#C5A059] to-[#8C6D33] rounded-full border border-white flex flex-col items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500 z-30">
                      <div className="absolute inset-1 border border-white/40 rounded-full border-dashed pointer-events-none"></div>
                      <span className="text-[9px] font-black text-[#3a290c] tracking-tighter" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                        {tHome('feature.badge')}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Link>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-28 bg-[#03111b] relative overflow-hidden">
        
        {/* Background Aurora / Wave effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[400px] flex justify-center pointer-events-none opacity-40">
          <div className="w-[80%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#084b53] via-[#052631] to-transparent blur-[80px] mix-blend-screen"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[200px] flex justify-center pointer-events-none opacity-30">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A37E] via-[#043343] to-transparent blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center">
          
          {/* Top Green Accent Line */}
          <div className="w-10 h-1 bg-[#00A37E] mx-auto mb-10 rounded-full shadow-[0_0_10px_#00A37E]"></div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-wider" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp), sans-serif" }}>
            {tHome('about.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 font-bold mb-8 tracking-wide" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
            {tHome('about.subtitle')}
          </p>

          {/* Description */}
          <p className="text-[#a0aab2] text-sm md:text-base leading-[2.2] mb-16 max-w-3xl mx-auto font-medium whitespace-pre-line text-left md:text-center" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
            {tHome.rich('about.description', {
              br: () => <br className="hidden md:block" />
            })}
          </p>

          {/* Features (3 Columns Glassmorphism Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-white/20">
              <div className="flex flex-col items-center">
                <Leaf className="w-8 h-8 text-[#00e5ff] mb-5 stroke-[1.5]" />
                <h3 className="font-bold text-lg text-white mb-4 tracking-wider" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                  {tHome('about.features.info.title')}
                </h3>
                <p className="text-[13px] text-[#a0aab2] font-medium leading-relaxed whitespace-pre-line">
                  {tHome('about.features.info.desc')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-white/20">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-[#ffd700] mb-5 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
                <h3 className="font-bold text-lg text-white mb-4 tracking-wider" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                  {tHome('about.features.community.title')}
                </h3>
                <p className="text-[13px] text-[#a0aab2] font-medium leading-relaxed whitespace-pre-line">
                  {tHome('about.features.community.desc')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-white/20">
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-white/90 mb-5 stroke-[1.5]" />
                <h3 className="font-bold text-lg text-white mb-4 tracking-wider" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                  {tHome('about.features.practice.title')}
                </h3>
                <p className="text-[13px] text-[#a0aab2] font-medium leading-relaxed whitespace-pre-line">
                  {tHome('about.features.practice.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Blog / Articles Section */}
      <section className="py-24 bg-[#0a121d] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00A37E] font-bold text-xs tracking-widest">
                <BookOpen className="w-4 h-4" />
                <span>ARTICLES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                タイ生活情報
              </h2>
              <p className="text-white/60 text-sm md:text-base font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                現地在住者が届ける、リアルなタイ生活・移住のヒント。
              </p>
            </div>
            
            <Link href="/blog" className="hidden md:inline-flex items-center text-white/60 hover:text-white transition-colors group text-sm font-bold tracking-widest mt-6 md:mt-0">
              すべての記事を見る
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                  {post.entry.thumbnail ? (
                    <Image
                      src={post.entry.thumbnail}
                      alt={post.entry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0a121d] flex items-center justify-center">
                      <Globe className="w-10 h-10 text-white/10" />
                    </div>
                  )}
                  {post.entry.category && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white/90 text-xs font-bold tracking-wider border border-white/10">
                      {post.entry.category}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-white/40 text-xs font-bold mb-3 tracking-widest">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    <time dateTime={post.entry.publishedDate || ''}>
                      {post.entry.publishedDate 
                        ? new Date(post.entry.publishedDate).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')
                        : 'New'}
                    </time>
                  </div>
                  <h3 className="font-bold text-lg text-white/90 group-hover:text-white mb-3 line-clamp-2 leading-relaxed" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                    {post.entry.title}
                  </h3>
                  <p className="text-white/50 text-sm line-clamp-2 leading-relaxed mt-auto font-medium">
                    {post.entry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center justify-center w-full py-4 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all font-bold text-sm tracking-widest">
              すべての記事を見る
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 px-6 bg-[#0a0f16] border-t border-white/5 relative">
        <div className="max-w-[1200px] mx-auto bg-[#0d141d] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Content */}
            <div className="lg:w-[45%] p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-6 leading-tight whitespace-pre-line tracking-wide" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                {tHome('youtube.title')}
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                {tHome('youtube.desc')}
              </p>
              
              <a
                href="https://lin.ee/VRrmYI1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between px-6 py-4 rounded-full bg-gradient-to-r from-[#00A37E] to-[#04c498] text-white font-bold hover:shadow-[0_0_20px_rgba(0,163,126,0.5)] transition-all duration-300 w-fit"
              >
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-3 fill-white" />
                  <span className="tracking-widest mr-8">{tHome('youtube.cta')}</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#00A37E] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Right Video Embed */}
            <div className="lg:w-[55%] relative flex items-center justify-center bg-[#0a0f16] border-l border-white/5 p-4 lg:p-10">
              <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00A37E] to-teal-600 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
                  <YouTubeEmbed videoId="Ak4-4HWnNLU" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div >
  );
}
