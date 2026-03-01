"use client";

import { useTranslations } from "next-intl";
import { Link } from '@/i18n/routing';
import { ArrowLeft, Handshake, ExternalLink, ArrowRight, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SponsorPage() {
    const t = useTranslations('Sponsor');

    return (
        <article className="max-w-5xl mx-auto px-4 py-12 md:py-20 font-sans text-slate-800">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('hero.back')}
                </Link>
            </div>

            {/* Hero Header */}
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden mb-16">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/sponsor_hero.png"
                        alt="Business Partnership"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

                <div className="relative z-20 px-8 py-16 md:p-20 text-white w-full flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold ring-1 ring-blue-500/40 mb-6">
                        <Handshake className="w-3 h-3" />
                        {t('hero.tag')}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                        {t.rich('hero.title', {
                            br: () => <br className="hidden md:inline" />
                        })}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                        {t.rich('hero.subtitle', {
                            br: () => <br className="hidden md:inline" />
                        })}
                    </p>
                    <a
                        href="https://forms.gle/4DU4CfPtEdavbhnD8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl gap-2 transform hover:-translate-y-1"
                    >
                        {t('cta.button')}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Introduction & Media Power */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div className="prose prose-lg text-slate-600">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('intro.title')}</h2>
                    <p className="mb-6">
                        {t.rich('intro.p1', {
                            strong: (chunks) => <strong className="text-slate-900 bg-yellow-100/60 px-1">{chunks}</strong>
                        })}
                    </p>
                    <p className="mb-8">
                        {t.rich('intro.p2', {
                            strong: (chunks) => <strong className="text-slate-900 bg-yellow-100/60 px-1">{chunks}</strong>
                        })}
                    </p>

                </div>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
                        {t('intro.media_power.title')}
                    </h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{t('intro.media_power.audience')}</h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                                    {t('intro.media_power.audience_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{t('intro.media_power.engagement')}</h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                                    {t('intro.media_power.engagement_desc')}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{t('intro.media_power.trust')}</h4>
                                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                                    {t('intro.media_power.trust_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Plans Section */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('plans.title')}</h2>
                    <p className="text-slate-500 text-lg">
                        {t('plans.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Plan 1: Listing (Recommended) */}
                    <div className="relative bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl shadow-blue-900/5 flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {t('plans.listing.tag')}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">
                            {t('plans.listing.title')}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {t.rich('plans.listing.desc', {
                                strong: (chunks) => <strong className="text-blue-700">{chunks}</strong>
                            })}
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>{t('plans.listing.features.0')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>{t('plans.listing.features.1')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span>{t('plans.listing.features.2')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Plan 2: Article */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                        <div className="inline-flex self-start bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                            {t('plans.article.tag')}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            {t('plans.article.title')}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {t.rich('plans.article.desc', {
                                strong: (chunks) => <strong className="text-slate-800">{chunks}</strong>
                            })}
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                                <span>{t('plans.article.features.0')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                                <span>{t('plans.article.features.1')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                                <span>{t('plans.article.features.2')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Plan 3: Youtube */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                        <div className="inline-flex self-start bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                            {t('plans.youtube.tag')}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            {t('plans.youtube.title')}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {t.rich('plans.youtube.desc', {
                                strong: (chunks) => <strong className="text-slate-800">{chunks}</strong>
                            })}
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                                <span>{t('plans.youtube.features.0')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                                <span>{t('plans.youtube.features.1')}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                                <span>{t('plans.youtube.features.2')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-32 pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        {t.rich('cta.desc', {
                            br: () => <br className="hidden md:inline" />
                        })}
                    </p>
                    <a
                        href="https://forms.gle/4DU4CfPtEdavbhnD8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all gap-2"
                    >
                        {t('cta.button')}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": t('meta.title'),
                        "description": t('meta.desc'),
                        "provider": {
                            "@type": "Organization",
                            "name": "Nomad in Thailand",
                            "url": "https://totonoi-thai.com"
                        }
                    })
                }}
            />
        </article>
    );
}
