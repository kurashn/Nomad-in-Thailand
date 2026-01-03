import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Plane, Home, Wallet, Wifi, Shield, Calendar, MapPin, ArrowRight, ExternalLink, Mail } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
    title: "【2026年版】ゼロから始めるバンコクノマド生活。準備〜渡航後1ヶ月の完全ロードマップ | のまどくん",
    description: "会社を辞めて海外へ。バンコク移住の準備から最初の1ヶ月の過ごし方まで、Z世代ノマド向けに徹底解説。DTVビザ、住居、生活費のリアル、孤独対策まで。",
};

export default function BangkokRoadmapPage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 bg-black/85 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                {/* Visual: Inspiring view of Bangkok skyline or a cozy cafe working setup */}
                <div className="w-full h-full bg-slate-200 relative">
                    <Image
                        src="/images/bangkok_nomad_roadmap_thumbnail.png"
                        alt="Bangkok Nomad Setup"
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
                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-primary/20">完全保存版</span>
                        <span className="px-3 py-1 bg-secondary/90 backdrop-blur-md text-secondary-foreground text-xs font-bold rounded-full border border-secondary/20">2026年最新</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-xl">
                        【2026年版】ゼロから始めるバンコクノマド生活。<br className="hidden md:block" />
                        <span className="text-2xl md:text-4xl block mt-2 font-normal opacity-90">準備〜渡航後1ヶ月の完全ロードマップ</span>
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden relative">
                                {/* Avatar placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80"></div>
                            </div>
                            <span className="font-medium drop-shadow-sm">Nomad Place編集部</span>
                        </div>
                        <span>•</span>
                        <time className="drop-shadow-sm">2025.12.31</time>
                    </div>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-8">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <div className="float-right ml-6 mb-4 w-28 h-28 md:w-36 md:h-36 relative animate-bounce-slow" style={{ animationDuration: '3s' }}>
                        <Image
                            src="/character/nomad-dog-waving-new.png"
                            alt="Nomad Dog Waving"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="lead text-xl leading-loose font-medium text-foreground/80 pl-2 mb-12">
                        「いつか海外で暮らしてみたい」<br />
                        その「いつか」を、2026年に実現しませんか？
                    </p>
                    <p className="mb-8 leading-loose text-lg">
                        毎朝の満員電車、終わりの見えない会議、将来へのぼんやりとした不安。日本での働き方に息苦しさを感じているなら、それはあなたの心が「もっと自由に生きたい」と叫んでいるサインかもしれません。
                    </p>
                    <p className="mb-8 leading-loose text-lg">
                        バンコクは今、世界中からデジタルノマドが集まる「聖地」となっています。月15万円〜という現実的な生活費、高速なWi-Fi、そして挑戦者を歓迎する熱気。 <br className="hidden md:block" />
                        ここには、あなたが自分らしく生きるための環境が整っています。
                    </p>
                    <p className="mb-8 leading-loose text-lg">
                        しかし、準備なしに飛び込むのは無茶です。ビザ、住居、税金、そして孤独。リアルな課題は山積みです。 本記事では、アフィリエイト目的の表面的な情報ではなく、「実際に現地で生活するノマドたちの失敗と成功」に基づいた、具体的かつ実践的なロードマップを公開します。
                    </p>
                    <p className="mb-12 leading-loose text-lg font-bold">
                        これは単なる観光ガイドではありません。あなたの人生の舵を、自分の手に取り戻すための戦略書です。
                    </p>

                    <div className="bg-gradient-to-br from-muted/50 to-muted/10 p-6 rounded-2xl border border-muted my-10">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">i</span>
                            この記事で得られること
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span><strong>DTVビザ（Destination Thailand Visa）</strong>を含む、2026年最新のビザ戦略</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span>渡航3ヶ月前から行うべき、行政手続きと資金準備のチェックリスト</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span>到着後1週間で「快適な住居」と「孤独にならないコミュニティ」を見つける方法</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold flex items-center gap-4 text-foreground">
                            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary text-xl font-black">01</span>
                            2026年のビザ戦略：DTV一択か？
                        </h2>
                        <div className="relative w-24 h-24 hidden sm:block">
                            <Image
                                src="/character/nomad-dog-tuktuk.png"
                                alt="Nomad Dog Riding TukTuk"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p>
                            ノマド生活を始める上で、最大の壁が「ビザ」です。2024年に導入された<strong>DTV (Destination Thailand Visa)</strong>により、状況は劇的に変わりました。
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-card border border-muted p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg mb-3 text-primary flex items-center gap-2">
                                    <Shield className="w-5 h-5" /> DTV (本命)
                                </h3>
                                <ul className="text-base space-y-2 text-muted-foreground">
                                    <li><strong>有効期間:</strong> 5年間</li>
                                    <li><strong>滞在期間:</strong> 1回につき180日（+180日延長可）</li>
                                    <li><strong>条件:</strong> 50万バーツ（約200万円）の貯金の証明</li>
                                    <li><strong>費用:</strong> 10,000バーツ（約4.4万円）</li>
                                </ul>
                                <p className="mt-4 text-xs font-medium text-foreground bg-primary/10 p-2 rounded">
                                    💡 長期滞在ならこれ一択。フリーランス契約書やポートフォリオの提出が必要です。
                                </p>
                            </div>
                            <div className="bg-card border border-muted p-6 rounded-xl shadow-sm opacity-80">
                                <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                                    <Plane className="w-5 h-5" /> 観光ビザ (短期)
                                </h3>
                                <ul className="text-base space-y-2 text-muted-foreground">
                                    <li><strong>有効期間:</strong> 60日（ノービザ）</li>
                                    <li><strong>滞在期間:</strong> +30日延長可能（計90日）</li>
                                    <li><strong>条件:</strong> 特になし</li>
                                    <li><strong>費用:</strong> 無料（延長は1,900バーツ）</li>
                                </ul>
                                <p className="mt-4 text-xs font-medium text-foreground bg-muted p-2 rounded">
                                    💡 「まずは3ヶ月試したい」人はこちら。延長手続きはイミグレーションで行います。
                                </p>
                            </div>
                        </div>

                        <p>
                            <strong>結論：</strong>「本気で移住する」なら日本でDTVを取得してから渡航。「まずは様子見」ならノービザで入国し、気に入ったら一時帰国や近隣国でDTVを申請するのが賢いルートです。
                            <span className="text-red-500 font-bold">※ビザなしでの長期滞在やビザラン（入出国を繰り返す行為）は年々厳しくなっています。絶対に避けましょう。</span>
                        </p>

                        <div className="mt-8 bg-[#06C755]/10 border border-[#06C755]/30 p-6 rounded-xl text-center">
                            <h3 className="text-lg font-bold text-[#06C755] mb-2 flex items-center justify-center gap-2">
                                <span className="bg-[#06C755] text-white text-xs px-2 py-1 rounded-full">公式LINE限定</span>
                                DTVビザの参考申請書類をGET！
                            </h3>
                            <p className="text-base text-foreground/80 mb-4">
                                DTVを取得した3人の実際の提出書類（ポートフォリオなど）を見ることができます。
                            </p>
                            <a href="https://lin.ee/Qm46nCA" target="_blank" className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#06C755]/90 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#06C755]/20">
                                LINEで「ビザ」と送る
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* YouTube Embed: DTV Visa */}
                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-red-600">🎥</span> 動画で詳しく見る
                            </h3>
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-muted">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/B_HkXPiv7ow?si=StartBangkokNomad"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-sm text-center text-muted-foreground mt-2">
                                実体験ベースのDTV取得解説動画
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 2: Preparation Timeline */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-foreground">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary-foreground text-xl font-black">02</span>
                        渡航までのカウントダウン
                    </h2>

                    <div className="flex justify-center mb-10">
                        <div className="relative w-40 h-40 md:w-48 md:h-48 transform -rotate-3 transition-transform hover:rotate-0">
                            <Image
                                src="/character/nomad-dog-working-new.png"
                                alt="Nomad Dog Working"
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* 1 Month Before */}
                        {/* 1 Month Before */}
                        <div className="bg-muted/30 p-6 sm:p-8 rounded-2xl border border-muted">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">1ヶ月前</span>
                                資金作りと退職の意思表示
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-base mb-2">💰 貯金の目安</h4>
                                    <p className="text-base text-muted-foreground mb-3">
                                        最低でも<strong>100万円</strong>、DTV狙いなら<strong>220万円</strong>（残高証明用+初期費用）を目指しましょう。
                                        物価が安いとはいえ、初期費用（デポジット、航空券、保険）で30〜40万円は飛びます。
                                    </p>
                                    <Link href="/nomad-info/tax-money-guide" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                        バンコクの生活費と税金について詳しく見る <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div>
                                    <h4 className="font-bold text-base mb-2">🏢 退職交渉</h4>
                                    <p className="text-base text-muted-foreground">
                                        円満退社が基本です。「フリーランスとして独立する」と伝えれば、業務委託として契約を継続できる可能性もあります。日本の案件を持ったまま渡航するのが最強の安定策です。
                                    </p>
                                </div>
                            </div>

                            {/* YouTube Embed: Cost of Living */}
                            <div className="mt-8">
                                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/pDqbwEahHZI?si=StartBangkokNomad"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="text-xs text-center text-muted-foreground mt-2">
                                    参考：20代ノマドのリアルな生活費内訳
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 Weeks Before */}
                    <div className="bg-muted/30 p-6 sm:p-8 rounded-2xl border border-muted">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">2週間前</span>
                            役所の手続きと「三種の神器」導入
                        </h3>
                        <p className="mb-6 text-base text-muted-foreground">この時期が一番忙しいです。チェックリストに沿って進めましょう。</p>

                        <div className="space-y-4">
                            <div className="flex bg-white border border-muted p-4 rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                                <div className="mr-4 mt-1">
                                    <Wallet className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-1 flex items-center justify-between">
                                        <span>Wiseデビットカードの発行</span>
                                        <a href="https://wise.com" target="_blank" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">必須</a>
                                    </h4>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        日本のクレカを海外で使うと、手数料で1.6〜2.2%損します。Wiseなら手数料は格安。
                                        現地の屋台は現金必須なので、WiseでATMから引き出すのが最適解です。
                                        <span className="block mt-1 text-xs text-red-500">※発行に2週間かかるので、今すぐ申し込んでください。</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex bg-white border border-muted p-4 rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                                <div className="mr-4 mt-1">
                                    <Wifi className="w-6 h-6 text-gray-600" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-1 flex items-center justify-between">
                                        <span>SIMロック解除 & 日本の番号維持</span>
                                        <Link href="/living/sim-guide" className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded hover:bg-cyan-200">詳細</Link>
                                    </h4>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        スマホのSIMロック解除を忘れずに。
                                        また、SMS認証用に日本の番号を維持する必要があります。「楽天モバイル」か「povo」が最強の選択肢です。
                                    </p>
                                    <Link href="/living/sim-guide" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 mt-2">
                                        SIMとSMS受信の完全ガイドを見る <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-muted p-4 rounded-lg text-sm">
                                <h4 className="font-bold mb-2 text-base">📝 役所の手続きチェックリスト</h4>
                                <ul className="space-y-2 list-disc pl-4 text-muted-foreground text-base">
                                    <li><strong>海外転出届:</strong> 住民税を止めるために必須。渡航2週間前から提出可能。</li>
                                    <li><strong>国民年金:</strong> 任意加入にするか、カラ期間にするか決定する。</li>
                                    <li><strong>国民健康保険:</strong> 除籍されます。医療費対策が必須になります。</li>
                                </ul>
                            </div>
                        </div>

                        {/* Just Before */}
                        <div className="bg-muted/30 p-6 sm:p-8 rounded-2xl border border-muted">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">直前</span>
                                最後の守りを固める
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white border border-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-red-500" /> 保険 (SafetyWing)
                                    </h4>
                                    <p className="text-base text-muted-foreground mb-3">
                                        タイの病院代は高額です。クレジットカード付帯保険は期間に注意。
                                    </p>
                                    <Link href="/living/medical-guide" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                        病院と保険の事情について学ぶ <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div className="bg-white border border-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-500" /> セキュリティ (NordVPN)
                                    </h4>
                                    <p className="text-base text-muted-foreground mb-3">
                                        カフェのフリーWi-Fiは盗み見のリスクがあります。仕事のデータを守るためにVPNは必須。
                                        <br />日本のNetflixやAmazon Primeを見るためにも使えます（海外からはアクセス制限で見れません）。
                                    </p>
                                    <a href="https://nordvpn.com" target="_blank" className="text-xs text-primary hover:underline">NordVPNを見る →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 3: First Month Roadmap */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-foreground">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent text-xl font-black">03</span>
                        到着〜1ヶ月目のリアルな動き方
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-xl border border-muted">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Home className="w-5 h-5 text-accent" /> 住居探し：最初の1週間が勝負
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                多くの人が「日本からオンラインで契約」しようとしますが、やめておきましょう。
                                写真と現実は違います（騒音、臭い、日当たり）。
                            </p>
                            <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-sm mb-2">おすすめルート</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-base text-muted-foreground">
                                    <li>最初の3〜5泊はホテルを予約（Agodaが安い）</li>
                                    <li>現地に着いたら、Facebook MarketplaceやDDpropertyで物件を探す</li>
                                    <li>実際に内見に行き、オーナーと話して契約する</li>
                                </ol>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                相場は、中心部（Asoke, Phrom Phong）なら20,000バーツ〜。<br />
                                少し離れた（On Nut, Phra Khanong）なら10,000〜15,000バーツでプール・ジム付きのコンドミニアムに住めます。
                            </p>
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
                                    "name": "DTVビザの取得条件は？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "50万バーツ（約200万円）の貯金証明と、滞在中の活動計画（フリーランスのポートフォリオ等）が必要です。5年有効で、1回あたり180日まで滞在可能です。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "1ヶ月の生活費はいくら？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "最低でも10万〜15万円（25,000〜40,000バーツ）を見積もっておくと安心です。家賃や食費のグレードにより大きく変動します。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">よくある質問 (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. DTVビザの取得条件は？
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. 50万バーツ（約200万円）の貯金証明と、滞在中の活動計画（フリーランスのポートフォリオ等）が必要です。5年有効で、1回あたり180日まで滞在可能です。
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                Q. 1ヶ月の生活費はいくら？
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                A. 最低でも10万〜15万円（25,000〜40,000バーツ）を見積もっておくと安心です。家賃や食費のグレードにより大きく変動します。
                            </div>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                {/* Summary */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-primary/10 text-center relative overflow-hidden">
                    <div className="absolute bottom-2 right-2 w-20 h-20 opacity-10 rotate-12 pointer-events-none">
                        <Image
                            src="/character/nomad-dog-massage.png"
                            alt="Nomad Dog Relaxing"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                            src="/character/nomad-dog-massage.png"
                            alt="Nomad Dog Relaxing"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">最後に：完璧な準備なんてない</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                        ここまで詳しく書きましたが、すべての準備を完璧にする必要はありません。<br />
                        パスポート、スマホ、そしてWiseカードがあれば、なんとかなります。<br /><br />
                        一番大切なのは、<strong>「現状を変えたい」というその気持ちを行動に移すこと</strong>です。<br />
                        バンコクの熱気の中で、新しい自分を探してみましょう！
                    </p>
                    <Link href="/nomad-info" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-foreground/80 transition-colors">
                        他の記事も読んでみる
                    </Link>
                </div>
            </div >
        </article >
    );
}
