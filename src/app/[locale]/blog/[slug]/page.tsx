import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import { ArrowLeft } from 'lucide-react';
import { reader } from '@/lib/reader';
import NewsletterCTA from '@/components/NewsletterCTA';
import BlogSidebar from '@/components/blog/BlogSidebar';
import RelatedPosts from '@/components/blog/RelatedPosts';
import NoteSalesCTA from '@/components/NoteSalesCTA';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await reader.collections.posts.all();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    // frontmatter は正規表現ではなく Keystatic の reader で読む。
    // YAML の折りたたみ記法（description: >-）を正規表現が ">-" と誤読するバグの再発防止。
    const post = await reader.collections.posts.read(slug);

    if (!post) {
        return { title: 'TOTONOI THAI' };
    }

    const title = post.title;
    const description = post.description || 'タイ移住・デジタルノマドの実務情報メディア TOTONOI THAI';
    const thumbnail = post.thumbnail || '/images/blog-default.webp';
    const publishedDate = post.publishedDate ?? undefined;
    const category = post.category ?? undefined;
    const tags = (post.tags ?? []).filter((t): t is string => Boolean(t));

    const canonicalUrl = `https://totonoi-thai.com/ja/blog/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'ja': canonicalUrl,
            },
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            images: [thumbnail],
            type: 'article',
            ...(publishedDate && { publishedTime: publishedDate }),
            ...(category && { section: category }),
            ...(tags.length > 0 && { tags }),
            authors: ['TOTONOI THAI'],
        },
        twitter: {
            card: 'summary_large_image' as const,
            title,
            description,
            images: [thumbnail],
        },
    };
}

// Professional markdown to HTML conversion matching existing article styles
function markdownToHtml(markdown: string): string {
    let sectionNumber = 0;

    let html = markdown
        // H2 headers - numbered section style like Wise article
        .replace(/^## (.+)$/gm, () => {
            sectionNumber++;
            return `<h2 class="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900 mt-16">
                <span class="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base flex-shrink-0">${sectionNumber}</span>
                <span>$1</span>
            </h2>`;
        })
        // H3 headers
        .replace(/^### (.+)$/gm, '<h3 class="font-bold text-xl text-slate-800 mt-10 mb-4">$1</h3>')
        // Bold text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`(.+?)`/g, '<code class="bg-slate-100 text-[#2a9d8f] px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');

    // Process list blocks - convert them to styled cards
    html = html.replace(/^([-*] .+\n?)+/gm, (match) => {
        const items = match.trim().split('\n').map(line => {
            const content = line.replace(/^[-*] /, '');
            return `<li class="flex items-start gap-3">
                <span class="flex items-center justify-center w-5 h-5 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full text-xs mt-0.5 flex-shrink-0">✓</span>
                <span class="text-slate-700">${content}</span>
            </li>`;
        }).join('\n');
        return `<ul class="bg-white rounded-xl p-6 border border-slate-200 space-y-1 mb-6 shadow-sm">${items}</ul>`;
    });

    // Paragraphs - professional styling
    html = html.replace(/^(?!<[holu]|<li|<span|<code)(.+)$/gm, (match, content) => {
        if (content.trim() && !content.startsWith('<')) {
            return `<p class="text-lg leading-loose text-slate-700 mb-6">${content}</p>`;
        }
        return match;
    });

    // Fix the H2 replacement to actually work
    sectionNumber = 0;
    html = html.replace(/<h2 class="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900 mt-16">\s*<span class="flex items-center justify-center w-8 h-8 bg-\[#2a9d8f\] text-white rounded-full text-base flex-shrink-0">\d+<\/span>\s*<span>\$1<\/span>\s*<\/h2>/g, (match) => {
        sectionNumber++;
        return match;
    });

    return html;
}

// Better markdown parser
function parseMarkdown(markdown: string): string {
    const lines = markdown.split('\n');
    const result: string[] = [];
    let currentListType: 'ul' | 'ol' | null = null;
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            const containerClass = "bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-8";
            const listTag = currentListType === 'ul' ? 'ul' : 'ol';
            const spacingClass = currentListType === 'ul' ? 'space-y-1' : 'space-y-4';

            result.push(`<div class="${containerClass}">
                <${listTag} class="${spacingClass}">
                    ${listItems.join('\n')}
                </${listTag}>
            </div>`);
            listItems = [];
        }
        currentListType = null;
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|')) {
            if (currentListType) flushList();

            // Collect table rows
            const tableLines = [line];
            let j = i + 1;
            while (j < lines.length && lines[j].trim().startsWith('|')) {
                tableLines.push(lines[j].trim());
                j++;
            }

            // Only process as table if it looks like one (header + separator + data)
            if (tableLines.length >= 2) {
                const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim());
                // Skip separator line (index 1) which is |---|---|
                const rows = tableLines.slice(2).map(rowLine =>
                    rowLine.split('|').filter(c => c.trim()).map(c => c.trim())
                );

                const headerHtml = headers.map(h =>
                    `<th class="px-6 py-4 text-left text-sm font-bold text-slate-700 bg-slate-50 border-b border-slate-200 whitespace-nowrap">${formatInline(h)}</th>`
                ).join('');

                const rowsHtml = rows.map((row, rowIndex) => {
                    const cells = row.map(cell =>
                        `<td class="px-6 py-4 text-sm text-slate-600 border-b border-slate-100">${formatInline(cell)}</td>`
                    ).join('');
                    return `<tr class="${rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'} hover:bg-slate-50 transition-colors">${cells}</tr>`;
                }).join('');

                result.push(`
                    <div class="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
                        <table class="w-full border-collapse bg-white">
                            <thead>
                                <tr>${headerHtml}</tr>
                            </thead>
                            <tbody>
                                ${rowsHtml}
                            </tbody>
                        </table>
                    </div>
                `);

                i = j - 1; // Advance main loop
                continue;
            }
        }

        if (!line) {
            if (currentListType) flushList();
            continue;
        }

        // H2 - Section header
        if (line.startsWith('## ')) {
            if (currentListType) flushList();
            const title = line.slice(3);
            result.push(`
                <h2 class="flex items-center text-2xl font-bold text-slate-900 mt-16 mb-8 p-4 bg-white border-l-4 border-[#2a9d8f] shadow-sm rounded-r-lg">
                    ${formatInline(title)}
                </h2>
            `);
            continue;
        }

        // H3
        if (line.startsWith('### ')) {
            if (currentListType) flushList();
            const title = line.slice(4);
            result.push(`<h3 class="flex items-center text-xl font-bold text-slate-800 mt-10 mb-4 border-l-4 border-[#2a9d8f] pl-4">${formatInline(title)}</h3>`);
            continue;
        }

        // YouTube Embed Shortcode: [YOUTUBE:videoId] or \[YOUTUBE:videoId] (Keystatic escapes brackets)
        const youtubeMatch = line.match(/^(\\)?\[YOUTUBE:(.+?)\]$/);
        if (youtubeMatch) {
            if (currentListType) flushList();
            const videoId = youtubeMatch[2];
            result.push(`
                <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-10 mt-8">
                    <iframe
                        class="w-full h-full"
                        src="https://www.youtube.com/embed/${videoId}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            `);
            continue;
        }

        // NoteSalesCTA Shortcode: [NOTE_CTA]
        if (line.trim() === '[NOTE_CTA]') {
            if (currentListType) flushList();

            // Render the CTA HTML structure directly
            result.push(`
                <div class="group relative overflow-hidden rounded-2xl border-2 border-[#2a9d8f] bg-white shadow-lg transition-all hover:shadow-xl my-10 max-w-2xl mx-auto">
                    <!-- Badge -->
                    <div class="absolute right-0 top-0 z-10 rounded-bl-xl bg-[#e76f51] px-4 py-1 text-sm font-bold text-white shadow-md">
                        実際の提出書類
                    </div>

                    <div class="flex flex-col md:flex-row">
                        <!-- Image Section -->
                        <div class="relative h-48 w-full md:h-auto md:w-2/5 overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden"></div>
                            <img
                                src="/images/dtv-visa-thumbnail.webp"
                                alt="DTV Visa Note"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                style="object-fit: cover;"
                            />
                            <div class="absolute bottom-3 left-3 z-20 md:hidden">
                                <span class="inline-block rounded bg-[#2a9d8f] px-2 py-0.5 text-xs font-bold text-white">
                                    合格実績あり
                                </span>
                            </div>
                        </div>

                        <!-- Content Section -->
                        <div class="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div class="mb-2 hidden md:block">
                                <span class="inline-flex items-center gap-1 rounded bg-[#2a9d8f]/10 px-2 py-1 text-xs font-bold text-[#2a9d8f]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                                    DTVビザ申請サポート
                                </span>
                            </div>

                            <h3 class="mb-2 text-xl font-bold leading-tight text-slate-900 md:text-2xl">
                                <span class="inline-block">申請料5万円が没収される前に。</span>
                                <br class="hidden md:block" />
                                <span class="inline-block">
                                    <span class="text-[#e76f51]">「審査通過」した提出書類</span>を全公開
                                </span>
                            </h3>

                            <p class="mb-6 text-sm leading-relaxed text-slate-600">
                                不備で却下されると履歴が傷つきます。ノマド・フリーランスの2名が実際に通過した「ポートフォリオ」と「英文履歴書」をそのまま真似して、確実にビザを勝ち取りませんか？
                            </p>

                            <a
                                href="https://note.com/nomad_dayo/n/neee79f24c62b"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2a9d8f] px-6 py-3.5 font-bold text-white transition-all hover:bg-[#268c80] hover:scale-[1.02] shadow-md md:w-auto"
                            >
                                <span>合格書類テンプレートを見る</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </a>

                            <p class="mt-3 text-center text-xs text-slate-500 md:text-left">
                                <span class="font-bold text-[#e76f51]">※現在リリース記念価格 (¥2,980→1,980)</span>
                            </p>
                        </div>
                    </div>
                </div>
            `);
            continue;
        }

        // LineCTA Component: <LineCTA text="..." url="..." />
        const lineCtaMatch = line.match(/^<LineCTA\s+text="(.+?)"\s+url="(.+?)"\s*\/>$/);
        if (lineCtaMatch) {
            if (currentListType) flushList();
            const ctaText = lineCtaMatch[1];
            const ctaUrl = lineCtaMatch[2];
            result.push(`
                <div class="flex flex-col items-center mt-6 mb-10">
                    <a href="${ctaUrl}" target="_blank" rel="noopener noreferrer" class="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#06C755] to-[#00B900] rounded-full hover:scale-105 hover:shadow-lg shadow-md">
                        <span>${ctaText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                </div>
            `);
            continue;
        }

        // HTML Pass-through
        if (line.match(/^\s*<\/?(div|h3|h4|span|p|svg|path|ul|ol|li)(>| .*?>)/)) {
            if (currentListType) flushList();
            result.push(line);
            continue;
        }

        // Standard HTML <details>
        if (line === '<details>' || line.startsWith('<details ')) {
            if (currentListType) flushList();
            result.push(`
                <details class="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-4">
            `);
            continue;
        }
        if (line === '</details>') {
            if (currentListType) flushList();
            result.push(`
                    </div>
                </details>
            `);
            continue;
        }

        // Standard HTML <summary>
        const summaryMatch = line.match(/^<summary>(.+?)<\/summary>$/);
        if (summaryMatch) {
            if (currentListType) flushList();
            const summaryText = summaryMatch[1];
            result.push(`
                <summary class="flex items-center justify-between font-bold text-lg cursor-pointer text-slate-800 list-none outline-none">
                    ${formatInline(summaryText)}
                    <span class="transition-transform group-open:rotate-180 text-[#2a9d8f]">▼</span>
                </summary>
                <div class="mt-4 text-slate-700 leading-relaxed border-t pt-4 border-slate-100">
            `);
            continue;
        }

        if (line === '<summary>') {
            if (currentListType) flushList();
            // Handle multiline or simple <summary> starts
            let summaryContent = '';
            let j = i + 1;
            while (j < lines.length && !lines[j].includes('</summary>')) {
                summaryContent += lines[j].trim() + ' ';
                j++;
            }
            if (j < lines.length && lines[j].includes('</summary>')) {
                const closingMatch = lines[j].match(/(.*?)<\/summary>/);
                if (closingMatch) summaryContent += closingMatch[1].trim();
                i = j;
            }

            result.push(`
                <summary class="flex items-center justify-between font-bold text-lg cursor-pointer text-slate-800 list-none outline-none">
                    ${formatInline(summaryContent.trim())}
                    <span class="transition-transform group-open:rotate-180 text-[#2a9d8f]">▼</span>
                </summary>
                <div class="mt-4 text-slate-700 leading-relaxed border-t pt-4 border-slate-100">
            `);
            continue;
        }

        // FAQItem
        const faqMatch = line.match(/^<FAQItem question="(.+?)">/);
        if (faqMatch) {
            if (currentListType) flushList();
            const question = faqMatch[1];
            result.push(`
                <details class="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-4">
                    <summary class="flex items-center justify-between font-bold text-lg cursor-pointer text-slate-800 list-none">
                        ${formatInline(question)}
                        <span class="transition-transform group-open:rotate-180 text-[#2a9d8f]">▼</span>
                    </summary>
                    <div class="mt-4 text-slate-700 leading-relaxed border-t pt-4 border-slate-100">
            `);
            continue;
        }

        // </FAQItem>
        if (line.trim() === '</FAQItem>') {
            if (currentListType) flushList();
            result.push(`
                    </div>
                </details>
            `);
            continue;
        }

        // Ordered List (1. item)
        const olMatch = line.match(/^(\d+)\.\s+(.+)$/);
        if (olMatch) {
            // If checking switching from ul to ol or vice versa, flush
            if (currentListType === 'ul') flushList();

            currentListType = 'ol';
            const number = olMatch[1];
            const content = olMatch[2];

            listItems.push(`
                <li class="flex items-start gap-3">
                    <span class="flex items-center justify-center w-6 h-6 bg-[#2a9d8f] text-white rounded-full text-xs flex-shrink-0 font-bold mt-0.5">${number}</span>
                    <span class="text-slate-700 leading-relaxed pt-0.5">${formatInline(content)}</span>
                </li>
            `);
            continue;
        }

        // Unordered List item (- or *)
        const listMatch = line.match(/^([-*])\s+(.+)$/);
        if (listMatch) {
            // If checking switching from ol to ul, flush
            if (currentListType === 'ol') flushList();

            currentListType = 'ul';
            const content = listMatch[2];

            // Check if the content starts with a link (likely a related article)
            const isLink = content.trim().startsWith('[');

            if (isLink) {
                listItems.push(`
                    <li class="flex items-start gap-3">
                        <span class="flex items-center justify-center w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 ml-1 flex-shrink-0"></span>
                        <span class="text-slate-700 leading-relaxed hover:text-[#2a9d8f] transition-colors w-full">${formatInline(content)}</span>
                    </li>
                `);
            } else {
                listItems.push(`
                    <li class="flex items-start gap-3">
                        <span class="flex items-center justify-center w-5 h-5 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full text-xs mt-1 flex-shrink-0">✓</span>
                        <span class="text-slate-700 leading-relaxed">${formatInline(content)}</span>
                    </li>
                `);
            }
            continue;
        }

        // Blockquote
        // Matches > Text
        const blockquoteMatch = line.match(/^>\s?(.*)$/);
        if (blockquoteMatch) {
            if (currentListType) flushList();
            const content = blockquoteMatch[1];

            // Check if the previous line was also a blockquote to merge them?
            // For simplicity in this parser, we might just render individual blockquotes 
            // or we need a state to merge them.
            // Let's implement a simple state for blockquotes similar to lists if we want them in one container.

            // Actually, simpler implementation for now: 
            // If the parser sees `> `, it opens a blockquote. If the next line is also `> `, it's part of the same one.
            // But my current loop is line-by-line. 
            // Let's look ahead to capture the full blockquote.

            let blockquoteContent = content;
            let j = i + 1;
            while (j < lines.length && lines[j].trim().startsWith('>')) {
                const nextLineMatch = lines[j].trim().match(/^>\s?(.*)$/);
                if (nextLineMatch) {
                    blockquoteContent += '<br/>' + nextLineMatch[1];
                }
                j++;
            }
            i = j - 1;

            result.push(`
                <blockquote class="relative pl-10 pr-4 py-4 my-8 mx-0 text-slate-600 italic leading-relaxed border-l-4 border-slate-300 bg-slate-50/30 rounded-r-lg">
                    <span class="absolute top-2 left-3 text-4xl text-slate-300 font-serif leading-none">“</span>
                    ${formatInline(blockquoteContent)}
                </blockquote>
            `);
            continue;
        }

        // Paragraph
        if (currentListType) flushList();
        result.push(`<p class="text-lg leading-loose text-slate-700 mb-6">${formatInline(line)}</p>`);
    }

    // Flush any remaining list at the end of the file
    if (currentListType) flushList();

    // Table processing
    let processedHtml = result.join('\n');

    // Convert markdown tables to styled HTML tables
    // Match headers: | Header | Header |
    // Match separator: | --- | --- |
    // Match rows: | Row | Row |
    processedHtml = processedHtml.replace(/\|(.+)\|\n\|([-:| ]+)\|\n((?:\|.*\|\n?)+)/g, (match, headerStr, separatorStr, rowsStr) => {
        const headers = headerStr.split('|').filter((h: string) => h.trim()).map((h: string) => h.trim());
        const rows = rowsStr.trim().split('\n').map((row: string) =>
            row.split('|').filter(c => c.trim() !== '').map(c => c.trim())
        );

        const headerHtml = headers.map((h: string) =>
            `<th class="px-6 py-4 text-left text-sm font-bold text-slate-700 bg-slate-50 border-b border-slate-200">${formatInline(h)}</th>`
        ).join('');

        const rowsHtml = rows.map((row: string[]) => {
            const cells = row.map((cell: string) =>
                `<td class="px-6 py-4 text-sm text-slate-600 border-b border-slate-100">${formatInline(cell)}</td>`
            ).join('');
            return `<tr class="hover:bg-slate-50/50 transition-colors">${cells}</tr>`;
        }).join('');

        return `
            <div class="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
                <table class="w-full border-collapse bg-white">
                    <thead>
                        <tr>${headerHtml}</tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            </div>
        `;
    });

    return processedHtml;
}

