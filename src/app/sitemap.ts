import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nomad-th.com' // Actual domain

    // Core pages
    const routes = [
        '',
        '/nomad-info',
        '/living',

    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }))

    // Articles - Nomad Info
    const nomadInfoArticles = [
        '/nomad-info/bangkok-roadmap',
        '/nomad-info/bangkok-map',
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

    // Articles - Living Guide
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

    return [...routes, ...nomadInfoArticles, ...livingArticles]
}
