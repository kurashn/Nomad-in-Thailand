import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartPulse, Pill, ShieldCheck, MapPin, Phone, AlertCircle } from "lucide-react";

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
                    <Link href="/nomad-info" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t.rich('hero.title', {
                            subtag: (chunks) => <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">{chunks}</span>
                        })}
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6">
                        {t('intro.p1')}
                    </p>
                    <p className="leading-relaxed whitespace-pre-line">
                        {t.rich('intro.p2', {
                            strong: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                </div>

                {/* Emergency Contact Card */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
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
                        <div className="flex-1 bg-white border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-red-600">1669</span>
                            <span className="text-xs font-bold text-slate-500 uppercase">{t('emergency.ambulance')}</span>
                        </div>
                        <div className="flex-1 bg-white border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-red-600">1155</span>
                            <span className="text-xs font-bold text-slate-500 uppercase">{t('emergency.police')}</span>
                        </div>
                    </div>
                </div>

                {/* Section 1: Hospitals */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-teal-100 text-teal-600 p-2 rounded-lg"><HeartPulse className="w-6 h-6" /></span>
                        {t('hospitals.title')}
                    </h2>

                    <p className="mb-6 text-muted-foreground">
                        {t('hospitals.desc')}
                    </p>

                    <div className="space-y-6">
                        {/* Samitivej */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{t('hospitals.samitivej.name')}</h3>
                                    <p className="text-sm text-slate-500">Samitivej Sukhumvit Hospital</p>
                                </div>
                                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">{t('hospitals.samitivej.tag')}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                {t('hospitals.samitivej.desc')}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" /> {t('hospitals.samitivej.address')}</span>
                                <span className="flex items-center gap-1.5 text-slate-600"><Phone className="w-4 h-4" /> 02-022-2222</span>
                            </div>
                        </div>

                        {/* Bangkok Hospital */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">{t('hospitals.bangkok.name')}</h3>
                            <p className="text-sm text-slate-500 mb-4">Bangkok Hospital</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                {t('hospitals.bangkok.desc')}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" /> {t('hospitals.bangkok.address')}</span>
                            </div>
                        </div>

                        {/* Bumrungrad */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">{t('hospitals.bumrungrad.name')}</h3>
                            <p className="text-sm text-slate-500 mb-4">Bumrungrad International Hospital</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                {t('hospitals.bumrungrad.desc')}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1.5 text-slate-600"><MapPin className="w-4 h-4" /> {t('hospitals.bumrungrad.address')}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Pharmacies */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><Pill className="w-6 h-6" /></span>
                        {t('pharmacy.title')}
                    </h2>
                    <p className="mb-6 text-muted-foreground whitespace-pre-line">
                        {t('pharmacy.desc')}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">{t('pharmacy.painkiller.name')}</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">{t('pharmacy.painkiller.drug')}</p>
                            <p className="text-xs text-slate-500">{t('pharmacy.painkiller.note')}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">{t('pharmacy.stomach.name')}</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">{t('pharmacy.stomach.drug')}</p>
                            <p className="text-xs text-slate-500">{t('pharmacy.stomach.note')}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">{t('pharmacy.throat.name')}</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">{t('pharmacy.throat.drug')}</p>
                            <p className="text-xs text-slate-500">{t('pharmacy.throat.note')}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-bold text-slate-800 mb-2">{t('pharmacy.sickness.name')}</p>
                            <p className="text-xl font-bold text-blue-600 mb-1">{t('pharmacy.sickness.drug')}</p>
                            <p className="text-xs text-slate-500">{t('pharmacy.sickness.note')}</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-orange-50 border border-orange-200 p-4 rounded-lg flex gap-3 text-sm text-orange-800">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>{t('pharmacy.alert')}</p>
                    </div>
                </section>

                {/* Section 3: Insurance */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><ShieldCheck className="w-6 h-6" /></span>
                        {t('insurance.title')}
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <p className="leading-relaxed mb-4">
                            {t.rich('insurance.desc', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-slate-700">
                            <li>{t('insurance.list1')}</li>
                            <li>{t.rich('insurance.list2', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}</li>
                        </ul>
                        <p className="mt-4 text-sm text-slate-500">
                            {t('insurance.note')}
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
                                    "name": t('faq.q1'),
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": t('faq.a1')
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.q2'),
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": t('faq.a2')
                                    }
                                }
                            ]
                        })
                    }}
                />

                <section className="mb-12" id="faq">
                    <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q1')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t.rich('faq.a1', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q2')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a2')}
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q3')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a3')}
                            </p>
                        </details>
                    </div>
                </section>

            </div>
        </article>
    );
}
