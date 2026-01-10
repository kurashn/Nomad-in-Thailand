import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, HeartPulse, Plane, CheckCircle, AlertTriangle, CalendarDays, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "【2026年最新】海外旅行保険は「SafetyWing」一択。ノマドが選ぶ最強のサブスク保険",
    description: "「いつ帰るかわからない」ノマドに最適な、月額制（サブスク）の海外旅行・医療保険。クレジットカード付帯保険が切れた後の選択肢として、世界中のノマドに愛される理由を解説します。",
};

export default function SafetyWingPage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/safetywing_hero.png"
                    alt="SafetyWing Nomad Insurance Guide"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="/nomad-info" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        記事一覧に戻る
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        旅の期間は、決めなくていい。<br />
                        ノマドのための「サブスク型」保険
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro (PAS Framework) */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6">
                        海外ノマドをしていて、一番の悩みどころ。それは<strong>「保険」</strong>ではないでしょうか？
                    </p>
                    <p className="leading-relaxed mb-6">
                        クレジットカードの付帯保険は「最初の90日」で切れてしまう。<br />
                        でも、日本の海外旅行保険に入ろうとすると、帰国日が決まっていないと申し込めなかったり、高額な一括払いを求められたり...。<br />
                        <br />
                        <strong>「もっと自由で、柔軟な保険が欲しい」</strong>
                    </p>
                    <p className="leading-relaxed">
                        そんな世界中のノマドの声から生まれたのが、ノルウェー発のスタートアップ<strong>「SafetyWing（セーフティウィング）」</strong>です。<br />
                        Netflixのように月額で支払えて、いつでも解約できる、まさにデジタルノマドのための保険です。
                    </p>

                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            この記事でわかること
                        </h3>
                        <ul className="list-none pl-0 space-y-2 m-0">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> SafetyWingがノマドに最強な3つの理由
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> クレカ付帯保険との決定的な違い
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> バイク事故や歯科治療は対象？細かい補償内容の疑問
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Affiliate Button (Top) */}
                <div className="flex justify-center mb-16">
                    <a
                        href="https://safetywing.com/nomad-insurance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700"
                    >
                        <span>SafetyWingで保険料を見積もる</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Comparison Table */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">比較：他の保険となにが違う？</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">種類</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">SafetyWing</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">クレカ付帯保険</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">日本の掛け捨て保険</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-teal-50/50">
                                    <td className="p-4 font-bold text-slate-700">期間</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">無制限 (サブスク)</td>
                                    <td className="p-4 text-sm">90日以内</td>
                                    <td className="p-4 text-sm">指定期間のみ</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">申込み</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">海外からOK</td>
                                    <td className="p-4 text-sm">自動/利用付帯</td>
                                    <td className="p-4 text-sm text-red-500">出国後は不可が殆ど</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">コスト</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">安い (約$56/月)</td>
                                    <td className="p-4 text-sm">無料 (年会費のみ)</td>
                                    <td className="p-4 text-sm">高い (1〜2万円/月)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">一時帰国</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">カバーされる</td>
                                    <td className="p-4 text-sm">対象外</td>
                                    <td className="p-4 text-sm">対象外</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Why SafetyWing? (3 Benefits) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">ここがすごい！3つの特徴を深掘り</h2>
                    <div className="space-y-8">
                        {/* Benefit 1 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">1</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-teal-100 inline-flex items-center justify-center text-teal-600 font-bold text-sm mr-2">1</span>
                                    完全サブスク制。やめたい時にやめられる
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    4週間ごとの自動更新です。「来月日本に帰ることにした」と思ったら、その時点でマイページから自動更新をOFFにするだけ。<br />
                                    違約金も手数料もありません。旅の予定が柔軟なノマドにとって、これが最大のメリットです。
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">2</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-teal-100 inline-flex items-center justify-center text-teal-600 font-bold text-sm mr-2">2</span>
                                    医療費だけじゃない。旅のトラブルもカバー
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    怪我や病気の治療費はもちろん、ロストバゲージ（手荷物紛失）、飛行機の遅延、緊急帰国なども補償範囲に含まれています。<br />
                                    「ノマド保険」という名前ですが、しっかりとした「総合旅行保険」としての機能を持っています。
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">3</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-teal-100 inline-flex items-center justify-center text-teal-600 font-bold text-sm mr-2">3</span>
                                    日本への「一時帰国」もカバー
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    90日ごとに最大30日間（アメリカ国籍以外）、母国（日本）での滞在中も医療保険が適用されます。<br />
                                    一時帰国中に風邪を引いたり怪我をしても安心です。これは他の海外発の保険にはなかなかない機能です。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coverage Details FAQ */}
                <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <HelpCircle className="w-7 h-7 text-teal-500" />
                        これは補償される？細かい疑問を解説
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">Q. バイク事故は？</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-green-600 font-bold">A. 条件付きで対象です。</span><br />
                                エンジン排気量に応じた正規の運転免許証（国際免許証など）を持っており、ヘルメットを着用している場合は補償対象となります。無免許運転は対象外です。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">Q. 歯の治療（歯科）は？</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-amber-500 font-bold">A. 限定的です。</span><br />
                                事故による歯の損傷や激痛を伴う緊急治療のみ対象。定期検診やクリーニングは対象外です。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">Q. コロナウイルスは？</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-green-600 font-bold">A. 対象です。</span><br />
                                他の病気と同様に扱われ、治療費や検査費（医師の指示がある場合）が補償されます。
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">Q. パソコン盗難は？</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-amber-500 font-bold">A. オプションで対象です。</span><br />
                                標準プランでは対象外ですが、追加料金（+$10/月）を払うことで、$1000/件（年間$3000迄）の盗難補償をつけることができます。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>

                    <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                        <CalendarDays className="w-6 h-6 text-teal-400" />
                        驚きの低価格
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 relative z-10 items-center">
                        <div>
                            <p className="text-4xl font-bold mb-2 text-teal-400">$56.28<span className="text-lg text-slate-300 font-normal"> / 4週間</span></p>
                            <p className="text-sm text-slate-400 mb-6">（10歳〜39歳の場合 ※米国を除く）</p>
                            <p className="text-slate-300 leading-relaxed">
                                1日あたり約2ドル（300円）で、最大25万ドルの医療補償が得られます。<br />
                                日本の海外旅行保険が1ヶ月1〜2万円することを考えると、圧倒的なコスパです。
                            </p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-white">含まれる主な補償</h3>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> 最大25万ドルの医療費</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> 緊急医療搬送（最大10万ドル）</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> 旅行遅延・ロストバゲージ</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> コロナウイルス関連の治療</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Important Considerations */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-amber-500" />
                        ここに注意！免責金額について
                    </h2>
                    <p className="mb-6 text-slate-600 leading-relaxed">
                        契約する前に必ず知っておくべき点が<strong>「免責金額（Deductible）」</strong>です。
                    </p>
                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                        <h3 className="font-bold text-lg mb-3 text-amber-800">250ドルの自己負担があります</h3>
                        <p className="text-sm text-amber-900 leading-relaxed mb-4">
                            医療費が発生した場合、最初の250ドルまでは自己負担となり、それを超えた分がSafetyWingから支払われます。<br />
                            つまり「ちょっと風邪引いて薬もらった（50ドル）」という場合は補償されません。「入院して手術した（3000ドル）」というような、大きなトラブルに備えるための保険だと割り切りましょう。
                        </p>
                        <p className="text-xs text-amber-700 bg-amber-100/50 p-3 rounded">
                            ※250ドルは「1回の事故ごと」ではなく「保険期間の通算」です。一度250ドルを超えれば、その後の請求は最初からカバーされます。
                        </p>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="text-center bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 border border-teal-100">
                    <HeartPulse className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        「安心」を買って、冒険に出よう。
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        いつ日本に帰るかわからない。<br />
                        そんな自由なあなたの旅を、SafetyWingがサポートします。
                    </p>
                    <a
                        href="https://safetywing.com/nomad-insurance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-teal-600 rounded-full hover:bg-teal-700 hover:shadow-lg hover:scale-105"
                    >
                        SafetyWingをチェックする
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>

                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "【2026年最新】海外旅行保険は「SafetyWing」一択。ノマドが選ぶ最強のサブスク保険",
                            "image": "/images/safetywing_hero.png",
                            "description": "「いつ帰るかわからない」ノマドに最適な、月額制（サブスク）の海外旅行・医療保険。クレジットカード付帯保険が切れた後の選択肢として、世界中のノマドに愛される理由を解説します。",
                            "author": {
                                "@type": "Person",
                                "name": "Nomad in Thailand",
                                "url": "https://nomad-th.com"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Nomad in Thailand",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://nomad-th.com/images/logo.png"
                                }
                            }
                        })
                    }}
                />
            </div>
        </article>
    );
}
