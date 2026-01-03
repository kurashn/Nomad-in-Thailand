import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Building, Home, Coffee, DollarSign, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "【2026年版】バンコク住みやすいエリア診断！プロンポン・オンヌット・アーリー | のまどくん",
    description: "予算とライフスタイルに合わせて選ぶバンコクの3大人気エリア（プロンポン・オンヌット・アーリー）を徹底比較。家賃相場、周辺環境、住人の特徴を解説。",
};

export default function AreaGuidePage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/images/area_guide_hero_photo.png"
                    alt="Bangkok Area Guide"
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
                        【2026年版】バンコク住みやすいエリア診断！
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">プロンポン・オンヌット・アーリー</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6">
                        「どこに住むか」で、あなたのバンコク生活は180度変わります。
                    </p>
                    <p className="leading-relaxed">
                        通勤ラッシュに巻き込まれて一日を終えるか、お気に入りのカフェで優雅に朝活をするか。<br />
                        BTS（スカイトレイン）沿線を中心に発展するバンコクですが、駅ごとに街の「色」は全く異なります。<br /><br />
                        この記事では、日本人移住者に特に人気の<strong>「3つのエリア」</strong>を厳選し、それぞれの予算と特徴を徹底比較します。
                    </p>

                    {/* Executive Summary Table for SEO Snippets */}
                    <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 mt-8">
                        <h3 className="text-lg font-bold mb-4 text-slate-800">🚃 3エリア早見表</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <span className="font-bold text-amber-600 block mb-1">プロンポン</span>
                                <span className="text-xs text-slate-500 block mb-2">予算: 30,000 THB〜</span>
                                <p className="text-slate-700">日本と同じ生活ができる。駐在員多め。</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <span className="font-bold text-blue-600 block mb-1">オンヌット</span>
                                <span className="text-xs text-slate-500 block mb-2">予算: 15,000 THB〜</span>
                                <p className="text-slate-700">コスパ最強。ノマドに人気で生活便利。</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <span className="font-bold text-green-600 block mb-1">アーリー</span>
                                <span className="text-xs text-slate-500 block mb-2">予算: 20,000 THB〜</span>
                                <p className="text-slate-700">お洒落なカフェ街。静環境を好む人向け。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transport Internal Link */}
                <div className="mb-12">
                    <Link href="/living/transport-guide" className="flex items-center gap-3 p-4 bg-white border border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-primary/50 hover:text-primary transition-colors">
                        <span className="bg-slate-100 p-2 rounded-full"><MapPin className="w-5 h-5" /></span>
                        <span className="font-medium">これらのエリアへの移動には、GrabやMuvMiが便利です</span>
                        <ArrowLeft className="w-4 h-4 ml-auto rotate-180" />
                    </Link>
                </div>

                {/* Area 1: Phrom Phong / Thong Lo */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                            <Star className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-amber-600 tracking-wider">AREA 01</span>
                            <h2 className="text-3xl font-bold text-slate-800">プロンポン・トンロー</h2>
                            <p className="text-slate-500">Phrom Phong / Thong Lo</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50 p-6 border-b grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Target</p>
                                <p className="font-medium">予算に余裕がある / 日本の利便性が欲しい</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Rent</p>
                                <p className="font-medium">30,000 THB〜 (約13万円〜)</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">まるで「東京の港区」</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                日本人駐在員が最も多く住むエリアです。日本語対応の病院、スーパー（フジスーパー）、日本食レストランが至る所にあり、<strong>「日本と同じ生活」</strong>が約束されています。<br />
                                英語すら話せなくても生きていける唯一のエリアですが、家賃や物価はバンコクで最も高い部類に入ります。
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Building className="w-4 h-4 text-amber-500" />
                                    <span>高級コンドミニアム・タワーマンション多数</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-amber-500" />
                                    <span>エムクオーティエ等の高級モール直結</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Area 2: On Nut / Phra Khanong */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-blue-600 tracking-wider">AREA 02</span>
                            <h2 className="text-3xl font-bold text-slate-800">オンヌット・プラカノン</h2>
                            <p className="text-slate-500">On Nut / Phra Khanong</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50 p-6 border-b grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Target</p>
                                <p className="font-medium">デジタルノマド / コスパ重視</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Rent</p>
                                <p className="font-medium">15,000 THB〜 (約6.5万円〜)</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">コスパ最強のノマド聖地</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                都心へのアクセスも良く（BTSで約15-20分）、初めてのバンコク生活でも家賃を抑えながら快適に暮らせます。<br />
                                駅前にスーパー（Lotus’s, Big C）があり生活利便性は抜群。コワーキングスペースも点在しており、欧米やアジアからのデジタルノマドが多く住んでいます。
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Home className="w-4 h-4 text-blue-500" />
                                    <span>築浅でお洒落なコンドミニアムが安い</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    <span>ローカル市場も近く、食費も抑えられる</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Area 3: Ari */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-100 text-green-600 p-3 rounded-full">
                            <Coffee className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-green-600 tracking-wider">AREA 03</span>
                            <h2 className="text-3xl font-bold text-slate-800">アーリー</h2>
                            <p className="text-slate-500">Ari</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50 p-6 border-b grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Target</p>
                                <p className="font-medium">クリエイター / 静かな環境が好き</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Rent</p>
                                <p className="font-medium">20,000 THB〜 (約8.5万円〜)</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">緑豊かなカフェ＆カルチャーの街</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                「バンコクの代官山」とも呼ばれるエリア。路地裏にはお洒落なカフェやレストランが隠れています。<br />
                                高層ビルが少なく、緑が多い落ち着いた雰囲気。騒がしい歓楽街から離れて、静かに暮らしたい人に最適です。
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Coffee className="w-4 h-4 text-green-500" />
                                    <span>作業に最適な個性派カフェが無数にある</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-green-500" />
                                    <span>欧米人の居住者も多く、洗練された雰囲気</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-6 text-center">3エリア徹底比較まとめ</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-100 border-b">
                                <tr>
                                    <th className="px-6 py-3">エリア</th>
                                    <th className="px-6 py-3">家賃相場</th>
                                    <th className="px-6 py-3">日本食</th>
                                    <th className="px-6 py-3">静かさ</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 border-b">
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-800">プロンポン</td>
                                    <td className="px-6 py-4">高い</td>
                                    <td className="px-6 py-4">◎</td>
                                    <td className="px-6 py-4">△</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-800">オンヌット</td>
                                    <td className="px-6 py-4 text-green-600 font-bold">安い</td>
                                    <td className="px-6 py-4">○</td>
                                    <td className="px-6 py-4">○</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-800">アーリー</td>
                                    <td className="px-6 py-4">普通</td>
                                    <td className="px-6 py-4">△</td>
                                    <td className="px-6 py-4 text-green-600 font-bold">◎</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

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
                                    "name": "ノマドに一番おすすめのエリアは？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "初めてなら「オンヌット」がコスパも良く、駅前にスーパーもあって生活しやすいのでおすすめです。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "プロンポンの家賃相場は高いですか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "はい、バンコクで最も高いエリアの一つです。スタジオタイプでも3万バーツ（約13万円）〜は見ておいた方が良いです。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Section */}
                <section className="mb-12 mt-16">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">よくある質問 (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. ノマドに一番おすすめのエリアは？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                初めてなら<strong>「オンヌット」</strong>がコスパも良く、駅前にスーパーもあって生活しやすいのでおすすめです。
                            </p>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. プロンポンの家賃相場は高いですか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                はい、バンコクで最も高いエリアの一つです。スタジオタイプでも3万バーツ（約13万円）〜は見ておいた方が良いです。予算を抑えたい場合は、少し離れたプラカノンやオンヌットが候補になります。
                            </p>
                        </details>
                    </div>
                </section>

            </div>
        </article>
    );
}
