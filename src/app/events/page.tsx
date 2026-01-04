import { events } from "@/data/mockData";
import { ArrowUpRight, Sparkles, Users, PartyPopper } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "イベント情報 | Nomad in Thailand",
    description: "タイ在住の日本人ノマド向けイベント情報。ミートアップや交流会。",
};

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-sky-400 via-cyan-300 to-yellow-200 text-sky-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -mr-20 -mt-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="text-center md:text-left md:w-1/2">
                            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/50 text-sky-700 shadow-sm">
                                <Sparkles className="w-4 h-4 text-sky-600" />
                                <span className="tracking-wide">COMMUNITY EVENTS</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-sm text-sky-900">
                                ノマド仲間たちと、<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                                    定期イベント実施中。
                                </span>
                            </h1>
                            <p className="text-lg md:text-2xl text-sky-800/80 font-medium leading-relaxed max-w-xl">
                                緩く自由につながりましょう。
                            </p>
                        </div>

                        <div className="md:w-1/2 flex justify-center md:justify-end relative">
                            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-bounce-slow">
                                <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl transform scale-90"></div>
                                <Image
                                    src="/character/nomad-dog-waving-new.png"
                                    alt="Nomad Dog Waving"
                                    fill
                                    className="object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                                <div className="absolute -bottom-6 -right-6 bg-orange-400 text-white font-black text-sm px-4 py-2 rounded-full transform rotate-12 shadow-lg border-2 border-white/50">
                                    JOIN US! 🇹🇭
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-1">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 30L60 35C120 40 240 50 360 55C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z" fill="hsl(var(--background))" />
                    </svg>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl border border-sky-100 shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-gradient-to-r from-teal-500 to-sky-500 p-8 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                        <h2 className="text-2xl md:text-3xl font-black mb-3 relative z-10 flex items-center justify-center gap-3">
                            <PartyPopper className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
                            Nomad in Thailand🇹🇭
                        </h2>
                        <p className="opacity-90 font-medium text-lg relative z-10">ここから始まる、新しい出会い。</p>
                    </div>

                    <div className="p-10 text-center space-y-8">
                        <div className="space-y-4 text-slate-600">
                            <p className="text-lg font-medium leading-loose">
                                イベントに参加するには、<br />
                                以下のフォームから申し込みをお願いします。
                            </p>

                            <div className="inline-block bg-sky-50 p-6 rounded-2xl border border-sky-100 text-left w-full max-w-md mx-auto">
                                <h3 className="font-bold text-sky-900 mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    こんなイベントやってます
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700 bg-white p-2 rounded-lg shadow-sm border border-sky-50">
                                        <span className="text-xl">🍻</span>
                                        <span className="font-medium">金曜夜のゆる飲み会</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 bg-white p-2 rounded-lg shadow-sm border border-sky-50">
                                        <span className="text-xl">💻</span>
                                        <span className="font-medium">もくもく作業会 @コワーキング</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700 bg-white p-2 rounded-lg shadow-sm border border-sky-50">
                                        <span className="text-xl">🧖</span>
                                        <span className="font-medium">サウナ&アイスバス会</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a
                            href="https://forms.gle/2zHKXNH9XtRM5dsP9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black text-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105 active:scale-95"
                        >
                            <span>コミュニティに参加する</span>
                            <ArrowUpRight className="w-6 h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>

                        <p className="text-xs text-slate-400 font-medium">
                            ※ 20〜30代中心のコミュニティです。<br />しつこい勧誘や営業目的の方は参加をお断りしています。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
