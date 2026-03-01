import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, MapPin, Building, Home, Coffee, DollarSign, Star } from "lucide-react";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'AreaGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
        openGraph: {
            title: t('title'),
            description: t('desc'),
            type: "article",
            images: ["https://totonoi-thai.com/images/area_guide_hero_photo.png"],
        }
    };
}

export default function AreaGuidePage() {
    const t = useTranslations('AreaGuide');

    // Structured Data (JSON-LD) - Dynamic
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.raw('meta.title'),
        "image": "https://totonoi-thai.com/images/area_guide_hero_photo.png",
        "datePublished": "2026-01-25",
        "dateModified": "2026-01-25",
        "author": {
            "@type": "Organization",
            "name": "Nomad in Thailand"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Nomad in Thailand",
            "logo": {
                "@type": "ImageObject",
                "url": "https://totonoi-thai.com/logo.png"
            }
        },
        "description": t.raw('meta.desc')
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": t('faq.area.q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.area.a')
                }
            },
            {
                "@type": "Question",
                "name": t('faq.rent.q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.rent.a')
                }
            }
        ]
    };

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/images/area_guide_hero_photo.png"
                    alt="Bangkok Area Guide"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../living" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t('hero.title')}
                        <span className="block mt-2 text-2xl md:text-3xl font-normal opacity-90">{t('hero.subtitle')}</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('intro.p3') }} />

                    {/* Executive Summary Table */}
                    <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 mt-8">
                        <h3 className="text-lg font-bold mb-4 text-slate-800">{t('summary.title')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <span className="font-bold text-amber-600 block mb-1">{t('summary.phromPhong.name')}</span>
                                <span className="text-xs text-slate-500 block mb-2">{t('summary.phromPhong.budget')}</span>
                                <p className="text-slate-700">{t('summary.phromPhong.desc')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <span className="font-bold text-blue-600 block mb-1">{t('summary.onNut.name')}</span>
                                <span className="text-xs text-slate-500 block mb-2">{t('summary.onNut.budget')}</span>
                                <p className="text-slate-700">{t('summary.onNut.desc')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <span className="font-bold text-green-600 block mb-1">{t('summary.ari.name')}</span>
                                <span className="text-xs text-slate-500 block mb-2">{t('summary.ari.budget')}</span>
                                <p className="text-slate-700">{t('summary.ari.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transport Internal Link */}
                <div className="mb-12">
                    <Link href="/living/transport-guide" className="flex items-center gap-3 p-4 bg-white border border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-primary/50 hover:text-primary transition-colors">
                        <span className="bg-slate-100 p-2 rounded-full"><MapPin className="w-5 h-5" /></span>
                        <span className="font-medium">{t('transport.text')}</span>
                        <ArrowLeft className="w-4 h-4 ml-auto rotate-180" />
                    </Link>
                </div>

                {/* Area 1: Phrom Phong / Thong Lo */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                            <Star className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-amber-600 tracking-wider">{t('areas.phromPhong.tag')}</span>
                            <h2 className="text-3xl font-bold text-slate-800">{t('areas.phromPhong.name')}</h2>
                            <p className="text-slate-500">{t('areas.phromPhong.enName')}</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50 p-6 border-b grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t('areas.common.target')}</p>
                                <p className="font-medium">{t('areas.phromPhong.targetDesc')}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t('areas.common.rent')}</p>
                                <p className="font-medium">{t('areas.phromPhong.rentDesc')}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{t('areas.phromPhong.title')}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('areas.phromPhong.desc') }} />
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Building className="w-4 h-4 text-amber-500" />
                                    <span>{t('areas.phromPhong.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-amber-500" />
                                    <span>{t('areas.phromPhong.feature2')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Area 2: On Nut / Phra Khanong */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-blue-600 tracking-wider">{t('areas.onNut.tag')}</span>
                            <h2 className="text-3xl font-bold text-slate-800">{t('areas.onNut.name')}</h2>
                            <p className="text-slate-500">{t('areas.onNut.enName')}</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50 p-6 border-b grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t('areas.common.target')}</p>
                                <p className="font-medium">{t('areas.onNut.targetDesc')}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t('areas.common.rent')}</p>
                                <p className="font-medium">{t('areas.onNut.rentDesc')}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{t('areas.onNut.title')}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('areas.onNut.desc') }} />
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Home className="w-4 h-4 text-blue-500" />
                                    <span>{t('areas.onNut.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    <span>{t('areas.onNut.feature2')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Area 3: Ari */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-100 text-green-600 p-3 rounded-full">
                            <Coffee className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-green-600 tracking-wider">{t('areas.ari.tag')}</span>
                            <h2 className="text-3xl font-bold text-slate-800">{t('areas.ari.name')}</h2>
                            <p className="text-slate-500">{t('areas.ari.enName')}</p>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-6">
                        <div className="bg-slate-50 p-6 border-b grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t('areas.common.target')}</p>
                                <p className="font-medium">{t('areas.ari.targetDesc')}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-bold uppercase mb-1">{t('areas.common.rent')}</p>
                                <p className="font-medium">{t('areas.ari.rentDesc')}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{t('areas.ari.title')}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('areas.ari.desc') }} />
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <Coffee className="w-4 h-4 text-green-500" />
                                    <span>{t('areas.ari.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-green-500" />
                                    <span>{t('areas.ari.feature2')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-6 text-center">{t('comparison.title')}</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-100 border-b">
                                <tr>
                                    <th className="px-6 py-3">{t('comparison.headers.area')}</th>
                                    <th className="px-6 py-3">{t('comparison.headers.rent')}</th>
                                    <th className="px-6 py-3">{t('comparison.headers.food')}</th>
                                    <th className="px-6 py-3">{t('comparison.headers.quiet')}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 border-b">
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-800">{t('comparison.rows.phromPhong.name')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.phromPhong.rent')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.phromPhong.food')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.phromPhong.quiet')}</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-800">{t('comparison.rows.onNut.name')}</td>
                                    <td className="px-6 py-4 text-green-600 font-bold">{t('comparison.rows.onNut.rent')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.onNut.food')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.onNut.quiet')}</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-800">{t('comparison.rows.ari.name')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.ari.rent')}</td>
                                    <td className="px-6 py-4">{t('comparison.rows.ari.food')}</td>
                                    <td className="px-6 py-4 text-green-600 font-bold">{t('comparison.rows.ari.quiet')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mb-12 mt-16">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.area.q')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('faq.area.a') }} />
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.rent.q')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('faq.rent.a') }} />
                        </details>
                    </div>
                </section>
            </div>
        </article>
    );
}
