"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const t = useTranslations('Hero');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/fvbg.png"
                    alt="TOTONOI THAI Retreat"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay: dark on the left where text is, lighter on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020B18]/85 via-[#020B18]/60 to-[#020B18]/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020B18]" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-64 pb-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-black tracking-widest mb-4 text-white leading-tight uppercase"
                    style={{
                        fontFamily: "var(--font-inter), 'Helvetica Neue', Arial, sans-serif",
                        textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                        letterSpacing: "0.15em"
                    }}
                >
                    TOTONOI THAI
                </motion.h1>

                {/* Subtitle */}
                <motion.div variants={itemVariants} className="mb-10 max-w-xl">
                    <p
                        className="text-lg md:text-2xl text-white font-bold leading-snug mb-4"
                        style={{
                            fontFamily: "var(--font-noto-sans-jp), sans-serif",
                            textShadow: "0 1px 10px rgba(0,0,0,0.7)"
                        }}
                    >
                        {t('subtitle')}
                    </p>
                    <p
                        className="text-sm md:text-base text-white/75 leading-loose whitespace-pre-line font-normal"
                        style={{
                            fontFamily: "var(--font-noto-sans-jp), sans-serif",
                            textShadow: "0 1px 8px rgba(0,0,0,0.8)"
                        }}
                    >
                        {t('description')}
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-start gap-6"
                >
                    <a
                        href="https://lin.ee/VRrmYI1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-5 py-3 md:px-8 md:py-4 rounded-full bg-[#00A37E] hover:bg-[#008c6a] text-white font-bold text-sm md:text-base shadow-[0_8px_30px_rgba(0,163,126,0.5)] transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                        {t('cta')}
                        <span className="bg-white/20 rounded-full p-2">
                            <ArrowRight className="w-5 h-5" />
                        </span>
                    </a>

                    {/* Feature pills */}
                    <div className="flex flex-col sm:flex-row gap-2 text-xs font-bold text-white/90">
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit">
                            <svg className="w-3.5 h-3.5 text-[#00A37E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>ウェルネス体験</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit">
                            <svg className="w-3.5 h-3.5 text-[#00A37E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span>本格リトリート</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit">
                            <Users className="w-3.5 h-3.5 text-[#00A37E] flex-shrink-0" />
                            <span>コミュニティ</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020B18] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
