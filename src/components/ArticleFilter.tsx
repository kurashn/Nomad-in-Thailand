"use client";

import { useState, useMemo, useEffect } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowUpRight, Search, Tag, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

type Article = {
    id: string | number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    link: string;
};

type Props = {
    articles: Article[];
};

// Map filter IDs to actual category strings used in article frontmatter
const CATEGORY_MATCHERS: Record<string, string[]> = {
    career: ["キャリア・移住"],
    visa: ["ビザ・手続き"],
    living: ["生活情報", "体験談"],
    money: ["お金・税金・仮想通貨"],
    interviews: ["移住者インタビュー", "ノマドインタビュー"],
};

export default function ArticleFilter({ articles }: Props) {
    const t = useTranslations('ArticleFilter');
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || "all";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState("");

    // Update state if URL parameter changes
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    const categories = [
        { id: "all", label: t('categories.all') },
        { id: "career", label: t('categories.career') },
        { id: "visa", label: t('categories.visa') },
        { id: "living", label: t('categories.living') },
        { id: "money", label: t('categories.money') },
        { id: "interviews", label: t('categories.interviews') },
    ];

    // Filter logic
    const filteredArticles = useMemo(() => {
        return articles.filter((article) => {
            // Category Filter
            let matchesCategory = false;
            if (selectedCategory === "all") {
                matchesCategory = true;
            } else {
                const matchers = CATEGORY_MATCHERS[selectedCategory];
                if (matchers?.includes(article.category)) {
                    matchesCategory = true;
                }
            }

            // Search Filter
            const matchesSearch =
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [articles, selectedCategory, searchQuery]);

    const handleCategoryClick = (id: string) => {
        setSelectedCategory(id);
        // Optional: Update URL without refresh
        const url = new URL(window.location.href);
        if (id === 'all') {
            url.searchParams.delete('category');
        } else {
            url.searchParams.set('category', id);
        }
        window.history.pushState({}, '', url);
    };

    return (
        <div className="space-y-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                {/* Category Tabs */}
                <div className="grid grid-cols-2 gap-2 w-full md:w-auto md:flex md:flex-wrap justify-center md:justify-start">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat.id
                                ? "bg-slate-800 text-white shadow-md"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 text-sm"
                    />
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <Link href={article.link || "#"} key={article.id} className="block group h-full">
                            <article className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                                <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                                    {article.image ? (
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            No Image
                                        </div>
                                    )}
                                    <div className="absolute top-3 left-3">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-700 shadow-sm">
                                            <Tag className="w-3 h-3 mr-1 text-blue-500" />
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                        <span className="text-xs text-slate-400 flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {article.date}
                                        </span>
                                        <div className="flex items-center text-sm font-bold text-blue-600 group-hover:underline">
                                            {t('read')} <ArrowUpRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-slate-400">
                        <p>{t('noResults')}</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                            className="mt-4 text-blue-600 hover:underline text-sm"
                        >
                            {t('clear')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
