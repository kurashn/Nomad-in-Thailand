import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Tag, Clock } from 'lucide-react';
import { reader } from '@/lib/reader';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ArticleFilter from '@/components/ArticleFilter';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Navbar' });

    return {
        title: `${t('column')} | Nomad in Thailand`,
    };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    // Use Navbar namespace for the title "Latest" or "新着記事"
    const tNavbar = await getTranslations({ locale, namespace: 'Navbar' });
    // Use Home namespace for the subtitle/description which matches "Latest info..."
    const tHome = await getTranslations({ locale, namespace: 'Home' });

    const posts = await reader.collections.posts.all();

    // Sort by date, newest first
    const sortedPosts = [...posts].sort((a, b) => {
        const dateA = a.entry.publishedDate ? new Date(a.entry.publishedDate).getTime() : 0;
        const dateB = b.entry.publishedDate ? new Date(b.entry.publishedDate).getTime() : 0;
        return dateB - dateA;
    });

    const formattedArticles = sortedPosts.map((post) => ({
        id: post.slug,
        title: post.entry.title,
        excerpt: post.entry.description,
        category: post.entry.category || 'その他',
        date: post.entry.publishedDate ? new Date(post.entry.publishedDate).toLocaleDateString(locale === 'en' ? 'en-US' : 'ja-JP', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : '',
        image: post.entry.thumbnail || '/images/blog-default.jpg',
        link: `/blog/${post.slug}`
    }));

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header - matching nomad-info style */}
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    {tNavbar('column')}
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl whitespace-pre-line">
                    {tHome('column.subtitle')}
                </p>
            </div>

            <ArticleFilter articles={formattedArticles} />
        </div>
    );
}
