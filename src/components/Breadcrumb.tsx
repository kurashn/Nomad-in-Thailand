"use client";

import { usePathname, Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';

export default function Breadcrumb() {
    const t = useTranslations('Breadcrumb');
    const pathname = usePathname();

    // Do not show on homepage or blog index
    if (pathname === '/' || pathname === '/blog') return null;

    const segments = pathname.split('/').filter(segment => segment);

    // Breadcrumb items
    const breadcrumbs = segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;

        let label = segment;

        try {
            if (['blog', 'nomad-info', 'contact', 'sponsor', 'privacy-policy', 'terms', 'essential-tools'].includes(segment)) {
                label = t(segment as any);
            } else {
                label = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            }
        } catch (e) {
            label = segment;
        }

        return { path, label, isLast };
    });

    return (
        <div className="w-full bg-[#020B18] border-b border-white/10 pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <nav aria-label="Breadcrumb" className="flex items-center text-xs md:text-sm text-white/40 overflow-x-auto whitespace-nowrap">
                    <Link
                        href="/"
                        className="flex items-center hover:text-white transition-colors"
                        title={t('home')}
                    >
                        <Home className="h-4 w-4" />
                    </Link>

                    {breadcrumbs.map((crumb, index) => (
                        <Fragment key={crumb.path}>
                            <ChevronRight className="h-4 w-4 mx-2 text-white/20 flex-shrink-0" />
                            {crumb.isLast ? (
                                <span className="font-medium text-white/70" aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.path}
                                    className="hover:text-white transition-colors"
                                >
                                    {crumb.label}
                                </Link>
                            )}
                        </Fragment>
                    ))}
                </nav>
            </div>
        </div>
    );
}
