import { getTranslations } from 'next-intl/server';
import { Shield } from "lucide-react";

export async function generateMetadata() {
    const t = await getTranslations('Legal.tokushoho');
    return {
        title: `${t('title')} | TOTONOI THAI`,
    };
}

export default async function TokushohoPage() {
    const t = await getTranslations('Legal.tokushoho');

    const items = [
        'provider',
        'representative',
        'address',
        'contact',
        'price',
        'extra_fees',
        'payment_methods',
        'delivery',
        'cancellation',
        'environment'
    ];

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

                    <div className="space-y-6">
                        {items.map((item) => (
                            <div key={item} className="flex flex-col md:flex-row gap-2 md:gap-8 py-4 border-b border-slate-100 last:border-0">
                                <div className="md:w-1/3">
                                    <h2 className="text-sm font-bold text-slate-500">{t(`${item}.label`)}</h2>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-slate-800 whitespace-pre-line leading-relaxed text-sm md:text-base">
                                        {t(`${item}.value`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
