import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone, CheckCircle, AlertTriangle, Plane } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'AiraloGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function AiraloPage() {
    const t = useTranslations('AiraloGuide');
    const tCommon = useTranslations('Common');

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/airalo_hero.png"
                    alt="Airalo eSIM Guide"
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
                        href={AFFILIATE_LINKS.airalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    >
                        <span>{t('affiliate')}</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Comparison Table */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">{t('comparison.title')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.method')}</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.cost')}</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.effort')}</th>
                                    <th className="p-4 text-left text-sm font-bold text-slate-600">{t('comparison.headers.feature')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-blue-50/50">
                                    <td className="p-4 font-bold text-blue-600 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> {t('comparison.airalo.name')}
                                    </td>
                                    <td className="p-4 text-sm">{t('comparison.airalo.cost')}<br /><span className="text-xs text-slate-500">{t('comparison.airalo.costSub')}</span></td>
                                    <td className="p-4 text-sm text-green-600 font-bold">{t('comparison.airalo.effort')}<br /><span className="text-xs font-normal text-slate-500">{t('comparison.airalo.effortSub')}</span></td>
                                    <td className="p-4 text-sm">{t('comparison.airalo.desc')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.local.name')}</td>
                                    <td className="p-4 text-sm">{t('comparison.local.cost')}</td>
                                    <td className="p-4 text-sm text-red-500 font-bold">{t('comparison.local.effort')}<br /><span className="text-xs font-normal text-slate-500">{t('comparison.local.effortSub')}</span></td>
                                    <td className="p-4 text-sm">{t('comparison.local.desc')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.wifi.name')}</td>
                                    <td className="p-4 text-sm">{t('comparison.wifi.cost')}</td>
                                    <td className="p-4 text-sm">{t('comparison.wifi.effort')}<br /><span className="text-xs text-slate-500">{t('comparison.wifi.effortSub')}</span></td>
                                    <td className="p-4 text-sm">{t('comparison.wifi.desc')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-700">{t('comparison.roaming.name')}</td>
                                    <td className="p-4 text-sm text-red-500 font-bold">{t('comparison.roaming.cost')}<br /><span className="text-xs font-normal text-slate-500">{t('comparison.roaming.costSub')}</span></td>
                                    <td className="p-4 text-sm">{t('comparison.roaming.effort')}<br /><span className="text-xs text-slate-500">{t('comparison.roaming.effortSub')}</span></td>
                                    <td className="p-4 text-sm">{t('comparison.roaming.desc')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Honest Review (Pros & Cons) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">{t('review.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-blue-600 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" /> {t('review.pros.title')}
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">・</span>
                                    <span><strong>{t('review.pros.1.bold')}</strong>：{t('review.pros.1.text')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">・</span>
                                    <span><strong>{t('review.pros.2.bold')}</strong>：{t('review.pros.2.text')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">・</span>
                                    <span><strong>{t('review.pros.3.bold')}</strong>：{t('review.pros.3.text')}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-red-500 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> {t('review.cons.title')}
                            </h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">・</span>
                                    <span><strong>{t('review.cons.1.bold')}</strong>：{t('review.cons.1.text')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">・</span>
                                    <span><strong>{t('review.cons.2.bold')}</strong>：{t('review.cons.2.text')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">・</span>
                                    <span><strong>{t('review.cons.3.bold')}</strong>：{t('review.cons.3.text')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What is eSIM? */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Smartphone className="w-8 h-8 text-blue-500" />
                        {t('whatIsEsim.title')}
                    </h2>
                    <p className="mb-6 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('whatIsEsim.desc') }} />
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <h3 className="font-bold text-lg mb-3 text-red-500">{t('whatIsEsim.old.title')}</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> {t('whatIsEsim.old.1')}</li>
                                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> {t('whatIsEsim.old.2')}</li>
                                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> {t('whatIsEsim.old.3')}</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('whatIsEsim.new.badge')}</div>
                            <h3 className="font-bold text-lg mb-3 text-blue-600">{t('whatIsEsim.new.title')}</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> {t('whatIsEsim.new.1')}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> {t('whatIsEsim.new.2')}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> {t('whatIsEsim.new.3')}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Airalo? (3 Benefits) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8">{t('benefits.title')}</h2>

                    <div className="space-y-8">
                        {/* Benefit 1 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600 font-bold text-sm mr-2">1</span>
                                    {t('benefits.1.title')}
                                </h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('benefits.1.desc') }} />
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                                <div className="h-full w-0.5 bg-slate-100 my-2"></div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600 font-bold text-sm mr-2">2</span>
                                    {t('benefits.2.title')}
                                </h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('benefits.2.desc') }} />
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 md:block">
                                    <span className="md:hidden w-8 h-8 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600 font-bold text-sm mr-2">3</span>
                                    {t('benefits.3.title')}
                                </h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('benefits.3.desc') }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-32 pointer-events-none"></div>

                    <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        {t('steps.title')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">01</div>
                            <h3 className="font-bold text-lg mb-2">{t('steps.1.title')}</h3>
                            <p className="text-sm text-slate-300">{t('steps.1.desc')}</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">02</div>
                            <h3 className="font-bold text-lg mb-2">{t('steps.2.title')}</h3>
                            <p className="text-sm text-slate-300">{t('steps.2.desc')}</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">03</div>
                            <h3 className="font-bold text-lg mb-2">{t('steps.3.title')}</h3>
                            <p className="text-sm text-slate-300">{t('steps.3.desc')}</p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q1')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a1')}
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q2')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                                {t('faq.a2')}
                            </p>
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
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

                {/* Final CTA */}
                <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
                    <Plane className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        {t('cta.title')}
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto" dangerouslySetInnerHTML={{ __html: t.raw('cta.desc') }} />
                    <a
                        href={AFFILIATE_LINKS.airalo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:scale-105"
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
                            "image": "/images/airalo_hero.png",
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
                                }
                            ]
                        })
                    }}
                />
            </div>
        </article>
    );
}
