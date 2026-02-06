'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FolderOpen, ChevronRight } from 'lucide-react';

export default function SidebarCategories() {
    const t = useTranslations('ArticleFilter.categories');
    const tCommon = useTranslations('SidebarCategories');

    const categories = [
        { id: 'workVisa', href: '/blog?category=Work+%26+Visa' },
        { id: 'living', href: '/blog?category=Living+%26+Places' },
        { id: 'moneyIt', href: '/blog?category=Money+%26+IT' },
    ];

    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-teal-600" />
                {tCommon('title')}
            </h3>
            <div className="space-y-1">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={cat.href}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                        <span className="text-sm font-medium text-slate-600 group-hover:text-teal-700 transition-colors">
                            {t(cat.id)}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