function formatInline(text: string): string {
    return text
        // Links: [text](url) -> <a href="url">text</a>
        .replace(/\[(.+?)\]\((.+?)\)/g, (match, text, url) => {
            const isExternal = url.startsWith('http');
            const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
            return `<a href="${url}"${targetAttr} class="text-[#4682B4] hover:text-blue-800 hover:underline font-medium transition-colors inline-flex items-center gap-1">${text}<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>`;
        })
        // Bold text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`(.+?)`/g, '<code class="bg-slate-100 text-[#2a9d8f] px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    // メタ情報は Keystatic の reader で読む（YAML を正しく解釈するため）。
    // 本文は独自の markdown パーサに渡すので、raw テキストとしてファイルからも読む。
    const post = await reader.collections.posts.read(slug);
    if (!post) {
        notFound();
    }

    const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`);

    let fileContent: string;
    try {
        fileContent = await fs.readFile(filePath, 'utf-8');
    } catch {
        notFound();
    }

    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (!frontmatterMatch) {
        notFound();
    }

    const content = frontmatterMatch[2].trim();

    const title = post.title || 'Untitled';
    const publishedDate = post.publishedDate ?? null;
    const category = post.category ?? null;
    const thumbnail = post.thumbnail || '/images/blog-default.webp';
    const description = post.description || '';
    const tags = (post.tags ?? []).filter((t): t is string => Boolean(t));

    const canonicalUrl = `https://totonoi-thai.com/ja/blog/${slug}`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: thumbnail.startsWith('/') ? `https://totonoi-thai.com${thumbnail}` : thumbnail,
        ...(publishedDate && { datePublished: publishedDate }),
        ...(publishedDate && { dateModified: publishedDate }),
        author: {
            '@type': 'Organization',
            name: 'TOTONOI THAI 編集部',
            url: 'https://totonoi-thai.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://totonoi-thai.com/character/totonoi-logo.png',
            },
        },
        publisher: {
            '@type': 'Organization',
            name: 'TOTONOI THAI',
            url: 'https://totonoi-thai.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://totonoi-thai.com/character/totonoi-logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
        },
        ...(tags.length > 0 && { keywords: tags.join(', ') }),
        ...(category && { articleSection: category }),
    };

    const htmlContent = parseMarkdown(content);

    return (
        <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Header */}
            {/* Hero Header */}
            <div className="relative min-h-[50vh] w-full flex flex-col justify-end">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 container max-w-4xl mx-auto px-4 pb-12 pt-40">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm mb-6 text-white/90 hover:text-[#9fe870] transition-colors bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        記事一覧に戻る
                    </Link>

                    {category && (
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-[#2a9d8f]/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                                {category}
                            </span>
                        </div>
                    )}

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-xl">
                        {title}
                    </h1>

                    {publishedDate && (
                        <time className="text-white/80 text-sm">
                            {new Date(publishedDate).toLocaleDateString('ja-JP', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    )}
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="container max-w-6xl mx-auto px-4 mt-12">
                <div className="lg:flex lg:gap-12 items-start">
                    {/* Article Content (Left) */}
                    <div className="w-full lg:flex-1 min-w-0">
                        <div className="prose prose-lg prose-slate max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        </div>


                        {/* Author Profile Box (E-E-A-T) */}
                        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                            <div className="flex items-start gap-5">
                                <img
                                    src="/character/totonoi-logo.png"
                                    alt="TOTONOI THAI 編集部"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-contain bg-slate-50 border border-slate-100 p-1 flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-[#2a9d8f] font-bold tracking-wider uppercase mb-1">執筆</p>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">TOTONOI THAI 編集部</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        タイ在住の日本人による編集部。DTVビザの取得や現地での生活・手続きをすべて自分たちで経験し、その実体験に基づいてタイ移住・生活・ビザ・税金の情報を発信しています。
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <a
                                            href="https://www.youtube.com/channel/UCSpo7KdBG5sPBhcvSSWDntA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#2a9d8f] transition-colors"
                                        >
                                            ▶ YouTube（ポッドキャスト）
                                        </a>
                                        <a
                                            href="https://note.com/nomad_dayo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#2a9d8f] transition-colors"
                                        >
                                            ✎ note
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ビザ関連記事の読了直後は購入意欲が最も高いため、note CTA を自動表示 */}
                        {category === 'ビザ・手続き' && <NoteSalesCTA />}

                        {/* 回遊導線: モバイルはサイドバー非表示のため、ここが唯一の次の一手になる */}
                        <RelatedPosts currentSlug={slug} category={category} />

                        <div className="mt-16 text-center lg:text-left border-t pt-10 border-slate-100">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-slate-500 hover:text-[#2a9d8f] transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                記事一覧に戻る
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar (Right) - Desktop Only for now (or make it appear below on mobile) */}
                    <aside className="hidden lg:block w-[340px] shrink-0 space-y-8">
                        {/* Profile/Author Card could go here too */}

                        {/* Tools Widget */}
                        <BlogSidebar />

                        {/* Newsletter or other widgets */}
                    </aside>
                </div>
            </div>

        </article>
    );
}
