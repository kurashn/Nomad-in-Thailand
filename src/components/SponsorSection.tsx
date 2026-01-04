"use client";

import Link from "next/link";
import { ArrowRight, Handshake, Star } from "lucide-react";

export default function SponsorSection() {
    return (
        <section className="py-20 px-4 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 shadow-xl shadow-amber-500/20">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-3xl rounded-3xl"></div>

                    <div className="relative bg-slate-900 rounded-[22px] px-6 py-12 md:p-12 text-center overflow-hidden">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -ml-16 -mb-32 pointer-events-none"></div>

                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-600 text-white mb-8 shadow-lg shadow-amber-500/30">
                            <Handshake className="w-8 h-8" />
                        </div>

                        {/* Content */}
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 tracking-tight">
                            パートナー・スポンサー募集
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>

                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            海外ノマドポッドキャストの活動を応援していただける<br className="hidden md:block" />
                            個人・企業様を募集しています。<br />
                            スポンサー様は、感謝の気持ちを込めて動画内でご紹介させていただきます。
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold hover:shadow-lg hover:shadow-amber-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
                            >
                                協業のお問い合わせ
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-amber-500/60 uppercase tracking-widest font-semibold">
                            <Star className="w-3 h-3" />
                            Official Partner
                            <Star className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
