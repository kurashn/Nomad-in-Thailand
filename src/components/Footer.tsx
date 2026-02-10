"use client";

import { Link } from '@/i18n/routing';
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative w-24 h-24 mb-4">
                            <Image
                                src="/character/nomad-dog-hero-transparent.png"
                                alt={t('logoAlt')}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Contents Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-slate-800">{t('contents.title')}</h3>
                        <ul className="space-y-3">

                            <li><Link href="/nomad-info" className="text-slate-500 hover:text-blue-600 transition-colors">{t('contents.guide')}</Link></li>
                            {locale === 'ja' && (
                                <li><Link href="/nomad-info/community" className="text-slate-500 hover:text-blue-600 transition-colors">{t('contents.community')}</Link></li>
                            )}
                            <li><Link href="/nomad-info/sponsor" className="text-slate-500 hover:text-blue-600 transition-colors">{t('contents.sponsor')}</Link></li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-slate-800">{t('links.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.youtube.com/@nomad-thai" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors">
                                    {t('links.youtube')}
                                </a>
                            </li>
                            <li><Link href="/contact" className="text-slate-500 hover:text-blue-600 transition-colors">{t('links.contact')}</Link></li>
                            <li>
                                <a href="https://lin.ee/E1QFFRn" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#06C755] transition-colors font-bold">
                                    {t('links.newsletter')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
                    {t('copyright')}
                </div>
            </div>
        </footer>
    );
}
