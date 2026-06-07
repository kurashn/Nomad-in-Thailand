import { reader } from '@/lib/reader';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ArticleFilter from '@/components/ArticleFilter';
import { BookOpen } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Navbar' });

    return {
        title: `${t('column')} | Chiang Mai Run Club`,
        description: 'タイ移住・ウェルネス・リトリートに関する最新情報をお届け。',
        alternates: {
            canonical: 'https://totonoi-thai.com/ja/blog',
            languages: {
                'ja': 'https://totonoi-thai.com/ja/blog',
            },
        },
        openGraph: {
            title: `${t('column')} | Chiang Mai Run Club`,
            description: 'タイ移住・ウェルネス・リトリートに関する最新情報をお届け。',
            url: 'https://totonoi-thai.com/ja/blog',
            type: 'website',
        },
    };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    const posts = await reader.collections.posts.all();

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
        image: post.entry.thumbnail || '/images/blog-default.webp',
        link: `/blog/${post.slug}`
    }));

    return (
        <div className="min-h-screen bg-transparent">

            {/* Hero Header */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A37E]/20 via-[#00A37E]/5 to-transparent blur-[80px]" />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 text-[#00A37E] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>ARTICLES</span>
                    </div>
                    <h1
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-wide"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                        タイ生活情報
                    </h1>
                    <p
                        className="text-slate-600 text-sm md:text-base font-medium max-w-xl mx-auto"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                        タイ生活に関するリアルな情報をお届け。
                    </p>
                </div>
            </section>

            {/* Article Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-28">
                <ArticleFilter articles={formattedArticles} />
            </section>

        </div>
    );
}
