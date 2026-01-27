"use client";

import { useTranslations } from "next-intl";
import { Link } from '@/i18n/routing';
import { ArrowLeft, Handshake, Star, Users, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function SponsorPage() {
    const t = useTranslations('Sponsor');

    return (
        <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link href="../nomad-info" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('hero.back')}
                </Link>
            </div>

            {/* Hero Header */}
            <div className="relative h-[50vh] w-[calc(100%+2rem)] md:w-full mb-12 -mx-4 md:-mx-0 md:rounded-3xl overflow-hidden md:mt-8">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/sponsor_hero.png"
                        alt="Sponsor Recruitment"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-12 text-center text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md mb-4 border border-white/30">
                        <Handshake className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl md:text-5xl font-bold font-serif mb-4 leading-tight drop-shadow-lg whitespace-pre-wrap">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                        {t.rich('hero.subtitle', {
                            br: () => <br className="hidden md:inline" />
                        })}
                    </p>
                    <div className="mt-6 text-xs text-white/70">
                        2026.01.10 | {t('hero.tag')}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-[#2a9d8f] hover:prose-a:text-[#21867a] prose-p:leading-loose prose-p:mb-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
                    <h2 className="text-2xl font-bold mb-6 mt-0">{t('intro.title')}</h2>
                    <p className="mb-6">
                        {t.rich('intro.p1', {
                            br: () => <br />
                        })}
                    </p>
                    <p className="mb-6">
                        {t.rich('intro.p2', {
                            strong: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <p className="mb-6">
                        {t('intro.p3')}
                    </p>
                    <p className="mb-6">
                        {t('intro.p4')}
                    </p>
                    <p className="mb-6">
                        <a href="https://www.youtube.com/@nomad-thai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2a9d8f] font-bold hover:underline">
                            <span>{t('intro.videoLink')}</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </p>
                    <p className="mb-0">
                        {t('intro.p5')}
                    </p>
                </div>

                {/* Profile Section */}
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8">
                    <span className="text-[#2a9d8f] text-4xl">01</span>
                    {t('profile.title')}
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="w-full md:w-5/12">
                        <YouTubeEmbed videoId="DnjW6Xa_41M" />
                    </div>
                    <div className="flex-1">
                        <p className="mb-6">
                            {t.rich('profile.desc1', {
                                br: () => <br />
                            })}
                        </p>
                        <p className="mb-6">
                            {t('profile.desc2')}
                        </p>
                    </div>
                </div>

                {/* Roadmap Section */}
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8">
                    <span className="text-[#2a9d8f] text-4xl">02</span>
                    {t('roadmap.title')}
                </h2>
                <p>{t('roadmap.desc')}</p>

                <div className="bg-[#2a9d8f]/5 p-6 rounded-2xl border border-[#2a9d8f]/20 mb-8 mt-8">
                    <h3 className="text-lg font-bold text-[#2a9d8f] mt-0 mb-2">{t('roadmap.goal.title')}</h3>
                    <p className="mb-0 font-bold text-slate-700">
                        {t('roadmap.goal.text')}
                    </p>
                </div>
                <div className="relative border-l-2 border-[#2a9d8f]/30 ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12 my-8">
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a9d8f] text-white text-xs font-bold ring-4 ring-white">01</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-[#2a9d8f]">{t('roadmap.steps.step1.title')}</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>{t('roadmap.steps.step1.items.0')}</li>
                            <li>{t('roadmap.steps.step1.items.1')}</li>
                            <li>{t('roadmap.steps.step1.items.2')}</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a9d8f]/30 text-[#2a9d8f] text-xs font-bold ring-4 ring-white">02</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-slate-800">{t('roadmap.steps.step2.title')}</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>{t('roadmap.steps.step2.items.0')}</li>
                            <li>{t('roadmap.steps.step2.items.1')}</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold ring-4 ring-white">03</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-slate-800">{t('roadmap.steps.step3.title')}</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>{t('roadmap.steps.step3.items.0')}</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] md:-left-[59px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a9d8f] text-white text-xs font-bold ring-4 ring-white">04</span>
                        <h3 className="text-xl font-bold mt-0 mb-2 text-[#2a9d8f]">{t('roadmap.steps.step4.title')}</h3>
                        <ul className="m-0 pl-4 text-slate-600 space-y-1">
                            <li>{t('roadmap.steps.step4.items.0')}</li>
                            <li>{t('roadmap.steps.step4.items.1')}</li>
                        </ul>
                    </div>
                </div>

                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">03</span>
                    {t('stability.title')}
                </h2>
                <p className="mb-6">
                    {t.rich('stability.p1', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>
                <p className="mb-6">
                    {t('stability.p2')}
                </p>
                <p className="font-bold text-[#2a9d8f] mb-6">
                    {t('stability.p3')}
                </p>

                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">04</span>
                    {t('partner.title')}
                </h2>
                <p className="mb-6">
                    {t.rich('partner.p1', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>
                <p className="mb-6">
                    {t('partner.p2')}
                </p>

                <div className="space-y-6 my-8">
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[#2a9d8f]/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center text-[#2a9d8f]">
                            <ExternalLink className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-0 mb-2">{t('partner.items.cm.title')}</h3>
                            <p className="text-muted-foreground m-0">
                                {t('partner.items.cm.desc')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[#2a9d8f]/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center text-[#2a9d8f]">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-0 mb-2">{t('partner.items.collab.title')}</h3>
                            <p className="text-muted-foreground m-0">{t('partner.items.collab.desc')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[#2a9d8f]/20 shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center text-[#2a9d8f]">
                            <Star className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mt-0 mb-2">{t('partner.items.link.title')}</h3>
                            <p className="text-muted-foreground m-0">{t('partner.items.link.desc')}</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">05</span>
                    {t('faq.title')}
                </h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg mb-2">{t('faq.q1')}</h3>
                        <p className="text-muted-foreground">{t('faq.a1')}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">{t('faq.q2')}</h3>
                        <p className="text-muted-foreground">{t('faq.a2')}</p>
                    </div>
                </div>

                <h2 className="flex items-center gap-3 text-2xl md:text-3xl border-b pb-4 mb-8 mt-16">
                    <span className="text-[#2a9d8f] text-4xl">06</span>
                    {t('conclusion.title')}
                </h2>
                <p className="mb-6">
                    {t.rich('conclusion.p1', {
                        br: () => <br />
                    })}
                </p>
                <p className="mb-6">
                    {t.rich('conclusion.p2', {
                        br: () => <br />
                    })}
                </p>
                <p className="mb-6">
                    {t('conclusion.p3')}
                </p>

                <div className="not-prose mt-12 mb-12">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -ml-16 -mb-32 pointer-events-none"></div>

                        <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 relative z-10">
                            {t('cta.title')}
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10">
                            {t('cta.desc')}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold hover:shadow-lg hover:shadow-amber-500/40 hover:scale-105 transition-all gap-2 relative z-10"
                        >
                            {t('cta.button')}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": t('hero.title'),
                        "image": "/images/sponsor_hero.png",
                        "datePublished": "2026-01-09",
                        "dateModified": "2026-01-10",
                        "description": t('meta.desc'),
                        "author": {
                            "@type": "Organization",
                            "name": "Nomad in Thailand",
                            "url": "https://nomad-th.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Nomad in Thailand",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://nomad-th.com/logo.png"
                            }
                        }
                    })
                }}
            />
        </article>
    );
}
