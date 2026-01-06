import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wifi, Zap, Clock, Coffee, MapPin, Star, AlertTriangle, CheckCircle, Info } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
    title: "【2026年最新】バンコクの作業カフェ7選！電源・Wi-Fi完備・無料スポットも | のまどくん",
    description: "On Nut〜Siam周辺でおすすめの「作業が捗るカフェ」を厳選。Samyan CO-OPなどの無料スポットから、眺めの良いPaper Plane Projectまで、Wi-Fi速度や電源の有無を徹底比較。",
};

export default function CafeGuidePage() {
    // Structured Data for Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "【2026年最新】バンコクの作業カフェ7選！電源・Wi-Fi完備",
        "image": "https://nomad-th.com/images/cafe_guide_hero.png",
        "datePublished": "2026-01-07",
        "author": {
            "@type": "Organization",
            "name": "Nomad in Thailand"
        },
    };

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/cafe_guide_hero.png"
                        alt="Bangkok Work-Friendly Cafe"
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
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">無料スポットあり</span>
                        <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">2026年最新</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        【2026年最新】バンコクの作業カフェ7選！<br />
                        <span className="text-xl md:text-3xl font-medium mt-3 block text-white/90">電源・Wi-Fi完備、コーヒー1杯で長居できる楽園</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <p className="text-xl leading-loose font-medium text-foreground/90 mb-8">
                        「今日はコワーキングスペースに行くほどではないけど、家では集中できない...」<br />
                        そんな日に最適なのが、バンコクの<strong>作業カフェ（Nomad Cafes）</strong>です。
                    </p>
                    <p className="text-lg leading-loose text-foreground/80 mb-8">
                        バンコクは世界でも有数の「カフェ天国」。<br />
                        日本のカフェのように「PC作業禁止」の張り紙に怯える必要はありません。多くのカフェが電源と高速Wi-Fiを完備し、ノマドワーカーを歓迎しています。
                    </p>
                    <p className="text-lg leading-loose text-foreground/80 mb-8">
                        今回は、On Nut〜SiamのBTS沿線を中心に、<strong>「実際にPCを開いて作業しても怒られない（むしろ快適な）」</strong>7つのスポットを厳選しました。<br />
                        登録不要で使える「無料のコワーキングスペース」も紹介します！
                    </p>
                </div>

                {/* Selection Criteria */}
                <div className="bg-muted/30 p-6 rounded-xl border border-muted mb-16">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        選定基準
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/80">
                        <li className="flex items-center gap-2">✅ <strong>Wi-Fi速度:</strong> 下り30Mbps以上で安定</li>
                        <li className="flex items-center gap-2">✅ <strong>電源:</strong> 各席または壁際に豊富にある</li>
                        <li className="flex items-center gap-2">✅ <strong>居心地:</strong> 2時間以上滞在しても気まずくない</li>
                        <li className="flex items-center gap-2">✅ <strong>アクセス:</strong> BTS駅から徒歩圏内</li>
                    </ul>
                </div>

                {/* Cafe List */}
                <div className="space-y-16">
                    {/* Spot 1: Samyan CO-OP */}
                    <section id="samyan" className="scroll-mt-24">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-base">1</span>
                                Samyan CO-OP (サムヤーン コープ)
                            </h2>
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">完全無料</span>
                        </div>
                        <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm">
                            <div className="relative h-64 w-full bg-slate-200 group">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="Samyan CO-OP Map"
                                    src="https://maps.google.com/maps?q=13.733776,100.528186&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                ></iframe>
                                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md pointer-events-none">
                                    24時間営業
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-foreground/80 mb-4 leading-relaxed">
                                    <strong>「え、ここ無料でいいの？」</strong>と誰もが驚く公共コワーキングスペース。<br />
                                    商業施設Samyan Mitrtownの中にあり、専用アプリ（Mitr App）で無料会員登録するだけで利用できます。<br />
                                    電源・Wi-Fi完備はもちろん、集中ゾーンや会議室（要予約）まであります。学生が多いですが、ノマドにとっても最強の節約スポットです。
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" /> MRT Sam Yan 直結
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" /> 24時間営業
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Wifi className="w-4 h-4" /> 高速 (要ログイン)
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Coffee className="w-4 h-4" /> 飲食持込不可(カフェ併設)
                                    </div>
                                </div>
                                <div className="bg-yellow-50 text-yellow-800 text-xs p-3 rounded flex items-start gap-2">
                                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                    <span>
                                        <strong>注意:</strong> パスポートを持参して、インフォメーションカウンターで登録が必要です。かなり混雑するので朝イチか深夜がおすすめ。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spot 2: One Paper Plane Project */}
                    <section id="paperplane" className="scroll-mt-24">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-base">2</span>
                                Paper Plane Project
                            </h2>
                            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">絶景カフェ</span>
                        </div>
                        <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm">
                            <div className="relative h-64 w-full bg-slate-200">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="Paper Plane Project Map"
                                    src="https://maps.google.com/maps?q=13.72225,100.58054&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <p className="text-foreground/80 mb-4 leading-relaxed">
                                    T-One Buildingの40階にある、<strong>コワーキング×カフェバー</strong>。<br />
                                    昼間はドロップイン無料のカフェとして開放されており、コーヒー1杯で利用できます。<br />
                                    天井が高く、全面ガラス張りの窓からはバンコクの摩天楼が一望できます。クリエイティブな仕事をするのに最高の環境です。
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" /> BTS Thong Lo 徒歩3分
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" /> 9:00 - 17:00 (カフェ利用)
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Zap className="w-4 h-4" /> 全席に電源あり
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Coffee className="w-4 h-4" /> 120 THB〜
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spot 3: Open House */}
                    <section id="openhouse" className="scroll-mt-24">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-base">3</span>
                                Open House (Central Embassy)
                            </h2>
                            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">ラグジュアリー</span>
                        </div>
                        <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm">
                            <div className="relative h-64 w-full bg-slate-200">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="Open House Central Embassy Map"
                                    src="https://maps.google.com/maps?q=Open+House+Central+Embassy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <p className="text-foreground/80 mb-4 leading-relaxed">
                                    <strong>「世界一美しい書店」</strong>とも称される、Central Embassy上階の巨大ライブラリー空間。<br />
                                    Co-Livingエリア（有料）もありますが、カフェエリア（無料）でも十分快適に作業できます。<br />
                                    高級デパート内なので客層が良く、静かで洗練されています。
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" /> BTS Phloen Chit 直結
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" /> 10:00 - 22:00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick List for Others */}
                    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                        <h3 className="font-bold text-xl mb-6">おすすめの穴場カフェ 4選</h3>
                        <div className="space-y-6 divide-y divide-slate-200">
                            <div className="pt-4 first:pt-0">
                                <h4 className="font-bold text-lg mb-1">4. True Digital Park (Punnawithi)</h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    1F・2Fのフリースペースは誰でも利用可能。電源も多く、まさにノマドのための施設。
                                </p>
                            </div>
                            <div className="pt-4">
                                <h4 className="font-bold text-lg mb-1">5. Tilleke & Gibbins 1F (Chit Lom)</h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    法律事務所ビルの1階にある穴場カフェ（Au Bon Painなど）。ビジネスマンが多く静か。
                                </p>
                            </div>
                            <div className="pt-4">
                                <h4 className="font-bold text-lg mb-1">6. CLASS Cafe (Pathum Wan)</h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Samyanエリアにある24時間営業カフェ。学生向けでコスパが良い。
                                </p>
                            </div>
                            <div className="pt-4">
                                <h4 className="font-bold text-lg mb-1">7. Let's Say Cafe (Victory Monument)</h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                    24時間営業。3階が無料のボードゲーム/作業スペースになっており非常に自由な雰囲気。
                                </p>
                            </div>
                        </div>
                    </section>
                </div>



                {/* Comparison Table */}
                <section className="mb-20 mt-20">
                    <h2 className="text-2xl font-bold mb-6">スペック比較表</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse bg-card rounded-lg overflow-hidden shadow-sm text-sm">
                            <thead className="bg-slate-100 text-muted-foreground">
                                <tr>
                                    <th className="p-3 text-left">店名</th>
                                    <th className="p-3 text-left">Wi-Fi</th>
                                    <th className="p-3 text-left">電源</th>
                                    <th className="p-3 text-left">コスパ</th>
                                    <th className="p-3 text-left">静かさ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-3 font-bold">Samyan CO-OP</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">神</td>
                                    <td className="p-3">△ (学生多)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Paper Plane</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3">◯</td>
                                    <td className="p-3">◯</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">Open House</td>
                                    <td className="p-3">◯</td>
                                    <td className="p-3">△ (席による)</td>
                                    <td className="p-3">△</td>
                                    <td className="p-3 text-green-600">◎ (高級)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">True Digital</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎ (無料)</td>
                                    <td className="p-3">◯</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Info className="w-6 h-6 text-blue-500" /> よくある質問
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. カフェで長居しても大丈夫ですか？
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. タイの作業カフェ文化は日本より寛容です。一般的に、ドリンク1杯で2〜3時間程度の滞在は問題ありません。それ以上居る場合は、食事や2杯目を注文するのがマナーです。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 貴重品の管理はどうしていますか？
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. トイレなどで席を立つ際は、PCや財布は必ず持って行きましょう。タイは治安が良いですが、カフェでの置き引き事例はゼロではありません。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 冷房は寒いですか？
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. <strong>はい、極寒です。</strong> タイのカフェやモールは冷蔵庫並みに冷やされています。長袖のパーカーや羽織るものは必須アイテムです。
                            </div>
                        </details>
                    </div>
                </div>

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
