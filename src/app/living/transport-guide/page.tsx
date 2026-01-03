import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Car, Smartphone, Zap, Train, AlertTriangle, CheckCircle, Info } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
    title: "【2026年版】バンコク移動手段完全攻略！Grab vs Bolt 料金比較とMuvMiの使い方 | のまどくん",
    description: "バンコクのタクシーアプリ（Grab, Bolt）の料金・使い勝手を徹底比較。最新の電動トゥクトゥク「MuvMi」の乗り方や、電車（BTS/MRT）のVISAタッチ事情まで、2026年の移動情報を完全網羅。",
};

export default function TransportGuidePage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/transport_hero.png"
                    alt="Bangkok Transportation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="/living" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        生活情報一覧に戻る
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        【2026年版】バンコク移動手段完全攻略！
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">Grab, Bolt, MuvMiを使いこなせ</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl leading-loose font-medium text-foreground/80">
                        「メーターを使わないタクシー」「高額なトゥクトゥクの勧誘」...<br />
                        かつてバンコクの移動はストレスの戦いでしたが、2026年の今は違います。
                    </p>
                    <p className="leading-relaxed">
                        スマホアプリを使えば、明朗会計で、英語を話す必要すらなく、エアコンの効いた車で目的地に到着できます。
                        特にデジタルノマドにとって、移動の快適さはQoL（生活の質）に直結します。<br /><br />
                        この記事では、バンコク在住者が毎日使っている<strong>「3つの神アプリ」</strong>と、賢い使い分け方法を伝授します。
                    </p>
                </div>

                {/* Section 1: Grab vs Bolt */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Car className="w-6 h-6" /></span>
                        1. 王道アプリ対決：Grab vs Bolt
                    </h2>

                    <p className="mb-6 text-muted-foreground">
                        基本的にはこの2つのアプリがあればどこへでも行けます。それぞれの特徴を理解して使い分けるのが「バンコク流」です。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Grab Card */}
                        <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">品質重視</div>
                            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">Grab (グラブ)</h3>
                            <ul className="space-y-3 text-sm text-foreground/80">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span><strong>捕まりやすい:</strong> 車の台数が圧倒的に多い</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span><strong>機能が豊富:</strong> フードデリバリーや配送もこれ1つ</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span>料金は少し高め (日本のタクシーの半額程度)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Bolt Card */}
                        <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">コスパ重視</div>
                            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">Bolt (ボルト)</h3>
                            <ul className="space-y-3 text-sm text-foreground/80">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                                    <span><strong>とにかく安い:</strong> Grabより2〜3割安いことが多い</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                                    <span><strong>バイタクに強い:</strong> バイク便がすぐ捕まる</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span>雨の日やラッシュ時は捕まりにくい</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                        <div className="text-sm">
                            <p className="font-bold mb-1">おすすめの使い分け</p>
                            <p className="text-muted-foreground">
                                まずは<strong>Bolt</strong>で検索し、車が見つからない時や急いでいる時は<strong>Grab</strong>を使う、という「二刀流」が最も賢いです。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: MuvMi */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Zap className="w-6 h-6" /></span>
                        2. 近距離最強：MuvMi (ムーブミー)
                    </h2>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">電動トゥクトゥクのシェアサービス</h3>
                                <p className="leading-relaxed text-foreground/80 mb-6">
                                    「MuvMi」は、アプリで呼べる乗り合い型の電動トゥクトゥクです。
                                    プロンポン、トンロー、アーリーなどの主要エリアを網羅しており、駅やコンドミニアムへの「ちょっとした移動」に最適です。
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        安い (10バーツ〜)
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        エコで静か
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        風が気持ちいい！
                                    </div>
                                </div>


                            </div>
                            <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden bg-white shadow-md border border-blue-100 flex items-center justify-center">
                                {/* Would be an image of MuvMi, using an icon for now */}
                                <div className="text-center">
                                    <Zap className="w-16 h-16 text-blue-500 mx-auto mb-2" />
                                    <span className="text-xs text-muted-foreground">MuvMi App Icon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Trains */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Train className="w-6 h-6" /></span>
                        3. 電車 (BTS / MRT)
                    </h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        渋滞知らずの電車は、時間の読めないバンコクで最強の味方です。<br />
                        お支払いは<strong>VISAタッチ</strong>が使えます！...と言いたいところですが、注意が必要です。
                    </p>

                    <div className="bg-card border border-muted rounded-xl divide-y divide-muted">
                        <div className="p-4 flex items-start gap-4">
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-bold text-sm shrink-0 w-16 text-center">MRT<br />(地下鉄)</div>
                            <div>
                                <p className="font-bold mb-1">VISAタッチ OK 👍</p>
                                <p className="text-sm text-muted-foreground">日本のクレジットカード（VISA/Master）を改札にかざすだけで乗れます。切符を買う列に並ぶ必要はありません。</p>
                            </div>
                        </div>
                        <div className="p-4 flex items-start gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-bold text-sm shrink-0 w-16 text-center">BTS<br />(高架)</div>
                            <div>
                                <p className="font-bold mb-1">VISAタッチ NG 🙅‍♂️</p>
                                <p className="text-sm text-muted-foreground">まだ対応していません。券売機に並ぶのを避けるため、<strong>Rabbit Card（ラビットカード）</strong>というICカードを購入しましょう。駅の窓口で買えます。</p>
                            </div>
                        </div>
                    </div>
                </section>

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
                                    "name": "GrabとBoltどちらが安いですか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "基本的にBoltの方が2〜3割安いことが多いですが、雨の日やラッシュ時は車が捕まりにくい傾向があります。急ぎの時はGrabと使い分けるのがおすすめです。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "BTSでVISAタッチは使えますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "いいえ、2026年現在もまだBTS（高架鉄道）はVISAタッチに対応していません（MRT地下鉄は対応済）。BTSに乗るにはRabbit Cardを買うか、券売機でチケットを買う必要があります。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Section */}
                <section className="mb-16 mt-12">
                    <h2 className="text-2xl font-bold mb-6">よくある質問 (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-muted rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-foreground">
                                Q. GrabとBoltどちらが安いですか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                                基本的に<strong>Boltの方が2〜3割安い</strong>ことが多いですが、雨の日やラッシュ時は車が捕まりにくい傾向があります。急ぎの時はGrab、時間に余裕がある時はBoltと使い分けるのがおすすめです。
                            </p>
                        </details>
                        <details className="group bg-white border border-muted rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-foreground">
                                Q. BTSでVISAタッチは使えますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                                いいえ、2026年現在もまだBTS（高架鉄道）はVISAタッチに対応していません（MRT地下鉄は対応済）。BTSに乗るには<strong>Rabbit Card（ラビットカード）</strong>を買うか、券売機でチケットを買う必要があります。
                            </p>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                <div className="mt-8 text-center">
                    <Link href="/living" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
