import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Car, Zap, Train, AlertTriangle, CheckCircle, Info, ArrowRight, MapPin, CreditCard } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'TransportGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function TransportGuidePage() {
    const t = useTranslations('TransportGuide');
    const tRaw = useTranslations('TransportGuide');

    return (
        <article className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-32">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/transport_hero.png"
                    alt="Bangkok Transportation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../living" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#2a9d8f] text-white text-xs font-bold px-3 py-1 rounded-full">2026 Latest</span>
                        <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-600">Nomad Essential</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t('hero.title')}
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">{t('hero.subtitle')}</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Introduction */}
                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    <p className="leading-loose font-medium text-slate-800 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-loose text-slate-700" dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} />
                </div>

                {/* Section 1: Grab vs Bolt Table */}
                <section className="mb-20">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">1</span>
                        {t('grabBolt.title')}
                    </h2>
                    <p className="mb-6 text-slate-600 leading-relaxed">
                        {t('grabBolt.desc')}
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base bg-white">
                            <thead className="bg-[#2a9d8f] text-white">
                                <tr>
                                    <th className="p-4 text-left font-bold w-1/4">{t('grabBolt.table_header_feature')}</th>
                                    <th className="p-4 text-left font-bold w-1/3 bg-[#238b7e]">Grab</th>
                                    <th className="p-4 text-left font-bold w-1/3">Bolt</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-4 font-bold text-slate-700 bg-slate-50">{t('grabBolt.price.label')}</td>
                                    <td className="p-4 text-slate-600 bg-green-50/50">{t('grabBolt.price.grab')}</td>
                                    <td className="p-4 text-slate-600 font-bold text-[#2a9d8f]">{t('grabBolt.price.bolt')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700 bg-slate-50">{t('grabBolt.speed.label')}</td>
                                    <td className="p-4 text-slate-600 font-bold text-[#2a9d8f] bg-green-50/50">{t('grabBolt.speed.grab')}</td>
                                    <td className="p-4 text-slate-600">{t('grabBolt.speed.bolt')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700 bg-slate-50">{t('grabBolt.ux.label')}</td>
                                    <td className="p-4 text-slate-600 bg-green-50/50">{t('grabBolt.ux.grab')}</td>
                                    <td className="p-4 text-slate-600">{t('grabBolt.ux.bolt')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl flex gap-4 items-start">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-600 shrink-0">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-orange-800 mb-2">{t('grabBolt.advice.title')}</h4>
                            <p className="text-sm text-orange-800/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('grabBolt.advice.text') }} />
                        </div>
                    </div>
                </section>

                {/* Section 2: MuvMi */}
                <section className="mb-20">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">2</span>
                        {t('muvmi.title')}
                    </h2>

                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
                        <div className="p-8 flex-1">
                            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                                {t('muvmi.tag')}
                            </div>
                            <p className="text-slate-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('muvmi.desc') }} />
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="w-5 h-5 text-[#2a9d8f]" />
                                    {t('muvmi.points.0')}
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="w-5 h-5 text-[#2a9d8f]" />
                                    {t('muvmi.points.1')}
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="w-5 h-5 text-[#2a9d8f]" />
                                    {t('muvmi.points.2')}
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 flex items-center justify-center md:w-1/3">
                            <Zap className="w-24 h-24 text-blue-500 opacity-80" />
                        </div>
                    </div>
                </section>

                {/* Section 3: Trains */}
                <section className="mb-20">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">3</span>
                        {t('train.title')}
                    </h2>
                    <p className="mb-8 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('train.desc') }} />

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* MRT */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">METRO</div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-xl text-slate-800">{t('train.mrt.name')}</h3>
                            </div>
                            <div className="mb-4">
                                <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-1 rounded inline-block mb-2">
                                    {t('train.mrt.tag')}
                                </span>
                                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                                    {t('train.mrt.desc')}
                                </p>
                            </div>
                            <p className="text-xs text-slate-500 italic mt-auto border-t pt-3">
                                {t('train.mrt.tips')}
                            </p>
                        </div>

                        {/* BTS */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">SKYTRAIN</div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Train className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-xl text-slate-800">{t('train.bts.name')}</h3>
                            </div>
                            <div className="mb-4">
                                <span className="bg-red-100 text-red-700 text-sm font-bold px-2 py-1 rounded inline-block mb-2">
                                    {t('train.bts.tag')}
                                </span>
                                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                                    {t('train.bts.desc')}
                                </p>
                            </div>
                            <p className="text-xs text-slate-500 italic mt-auto border-t pt-3">
                                {t('train.bts.tips')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((num) => (
                            <details key={num} className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 font-bold text-slate-800 cursor-pointer hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#2a9d8f]">Q.</span>
                                        {t(`faq.q${num}`)}
                                    </div>
                                    <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50">
                                    <span className="font-bold text-[#2a9d8f] mr-2">A.</span>
                                    {t(`faq.a${num}`)}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t.raw('cta.title') }} />
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('cta.desc') }} />
                    <Link
                        href="../living"
                        className="inline-flex items-center gap-2 bg-[#2a9d8f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2a9d8f] hover:scale-105 transition-all shadow-lg shadow-[#2a9d8f]/20"
                    >
                        {t('cta.button')}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <NewsletterCTA isInline />
            </div>
        </article>
    );
}
