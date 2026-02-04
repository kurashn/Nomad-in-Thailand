import { MetadataRoute } from 'next'
import { reader } from '@/lib/reader'
import { routing } from '@/i18n/routing'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://nomad-th.com' // Actual domain

    // Base routes (without locale)
    const staticRoutes = [
        '',
        '/nomad-info',
        '/living',
        '/blog',
        // Nomad Info
        '/nomad-info/bangkok-roadmap',
        '/nomad-info/coworking-guide',
        '/nomad-info/tax-money-guide',
        '/nomad-info/dtv-visa',
        '/nomad-info/cafe-guide',
        '/nomad-info/wise',
        '/nomad-info/airalo',
        '/nomad-info/nordvpn',
        '/nomad-info/safetywing',
        '/nomad-info/sponsor',
        '/nomad-info/community',
        // Living Guide
        '/living/area-guide',
        '/living/medical-guide',
        '/living/sim-guide',
        '/living/transport-guide',
    ]

    // Dynamic Blog Posts
    const posts = await reader.collections.posts.all()

    const sitemapEntries: MetadataRoute.Sitemap = []

    for (const locale of routing.locales) {
        // Add static routes for this locale
        for (const route of staticRoutes) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1.0 : 0.8,
            })
        }

        // Add blog posts for this locale
        for (const post of posts) {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/blog/${post.slug}`,
                lastModified: post.entry.publishedDate ? new Date(post.entry.publishedDate) : new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            })
        }
    }

    return sitemapEntries
}
