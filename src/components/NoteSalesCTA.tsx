"use client";

import { useLocale } from "next-intl";
import { ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import Image from "next/image";

interface NoteSalesCTAProps {
    variant?: "inline" | "sidebar";
}

export default function NoteSalesCTA({ variant = "inline" }: NoteSalesCTAProps) {
    const locale = useLocale();

    // Only show for JA locale for now as the note is in Japanese
    if (locale !== 'ja') return null;

    const noteUrl = "https://note.com/nomad_dayo/n/neee79f24c62b";

    return (
        <div className="group relative overflow-hidden rounded-2xl border-2 border-[#2a9d8f] bg-white shadow-lg transition-all hover:shadow-xl my-10">
            {/* Badge - High Impact */}
            <div className="absolute right-0 top-0 z-10 rounded-bl-xl bg-[#e76f51] px-4 py-1 text-sm font-bold text-white shadow-md">
                実際の提出書類
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Image Section - Visual Hook */}
                <div className="relative h-48 w-full md:h-auto md:w-2/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden" />
                    <Image
                        src="/images/dtv-visa-thumbnail.png" // Fallback to existing DTV image if specific thumbnail not ready
                        alt="DTV Visa Note"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 z-20 md:hidden">
                        <span className="inline-block rounded bg-[#2a9d8f] px-2 py-0.5 text-xs font-bold text-white">
                            合格実績あり
                        </span>
                    </div>
                </div>

                {/* Content Section - Text Hook */}
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                    <div className="mb-2 hidden md:block">
                        <span className="inline-flex items-center gap-1 rounded bg-[#2a9d8f]/10 px-2 py-1 text-xs font-bold text-[#2a9d8f]">
                            <ShieldCheck className="h-3 w-3" />
                            DTVビザ申請サポート
                        </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900 md:text-2xl">
                        <span className="inline-block">申請料5万円が没収される前に。</span>
                        <br className="hidden md:block" />
                        <span className="inline-block">
                            <span className="text-[#e76f51]">「審査通過」した提出書類</span>を全公開
                        </span>
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-slate-600">
                        不備で却下されると履歴が傷つきます。移住者2名が実際に通過した「ポートフォリオ」と「英文履歴書」をそのまま真似して、確実にビザを勝ち取りませんか？
                    </p>

                    <a
                        href={noteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2a9d8f] px-6 py-3.5 font-bold text-white transition-all hover:bg-[#268c80] hover:scale-[1.02] shadow-md md:w-auto"
                    >
                        <span>合格書類テンプレートを見る</span>
                        <ArrowRight className="h-4 w-4" />
                    </a>


                    <p className="mt-3 text-center text-xs text-slate-500 md:text-left">
                        <span className="font-bold text-[#e76f51]">※現在リリース記念価格 (¥2,980→1,980)</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
