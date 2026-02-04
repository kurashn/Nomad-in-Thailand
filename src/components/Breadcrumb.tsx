"use client";

import { usePathname, Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';

export default function Breadcrumb() {
    const t = useTranslations('Breadcrumb');
    const pathname = usePathname();

    // Do not show on homepage
    if (pathname === '/') return null;

    const segments = pathname.split('/').filter(segment => segment);

    // Breadcrumb items
    const breadcrumbs = segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;

        // Try to translate the segment
        // We check if the translation key exists by checking if t.has(segment)
        // Note: nesting works differently in next-intl, usually flat keys or dot notation if loaded
        // But here we loaded 'Breadcrumb' namespace. Keys are 'blog', 'contact', etc.

        let label = segment;

        // Manual mapping for known segments that might match keys
        // We try to get translation using the segment as key
        // We need to handle cases where segment is like "thailand-migration-guide"
        // and we might not have a key.

        try {
            // We use a try-catch or checks. next-intl returns key if not found usually or we can check.
            // But simpler is to rely on convention.
            // For this project, let's assume if we defined it in json, we use it.
            // We can check if the key matches our known keys.

            // However, strictly checking keys in client component with t() is tricky if keys are dynamic.
            // But we know the keys we added: home, blog, nomad-info, contact, sponsor, privacy-policy, terms.

            if (['blog', 'nomad-info', 'contact', 'sponsor', 'privacy-policy', 'terms', 'essential-tools'].includes(segment)) {
                label = t(segment as any);
            } else {
                // Fallback format: replace dashes with spaces and capitalize
                label = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            }
        } catch (e) {
            label = segment;
        }

        return { path, label, isLast };
    });

    return (
        <div className="w-full bg-muted/30 border-b border-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <nav aria-label="Breadcrumb" className="flex items-center text-xs md:text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
                    <Link
                        href="/"
                        className="flex items-center hover:text-foreground transition-colors"
                        title={t('home')}
                    >
                        <Home className="h-4 w-4" />
                    </Link>

                    {breadcrumbs.map((crumb, index) => (
                        <Fragment key={crumb.path}>
                            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50 flex-shrink-0" />
                            {crumb.isLast ? (
                                <span className="font-medium text-foreground" aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.path}
                                    className="hover:text-foreground transition-colors"
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
