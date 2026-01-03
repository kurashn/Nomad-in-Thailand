import Link from "next/link";
import { livingArticles } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "タイ生活情報 2026 | バンコク移住の住まい・移動・病院ガイド",
    description: "タイ・バンコクでの生活を快適にするための完全ガイド。移動手段（Grab/Bolt/MuvMi）、エリア別住居情報、日本語対応病院など、移住者が知るべきリアルな情報を網羅。",
};

export default function LivingPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">タイ生活情報</h1>
                <p className="text-muted-foreground text-lg">
                    住まい、食事、移動手段など、バンコクでのQoL（生活の質）を上げるための実践的なガイドです。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {livingArticles.map((article) => (
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
                                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                                    {article.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">{article.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-medium text-accent group-hover:underline">
                                    記事を読む <ArrowUpRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
