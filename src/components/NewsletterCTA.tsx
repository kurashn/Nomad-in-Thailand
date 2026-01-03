"use client";

import { Mail, ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

export default function NewsletterCTA({ isInline = false }: { isInline?: boolean }) {
    if (isInline) {
        return (
            <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Gift className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">無料：バンコクノマド完全マップ配布中</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            カフェ、コワーキング、住みやすいエリアを網羅したPDFをプレゼント。
                            メルマガ先行登録で今すぐゲットしよう。
                        </p>
                        <Link
                            href="https://forms.gle/xyz" // Replace with actual Google Form or Tally link later
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md text-sm"
                        >
                            特典を受け取って登録する <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Default centered layout for sections
    return (
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6 animate-pulse">
                <Gift className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">ノマド攻略メルマガ（先行登録）</h2>
            <p className="text-lg text-muted-foreground mb-8">
                バンコク移住の裏話や、リアルな収支、ここだけのイベント情報を配信。<br />
                今なら<span className="font-bold text-primary">「バンコクノマド完全マップPDF」</span>を無料プレゼント中！
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="https://forms.gle/xyz" // Replace with actual Google Form or Tally link later
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center"
                >
                    <Mail className="w-5 h-5 mr-2" />
                    無料で特典を受け取る
                </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
                ※ 登録は無料です。いつでも解除できます。
            </p>
        </div>
    );
}
