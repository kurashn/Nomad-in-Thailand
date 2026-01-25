import React from "react";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { ArrowLeft, Check, ArrowRight, ExternalLink, Globe, CreditCard, ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    if (locale === 'en') {
        return {
            title: "Wise Guide: Why It's Essential for Digital Nomads | Nomad in Thailand",
            description: "2026 Guide: Complete review of Wise for international transfers. Up to 8x cheaper than banks, real exchange rates, and essential money tips for Thailand nomads.",
        };
    }
    return {
        title: "海外送金「Wise」完全ガイド。なぜノマドの必須ツールなのか？ | Nomad in Thailand",
        description: "【2026年最新】海外送金Wise（ワイズ）のメリット・デメリットを徹底解説。銀行の最大8倍安い手数料、タイバーツへのリアルレート両替など、海外ノマドやタイ移住者が損をしないためのお金の知識をまとめました。",
    };
}

export default async function WiseGuidePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const AFFILIATE_LINK = "https://wise.com/jp/";

    if (locale === 'en') {
        return (
            <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
                {/* English Hero */}
                <div className="relative h-[50vh] w-full">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="w-full h-full relative">
                        <Image
                            src="/images/wise_hero_v2.png"
                            alt="Wise International Money Transfer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                        <Link href="/nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-[#9fe870] transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to Articles
                        </Link>
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-[#2a9d8f]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">Money & Tax</span>
                            <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">Essential Tool</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                            Wise Guide: Why It's Essential for Digital Nomads
                        </h1>
                    </div>
                </div>

                {/* English Content */}
                <div className="container max-w-3xl mx-auto px-4 mt-12">
                    <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                        <p className="text-xl leading-loose font-medium text-slate-800 mb-8">
                            "I sent money from my home bank and lost $50 in fees..."<br />
                            "I exchanged cash at the airport and was shocked by the terrible rate..."
                        </p>
                        <p className="text-lg leading-loose text-slate-700 mb-8">
                            The biggest waste of money in overseas life is <strong>"Movement Costs"</strong>.
                            Most people unknowingly lose the equivalent of several lunches every time they move money due to hidden bank fees.
                        </p>
                        <p className="text-lg leading-loose text-slate-700 mb-8">
                            The solution is <strong>Wise</strong>, used by over 16 million people worldwide.<br />
                            Simply put, if you are a digital nomad, <strong>not having this means losing money</strong>.
                        </p>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8 not-prose">
                            <h3 className="text-green-800 font-bold text-lg mb-4 mt-0">Why use Wise?</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>Up to 8x cheaper than banks:</strong> Save significantly on every transfer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>Real Exchange Rate:</strong> No markup rates like airports or banks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span><strong>Like a Local Account:</strong> Hold Thai Baht, USD, and more in one app.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* How to use section (English) */}
                    <section className="mb-20">
                        <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">1</span>
                            Nomad's Best Practice Guide
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#2a9d8f] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MUST</div>
                                <h3 className="flex items-center gap-2 font-bold text-xl text-slate-800 mb-4">
                                    <CreditCard className="w-6 h-6 text-[#2a9d8f]" />
                                    The "Magic" Debit Card
                                </h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    With the Wise card, you can spend abroad and it will <strong>automatically convert from your home currency balance</strong> at the real rate. You don't need to manually exchange beforehand.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion CTA (English) */}
                    <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Stop worrying about fees,<br />
                            Start moving freely.
                        </h2>
                        <Link
                            href={AFFILIATE_LINK}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#9fe870] text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#9fe870]/20"
                        >
                            Register Wise for Free
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    // Japanese Content (Original)
    return (
        <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
            {/* Standard Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/wise_hero_v2.png"
                        alt="Wise（ワイズ）海外送金・マルチカレンシー口座"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="/nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-[#9fe870] transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        記事一覧に戻る
                    </Link>
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#2a9d8f]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">お金・税金</span>
                        <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">必須ツール</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        海外送金「Wise」完全ガイド。<br />
                        <span className="text-xl md:text-3xl font-medium mt-3 block text-white/90">なぜノマドの必須ツールなのか？</span>
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-3xl mx-auto px-4 mt-12">

                {/* Introduction / Hook */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <p className="text-xl leading-loose font-medium text-slate-800 mb-8">
                        「日本の銀行から海外送金したら、手数料で5,000円くらい引かれていた...」<br />
                        「空港で両替したら、レートが悪すぎてびっくりした...」
                    </p>
                    <p className="text-lg leading-loose text-slate-700 mb-8">
                        海外生活で一番の無駄遣い、それは<strong>「お金の移動コスト」</strong>です。
                        多くの人が気づかないうちに、銀行の「隠れ手数料」で毎回ランチ数回分のお金を損しています。
                    </p>
                    <p className="text-lg leading-loose text-slate-700 mb-8">
                        それを解決するのが、世界で1,600万人以上が使う<strong>「Wise（ワイズ）」</strong>です。<br />
                        結論から言うと、海外ノマドをするなら<strong>これを持っていないと損</strong>です。
                    </p>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 my-8 not-prose">
                        <h3 className="text-green-800 font-bold text-lg mb-4 mt-0">Wiseを使うとこうなります</h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <span><strong>銀行より最大8倍安い：</strong> 10万円送金で、数千円お得になることも。</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <span><strong>本当のレートで両替：</strong> 空港や銀行のような「上乗せレート」がありません。</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <span><strong>現地口座の代わりになる：</strong> タイバーツも米ドルも、アプリ1つで管理。</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Problem: Comparison Simulation */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">1</span>
                        どれくらいお得なの？（比較シミュレーション）
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed text-slate-700">
                        例えば、<strong>日本からタイへ「10万円」を送金する場合</strong>で比べてみましょう。<br />
                        銀行とWiseでは、手元に残るお金にこれだけの差が出ます。
                    </p>

                    {/* Visual Comparison Box */}
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-8">
                        <div className="grid grid-cols-2 text-center border-b border-slate-200 bg-slate-50">
                            <div className="p-4 border-r border-slate-200">
                                <h3 className="font-bold text-slate-600">一般的な銀行</h3>
                            </div>
                            <div className="p-4 bg-[#2a9d8f]/10">
                                <h3 className="font-bold text-[#2a9d8f] text-xl">Wise</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 text-center text-sm md:text-base">
                            {/* Fee Row */}
                            <div className="p-6 border-r border-b border-slate-100">
                                <p className="text-slate-500 text-xs mb-1">送金手数料</p>
                                <p className="font-bold text-red-500">高い</p>
                                <p className="text-xs text-slate-400 mt-1">（3,000円〜7,000円）</p>
                            </div>
                            <div className="p-6 border-b border-slate-100 bg-[#2a9d8f]/5">
                                <p className="text-slate-500 text-xs mb-1">送金手数料</p>
                                <p className="font-bold text-[#2a9d8f]">格安</p>
                                <p className="text-xs text-slate-400 mt-1">（数百円〜 ※通貨による）</p>
                            </div>

                            {/* Rate Row */}
                            <div className="p-6 border-r border-b border-slate-100">
                                <p className="text-slate-500 text-xs mb-1">為替レート</p>
                                <p className="font-bold text-red-500">悪い（隠れコスト）</p>
                                <p className="text-xs text-slate-400 mt-1">1バーツ = 5.2円<br />(実際より高い)</p>
                            </div>
                            <div className="p-6 border-b border-slate-100 bg-[#2a9d8f]/5">
                                <p className="text-slate-500 text-xs mb-1">為替レート</p>
                                <p className="font-bold text-[#2a9d8f]">リアルレート</p>
                                <p className="text-xs text-slate-400 mt-1">1バーツ = 5.0円<br />(Googleと同じ)</p>
                            </div>

                            {/* Result Row */}
                            <div className="p-6 border-r bg-slate-50">
                                <p className="text-slate-500 text-xs mb-2">タイでの受取額</p>
                                <p className="text-xl font-bold text-slate-600">少なくなる...</p>
                            </div>
                            <div className="p-6 bg-[#2a9d8f]/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-bl-lg">WIN!</div>
                                <p className="text-slate-500 text-xs mb-2">タイでの受取額</p>
                                <p className="text-2xl font-bold text-[#2a9d8f]">多くなる！</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 text-left md:text-right mb-12">※2026年1月時点の概算イメージです。実際の手数料は金額や通貨により異なります。</p>
                </section>

                {/* Solution: Key Benefits */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">2</span>
                        なぜそんなに安いの？
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div className="bg-slate-100 rounded-2xl p-6">
                            <h3 className="font-bold text-lg mb-4 text-center text-slate-700">従来の銀行（バケツリレー）</h3>
                            <div className="flex items-center justify-center gap-2 text-2xl text-slate-400 mb-2">
                                <span>🏦</span>
                                <ArrowRight className="w-4 h-4" />
                                <span>🏦</span>
                                <ArrowRight className="w-4 h-4" />
                                <span>🏦</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                銀行Aから銀行Bへ送るのに、中継銀行（CやD）を経由します。
                                そのたびに<strong>「中継手数料」</strong>が引かれ、さらに複数の銀行が<strong>「為替スプレッド」</strong>を上乗せします。
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-[#2a9d8f] shadow-lg shadow-[#2a9d8f]/10">
                            <h3 className="font-bold text-lg mb-4 text-center text-[#2a9d8f]">Wiseの仕組み</h3>
                            <div className="flex items-center justify-center gap-2 text-base md:text-lg text-[#2a9d8f] mb-2 font-bold whitespace-nowrap">
                                <span>🇯🇵 Wise日本</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                                <span>🇹🇭 Wiseタイ</span>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                実は国境を越えてお金を動かしていません。
                                「日本国内でWiseの口座に振り込む」→「Wiseがタイ国内の口座から相手に振り込む」という仕組み。
                                だから<strong>国内送金のように安くて速い</strong>のです。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Smart Usage Guide */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">3</span>
                        【保存版】ノマド流・Wiseの賢い使い方
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed text-slate-700">
                        「登録したけど、どうやって使うのが一番お得なの？」<br />
                        そんな方のために、海外ノマド歴の長い私たちが実践している<strong>ベストな使い方</strong>を伝授します。
                        <br /><br />
                        基本は<strong>「デビットカード」</strong>と<strong>「スマホアプリ」</strong>の2つを使いこなすだけです。
                    </p>

                    <div className="space-y-8">
                        {/* Usage 1: Card */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#2a9d8f] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MUST</div>
                            <h3 className="flex items-center gap-2 font-bold text-xl text-slate-800 mb-4">
                                <CreditCard className="w-6 h-6 text-[#2a9d8f]" />
                                1. デビットカードは「魔法のカード」
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Wiseにお金（日本円）が入っていれば、<strong>タイで買い物をしても勝手に「バーツ」に両替して決済</strong>されます。
                                事前にアプリで両替しておく必要はありません。
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                                <p className="font-bold text-slate-900 mb-2">💡 ここがポイント！</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>レジでは「カードで」と出してタッチ決済するだけ。</li>
                                    <li>端末で「現地通貨（THB）か自国通貨（JPY）か？」と聞かれたら、<strong>必ず「現地通貨（THB）」</strong>を選んでください。銀行の悪いレートを回避できます。</li>
                                </ul>
                            </div>
                        </div>

                        {/* Usage 2: App */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PRO TIP</div>
                            <h3 className="flex items-center gap-2 font-bold text-xl text-slate-800 mb-4">
                                <Globe className="w-6 h-6 text-amber-500" />
                                2. アプリで「円高」の時にキープする
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                基本は自動両替でOKですが、アプリを使えば<strong>「円高の時にまとめて両替して、バーツで持っておく」</strong>ことができます。
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                                <p className="font-bold text-slate-900 mb-2">💡 例えば...</p>
                                <p>
                                    「今は1バーツ5.0円だ！今のうちに10万円分両替しておこう」とアプリ操作しておけば、
                                    その後1バーツ5.5円になっても、あなたは5.0円のレートで生活できます。
                                </p>
                            </div>
                        </div>

                        {/* Usage 3: ATM */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="flex items-center gap-2 font-bold text-xl text-slate-800 mb-4">
                                <CreditCard className="w-6 h-6 text-slate-500" />
                                3. 現金が必要な時は？
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                屋台やローカル食堂など、現金しか使えない場所のために現金も必要です。<br />
                                Wiseカードを使って現地のATMからバーツを引き出せます。
                            </p>
                            <div className="bg-red-50 text-red-800 p-4 rounded-lg text-sm">
                                <p className="font-bold mb-1">⚠️ 注意点</p>
                                <p>
                                    タイのATMは利用手数料として一律「220バーツ（約1,100円）」取られることが多いです。
                                    こまめに下ろすと損をするので、<strong>月に1回まとめて上限額まで下ろす</strong>のがノマドの鉄則です。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Account Opening */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">4</span>
                        5分で完了！始め方ステップ
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2a9d8f] text-white flex items-center justify-center font-bold">1</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">公式サイトからアカウント作成</h3>
                                <p className="text-slate-600 text-sm">
                                    メールアドレス、Googleアカウントなどで登録します。<br />
                                    <span className="text-xs text-slate-500">※以下のリンクから登録すると、初回の送金手数料が割引になる特典がつきます。</span>
                                </p>
                                <div className="mt-3">
                                    <Link href={AFFILIATE_LINK} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex items-center gap-1 text-[#2a9d8f] font-bold text-sm hover:underline">
                                        Wise公式サイトへ <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2a9d8f] text-white flex items-center justify-center font-bold">2</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">本人確認をする</h3>
                                <p className="text-slate-600 text-sm">
                                    スマホで「マイナンバーカード」と「自分の顔」を撮影してアップロードします。
                                    指示に従って自撮りをするだけなので簡単です。
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2a9d8f] text-white flex items-center justify-center font-bold">3</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">承認完了！利用開始</h3>
                                <p className="text-slate-600 text-sm">
                                    早ければ数分〜数時間で承認完了の通知が届きます。
                                    その後すぐに、海外送金やマルチカレンシー口座（現地口座情報の取得）が可能になります。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust / Safety */}
                <section className="bg-white p-8 rounded-2xl border border-slate-200 mb-16 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                        <div className="bg-slate-100 p-4 rounded-full">
                            <ShieldCheck className="w-10 h-10 text-[#2a9d8f]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-slate-800">日本の法律でも認可されています</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Wiseは日本において<strong>「第一種・第二種資金移動業者」</strong>として関東財務局に登録されています（関東財務局長 第00040号）。
                                万が一の場合でも、顧客の資産は法令に基づき100%保全されているため、銀行と同じレベルで安心して利用できます。
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                        <span className="text-[#2a9d8f]">QA</span> よくある質問
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. 本当に銀行より安いですか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. はい、ほとんどのケースで安くなります。銀行は「送金手数料」とは別に「為替レート」に隠れコスト（スプレッド）を数円上乗せしていますが、Wiseはこれがゼロ（Google検索と同じレート）だからです。
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. 英語ができなくても使えますか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. はい、公式サイトもアプリも完全に日本語対応しています。サポートも日本語で受けられるので安心してください。
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. タイ以外でも使えますか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. もちろんです。世界160カ国、40通貨以上に対応しています。一度アカウントを作れば、欧米や他のアジア諸国への旅行でもそのまま使えます。
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                Q. 登録には何が必要ですか？
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                A. 「現住所が確認できる本人確認書類（マイナンバーカード、運転免許証など）」と「スマートフォン」があれば、オンラインですぐに手続きできます。
                            </div>
                        </details>
                    </div>
                </section>

                {/* Conclusion CTA */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        お金の不安をなくして、<br />
                        もっと自由に移動しよう。
                    </h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                        浮いた手数料で、美味しいタイ料理を食べるもよし、マッサージに行くもよし。<br className="hidden md:inline" />
                        あなたの大切なお金を、銀行の手数料にするのはもう終わりにしましょう。
                    </p>
                    <Link
                        href={AFFILIATE_LINK}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#9fe870] text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#9fe870]/20"
                    >
                        Wiseに無料で登録する
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    <p className="text-sm text-slate-400 mt-6">
                        ※登録・維持費は無料です
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <Link href="/nomad-info" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors underline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
