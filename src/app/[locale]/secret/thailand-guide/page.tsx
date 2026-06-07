import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Download, CheckCircle2, MapPin, Wallet, FileText } from "lucide-react";

export default async function ThailandGuidePage({
    params: { locale }
}: {
    params: { locale: string };
}) {
    // const t = await getTranslations({ locale }); // Not strictly needed if hardcoding Japanese for this specific Japanese resource

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* HERO SECTION */}
            <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/area_guide_hero_photo_optimized.webp"
                        alt="Bangkok Cityscape at Night"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e9c46a]/10 border border-[#e9c46a]/30 text-[#e9c46a] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#e9c46a] animate-pulse"></span>
                        Official Guide 2026
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                        <span className="block text-xl md:text-2xl font-bold tracking-[0.2em] text-slate-300 mb-2">NOMAD IN THAILAND</span>
                        タイ移住<br className="md:hidden" />完全攻略ガイド
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        ビザ、生活費、エリア選び、そして移住の手順。<br className="hidden md:block" />
                        バンコクで「理想の自由な暮らし」を叶えるための全てを、<br className="hidden md:block" />
                        この一冊に凝縮しました。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/lead-magnet/nomad-thailand-guide-2026.pdf"
                            download="nomad-thailand-guide-2026.pdf"
                            className="w-full sm:w-auto px-8 py-4 bg-[#e9c46a] hover:bg-[#d4b25e] text-slate-900 font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(233,196,106,0.3)] flex items-center justify-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            ガイドブックをダウンロード
                        </a>
                        <div className="flex flex-col items-center sm:items-start">
                            <span className="text-xs text-slate-400 mt-2 sm:mt-0 px-2">
                                FREE DOWNLOAD / PDF
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* INTRO: The "Why" */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">
                            「場所」を変えれば、<br />人生は劇的に変わる。
                        </h2>
                        <div className="w-20 h-1 bg-[#2a9d8f] mx-auto rounded-full"></div>
                    </div>

                    <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-loose">
                        <p>
                            満員電車に揺られ、消耗する毎日。<br />
                            「いつか海外で...」と夢見ながら、過ぎ去っていく時間。
                        </p>
                        <p>
                            しかし今、その「いつか」は、決断ひとつで「今日」になります。<br />
                            PC1台あれば国境を越えて働ける時代。<br />
                            世界中のノマドワーカーが目指す聖地、それがタイ・バンコクです。
                        </p>
                        <p>
                            東京の半分のコストで叶う、プール付きのコンドミニアム。<br />
                            一年中温暖な気候と、活気に満ちた街。<br />
                            そして何より、自分の人生を自分でコントロールする自由。
                        </p>
                        <p className="font-bold text-slate-800">
                            このガイドは、観光ブックではありません。<br />
                            あなたの人生のステージを変えるための「戦略書」です。
                        </p>
                    </div>
                </div>
            </section>

            {/* PREVIEW CARDS (Visa, Cost, Area) */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">ガイドブックの内容</h2>
                        <p className="text-slate-500 mt-4">移住に必要な3つの柱を完全網羅</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Visa */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-[#2a9d8f]/10 rounded-xl flex items-center justify-center mb-6 text-[#2a9d8f]">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">1. 最強のビザ戦略</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                2024年新設の「DTVビザ」を徹底解説。5年間有効、1回180日滞在可能な神ビザの取得条件とは？
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-[#2a9d8f]" />
                                    <span>50万バーツの預金のみでOK</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-[#2a9d8f]" />
                                    <span>費用は5年で約1万バーツ</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Cost */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 relative">
                            <div className="absolute top-0 right-0 bg-[#e9c46a] text-slate-900 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                POPULAR
                            </div>
                            <div className="w-12 h-12 bg-[#e9c46a]/10 rounded-xl flex items-center justify-center mb-6 text-[#e9c46a]">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">2. リアルな生活費</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                月15万円の節約生活から、月50万円の貴族生活まで。スタイル別の予算シミュレーション。
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-[#e9c46a]" />
                                    <span>家賃は日本の1/2 ~ 1/3</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-[#e9c46a]" />
                                    <span>外食中心でも貯金が可能</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3: Area */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-500">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">3. エリア選びの正解</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                日本人街プロンポン、流行の発信地トンロー、またはコスパ最強のオンヌットか？
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                    <span>BTS/MRT沿線の特徴</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                    <span>騒音・渋滞回避のコツ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#191B23] text-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#2a9d8f] opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e9c46a] opacity-5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        準備は、ここから始まる。
                    </h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        ガイドブックを手に取り、最初の一歩を踏み出しましょう。<br />
                        Nomad in Thailandは、あなたの挑戦を全力で応援します。
                    </p>

                    <a
                        href="/lead-magnet/nomad-thailand-guide-2026.pdf"
                        download="nomad-thailand-guide-2026.pdf"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#2a9d8f] hover:bg-[#238a7d] text-white font-bold text-xl rounded-full transition-all hover:shadow-[0_0_30px_rgba(42,157,143,0.4)] hover:-translate-y-1"
                    >
                        <Download className="w-6 h-6" />
                        ガイドブックを今すぐ読む
                    </a>
                </div>
            </section>
        </div>
    );
}
