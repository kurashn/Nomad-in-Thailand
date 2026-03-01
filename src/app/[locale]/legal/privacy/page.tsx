import { getTranslations } from 'next-intl/server';
import { Shield } from "lucide-react";

export async function generateMetadata() {
    const t = await getTranslations('Legal.privacy');
    return {
        title: `${t('title')} | TOTONOI THAI`,
    };
}

export default async function PrivacyPage() {
    const t = await getTranslations('Legal.privacy');

    return (
        <div className="bg-slate-50 min-h-screen py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                            <Shield className="w-6 h-6 text-teal-600" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                            {t('title')}
                        </h1>
                    </div>

                    <div className="prose prose-slate prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-800 prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-loose prose-li:text-slate-600 max-w-none">
                        <div className="text-slate-700 leading-relaxed space-y-6">
                            {t('content').split('\n\n').map((paragraph, index) => {
                                // Simple check to see if it looks like a heading (e.g., "1.", "2.", "第1条", etc.)
                                const isHeading = /^(\d+\.|第\d+(条|項))/.test(paragraph.trim());

                                if (isHeading) {
                                    const lines = paragraph.split('\n');
                                    const heading = lines[0];
                                    const body = lines.slice(1).join('\n');
                                    return (
                                        <div key={index} className="mt-8 mb-4">
                                            <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">{heading}</h2>
                                            {body && <p className="text-slate-600 leading-loose whitespace-pre-line">{body}</p>}
                                        </div>
                                    );
                                }
                                return <p key={index} className="text-slate-600 leading-loose whitespace-pre-line">{paragraph}</p>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
