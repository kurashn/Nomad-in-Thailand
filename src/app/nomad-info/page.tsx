import { nomadArticles, livingArticles } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

import ArticleFilter from "@/components/ArticleFilter";

export const metadata: Metadata = {
    title: "タイノマド攻略ガイド",
    description: "ビザ、コワーキングから移動手段、病院まで。タイでのノマド生活を成功させるための完全ロードマップ。",
};

export default function NomadInfoPage() {

    // Combine all articles
    const allArticles = [...nomadArticles, ...livingArticles].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "タイノマド攻略ガイド | Nomad in Thailand",
        "description": "ビザ、コワーキングから移動手段、病院まで。タイでのノマド生活を成功させるための完全ロードマップ。",
        "url": "https://nomad-th.com/nomad-info"
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    タイノマド攻略ガイド
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl">
                    ビザや税金などの「仕事・実務」から、移動や病院などの「生活情報」まで。<br className="hidden md:block" />
                    現地在住ノマドが厳選した、本当に役立つ全情報をここに集約しました。
                </p>
            </div>

            <ArticleFilter articles={allArticles} />

        </div>
    );
}
