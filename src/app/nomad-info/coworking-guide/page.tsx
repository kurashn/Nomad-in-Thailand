import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wifi, MapPin, Coffee, Clock, Zap, Users, Star, PlayCircle, HelpCircle } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
    title: "バンコクのコワーキングスペース完全ガイド2026 | 日本人ノマドおすすめ3選",
    description: "On Nut〜Siamエリアで厳選！日本人ノマドに人気のコワーキングスペース（True Digital Park, The Hive, NapLab）を、料金・雰囲気・Wi-Fi速度で徹底比較。現地動画レビューあり。",
};

export default function CoworkingGuidePage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/coworking_guide_hero.png"
                        alt="Digital Nomad in Bangkok"
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
                        【2026年版】バンコクの<br className="md:hidden" />コワーキングスペース完全ガイド
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-md">
                        On Nut 〜 Siamエリアで選ぶ、日本人ノマドに人気の「集中できる」3選
                    </p>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <div className="float-right ml-6 mb-4 w-28 h-28 hidden sm:block relative">
                        <Image
                            src="/character/nomad-dog-working-new.png"
                            alt="Nomad Dog Working"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="lead text-xl leading-relaxed font-medium text-foreground/80">
                        バンコクは世界でも有数の「コワーキングスペース激戦区」です。<br />
                        カフェのようなおしゃれさと、オフィスのような機能性を兼ね備えた場所が、日本の半額以下で利用できます。
                    </p>
                    <p className="text-base text-muted-foreground">
                        今回は、BTSスクンビット線沿い（On Nut 〜 Siam）で、特に日本人ノマドからの評価が高い3つのスポットを厳選しました。
                        「コミュニティ重視」「集中重視」「24時間利用」など、目的に合わせて使い分けてみてください。
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mb-16 overflow-x-auto relative">
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-foreground">📍 3大人気スペース比較表</h2>
                        <div className="relative w-16 h-16 -mt-2">
                            <Image
                                src="/character/nomad-dog-eating.png"
                                alt="Nomad Dog Eating"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <table className="w-full min-w-[600px] border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                        <thead>
                            <tr className="bg-muted text-left">
                                <th className="p-4 font-bold text-muted-foreground text-sm">Space Name</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">Area</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">Price (1 Day)</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">Vibe</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-muted">
                            <tr>
                                <td className="p-4 font-bold text-foreground">True Digital Park</td>
                                <td className="p-4 text-sm">Punnawithi</td>
                                <td className="p-4 text-sm font-bold text-primary">Free〜</td>
                                <td className="p-4 text-sm">Modern / Tech</td>
                                <td className="p-4 text-sm">Deep Work</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-foreground">The Hive</td>
                                <td className="p-4 text-sm">Thong Lo</td>
                                <td className="p-4 text-sm">393 THB</td>
                                <td className="p-4 text-sm">Warm / Social</td>
                                <td className="p-4 text-sm">Community</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-foreground">NapLab</td>
                                <td className="p-4 text-sm">Siam</td>
                                <td className="p-4 text-sm">約350 THB</td>
                                <td className="p-4 text-sm">Fun / Chill</td>
                                <td className="p-4 text-sm">24H / Night</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Top Picks List */}
                <div className="space-y-16">
                    {/* Spot 1: True Digital Park */}
                    <section className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <iframe
                            width="100%"
                            height="100%"
                            title="True Digital Park Map"
                            src="https://maps.google.com/maps?q=True+Digital+Park&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                            人気 No.1
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-1">True Digital Park</h2>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4 mr-1" /> BTS Punnawithi (On Nutの隣)
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">Free〜</div>
                                    <div className="text-xs text-muted-foreground">無料エリア充実</div>
                                </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                東南アジア最大級のテックハブ。建物全体が巨大なイノベーション施設のようになっており、無料のコワーキングエリアだけでも十分仕事ができます。
                                ジム、ショッピングモール、フードコートも直結しており、雨に濡れずに一日中過ごせる「ノマドの楽園」です。
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Wifi className="w-4 h-4 text-green-500" />
                                    <span>爆速Wi-Fi (無料)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Coffee className="w-4 h-4 text-orange-500" />
                                    <span>カフェ・コンビニ直結</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Users className="w-4 h-4 text-blue-500" />
                                    <span>テック系イベント多数</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span>電源タップ豊富</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spot 2: The Hive Thonglor */}
                    <section className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <iframe
                            width="100%"
                            height="100%"
                            title="The Hive Thonglor Map"
                            src="https://maps.google.com/maps?q=The+Hive+Thonglor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                            コミュニティ◎
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-1">The Hive Thonglor</h2>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4 mr-1" /> BTS Thong Lo
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">393 THB</div>
                                    <div className="text-xs text-muted-foreground">/ 1 Day</div>
                                </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                日本人居住区トンローの中心にある、一軒家のようなアットホームな空間。
                                最上階のルーフトップカフェは開放感抜群で、リラックスして作業したい時に最適です。
                                スタッフもフレンドリーで、毎週のようにイベントが開催されているため、友達作りにもおすすめ。
                            </p>

                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>ルーフトップカフェからの眺めが最高</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>欧米系・日本人の利用者が多く交流しやすい</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>スクンビットの中心でアクセス抜群</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Spot 3: NapLab */}
                    <section className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <iframe
                            width="100%"
                            height="100%"
                            title="NapLab Map"
                            src="https://maps.google.com/maps?q=NapLab+Chula&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                            24時間営業
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-1">NapLab Chula</h2>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4 mr-1" /> National Stadium / Siam
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">約350 THB</div>
                                    <div className="text-xs text-muted-foreground">/ 24 Hours</div>
                                </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                名前通り「昼寝（Nap）」ができるコワーキングスペース。
                                卓球台、滑り台、そして2段ベッドのような仮眠スペースがあり、クリエイティブな刺激に溢れています。
                                24時間営業なので、日本のクライアントワークで夜遅くなった時の駆け込み寺としても重宝します。
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Clock className="w-4 h-4 text-purple-500" />
                                    <span>24時間いつでも利用可能</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Coffee className="w-4 h-4 text-orange-500" />
                                    <span>フリードリンク＆スナック</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span>シャワー完備で宿泊気分</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Video Placeholder */}
                <div className="mt-16 mb-16 bg-muted/30 border border-muted p-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative w-full md:w-1/2 aspect-video bg-black/10 rounded-xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                            <PlayCircle className="w-16 h-16 text-muted-foreground/50" />
                            <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-bold text-muted-foreground">
                                Coming Soon
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">YouTube</span>
                                現地動画レポート（準備中）
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                現在、運営が実際に3つのコワーキングスペースに足を運んで、Wi-Fi速度の実測や、実際の騒音レベルなどを検証する動画を撮影中です。
                                <br /><br />
                                映像ならではの「空気感」をお伝えしますので、公開まで今しばらくお待ちください！
                            </p>
                        </div>
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
                                    "name": "ドロップイン（1日利用）は予約なしでいけますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "はい、今回紹介した3箇所（True Digital Park, The Hive, NapLab）はすべて予約不要で、当日に受付で「ドロップイン」と伝えれば利用可能です。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "支払い方法は？現金のみですか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "基本的にクレジットカードか、タイの銀行アプリ（QRコード決済）が便利です。現金も一部対応していますが、釣り銭がない場合があるため注意が必要です。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "服装コード（ドレスコード）はありますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ありません。Tシャツ・短パン・サンダルといったラフな格好で問題ありませんが、冷房対策の上着を持参することをおすすめします。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                        <HelpCircle className="w-6 h-6 text-primary" />
                        よくある質問 (FAQ)
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. ドロップイン（1日利用）は予約なしでいけますか？
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. はい、今回紹介した3箇所はすべて予約不要で、当日に受付で「ドロップイン」と伝えれば利用可能です。パスポート（または写真）の提示を求められることがあるので持参しましょう。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 支払い方法は？現金のみですか？
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. 基本的にクレジットカードか、タイの銀行アプリ（QRコード決済/PromptPay）が便利です。NapLabやThe Hiveでは現金も受け付けていますが、お釣りがない場合もあるので小額紙幣を用意しておくと安心です。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 服装コード（ドレスコード）はありますか？
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. ありません。Tシャツ・短パン・サンダルといったラフな格好で全く問題ありません。ただし、エアコンが効きすぎている場所が多いので、羽織るものが一枚あると快適です。
                            </div>
                        </details>
                    </div>
                </div>

                <NewsletterCTA isInline />

                {/* Summary */}
                <div className="mt-16 bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center">
                    <h3 className="text-xl font-bold mb-4 text-foreground">迷ったらまずは「True Digital Park」へ</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        まずは無料で使えるTrue Digital Parkの雰囲気を味わってみるのがおすすめです。<br />
                        そこから、より濃いコミュニティを求めるならThe Hive、深夜作業ならNapLabと使い分けるのがバンコクノマドの賢いスタイルです。
                    </p>
                    <Link href="/nomad-info" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-foreground/80 transition-colors">
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
