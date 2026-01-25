import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Car, Smartphone, Zap, Train, AlertTriangle, CheckCircle, Info } from "lucide-react";
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

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
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
                    <Link href="/living" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
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
                    <p className="leading-loose font-medium text-foreground/80 mb-6 whitespace-pre-line">
                        {t('intro.p1')}
                    </p>
                    <p className="leading-relaxed whitespace-pre-line">
                        {t.rich('intro.p2', {
                            bold: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                </div>

                {/* Section 1: Grab vs Bolt */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Car className="w-6 h-6" /></span>
                        {t('grabBolt.title')}
                    </h2>

                    <p className="mb-6 text-muted-foreground">
                        {t('grabBolt.desc')}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Grab Card */}
                        <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('grabBolt.grab.tag')}</div>
                            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">Grab</h3>
                            <ul className="space-y-3 text-sm text-foreground/80">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>{t.rich('grabBolt.grab.features.0', { bold: (chunks) => <strong>{chunks}</strong> })}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>{t.rich('grabBolt.grab.features.1', { bold: (chunks) => <strong>{chunks}</strong> })}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span>{t('grabBolt.grab.features.2')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Bolt Card */}
                        <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('grabBolt.bolt.tag')}</div>
                            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">Bolt</h3>
                            <ul className="space-y-3 text-sm text-foreground/80">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                                    <span>{t.rich('grabBolt.bolt.features.0', { bold: (chunks) => <strong>{chunks}</strong> })}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                                    <span>{t.rich('grabBolt.bolt.features.1', { bold: (chunks) => <strong>{chunks}</strong> })}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Info className="w-4 h-4 text-slate-400 mt-0.5" />
                                    <span>{t('grabBolt.bolt.features.2')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                        <div className="text-sm">
                            <p className="font-bold mb-1">{t('grabBolt.advice.title')}</p>
                            <p className="text-muted-foreground">
                                {t.rich('grabBolt.advice.text', { bold: (chunks) => <strong>{chunks}</strong> })}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: MuvMi */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Zap className="w-6 h-6" /></span>
                        {t('muvmi.title')}
                    </h2>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">{t('muvmi.sub')}</h3>
                                <p className="leading-relaxed text-foreground/80 mb-6">
                                    {t('muvmi.desc')}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        {t('muvmi.points.0')}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        {t('muvmi.points.1')}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        {t('muvmi.points.2')}
                                    </div>
                                </div>


                            </div>
                            <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden bg-white shadow-md border border-blue-100 flex items-center justify-center">
                                {/* Would be an image of MuvMi, using an icon for now */}
                                <div className="text-center">
                                    <Zap className="w-16 h-16 text-blue-500 mx-auto mb-2" />
                                    <span className="text-xs text-muted-foreground">MuvMi App Icon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Trains */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><Train className="w-6 h-6" /></span>
                        {t('train.title')}
                    </h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        {t.rich('train.desc', {
                            bold: (chunks) => <strong>{chunks}</strong>,
                            br: () => <br />
                        })}
                    </p>

                    <div className="bg-card border border-muted rounded-xl divide-y divide-muted">
                        <div className="p-4 flex items-start gap-4">
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-bold text-sm shrink-0 w-16 text-center" dangerouslySetInnerHTML={{ __html: t.raw('train.mrt.label') }} />
                            <div>
                                <p className="font-bold mb-1">{t('train.mrt.status')}</p>
                                <p className="text-sm text-muted-foreground">{t('train.mrt.desc')}</p>
                            </div>
                        </div>
                        <div className="p-4 flex items-start gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-bold text-sm shrink-0 w-16 text-center" dangerouslySetInnerHTML={{ __html: t.raw('train.bts.label') }} />
                            <div>
                                <p className="font-bold mb-1">{t('train.bts.status')}</p>
                                <p className="text-sm text-muted-foreground">
                                    {t.rich('train.bts.desc', { bold: (chunks) => <strong>{chunks}</strong> })}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

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
                                        "text": t('faq.a1').replace(/<bold>|<\/bold>/g, "")
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.q2'),
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": t('faq.a2').replace(/<bold>|<\/bold>/g, "")
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Section */}
                <section className="mb-16 mt-12">
                    <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border border-muted rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-foreground">
                                {t('faq.q1')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                                {t.rich('faq.a1', { bold: (chunks) => <strong>{chunks}</strong> })}
                            </p>
                        </details>
                        <details className="group bg-white border border-muted rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-foreground">
                                {t('faq.q2')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                                {t.rich('faq.a2', { bold: (chunks) => <strong>{chunks}</strong> })}
                            </p>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                <div className="mt-8 text-center">
                    <Link href="/living" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        {t('hero.back')}
                    </Link>
                </div>
            </div>
        </article>
    );
}
