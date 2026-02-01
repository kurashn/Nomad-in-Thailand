import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Tag, Clock } from 'lucide-react';
import { reader } from '@/lib/reader';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

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

            {sortedPosts.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                    <p>まだ記事がありません</p>
                </div>
            ) : (
                <div className="space-y-12">
                    {/* Latest Post (Hero) */}
                    {sortedPosts.length > 0 && (() => {
                        const latest = sortedPosts[0];
                        return (
                            <Link href={`/blog/${latest.slug}`} className="block group">
                                <article className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="h-64 lg:h-96 w-full relative overflow-hidden">
                                        <Image
                                            src={latest.entry.thumbnail || '/images/blog-default.jpg'}
                                            alt={latest.entry.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                        {latest.entry.category && (
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm font-bold text-slate-700 shadow-sm">
                                                    <Tag className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                                                    {latest.entry.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 lg:p-10 flex flex-col justify-center h-full">
                                        <div className="flex items-center space-x-2 text-blue-600 font-bold mb-4">
                                            <span className="bg-blue-100 px-3 py-1 rounded-full text-xs uppercase tracking-wider">New</span>
                                            {latest.entry.publishedDate && (
                                                <span className="text-slate-400 text-sm flex items-center">
                                                    <Clock className="w-3.5 h-3.5 mr-1" />
                                                    {new Date(latest.entry.publishedDate).toLocaleDateString('ja-JP', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                            {latest.entry.title}
                                        </h2>
                                        <p className="text-slate-500 text-base lg:text-lg mb-6 line-clamp-3">
                                            {latest.entry.description}
                                        </p>
                                        <div className="flex items-center text-base font-bold text-blue-600 group-hover:underline mt-auto">
                                            記事を読む <ArrowUpRight className="w-5 h-5 ml-1" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })()}

                    {/* Other Posts Grid */}
                    {sortedPosts.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedPosts.slice(1).map((post) => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post.slug}
                                    className="block group h-full"
                                >
                                    <article className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                                        {/* Thumbnail */}
                                        <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                                            <Image
                                                src={post.entry.thumbnail || '/images/blog-default.jpg'}
                                                alt={post.entry.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Category Tag */}
                                            {post.entry.category && (
                                                <div className="absolute top-3 left-3">
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-700 shadow-sm">
                                                        <Tag className="w-3 h-3 mr-1 text-blue-500" />
                                                        {post.entry.category}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                {post.entry.title}
                                            </h3>

                                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                                {post.entry.publishedDate && (
                                                    <span className="text-xs text-slate-400 flex items-center">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {new Date(post.entry.publishedDate).toLocaleDateString('ja-JP', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                )}
                                                <div className="flex items-center text-sm font-bold text-blue-600 group-hover:underline">
                                                    読む <ArrowUpRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
