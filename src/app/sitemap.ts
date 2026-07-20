import { MetadataRoute } from 'next'
import { reader } from '@/lib/reader'
import { routing } from '@/i18n/routing'

const baseUrl = 'https://totonoi-thai.com'

// priority はサイト内での相対的な重要度。トップ > 集客ガイド > 規約類。
// /preview/* と /secret/* は非公開のため意図的に含めない。
type StaticRoute = {
    path: string
    priority: number
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
}

const STATIC_ROUTES: StaticRoute[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' },

    // Nomad Info
    { path: '/nomad-info/dtv-visa', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/nomad-info/bangkok-roadmap', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/nomad-info/tax-money-guide', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/nomad-info/coworking-guide', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/nomad-info/cafe-guide', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/nomad-info/sponsor', priority: 0.4, changeFrequency: 'yearly' },

    // Tools (affiliate)
    { path: '/nomad-info/essential-tools', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/nomad-info/safetywing', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/nomad-info/wise', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/nomad-info/airalo', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/nomad-info/credit-card', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/nomad-info/nordvpn', priority: 0.5, changeFrequency: 'monthly' },

    // Living Guide
    { path: '/living/area-guide', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/living/medical-guide', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/living/sim-guide', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/living/transport-guide', priority: 0.7, changeFrequency: 'monthly' },

    // Site
    { path: '/contact', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/legal/tos', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/legal/privacy', priority: 0.2, changeFrequency: 'yearly' },
    { path: '/legal/tokushoho', priority: 0.2, changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await reader.collections.posts.all()
    const now = new Date()

    const sitemapEntries: MetadataRoute.Sitemap = []

    for (const locale of routing.locales) {
        for (const route of STATIC_ROUTES) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route.path}`,
                lastModified: now,
                changeFrequency: route.changeFrequency,
                priority: route.priority,
            })
        }

        for (const post of posts) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/blog/${post.slug}`,
                lastModified: post.entry.publishedDate ? new Date(post.entry.publishedDate) : now,
                changeFrequency: 'monthly',
                priority: 0.8,
            })
        }
    }

    return sitemapEntries
}
