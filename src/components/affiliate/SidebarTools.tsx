import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Smartphone, ArrowRight, Lock, Users, Megaphone } from 'lucide-react';

export default function SidebarTools() {
    const t = useTranslations('SidebarTools');

    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-24">
            <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0">
                    <Image
                        src="/character/nomad-dog-hero-transparent.png"
                        alt="Nomad Dog"
                        fill
                        className="object-contain"
                    />
                </div>
                {t('title')}
            </h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {t('description')}
            </p>

            <div className="space-y-4">
                {/* 1. Insurance */}
                <Link href="/nomad-info/safetywing" className="block group">
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm mb-1 group-hover:text-teal-600 transition-colors">{t('insurance.name')}</div>
                            <p className="text-xs text-slate-500 leading-relaxed mb-2 line-clamp-2">{t('insurance.desc')}</p>
                            <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:underline">
                                {t('insurance.link')} <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="h-px bg-slate-100 mx-2" />

                {/* 2. Wise */}
                <Link href="/nomad-info/wise" className="block group">
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-[#9fe870] flex items-center justify-center text-slate-900 shrink-0 group-hover:scale-110 transition-transform">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm mb-1 group-hover:text-[#2a9d8f] transition-colors">{t('money.name')}</div>
                            <p className="text-xs text-slate-500 leading-relaxed mb-2 line-clamp-2">{t('money.desc')}</p>
                            <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:underline">
                                {t('money.link')} <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="h-px bg-slate-100 mx-2" />

                {/* 3. eSIM */}
                <Link href="/nomad-info/airalo" className="block group">
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-110 transition-transform">
                            <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm mb-1 group-hover:text-amber-600 transition-colors">{t('esim.name')}</div>
                            <p className="text-xs text-slate-500 leading-relaxed mb-2 line-clamp-2">{t('esim.desc')}</p>
                            <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:underline">
                                {t('esim.link')} <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="h-px bg-slate-100 mx-2" />

                {/* 4. VPN */}
                <Link href="/nomad-info/nordvpn" className="block group">
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">{t('vpn.name')}</div>
                            <p className="text-xs text-slate-500 leading-relaxed mb-2 line-clamp-2">{t('vpn.desc')}</p>
                            <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:underline">
                                {t('vpn.link')} <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Ad Space */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                <div className="text-[10px] text-slate-400 mb-2 text-center">{t('ad')}</div>

                {/* Community Banner - Custom Image */}
                <a href="https://lin.ee/E1QFFRn" target="_blank" rel="noopener noreferrer" className="block group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                    <div className="relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/community_banner_custom.jpg"
                            alt="Thai Nomad Community"
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                {t('banner.community.cta')}
                            </div>
                        </div>
                    </div>
                </a>

                {/* THE RESET Retreat Banner */}
                <a href="https://www.the-reset-th.com/" target="_blank" rel="noopener noreferrer" className="block group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                    <div className="relative overflow-hidden rounded-xl">
                        <Image
                            src="/images/reset-banner.jpeg"
                            alt="THE RESET - Digital Detox Retreat"
                            width={400}
                            height={400}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                {t('banner.retreat.cta')}
                            </div>
                        </div>
                    </div>
                </a>

                {/* Sponsor Banner */}
                <Link href="/nomad-info/sponsor" className="block group">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 text-white hover:shadow-lg transition-all border border-slate-700">
                        <div className="flex items-center gap-3 mb-2">
                            <Megaphone className="w-5 h-5 text-amber-400" />
                            <span className="font-bold text-sm">{t('banner.sponsor.title')}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed mb-3">{t('banner.sponsor.desc')}</p>
                        <div className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                            {t('banner.sponsor.cta')} <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
