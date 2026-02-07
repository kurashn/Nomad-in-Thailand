import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Smartphone, Wifi, MessageSquare, Globe, CheckCircle, AlertTriangle, Plane } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'SimGuide.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function SimGuidePage() {
    const t = useTranslations('SimGuide');

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/sim_guide_hero_photo.png"
                    alt="Thai SIM and SMS Guide"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
                    <Link href="../living" className="inline-flex items-center text-sm mb-4 text-white/90 hover:text-primary transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
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
                    <p className="leading-loose font-medium text-foreground/80 mb-6" dangerouslySetInnerHTML={{ __html: t.raw('intro.p1') }} />
                    <p className="leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: t.raw('intro.p2') }} /><br /><br />
                        <span dangerouslySetInnerHTML={{ __html: t.raw('intro.p3') }} />
                    </p>

                    <div className="mt-8">
                        <Link href="../nomad-info/bangkok-roadmap" className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1">
                            <span className="bg-primary/10 px-2 py-1 rounded">{t('intro.related')}</span>
                            {t('intro.checklist')} <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* Beginner's Basics */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-16">
                    <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        {t('basics.title')}
                    </h3>
                    <div className="space-y-4 text-sm text-blue-900/80">
                        <div>
                            <span className="font-bold text-blue-900 block">{t('basics.sim.term')}</span>
                            {t('basics.sim.desc')}
                        </div>
                        <div>
                            <span className="font-bold text-blue-900 block">{t('basics.roaming.term')}</span>
                            <span dangerouslySetInnerHTML={{ __html: t.raw('basics.roaming.desc') }} />
                        </div>
                        <div>
                            <span className="font-bold text-blue-900 block">{t('basics.dual.term')}</span>
                            {t('basics.dual.desc')}
                        </div>
                    </div>
                </div>

                {/* Cost Simulation */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg"><Wifi className="w-6 h-6" /></span>
                        {t('cost.title')}
                    </h2>
                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-100 text-slate-700 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-bold">{t('cost.headers.method')}</th>
                                    <th className="px-6 py-4 font-bold">{t('cost.headers.cost')}</th>
                                    <th className="px-6 py-4 font-bold">{t('cost.headers.feature')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-red-50/50">
                                    <td className="px-6 py-4 font-bold text-red-900">{t('cost.roaming.method')}</td>
                                    <td className="px-6 py-4 font-bold text-red-600">{t('cost.roaming.price')}</td>
                                    <td className="px-6 py-4 text-slate-600">{t('cost.roaming.desc')}</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="px-6 py-4 font-bold text-slate-900">{t('cost.wifi.method')}</td>
                                    <td className="px-6 py-4 font-bold text-slate-600">{t('cost.wifi.price')}</td>
                                    <td className="px-6 py-4 text-slate-600">{t('cost.wifi.desc')}</td>
                                </tr>
                                <tr className="bg-blue-50/50">
                                    <td className="px-6 py-4 font-bold text-blue-900 flex items-center gap-2">
                                        <Plane className="w-4 h-4 text-blue-600" />
                                        {t('cost.esim.method')}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-blue-600">{t('cost.esim.price')}</td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {t('cost.esim.desc')}{" "}
                                        <a href={AFFILIATE_LINKS.airalo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold inline-flex items-center gap-1">
                                            Airalo <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-green-50/50 border-l-4 border-green-500">
                                    <td className="px-6 py-4 font-bold text-green-900 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        {t('cost.local.method')}
                                    </td>
                                    <td className="px-6 py-4 font-bold text-green-600 text-lg">{t('cost.local.price')}</td>
                                    <td className="px-6 py-4 text-slate-600" dangerouslySetInnerHTML={{ __html: t.raw('cost.local.desc') }} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Strategy: Dual SIM */}
                <section className="mb-20">
                    <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
                            <Smartphone className="w-8 h-8 text-cyan-400" />
                            {t('dualSim.title')}
                        </h2>
                        <p className="mb-10 text-slate-300 text-center max-w-2xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('dualSim.desc') }} />

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {/* SIM 1 Card */}
                            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col relative overflow-hidden group hover:border-red-400/50 transition-colors">
                                <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-red-500/20">
                                    {t('dualSim.sim1.label')}
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-1">
                                        <Globe className="w-5 h-5" /> {t('dualSim.sim1.name')}
                                    </h3>
                                    <p className="text-sm text-slate-400">{t('dualSim.sim1.carrier')}</p>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">{t('dualSim.sim1.data.label')}</p>
                                        <p className="text-center font-bold text-red-400">{t('dualSim.sim1.data.value')}</p>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">{t('dualSim.sim1.usage.label')}</p>
                                        <p className="text-center font-bold text-white">{t('dualSim.sim1.usage.value')}</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50 text-center">
                                    <span className="text-2xl font-bold text-white">{t('dualSim.sim1.price.value')}</span>
                                    <span className="text-sm text-slate-400">{t('dualSim.sim1.price.unit')}</span>
                                </div>
                            </div>

                            {/* SIM 2 Card */}
                            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col relative overflow-hidden group hover:border-green-400/50 transition-colors">
                                <div className="absolute top-0 right-0 bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-green-500/20">
                                    {t('dualSim.sim2.label')}
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-1">
                                        <Wifi className="w-5 h-5" /> {t('dualSim.sim2.name')}
                                    </h3>
                                    <p className="text-sm text-slate-400">{t('dualSim.sim2.carrier')}</p>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">{t('dualSim.sim2.data.label')}</p>
                                        <p className="text-center font-bold text-green-400">{t('dualSim.sim2.data.value')}</p>
                                    </div>
                                    <div className="bg-slate-900/50 rounded-lg p-3">
                                        <p className="text-slate-400 text-xs text-center mb-1">{t('dualSim.sim2.usage.label')}</p>
                                        <p className="text-center font-bold text-white">{t('dualSim.sim2.usage.value')}</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50 text-center">
                                    <span className="text-sm text-slate-400">{t('dualSim.sim2.price.prefix')}</span>
                                    <span className="text-2xl font-bold text-white mx-1">{t('dualSim.sim2.price.value')}</span>
                                    <span className="text-sm text-slate-400">{t('dualSim.sim2.price.unit')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Part 1: Thai SIM Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Wifi className="w-6 h-6" /></span>
                        {t('thaiSim.title')}
                    </h2>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8 flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-orange-800 mb-1">{t('thaiSim.warning.title')}</h3>
                            <p className="text-sm text-orange-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: t.raw('thaiSim.warning.desc') }} />
                            <a href={AFFILIATE_LINKS.airalo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-orange-600 hover:text-orange-800 hover:underline inline-flex items-center gap-1 bg-white/50 px-2 py-1 rounded">
                                Check Airalo (eSIM) <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    <p className="mb-6 text-muted-foreground" dangerouslySetInnerHTML={{ __html: t.raw('thaiSim.desc') }} />

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* AIS */}
                        <div className="bg-white border-2 border-green-500 rounded-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('thaiSim.ais.badge')}</div>
                            <h3 className="text-xl font-bold text-green-600 mb-2">{t('thaiSim.ais.name')}</h3>
                            <p className="text-sm font-bold mb-4">{t('thaiSim.ais.sub')}</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> {t('thaiSim.ais.features.0')}</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> {t('thaiSim.ais.features.1')}</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" /> {t('thaiSim.ais.features.2')}</li>
                            </ul>
                        </div>

                        {/* True */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 relative overflow-hidden">
                            <h3 className="text-xl font-bold text-red-500 mb-2">{t('thaiSim.true.name')}</h3>
                            <p className="text-sm font-bold mb-4">{t('thaiSim.true.sub')}</p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" /> {t('thaiSim.true.features.0')}</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" /> {t('thaiSim.true.features.1')}</li>
                                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-slate-400 mt-0.5" /> {t('thaiSim.true.features.2')}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Part 2: Japan SMS Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-red-100 text-red-600 p-2 rounded-lg"><MessageSquare className="w-6 h-6" /></span>
                        {t('japanSim.title')}
                    </h2>
                    <p className="mb-6 text-muted-foreground" dangerouslySetInnerHTML={{ __html: t.raw('japanSim.desc') }} />

                    <div className="space-y-6">
                        {/* Rakuten Mobile */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-pink-600 mb-2">{t('japanSim.rakuten.name')}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-pink-100 text-pink-800 text-xs font-bold px-2 py-1 rounded">{t('japanSim.rakuten.badges.rec')}</span>
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">{t('japanSim.rakuten.badges.price')}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t.raw('japanSim.rakuten.desc') }} />
                        </div>

                        {/* povo 2.0 */}
                        <div className="bg-white border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-yellow-600 mb-2">{t('japanSim.povo.name')}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">{t('japanSim.povo.badges.cheap')}</span>
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">{t('japanSim.povo.badges.price')}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t.raw('japanSim.povo.desc') }} />
                        </div>
                    </div>
                </section>

                {/* Setup Guide */}
                <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Globe className="w-6 h-6 text-slate-700" />
                        {t('setup.title')}
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                            <div className="bg-slate-100 text-slate-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</div>
                            <div>
                                <p className="font-bold text-slate-800">{t('setup.step1.title')}</p>
                                <p className="text-xs text-muted-foreground">{t('setup.step1.desc')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                            <div className="bg-slate-100 text-slate-600 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</div>
                            <div>
                                <p className="font-bold text-slate-800">{t('setup.step2.title')}</p>
                                <p className="text-xs text-muted-foreground">{t('setup.step2.desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
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

                <section className="mb-12 mt-24">
                    <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q1')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('faq.a1') }} />
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q2')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('faq.a2') }} />
                        </details>
                        <details className="group bg-white border rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                            <summary className="flex items-center justify-between font-bold text-slate-800">
                                {t('faq.q3')}
                                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <p className="mt-3 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('faq.a3') }} />
                        </details>
                    </div>
                </section>

            </div>
        </article>
    );
}
