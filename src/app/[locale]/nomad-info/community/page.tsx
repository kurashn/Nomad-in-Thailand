import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Beer, Dumbbell, Laptop, MessageCircle, Heart, ShieldCheck } from "lucide-react";
import NewsletterCTA from "@/components/NewsletterCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Community.meta' });
    return {
        title: t('title'),
        description: t('desc'),
    };
}

export default function CommunityPage() {
    const t = useTranslations('Community');
    const locale = useLocale();

    const activities = [
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            key: 'sauna'
        },
        {
            icon: <Dumbbell className="w-8 h-8 text-blue-500" />,
            key: 'muaythai'
        },
        {
            icon: <Laptop className="w-8 h-8 text-foreground" />,
            key: 'coworking'
        },
        {
            icon: <Beer className="w-8 h-8 text-yellow-500" />,
            key: 'party'
        }
    ];

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/community_hero.jpg"
                        alt="Nomad Community"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 container max-w-4xl mx-auto px-6 text-center text-white">
                    <div className="flex gap-3 justify-center mb-6">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">{t('hero.tag1')}</span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">{t('hero.tag2')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight whitespace-pre-wrap">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-medium mb-10 whitespace-pre-wrap leading-relaxed max-w-2xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                    <a
                        href="https://line.me/ti/g2/M_0JA6IBztNpzLUOfWVaay5sKNPxQypjNDtObQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b54d] text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <MessageCircle className="w-6 h-6 fill-current" />
                        {t('hero.cta')}
                    </a>
                </div>
            </div>

            <div className="container max-w-3xl mx-auto px-6 mt-20">
                {/* Intro: Problems */}
                <div className="mb-20 text-center">
                    <h2 className="text-2xl font-bold mb-8 text-foreground">{t('intro.title')}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{t('intro.p1')}</p>

                    <div className="bg-muted/50 p-8 rounded-2xl border border-muted text-left inline-block max-w-2xl w-full">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-muted-foreground mt-0.5 shrink-0" />
                                <span className="text-foreground/90 text-lg">{t('intro.problems.item1')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-muted-foreground mt-0.5 shrink-0" />
                                <span className="text-foreground/90 text-lg">{t('intro.problems.item2')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-muted-foreground mt-0.5 shrink-0" />
                                <span className="text-foreground/90 text-lg">{t('intro.problems.item3')}</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-muted-foreground mt-0.5 shrink-0" />
                                <span className="text-foreground/90 text-lg">{t('intro.problems.item4')}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <p className="text-2xl md:text-3xl text-foreground font-bold" dangerouslySetInnerHTML={{ __html: t.raw('intro.solution') }} />
                    </div>
                </div>

                {/* Activities */}
                <section className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">ACTIVITIES</span>
                        <h2 className="text-3xl font-bold text-foreground">{t('activities.title')}</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t('activities.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {activities.map((activity) => (
                            <div key={activity.key} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4 bg-muted/50 w-16 h-16 rounded-full flex items-center justify-center">
                                    {activity.icon}
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-foreground">{t(`activities.items.${activity.key}.title`)}</h3>
                                <p className="text-muted-foreground">{t(`activities.items.${activity.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Atmosphere */}
                <section className="mb-20 bg-muted/30 p-10 rounded-3xl border border-border text-center">
                    <Users className="w-12 h-12 text-foreground mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-foreground mb-4">{t('atmosphere.title')}</h2>
                    <p className="text-muted-foreground mb-8 text-lg">{t('atmosphere.desc')}</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-background border border-border px-4 py-2 rounded-full font-bold text-foreground shadow-sm">
                            {t('atmosphere.features.item1')}
                        </span>
                        <span className="bg-background border border-border px-4 py-2 rounded-full font-bold text-foreground shadow-sm">
                            {t('atmosphere.features.item2')}
                        </span>
                        <span className="bg-background border border-border px-4 py-2 rounded-full font-bold text-foreground shadow-sm">
                            {t('atmosphere.features.item3')}
                        </span>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-[#06C755] text-white p-10 md:p-14 rounded-3xl text-center relative overflow-hidden shadow-2xl mb-20">
                    <div className="relative z-10">
                        <MessageCircle className="w-16 h-16 mx-auto mb-6 fill-white" />
                        <h2 className="text-3xl md:text-4xl font-black mb-4">{t('cta.title')}</h2>
                        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: t.raw('cta.desc') }} />

                        <div className="flex flex-col items-center gap-3">
                            <a
                                href="https://line.me/ti/g2/M_0JA6IBztNpzLUOfWVaay5sKNPxQypjNDtObQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#06C755] hover:bg-gray-50 font-bold text-xl px-10 py-5 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
                            >
                                {t('cta.button')}
                            </a>
                            <span className="text-white/80 text-sm font-medium">{t('cta.note')}</span>
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>

                {/* FAQ */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-foreground text-center">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((num) => (
                            <details key={num} className="group bg-card border border-border rounded-xl open:ring-2 open:ring-primary/20 transition-all shadow-sm">
                                <summary className="flex cursor-pointer items-center justify-between p-4 px-6 font-bold text-foreground hover:bg-muted/30 rounded-xl transition-colors">
                                    {t(`faq.q${num}`)}
                                    <span className="transition-transform group-open:rotate-180 text-muted-foreground">▼</span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-muted-foreground text-sm leading-relaxed border-t border-transparent group-open:border-border/50">
                                    {t(`faq.a${num}`)}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            </div>
        </article>
    );
}
