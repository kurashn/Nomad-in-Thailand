import Link from "next/link";
import { nomadArticles } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "ノマド情報",
    description: "バンコクのノマド生活に役立つ情報を網羅。ビザ、コワーキング、生活費、コミュニティなど。",
};

export default function NomadInfoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "ノマド情報 | Nomad in Thailand",
        "description": "バンコクのノマド生活に役立つ情報を網羅。ビザ、コワーキング、生活費、コミュニティなど。",
        "url": "https://nomad-th.com/nomad-info"
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">ノマド情報</h1>
                <p className="text-muted-foreground text-lg">
                    コワーキングスペース、ビザ、生活の知恵など、デジタルノマド必見の情報です。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nomadArticles.map((article) => (
                    <Link href={article.link || "#"} key={article.id} className="block group">
                        <article className="bg-white rounded-xl border border-muted shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full flex flex-col">
                            <div className="h-48 w-full relative overflow-hidden">
                                {article.image && (
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-secondary/20 text-yellow-700 text-xs font-semibold rounded-full mb-4">
                                    {article.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">{article.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-medium text-yellow-600 group-hover:underline">
                                    記事を読む <ArrowUpRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Recommended Videos Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                    <span className="text-red-600">🎥</span> おすすめ動画
                </h2>
                <p className="text-muted-foreground mb-8">
                    YouTubeチャンネル「海外ノマドポッドキャスト」から、特に人気の動画をピックアップ。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Video 1: DTV Visa */}
                    <div className="space-y-3">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-muted hover:shadow-xl transition-all">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/B_HkXPiv7ow"
                                title="DTV Visa Guide"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="hover:scale-105 transition-transform duration-700"
                            ></iframe>
                        </div>
                        <h3 className="font-bold text-lg leading-tight">
                            タイに5年間住める「DTVビザ」徹底解説
                        </h3>
                    </div>

                    {/* Video 2: Cost of Living */}
                    <div className="space-y-3">
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-muted hover:shadow-xl transition-all">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/pDqbwEahHZI"
                                title="Cost of Living"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="hover:scale-105 transition-transform duration-700"
                            ></iframe>
                        </div>
                        <h3 className="font-bold text-lg leading-tight">
                            【公開】20代ノマドの1ヶ月の生活費はいくら？
                        </h3>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a
                        href="https://www.youtube.com/@T78community"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                    >
                        もっと動画を見る
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
}
