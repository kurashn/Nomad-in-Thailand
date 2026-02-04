import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { tools } from '@/data/tools';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'NomadTools' });

    return {
        title: `${t('title')} | Nomad in Thailand`,
        description: t('description'),
    };
}

export default async function EssentialToolsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'NomadTools' });

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/bangkok_nomad_lifestyle_hero.png" // Using a relevant existing image
                        alt="Nomad Lifestyle"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        Nomad Essentials
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight whitespace-pre-line drop-shadow-lg">
                        {t('title')}
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed whitespace-pre-line drop-shadow-md">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {tools.map((tool) => (
                        <div key={tool.id} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                            {/* Image Section */}
                            <div className="w-full md:w-2/5 relative h-48 md:h-auto bg-slate-100 overflow-hidden">
                                <Image
                                    src={tool.image}
                                    alt={t(`tools.${tool.id}.title`)}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-sm border border-white/20">
                                    {t(`tools.${tool.id}.feature`)}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                                        {t(`tools.${tool.id}.title`)}
                                    </h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                        {t(`tools.${tool.id}.desc`)}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {tool.internalLink && (
                                        <Link
                                            href={tool.internalLink as any}
                                            className="flex items-center justify-center w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30"
                                        >
                                            {t(`tools.${tool.id}.cta`)}
                                            <ArrowUpRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    )}
                                    {tool.id !== 'creditcard' && (
                                        <a
                                            href={tool.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-full py-2.5 px-4 border border-slate-200 text-slate-500 font-medium rounded-xl hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300 transition-colors text-sm"
                                        >
                                            {t('officialSite')}
                                            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xs text-slate-400/80 max-w-lg mx-auto leading-relaxed">
                        {t('disclaimer')}
                    </p>
                </div>
            </div>
        </div>
    );
}
