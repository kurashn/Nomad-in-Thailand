import { getArticles } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import ArticleFilter from "@/components/ArticleFilter";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'NomadInfo' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function NomadInfoPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'NomadInfo' });
    const { nomad, living } = getArticles(locale);

    // Combine all articles
    const allArticles = [...nomad, ...living].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${t('title')} | Nomad in Thailand`,
        "description": t('description'),
        "url": `https://nomad-th.com/${locale}/nomad-info`
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    {t('heading')}
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl whitespace-pre-line">
                    {t('intro')}
                </p>
            </div>

            <ArticleFilter articles={allArticles} />

        </div>
    );
}
