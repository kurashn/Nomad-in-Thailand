import { MetadataRoute } from 'next'
import { reader } from '@/lib/reader'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://nomad-th.com' // Actual domain

    // Core pages
    const routes = [
        '',
        '/nomad-info',
        '/living',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }))

    // Articles - Nomad Info (Static content)
    const nomadInfoArticles = [
        '/nomad-info/bangkok-roadmap',

        '/nomad-info/coworking-guide',
        '/nomad-info/tax-money-guide',
        '/nomad-info/dtv-visa',
        '/nomad-info/cafe-guide',
        // Added service guides
        '/nomad-info/wise',
        '/nomad-info/airalo',
        '/nomad-info/nordvpn',
        '/nomad-info/safetywing',
        '/nomad-info/sponsor',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Articles - Living Guide (Static content)
    const livingArticles = [
        '/living/area-guide',
        '/living/medical-guide',
        '/living/sim-guide',
        '/living/transport-guide',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Dynamic Blog Posts from Keystatic
    const posts = await reader.collections.posts.all()
    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.entry.publishedDate ? new Date(post.entry.publishedDate) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...nomadInfoArticles, ...livingArticles, ...blogPosts]
}
