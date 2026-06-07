import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Wifi, Zap, Clock, Coffee, MapPin, Star, AlertTriangle, CheckCircle, Info } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'CafeGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function CafeGuidePage() {
    const t = useTranslations('CafeGuide');

    // Structured Data for Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.raw('meta.title'),
        "image": "https://totonoi-thai.com/images/cafe_guide_hero.webp",
        "datePublished": "2026-01-07",
        "author": {
            "@type": "Organization",
            "name": "Nomad in Thailand"
        },
    };

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/cafe_guide_hero.webp"
                        alt="Bangkok Work-Friendly Cafe"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('nav.back')}
                    </Link>
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">{t('hero.freeSpot')}</span>
                        <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">{t('hero.latest')}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t('hero.title')}<br />
                        <span className="text-xl md:text-3xl font-medium mt-3 block text-white/90">{t('hero.subtitle')}</span>
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-16 relative">
                    <p className="leading-loose font-medium text-foreground/90 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-loose text-foreground/80 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} />
                    <p className="leading-loose text-foreground/80 mb-8" dangerouslySetInnerHTML={{ __html: t.raw('intro.p3') }} />
                </div>

                {/* Selection Criteria */}
                <div className="bg-muted/30 p-6 rounded-xl border border-muted mb-16">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        {t('criteria.title')}
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/80">
                        <li className="flex items-center gap-2">✅ <span dangerouslySetInnerHTML={{ __html: t.raw('criteria.wifi') }} /></li>
                        <li className="flex items-center gap-2">✅ <span dangerouslySetInnerHTML={{ __html: t.raw('criteria.power') }} /></li>
                        <li className="flex items-center gap-2">✅ <span dangerouslySetInnerHTML={{ __html: t.raw('criteria.comfort') }} /></li>
                        <li className="flex items-center gap-2">✅ <span dangerouslySetInnerHTML={{ __html: t.raw('criteria.access') }} /></li>
                    </ul>
                </div>

                {/* Cafe List */}
                <div className="space-y-16">
                    {/* Spot 1: Samyan CO-OP */}
                    <section id="samyan" className="scroll-mt-24">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-base">1</span>
                                {t('spots.samyan.name')}
                            </h2>
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{t('spots.samyan.tag')}</span>
                        </div>
                        <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm">
                            <div className="relative h-64 w-full bg-slate-200 group">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="Samyan CO-OP Map"
                                    src="https://maps.google.com/maps?q=13.733776,100.528186&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                ></iframe>
                                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md pointer-events-none">
                                    {t('spots.samyan.hours')}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-foreground/80 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('spots.samyan.desc') }} />
                                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" /> {t('spots.samyan.access')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" /> {t('spots.samyan.hours')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Wifi className="w-4 h-4" /> {t('spots.samyan.wifi')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Coffee className="w-4 h-4" /> {t('spots.samyan.food')}
                                    </div>
                                </div>
                                <div className="bg-yellow-50 text-yellow-800 text-xs p-3 rounded flex items-start gap-2">
                                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                    <span dangerouslySetInnerHTML={{ __html: t.raw('spots.samyan.note') }} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spot 2: One Paper Plane Project */}
                    <section id="paperplane" className="scroll-mt-24">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-base">2</span>
                                {t('spots.paperplane.name')}
                            </h2>
                            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">{t('spots.paperplane.tag')}</span>
                        </div>
                        <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm">
                            <div className="relative h-64 w-full bg-slate-200">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="Paper Plane Project Map"
                                    src="https://maps.google.com/maps?q=13.72225,100.58054&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <p className="text-foreground/80 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('spots.paperplane.desc') }} />
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" /> {t('spots.paperplane.access')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" /> {t('spots.paperplane.hours')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Zap className="w-4 h-4" /> {t('spots.paperplane.power')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Coffee className="w-4 h-4" /> {t('spots.paperplane.cost')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spot 3: Open House */}
                    <section id="openhouse" className="scroll-mt-24">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-base">3</span>
                                {t('spots.openhouse.name')}
                            </h2>
                            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">{t('spots.openhouse.tag')}</span>
                        </div>
                        <div className="bg-card border border-muted rounded-2xl overflow-hidden shadow-sm">
                            <div className="relative h-64 w-full bg-slate-200">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="Open House Central Embassy Map"
                                    src="https://maps.google.com/maps?q=Open+House+Central+Embassy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <p className="text-foreground/80 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('spots.openhouse.desc') }} />
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" /> {t('spots.openhouse.access')}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" /> {t('spots.openhouse.hours')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick List for Others */}
                    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                        <h3 className="font-bold text-xl mb-6">{t('spots.others.title')}</h3>
                        <div className="space-y-6 divide-y divide-slate-200">
                            <div className="pt-4 first:pt-0">
                                <h4 className="font-bold text-lg mb-1">{t('spots.others.4.title')}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{t('spots.others.4.desc')}</p>
                            </div>
                            <div className="pt-4">
                                <h4 className="font-bold text-lg mb-1">{t('spots.others.5.title')}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{t('spots.others.5.desc')}</p>
                            </div>
                            <div className="pt-4">
                                <h4 className="font-bold text-lg mb-1">{t('spots.others.6.title')}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{t('spots.others.6.desc')}</p>
                            </div>
                            <div className="pt-4">
                                <h4 className="font-bold text-lg mb-1">{t('spots.others.7.title')}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{t('spots.others.7.desc')}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Comparison Table */}
                <section className="mb-20 mt-20">
                    <h2 className="text-2xl font-bold mb-6">{t('comparison.title')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse bg-card rounded-lg overflow-hidden shadow-sm text-sm">
                            <thead className="bg-slate-100 text-muted-foreground">
                                <tr>
                                    <th className="p-3 text-left">{t('comparison.headers.name')}</th>
                                    <th className="p-3 text-left">{t('comparison.headers.wifi')}</th>
                                    <th className="p-3 text-left">{t('comparison.headers.power')}</th>
                                    <th className="p-3 text-left">{t('comparison.headers.cost')}</th>
                                    <th className="p-3 text-left">{t('comparison.headers.quiet')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="p-3 font-bold">{t('comparison.samyan.name')}</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">{t('comparison.samyan.cost')}</td>
                                    <td className="p-3">{t('comparison.samyan.quiet')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">{t('comparison.paperplane.name')}</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3">{t('comparison.paperplane.cost')}</td>
                                    <td className="p-3">{t('comparison.paperplane.quiet')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">{t('comparison.openhouse.name')}</td>
                                    <td className="p-3">◯</td>
                                    <td className="p-3">{t('comparison.openhouse.power')}</td>
                                    <td className="p-3">{t('comparison.openhouse.cost')}</td>
                                    <td className="p-3 text-green-600">{t('comparison.openhouse.quiet')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold">{t('comparison.true.name')}</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">◎</td>
                                    <td className="p-3 text-green-600">{t('comparison.true.cost')}</td>
                                    <td className="p-3">{t('comparison.true.quiet')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Info className="w-6 h-6 text-blue-500" /> {t('faq.title')}
                    </h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.longstay.q')}
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.longstay.a')}
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.valuables.q')}
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.valuables.a')}
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.ac.q')}
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('faq.ac.a') }} />
                        </details>
                    </div>
                </div>

                <NewsletterCTA isInline />

                <div className="mt-8 text-center">
                    <Link href="../nomad-info" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        {t('nav.back')}
                    </Link>
                </div>
            </div>
        </article>
    );
}
