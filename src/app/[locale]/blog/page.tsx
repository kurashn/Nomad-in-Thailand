import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Tag, Clock } from 'lucide-react';
import { reader } from '@/lib/reader';

export default async function BlogPage() {
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
                    コラム
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl whitespace-pre-line">
                    タイ移住・ノマドライフに関する、いろんな記事をお届けします
                </p>
            </div>

            {/* Article Grid - 3 columns like nomad-info */}
            {sortedPosts.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                    <p>まだ記事がありません</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedPosts.map((post) => (
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
    );
}
