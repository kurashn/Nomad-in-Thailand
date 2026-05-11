"use client";

import { Link } from '@/i18n/routing';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-[#0a121d] pt-24 pb-12 relative overflow-hidden text-white border-t border-white/5">
            {/* Top Subtle Gradient */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0e1d2c] to-transparent pointer-events-none opacity-50"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">
                    
                    {/* Left: Brand Section */}
                    <div className="lg:w-[40%] flex flex-col">
                        {/* Logo and Tagline */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 relative">
                                <Image
                                    src="/character/totonoi-logo.png" unoptimized
                                    alt={t('logoAlt')}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-black tracking-widest" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp), sans-serif" }}>TOTONOI THAI</span>
                        </div>
                        <p className="text-white/60 text-xs font-bold tracking-widest mb-10" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                            {t('tagline')}
                        </p>

                        {/* Main Copy */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest leading-snug whitespace-pre-line" style={{ fontFamily: "var(--font-zen-old-mincho), serif" }}>
                            {t('mainCopy')}
                        </h2>
                        <p className="text-white/70 text-sm font-medium mb-12" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                            {t('desc')}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">

                            <a href="https://www.youtube.com/@nomad-thai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0a121d] transition-all duration-300">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Navigation Links */}
                    <div className="lg:w-[50%] grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 lg:pt-4">
                        
                        {/* Col 1 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-sm tracking-widest" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>コンテンツ</h3>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>ホーム</Link></li>
                                <li><Link href="/#about" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>TOTONOI THAIとは</Link></li>
                                <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>タイ生活情報</Link></li>
                            </ul>
                        </div>

                        {/* Col 2 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-sm tracking-widest" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>メディア</h3>
                            <ul className="space-y-4">
                                <li><a href="https://lin.ee/VRrmYI1" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>公式LINE</a></li>
                                <li><a href="https://www.youtube.com/@nomad-thai" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>公式YouTube</a></li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="font-bold text-white mb-6 text-sm tracking-widest" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>規約・ポリシー</h3>
                            <ul className="space-y-4">
                                <li><Link href="/legal/privacy" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>プライバシーポリシー</Link></li>
                                <li><Link href="/legal/tos" className="text-white/60 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>利用規約</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="flex justify-start text-white/40 text-[11px] font-medium tracking-widest" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {t('copyright')}
                </div>
            </div>
        </footer>
    );
}
