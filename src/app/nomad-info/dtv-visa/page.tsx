import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Plane, Home, Wallet, Shield, Calendar, AlertTriangle, FileText, ArrowRight } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
    title: "【2026年最新】タイDTVビザ完全ガイド！申請条件・費用・書類を実体験から徹底解説 | のまどくん",
    description: "5年間滞在可能、180日ごとの出国でOK。デジタルノマドのための最強ビザ「DTV」の取得方法を、実際の申請経験と動画解説を交えて紹介します。",
};

export default function DtvVisaPage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/images/dtv-visa-thumbnail.png"
                    alt="Thailand DTV Visa"
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
                        【2026年最新】タイDTVビザ完全ガイド！
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">申請条件・費用・書類を実体験から徹底解説</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6">
                        「タイに住みたいけど、ビザがない...」<br />
                        そんなノマドたちの悩みを一発で解決する最強のビザ、それが<strong>DTV (Destination Thailand Visa)</strong>です。
                    </p>
                    <p className="leading-relaxed">
                        2024年に彗星のごとく現れたこのビザは、まさに<strong>「デジタルノマドのためのビザ」</strong>。<br />
                        5年間有効、1回の入国で180日（約半年）滞在可能。しかも就労（タイ国外の仕事）が認められているという、これまでになかった画期的な制度です。<br /><br />
                        この記事では、実際にDTVを取得した経験をもとに、申請条件や必要な書類、そして却下されないためのポイントを徹底解説します。
                    </p>

                    <div className="mt-8 not-prose">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <YouTubeEmbed videoId="B_HkXPiv7ow" />
                        </div>
                        <p className="text-sm text-center text-muted-foreground mt-2">
                            動画でも詳しく解説しています（実際の書類例など）
                        </p>
                    </div>
                </div>

                {/* Section 1: What is DTV? */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-primary/10 text-primary p-2 rounded-lg"><Shield className="w-6 h-6" /></span>
                        1. そもそもDTVビザとは？
                    </h2>

                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        正式名称は「Destination Thailand Visa」。<br />
                        これまでのタイのビザ（観光ビザやエリートビザ）とは一線を画す、圧倒的なコスパと自由度が特徴です。
                    </p>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-8">
                        <h3 className="bg-slate-100 p-4 font-bold text-center border-b">他ビザとの比較表</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                    <tr>
                                        <th className="px-4 py-3">比較項目</th>
                                        <th className="px-4 py-3 bg-primary/5 text-primary font-bold border-x border-primary/20">DTVビザ</th>
                                        <th className="px-4 py-3">タイランドエリート</th>
                                        <th className="px-4 py-3">観光ビザ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">申請費用</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">10,000 THB<br />(約4.4万円)</td>
                                        <td className="px-4 py-3">90万 THB〜<br />(約400万円〜)</td>
                                        <td className="px-4 py-3">無料<br />(延長1,900THB)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">有効期間</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">5年間</td>
                                        <td className="px-4 py-3">5年〜20年</td>
                                        <td className="px-4 py-3">60日</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">1回の滞在</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">180日<br />(+180日延長可)</td>
                                        <td className="px-4 py-3">1年</td>
                                        <td className="px-4 py-3">60日<br />(+30日延長可)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">条件</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">50万THB貯金<br />フリーランス証明</td>
                                        <td className="px-4 py-3">高額な入会金</td>
                                        <td className="px-4 py-3">特になし</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                        <h3 className="font-bold text-lg mb-3 text-primary flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">!</span>
                            ここが革命的
                        </h3>
                        <ul className="space-y-2 text-foreground/80">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span><strong>5年間でたったの1万バーツ:</strong> コスパが異常です。エリートビザの1/90の価格です。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span><strong>家族も帯同可能:</strong> 配偶者や子供もDTV（帯同者枠）を取得できます。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span><strong>「ワーケーション」が公式に認められた:</strong> これまでグレーだったノマドワークが堂々とできます。</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: Requirements */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-amber-100 text-amber-600 p-2 rounded-lg"><FileText className="w-6 h-6" /></span>
                        2. 申請に必要な3つの条件
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        DTVを取得するには、以下の3つのカテゴリーのいずれかに該当する必要があります。<br />
                        私たちデジタルノマドは、基本的に<strong>(1) Workcation</strong>での申請となります。
                    </p>

                    <div className="grid gap-6 md:grid-cols-3 mb-8">
                        <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-bl">推奨</div>
                            <h3 className="font-bold mb-2 text-primary">1. Workcation</h3>
                            <p className="text-sm text-slate-600">
                                エンジニア、デザイナー、ライターなど、場所を選ばない仕事をしている人。
                            </p>
                        </div>
                        <div className="bg-white border rounded-xl p-4 shadow-sm opacity-80">
                            <h3 className="font-bold mb-2 text-slate-800">2. Soft Power</h3>
                            <p className="text-sm text-slate-600">
                                ムエタイ留学、タイ料理教室に通う、音楽フェスなどで活動する人。
                            </p>
                        </div>
                        <div className="bg-white border rounded-xl p-4 shadow-sm opacity-80">
                            <h3 className="font-bold mb-2 text-slate-800">3. Medical</h3>
                            <p className="text-sm text-slate-600">
                                タイで長期的な治療や療養を受ける必要がある人。
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-4">必須書類チェックリスト (Workcationの場合)</h3>
                    <div className="space-y-4">
                        <div className="flex bg-white border border-slate-200 p-4 rounded-lg">
                            <div className="bg-slate-100 text-slate-600 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">1</div>
                            <div>
                                <h4 className="font-bold text-slate-800">パスポート残存期間</h4>
                                <p className="text-sm text-slate-500">申請時に6ヶ月以上の残存期間が必要です。</p>
                            </div>
                        </div>
                        <div className="flex bg-white border border-slate-200 p-4 rounded-lg">
                            <div className="bg-slate-100 text-slate-600 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">2</div>
                            <div>
                                <h4 className="font-bold text-slate-800">金融資産証明 (50万バーツ以上)</h4>
                                <p className="text-sm text-slate-500">
                                    約200〜220万円以上の銀行残高証明書（英文）。<br />
                                    <span className="text-red-500 text-xs">※日本の銀行で発行してもらえます。「直近の残高」があればOKで、何ヶ月も維持している必要はありません。</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-white border border-primary p-4 rounded-lg shadow-sm">
                            <div className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">3</div>
                            <div>
                                <h4 className="font-bold text-primary">フリーランス証明 / 雇用契約書</h4>
                                <p className="text-sm text-slate-600">
                                    これが最重要です。<br />
                                    <strong>会社員の場合:</strong> 会社からの「リモートワーク許可証」や雇用契約書。<br />
                                    <strong>フリーランスの場合:</strong> クライアントとの業務委託契約書、または自身のポートフォリオ（活動実績をまとめたサイトやPDF）。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Step-by-Step Guide */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Calendar className="w-6 h-6" /></span>
                        3. 申請手順ステップバイステップ
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        日本から申請する場合、全てオンライン（E-Visa）で完結します。大使館に行く必要はありません。
                    </p>

                    <div className="relative border-l-2 border-slate-200 ml-4 space-y-10 py-4">
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">STEP 1: 書類を準備する</h3>
                            <p className="text-slate-600 mb-2">
                                全ての書類をPDFまたはJPG化します。ファイル名は英語にしておきましょう（例: `Bank_Statement.pdf`）。
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">STEP 2: Thai E-Visaサイトでアカウント作成</h3>
                            <p className="text-slate-600 mb-2">
                                <a href="https://www.thaievisa.go.th/" target="_blank" className="text-primary hover:underline underline">公式E-Visaサイト</a>にアクセスし、アカウントを作ります。
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">STEP 3: 申請フォーム入力・書類アップロード</h3>
                            <p className="text-slate-600 mb-2">
                                非常に項目が多いですが、根気よく入力します。<br />
                                「Type of Visa」で「Destination Thailand Visa」を選択するのを間違えないように。
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">STEP 4: 支払い & 審査待ち</h3>
                            <p className="text-slate-600 mb-2">
                                クレジットカードで10,000バーツ（日本円請求）を支払います。<br />
                                審査期間は混雑状況によりますが、<strong>早ければ3日、遅いと2〜3週間</strong>かかります。余裕を持って申請しましょう。
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">STEP 5: ビザ発給（メールで届く）</h3>
                            <p className="text-slate-600 mb-2">
                                承認されるとメールでPDFが届きます。これを印刷してパスポートと一緒に持って渡航するだけです！
                            </p>
                        </div>
                    </div>
                </section>

                <div className="bg-[#06C755]/5 border border-[#06C755]/20 p-8 rounded-2xl text-center mb-16">
                    <h3 className="text-xl font-bold text-[#06C755] mb-2">
                        もっと具体的な書類が見たいですか？
                    </h3>
                    <p className="text-foreground/80 mb-6">
                        ポートフォリオの書き方や、実際に通った申請書のサンプルを<br className="hidden sm:inline" />
                        公式LINEで無料配布しています。
                    </p>
                    <a href="https://lin.ee/Qm46nCA" target="_blank" className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#06C755]/90 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-md">
                        LINEで「ビザ」と送って受け取る <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">よくある質問 (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. タイ国内で申請できますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                A. 原則としてできません。タイ国外（日本や近隣国のタイ大使館）で申請する必要があります。ノービザで入国してしまった場合は、一度ラオスやマレーシア等に出国して申請することになります。
                            </p>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 税金はどうなりますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                A. タイ滞在が年間180日を超えると「居住者」扱いとなり、タイ国内に持ち込んだ所得に対して課税される可能性があります（2024年の新税制）。ただし、DTVビザ自体が新しい制度であり、運用は不透明な部分が多いです。日本の非居住者となるかどうかも含め、専門家（税理士）への相談をおすすめします。
                            </p>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 180日以上の滞在はどうすればいいですか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                A. 1回につき180日滞在できますが、イミグレーションで10,000バーツを支払えばさらに180日延長可能です。または、一度タイ国外に出国して再入国すれば、新たに180日の滞在許可が降ります（これを5年間繰り返せます）。
                            </p>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                <div className="mt-12 text-center">
                    <Link href="/nomad-info" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
