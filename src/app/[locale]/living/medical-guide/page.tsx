import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, ShieldCheck, Check } from "lucide-react";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'MedicalGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function MedicalGuidePage() {
    const t = useTranslations('MedicalGuide');

    return (
        <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
            {/* Standard Hero Header (Matching Wise Guide) */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/medical_guide_hero.png"
                        alt="Medical Care in Bangkok"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-[#9fe870] transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-[#2a9d8f]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">Safety</span>
                        <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">Essential</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t('hero.title')}
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <p className="leading-loose font-medium text-slate-800 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-loose text-slate-700 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} />
                </div>

                {/* Emergency Contact Card */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-100 p-3 rounded-full text-red-600">
                            <Phone className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-red-700">{t('emergency.title')}</h3>
                            <p className="text-sm text-red-600/80">{t('emergency.note')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="flex-1 bg-white border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm min-w-[140px]">
                            <span className="text-2xl font-bold text-red-600">1669</span>
                            <span className="text-xs font-bold text-slate-500 uppercase">{t('emergency.ambulance')}</span>
                        </div>
                        <div className="flex-1 bg-white border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm min-w-[140px]">
                            <span className="text-2xl font-bold text-red-600">1155</span>
                            <span className="text-xs font-bold text-slate-500 uppercase">{t('emergency.police')}</span>
                        </div>
                    </div>
                </div>

                {/* Section 1: Hospitals */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">1</span>
                        {t('hospitals.title')}
                    </h2>

                    <p className="mb-8 text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                        {t('hospitals.desc')}
                    </p>

                    <div className="space-y-6">
                        {/* Samitivej */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#2a9d8f] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('hospitals.samitivej.tag')}</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-1">{t('hospitals.samitivej.name')}</h3>
                            <p className="text-sm text-slate-500 mb-4">Samitivej Sukhumvit Hospital</p>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                {t('hospitals.samitivej.desc')}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm bg-slate-50 p-3 rounded-lg">
                                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><MapPin className="w-4 h-4 text-[#2a9d8f]" /> {t('hospitals.samitivej.address')}</span>
                                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><Phone className="w-4 h-4 text-[#2a9d8f]" /> 02-022-2222</span>
                            </div>
                        </div>

                        {/* Bangkok Hospital */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">{t('hospitals.bangkok.name')}</h3>
                            <p className="text-sm text-slate-500 mb-4">Bangkok Hospital</p>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                {t('hospitals.bangkok.desc')}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm bg-slate-50 p-3 rounded-lg">
                                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><MapPin className="w-4 h-4 text-[#2a9d8f]" /> {t('hospitals.bangkok.address')}</span>
                            </div>
                        </div>

                        {/* Bumrungrad */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">{t('hospitals.bumrungrad.name')}</h3>
                            <p className="text-sm text-slate-500 mb-4">Bumrungrad International Hospital</p>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                {t('hospitals.bumrungrad.desc')}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm bg-slate-50 p-3 rounded-lg">
                                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><MapPin className="w-4 h-4 text-[#2a9d8f]" /> {t('hospitals.bumrungrad.address')}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Pharmacies (Table Layout) */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">2</span>
                        {t('pharmacy.title')}
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                        {t('pharmacy.desc')}
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-8">
                        <table className="w-full text-sm md:text-base bg-white">
                            <thead>
                                <tr className="bg-slate-100 text-slate-700 h-12">
                                    <th className="p-4 w-[25%] text-left whitespace-nowrap">{t('pharmacy.table_header_symptom')}</th>
                                    <th className="p-4 w-[35%] text-left whitespace-nowrap">{t('pharmacy.table_header_drug')}</th>
                                    <th className="p-4 w-[40%] text-left whitespace-nowrap">{t('pharmacy.table_header_note')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">{t('pharmacy.painkiller.name')}</td>
                                    <td className="p-4 text-blue-600 font-bold">{t('pharmacy.painkiller.drug')}</td>
                                    <td className="p-4 text-slate-600 text-sm">{t('pharmacy.painkiller.note')}</td>
                                </tr>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">{t('pharmacy.stomach.name')}</td>
                                    <td className="p-4 text-blue-600 font-bold">{t('pharmacy.stomach.drug')}</td>
                                    <td className="p-4 text-slate-600 text-sm">{t('pharmacy.stomach.note')}</td>
                                </tr>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">{t('pharmacy.throat.name')}</td>
                                    <td className="p-4 text-blue-600 font-bold">{t('pharmacy.throat.drug')}</td>
                                    <td className="p-4 text-slate-600 text-sm">{t('pharmacy.throat.note')}</td>
                                </tr>
                                <tr className="border-t border-slate-100">
                                    <td className="p-4 font-bold bg-slate-50">{t('pharmacy.sickness.name')}</td>
                                    <td className="p-4 text-blue-600 font-bold">{t('pharmacy.sickness.drug')}</td>
                                    <td className="p-4 text-slate-600 text-sm">{t('pharmacy.sickness.note')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg flex gap-3 text-sm text-orange-900">
                        <span className="text-orange-600 font-bold">Note:</span>
                        <p>{t('pharmacy.alert')}</p>
                    </div>
                </section>

                {/* Section 3: Insurance */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base">3</span>
                        {t('insurance.title')}
                    </h2>

                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-white p-3 rounded-full shadow-sm text-green-600">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-800 mb-4 " dangerouslySetInnerHTML={{ __html: t.raw('insurance.desc') }} />
                            </div>
                        </div>

                        <ul className="space-y-4 text-slate-700 bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <span dangerouslySetInnerHTML={{ __html: t.raw('insurance.list1') }} />
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <span dangerouslySetInnerHTML={{ __html: t.raw('insurance.list2') }} />
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-green-800 font-medium text-center">
                            {t('insurance.note')}
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                        <span className="text-[#2a9d8f]">QA</span> {t('faq.title')}
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.q1')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a1')}
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.q2')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a2')}
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-[#2a9d8f]/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.q3')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a3')}
                            </div>
                        </details>
                    </div>
                </section>

                {/* Conclusion CTA (Matching Wise Guide Style) */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t.raw('cta.title') }} />
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('cta.desc') }} />
                    <a
                        href="https://safetywing.com/?referenceID=26468067&utm_source=26468067&utm_medium=Ambassador"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2a9d8f] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#2a9d8f] hover:scale-105 transition-all shadow-lg shadow-[#2a9d8f]/20"
                    >
                        {t('cta.button')}
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </div>

                <div className="mt-16 text-center">
                    <Link href="../nomad-info" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors underline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>
                </div>

            </div>
        </article>
    );
}
