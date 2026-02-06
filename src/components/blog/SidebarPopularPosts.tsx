'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FileText, ArrowRight } from 'lucide-react';

export default function SidebarPopularPosts() {
    const t = useTranslations('SidebarPopularPosts');

    const posts = [
        {
            slug: 'thailand-migration-guide',
            title: 'thailand-migration-guide', // Translation key
        },
        {
            slug: 'dtv-visa',
            title: 'dtv-visa',
        },
        {
            slug: 'bangkok-living-cost',
            title: 'bangkok-living-cost',
        },
        {
            slug: 'bangkok-roadmap',
            title: 'bangkok-roadmap',
        }
    ];

    // NOTE: In a real app, we might fetch these, but for "Recommended" it's better to curate high-value posts.
    // We will use translation keys for titles to ensure i18n support.

    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                {t('title')}
            </h3>
            <div className="space-y-4">
                {posts.map((post, index) => {
                    const href = post.slug === 'bangkok-roadmap' ? '/nomad-info/bangkok-roadmap' : `/blog/${post.slug}`;
                    return (
                        <Link key={post.slug} href={href} className="group block">
                            <div className="flex items-start gap-3">
                                <span className="text-4xl font-bold text-slate-100 group-hover:text-teal-100 transition-colors -mt-1 leading-none font-outfit">
                                    {index + 1}
                                </span>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-700 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                                        {t(`posts.${post.title}`)}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
