import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone, Wifi, MessageSquare, Globe, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "【2026年版】タイのSIM事情と「SMS受信」問題を解決する完全ガイド | のまどくん",
    description: "日本のSMS認証（OTP）が届かない問題を解決！Rakuten Mobileやpovoを使った「デュアルSIM」構築術と、タイのおすすめSIM（AIS/True）を徹底解説。",
};

export default function SimGuidePage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/sim_guide_hero.png"
                    alt="Thai SIM and SMS Guide"
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
                        【2026年版】タイのSIM事情
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">× SMS受信問題 完全解決ガイド</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="lead text-xl leading-loose font-medium text-foreground/80">
                        海外ノマド生活で「最も詰む」瞬間。それは、<br />
                        <strong>「日本の銀行にログインしたいのに、SMS（ワンタイムパスワード）が届かない時」</strong>です。
                    </p>
                    <p className="leading-relaxed">
                        「日本の携帯番号は解約してきました！」という潔い人がよく陥る罠です。<br />
                        現代の生活において、日本の番号（SMS受信）を維持することは生命線です。<br /><br />
                        この記事では、初心者の方にもわかりやすく、日本の番号を最安で維持しながら、タイの爆速5G回線を活用する<strong>「デュアルSIM」</strong>という節約術を解説します。
                    </p>

                    <div className="mt-8">
                        <Link href="/nomad-info/bangkok-roadmap" className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1">
                            <span className="bg-primary/10 px-2 py-1 rounded">関連</span>
                            移住前にやるべき他の準備チェックリストはこちら <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* Beginner's Basics */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-16">
                    <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        3分でわかる！基本用語
                    </h3>
                    <div className="space-y-4 text-sm text-blue-900/80">
                        <div>
                            <span className="font-bold text-blue-900 block">SIM（シム）とは？</span>
                            スマホに入っている「身分証」のような小さなカードです。これが入っていないと、外でネットや電話ができません。
                        </div>
                        <div>
                            <span className="font-bold text-blue-900 block">ローミングとは？</span>
                            日本のSIMをそのまま海外で使うこと。便利ですが、日本の携帯会社を経由するため<span className="font-bold text-red-600">料金が非常に高額</span>になります（1日2,980円など）。
                        </div>
                        <div>
                            <span className="font-bold text-blue-900 block">デュアルSIM（Dual SIM）とは？</span>
                            1台のスマホに「2枚のSIM」を入れること。今回は「日本用」と「タイ用」の2枚を入れて、良いとこ取りをする方法を紹介します。
                        </div>
                    </div>
                </div>

                {/* Cost Simulation */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg"><Wifi className="w-6 h-6" /></span>
                        まずは結論：どれくらいお得？
                    </h2>
                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-100 text-slate-700 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-bold">方法</th>
                                    <th className="px-6 py-4 font-bold">月額コスト (目安)</th>
                                    <th className="px-6 py-4 font-bold">特徴</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-red-50/50">
                                    <td className="px-6 py-4 font-bold text-red-900">国際ローミング</td>
                                    <td className="px-6 py-4 font-bold text-red-600">約 90,000円</td>
                                    <td className="px-6 py-4 text-slate-600">1日2,980円×30日。破産します。</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-900">レンタルWiFi</td>
                                    <td className="px-6 py-4 font-bold text-slate-600">約 20,000円</td>
                                    <td className="px-6 py-4 text-slate-600">荷物が増える＆充電が面倒。割高。</td>
                                </tr>
                                <tr className="bg-green-50/50 border-l-4 border-green-500">
                                    <td className="px-6 py-4 font-bold text-green-900 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        現地SIM (Dual SIM)
                                    </td>
                                    <td className="px-6 py-4 font-bold text-green-600 text-lg">約 1,000円〜</td>
                                    <td className="px-6 py-4 text-slate-600"><strong>圧倒的コスパ。</strong> これ一択です。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Strategy: Dual SIM */}
                <section className="mb-20">
                    <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                            <Smartphone className="w-8 h-8 text-cyan-400" />
                            最強の布陣：デュアルSIM運用
                        </h2>
                        <p className="mb-10 text-slate-300 text-center max-w-2xl mx-auto leading-relaxed">
                            最近のスマホ（iPhone XS以降など）は、2枚のSIMを同時待受できます。<br />
                            「日本用」と「タイ用」を1台に入れることで、両方のメリットを享受できます。
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {/* SIM 1 Card */}
                            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col relative overflow-hidden group hover:border-red-400/50 transition-colors">
                                <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-red-500/20">
                                    副回線 (SIM 1)
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-1">
                                        <Globe className="w-5 h-5" /> 日本のSIM
                                    </h3>
                                    <p className="text-sm text-slate-400">楽天モバイル / povo</p>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">データ通信</p>
                                        <p className="text-center font-bold text-red-400">OFF</p>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">主な用途</p>
                                        <p className="text-center font-bold text-white">SMS受信のみ</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50 text-center">
                                    <span className="text-2xl font-bold text-white">0</span>
                                    <span className="text-sm text-slate-400">円 〜 / 月</span>
                                </div>
                            </div>

                            {/* SIM 2 Card */}
                            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col relative overflow-hidden group hover:border-green-400/50 transition-colors">
                                <div className="absolute top-0 right-0 bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-green-500/20">
                                    主回線 (SIM 2)
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-1">
                                        <Wifi className="w-5 h-5" /> タイのSIM
                                    </h3>
                                    <p className="text-sm text-slate-400">AIS / True</p>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">データ通信</p>
                                        <p className="text-center font-bold text-green-400">ON (5G)</p>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">主な用途</p>
                                        <p className="text-center font-bold text-white">ネット・動画・SNS</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50 text-center">
                                    <span className="text-sm text-slate-400">約</span>
                                    <span className="text-2xl font-bold text-white mx-1">1,000</span>
                                    <span className="text-sm text-slate-400">円 / 月</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Part 1: Thai SIM Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Wifi className="w-6 h-6" /></span>
                        1. タイでのデータ通信 (SIM 2)
                    </h2>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8 flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-orange-800 mb-1">空港で買ってはいけません！</h3>
                            <p className="text-sm text-orange-700 leading-relaxed">
                                空港で売られているのは「ツーリストSIM」と呼ばれる観光客向けの高額パッケージ（8日間 299バーツ〜など）です。<br />
                                長期滞在なら、街中の携帯ショップ（AIS Shop / True Shop）やセブンイレブンで<strong>「普通のSIM」</strong>を買うのが正解です。月額200〜300バーツで大容量データが使えます。
                            </p>
                        </div>
                    </div>

                    <p className="mb-6 text-muted-foreground">
                        タイの通信環境は日本以上に進んでいます。5Gはどこでも繋がり、しかも爆安です。<br />
                        主要キャリアは <strong>AIS</strong> と <strong>True (旧dtac含む)</strong> の2強です。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* AIS */}
                        <div className="bg-white border-2 border-green-500 rounded-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">迷ったらコレ</div>
                            <h3 className="text-xl font-bold text-green-600 mb-2">AIS</h3>
                            <p className="text-sm font-bold mb-4">カバー率No.1の王者</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> 田舎や島でも繋がる</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> 5G速度が安定している</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> アプリでトップアップ(課金)が簡単</li>
                            </ul>
                        </div>

                        {/* True */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 relative overflow-hidden">
                            <h3 className="text-xl font-bold text-red-500 mb-2">True / dtac</h3>
                            <p className="text-sm font-bold mb-4">コスパとプロモーション</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" /> 街中での速度はAISと遜色なし</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" /> コンビニでの取り扱いが多い</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" /> お得なキャンペーンが多い</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Part 2: Japan SMS Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-red-100 text-red-600 p-2 rounded-lg"><MessageSquare className="w-6 h-6" /></span>
                        2. 日本のSMSを受信する (SIM 1)
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        海外にいても、日本のSMSを無料で受信できるキャリアを選ぶのが鉄則です。<br />
                        おすすめは以下の2つだけです。
                    </p>

                    <div className="space-y-6">
                        {/* Rakuten Mobile */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-pink-600 mb-2">楽天モバイル (Rakuten Mobile)</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-pink-100 text-pink-800 text-xs font-bold px-2 py-1 rounded">最強おすすめ</span>
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">月額 980円〜</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                海外利用における「神SIM」です。専用アプリ（Rakuten Link）を使えば、<strong>海外から日本への電話が無料</strong>になります。もちろんSMS受信も無料です。<br />
                                さらに海外データ通信も2GBまで無料なので、タイに着いた瞬間に（現地SIMを買うまでの間）ネットが使えて安心です。
                            </p>
                        </div>

                        {/* povo 2.0 */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-yellow-600 mb-2">povo 2.0 (by au)</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">維持費最安</span>
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">月額 0円</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                基本料0円で番号を持てるため、サブ回線として人気です。海外ローミングをONにすればSMSを受信できます。<br />
                                <span className="text-red-500 text-xs">※180日間に1回以上の有料トッピング購入が必要（うっかり解約に注意）</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Setup Guide */}
                <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Globe className="w-6 h-6 text-slate-700" />
                        渡航前の設定チェックリスト
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                            <div className="bg-slate-100 text-slate-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</div>
                            <div>
                                <p className="font-bold text-slate-800">スマホのSIMロック解除</p>
                                <p className="text-xs text-muted-foreground">これが終わっていないと現地SIMが使えません。必ず日本で手続きを。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                            <div className="bg-slate-100 text-slate-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</div>
                            <div>
                                <p className="font-bold text-slate-800">日本のSIMを「eSIM」に変更（推奨）</p>
                                <p className="text-xs text-muted-foreground">現地の旅行者用SIMは「物理SIM」が主流です。日本のSIMをeSIMにしておけば、スロットが空くのでスムーズです。</p>
                            </div>
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
                                    "name": "SIMロック解除は必要ですか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "絶対に必要です。SIMロックがかかった状態では、タイの現地SIMを差しても動きません。必ず日本出発前に手続きを済ませてください。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "日本のSMSを受信する方法は？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "楽天モバイルかpovoを契約し、国際ローミングをONにすることで無料で受信可能です。これを「デュアルSIM」運用するのが最も賢い方法です。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                <section className="mb-12 mt-24">
                    <h2 className="text-2xl font-bold mb-6">よくある質問 (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. SIMロック解除は必要ですか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                <strong>絶対に必要です。</strong> SIMロックがかかった状態では、タイの現地SIMを差しても動きません。必ず日本を出発する前に、契約している携帯会社で解除手続きを行ってください（Webなら無料がほとんどです）。
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. LINEやWhatsAppのアカウントはどうなりますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                SIMを入れ替えても、元の日本の番号で登録したLINEやWhatsAppは<strong>そのまま使えます。</strong><br />
                                ただし、新しい端末で再ログインする際などはSMS認証が必要になるので、その時に「SMS受信用の日本SIM」が役立ちます。
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. デュアルSIMにしたらバッテリーの減りが早くなりますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                2つの電波を探すため、若干早くなる可能性があります。気になる場合は、SMSを受信する必要がない時は日本SIMを一時的にオフにするなどの運用で節約できます。
                            </p>
                        </details>
                    </div>
                </section>

            </div>
        </article>
    );
}
