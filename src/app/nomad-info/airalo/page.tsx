import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone, Globe, Wifi, CheckCircle, AlertTriangle, Plane } from "lucide-react";

export const metadata: Metadata = {
    title: "【2026年最新】海外旅行の通信は「Airalo」一択。空港のSIM行列にはもう並ばない",
    description: "「飛行機を降りた瞬間にネットが繋がる」魔法のような体験。世界初のeSIMストア「Airalo（エラロ）」の使い方から、メリット・デメリットまで徹底解説します。",
};

export default function AiraloPage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/airalo_hero.png"
                    alt="Airalo eSIM Guide"
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
                        もう空港で並ばない。<br />
                        次世代の常識「eSIM」完全ガイド
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro (PAS Framework) */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6">
                        海外の空港に到着した直後の風景を思い出してみてください。<br />
                        荷物を受け取り、出口へ向かうとそこにあるのは... <strong>「SIMカード売り場の長蛇の列」</strong>です。
                    </p>
                    <p className="leading-relaxed mb-6">
                        長時間のフライトでクタクタなのに、重い荷物を持って列に並び、店員にスマホを渡してSIMを入れ替えてもらう...。<br />
                        小さなSIMカードを紛失しないように気を使い、帰国時にはまた入れ替える手間。<br />
                        <br />
                        <strong>「もっとスマートに、簡単にネットに繋ぎたい」</strong>
                    </p>
                    <p className="leading-relaxed">
                        そんな旅人の願いを叶えるのが、世界初のeSIMストアアプリ<strong>「Airalo（エラロ）」</strong>です。<br />
                        これを使えば、飛行機が着陸した瞬間、まだシートベルトサインが消える前にネットに繋がることができます。
                    </p>

                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            この記事でわかること
                        </h3>
                        <ul className="list-none pl-0 space-y-2 m-0">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> Airaloを使うべき3つの理由
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> 物理SIM、Wi-Fiレンタルとの徹底比較
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> 初心者でも迷わない設定・購入手順
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Affiliate Button (Top) */}
                <div className="flex justify-center mb-16">
                    <a
                        href="https://www.airalo.com/ja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    >
                        <span>Airalo公式サイトを見る</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Comparison Table */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">徹底比較：旅行のネット手段、どれが正解？</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">手段</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">費用</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">手間</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">特徴</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-blue-50/50">
                                    <td className="p-4 font-bold text-blue-600 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Airalo (eSIM)
                                    </td>
                                    <td className="p-4 text-sm">安い<br /><span className="text-xs text-slate-500">($4.50〜)</span></td>
                                    <td className="p-4 text-sm text-green-600 font-bold">最小<br /><span className="text-xs font-normal text-slate-500">アプリで完結</span></td>
                                    <td className="p-4 text-sm">SIM入替不要・即時開通。紛失リスクなし。</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">現地SIM</td>
                                    <td className="p-4 text-sm">最安</td>
                                    <td className="p-4 text-sm text-red-500 font-bold">大<br /><span className="text-xs font-normal text-slate-500">空港で並ぶ・入替</span></td>
                                    <td className="p-4 text-sm">安いが、到着直後の手続きが面倒。番号が変わる。</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">ポケットWi-Fi</td>
                                    <td className="p-4 text-sm">高い</td>
                                    <td className="p-4 text-sm">中<br /><span className="text-xs text-slate-500">受取/返却・充電</span></td>
                                    <td className="p-4 text-sm">荷物が増える。充電管理が必要。複数人でシェアなら〇。</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">キャリアローミング</td>
                                    <td className="p-4 text-sm text-red-500 font-bold">激高<br /><span className="text-xs font-normal text-slate-500">(1日2,980円〜)</span></td>
                                    <td className="p-4 text-sm">小<br /><span className="text-xs text-slate-500">設定のみ</span></td>
                                    <td className="p-4 text-sm">楽だが、料金が高額になりがち。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Honest Review (Pros & Cons) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">正直レビュー：Airaloのメリット・デメリット</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-blue-600 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" /> メリット
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">・</span>
                                    <span><strong>到着した瞬間につながる</strong>：これが最強です。空港のWi-Fiを探す必要もありません。</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">・</span>
                                    <span><strong>日本からのSMSが届く</strong>：物理SIMを抜かないので、クレジットカードの認証コードも受信できます。</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">・</span>
                                    <span><strong>国を跨いでも楽</strong>：アジア周遊プランなどを使えば、国境を超えても設定不要で使えます。</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-red-500 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> デメリット・注意点
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">・</span>
                                    <span><strong>SIMロック解除が必須</strong>：スマホがSIMフリーである必要があります（最近の機種はほぼOK）。</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">・</span>
                                    <span><strong>現地の電話番号がない場合が多い</strong>：データ専用プランが主流です。Grab等は日本の番号で登録しておけば問題ありません。</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">・</span>
                                    <span><strong>現地SIMより少し高い</strong>：空港の屋台で買うより数百円高い場合がありますが「時間の節約代」と考えれば格安です。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What is eSIM? */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Smartphone className="w-8 h-8 text-blue-500" />
                        そもそも「eSIM」とは？
                    </h2>
                    <p className="mb-6 text-slate-600 leading-relaxed">
                        eSIM（イーシム）は、スマホ本体にあらかじめ埋め込まれているデジタルのSIMカードです。<br />
                        従来のプラスチック製カードを差し込む必要はなく、<strong>QRコードを読み込む（またはアプリで操作する）だけ</strong>で、通信プランを追加できます。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <h3 className="font-bold text-lg mb-3 text-red-500">❌ 従来の物理SIM</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> お店で並んで買う必要がある</li>
                                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> 入れ替え時に紛失するリスク</li>
                                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> ピン（SIMピン）が必要</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">次世代の標準</div>
                            <h3 className="font-bold text-lg mb-3 text-blue-600">⭕️ eSIM (Airalo)</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> アプリで買って即設定完了</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> 物理的な紛失リスクゼロ</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> 日本のSIMを入れたまま使える</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Airalo? (3 Benefits) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">旅のプロがAiraloを選ぶ3つの理由</h2>

                    <div className="space-y-8">
                        {/* Benefit 1 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600 font-bold text-sm mr-2">1</span>
                                    着陸した瞬間、もう繋がっている
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    これが最大のメリットです。日本にいる間に購入・設定しておけば、現地の空港に着いて、機内モードを解除した瞬間にネットが使えます。<br />
                                    「Uberを呼ぶ」「家族に到着LINEを送る」「ホテルの場所を調べる」。これらが空港のカウンターに寄ることなく、すぐにできるのです。
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600 font-bold text-sm mr-2">2</span>
                                    世界200以上の国と地域に対応
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Airaloは世界最大級のeSIMストアです。タイ、韓国、アメリカ、ヨーロッパ周遊...。<br />
                                    国が変わるたびにSIMカードを探す必要はありません。アプリひとつで、世界中どこへ行っても現地料金でネットが使えます。
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600 font-bold text-sm mr-2">3</span>
                                    日本語対応アプリで安心
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    海外のサービスですが、アプリは完全に日本語化されています。<br />
                                    購入から設定、データ残量の確認まで、直感的に操作できるので、英語が苦手な方でも迷うことはありません。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>

                    <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        使い方は驚くほど簡単
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">01</div>
                            <h3 className="font-bold text-lg mb-2">アプリで国を選ぶ</h3>
                            <p className="text-sm text-slate-300">Airaloアプリを入れ、渡航先の国とプランを選んで購入します。現地キャリア回線なので安心。</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">02</div>
                            <h3 className="font-bold text-lg mb-2">eSIMをインストール</h3>
                            <p className="text-sm text-slate-300">ワンタップでインストール完了。日本にいる間にここまで済ませておくのがコツです。</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">03</div>
                            <h3 className="font-bold text-lg mb-2">到着したらONにする</h3>
                            <p className="text-sm text-slate-300">現地に着いたら回線をオンにするだけ。その瞬間にネットに繋がり、快適な旅が始まります。</p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 私のスマホでも使えますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                iPhone XR / XS以降のiPhoneであれば基本的に対応しています。AndroidもPixelやGalaxyの最近の機種なら対応しています。アプリ内で対応機種かどうかのチェックも可能です。
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 日本の番号で電話は受けられますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                はい、可能です。日本のSIMを「主回線」、Airaloを「モバイルデータ通信」に設定することで、普段の電話番号での着信・SMS受信（楽天モバイルなど）を維持したまま、ネットだけ現地の安い回線を使うことができます。
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. テザリングはできますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                多くのプランで可能です（プラン詳細に記載があります）。PCやタブレットを繋いで仕事をすることもできます。
                            </p>
                        </details>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
                    <Plane className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        次の旅は、もっとスマートに。
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        もうSIMカードの入れ替えで悩む必要はありません。<br />
                        世界中どこにいても、あなたのスマホは繋がります。
                    </p>
                    <a
                        href="https://www.airalo.com/ja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:scale-105"
                    >
                        今すぐAiraloを始める
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
                            "headline": "【2026年最新】海外旅行の通信は「Airalo」一択。空港のSIM行列にはもう並ばない",
                            "image": "/images/airalo_hero.png",
                            "description": "「飛行機を降りた瞬間にネットが繋がる」魔法のような体験。世界初のeSIMストア「Airalo（エラロ）」の使い方から、メリット・デメリットまで徹底解説します。",
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "私のスマホでも使えますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "iPhone XR / XS以降のiPhoneであれば基本的に対応しています。AndroidもPixelやGalaxyの最近の機種なら対応しています。アプリ内で対応機種かどうかのチェックも可能です。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "日本の番号で電話は受けられますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "はい、可能です。日本のSIMを「主回線」、Airaloを「モバイルデータ通信」に設定することで、普段の電話番号での着信・SMS受信（楽天モバイルなど）を維持したまま、ネットだけ現地の安い回線を使うことができます。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "テザリングはできますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "多くのプランで可能です（プラン詳細に記載があります）。PCやタブレットを繋いで仕事をすることもできます。"
                                    }
                                }
                            ]
                        })
                    }}
                />
            </div>
        </article>
    );
}
