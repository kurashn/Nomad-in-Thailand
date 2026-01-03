import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wallet, Building2, Utensils, Train, AlertTriangle, CheckCircle, CreditCard, Banknote } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
    title: "タイ移住の「お金」と「税金」の話 2026 | ノマド生活費と税務ルール | のまどくん",
    description: "バンコクノマドのリアルな生活費（5万〜15万THB）と、2024年改正の税務ルール（180日ルール・国外源泉所得）を徹底解説。DTVビザ利用者のための銀行口座開設やWise活用術も。",
};

export default function TaxMoneyGuidePage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/tax_money_hero.png"
                        alt="Money and Tax for Digital Nomads"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="/nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        記事一覧に戻る
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        タイ移住の「お金」と「税金」の話<br />
                        <span className="text-2xl md:text-3xl font-medium mt-2 block text-white/90">生活費・税務居住者・銀行口座</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">

                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl leading-relaxed font-medium text-foreground/80">
                        「タイは物価が安いって本当？」<br />
                        「日本の仕事をしていても、タイで税金を払う必要があるの？」
                    </p>
                    <p className="text-base text-muted-foreground">
                        これらは、これからタイ渡航を目指すノマドの方から最も多く寄せられる質問です。
                        特に2024年からの税制改正により、タイの税金ルールは少し複雑になっています。
                        <br /><br />
                        この記事では、バンコクでのリアルな生活費シミュレーションから、知っておくべき「180日ルール」、そして賢いお金の持ち込み方までを網羅的に解説します。
                    </p>
                </div>

                {/* Section 1: Cost of Living */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Wallet className="w-6 h-6" /></span>
                        バンコクの生活費シミュレーション
                    </h2>

                    <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm mb-8">
                        <div className="relative h-64 w-full bg-green-50">
                            <Image
                                src="/images/living_cost_visual.png"
                                alt="Cost of Living Breakdown"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-4">ライフスタイル別・月予算目安</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted text-muted-foreground uppercase">
                                        <tr>
                                            <th className="px-6 py-3 rounded-l-lg">項目</th>
                                            <th className="px-6 py-3">節約モード</th>
                                            <th className="px-6 py-3">標準（快適）</th>
                                            <th className="px-6 py-3 rounded-r-lg">リッチ</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-muted">
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Building2 className="w-4 h-4 text-blue-500" /> 家賃
                                            </td>
                                            <td className="px-6 py-4">10,000 THB<br /><span className="text-xs text-muted-foreground">スタジオ/郊外</span></td>
                                            <td className="px-6 py-4">20,000 THB<br /><span className="text-xs text-muted-foreground">1BR/中心部</span></td>
                                            <td className="px-6 py-4">40,000 THB+<br /><span className="text-xs text-muted-foreground">高級コンド</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Utensils className="w-4 h-4 text-orange-500" /> 食費
                                            </td>
                                            <td className="px-6 py-4">9,000 THB<br /><span className="text-xs text-muted-foreground">屋台中心</span></td>
                                            <td className="px-6 py-4">15,000 THB<br /><span className="text-xs text-muted-foreground">カフェ・日本食</span></td>
                                            <td className="px-6 py-4">30,000 THB+<br /><span className="text-xs text-muted-foreground">外食三昧</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Train className="w-4 h-4 text-purple-500" /> 交通・通信他
                                            </td>
                                            <td className="px-6 py-4">3,000 THB</td>
                                            <td className="px-6 py-4">5,000 THB</td>
                                            <td className="px-6 py-4">10,000 THB</td>
                                        </tr>
                                        <tr className="bg-primary/5 font-bold">
                                            <td className="px-6 py-4 text-primary">合計 (THB)</td>
                                            <td className="px-6 py-4 text-primary">22,000 THB</td>
                                            <td className="px-6 py-4 text-primary">40,000 THB</td>
                                            <td className="px-6 py-4 text-primary">80,000 THB+</td>
                                        </tr>
                                        <tr className="bg-primary/5 font-bold text-lg">
                                            <td className="px-6 py-4 text-primary">合計 (JPY)</td>
                                            <td className="px-6 py-4 text-primary">約 9万円</td>
                                            <td className="px-6 py-4 text-primary">約 17万円</td>
                                            <td className="px-6 py-4 text-primary">約 34万円+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 text-right">※1 THB = 4.2 JPY で計算 (2025年現在)</p>

                            {/* YouTube Embed */}
                            <div className="mt-8 border-t border-muted pt-8">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="text-red-600">🎥</span> 動画で見る：20代ノマドのリアルな出費
                                </h4>
                                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/pDqbwEahHZI?si=5iltI4-TXCSYCxC9"
                                        title="Bangkok Cost of Living Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <p className="text-sm text-center text-muted-foreground mt-2">
                                    家賃、食費、遊び代まで... 実際の1ヶ月のレシートを全公開しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Tax Rules */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-red-100 text-red-600 p-2 rounded-lg"><AlertTriangle className="w-6 h-6" /></span>
                        税金のリアル（180日ルール）
                    </h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                            <div className="w-full md:w-1/2 relative h-56 rounded-xl overflow-hidden shadow-sm bg-white">
                                <Image
                                    src="/images/tax_residency_visual.png"
                                    alt="Tax Residency Rule"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-bold mb-3 text-red-600">Q. 日本の仕事の収入に、タイで税金はかかる？</h3>
                                <p className="leading-relaxed text-foreground/80 mb-4">
                                    結論から言うと、<span className="font-bold underline decoration-red-400 decoration-2">「1暦年（1月〜12月）のうち、合計180日以上タイに滞在」</span>すると、タイの税務居住者とみなされます。
                                </p>
                                <div className="space-y-2 text-sm text-foreground/70">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                        <span>180日未満の滞在 = タイでの納税義務なし（原則）</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                        <span>180日以上の滞在 = <b className="text-foreground">全世界所得</b>に対して課税の可能性あり</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-red-100 p-6 rounded-xl">
                            <h4 className="font-bold text-red-600 flex items-center gap-2 mb-3">
                                <AlertTriangle className="w-5 h-5" />
                                2024年以降のルール改正に注意
                            </h4>
                            <p className="text-sm leading-relaxed text-foreground/80">
                                かつては「稼いだお金を翌年以降にタイに持ち込めば非課税」というルールがありましたが、2024年の改正により、<strong>「いつ稼いだかに関わらず、タイに持ち込んだ海外収入はすべて課税対象」</strong>となる運用変更がなされています。<br /><br />
                                DTVビザ（Destination Thailand Visa）取得者も例外ではありません。180日以上滞在する場合は、必ず専門家（会計士など）に相談することをお勧めします。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Money Management */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><CreditCard className="w-6 h-6" /></span>
                        お金の管理・持ち込み術
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Wise */}
                        <div className="bg-card border border-muted p-6 rounded-xl">
                            <div className="w-12 h-12 bg-[#9FE870] rounded-full flex items-center justify-center mb-4">
                                <span className="font-bold text-[#163300]">Wise</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Wise（ワイズ）は必須</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                日本の銀行からタイのATMで引き出すのは手数料が高いです。Wiseデビットカードを使えば、実勢レートに近い手数料で決済できます。<br />
                                渡航前に必ず作成しておきましょう。
                            </p>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">年会費無料</span>
                        </div>

                        {/* Bangkok Bank */}
                        <div className="bg-card border border-muted p-6 rounded-xl">
                            <div className="w-12 h-12 bg-[#1e2e85] rounded-full flex items-center justify-center mb-4 text-white">
                                <Banknote className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">バンコク銀行の口座開設</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                長期滞在なら現地口座開設が便利です。バンコク銀行（Bangkok Bank）の本店では、ワークパーミットがなくても、日本大使館の在留届証明などがあれば口座開設できるケースがあります。
                            </p>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">要確認</span>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "日本円で月いくらあれば生活できますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "「住居費抜き」なら月5〜6万円でも可能です。しかし、快適なコンドミニアム（2万バーツ〜）に住み、たまに日本食やカフェを楽しむなら、最低でも月15〜20万円の収入がある状態で渡航することをお勧めします。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "観光ビザ（ノービザ）でも銀行口座は作れますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "非常に厳しくなっていますが、バンコク銀行の本店では、「在留届出済証明（日本大使館で発行）」とパスポートがあれば開設できるケースがあります。ただし、担当者や時期によって対応が変わるため、確実ではありません。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "180日未満の滞在なら、税金は全くかかりませんか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "タイ国内で働いて給与を得ている場合を除き、日本の仕事をリモートで行っているだけであれば、180日未満の滞在ではタイの税務居住者にはならず、タイでの課税は発生しないのが一般的です。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><CheckCircle className="w-6 h-6" /></span>
                        よくある質問 (FAQ)
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 日本円で月いくらあれば生活できますか？
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. 「住居費抜き」なら月5〜6万円でも可能です。しかし、快適なコンドミニアム（2万バーツ〜）に住み、たまに日本食やカフェを楽しむなら、最低でも月15〜20万円の収入がある状態で渡航することをお勧めします。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 観光ビザ（ノービザ）でも銀行口座は作れますか？
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. 非常に厳しくなっていますが、バンコク銀行の本店や一部の支店では、「在留届出済証明（日本大使館で発行）」とパスポートがあれば開設できるケースがあります。ただし、担当者や時期によって対応が変わるため、確実ではありません。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 180日未満の滞在なら、税金は全くかかりませんか？
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. タイ国内で働いて給与を得ている場合を除き、日本の仕事をリモートで行っているだけであれば、180日未満の滞在ではタイの税務居住者にはならず、タイでの課税は発生しないのが一般的です。（※個別の事情によるため、詳細は専門家にご確認ください）
                            </div>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                <div className="mt-8 text-center">
                    <Link href="/nomad-info" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
