import { ShieldCheck, CreditCard, Smartphone, ArrowRight, Lock, Plane, Coffee, Building2, Coins, MapPin, Stethoscope, Signal, Train } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'NomadInfo' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function NomadInfoPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'NomadInfo' });


    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${t('title')} | Nomad in Thailand`,
        "description": t('description'),
        "url": `https://nomad-th.com/${locale}/nomad-info`
    };

    const guideArticles = [
        { href: "/nomad-info/dtv-visa", title: t('guides.dtvVisa'), desc: t('guides.dtvVisaDesc'), icon: Plane, color: "bg-indigo-500", shadow: "shadow-indigo-500/20" },
        { href: "/nomad-info/bangkok-roadmap", title: t('guides.bangkokRoadmap'), desc: t('guides.bangkokRoadmapDesc'), icon: MapPin, color: "bg-rose-500", shadow: "shadow-rose-500/20" },
        { href: "/nomad-info/cafe-guide", title: t('guides.cafeGuide'), desc: t('guides.cafeGuideDesc'), icon: Coffee, color: "bg-amber-600", shadow: "shadow-amber-600/20" },
        { href: "/nomad-info/coworking-guide", title: t('guides.coworkingGuide'), desc: t('guides.coworkingGuideDesc'), icon: Building2, color: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
        { href: "/nomad-info/tax-money-guide", title: t('guides.taxMoneyGuide'), desc: t('guides.taxMoneyGuideDesc'), icon: Coins, color: "bg-emerald-500", shadow: "shadow-emerald-500/20" },
        { href: "/living/area-guide", title: t('guides.areaGuide'), desc: t('guides.areaGuideDesc'), icon: MapPin, color: "bg-violet-500", shadow: "shadow-violet-500/20" },
        { href: "/living/medical-guide", title: t('guides.medicalGuide'), desc: t('guides.medicalGuideDesc'), icon: Stethoscope, color: "bg-red-500", shadow: "shadow-red-500/20" },
        { href: "/living/sim-guide", title: t('guides.simGuide'), desc: t('guides.simGuideDesc'), icon: Signal, color: "bg-orange-500", shadow: "shadow-orange-500/20" },
        { href: "/living/transport-guide", title: t('guides.transportGuide'), desc: t('guides.transportGuideDesc'), icon: Train, color: "bg-sky-500", shadow: "shadow-sky-500/20" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    {t('heading')}
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl whitespace-pre-line">
                    {t('intro')}
                </p>
            </div>

            {/* Starter Kit Section */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                <div className="relative z-10 mb-8">
                    <span className="text-teal-400 font-bold tracking-wider text-sm uppercase mb-2 block">{t('starterKit.label')}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('starterKit.title')}</h2>
                    <p className="text-slate-400">{t('starterKit.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                    {/* Insurance */}
                    <Link href="/nomad-info/safetywing" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-bold mb-1">{t('starterKit.insurance')}</h3>
                        <p className="text-slate-400 text-sm mb-4">SafetyWing</p>
                        <div className="flex items-center text-teal-400 text-sm font-bold group-hover:text-teal-300">
                            {t('starterKit.checkReview')} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>

                    {/* Money */}
                    <Link href="/nomad-info/wise" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 bg-[#9fe870] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#9fe870]/20">
                            <CreditCard className="w-6 h-6 text-slate-900" />
                        </div>
                        <h3 className="text-white font-bold mb-1">{t('starterKit.money')}</h3>
                        <p className="text-slate-400 text-sm mb-4">Wise</p>
                        <div className="flex items-center text-[#9fe870] text-sm font-bold group-hover:text-white">
                            {t('starterKit.checkReview')} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>

                    {/* Connectivity */}
                    <Link href="/nomad-info/airalo" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-bold mb-1">{t('starterKit.esim')}</h3>
                        <p className="text-slate-400 text-sm mb-4">Airalo</p>
                        <div className="flex items-center text-amber-400 text-sm font-bold group-hover:text-amber-300">
                            {t('starterKit.checkReview')} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>

                    {/* VPN */}
                    <Link href="/nomad-info/nordvpn" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                            <Lock className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-bold mb-1">{t('starterKit.vpn')}</h3>
                        <p className="text-slate-400 text-sm mb-4">NordVPN</p>
                        <div className="flex items-center text-blue-400 text-sm font-bold group-hover:text-blue-300">
                            {t('starterKit.checkReview')} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Guide Articles Section */}
            <div className="mb-16">
                <div className="mb-8">
                    <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">{t('guides.label')}</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">{t('guides.title')}</h2>
                    <p className="text-slate-500">{t('guides.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guideArticles.map((guide) => {
                        const Icon = guide.icon;
                        return (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${guide.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg ${guide.shadow}`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                                    {guide.desc}
                                </p>
                                <div className="flex items-center text-teal-600 text-sm font-bold group-hover:text-teal-500">
                                    {t('guides.readMore')} <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}
