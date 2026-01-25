import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from '@/i18n/routing';
import { ArrowLeft, Wifi, MapPin, Smartphone, CreditCard, Zap, HeartPulse, MessageCircle, AlertTriangle, ShoppingBag, Sun, Users, Plane, Coffee } from "lucide-react";
import PrintButton from "@/components/PrintButton";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'CheatSheet.meta' });
    return {
        title: t('title'),
        description: t('desc'),
        robots: {
            index: false,
            follow: false,
        },
    };
}

export default function NomadCheatSheetPage() {
    const t = useTranslations('CheatSheet');

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans print:p-0 p-8">
            {/* Navigation (Hidden in Print) */}
            <div className="print:hidden mb-8 max-w-4xl mx-auto flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <Link href="/nomad-info/bangkok-map" className="flex items-center text-slate-600 hover:text-primary font-bold">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('nav.back')}
                </Link>
                <div className="text-right">
                    <p className="text-sm text-slate-500 mb-2">{t('nav.printHint')}</p>
                    <PrintButton />
                </div>
            </div>

            {/* Print Content Container (A4 Aspect Ratio: 210mm x 297mm) */}
            <div className="max-w-[210mm] mx-auto bg-white print:border-0 border border-slate-200 shadow-2xl print:shadow-none p-[10mm] min-h-[297mm] h-[297mm] flex flex-col relative overflow-hidden text-[10px] leading-snug print:text-black">

                {/* Header */}
                <header className="mb-6 border-b-4 border-slate-900 pb-3 flex justify-between items-end shrink-0">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="bg-slate-900 text-white font-bold px-3 py-1 text-xs rounded-full">{t('header.edition')}</span>
                            <span className="text-slate-500 font-bold text-xs tracking-wider">{t('header.official')}</span>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mt-2">
                            {t('header.title1')}<br />
                            <span className="text-blue-600">{t('header.title2')}</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-slate-900 text-lg">Nomad in Thailand</p>
                        <p className="text-xs text-slate-500">nomad-th.com</p>
                    </div>
                </header>

                {/* 2-Column Grid Layout (Wider, more readable columns) */}
                <div className="grid grid-cols-2 gap-8 flex-grow h-full">

                    {/* === LEFT COLUMN: ESSENTIALS & SURVIVAL === */}
                    <div className="flex flex-col gap-5">

                        {/* Section: Visa Strategy (Card Style) */}
                        <section className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <h2 className="flex items-center gap-2 font-bold text-blue-900 mb-3 text-sm border-b border-blue-200 pb-2">
                                <Plane className="w-4 h-4" /> {t('visa.title')}
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <strong className="text-blue-900 text-xs">{t('visa.dtv.name')}</strong>
                                        <span className="bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">{t('visa.dtv.badge')}</span>
                                    </div>
                                    <p className="text-slate-700">{t('visa.dtv.desc')}</p>
                                </div>
                                <div className="pt-2 border-t border-blue-200/50">
                                    <strong className="block text-blue-900 text-xs mb-1">{t('visa.tourist.name')}</strong>
                                    <p className="text-slate-700">{t('visa.tourist.desc')}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Essential Apps */}
                        <section>
                            <h2 className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm border-b-2 border-slate-900 pb-1">
                                <Smartphone className="w-4 h-4" /> {t('apps.title')}
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="bg-slate-100 p-1.5 rounded text-slate-700 font-bold w-12 text-center text-xs shrink-0">{t('apps.transport.label')}</div>
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <strong className="text-slate-900 text-xs">{t('apps.transport.name')}</strong>
                                            <span className="text-[9px] text-slate-500">{t('apps.transport.sub')}</span>
                                        </div>
                                        <p className="text-slate-600 mt-0.5">{t('apps.transport.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-slate-100 p-1.5 rounded text-slate-700 font-bold w-12 text-center text-xs shrink-0">{t('apps.short.label')}</div>
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <strong className="text-slate-900 text-xs">{t('apps.short.name')}</strong>
                                            <span className="text-[9px] text-slate-500">{t('apps.short.sub')}</span>
                                        </div>
                                        <p className="text-slate-600 mt-0.5">{t('apps.short.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-slate-100 p-1.5 rounded text-slate-700 font-bold w-12 text-center text-xs shrink-0">{t('apps.pay.label')}</div>
                                    <div>
                                        <div className="flex items-baseline gap-2">
                                            <strong className="text-slate-900 text-xs">{t('apps.pay.name')}</strong>
                                            <span className="text-[9px] text-slate-500">{t('apps.pay.sub')}</span>
                                        </div>
                                        <p className="text-slate-600 mt-0.5">{t('apps.pay.desc')}</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* Section: Medical & Safety */}
                        <section>
                            <h2 className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm border-b-2 border-slate-900 pb-1">
                                <HeartPulse className="w-4 h-4" /> {t('medical.title')}
                            </h2>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="bg-red-50 p-2 rounded border border-red-100">
                                    <strong className="block text-red-800 text-xs mb-1">{t('medical.samitivej.name')}</strong>
                                    <span className="text-slate-600 text-[9px]">{t('medical.samitivej.badge')}</span>
                                </div>
                                <div className="bg-red-50 p-2 rounded border border-red-100">
                                    <strong className="block text-red-800 text-xs mb-1">{t('medical.blez.name')}</strong>
                                    <span className="text-slate-600 text-[9px]">{t('medical.blez.badge')}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-bold text-slate-700 bg-slate-100 p-2 rounded">
                                <span>{t('medical.ambulance')}</span>
                                <span>{t('medical.police')}</span>
                            </div>
                        </section>

                        {/* Section: Survival Thai */}
                        <section className="flex-grow">
                            <h2 className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm border-b-2 border-slate-900 pb-1">
                                <MessageCircle className="w-4 h-4" /> {t('thai.title')}
                            </h2>
                            <table className="w-full text-left bg-slate-50 rounded-lg overflow-hidden border border-slate-100">
                                <tbody className="text-slate-700 text-[11px]">
                                    {[0, 1, 2, 3].map((i) => (
                                        <tr key={i} className="border-b border-slate-200">
                                            <td className="font-bold py-2 px-3">{t(`thai.items.${i}.th`)}</td>
                                            <td className="py-2 px-3 text-slate-600">{t(`thai.items.${i}.ja`)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>


                    {/* === RIGHT COLUMN: WORK, LIVING & BUDGET === */}
                    <div className="flex flex-col gap-5">

                        {/* Section: Real Budget (Highlighted) */}
                        <section className="bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm">
                            <h2 className="flex items-center gap-2 font-bold text-green-800 mb-3 text-sm border-b border-green-200 pb-2">
                                <CreditCard className="w-4 h-4" /> {t('budget.title')}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <strong className="block text-green-900 text-xs">{t('budget.economy.name')}</strong>
                                        <span className="text-[10px] text-green-700">{t('budget.economy.desc')}</span>
                                    </div>
                                    <div className="text-right">
                                        <strong className="block text-green-900 text-xs">{t('budget.standard.name')}</strong>
                                        <span className="text-[10px] text-green-700">{t('budget.standard.desc')}</span>
                                    </div>
                                </div>
                                <div className="border-t border-green-200 pt-2">
                                    <div className="flex justify-between items-center text-xs">
                                        <strong className="text-green-900">{t('budget.luxury.name')}</strong>
                                        <span className="text-green-700 ml-2">{t('budget.luxury.desc')}</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Nomad Workflow */}
                        <section>
                            <h2 className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm border-b-2 border-slate-900 pb-1">
                                <Wifi className="w-4 h-4" /> {t('workflow.title')}
                            </h2>
                            <div className="space-y-0 pl-2">
                                {/* Timeline Item 1 */}
                                <div className="border-l-2 border-slate-300 pl-4 pb-6 relative">
                                    <div className="absolute -left-[7px] top-0 w-3 h-3 bg-slate-900 rounded-full"></div>
                                    <strong className="block text-slate-900 text-xs mb-0.5">{t('workflow.morning.time')}</strong>
                                    <p className="text-slate-600">{t('workflow.morning.desc')}</p>
                                </div>
                                {/* Timeline Item 2 */}
                                <div className="border-l-2 border-slate-300 pl-4 pb-6 relative">
                                    <div className="absolute -left-[7px] top-0 w-3 h-3 bg-slate-400 rounded-full"></div>
                                    <strong className="block text-slate-900 text-xs mb-0.5">{t('workflow.lunch.time')}</strong>
                                    <p className="text-slate-600">{t('workflow.lunch.desc')}</p>
                                </div>
                                {/* Timeline Item 3 */}
                                <div className="border-l-2 border-transparent pl-4 relative">
                                    <div className="absolute -left-[7px] top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                                    <strong className="block text-slate-900 text-xs mb-1">{t('workflow.afternoon.time')}</strong>
                                    <ul className="space-y-1.5 text-slate-700">
                                        {[0, 1, 2].map((i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                                <span>{t.rich(`workflow.afternoon.items.${i}`, {
                                                    strong: (chunks) => <strong>{chunks}</strong>
                                                })}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: Season & Hidden Gems */}
                        <section>
                            <h2 className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm border-b-2 border-slate-900 pb-1">
                                <Sun className="w-4 h-4" /> {t('season.title')}
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <strong className="block text-slate-900 text-xs mb-1 border-b border-slate-200 pb-1">{t('season.season.label')}</strong>
                                    <ul className="space-y-1 text-slate-600">
                                        {[0, 1, 2].map((i) => (
                                            <li key={i}>{t.rich(`season.season.items.${i}`, {
                                                span: (chunks) => <span>{chunks}</span> // Hack: we use HTML in JSON for classes, but t.rich expects components.
                                                // Actually, better to move classes to code. But JSON has style classes embedded.
                                                // Checking JSON: <span class="font-bold text-orange-500">Dry</span>
                                                // t.rich handles tags if they are configured. 
                                                // If I use standard tags in JSON like <b>, it works. But <span class="..."> needs care.
                                                // I should probably simplify JSON to just text and wrap here.
                                                // But JSON has different colors for each season.
                                                // I will assume standard HTML processing is NOT fully supported by t.rich for attributes.
                                                // I will replace `span` in JSON with `dry`, `hot`, `rainy` tags? No, too complex.
                                                // I'll try `dangerouslySetInnerHTML` for these specific items or parse them.
                                                // Or I can just map them manually if count is small.
                                                // JSON content: "<span class=\"font-bold...
                                                // I will use dangerouslySetInnerHTML for these items.
                                            })}
                                                <span dangerouslySetInnerHTML={{ __html: t(`season.season.items.${i}`) }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <strong className="block text-slate-900 text-xs mb-1 border-b border-slate-200 pb-1">{t('season.spot.label')}</strong>
                                    <ul className="space-y-1 text-slate-600">
                                        {[0, 1, 2].map((i) => (
                                            <li key={i}>{t(`season.spot.items.${i}`)}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* QR Code Area - Clean & Visual */}
                        <div className="mt-auto bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between shadow-lg">
                            <div>
                                <p className="font-bold text-lg mb-1">Nomad in Thailand</p>
                                <p className="text-xs text-slate-400">{t('qr.desc')}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] text-right font-mono opacity-70">
                                    {t.rich('qr.scan', {
                                        br: () => <br />
                                    })}
                                </span>
                                <div className="bg-white p-1 rounded">
                                    <div className="w-14 h-14 bg-slate-900 flex items-center justify-center text-white font-bold text-[8px]">
                                        QR
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
