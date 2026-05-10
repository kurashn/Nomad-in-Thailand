import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Calendar, FileText, ArrowRight, Wallet, Wifi, Users, Globe, BookOpen, Stethoscope, Building2, MessageCircle, Heart, Plane, MapPin, Youtube, CreditCard } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'BangkokRoadmap.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function BangkokRoadmapPage() {
    const t = useTranslations('BangkokRoadmap');
    const locale = useLocale();

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": t('meta.title'),
                "description": t('meta.desc'),
                "datePublished": "2026-01-01",
                "dateModified": new Date().toISOString(),
                "author": {
                    "@type": "Organization",
                    "name": "Nomad in Thailand"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": t('faq.q1'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a1') } },
                    { "@type": "Question", "name": t('faq.q2'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a2') } },
                    { "@type": "Question", "name": t('faq.q3'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a3') } },
                    { "@type": "Question", "name": t('faq.q4'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a4') } },
                    { "@type": "Question", "name": t('faq.q5'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a5') } },
                    { "@type": "Question", "name": t('faq.q6'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a6') } },
                    { "@type": "Question", "name": t('faq.q7'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a7') } },
                    { "@type": "Question", "name": t('faq.q8'), "acceptedAnswer": { "@type": "Answer", "text": t('faq.a8') } }
                ]
            }
        ]
    };

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {/* Hero Header */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="w-full h-full bg-slate-200 relative">
                    <Image
                        src="/images/bangkok_nomad_roadmap_thumbnail.png"
                        alt="Bangkok Nomad Setup"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-6 pb-12">
                    <Link href={`/${locale}/nomad-info`} className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t('hero.back')}
                    </Link>
                    <div className="flex gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">{t('hero.tag1')}</span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">{t('hero.tag2')}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white tracking-tight">
                        {t('hero.title')}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/90 font-medium">
                        <div className="flex items-center gap-2">
                            <span>{t('hero.author')}</span>
                        </div>
                        <span>•</span>
                        <time>2026.01.01</time>
                    </div>
                </div>
            </div>

            <div className="container max-w-4xl mx-auto px-6 mt-12">
                {/* Intro */}
                <div className="mb-16 max-w-3xl mx-auto">
                    <p className="leading-relaxed text-lg text-foreground/80 mb-6 font-medium">
                        {t('intro.p1')}
                    </p>
                    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                        <p>{t('intro.p2')}</p>
                        <p>{t('intro.p3')}</p>
                        <p>{t('intro.p4')}</p>
                        <p className="font-bold text-foreground text-lg">{t('intro.p5')}</p>
                    </div>

                    <div className="bg-muted/50 p-8 rounded-2xl border border-muted my-10">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-foreground">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">i</span>
                            {t('intro.benefits.title')}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-foreground/90">{t.rich('intro.benefits.item1', {
                                    strong: (chunks) => <strong className="font-bold text-foreground">{chunks}</strong>
                                })}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-foreground/90">{t('intro.benefits.item2')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-foreground/90">{t('intro.benefits.item3')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 1: Visa */}
                <section className="mb-20 max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary text-xl font-black shrink-0">01</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                            {t('visa.title')}
                        </h2>
                    </div>

                    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                        <p>
                            {t.rich('visa.desc', {
                                strong: (chunks) => <strong className="font-bold text-foreground">{chunks}</strong>
                            })}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                                    <Shield className="w-5 h-5" /> {t('visa.dtv.title')}
                                </h3>
                                <ul className="text-sm space-y-3 text-muted-foreground">
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="font-medium">有効期間</span>
                                        <span className="text-foreground">{t('visa.dtv.validity')}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="font-medium">滞在期間</span>
                                        <span className="text-foreground">{t('visa.dtv.stay')}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="font-medium">条件</span>
                                        <span className="text-foreground text-right">{t('visa.dtv.condition')}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium">費用</span>
                                        <span className="text-foreground">{t('visa.dtv.cost')}</span>
                                    </li>
                                </ul>
                                <div className="mt-6 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold text-center">
                                    {t('visa.dtv.note')}
                                </div>
                            </div>

                            <div className="bg-card border border-border p-6 rounded-xl shadow-sm opacity-90">
                                <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                                    <Plane className="w-5 h-5 text-muted-foreground" /> {t('visa.tourist.title')}
                                </h3>
                                <ul className="text-sm space-y-3 text-muted-foreground">
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="font-medium">有効期間</span>
                                        <span className="text-foreground">{t('visa.tourist.validity')}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="font-medium">滞在期間</span>
                                        <span className="text-foreground">{t('visa.tourist.stay')}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="font-medium">条件</span>
                                        <span className="text-foreground">{t('visa.tourist.condition')}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-medium">費用</span>
                                        <span className="text-foreground">{t('visa.tourist.cost')}</span>
                                    </li>
                                </ul>
                                <div className="mt-6 bg-muted text-muted-foreground px-4 py-2 rounded-lg text-sm font-medium text-center">
                                    {t('visa.tourist.note')}
                                </div>
                            </div>
                        </div>

                        <p className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 text-sm">
                            {t.rich('visa.conclusion', {
                                strong: (chunks) => <strong className="font-bold">{chunks}</strong>,
                                alert: (chunks) => <span className="block mt-2 font-bold text-red-600 dark:text-red-400">{chunks}</span>
                            })}
                        </p>

                        <div className="mt-8 bg-primary/5 border border-primary/10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-2">
                                    {t('visa.dtvLink.title')}
                                </h3>
                                <p className="text-sm text-muted-foreground max-w-md">
                                    {t('visa.dtvLink.desc')}
                                </p>
                            </div>
                            <Link href={`/${locale}/nomad-info/dtv-visa`} className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-primary/20">
                                {t('visa.dtvLink.cta')}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Chapter 2: Preparation Timeline */}
                <section className="mb-20 max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary-foreground text-xl font-black shrink-0">02</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                            {t('timeline.title')}
                        </h2>
                    </div>

                    <div className="relative border-l-2 border-muted ml-6 pl-8 space-y-12 py-4">
                        {/* 1 Month Before */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-secondary ring-4 ring-background"></span>
                            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="bg-secondary/10 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full border border-secondary/20">{t('timeline.month1.tag')}</span>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {t('timeline.month1.title')}
                                    </h3>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                                            <Wallet className="w-4 h-4 text-muted-foreground" />
                                            {t('timeline.month1.money.title')}
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            {t.rich('timeline.month1.money.desc', {
                                                strong: (chunks) => <strong className="font-bold text-foreground">{chunks}</strong>
                                            })}
                                        </p>
                                        <Link href={`/${locale}/nomad-info/tax-money-guide`} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                            {t('timeline.month1.money.link')} <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                                            {t('timeline.month1.credit_card.title')}
                                        </h4>
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                            {t.rich('timeline.month1.credit_card.desc', {
                                                strong: (chunks) => <strong className="font-bold text-foreground">{chunks}</strong>
                                            })}
                                        </p>
                                        <Link href={`/${locale}/nomad-info/credit-card`} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                            {t('timeline.month1.credit_card.link')} <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <h4 className="font-bold text-base mb-2 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-muted-foreground" />
                                            {t('timeline.month1.resign.title')}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {t('timeline.month1.resign.desc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 Weeks Before */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-secondary ring-4 ring-background"></span>
                            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="bg-secondary/10 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full border border-secondary/20">{t('timeline.week2.tag')}</span>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {t('timeline.week2.title')}
                                    </h3>
                                </div>
                                <p className="mb-6 text-sm text-muted-foreground">{t('timeline.week2.desc')}</p>

                                <div className="grid gap-4">
                                    <div className="flex flex-col sm:flex-row gap-4 bg-muted/30 p-5 rounded-xl border border-border/50">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-foreground">{t('timeline.week2.wise.title')}</h4>
                                                <span className="text-[10px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded font-bold uppercase">{t('timeline.week2.wise.must')}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                                {t.rich('timeline.week2.wise.desc', {
                                                    alert: (chunks) => <span className="block mt-1 font-medium text-red-500">{chunks}</span>
                                                })}
                                            </p>
                                            <Link href={`/${locale}/nomad-info/wise`} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                                                {t('timeline.week2.wise.link')} <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 bg-muted/30 p-5 rounded-xl border border-border/50">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-foreground">{t('timeline.week2.sim.title')}</h4>
                                                <Link href={`/${locale}/living/sim-guide`} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">{t('timeline.week2.sim.detail')}</Link>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                                {t('timeline.week2.sim.desc')}
                                            </p>
                                            <Link href={`/${locale}/living/sim-guide`} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                                                {t('timeline.week2.sim.link')} <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="bg-muted/50 p-5 rounded-xl text-sm">
                                        <h4 className="font-bold mb-3 text-foreground">{t('timeline.week2.admin.title')}</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{t.rich('timeline.week2.admin.item1', { strong: (chunks) => <strong className="font-medium text-foreground">{chunks}</strong> })}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{t.rich('timeline.week2.admin.item2', { strong: (chunks) => <strong className="font-medium text-foreground">{chunks}</strong> })}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{t.rich('timeline.week2.admin.item3', { strong: (chunks) => <strong className="font-medium text-foreground">{chunks}</strong> })}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 ring-4 ring-background text-white">
                                <CheckCircle2 className="w-4 h-4" />
                            </span>
                            <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 p-6 rounded-2xl">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-green-800 dark:text-green-300">
                                    {t('timeline.justBefore.checklist.title')}
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.passport')}</div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.visa')}</div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.insurance')}</div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.card')}</div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.cash')}</div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.adapter')}</div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('timeline.justBefore.checklist.medicine')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 3: Arrival */}
                <section className="mb-20 max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent text-xl font-black shrink-0">03</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                            {t('arrival.title')}
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">{t('arrival.day1.title')}</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm mb-1">{t('arrival.day1.immigration.title')}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{t('arrival.day1.immigration.desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm mb-1">{t('arrival.day1.sim.title')}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{t('arrival.day1.sim.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm mb-1">{t('arrival.day1.money.title')}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{t('arrival.day1.money.desc')}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm mb-1">{t('arrival.day1.hotel.title')}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{t('arrival.day1.hotel.desc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">{t('arrival.week1.title')}</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-sm mb-3">{t('arrival.week1.apps.title')}</h4>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-muted-foreground flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> {t('arrival.week1.apps.grab')}</li>
                                        <li className="text-sm text-muted-foreground flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> {t('arrival.week1.apps.line')}</li>
                                        <li className="text-sm text-muted-foreground flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> {t('arrival.week1.apps.googlemaps')}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">{t('arrival.week1.banking.title')}</h4>
                                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{t('arrival.week1.banking.desc')}</p>
                                    <p className="text-xs text-muted-foreground bg-muted p-2 rounded">{t('arrival.week1.banking.note')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 4: Housing */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 max-w-3xl mx-auto">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary text-xl font-black shrink-0">04</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                            {t('housing.title')}
                        </h2>
                    </div>
                    <p className="mb-8 text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">{t('housing.intro')}</p>

                    {/* Recommended Areas Grid */}
                    <div className="max-w-6xl mx-auto">
                        <h3 className="text-xl font-bold mb-6 text-foreground">{t('housing.areas.title')}</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {/* Sukhumvit */}
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        {t('housing.areas.sukhumvit.name')}
                                    </h4>
                                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded text-muted-foreground">{t('housing.areas.sukhumvit.stations')}</span>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div className="grid gap-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.pros')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.sukhumvit.pros')}</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.cons')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.sukhumvit.cons')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-sm text-primary font-medium">
                                    <Heart className="w-4 h-4" />
                                    {t('housing.areas.sukhumvit.rec')}
                                </div>
                            </div>

                            {/* Silom */}
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        {t('housing.areas.silom.name')}
                                    </h4>
                                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded text-muted-foreground">{t('housing.areas.silom.stations')}</span>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div className="grid gap-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.pros')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.silom.pros')}</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.cons')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.silom.cons')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-sm text-primary font-medium">
                                    <Heart className="w-4 h-4" />
                                    {t('housing.areas.silom.rec')}
                                </div>
                            </div>

                            {/* Ari */}
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        {t('housing.areas.ari.name')}
                                    </h4>
                                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded text-muted-foreground">{t('housing.areas.ari.stations')}</span>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div className="grid gap-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.pros')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.ari.pros')}</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.cons')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.ari.cons')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-sm text-primary font-medium">
                                    <Heart className="w-4 h-4" />
                                    {t('housing.areas.ari.rec')}
                                </div>
                            </div>

                            {/* On Nut - NEW */}
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ring-2 ring-primary/10">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        {t('housing.areas.onnut.name')}
                                    </h4>
                                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded text-muted-foreground">{t('housing.areas.onnut.stations')}</span>
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div className="grid gap-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.pros')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.onnut.pros')}</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded shrink-0">{t('housing.labels.cons')}</span>
                                            <p className="text-sm text-muted-foreground">{t('housing.areas.onnut.cons')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-sm text-primary font-medium">
                                    <Heart className="w-4 h-4" />
                                    {t('housing.areas.onnut.rec')}
                                </div>
                                <div className="mt-4 pt-3 border-t border-border/50">
                                    <a href="https://youtu.be/5Gh146IyDdg?si=1SF3M42vuQX_9_wx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-red-500 transition-colors">
                                        <Youtube className="w-4 h-4" />
                                        {t('housing.areas.onnut.videoCta')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-3xl mx-auto bg-muted/30 p-8 rounded-2xl border border-border">
                        <h3 className="font-bold mb-6 text-xl text-foreground">{t('housing.search.title')}</h3>
                        <div className="space-y-0">
                            {/* Stepper */}
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0 z-10">1</div>
                                    <div className="w-0.5 h-full bg-border group-last:hidden"></div>
                                </div>
                                <div className="pb-8 pt-1">
                                    <h4 className="font-bold text-foreground">{t('housing.search.steps.step1')}</h4>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0 z-10">2</div>
                                    <div className="w-0.5 h-full bg-border group-last:hidden"></div>
                                </div>
                                <div className="pb-8 pt-1">
                                    <h4 className="font-bold text-foreground">{t('housing.search.steps.step2')}</h4>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0 z-10">3</div>
                                    <div className="w-0.5 h-full bg-border group-last:hidden"></div>
                                </div>
                                <div className="pb-8 pt-1">
                                    <h4 className="font-bold text-foreground">{t('housing.search.steps.step3')}</h4>
                                    <div className="mt-3 bg-background p-4 rounded-lg border border-border text-sm text-muted-foreground">
                                        <p className="font-bold mb-1 text-foreground">{t('housing.search.platforms.title')}</p>
                                        <p>{t('housing.search.platforms.fb')} / {t('housing.search.platforms.dd')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0 z-10">4</div>
                                    <div className="w-0.5 h-full bg-border group-last:hidden"></div>
                                </div>
                                <div className="pb-8 pt-1">
                                    <h4 className="font-bold text-foreground">{t('housing.search.steps.step4')}</h4>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0 z-10">5</div>
                                    <div className="w-0.5 h-full bg-border group-last:hidden"></div>
                                </div>
                                <div className="pb-8 pt-1">
                                    <h4 className="font-bold text-foreground">{t('housing.search.steps.step5')}</h4>
                                </div>
                            </div>
                            <div className="flex group">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shrink-0 z-10">6</div>
                                    <div className="w-0.5 h-full bg-border opacity-0"></div>
                                </div>
                                <div className="pb-2 pt-1">
                                    <h4 className="font-bold text-foreground">{t('housing.search.steps.step6')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 5: Community */}
                <section className="mb-20 max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary-foreground text-xl font-black shrink-0">05</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                            {t('community.title')}
                        </h2>
                    </div>

                    <div className={`grid gap-6 ${locale === 'ja' ? 'md:grid-cols-2' : ''}`}>
                        {locale === 'ja' && (
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                                <Users className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-lg mb-2 text-foreground">{t('community.line.title')}</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t('community.line.desc')}</p>
                                <div className="flex flex-col gap-3">
                                    <a href="https://lin.ee/VRrmYI1" target="_blank" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                                        {t('community.line.cta')} <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href="https://youtu.be/Ak4-4HWnNLU?si=riuMMU34diPCn8bt" target="_blank" className="text-muted-foreground text-xs hover:text-red-500 transition-colors inline-flex items-center gap-2">
                                        <Youtube className="w-4 h-4" />
                                        {t('community.line.videoCta')}
                                    </a>
                                </div>
                            </div>
                        )}
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <Globe className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">{t('community.coworking.title')}</h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t('community.coworking.desc')}</p>
                            <Link href={`/${locale}/nomad-info/coworking-guide`} className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                                {t('community.coworking.link')} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Supplementary: Long Term Considerations */}
                <section className="mb-20 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-primary text-foreground">
                        {t('longterm.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <Stethoscope className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">{t('longterm.healthcare.title')}</h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t('longterm.healthcare.desc')} {t('longterm.healthcare.insurance')}</p>
                            <Link href={`/${locale}/living/medical-guide`} className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                                {t('longterm.healthcare.link')} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <Building2 className="w-8 h-8 text-purple-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">{t('longterm.tax.title')}</h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t('longterm.tax.desc')}</p>
                            <Link href={`/${locale}/nomad-info/tax-money-guide`} className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                                {t('longterm.tax.link')} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <MessageCircle className="w-8 h-8 text-orange-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">{t('longterm.language.title')}</h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t('longterm.language.desc')}</p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <Heart className="w-8 h-8 text-pink-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">{t('longterm.culture.title')}</h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t('longterm.culture.desc')}</p>
                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
                <section className="mb-16 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-foreground text-center">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <details key={num} className="group bg-card border border-border rounded-xl open:ring-2 open:ring-primary/20 transition-all shadow-sm">
                                <summary className="flex cursor-pointer items-center justify-between p-4 px-6 font-bold text-foreground hover:bg-muted/30 rounded-xl transition-colors">
                                    {t(`faq.q${num}`)}
                                    <span className="transition-transform group-open:rotate-180 text-muted-foreground">▼</span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-muted-foreground text-sm leading-relaxed border-t border-transparent group-open:border-border/50">
                                    {t(`faq.a${num}`)}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                <NewsletterCTA isInline />

                {/* Summary */}
                <div className="bg-slate-900 text-white p-10 rounded-3xl text-center relative overflow-hidden mt-20 shadow-xl max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">{t('summary.title')}</h2>
                    <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                        {t.rich('summary.desc', {
                            strong: (chunks) => <strong className="text-white">{chunks}</strong>
                        })}
                    </p>
                    <Link href={`/${locale}/nomad-info`} className="relative z-10 inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                        {t('summary.cta')}
                    </Link>

                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                </div>
            </div >
        </article >
    );
}
