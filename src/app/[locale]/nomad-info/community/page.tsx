import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Beer, Dumbbell, Laptop, MessageCircle, Heart, ShieldCheck, Zap, Sparkles, Handshake, UserCheck, Ban, VenetianMask, Eye, BellOff, DoorOpen } from "lucide-react";
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

    const benefits = [
        {
            icon: <ShieldCheck className="w-10 h-10 text-primary" />,
            key: 'info'
        },
        {
            icon: <Heart className="w-10 h-10 text-rose-500" />,
            key: 'friends'
        },
        {
            icon: <Zap className="w-10 h-10 text-yellow-500" />,
            key: 'business'
        }
    ];

    const activities = [
        {
            icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
            key: 'sauna'
        },
        {
            icon: <Dumbbell className="w-8 h-8 text-rose-500" />,
            key: 'muaythai'
        },
        {
            icon: <Laptop className="w-8 h-8 text-emerald-500" />,
            key: 'coworking'
        },
        {
            icon: <Beer className="w-8 h-8 text-amber-500" />,
            key: 'party'
        }
    ];

    const members = [
        t('members.list.0'),
        t('members.list.1'),
        t('members.list.2'),
        t('members.list.3'),
        t('members.list.4'),
        t('members.list.5'),
    ];

    return (
        <article className="min-h-screen bg-background pb-20 font-sans text-foreground">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/community_hero.jpg"
                        alt="Nomad Community"
                        fill
                        className="object-cover scale-105 animate-slow-zoom"
                        priority
                    />
                </div>

                <div className="relative z-20 container max-w-4xl mx-auto px-6 text-center text-white">
                    <div className="flex gap-3 justify-center mb-8 animate-fade-in-up">
                        <span className="px-4 py-1.5 bg-primary/90 text-primary-foreground text-sm font-bold rounded-full backdrop-blur-sm border border-white/20 shadow-lg">{t('hero.tag1')}</span>
                        <span className="px-4 py-1.5 bg-secondary/90 text-secondary-foreground text-sm font-bold rounded-full backdrop-blur-sm border border-white/20 shadow-lg">{t('hero.tag2')}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tight whitespace-normal md:whitespace-pre-wrap drop-shadow-2xl animate-fade-in-up delay-100">
                        {t('hero.title')}
                    </h1>
                    <p className="text-base md:text-xl text-white/90 font-medium mb-12 whitespace-normal md:whitespace-pre-wrap leading-relaxed max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-200">
                        {t('hero.subtitle')}
                    </p>
                    <a
                        href="https://line.me/ti/g2/M_0JA6IBztNpzLUOfWVaay5sKNPxQypjNDtObQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b54d] text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-full transition-all shadow-[0_0_20px_rgba(6,199,85,0.5)] hover:shadow-[0_0_40px_rgba(6,199,85,0.7)] hover:-translate-y-1 overflow-hidden animate-fade-in-up delay-300"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                        {t('hero.cta')}
                    </a>
                    <p className="mt-4 text-white/80 text-sm font-medium animate-fade-in-up delay-300">
                        {t('hero.note')}
                    </p>
                </div>
            </div>

            <div className="container max-w-4xl mx-auto px-6 -mt-20 relative z-30">
                {/* Intro: Problems */}
                <div className="bg-card/30 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-3xl shadow-2xl mb-16 md:mb-24">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{t('intro.title')}</h2>
                        <p className="text-lg text-muted-foreground">{t('intro.p1')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                        <div className="bg-background/50 p-4 rounded-xl flex items-center gap-4 border border-border/50">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                <span className="text-xl">😰</span>
                            </div>
                            <span className="text-foreground/90 font-medium">{t('intro.problems.item1')}</span>
                        </div>
                        <div className="bg-background/50 p-4 rounded-xl flex items-center gap-4 border border-border/50">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                <span className="text-xl">😓</span>
                            </div>
                            <span className="text-foreground/90 font-medium">{t('intro.problems.item2')}</span>
                        </div>
                        <div className="bg-background/50 p-4 rounded-xl flex items-center gap-4 border border-border/50">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                <span className="text-xl">😫</span>
                            </div>
                            <span className="text-foreground/90 font-medium">{t('intro.problems.item3')}</span>
                        </div>
                        <div className="bg-background/50 p-4 rounded-xl flex items-center gap-4 border border-border/50">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                <span className="text-xl">🤔</span>
                            </div>
                            <span className="text-foreground/90 font-medium">{t('intro.problems.item4')}</span>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xl md:text-4xl text-foreground font-black leading-snug" dangerouslySetInnerHTML={{ __html: t.raw('intro.solution') }} />
                    </div>
                </div>

                {/* YouTube Video Section */}
                <section className="mb-24 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">VIDEO</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('video.title')}</h2>
                    </div>
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Ak4-4HWnNLU?si=wKoAyrdbgeVQFZAY"
                            title="Nomad Community Introduction"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">BENEFITS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('benefits.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={benefit.key} className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="mb-6 bg-muted w-20 h-20 rounded-2xl flex items-center justify-center mx-auto rotate-3 hover:rotate-6 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-bold text-xl mb-4 text-center text-foreground">{t(`benefits.items.${benefit.key}.title`)}</h3>
                                <p className="text-muted-foreground text-center leading-relaxed text-sm whitespace-normal md:whitespace-pre-wrap">{t(`benefits.items.${benefit.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Members */}
                <section className="mb-16 md:mb-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-8 md:p-12 rounded-[2.5rem] border border-indigo-500/10 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t('members.title')}</h2>
                    <p className="text-muted-foreground mb-10">{t('members.desc')}</p>

                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {members.map((member, i) => (
                            <span key={i} className="bg-background border border-border px-5 py-3 rounded-full font-medium text-foreground shadow-sm flex items-center gap-2">
                                <Users className="w-4 h-4 text-indigo-500" />
                                {member}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Activities */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">ACTIVITIES</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('activities.title')}</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">{t('activities.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {activities.map((activity) => (
                            <div key={activity.key} className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all flex md:flex-row flex-col items-center md:items-start text-center md:text-left gap-6">
                                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {activity.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2 text-foreground">{t(`activities.items.${activity.key}.title`)}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{t(`activities.items.${activity.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety */}
                <section className="mb-16 md:mb-24">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">SAFETY</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('safety.title')}</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg whitespace-normal md:whitespace-pre-wrap">{t('safety.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg flex flex-col items-center text-center">
                            <div className="mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-foreground">{t('safety.features.item1')}</h3>
                            <p className="text-muted-foreground text-sm">{t('safety.features.desc1')}</p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg flex flex-col items-center text-center">
                            <div className="mb-6 bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center text-red-500">
                                <Ban className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-foreground">{t('safety.features.item2')}</h3>
                            <p className="text-muted-foreground text-sm">{t('safety.features.desc2')}</p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg flex flex-col items-center text-center">
                            <div className="mb-6 bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center text-purple-500">
                                <VenetianMask className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-foreground">{t('safety.features.item3')}</h3>
                            <p className="text-muted-foreground text-sm">{t('safety.features.desc3')}</p>
                        </div>
                    </div>
                </section>

                {/* Atmosphere */}
                <section className="mb-16 md:mb-24 bg-card border border-border rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">ATMOSPHERE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('atmosphere.title')}</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg whitespace-normal md:whitespace-pre-wrap">{t('atmosphere.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                                <Eye className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-lg text-foreground">{t('atmosphere.features.item1')}</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                                <BellOff className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-lg text-foreground">{t('atmosphere.features.item2')}</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                <DoorOpen className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-lg text-foreground">{t('atmosphere.features.item3')}</span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-[#06C755] text-white p-10 md:p-20 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden shadow-[0_20px_50px_rgba(6,199,85,0.3)] mb-16 md:mb-24 transform hover:scale-[1.01] transition-transform">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <MessageCircle className="w-20 h-20 mx-auto mb-8 fill-white animate-bounce" />
                        <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">{t('cta.title')}</h2>
                        <p className="text-white/90 text-xl mb-10 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t.raw('cta.desc') }} />

                        <div className="flex flex-col items-center gap-4">
                            <a
                                href="https://line.me/ti/g2/M_0JA6IBztNpzLUOfWVaay5sKNPxQypjNDtObQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-white text-[#06C755] hover:bg-gray-50 font-black text-2xl px-12 py-6 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-3"
                            >
                                {t('cta.button')}
                            </a>
                            <span className="text-white/80 text-sm font-bold bg-black/10 px-4 py-1 rounded-full">{t('cta.note')}</span>
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150 animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* FAQ */}
                <section className="mb-24 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-10 text-foreground text-center tracking-tight">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((num) => (
                            <details key={num} className="group bg-card border border-border rounded-2xl open:ring-2 open:ring-primary/20 transition-all shadow-sm overflow-hidden">
                                <summary className="flex cursor-pointer items-center justify-between p-5 px-6 font-bold text-foreground hover:bg-muted/30 transition-colors text-lg">
                                    <div className="flex items-center gap-4">
                                        <span className="text-primary font-black">Q{num}.</span>
                                        {t(`faq.q${num}`)}
                                    </div>
                                    <span className="transition-transform group-open:rotate-180 text-muted-foreground bg-muted w-8 h-8 flex items-center justify-center rounded-full">▼</span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/50 bg-muted/10 ml-14">
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
