import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Calendar, FileText, ArrowRight } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'DtvVisa.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function DtvVisaPage() {
    const t = useTranslations('DtvVisa');
    const locale = useLocale();

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": t('hero.title'),
                "image": "https://nomad-th.com/images/dtv-visa-thumbnail.png",
                "datePublished": "2024-06-01",
                "dateModified": new Date().toISOString(),
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
                        "url": "https://nomad-th.com/character/nomad-dog-hero-white.png"
                    }
                },
                "description": t('meta.desc')
            },
            {
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
                    },
                    {
                        "@type": "Question",
                        "name": t('faq.q3'),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t('faq.a3')
                        }
                    }
                ]
            }
        ]
    };

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/images/dtv-visa-thumbnail.png"
                    alt="Thailand DTV Visa"
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
                        {t.rich('intro.p1', {
                            strong: (chunks) => <strong>{chunks}</strong>,
                            br: () => <br />
                        })}
                    </p>
                    <p className="leading-relaxed">
                        {t.rich('intro.p2', {
                            strong: (chunks) => <strong>{chunks}</strong>,
                            br: () => <br />
                        })}
                    </p>

                    <div className="mt-8 not-prose">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <YouTubeEmbed videoId="B_HkXPiv7ow" />
                        </div>
                        <p className="text-sm text-center text-muted-foreground mt-2">
                            {t('intro.videoNote')}
                        </p>
                    </div>
                </div>

                {/* Section 1: What is DTV? */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-primary/10 text-primary p-2 rounded-lg"><Shield className="w-6 h-6" /></span>
                        {t('sec1.title')}
                    </h2>

                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        {t.rich('sec1.desc', {
                            br: () => <br />
                        })}
                    </p>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-8">
                        <h3 className="bg-slate-100 p-4 font-bold text-center border-b">{t('sec1.table.title')}</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                                    <tr>
                                        <th className="px-4 py-3">{t('sec1.table.headers.item')}</th>
                                        <th className="px-4 py-3 bg-primary/5 text-primary font-bold border-x border-primary/20">{t('sec1.table.headers.dtv')}</th>
                                        <th className="px-4 py-3">{t('sec1.table.headers.elite')}</th>
                                        <th className="px-4 py-3">{t('sec1.table.headers.tourist')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">{t('sec1.table.rows.cost.label')}</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">
                                            {t.rich('sec1.table.rows.cost.dtv', { br: () => <br /> })}
                                        </td>
                                        <td className="px-4 py-3">
                                            {t.rich('sec1.table.rows.cost.elite', { br: () => <br /> })}
                                        </td>
                                        <td className="px-4 py-3">
                                            {t.rich('sec1.table.rows.cost.tourist', { br: () => <br /> })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">{t('sec1.table.rows.validity.label')}</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">
                                            {t.rich('sec1.table.rows.validity.dtv', { br: () => <br /> })}
                                        </td>
                                        <td className="px-4 py-3">{t('sec1.table.rows.validity.elite')}</td>
                                        <td className="px-4 py-3">{t('sec1.table.rows.validity.tourist')}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">{t('sec1.table.rows.stay.label')}</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">
                                            {t.rich('sec1.table.rows.stay.dtv', { br: () => <br /> })}
                                        </td>
                                        <td className="px-4 py-3">{t('sec1.table.rows.stay.elite')}</td>
                                        <td className="px-4 py-3">
                                            {t.rich('sec1.table.rows.stay.tourist', { br: () => <br /> })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-bold text-left">{t('sec1.table.rows.condition.label')}</td>
                                        <td className="px-4 py-3 bg-primary/5 font-bold text-primary border-x border-primary/20">
                                            {t.rich('sec1.table.rows.condition.dtv', { br: () => <br /> })}
                                        </td>
                                        <td className="px-4 py-3">{t('sec1.table.rows.condition.elite')}</td>
                                        <td className="px-4 py-3">{t('sec1.table.rows.condition.tourist')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                        <h3 className="font-bold text-lg mb-3 text-primary flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">!</span>
                            {t('sec1.points.title')}
                        </h3>
                        <ul className="space-y-2 text-foreground/80">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>
                                    {t.rich('sec1.points.p1', { strong: (chunks) => <strong>{chunks}</strong> })}
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>
                                    {t.rich('sec1.points.p2', { strong: (chunks) => <strong>{chunks}</strong> })}
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>
                                    {t.rich('sec1.points.p3', { strong: (chunks) => <strong>{chunks}</strong> })}
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: Requirements */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-amber-100 text-amber-600 p-2 rounded-lg"><FileText className="w-6 h-6" /></span>
                        {t('sec2.title')}
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        {t.rich('sec2.desc', {
                            br: () => <br />,
                            strong: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>

                    <div className="grid gap-6 md:grid-cols-3 mb-8">
                        <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-sm relative overflow-hidden">
                            {t('sec2.cats.c1.badge') && (
                                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-bl">{t('sec2.cats.c1.badge')}</div>
                            )}
                            <h3 className="font-bold mb-2 text-primary">{t('sec2.cats.c1.title')}</h3>
                            <p className="text-sm text-slate-600">
                                {t('sec2.cats.c1.desc')}
                            </p>
                        </div>
                        <div className="bg-white border rounded-xl p-4 shadow-sm opacity-80">
                            <h3 className="font-bold mb-2 text-slate-800">{t('sec2.cats.c2.title')}</h3>
                            <p className="text-sm text-slate-600">
                                {t('sec2.cats.c2.desc')}
                            </p>
                        </div>
                        <div className="bg-white border rounded-xl p-4 shadow-sm opacity-80">
                            <h3 className="font-bold mb-2 text-slate-800">{t('sec2.cats.c3.title')}</h3>
                            <p className="text-sm text-slate-600">
                                {t('sec2.cats.c3.desc')}
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-4">{t('sec2.checklist.title')}</h3>
                    <div className="space-y-4">
                        <div className="flex bg-white border border-slate-200 p-4 rounded-lg">
                            <div className="bg-slate-100 text-slate-600 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">1</div>
                            <div>
                                <h4 className="font-bold text-slate-800">{t('sec2.checklist.item1.title')}</h4>
                                <p className="text-sm text-slate-500">
                                    {t.rich('sec2.checklist.item1.desc', { br: () => <br /> })}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-white border border-slate-200 p-4 rounded-lg">
                            <div className="bg-slate-100 text-slate-600 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">2</div>
                            <div>
                                <h4 className="font-bold text-slate-800">{t('sec2.checklist.item2.title')}</h4>
                                <p className="text-sm text-slate-500">
                                    {t.rich('sec2.checklist.item2.desc', {
                                        br: () => <br />,
                                        red: (chunks) => <span className="text-red-500 text-xs">{chunks}</span>
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-white border border-primary p-4 rounded-lg shadow-sm">
                            <div className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-4">3</div>
                            <div>
                                <h4 className="font-bold text-primary">{t('sec2.checklist.item3.title')}</h4>
                                <p className="text-sm text-slate-600">
                                    {t.rich('sec2.checklist.item3.desc', {
                                        br: () => <br />,
                                        strong: (chunks) => <strong>{chunks}</strong>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Experience Report */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><CheckCircle2 className="w-6 h-6" /></span>
                        {t('sec3.title')}
                    </h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="shrink-0">
                                <Image
                                    src="/images/dtv-visa-thumbnail.png"
                                    alt="DTV Visa Report"
                                    width={100}
                                    height={100}
                                    className="rounded-full border-4 border-white shadow-md hidden md:block"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{t('sec3.report.badge')}</span>
                                    {t('sec3.report.label')}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
                                    <p><strong className="font-semibold text-slate-900">{t('sec3.report.place')}</strong></p>
                                    <p><strong className="font-semibold text-slate-900">{t('sec3.report.submit')}</strong></p>
                                    <p><strong className="font-semibold text-slate-900">{t('sec3.report.date')}</strong></p>
                                    <p><strong className="font-semibold text-slate-900">{t('sec3.report.approve')}</strong></p>
                                </div>
                                <p className="mt-4 text-slate-600 text-sm italic">
                                    {t('sec3.report.note')}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">{t('sec3.docs.title')}</h4>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-slate-900">{t('sec3.docs.item1.title')}</strong>
                                            {t('sec3.docs.item1.desc')}
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-slate-900">{t('sec3.docs.item2.title')}</strong>
                                            {t('sec3.docs.item2.desc')}
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-slate-900">{t('sec3.docs.item3.title')}</strong>
                                            {t('sec3.docs.item3.desc')}
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-slate-900">{t('sec3.docs.item4.title')}</strong>
                                            {t('sec3.docs.item4.desc')}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Step-by-Step Guide */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Calendar className="w-6 h-6" /></span>
                        {t('sec4.title')}
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        {t('sec4.desc')}
                    </p>

                    <div className="relative border-l-2 border-slate-200 ml-4 space-y-10 py-4">
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">{t('sec4.step1.title')}</h3>
                            <p className="text-slate-600 mb-2">
                                {t.rich('sec4.step1.desc', { br: () => <br /> })}
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">{t('sec4.step2.title')}</h3>
                            <p className="text-slate-600 mb-2">
                                {t.rich('sec4.step2.desc', {
                                    link: (chunks) => <a href="https://www.thaievisa.go.th/" target="_blank" className="text-primary hover:underline underline">{chunks}</a>
                                })}
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">{t('sec4.step3.title')}</h3>
                            <p className="text-slate-600 mb-2">
                                {t.rich('sec4.step3.desc', { br: () => <br /> })}
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">{t('sec4.step4.title')}</h3>
                            <p className="text-slate-600 mb-2">
                                {t.rich('sec4.step4.desc', {
                                    br: () => <br />,
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <h3 className="font-bold text-lg mb-2">{t('sec4.step5.title')}</h3>
                            <p className="text-slate-600 mb-2">
                                {t.rich('sec4.step5.desc', { br: () => <br /> })}
                            </p>
                        </div>
                    </div>
                </section>


                {locale === 'ja' && (
                    <div className="bg-[#06C755]/5 border border-[#06C755]/20 p-8 rounded-2xl text-center mb-16">
                        <h3 className="text-xl font-bold text-[#06C755] mb-2">
                            {t('line.title')}
                        </h3>
                        <p className="text-foreground/80 mb-6">
                            {t.rich('line.desc', {
                                responsiveBr: () => <br className="hidden sm:inline" />
                            })}
                        </p>
                        <a href="https://lin.ee/Qm46nCA" target="_blank" className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#06C755]/90 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-md">
                            {t('line.cta')} <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                )}

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q1')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a1')}
                            </p>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q2')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a2')}
                            </p>
                        </details>
                        <details className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
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

                <NewsletterCTA isInline />

                <div className="mt-12 text-center">
                    <Link href="/nomad-info" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        {t('hero.back')}
                    </Link>
                </div>
            </div>
        </article >
    );
}
