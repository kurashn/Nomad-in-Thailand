import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, HeartPulse, Plane, CheckCircle, AlertTriangle, CalendarDays, HelpCircle } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'SafetyWingGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function SafetyWingPage() {
    const t = useTranslations('SafetyWingGuide');
    const tCommon = useTranslations('Common');

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/safetywing_hero.png"
                    alt="SafetyWing Nomad Insurance Guide"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../nomad-info" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('hero.back')}
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl" dangerouslySetInnerHTML={{ __html: t.raw('hero.title') }} />
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-12">
                <div className="text-xs text-muted-foreground text-center mt-2 mb-4">{tCommon('promotion')}</div>
                {/* Intro (PAS Framework) */}
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                    <p className="leading-loose font-medium text-foreground/80 mb-6" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('intro.p3') }} />

                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            {t('intro.checkTitle')}
                        </h3>
                        <ul className="list-none pl-0 space-y-2 m-0">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> {t('intro.check1')}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> {t('intro.check2')}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">・</span> {t('intro.check3')}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Affiliate Button (Top) */}
                <div className="flex justify-center mb-16">
                    <a
                        href={AFFILIATE_LINKS.safetywing}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700"
                    >
                        <span>{t('affiliate')}</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Diagnosis Section (NEW) */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>

                        <div className="text-center mb-10 relative z-10">
                            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Diagnosis</span>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('diagnosis.title')}</h2>
                            <p className="text-slate-300 max-w-xl mx-auto">{t('diagnosis.desc')}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 relative z-10">
                            {/* Short Trip */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
                                <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Plane className="w-7 h-7 text-slate-300" />
                                </div>
                                <h3 className="text-slate-300 font-bold mb-2">{t('diagnosis.type1.label')}</h3>
                                <div className="text-2xl font-bold text-white mb-4 bg-slate-700/50 px-4 py-2 rounded-lg w-full">
                                    {t('diagnosis.type1.result')}
                                </div>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {t('diagnosis.type1.desc')}
                                </p>
                                <Link
                                    href={t('diagnosis.type1.linkUrl')}
                                    className="w-full py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
                                >
                                    {t('diagnosis.type1.linkText')} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Long Term */}
                            <div className="bg-gradient-to-br from-teal-600/20 to-teal-900/40 border-2 border-teal-500/50 rounded-2xl p-6 hover:border-teal-400 transition-colors flex flex-col items-center text-center relative group">
                                <div className="absolute -top-3 bg-teal-500 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    RECOMMENDED
                                </div>
                                <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/30">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-teal-200 font-bold mb-2">{t('diagnosis.type2.label')}</h3>
                                <div className="text-2xl font-bold text-white mb-4 bg-teal-500 px-4 py-2 rounded-lg w-full shadow-lg">
                                    {t('diagnosis.type2.result')}
                                </div>
                                <p className="text-teal-100/80 text-sm mb-6 leading-relaxed flex-grow">
                                    {t('diagnosis.type2.desc')}
                                </p>
                                <a
                                    href={AFFILIATE_LINKS.safetywing}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-xl bg-teal-500 text-white font-bold hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2"
                                >
                                    {t('diagnosis.type2.linkText')} <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">{t('comparison.title')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.type')}</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.safetywing')}</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.credit')}</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.japan')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-teal-50/50">
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.duration.label')}</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">{t('comparison.duration.safetywing')}</td>
                                    <td className="p-4 text-sm">{t('comparison.duration.credit')}</td>
                                    <td className="p-4 text-sm">{t('comparison.duration.japan')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.apply.label')}</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">{t('comparison.apply.safetywing')}</td>
                                    <td className="p-4 text-sm">{t('comparison.apply.credit')}</td>
                                    <td className="p-4 text-sm text-red-500">{t('comparison.apply.japan')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.cost.label')}</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">{t('comparison.cost.safetywing')}</td>
                                    <td className="p-4 text-sm">{t('comparison.cost.credit')}</td>
                                    <td className="p-4 text-sm">{t('comparison.cost.japan')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.home.label')}</td>
                                    <td className="p-4 text-sm font-bold text-teal-600">{t('comparison.home.safetywing')}</td>
                                    <td className="p-4 text-sm">{t('comparison.home.credit')}</td>
                                    <td className="p-4 text-sm">{t('comparison.home.japan')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-right">
                        <Link href="../nomad-info/credit-card" className="text-sm font-bold text-teal-600 hover:text-teal-700 hover:underline inline-flex items-center gap-1">
                            {t('comparison.credit_link')} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                {/* Why SafetyWing? (3 Benefits) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">{t('benefits.title')}</h2>
                    <div className="space-y-8">
                        {/* Benefit 1 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">1</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-teal-100 inline-flex items-center justify-center text-teal-600 font-bold text-sm mr-2">1</span>
                                    {t('benefits.1.title')}
                                </h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('benefits.1.desc') }} />
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">2</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-teal-100 inline-flex items-center justify-center text-teal-600 font-bold text-sm mr-2">2</span>
                                    {t('benefits.2.title')}
                                </h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('benefits.2.desc') }} />
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">3</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-teal-100 inline-flex items-center justify-center text-teal-600 font-bold text-sm mr-2">3</span>
                                    {t('benefits.3.title')}
                                </h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('benefits.3.desc') }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coverage Details FAQ */}
                <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <HelpCircle className="w-7 h-7 text-teal-500" />
                        {t('coverage.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">{t('coverage.bike.q')}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-green-600 font-bold">{t('coverage.bike.a')}</span><br />
                                {t('coverage.bike.desc')}
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">{t('coverage.dental.q')}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-amber-500 font-bold">{t('coverage.dental.a')}</span><br />
                                {t('coverage.dental.desc')}
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">{t('coverage.covid.q')}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-green-600 font-bold">{t('coverage.covid.a')}</span><br />
                                {t('coverage.covid.desc')}
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-2">{t('coverage.laptop.q')}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                <span className="text-amber-500 font-bold">{t('coverage.laptop.a')}</span><br />
                                {t('coverage.laptop.desc')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>

                    <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                        <CalendarDays className="w-6 h-6 text-teal-400" />
                        {t('pricing.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 relative z-10 items-center">
                        <div>
                            <p className="text-4xl font-bold mb-2 text-teal-400">{t('pricing.price')}<span className="text-lg text-slate-300 font-normal">{t('pricing.period')}</span></p>
                            <p className="text-sm text-slate-400 mb-6">{t('pricing.note')}</p>
                            <p className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('pricing.desc') }} />
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-white">{t('pricing.included.title')}</h3>
                            <ul className="space-y-3 text-sm text-slate-200">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> {t('pricing.included.1')}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> {t('pricing.included.2')}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> {t('pricing.included.3')}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400" /> {t('pricing.included.4')}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Important Considerations */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-amber-500" />
                        {t('deductible.title')}
                    </h2>
                    <p className="mb-6 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('deductible.desc') }} />
                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                        <h3 className="font-bold text-lg mb-3 text-amber-800">{t('deductible.boxTitle')}</h3>
                        <p className="text-sm text-amber-900 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.raw('deductible.boxDesc') }} />
                        <p className="text-xs text-amber-700 bg-amber-100/50 p-3 rounded">
                            {t('deductible.boxNote')}
                        </p>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="text-center bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 border border-teal-100">
                    <HeartPulse className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        {t('cta.title')}
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto" dangerouslySetInnerHTML={{ __html: t.raw('cta.desc') }} />
                    <a
                        href={AFFILIATE_LINKS.safetywing}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-teal-600 rounded-full hover:bg-teal-700 hover:shadow-lg hover:scale-105"
                    >
                        {t('cta.button')}
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>

                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": t('meta.title'),
                            "image": "/images/safetywing_hero.png",
                            "description": t('meta.desc'),
                            "author": {
                                "@type": "Person",
                                "name": "Nomad in Thailand",
                                "url": "https://nomad-th.com"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Nomad in Thailand",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://nomad-th.com/images/logo.png"
                                }
                            }
                        })
                    }}
                />
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
                                        "text": t.raw('faq.a1')
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.q2'),
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": t.raw('faq.a2')
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.q3'),
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": t.raw('faq.a3')
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": t('faq.q4'),
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": t.raw('faq.a4')
                                    }
                                }
                            ]
                        })
                    }}
                />
            </div>
        </article>
    );
}
