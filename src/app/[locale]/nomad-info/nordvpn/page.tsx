import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Globe, Zap, Check, Lock, Tv, Smartphone, ArrowRight, ExternalLink, AlertTriangle, HelpCircle } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliate";
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'NordVPNGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDesc'),
            type: "article",
            images: ["https://totonoi-thai.com/images/nordvpn_hero.png"],
        }
    };
}

export default function NordVPNGuidePage() {
    const t = useTranslations('NordVPNGuide');
    const tCommon = useTranslations('Common');
    // Affiliate link for NordVPN (A8.net)
    const AFFILIATE_LINK = AFFILIATE_LINKS.nordvpn;
    const TRACKING_PIXEL = AFFILIATE_LINKS.nordvpn_pixel;

    // Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.raw('meta.title'),
        "image": "https://totonoi-thai.com/images/nordvpn_hero.png",
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
                "name": t('faq.netflix.q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.netflix.a')
                }
            },
            {
                "@type": "Question",
                "name": t('faq.speed.q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.speed.a')
                }
            },
            {
                "@type": "Question",
                "name": t('faq.smartphone.q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.smartphone.a')
                }
            },
            {
                "@type": "Question",
                "name": t('faq.free.q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.free.a')
                }
            }
        ]
    };

    return (
        <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/nordvpn_hero.png"
                        alt="NordVPN for Nomads"
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
                        <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">{t('hero.tagSec')}</span>
                        <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">{t('hero.tagTool')}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl" dangerouslySetInnerHTML={{ __html: t.raw('hero.title') }} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-3xl mx-auto px-4 mt-12">
                <div className="text-xs text-muted-foreground text-center mt-2 mb-4">{tCommon('promotion')}</div>

                {/* Introduction / Hook */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <p className="leading-loose font-medium text-slate-800 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-loose text-slate-700 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} />
                    <p className="leading-loose text-slate-700 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p3') }} />

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8 not-prose">
                        <h3 className="text-blue-800 font-bold text-lg mb-4 mt-0">{t('intro.boxTitle')}</h3>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <span dangerouslySetInnerHTML={{ __html: t.raw('intro.list1') }} />
                            </li>
                            <li className="flex items-start gap-3">
                                <Tv className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <span dangerouslySetInnerHTML={{ __html: t.raw('intro.list2') }} />
                            </li>
                            <li className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <span dangerouslySetInnerHTML={{ __html: t.raw('intro.list3') }} />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Feature 1: Security */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">1</span>
                        {t('features.security.title')}
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-slate-800 mb-4">{t('features.security.subTitle')}</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                {t('features.security.desc1')}
                            </p>
                            <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('features.security.desc2') }} />
                        </div>
                        <div className="flex-shrink-0 bg-blue-50 p-6 rounded-full">
                            <Lock className="w-16 h-16 text-blue-600" />
                        </div>
                    </div>
                </section>

                {/* Feature 2: Entertainment */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">2</span>
                        {t('features.entertainment.title')}
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: t.raw('features.entertainment.desc') }} />

                    <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h3 className="flex items-center gap-2 font-bold text-xl mb-6 relative z-10">
                            <Globe className="w-6 h-6 text-blue-400" />
                            {t('features.entertainment.boxTitle')}
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-6 relative z-10 text-sm">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#9fe870]" /> {t('features.entertainment.list1')}
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#9fe870]" /> {t('features.entertainment.list2')}
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#9fe870]" /> {t('features.entertainment.list3')}
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#9fe870]" /> {t('features.entertainment.list4')}
                            </div>
                        </div>
                        <p className="text-slate-300 relative z-10 leading-relaxed">
                            {t('features.entertainment.boxDesc')}
                        </p>
                    </div>
                </section>

                {/* Feature 3: Work Access (WordPress/Banks) */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">3</span>
                        {t('features.work.title')}
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: t.raw('features.work.desc') }} />

                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h3 className="font-bold text-xl text-slate-800 mb-4">{t('features.work.boxTitle')}</h3>
                            <p className="text-slate-600 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('features.work.desc1') }} />
                            <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('features.work.desc2') }} />
                        </div>
                        <div className="flex-shrink-0 bg-blue-50 p-6 rounded-full">
                            <Smartphone className="w-16 h-16 text-blue-600" />
                        </div>
                    </div>
                </section>

                {/* Feature 4: Free VPN */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">4</span>
                        {t('features.freeVpn.title')}
                    </h2>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex gap-4 items-start">
                        <div className="flex-shrink-0 mt-1">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h3 className="font-bold text-red-700 mb-2">{t('features.freeVpn.boxTitle')}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('features.freeVpn.desc1') }} />
                            <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('features.freeVpn.desc2') }} />
                        </div>
                    </div>
                </section>

                {/* Feature 5: How to use */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">5</span>
                        {t('features.howto.title')}
                    </h2>
                    <p className="mb-8 text-slate-700">{t('features.howto.desc')}</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                            <h3 className="font-bold mb-2">{t('features.howto.step1')}</h3>
                            <p className="text-sm text-slate-500">{t('features.howto.desc1')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                            <h3 className="font-bold mb-2">{t('features.howto.step2')}</h3>
                            <p className="text-sm text-slate-500">{t('features.howto.desc2')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                            <h3 className="font-bold mb-2">{t('features.howto.step3')}</h3>
                            <p className="text-sm text-slate-500">{t('features.howto.desc3')}</p>
                        </div>
                    </div>
                </section>

                {/* Feature 6: Pricing Details */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">6</span>
                        {t('features.pricing.title')}
                    </h2>
                    <p className="mb-8 text-slate-700" dangerouslySetInnerHTML={{ __html: t.raw('features.pricing.desc') }} />

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-xl shadow-sm text-sm md:text-base overflow-hidden">
                            <thead>
                                <tr className="bg-slate-100 text-slate-700">
                                    <th className="p-4 text-left border-b">{t('features.pricing.headers.plan')}</th>
                                    <th className="p-4 text-left border-b">{t('features.pricing.headers.price')}</th>
                                    <th className="p-4 text-left border-b text-xs md:text-sm">{t('features.pricing.headers.feature')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-blue-50/50">
                                    <td className="p-4 font-bold text-blue-700">
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2">{t('features.pricing.basic.tag')}</span>
                                        {t('features.pricing.basic.name')}
                                    </td>
                                    <td className="p-4 font-bold">{t('features.pricing.basic.price')}</td>
                                    <td className="p-4 text-slate-600" dangerouslySetInnerHTML={{ __html: t.raw('features.pricing.basic.feature') }} />
                                </tr>
                                <tr className="border-b hover:bg-slate-50">
                                    <td className="p-4 font-bold text-slate-700">{t('features.pricing.plus.name')}</td>
                                    <td className="p-4">{t('features.pricing.plus.price')}</td>
                                    <td className="p-4 text-slate-600">{t('features.pricing.plus.feature')}</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-bold text-slate-700">{t('features.pricing.complete.name')}</td>
                                    <td className="p-4">{t('features.pricing.complete.price')}</td>
                                    <td className="p-4 text-slate-600">{t('features.pricing.complete.feature')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-right text-slate-500 mt-2">{t('features.pricing.note')}</p>
                </section>

                {/* Review: E-E-A-T */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">7</span>
                        {t('features.review.title')}
                    </h2>
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                                <Image src="/character/totonoi-logo.png" alt="Writer" width={48} height={48} className="object-contain" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">{t('features.review.author')}</p>
                                <p className="font-bold text-slate-800">{t('features.review.subAuthor')}</p>
                            </div>
                        </div>
                        <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.raw('features.review.desc') }} />
                        <ul className="space-y-4">
                            <li className="bg-blue-50 p-4 rounded-lg">
                                <span className="font-bold text-blue-800 block mb-1">{t('features.review.speed')}</span>
                                <span className="text-slate-700 text-sm">{t('features.review.speedDesc')}</span>
                            </li>
                            <li className="bg-blue-50 p-4 rounded-lg">
                                <span className="font-bold text-blue-800 block mb-1">{t('features.review.safety')}</span>
                                <span className="text-slate-700 text-sm">{t('features.review.safetyDesc')}</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Feature 7: Competitor Comparison */}
                <section className="mb-20 scroll-mt-24">
                    <h2 className="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-base">8</span>
                        {t('features.comparison.title')}
                    </h2>
                    <p className="mb-8 text-slate-700">
                        {t('features.comparison.desc')}
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-sm md:text-base bg-white">
                            <thead>
                                <tr className="bg-slate-100 text-slate-700 h-12">
                                    <th className="p-3 w-1/4">{t('features.comparison.headers.service')}</th>
                                    <th className="p-3 w-1/4 text-blue-600">{t('features.comparison.headers.nord')}</th>
                                    <th className="p-3 w-1/4">{t('features.comparison.headers.express')}</th>
                                    <th className="p-3 w-1/4">{t('features.comparison.headers.surf')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-100 text-center">
                                    <td className="p-4 font-bold bg-slate-50">{t('features.comparison.rows.price')}</td>
                                    <td className="p-4 font-bold text-blue-700 bg-blue-50">{t('features.comparison.nord.price')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.express.price')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.surf.price')}</td>
                                </tr>
                                <tr className="border-t border-slate-100 text-center">
                                    <td className="p-4 font-bold bg-slate-50">{t('features.comparison.rows.speed')}</td>
                                    <td className="p-4 font-bold text-blue-700 bg-blue-50">{t('features.comparison.nord.speed')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.express.speed')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.surf.speed')}</td>
                                </tr>
                                <tr className="border-t border-slate-100 text-center">
                                    <td className="p-4 font-bold bg-slate-50">{t('features.comparison.rows.video')}</td>
                                    <td className="p-4 text-blue-700 bg-blue-50">{t('features.comparison.nord.video')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.express.video')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.surf.video')}</td>
                                </tr>
                                <tr className="border-t border-slate-100 text-center">
                                    <td className="p-4 font-bold bg-slate-50">{t('features.comparison.rows.server')}</td>
                                    <td className="p-4 text-blue-700 bg-blue-50">{t('features.comparison.nord.server')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.express.server')}</td>
                                    <td className="p-4 text-slate-600">{t('features.comparison.surf.server')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                        <span className="text-blue-600">{t('faq.title')}</span> {t('faq.subtitle')}
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-blue-600/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.blog.q')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.blog.a')}
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-blue-600/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.netflix.q')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.netflix.a')}
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-blue-600/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.speed.q')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.speed.a')}
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-blue-600/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.smartphone.q')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.smartphone.a')}
                            </div>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl open:ring-1 open:ring-blue-600/30 transition-all shadow-sm">
                            <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
                                {t('faq.free.q')}
                                <span className="transition-transform group-open:rotate-180 text-slate-400">▼</span>
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {t('faq.free.a')}
                            </div>
                        </details>
                    </div>
                </section>

                {/* Summary */}
                <div className="bg-slate-100 p-8 rounded-2xl mb-16">
                    <h2 className="text-xl font-bold mb-4 text-slate-900">{t('summary.title')}</h2>
                    <ul className="space-y-3 mb-0">
                        <li className="flex items-start gap-2 text-slate-700">
                            <Check className="w-5 h-5 text-[#9fe870] flex-shrink-0 mt-0.5" />
                            <span dangerouslySetInnerHTML={{ __html: t.raw('summary.list1') }} />
                        </li>
                        <li className="flex items-start gap-2 text-slate-700">
                            <Check className="w-5 h-5 text-[#9fe870] flex-shrink-0 mt-0.5" />
                            <span dangerouslySetInnerHTML={{ __html: t.raw('summary.list2') }} />
                        </li>
                        <li className="flex items-start gap-2 text-slate-700">
                            <Check className="w-5 h-5 text-[#9fe870] flex-shrink-0 mt-0.5" />
                            <span dangerouslySetInnerHTML={{ __html: t.raw('summary.list3') }} />
                        </li>
                    </ul>
                    <p className="mt-6 text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('summary.desc') }} />
                </div>

                {/* Pricing / CTA */}
                <div className="text-center bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t.raw('summary.ctaTitle') }} />
                    <p className="text-blue-200 mb-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('summary.ctaDesc') }} />
                    <Link
                        href={AFFILIATE_LINK}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#9fe870] text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#9fe870]/20"
                    >
                        {t('summary.ctaButton')}
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                    {/* Tracking Pixel */}
                    <img src={TRACKING_PIXEL} width={1} height={1} alt="" style={{ border: 0, display: 'inline', position: 'absolute' }} />
                    <p className="text-xs text-blue-400 mt-6">
                        {t('summary.ctaNote')}
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <Link href="../nomad-info" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors underline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t('hero.back')}
                    </Link>
                </div>
            </div>
        </article>
    );
}
