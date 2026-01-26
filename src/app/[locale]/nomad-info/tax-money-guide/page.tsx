import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wallet, Building2, Utensils, Train, AlertTriangle, CheckCircle, CreditCard, Banknote } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'TaxMoneyGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function TaxMoneyGuidePage() {
    const t = useTranslations('TaxMoneyGuide');

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/tax_money_hero.png"
                        alt="Money and Tax for Digital Nomads"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t.rich('hero.title', {
                            subtag: (chunks) => <span className="text-2xl md:text-3xl font-medium mt-2 block text-white/90">{chunks}</span>
                        })}
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">

                {/* Intro */}
                {/* Intro */}
                <div className="mb-16 max-w-3xl mx-auto">
                    <p className="leading-relaxed text-lg text-foreground/80 mb-6 font-medium whitespace-pre-line">
                        {t('intro.p1')}
                    </p>
                    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                        <p className="whitespace-pre-line">{t('intro.p2')}</p>
                    </div>
                </div>

                {/* Section 1: Cost of Living */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Wallet className="w-6 h-6" /></span>
                        {t('cost.title')}
                    </h2>

                    <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm mb-8">
                        <div className="relative h-64 w-full bg-green-50">
                            <Image
                                src="/images/living_cost_visual.png"
                                alt="Cost of Living Breakdown"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-4">{t('cost.breakdown.title')}</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted text-muted-foreground uppercase">
                                        <tr>
                                            <th className="px-6 py-3 rounded-l-lg">{t('cost.breakdown.header.item')}</th>
                                            <th className="px-6 py-3">{t('cost.breakdown.header.economy')}</th>
                                            <th className="px-6 py-3">{t('cost.breakdown.header.standard')}</th>
                                            <th className="px-6 py-3 rounded-r-lg">{t('cost.breakdown.header.luxury')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-muted">
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Building2 className="w-4 h-4 text-blue-500" /> {t('cost.breakdown.rent.label')}
                                            </td>
                                            <td className="px-6 py-4">{t('cost.breakdown.rent.economy')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.rent.economyDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.rent.standard')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.rent.standardDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.rent.luxury')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.rent.luxuryDesc')}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Utensils className="w-4 h-4 text-orange-500" /> {t('cost.breakdown.food.label')}
                                            </td>
                                            <td className="px-6 py-4">{t('cost.breakdown.food.economy')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.food.economyDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.food.standard')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.food.standardDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.food.luxury')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.food.luxuryDesc')}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Train className="w-4 h-4 text-purple-500" /> {t('cost.breakdown.transport.label')}
                                            </td>
                                            <td className="px-6 py-4">{t('cost.breakdown.transport.economy')}</td>
                                            <td className="px-6 py-4">{t('cost.breakdown.transport.standard')}</td>
                                            <td className="px-6 py-4">{t('cost.breakdown.transport.luxury')}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4 text-green-600" /> {t('cost.breakdown.insurance.label')}
                                            </td>
                                            <td className="px-6 py-4">{t('cost.breakdown.insurance.economy')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.insurance.economyDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.insurance.standard')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.insurance.standardDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.insurance.luxury')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.insurance.luxuryDesc')}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold flex items-center gap-2">
                                                <Utensils className="w-4 h-4 text-pink-500" /> {t('cost.breakdown.entertainment.label')}
                                            </td>
                                            <td className="px-6 py-4">{t('cost.breakdown.entertainment.economy')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.entertainment.economyDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.entertainment.standard')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.entertainment.standardDesc')}</span></td>
                                            <td className="px-6 py-4">{t('cost.breakdown.entertainment.luxury')}<br /><span className="text-xs text-muted-foreground">{t('cost.breakdown.entertainment.luxuryDesc')}</span></td>
                                        </tr>
                                        <tr className="bg-primary/5 font-bold">
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalThb.label')}</td>
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalThb.economy')}</td>
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalThb.standard')}</td>
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalThb.luxury')}</td>
                                        </tr>
                                        <tr className="bg-primary/5 font-bold text-lg">
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalJpy.label')}</td>
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalJpy.economy')}</td>
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalJpy.standard')}</td>
                                            <td className="px-6 py-4 text-primary">{t('cost.breakdown.totalJpy.luxury')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 text-right">{t('cost.breakdown.note')}</p>

                            {/* YouTube Embed */}
                            <div className="mt-8 border-t border-muted pt-8">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="text-red-600">🎥</span> {t('cost.video.title')}
                                </h4>
                                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/pDqbwEahHZI?si=5iltI4-TXCSYCxC9"
                                        title="Bangkok Cost of Living Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <p className="text-sm text-center text-muted-foreground mt-2">
                                    {t('cost.video.desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Tax Rules */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-red-100 text-red-600 p-2 rounded-lg"><AlertTriangle className="w-6 h-6" /></span>
                        {t('tax.title')}
                    </h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                            <div className="w-full md:w-1/2 relative h-56 rounded-xl overflow-hidden shadow-sm bg-white">
                                <Image
                                    src="/images/tax_residency_visual.png"
                                    alt="Tax Residency Rule"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-bold mb-3 text-red-600">{t('tax.question')}</h3>
                                <p className="leading-relaxed text-foreground/80 mb-4">
                                    {t.rich('tax.answer', {
                                        highlight: (chunks) => <span className="font-bold underline decoration-red-400 decoration-2">{chunks}</span>
                                    })}
                                </p>
                                <div className="space-y-2 text-sm text-foreground/70">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                        <span>{t('tax.rule1')}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                        <span>{t.rich('tax.rule2', {
                                            b: (chunks) => <b className="text-foreground">{chunks}</b>
                                        })}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-red-100 p-6 rounded-xl">
                            <h4 className="font-bold text-red-600 flex items-center gap-2 mb-3">
                                <AlertTriangle className="w-5 h-5" />
                                {t('tax.alert.title')}
                            </h4>
                            <p className="text-sm leading-relaxed text-foreground/80">
                                {t.rich('tax.alert.desc', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Money Management */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><CreditCard className="w-6 h-6" /></span>
                        {t('money.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Wise */}
                        <div className="bg-card border border-muted p-6 rounded-xl">
                            <div className="w-12 h-12 bg-[#9FE870] rounded-full flex items-center justify-center mb-4">
                                <span className="font-bold text-[#163300]">Wise</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('money.wise.title')}</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                {t('money.wise.desc')}
                            </p>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{t('money.wise.tag')}</span>
                        </div>

                        {/* Bangkok Bank */}
                        <div className="bg-card border border-muted p-6 rounded-xl">
                            <div className="w-12 h-12 bg-[#1e2e85] rounded-full flex items-center justify-center mb-4 text-white">
                                <Banknote className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('money.bank.title')}</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                {t('money.bank.desc')}
                            </p>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{t('money.bank.tag')}</span>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
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
                        })
                    }}
                />

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><CheckCircle className="w-6 h-6" /></span>
                        {t('faq.title')}
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.q1')}
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.a1')}
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.q2')}
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.a2')}
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.q3')}
                                <span className="transition-transform group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.a3')}
                            </div>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                <div className="mt-8 text-center">
                    <Link href="../nomad-info" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        {t('back')}
                    </Link>
                </div>
            </div>
        </article>
    );
}
