import { MetadataRoute } from 'next'

const baseUrl = 'https://totonoi-thai.com'

// 非公開・管理用パス。検索エンジンにもAIクローラーにも見せない。
const DISALLOW = ['/private/', '/keystatic', '/api/', '/ja/preview/', '/ja/secret/']

// AI検索・生成AIからの流入を取りに行くため、主要なAIクローラーを明示的に許可する。
// 明示しておくと、robots.txt を厳格に解釈するクローラーにも確実に伝わる。
const AI_CRAWLERS = [
    'GPTBot',            // OpenAI（学習・インデックス）
    'OAI-SearchBot',     // ChatGPT検索
    'ChatGPT-User',      // ChatGPTのユーザー起点アクセス
    'ClaudeBot',         // Anthropic
    'Claude-User',
    'Claude-SearchBot',
    'PerplexityBot',     // Perplexity
    'Perplexity-User',
    'Google-Extended',   // Gemini / Vertex AI
    'Applebot',          // Siri / Spotlight
    'Applebot-Extended', // Apple Intelligence
    'Amazonbot',
    'meta-externalagent', // Meta AI
    'CCBot',             // Common Crawl（多くのLLMの学習元）
    'cohere-ai',
    'DuckAssistBot',
    'YouBot',
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: DISALLOW,
            },
            ...AI_CRAWLERS.map((userAgent) => ({
                userAgent,
                allow: '/',
                disallow: DISALLOW,
            })),
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
