"use client";

import { Mail, ArrowRight, Gift, Download } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NewsletterCTA({ isInline = false }: { isInline?: boolean }) {
    const t = useTranslations('Newsletter');

    if (isInline) {
        return (
            <div className="my-12 p-8 rounded-2xl bg-[#06C755]/5 border border-[#06C755]/20">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#06C755]/20">
                        <Gift className="w-8 h-8 text-[#06C755]" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-[#06C755]">{t('inline.title')}</h3>
                        <p className="text-slate-600 text-sm mb-4 whitespace-pre-line">
                            {t.rich('inline.desc', {
                                bold: (chunks) => <span className="font-bold text-[#06C755]">{chunks}</span>
                            })}
                        </p>
                    </div>
                    <a
                        href="https://lin.ee/VRrmYI1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold transition-all shadow-md whitespace-nowrap text-sm group"
                    >
                        <span className="mr-2">LINEで登録</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {/* {t('inline.cta')} */}
                    </a>
                </div>
            </div>
        );
    }

    // Default centered layout for sections
    return (
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-[#06C755]/10 mb-6 animate-pulse">
                <Gift className="w-8 h-8 text-[#06C755]" />
            </div>
            <h2 className="text-3xl font-bold mb-4 whitespace-pre-line text-slate-800">{t('section.title')}</h2>
            <p className="text-lg text-slate-600 mb-8 text-balance">
                {t.rich('section.desc', {
                    bold: (chunks) => <span className="font-bold text-[#06C755]">{chunks}</span>
                })}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                    href="https://lin.ee/VRrmYI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#06C755]/20 flex items-center justify-center group"
                >
                    <span className="mr-2">LINEで特典を受け取る</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {/* {t('section.cta')} */}
                </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
                {t('section.note')}
            </p>
        </div>
    );
}
