import { Mail, MessageCircle, ExternalLink, HelpCircle, Briefcase } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });
    return {
        title: t('title'),
        description: t('header.subtitle'), // Using subtitle as description for now
    };
}

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <div className="bg-primary/5 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6">
                        {t('header.title')}
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                        {t('header.subtitle')}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 py-16 px-4">
                <div className="max-w-3xl mx-auto space-y-8">

                    {/* Contact Option 1: General User Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 mb-2">{t('general.title')}</h2>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                    {t('general.desc')}
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                    <li>{t('general.items.0')}</li>
                                    <li>{t('general.items.1')}</li>
                                    <li>{t('general.items.2')}</li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href="https://forms.gle/Detn3QuqLe2kEy4y7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white font-bold w-full py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            {t('general.cta')} <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Contact Option 2: Business/Media */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 mb-2">{t('business.title')}</h2>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                    {t('business.desc')}
                                </p>
                                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                    <li>{t('business.items.0')}</li>
                                    <li>{t('business.items.1')}</li>
                                    <li>{t('business.items.2')}</li>
                                    <li>{t('business.items.3')}</li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href="https://forms.gle/4DU4CfPtEdavbhnD8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white font-bold w-full py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                        >
                            {t('business.cta')} <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
