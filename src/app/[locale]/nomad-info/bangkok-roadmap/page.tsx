import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Plane, Home, Wallet, Wifi, Shield, ArrowRight } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

// Metadata needs to be handled differently or kept hardcoded for now until we have dynamic metadata strategy. 
// For now, I will keep metadata hardcoded in Japanese as Next.js 13+ metadata doesn't support hooks directly in layout/page easily without generateMetadata.
// But wait, the user wants ONE generic metadata? Or localized?
// Usually generateMetadata is used.
// keeping it simple for now, focusing on content.

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

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 bg-black/85 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                {/* Visual: Inspiring view of Bangkok skyline or a cozy cafe working setup */}
                <div className="w-full h-full bg-slate-200 relative">
                    <Image
                        src="/images/bangkok_nomad_roadmap_thumbnail.png"
                        alt="Bangkok Nomad Setup"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="/nomad-info" className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-primary/20">{t('hero.tag1')}</span>
                        <span className="px-3 py-1 bg-secondary/90 backdrop-blur-md text-secondary-foreground text-xs font-bold rounded-full border border-secondary/20">{t('hero.tag2')}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-xl">
                        {t.rich('hero.title', {
                            subtag: (chunks) => <span className="text-2xl md:text-4xl block mt-2 font-normal opacity-90">{chunks}</span>
                        })}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden relative">
                                {/* Avatar placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80"></div>
                            </div>
                            <span className="font-medium drop-shadow-sm">{t('hero.author')}</span>
                        </div>
                        <span>•</span>
                        <time className="drop-shadow-sm">2025.12.31</time>
                    </div>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-8">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-10 relative">
                    <div className="float-right ml-6 mb-4 w-28 h-28 md:w-36 md:h-36 relative animate-bounce-slow" style={{ animationDuration: '3s' }}>
                        <Image
                            src="/character/nomad-dog-waving-new.png"
                            alt="Nomad Dog Waving"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="leading-loose font-medium text-foreground/80 pl-2 mb-6 whitespace-pre-line">
                        {t('intro.p1')}
                    </p>
                    <p className="mb-8 leading-loose text-lg">
                        {t('intro.p2')}
                    </p>
                    <p className="mb-8 leading-loose text-lg">
                        {t('intro.p3')}
                    </p>
                    <p className="mb-8 leading-loose text-lg">
                        {t('intro.p4')}
                    </p>
                    <p className="mb-12 leading-loose text-lg font-bold">
                        {t('intro.p5')}
                    </p>

                    <div className="bg-gradient-to-br from-muted/50 to-muted/10 p-6 rounded-2xl border border-muted my-10">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">i</span>
                            {t('intro.benefits.title')}
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span>{t.rich('intro.benefits.item1', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span>{t('intro.benefits.item2')}</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span>{t('intro.benefits.item3')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold flex items-center gap-4 text-foreground">
                            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary text-xl font-black">01</span>
                            {t('visa.title')}
                        </h2>
                        <div className="relative w-24 h-24 hidden sm:block">
                            <Image
                                src="/character/nomad-dog-tuktuk.png"
                                alt="Nomad Dog Riding TukTuk"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p>
                            {t.rich('visa.desc', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-card border border-muted p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg mb-3 text-primary flex items-center gap-2">
                                    <Shield className="w-5 h-5" /> {t('visa.dtv.title')}
                                </h3>
                                <ul className="text-base space-y-2 text-muted-foreground">
                                    <li><strong>有効期間:</strong> {t('visa.dtv.validity')}</li>
                                    <li><strong>滞在期間:</strong> {t('visa.dtv.stay')}</li>
                                    <li><strong>条件:</strong> {t('visa.dtv.condition')}</li>
                                    <li><strong>費用:</strong> {t('visa.dtv.cost')}</li>
                                </ul>
                                <p className="mt-4 text-xs font-medium text-foreground bg-primary/10 p-2 rounded">
                                    {t('visa.dtv.note')}
                                </p>
                            </div>
                            <div className="bg-card border border-muted p-6 rounded-xl shadow-sm opacity-80">
                                <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                                    <Plane className="w-5 h-5" /> {t('visa.tourist.title')}
                                </h3>
                                <ul className="text-base space-y-2 text-muted-foreground">
                                    <li><strong>有効期間:</strong> {t('visa.tourist.validity')}</li>
                                    <li><strong>滞在期間:</strong> {t('visa.tourist.stay')}</li>
                                    <li><strong>条件:</strong> {t('visa.tourist.condition')}</li>
                                    <li><strong>費用:</strong> {t('visa.tourist.cost')}</li>
                                </ul>
                                <p className="mt-4 text-xs font-medium text-foreground bg-muted p-2 rounded">
                                    {t('visa.tourist.note')}
                                </p>
                            </div>
                        </div>

                        <p>
                            {t.rich('visa.conclusion', {
                                strong: (chunks) => <strong>{chunks}</strong>,
                                alert: (chunks) => <span className="text-red-500 font-bold">{chunks}</span>
                            })}
                        </p>

                        <div className="mt-8 bg-[#06C755]/10 border border-[#06C755]/30 p-6 rounded-xl text-center">
                            <h3 className="text-lg font-bold text-[#06C755] mb-2 flex items-center justify-center gap-2 whitespace-pre-line">
                                {t('visa.line.title')}
                            </h3>
                            <p className="text-base text-foreground/80 mb-4">
                                {t('visa.line.desc')}
                            </p>
                            <a href="https://lin.ee/Qm46nCA" target="_blank" className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#06C755]/90 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#06C755]/20">
                                {t('visa.line.cta')}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* YouTube Embed: DTV Visa */}
                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-red-600">🎥</span> {t('visa.video.title')}
                            </h3>
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-muted">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/B_HkXPiv7ow?si=StartBangkokNomad"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-sm text-center text-muted-foreground mt-2">
                                {t('visa.video.desc')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Chapter 2: Preparation Timeline */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-foreground">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary-foreground text-xl font-black">02</span>
                        {t('timeline.title')}
                    </h2>

                    <div className="flex justify-center mb-10">
                        <div className="relative w-40 h-40 md:w-48 md:h-48 transform -rotate-3 transition-transform hover:rotate-0">
                            <Image
                                src="/character/nomad-dog-working-new.png"
                                alt="Nomad Dog Working"
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* 1 Month Before */}
                        <div className="bg-muted/30 p-6 sm:p-8 rounded-2xl border border-muted">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">{t('timeline.month1.tag')}</span>
                                {t('timeline.month1.title')}
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-base mb-2">{t('timeline.month1.money.title')}</h4>
                                    <p className="text-base text-muted-foreground mb-3">
                                        {t.rich('timeline.month1.money.desc', {
                                            strong: (chunks) => <strong>{chunks}</strong>
                                        })}
                                    </p>
                                    <Link href="/nomad-info/tax-money-guide" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                        {t('timeline.month1.money.link')} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div>
                                    <h4 className="font-bold text-base mb-2">{t('timeline.month1.resign.title')}</h4>
                                    <p className="text-base text-muted-foreground">
                                        {t('timeline.month1.resign.desc')}
                                    </p>
                                </div>
                            </div>

                            {/* YouTube Embed: Cost of Living */}
                            <div className="mt-8">
                                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/pDqbwEahHZI?si=StartBangkokNomad"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="text-xs text-center text-muted-foreground mt-2">
                                    {t('timeline.month1.video')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 Weeks Before */}
                    <div className="bg-muted/30 p-6 sm:p-8 rounded-2xl border border-muted">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">{t('timeline.week2.tag')}</span>
                            {t('timeline.week2.title')}
                        </h3>
                        <p className="mb-6 text-base text-muted-foreground">{t('timeline.week2.desc')}</p>

                        <div className="space-y-4">
                            <div className="flex bg-white border border-muted p-4 rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                                <div className="mr-4 mt-1">
                                    <Wallet className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-1 flex items-center justify-between">
                                        <span>{t('timeline.week2.wise.title')}</span>
                                        <a href="https://wise.com" target="_blank" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">{t('timeline.week2.wise.must')}</a>
                                    </h4>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {t.rich('timeline.week2.wise.desc', {
                                            alert: (chunks) => <span className="block mt-1 text-xs text-red-500">{chunks}</span>
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex bg-white border border-muted p-4 rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                                <div className="mr-4 mt-1">
                                    <Wifi className="w-6 h-6 text-gray-600" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-1 flex items-center justify-between">
                                        <span>{t('timeline.week2.sim.title')}</span>
                                        <Link href="/living/sim-guide" className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded hover:bg-cyan-200">{t('timeline.week2.sim.detail')}</Link>
                                    </h4>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {t('timeline.week2.sim.desc')}
                                    </p>
                                    <Link href="/living/sim-guide" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 mt-2">
                                        {t('timeline.week2.sim.link')} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-muted p-4 rounded-lg text-sm">
                                <h4 className="font-bold mb-2 text-base">{t('timeline.week2.admin.title')}</h4>
                                <ul className="space-y-2 list-disc pl-4 text-muted-foreground text-base">
                                    <li>{t.rich('timeline.week2.admin.item1', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                                    <li>{t.rich('timeline.week2.admin.item2', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                                    <li>{t.rich('timeline.week2.admin.item3', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Just Before */}
                        <div className="bg-muted/30 p-6 sm:p-8 rounded-2xl border border-muted">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full">{t('timeline.justBefore.tag')}</span>
                                {t('timeline.justBefore.title')}
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white border border-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-red-500" /> {t('timeline.justBefore.insurance.title')}
                                    </h4>
                                    <p className="text-base text-muted-foreground mb-3">
                                        {t('timeline.justBefore.insurance.desc')}
                                    </p>
                                    <Link href="/living/medical-guide" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                        {t('timeline.justBefore.insurance.link')} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div className="bg-white border border-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-blue-500" /> {t('timeline.justBefore.vpn.title')}
                                    </h4>
                                    <p className="text-base text-muted-foreground mb-3">
                                        {t('timeline.justBefore.vpn.desc')}
                                    </p>
                                    <a href="https://nordvpn.com" target="_blank" className="text-xs text-primary hover:underline">{t('timeline.justBefore.vpn.link')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 3: First Month Roadmap */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-foreground">
                        <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent text-xl font-black">03</span>
                        {t('firstMonth.title')}
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-xl border border-muted">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Home className="w-5 h-5 text-accent" /> {t('firstMonth.housing.title')}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                {t('firstMonth.housing.desc')}
                            </p>
                            <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-sm mb-2">{t('firstMonth.housing.steps.title')}</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-base text-muted-foreground">
                                    <li>{t('firstMonth.housing.steps.step1')}</li>
                                    <li>{t('firstMonth.housing.steps.step2')}</li>
                                    <li>{t('firstMonth.housing.steps.step3')}</li>
                                </ol>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {t('firstMonth.housing.market')}
                            </p>
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
                                }
                            ]
                        })
                    }}
                />

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.q1')}
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.a1')}
                            </div>
                        </details>
                        <details className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                {t('faq.q2')}
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                                {t('faq.a2')}
                            </div>
                        </details>
                    </div>
                </section>

                <NewsletterCTA isInline />

                {/* Summary */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-primary/10 text-center relative overflow-hidden">
                    <div className="absolute bottom-2 right-2 w-20 h-20 opacity-10 rotate-12 pointer-events-none">
                        <Image
                            src="/character/nomad-dog-massage.png"
                            alt="Nomad Dog Relaxing"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                            src="/character/nomad-dog-massage.png"
                            alt="Nomad Dog Relaxing"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{t('summary.title')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                        {t.rich('summary.desc', {
                            strong: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <Link href="/nomad-info" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-foreground/80 transition-colors">
                        {t('summary.cta')}
                    </Link>
                </div>
            </div >
        </article >
    );
}



