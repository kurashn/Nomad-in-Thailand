import Link from "next/link";
import { ArrowLeft, Handshake, Star, Users, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "スポンサー募集 | ノマタイ",
    description: "ノマタイの活動を応援していただける個人・企業スポンサー様を募集しています。",
};

export default function SponsorPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link href="/nomad-info" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    記事一覧に戻る
                </Link>
            </div>

            {/* Hero Header */}
            <div className="relative h-[50vh] w-[calc(100%+2rem)] md:w-full mb-12 -mx-4 md:-mx-0 md:rounded-3xl overflow-hidden md:mt-8">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/sponsor_hero.png"
                        alt="海外ノマドポッドキャスト スポンサー募集"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-12 text-center text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md mb-4 border border-white/30">
                        <Handshake className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl md:text-5xl font-bold font-serif mb-4 leading-tight drop-shadow-lg">
                        <span className="whitespace-nowrap">「海外ノマドポッドキャスト」</span><br />
                        パートナー・スポンサー募集
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                        自由な生き方を模索するすべての人へ。<br className="hidden md:inline" />
                        私たちの発信を支え、共に盛り上げてくださるパートナー様を募集します。
                    </p>
                    <div className="mt-6 text-xs text-white/70">
                        2026.01.09 | お知らせ
                    </div>
                </div>
            </div>



            {/* Main Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-[#2a9d8f] hover:prose-a:text-[#21867a] prose-p:leading-loose prose-p:mb-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
                    <h2 className="text-2xl font-bold mb-6 mt-0">はじめに</h2>
                    <p className="mb-6">
                        「場所にとらわれない生き方」。<br />
                        そのライフスタイルに憧れても、実際にはビザや住環境、そして現地の繋がりなど、多くのハードルがあります。
                    </p>
                    <p className="mb-6">
                        <strong>「海外で挑戦する人が、安心して活動できる基盤を作りたい」</strong>
                    </p>
                    <p className="mb-6">
                        『海外ノマドポッドキャスト』は、そんなシンプルな想いから始まりました。今では、バンコクを拠点に多くの日本人が集まり、リアルな情報や経験をシェアする大切なコミュニティに成長しています。
                    </p>
                    <p className="mb-6">
                        この活動をさらに広げ、世界中の日本人ノマドが安心して頼れる「拠点」にしていくために。
                    </p>
                    <p className="mb-6">
                        <a href="https://www.youtube.com/@T78community" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2a9d8f] font-bold hover:underline">
                            <span>▶ 私たちの発信（YouTube）</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </p>
                    <p className="mb-0">
                        私たちのビジョンに共感し、応援していただけるパートナー様を募集いたします。
                    </p>
                </div>

                {/* Profile Section */}
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8">
                    <span className="text-[#2a9d8f] text-4xl">01</span>
                    運営者について
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="w-full md:w-5/12">
                        <YouTubeEmbed videoId="DnjW6Xa_41M" />
                    </div>
                    <div className="flex-1">

                        <p className="mb-6">
                            2020年よりバンコクを拠点に活動するデジタルノマド。<br />
                            自身の経験を元に、「場所にとらわれない生き方」の選択肢を増やすべく発信活動を続けています。
                        </p>
                        <p className="mb-6">
                            ポッドキャストでは、成功談だけでなく、失敗談やリアルな悩みも包み隠さず話すことで、聴く人が海外移住を「他人事」ではなく「自分自身の体験」としてリアルに感じられるような発信を心がけています。
                        </p>
                    </div>
                </div>

                {/* Roadmap Section */}
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8">
                    <span className="text-[#2a9d8f] text-4xl">02</span>
                    今後のロードマップ (2026)
                </h2>
                <p>いただいたご支援は、機材費、編集費、そしてイベント費用などに大切に使わせていただきます。</p>

                <div className="bg-[#2a9d8f]/5 p-6 rounded-2xl border border-[#2a9d8f]/20 mb-8 mt-8">
                    <h3 className="text-lg font-bold text-[#2a9d8f] mt-0 mb-2">🏆 2026年の目標</h3>
                    <p className="mb-0 font-bold text-slate-700">
                        チャンネル登録者 3,000人 / コミュニティメンバー 100人
                    </p>
                </div>
                <div className="relative border-l-2 border-[#2a9d8f]/30 ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12 my-8">
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a9d8f] text-white text-xs font-bold ring-4 ring-white">01</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-[#2a9d8f]">1月 - 3月：基盤構築とコミュニティ始動</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>・ "ノマタイ"サイトとの連携強化</li>
                            <li>・ 映像・音声クオリティの向上（4K収録）</li>
                            <li>・ コミュニティ集客・ゆるイベント（オフ会）実施</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a9d8f]/30 text-[#2a9d8f] text-xs font-bold ring-4 ring-white">02</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-slate-800">4月 - 6月：体験の共有と熱狂の創出</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>・ 2泊3日の「チェンマイ・ノマド合宿」実施</li>
                            <li>・ 他ノマドワーカーとのコラボ対談</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold ring-4 ring-white">03</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-slate-800">7月 - 9月：活動域の拡大</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>・ 海外リトリートの企画・準備</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a9d8f] text-white text-xs font-bold ring-4 ring-white">04</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-[#2a9d8f]">10月 - 12月：2026年の集大成</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>・ 心と体を整える「海外リトリート」開催</li>
                            <li>・ チャンネル登録者 3,000人 / コミュニティメンバー 100人達成</li>
                        </ul>
                    </div>
                </div>


                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">03</span>
                    活動を長く、安定して続けていくために
                </h2>
                <p className="mb-6">
                    これまでは個人の持ち出しで運営してきましたが、コンテンツの質を高め、責任ある運営を続けていくためには、<strong>しっかりとした運営体制が不可欠です。</strong>
                </p>
                <p className="mb-6">
                    皆様からのご支援は、より良いコンテンツを作るための制作費や、現地の深い情報の取材費、そしてメンバー交流のための運営費として、大切に使わせていただきます。
                </p>
                <p className="font-bold text-[#2a9d8f] mb-6">
                    一過性のブームではなく、10年先も続く「信頼できる場所」を一緒に作っていきたいと考えています。
                </p>

                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">04</span>
                    パートナー様と共に描く未来
                </h2>
                <p className="mb-6">
                    私たちは、単なる広告の掲載ではなく、<strong>同じ方向を向いて歩めるパートナーシップ</strong>を築きたいと考えています。
                </p>
                <p className="mb-6">
                    「新しい働き方」や「世界への挑戦」を目指すリスナーの方々に、本当に役立つサービスや商品を、自信を持ってご紹介させていただきます。
                </p>

                <div className="space-y-6 my-8">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[#2a9d8f]/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center text-[#2a9d8f]">
                            <ExternalLink className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-0 mb-2">番組内でのCM・サービス紹介</h3>
                            <p className="text-muted-foreground m-0">
                                YouTube動画（対談・雑談形式）の冒頭・中間や、Podcastの音声内で、私たちが御社のサービスを「話題の一つとして」自然に紹介します。
                                20代・30代の「これから海外に挑戦したい」「働き方を変えたい」層へダイレクトに届くプロモーションが可能です。
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[#2a9d8f]/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center text-[#2a9d8f]">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-0 mb-2">コラボ動画・取材の実施</h3>
                            <p className="text-muted-foreground m-0">御社のオフィスや店舗へ伺っての取材や、代表者様との対談動画を制作・公開します。</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[#2a9d8f]/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center text-[#2a9d8f]">
                            <Star className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-0 mb-2">概要欄への掲載</h3>
                            <p className="text-muted-foreground m-0">すべての配信回の概要欄に、スポンサー様としてリンクとお名前を固定掲載いたします。</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">05</span>
                    よくある質問
                </h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Q. YouTubeとPodcast、どちらがメインですか？</h3>
                        <p className="text-muted-foreground">現在はYouTubeでの動画配信に力を入れていますが、音声のみのPodcast配信（Spotifyのみ）も並行して行っています。両方の媒体でご紹介可能です。</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Q. 「ノマタイ」サイトへの掲載はありますか？</h3>
                        <p className="text-muted-foreground">はい、プランによっては当サイト「Nomad in Thailand」上でのバナー掲載や、連携記事の作成もセットでご提案可能です。</p>
                    </div>
                </div>

                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">06</span>
                    最後に
                </h2>
                <p className="mb-6">
                    最後まで読んでいただき、ありがとうございます。<br />
                    私たちの活動やビジョンに少しでも共感していただけたら、ぜひ一度ご連絡ください。
                </p>
                <p className="mb-6">
                    まだ具体的なプランが決まっていなくても大丈夫です。<br />
                    「こんなことできるかな？」といったご相談や情報交換からでも、お気軽にご連絡いただければ嬉しいです。
                </p>
                <p className="mb-6">
                    個人の方からの小口のドネーション（活動支援）も大変励みになります。
                </p>

                <div className="not-prose mt-12 mb-12">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -ml-16 -mb-32 pointer-events-none"></div>

                        <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 relative z-10">
                            パートナーシップのご相談
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10">
                            協業や協賛に関するご相談など、まずはお問い合わせください。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold hover:shadow-lg hover:shadow-amber-500/40 hover:scale-105 transition-all gap-2 relative z-10"
                        >
                            お問い合わせフォームへ
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
