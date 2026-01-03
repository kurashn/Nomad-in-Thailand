import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartPulse, Pill, ShieldCheck, MapPin, Phone, Clock, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "タイで体調を崩したら？日本語対応病院 & 常備薬リスト2026 | のまどくん",
    description: "バンコクで安心の日本語通訳常駐病院（サミティベート・バンコク病院）と、市販薬（薬局）の使い方を徹底解説。海外旅行保険の活用法も。",
};

export default function MedicalGuidePage() {
    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <Image
                    src="/images/medical_guide_hero.png"
                    alt="Medical Care in Bangkok"
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
                        タイで体調を崩したら？
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">日本語対応病院 & 常備薬リスト</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6">
                        異国の地で最も不安なこと、それは「病気」です。
                    </p>
                    <p className="leading-relaxed">
                        「お腹を壊した」「熱が出た」「デング熱かも...」<br />
                        そんな時、言葉が通じない病院に行くのは恐怖でしかありません。しかし安心してください。<br />
                        バンコクは<strong>世界トップレベルの医療先進都市</strong>であり、日本人駐在員が多いため、日本語だけで受診できる病院が充実しています。
                    </p>
                </div>

                {/* Emergency Contact Card */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-100 p-3 rounded-full text-red-600">
                            <Phone className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-red-700">緊急時の連絡先 (24時間)</h3>
                            <p className="text-sm text-red-600/80">いざという時のためにスクリーンショットを撮っておきましょう</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="flex-1 bg-white border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-red-600">1669</span>
                            <span className="text-xs font-bold text-slate-500 uppercase">救急車 (Ambulance)</span>
                        </div>
                        <div className="flex-1 bg-white border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-red-600">1155</span>
                            <span className="text-xs font-bold text-slate-500 uppercase">ツーリストポリス</span>
                        </div>
                    </div>
                </div>

                {/* Section 1: Hospitals */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-teal-100 text-teal-600 p-2 rounded-lg"><HeartPulse className="w-6 h-6" /></span>
                        1. 日本語が通じる「3大・安心病院」
                    </h2>

                    <p className="mb-6 text-muted-foreground">
                        パスポートと海外旅行保険の証書さえあれば、日本の総合病院となんら変わらない（むしろそれ以上に豪華な）サービスが受けられます。
                    </p>

                    <div className="space-y-6">
                        {/* Samitivej */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">サミティベート病院 スクムビット</h3>
                                    <p className="text-sm text-slate-500">Samitivej Sukhumvit Hospital</p>
                                </div>
                                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">日本人御用達 No.1</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                日本人専用棟があり、受付から診察、会計まで全て日本語で完結します。日本人の医師や看護師も常駐しており、言葉の壁は皆無です。
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" /> スクムビット・ソイ49 (トンロー)</span>
                                <span className="flex items-center gap-1.5 text-slate-600"><Phone className="w-4 h-4" /> 02-022-2222 (日本語直通)</span>
                            </div>
                        </div>

                        {/* Bangkok Hospital */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">バンコク病院</h3>
                            <p className="text-sm text-slate-500 mb-4">Bangkok Hospital</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                タイ最大手の私立病院グループ。ここにも日本人専用窓口（JMS）があり、非常に手厚いサポートが受けられます。設備は超一流です。
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" /> ペッブリー通り</span>
                            </div>
                        </div>

                        {/* Bumrungrad */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">バムルンラード・インターナショナル</h3>
                            <p className="text-sm text-slate-500 mb-4">Bumrungrad International Hospital</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                「アジアの医療ハブ」と呼ばれる超高級病院。5つ星ホテルのような内装で、世界中の富裕層が訪れます。もちろん日本語通訳も手配可能です。
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" /> スクムビット・ソイ3 (ナナ)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Pharmacies */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><Pill className="w-6 h-6" /></span>
                        2. 薬局で買える「常備薬」リスト
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        ちょっとした頭痛や腹痛なら、街の薬局（Pharmacy）で薬を買えば治ります。タイの薬剤師は英語が流暢で、的確な薬を出してくれます。<br />
                        以下の画像を見せれば伝わります。
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">鎮痛剤 (頭痛・生理痛)</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">Tylenol (タイレノール)</p>
                            <p className="text-xs text-slate-500">日本と同じアセトアミノフェン成分。コンビニでも買えます。</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">腹痛・下痢 (食あたり)</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">Carbon (カーボン)</p>
                            <p className="text-xs text-slate-500">活性炭カプセル。悪いものを吸着して出してくれます。</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">のどの痛み</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">Strepsils (ストレプシル)</p>
                            <p className="text-xs text-slate-500">のど飴タイプ。コンビニのレジ横に必ずあります。</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">乗り物酔い</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">Dimenhydrinate</p>
                            <p className="text-xs text-slate-500">「Motion sickness pill」と言えば通じます。</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-orange-50 border border-orange-200 p-4 rounded-lg flex gap-3 text-sm text-orange-800">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>抗生物質（Antibiotics）も薬局で買えますが、必ず薬剤師に症状を相談してから服用してください。</p>
                    </div>
                </section>

                {/* Section 3: Insurance */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><ShieldCheck className="w-6 h-6" /></span>
                        3. 海外旅行保険は必須！
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <p className="leading-relaxed mb-4">
                            タイの私立病院は医療レベルが高い分、<strong>治療費も高額</strong>です。<br />
                            風邪での通院でも数万円、入院となれば数十万〜数百万円請求されることも珍しくありません。
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-700">
                            <li>クレジットカード付帯保険（利用付帯条件に注意）</li>
                            <li><strong>SafetyWing</strong>（ノマドに人気のサブスク型保険）</li>
                        </ul>
                        <p className="mt-4 text-sm text-slate-500">
                            ※必ず渡航前に加入状況を確認しておきましょう。キャッシュレス診療に対応している保険なら、財布から一銭も出さずに治療が受けられます。
                        </p>
                    </div>
                </section>

                {/* FAQ Section for SEO */}
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
                                    "name": "救急車を呼ぶには何番にかければいいですか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "タイの救急車は「1669」です。ただし、言葉の壁がある場合は、利用する私立病院の救急外来に直接電話をした方が、日本語で対応してもらえるためスムーズです。"
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "薬局で抗生物質は買えますか？",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "はい、タイの薬局では薬剤師の判断により、処方箋なしで抗生物質を購入可能です。ただし、必ず薬剤師に相談してください。"
                                    }
                                }
                            ]
                        })
                    }}
                />

                <section className="mb-12" id="faq">
                    <h2 className="text-2xl font-bold mb-6">よくある質問 (FAQ)</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 救急車を呼ぶには何番にかければいいですか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                タイの救急車は<strong>「1669」</strong>です。ただし、言葉の壁がある場合は、利用する私立病院（サミティベート病院：02-022-2222など）の救急外来に直接電話をした方が、日本語で対応してもらえるためスムーズです。
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 薬局で抗生物質は買えますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                はい、タイの薬局では薬剤師の判断により、処方箋なしで抗生物質（Antibiotics）やピルなどを購入可能です。ただし、アレルギー等のリスクがあるため、必ず薬剤師に相談してください。
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                Q. 日本の健康保険は使えますか？
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                そのままでは使えませんが、「海外療養費制度」を利用して帰国後に申請すれば、一部が還付される場合があります。ただし手続きが複雑なため、基本的にはクレジットカード付帯保険や海外旅行保険の利用を強くおすすめします。
                            </p>
                        </details>
                    </div>
                </section>

            </div>
        </article>
    );
}
