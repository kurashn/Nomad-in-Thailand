import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, MapPin, Coffee, Home, ExternalLink, Layers } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

import { useTranslations } from "next-intl";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "BangkokMap.meta" });

    return {
        title: t("title"),
        description: t("desc"),
    };
}

export default function BangkokMapPage() {
    const t = useTranslations("BangkokMap");

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground/90">
            {/* Hero Header */}
            <div className="relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bangkok_nomad_roadmap_thumbnail.png')] bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />

                <div className="relative container max-w-4xl mx-auto px-4 pt-24 pb-12 text-center">
                    <Link href="../nomad-info" className="inline-flex items-center text-sm mb-6 text-slate-300 hover:text-white transition-colors border border-white/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t("hero.back")}
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-none">{t("hero.title")}</span>
                        <br className="md:hidden" /> 2026
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-md whitespace-pre-line">
                        {t("hero.subtitle")}
                    </p>


                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4 mt-8">
                {/* Intro */}
                <div className="prose prose-lg prose-slate max-w-none mb-12">
                    <p className="whitespace-pre-line">
                        {t.rich("intro.p1", {
                            bold: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <p className="whitespace-pre-line">
                        {t("intro.p2")}
                    </p>
                </div>



                {/* Section 1: Work Spots */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Coffee className="w-6 h-6 text-primary" />
                        {t("workSpots.title")}
                    </h2>
                    <div className="grid gap-6">
                        {[0, 1, 2, 3].map((index) => (
                            <div key={index} className="bg-card border border-muted rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg">{t(`workSpots.items.${index}.name`)}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                                            <MapPin className="w-3 h-3" /> {t(`workSpots.items.${index}.area`)}
                                            <span className="text-primary/20">|</span>
                                            <span className="text-primary font-medium">{t(`workSpots.items.${index}.category`)}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1 justify-end max-w-[120px]">
                                        {t.raw(`workSpots.items.${index}.features`).map((f: string, i: number) => (
                                            <span key={i} className="text-[10px] bg-secondary/50 px-2 py-1 rounded text-secondary-foreground">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-foreground/80 leading-relaxed border-t border-dashed border-border pt-3 mt-3">
                                    {t(`workSpots.items.${index}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/nomad-info/cafe-guide" className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1">
                            {t("workSpots.cta.cafe")} <ExternalLink className="w-3 h-3" />
                        </Link>
                        <span className="mx-4 text-muted-foreground/30">|</span>
                        <Link href="/nomad-info/coworking-guide" className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1">
                            {t("workSpots.cta.coworking")} <ExternalLink className="w-3 h-3" />
                        </Link>
                    </div>
                </section>

                {/* Section 2: Living Areas */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Home className="w-6 h-6 text-accent" />
                        {t("livingAreas.title")}
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[0, 1, 2].map((index) => (
                            <div key={index} className="bg-card border border-muted rounded-xl p-4 shadow-sm flex flex-col h-full">
                                <h3 className="font-bold text-base mb-1">{t(`livingAreas.items.${index}.name`)}</h3>
                                <div className="text-xs font-bold text-accent mb-2">{t(`livingAreas.items.${index}.price`)}</div>
                                <div className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded inline-block w-fit mb-3">
                                    {t(`livingAreas.items.${index}.vibe`)}
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                                    {t(`livingAreas.items.${index}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/living/area-guide" className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1">
                            {t("livingAreas.cta")} <ExternalLink className="w-3 h-3" />
                        </Link>
                    </div>
                </section>

                {/* Additional Resources */}
                <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5" />
                        {t("resources.title")}
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/living/transport-guide" className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-primary/50 transition-colors group">
                                <span className="font-medium text-slate-700">{t("resources.transport")}</span>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/living/medical-guide" className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-primary/50 transition-colors group">
                                <span className="font-medium text-slate-700">{t("resources.medical")}</span>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                            </Link>
                        </li>
                    </ul>
                </section>

                <NewsletterCTA isInline />

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                        {t("note")}
                    </p>
                </div>
            </div>
        </article>
    );
}
