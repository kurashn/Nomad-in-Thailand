import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Wifi, MapPin, Coffee, Clock, Zap, Users, Star, PlayCircle, HelpCircle } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'CoworkingGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function CoworkingGuidePage() {
    const t = useTranslations('CoworkingGuide');

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/coworking_guide_hero.webp"
                        alt="Digital Nomad in Bangkok"
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
                            br: () => <br className="md:hidden" />
                        })}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-md">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6 whitespace-pre-line">
                        {t.rich('intro.p1', {
                            br: () => <br />
                        })}
                    </p>
                    <p className="leading-relaxed whitespace-pre-line">
                        {t('intro.p2')}
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="mb-16 overflow-x-auto relative">
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-foreground">📍 {t('table.title')}</h2>
                    </div>
                    <table className="w-full min-w-[600px] border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                        <thead>
                            <tr className="bg-muted text-left">
                                <th className="p-4 font-bold text-muted-foreground text-sm">{t('table.headers.name')}</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">{t('table.headers.area')}</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">{t('table.headers.price')}</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">{t('table.headers.vibe')}</th>
                                <th className="p-4 font-bold text-muted-foreground text-sm">{t('table.headers.bestFor')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-muted">
                            <tr>
                                <td className="p-4 font-bold text-foreground">{t('table.rows.trueDigital.name')}</td>
                                <td className="p-4 text-sm">{t('table.rows.trueDigital.area')}</td>
                                <td className="p-4 text-sm font-bold text-primary">{t('table.rows.trueDigital.price')}</td>
                                <td className="p-4 text-sm">{t('table.rows.trueDigital.vibe')}</td>
                                <td className="p-4 text-sm">{t('table.rows.trueDigital.bestFor')}</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-foreground">{t('table.rows.theHive.name')}</td>
                                <td className="p-4 text-sm">{t('table.rows.theHive.area')}</td>
                                <td className="p-4 text-sm">{t('table.rows.theHive.price')}</td>
                                <td className="p-4 text-sm">{t('table.rows.theHive.vibe')}</td>
                                <td className="p-4 text-sm">{t('table.rows.theHive.bestFor')}</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-foreground">{t('table.rows.napLab.name')}</td>
                                <td className="p-4 text-sm">{t('table.rows.napLab.area')}</td>
                                <td className="p-4 text-sm">{t('table.rows.napLab.price')}</td>
                                <td className="p-4 text-sm">{t('table.rows.napLab.vibe')}</td>
                                <td className="p-4 text-sm">{t('table.rows.napLab.bestFor')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Top Picks List */}
                <div className="space-y-16">
                    {/* Spot 1: True Digital Park */}
                    <section className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <iframe
                            width="100%"
                            height="100%"
                            title="True Digital Park Map"
                            src="https://maps.google.com/maps?q=True+Digital+Park&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                            {t('spots.trueDigital.badge')}
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-1">True Digital Park</h2>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4 mr-1" /> {t('spots.trueDigital.station')}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">{t('spots.trueDigital.price')}</div>
                                    <div className="text-xs text-muted-foreground">{t('spots.trueDigital.priceSub')}</div>
                                </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                {t('spots.trueDigital.desc')}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Wifi className="w-4 h-4 text-green-500" />
                                    <span>{t('spots.trueDigital.features.wifi')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Coffee className="w-4 h-4 text-orange-500" />
                                    <span>{t('spots.trueDigital.features.cafe')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Users className="w-4 h-4 text-blue-500" />
                                    <span>{t('spots.trueDigital.features.events')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span>{t('spots.trueDigital.features.power')}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spot 2: The Hive Thonglor */}
                    <section className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <iframe
                            width="100%"
                            height="100%"
                            title="The Hive Thonglor Map"
                            src="https://maps.google.com/maps?q=The+Hive+Thonglor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                            {t('spots.theHive.badge')}
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-1">The Hive Thonglor</h2>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4 mr-1" /> {t('spots.theHive.station')}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">{t('spots.theHive.price')}</div>
                                    <div className="text-xs text-muted-foreground">{t('spots.theHive.priceSub')}</div>
                                </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                {t('spots.theHive.desc')}
                            </p>

                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>{t('spots.theHive.features.f1')}</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>{t('spots.theHive.features.f2')}</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-foreground/80">
                                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                    <span>{t('spots.theHive.features.f3')}</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Spot 3: NapLab */}
                    <section className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <iframe
                            width="100%"
                            height="100%"
                            title="NapLab Map"
                            src="https://maps.google.com/maps?q=NapLab+Chula&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg pointer-events-none">
                            {t('spots.napLab.badge')}
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground mb-1">NapLab Chula</h2>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <MapPin className="w-4 h-4 mr-1" /> {t('spots.napLab.station')}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">{t('spots.napLab.price')}</div>
                                    <div className="text-xs text-muted-foreground">{t('spots.napLab.priceSub')}</div>
                                </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed">
                                {t('spots.napLab.desc')}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Clock className="w-4 h-4 text-purple-500" />
                                    <span>{t('spots.napLab.features.hours')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Coffee className="w-4 h-4 text-orange-500" />
                                    <span>{t('spots.napLab.features.drink')}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground/80">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span>{t('spots.napLab.features.shower')}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Video Placeholder */}
                <div className="mt-16 mb-16 bg-muted/30 border border-muted p-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative w-full md:w-1/2 aspect-video bg-black/10 rounded-xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                            <PlayCircle className="w-16 h-16 text-muted-foreground/50" />
                            <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-bold text-muted-foreground">
                                {t('video.comingSoon')}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">{t('video.tag')}</span>
                                {t('video.title')}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.rich('video.desc', {
                                    br: () => <br />
                                })}
                            </p>
                        </div>
                    </div>
                </div>


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

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                        <HelpCircle className="w-6 h-6 text-primary" />
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
                </div>

                <NewsletterCTA isInline />

                {/* Summary */}
                <div className="mt-16 bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{t('summary.title')}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        {t.rich('summary.desc', {
                            br: () => <br />
                        })}
                    </p>
                    <Link href="../nomad-info" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-foreground/80 transition-colors">
                        {t('summary.cta')}
                    </Link>
                </div>
            </div>
        </article>
    );
}
