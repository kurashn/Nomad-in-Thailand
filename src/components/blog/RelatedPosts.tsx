import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Tag } from 'lucide-react';
import { reader } from '@/lib/reader';

interface Props {
    currentSlug: string;
    category?: string | null;
}

// 同カテゴリの記事を優先し、足りなければ新しい順で補完して3本返す
export default async function RelatedPosts({ currentSlug, category }: Props) {
    const posts = await reader.collections.posts.all();

    const candidates = posts
        .filter((p) => p.slug !== currentSlug)
        .sort((a, b) => {
            const dateA = a.entry.publishedDate ? new Date(a.entry.publishedDate).getTime() : 0;
            const dateB = b.entry.publishedDate ? new Date(b.entry.publishedDate).getTime() : 0;
            return dateB - dateA;
        });

    const sameCategory = category
        ? candidates.filter((p) => p.entry.category === category)
        : [];
    const others = candidates.filter((p) => !sameCategory.includes(p));
    const related = [...sameCategory, ...others].slice(0, 3);

    if (related.length === 0) return null;

    return (
        <section className="mt-16">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#2a9d8f] rounded-full inline-block" />
                あわせて読みたい
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
                {related.map((post) => (
                    <Link href={`/ja/blog/${post.slug}`} key={post.slug} className="group block h-full">
                        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={post.entry.thumbnail || '/images/ogp_default.webp'}
                                    alt={post.entry.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-white/90 px-2 py-0.5 text-[11px] font-bold text-slate-800 backdrop-blur-sm">
                                    <Tag className="h-3 w-3 text-[#2a9d8f]" />
                                    {post.entry.category || 'その他'}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#2a9d8f]">
                                    {post.entry.title}
                                </h3>
                                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#2a9d8f]">
                                    読む <ArrowUpRight className="h-3.5 w-3.5" />
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
