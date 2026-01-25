"use client";

import { Mail, ArrowRight, Gift, Download } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NewsletterCTA({ isInline = false }: { isInline?: boolean }) {
    const t = useTranslations('Newsletter');

    if (isInline) {
        return (
            <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Gift className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">{t('inline.title')}</h3>
                        <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                            {t.rich('inline.desc', {
                                bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>
                            })}
                        </p>
                    </div>
                    <button
                        disabled
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-300 text-slate-500 font-bold cursor-not-allowed shadow-none whitespace-nowrap text-sm"
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        {t('inline.cta')}
                    </button>
                </div>
            </div>
        );
    }

    // Default centered layout for sections
    return (
        <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6 animate-pulse">
                <Gift className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 whitespace-pre-line">{t('section.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
                {t.rich('section.desc', {
                    bold: (chunks) => <span className="font-bold text-primary">{chunks}</span>
                })}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                    disabled
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-300 text-slate-500 font-bold text-lg cursor-not-allowed shadow-none flex items-center justify-center"
                >
                    <Download className="w-5 h-5 mr-2" />
                    {t('section.cta')}
                </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
                {t('section.note')}
            </p>
        </div>
    );
}
