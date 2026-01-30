
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    CreditCard,
    ShieldCheck,
    AlertTriangle,
    CheckCircle,
    Plane,
    Gem,
    HelpCircle,
    ArrowRight,
    Building2,
    FileText,
    Home,
    Lightbulb,
    Phone
} from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";
import AdDisclosure from "@/components/AdDisclosure";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'CreditCard.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function CreditCardPage() {
    const t = useTranslations('CreditCard');

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src="/images/credit_card_hero.png"
                        alt="Credit Cards for Digital Nomads"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <div className="flex items-center justify-between mb-6">
                        <Link href="../nomad-info" className="inline-flex items-center text-sm text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            {t('hero.back')}
                        </Link>
                        <span className="text-xs font-semibold bg-primary/90 text-primary-foreground px-2 py-1 rounded shadow-sm">
                            {t('hero.update')}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {t.rich('hero.title', {
                            subtag: (chunks) => <span className="text-xl md:text-2xl font-medium mt-3 block text-white/90 leading-normal">{chunks}</span>
                        })}
                    </h1>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">

                <AdDisclosure />

                {/* Intro */}
                <div className="mb-16 max-w-3xl mx-auto bg-card border border-muted/50 p-6 md:p-8 rounded-2xl shadow-sm">
                    <p className="leading-relaxed text-lg text-foreground/80 mb-6 font-medium whitespace-pre-line">
                        {t('intro.p1')}
                    </p>
                    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                        <p className="whitespace-pre-line">{t.rich('intro.p2', {
                            strong: (chunks) => <strong className="text-primary font-bold">{chunks}</strong>
                        })}</p>
                        <p className="whitespace-pre-line">{t.rich('intro.p3', {
                            strong: (chunks) => <strong className="text-foreground font-bold">{chunks}</strong>
                        })}</p>
                    </div>
                </div>

                {/* Section 1: Insurance System */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><ShieldCheck className="w-6 h-6" /></span>
                        {t('insurance_system.title')}
                    </h2>

                    <p className="mb-6 text-foreground/80">{t('insurance_system.desc')}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Automatic */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10">
                                <CheckCircle className="w-24 h-24 text-green-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-green-800 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                {t('insurance_system.automatic.label')}
                            </h3>
                            <p className="text-green-900/80 leading-relaxed text-sm">
                                {t('insurance_system.automatic.desc')}
                            </p>
                        </div>

                        {/* Utilization */}
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 rounded-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10">
                                <Plane className="w-24 h-24 text-slate-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-700 flex items-center gap-2">
                                <Plane className="w-5 h-5" />
                                {t('insurance_system.utilization.label')}
                            </h3>
                            <p className="text-slate-700/80 leading-relaxed text-sm">
                                {t('insurance_system.utilization.desc')}
                            </p>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg text-center font-medium text-primary">
                        {t.rich('insurance_system.conclusion', {
                            strong: (chunks) => <span className="font-bold underline">{chunks}</span>
                        })}
                    </div>
                </section>

                {/* Section 1.5: Insurance Flow - NEW */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><FileText className="w-6 h-6" /></span>
                        {t('insurance_flow_detail.title')}
                    </h2>

                    <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                        <div className="text-lg mb-8 leading-relaxed whitespace-pre-line text-foreground/80" dangerouslySetInnerHTML={{ __html: t.raw('insurance_flow_detail.lead') }} />

                        <div className="space-y-8 relative">
                            {/* Vertical line for flow */}
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-muted z-0 hidden md:block" />

                            {['step1', 'step2', 'step3', 'step4'].map((step, index) => {
                                const icons = [FileText, Phone, Building2, Home];
                                const Icon = icons[index];
                                return (
                                    <div key={step} className="relative z-10 flex flex-col md:flex-row gap-6">
                                        <div className="flex-shrink-0 flex items-start">
                                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border-4 border-background shadow-sm">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-muted/30 rounded-xl p-5 border border-muted/50">
                                            <h3 className="text-xl font-bold mb-3">{t(`insurance_flow_detail.steps.${step}.title`)}</h3>
                                            <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4"
                                                dangerouslySetInnerHTML={{ __html: t.raw(`insurance_flow_detail.steps.${step}.desc`) }} />

                                            {step === 'step1' && (
                                                <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg text-sm flex gap-2 items-start border border-yellow-100">
                                                    <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
                                                    <span>{t(`insurance_flow_detail.steps.${step}.pro_tip`)}</span>
                                                </div>
                                            )}
                                            {step === 'step2' && (
                                                <div className="bg-red-50 text-red-800 p-3 rounded-lg text-sm flex gap-2 items-start border border-red-100">
                                                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                                                    <span>{t(`insurance_flow_detail.steps.${step}.note`)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-8 text-center bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <p className="mb-4 font-bold text-foreground">{t('insurance_flow_detail.cta_text')}</p>
                            <div className="text-center">
                                <a href="https://www.eposcard.co.jp/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-amber-500/25 transition-all w-full md:w-auto transform hover:-translate-y-0.5">
                                    {t('cards.epos.cta')} <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Recommended Cards */}
                <section className="mb-20" id="cards">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><CreditCard className="w-6 h-6" /></span>
                        {t('cards.title')}
                    </h2>

                    <div className="space-y-12">
                        {/* 1. EPOS Card */}
                        <div className="bg-white border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-gradient-to-r from-yellow-500 to-amber-400 text-white p-4 md:p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{t('cards.epos.name')}</h3>
                                        <span className="inline-block bg-black/10 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                            {t('cards.epos.catch')}
                                        </span>
                                    </div>
                                    <ShieldCheck className="w-10 h-10 text-white/40" />
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <ul className="grid md:grid-cols-2 gap-4 mb-6">
                                    {['0', '1', '2', '3'].map((i) => (
                                        <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg text-sm">
                                            <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                                            <span>{t(`cards.epos.points.${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-foreground/80 leading-relaxed mb-8">
                                    {t('cards.epos.desc')}
                                </p>
                                <div className="text-center">
                                    <a href="https://www.eposcard.co.jp/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-yellow-600 hover:shadow-yellow-500/25 transition-all w-full md:w-auto transform hover:-translate-y-0.5">
                                        {t('cards.epos.cta')} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2. Rakuten Card */}
                        <div className="bg-white border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 md:p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{t('cards.rakuten.name')}</h3>
                                        <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                            {t('cards.rakuten.catch')}
                                        </span>
                                    </div>
                                    <Plane className="w-10 h-10 text-white/30" />
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <ul className="grid md:grid-cols-2 gap-4 mb-6">
                                    {['0', '1', '2', '3'].map((i) => (
                                        <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{t(`cards.rakuten.points.${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-foreground/80 leading-relaxed mb-8">
                                    {t('cards.rakuten.desc')}
                                </p>
                                <div className="text-center">
                                    <a href="https://www.rakuten-card.co.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-900 hover:shadow-slate-500/25 transition-all w-full md:w-auto transform hover:-translate-y-0.5">
                                        {t('cards.rakuten.cta')} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 3. Marriott Card */}
                        <div className="bg-white border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-4 md:p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{t('cards.marriott.name')}</h3>
                                        <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                            {t('cards.marriott.catch')}
                                        </span>
                                    </div>
                                    <Gem className="w-10 h-10 text-white/30" />
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <ul className="grid md:grid-cols-2 gap-4 mb-6">
                                    {['0', '1', '2', '3'].map((i) => (
                                        <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{t(`cards.marriott.points.${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-foreground/80 leading-relaxed mb-8">
                                    {t('cards.marriott.desc')}
                                </p>
                                <div className="text-center">
                                    <a href="https://www.americanexpress.com/jp/credit-cards/marriott-bonvoy-premium/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-indigo-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-950 hover:shadow-indigo-500/25 transition-all w-full md:w-auto transform hover:-translate-y-0.5">
                                        {t('cards.marriott.cta')} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Comparison Table */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">{t('comparison.title')}</h2>
                    <div className="bg-card border rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">{t('comparison.col_card')}</th>
                                    <th className="px-6 py-4">{t('comparison.col_fee')}</th>
                                    <th className="px-6 py-4">{t('comparison.col_insurance')}</th>
                                    <th className="px-6 py-4">{t('comparison.col_perk')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-bold text-yellow-600">{t('cards.epos.name')}</td>
                                    <td className="px-6 py-4 font-bold">{t('comparison.epos_fee')}</td>
                                    <td className="px-6 py-4 text-green-600 font-bold">{t('comparison.epos_ins')}</td>
                                    <td className="px-6 py-4">{t('comparison.epos_perk')}</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-bold text-slate-700">{t('cards.rakuten.name')}</td>
                                    <td className="px-6 py-4">{t('comparison.rakuten_fee')}</td>
                                    <td className="px-6 py-4 text-green-600 font-bold">{t('comparison.rakuten_ins')}</td>
                                    <td className="px-6 py-4">{t('comparison.rakuten_perk')}</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-bold text-indigo-800">{t('cards.marriott.name')}</td>
                                    <td className="px-6 py-4">{t('comparison.marriott_fee')}</td>
                                    <td className="px-6 py-4 text-slate-500">{t('comparison.marriott_ins')}</td>
                                    <td className="px-6 py-4">{t('comparison.marriott_perk')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Warning Section */}
                <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-20 flex flex-col md:flex-row gap-6 items-start">
                    <AlertTriangle className="w-10 h-10 text-red-500 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-red-700 mb-2">{t('warning.title')}</h3>
                        <p className="text-red-800/80 mb-4 whitespace-pre-line leading-relaxed">
                            {t.rich('warning.desc', {
                                strong: (chunks) => <strong className="font-bold underline">{chunks}</strong>
                            })}
                        </p>
                        <Link href="../nomad-info/safetywing" className="inline-flex items-center font-bold text-red-700 hover:text-red-600 border-b-2 border-red-300 hover:border-red-500 transition-colors">
                            {t('warning.link')} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg"><HelpCircle className="w-6 h-6" /></span>
                        {t('faq.title')}
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <details key={i} className="group bg-card border border-muted rounded-xl open:ring-1 open:ring-primary/20 transition-all">
                                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-foreground hover:bg-muted/50 rounded-xl">
                                    {t(`faq.q${i}`)}
                                    <span className="transition-transform group-open:rotate-180">
                                        <ArrowLeft className="w-4 h-4 rotate-270" />
                                    </span>
                                </summary>
                                <div className="px-4 pb-4 pt-0 text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                                    {t.rich(`faq.a${i}`, {
                                        strong: (chunks) => <strong className="text-foreground">{chunks}</strong>
                                    })}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                <NewsletterCTA isInline />

                <div className="mt-8 text-center">
                    <Link href="../nomad-info" className="text-sm text-muted-foreground hover:text-primary transition-colors underline">
                        {t('hero.back')}
                    </Link>
                </div>
            </div>
        </article>
    );
}
