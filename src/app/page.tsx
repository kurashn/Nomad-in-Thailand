import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Users, Home as HomeIcon, Mail, ExternalLink, Shield, Wallet, Globe, Smartphone, Heart } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-2">
            <div className="relative w-32 h-32 md:w-40 md:h-40 animate-bounce-slow">
              <Image
                src="/character/nomad-dog-hero-white.png"
                alt="Nomad Dog with Sunglasses and Laptop (White BG)"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
            Nomad Place
          </h1>
          <p className="text-base md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            PC1台で、世界はもっと近くなる。<br />
            働き方も、住む場所も、自分で選ぶ自由を。<br />
            <span className="text-sm md:text-xl mt-4 block leading-relaxed">
              あなたの理想のライフスタイルが、<br className="md:hidden" />
              ここから始まります。
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/nomad-info"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              ノマド生活を始める <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 rounded-full bg-background border border-muted text-foreground font-semibold hover:bg-muted transition-all hover:scale-105 flex items-center gap-2"
            >
              仲間を見つける <Users className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nomad Essentials Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
              海外ノマドを支える<br className="md:hidden" />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">「4種の神器」</span>
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              便利で、安くて、安心。<br className="md:hidden" />
              これさえあれば、どこでも生きていける。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wise */}
            <a
              href="https://wise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">Wise (ワイズ)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                海外送金・現地決済の必須ツール。<br />
                <span className="font-bold text-green-600">手数料が圧倒的に安い</span>。
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-green-500 text-green-600 bg-white group-hover:bg-green-500 group-hover:text-white group-hover:shadow-md">
                公式サイトを見る
              </div>
            </a>

            {/* NordVPN */}
            <a
              href="https://nordvpn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">NordVPN</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                フリーWi-Fiのセキュリティ対策。<br />
                <span className="font-bold text-blue-600">日本の動画も見れる</span>。
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-blue-500 text-blue-600 bg-white group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md">
                公式サイトを見る
              </div>
            </a>

            {/* e-SIM (Airalo) */}
            <a
              href="https://www.airalo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">Airalo (エアアロ)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                世界定番のeSIMアプリ。<br />
                <span className="font-bold text-cyan-600">アプリで即時開通</span>。
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-cyan-500 text-cyan-600 bg-white group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-md">
                公式サイトを見る
              </div>
            </a>

            {/* Insurance (SafetyWing) */}
            <a
              href="https://safetywing.com/nomad-insurance"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-red-50/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">SafetyWing</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                ノマド専用の医療保険。<br />
                <span className="font-bold text-red-600">月額サブスク型で安心</span>。
              </p>
              <div className="mt-auto w-full py-2.5 rounded-xl font-bold text-center border-2 transition-all duration-300 border-red-500 text-red-600 bg-white group-hover:bg-red-500 group-hover:text-white group-hover:shadow-md">
                公式サイトを見る
              </div>
            </a>
          </div>
        </div>
      </section>






      {/* 2026 Scheduled Events (Compact Version) */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">2026 Scheduled Events</h2>
            <div className="h-[1px] w-8 bg-slate-300"></div>
          </div>

          <div className="space-y-4">
            {/* Event 1: On Nut Party */}
            <div className="group flex items-center justify-between p-4 rounded-xl bg-orange-50/40 border border-orange-100 hover:border-orange-200 transition-all hover:shadow-sm hover:translate-x-1 cursor-default">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-orange-100 flex flex-col items-center justify-center text-orange-600 shadow-sm">
                  <span className="text-[10px] font-bold leading-none uppercase tracking-wide opacity-70">JAN</span>
                  <span className="text-lg font-extrabold leading-none">31</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-orange-900 transition-colors">オンヌットで新年会</h3>
                  <div className="flex items-center gap-2 text-xs text-orange-800/70 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>オンヌット（バンコク）</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-white bg-orange-500 px-3 py-1 rounded-full shadow-sm shadow-orange-200">
                  募集中
                </span>
              </div>
            </div>

            {/* Event 2: Digital Detox */}
            <div className="group flex items-center justify-between p-4 rounded-xl bg-emerald-50/40 border border-emerald-100 hover:border-emerald-200 transition-all hover:shadow-sm hover:translate-x-1 cursor-default">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-emerald-100 flex flex-col items-center justify-center text-emerald-600 shadow-sm">
                  <span className="text-[10px] font-bold leading-none uppercase tracking-wide opacity-70">APR</span>
                  <span className="text-lg font-extrabold leading-none">--</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-emerald-900 transition-colors">デジタルデトックス旅</h3>
                  <div className="flex items-center gap-2 text-xs text-emerald-800/70 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>チェンマイ</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-emerald-600 bg-white border border-emerald-200 px-3 py-1 rounded-full">
                  詳細未定
                </span>
              </div>
            </div>

            {/* Event 3: Nomad Camp */}
            <div className="group flex items-center justify-between p-4 rounded-xl bg-indigo-50/40 border border-indigo-100 hover:border-indigo-200 transition-all hover:shadow-sm hover:translate-x-1 cursor-default">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-indigo-100 flex flex-col items-center justify-center text-indigo-600 shadow-sm">
                  <span className="text-[10px] font-bold leading-none uppercase tracking-wide opacity-70">JUN</span>
                  <span className="text-lg font-extrabold leading-none">--</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-900 transition-colors">ノマド合宿 vol.6</h3>
                  <div className="flex items-center gap-2 text-xs text-indigo-800/70 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>未定</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-indigo-600 bg-white border border-indigo-200 px-3 py-1 rounded-full">
                  詳細未定
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Nomad Camp Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-[1px] w-8 bg-slate-300"></div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 tracking-tight">Nomad Camp</h2>
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
                      <span className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase">Coming Soon</span>
                      <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-500"></div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">
                      2026.06
                    </h3>
                    <p className="text-amber-200/60 font-medium tracking-wide">
                      Next ノマド合宿
                    </p>
                  </div>

                  <div className="text-sm font-medium text-neutral-400 bg-neutral-900/50 px-6 py-4 rounded-lg border border-white/5 backdrop-blur-sm group-hover:border-amber-500/20 transition-colors">
                    <p className="flex items-center justify-center sm:justify-start gap-3 mb-1 text-neutral-200">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      場所・日程調整中
                    </p>
                    <p className="text-xs text-neutral-600 text-center sm:text-left pl-7">
                      詳細が決まり次第お知らせします
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">
                  2泊3日のノマド合宿<br />
                  ルールは「自由」
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  運営が用意するのは、非日常を味わえる「豪華ヴィラ」だけ。<br />
                  スケジュールも講義もありません。<br />
                  プールサイドで優雅に仕事をするもよし、夜通し語り合うもよし。<br />
                  ノマドらしく、それぞれのスタイルで楽しむ合宿です。
                </p>



              </div>




              {/* Past Achievements */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-500" />
                  過去の開催実績
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-800">Vol.5 プーケット</span>
                    <span className="text-slate-500">2024.10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-800">Vol.4 バリ島 ウブド</span>
                    <span className="text-slate-500">2024.04</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-800">Vol.3 パタヤ</span>
                    <span className="text-slate-500">2023.12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="font-medium text-slate-800">Vol.2 ベトナム ダナン</span>
                    <span className="text-slate-500">2023.10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-800">Vol.1 チェンマイ</span>
                    <span className="text-slate-500">2023.05</span>
                  </div>
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
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold">
              Main Contents
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-6">YouTubeでリアルな情報を発信中</h2>
          <p className="text-lg text-muted-foreground mb-8">
            文章だけでは伝わらない、現地の空気感やノマドの生の声をお届けします。
          </p>
          <div className="mb-8">
            <YouTubeEmbed videoId="B_HkXPiv7ow" />
          </div>
          <a
            href="https://www.youtube.com/@T78community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            YouTubeを見る
          </a>
        </div>
      </section>
    </div>
  );
}
