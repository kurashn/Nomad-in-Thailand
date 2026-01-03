import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nomad-place.com' // Replace with your actual domain

    // Core pages
    const routes = [
        '',
        '/nomad-info',
        '/living',
        '/events',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }))

    // Articles - Nomad Info
    const nomadInfoArticles = [
        '/nomad-info/bangkok-roadmap',
        '/nomad-info/coworking-guide',
        '/nomad-info/tax-money-guide',
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
