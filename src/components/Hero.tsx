"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const t = useTranslations('Hero');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animations for children
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }, // Smooth ease-out
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
            {/* Background Image with Parallax-like effect (simplest via fixed/absolute) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/wellness_resort_sauna.png"
                    alt="Tropical Wellness Sauna Resort in Thailand"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-slate-900/90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 opacity-80" />
            </div>

            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10 pb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Logo */}
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <Image
                        src="/character/totonoi-logo.png" unoptimized
                        alt="TOTONOI THAI"
                        width={120}
                        height={120}
                        className="drop-shadow-2xl"
                    />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-white drop-shadow-2xl font-serif"
                >
                    {t('title')}
                </motion.h1>

                {/* Subtitle & Description */}
                <motion.div variants={itemVariants} className="mb-12">
                    <p className="text-lg md:text-3xl text-slate-100 font-bold drop-shadow-lg whitespace-pre-line leading-relaxed">
                        {t.rich('subtitle', {
                            nowrap: (chunks) => <span className="inline-block md:whitespace-nowrap">{chunks}</span>
                        })}
                    </p>
                    <p className="text-base md:text-xl text-slate-200/90 mt-6 max-w-3xl mx-auto leading-relaxed font-medium">
                        {t.rich('description', {
                            nowrap: (chunks) => <span className="inline-block md:whitespace-nowrap">{chunks}</span>
                        })}
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-5"
                >
                    <a href="https://lin.ee/DqxeADk" target="_blank" rel="noopener noreferrer" className="group">
                        <motion.div
                            className="px-5 py-3.5 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-sm md:text-xl flex items-center gap-2 md:gap-3 shadow-[0_10px_40px_-10px_rgba(45,212,191,0.5)] border border-white/20 backdrop-blur-md"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 50px -10px rgba(45,212,191,0.6)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('cta')}
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                            </motion.span>
                        </motion.div>
                    </a>

                    {/* Password Text */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm font-bold text-teal-400 mt-2 tracking-wider"
                    >
                        {t('password')}
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Decorative gradient at the bottom to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
