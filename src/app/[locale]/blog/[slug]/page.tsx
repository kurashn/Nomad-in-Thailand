import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import { ArrowLeft } from 'lucide-react';
import { reader } from '@/lib/reader';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await reader.collections.posts.all();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`);

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n/);

        if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title:\s*(.+)/);
            const descriptionMatch = frontmatter.match(/description:\s*(.+)/);
            const thumbnailMatch = frontmatter.match(/thumbnail:\s*(.+)/);

            const title = titleMatch ? titleMatch[1].trim() : 'Nomad in Thailand';
            const description = descriptionMatch ? descriptionMatch[1].trim() : 'タイ在住の日本人ノマドのためのコミュニティメディア';
            const thumbnail = thumbnailMatch ? thumbnailMatch[1].trim() : '/images/blog-default.jpg';

            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    images: [thumbnail],
                    type: 'article',
                },
                twitter: {
                    card: 'summary_large_image',
                    title,
                    description,
                    images: [thumbnail],
                },
            };
        }
    } catch (e) {
        console.error('Failed to generate metadata:', e);
    }

    return {
        title: 'Nomad in Thailand',
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
    let sectionNumber = 0;
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            result.push(`<div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-8">
                <ul class="space-y-1">
                    ${listItems.join('\n')}
                </ul>
            </div>`);
            listItems = [];
        }
        inList = false;
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Table processing
        if (line.startsWith('|')) {
            if (inList) flushList();

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
            if (inList) flushList();
            continue;
        }

        // H2 - Numbered section header
        if (line.startsWith('## ')) {
            if (inList) flushList();
            sectionNumber++;
            const title = line.slice(3);
            result.push(`
                <h2 class="flex items-center gap-3 text-2xl font-bold border-b pb-4 mb-8 text-slate-900 mt-16">
                    <span class="flex items-center justify-center w-8 h-8 bg-[#2a9d8f] text-white rounded-full text-base flex-shrink-0">${sectionNumber}</span>
                    <span>${formatInline(title)}</span>
                </h2>
            `);
            continue;
        }

        // H3
        if (line.startsWith('### ')) {
            if (inList) flushList();
            const title = line.slice(4);
            result.push(`<h3 class="font-bold text-xl text-slate-800 mt-10 mb-4">${formatInline(title)}</h3>`);
            continue;
        }

        // YouTube Embed Shortcode: [YOUTUBE:videoId]
        const youtubeMatch = line.match(/^\[YOUTUBE:(.+?)\]$/);
        if (youtubeMatch) {
            if (inList) flushList();
            const videoId = youtubeMatch[1];
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

        // HTML Pass-through for div (bypass details/summary as we handle them explicitly below)
        if (line.match(/^<\/?div(>| .*?>)/)) {
            if (inList) flushList();
            result.push(line);
            continue;
        }

        // Standard HTML <details> -> Styled Accordion
        if (line.trim() === '<details>') {
            if (inList) flushList();
            result.push(`
                <details class="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-4">
            `);
            continue;
        }
        if (line.trim() === '</details>') {
            if (inList) flushList();
            result.push(`
                    </div>
                </details>
            `);
            continue;
        }

        // Standard HTML <summary> -> Styled Summary
        // Matches <summary>Text</summary>
        const summaryMatch = line.match(/^<summary>(.+?)<\/summary>$/);
        if (summaryMatch) {
            if (inList) flushList();
            const summaryText = summaryMatch[1];
            result.push(`
                <summary class="flex items-center justify-between font-bold text-lg cursor-pointer text-slate-800 list-none">
                    ${formatInline(summaryText)}
                    <span class="transition-transform group-open:rotate-180 text-[#2a9d8f]">▼</span>
                </summary>
                <div class="mt-4 text-slate-700 leading-relaxed border-t pt-4 border-slate-100">
            `);
            continue;
        }

        // Accordion Component Parsing (using FAQItem tag from Keystatic)
        // <FAQItem question="...">
        const faqMatch = line.match(/^<FAQItem question="(.+?)">/);
        if (faqMatch) {
            if (inList) flushList();
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
            if (inList) flushList();
            result.push(`
                    </div>
                </details>
            `);
            continue;
        }

        // List item - use regex to match * or - with simpler whitespace handling
        const listMatch = line.match(/^([-*])\s+(.+)$/);
        if (listMatch) {
            inList = true;
            const content = listMatch[2];

            // Check if the content starts with a link (likely a related article or resource)
            // In this case, use a simple bullet instead of a checkmark
            // Allow for potential spaces like [ Link ]
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

        // Paragraph
        if (inList) flushList();
        result.push(`<p class="text-lg leading-loose text-slate-700 mb-6">${formatInline(line)}</p>`);
    }

    // Flush any remaining list at the end of the file
    if (inList) flushList();

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
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#4682B4] hover:text-blue-800 hover:underline font-medium transition-colors inline-flex items-center gap-1">$1<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>')
        // Bold text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`(.+?)`/g, '<code class="bg-slate-100 text-[#2a9d8f] px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    // Read the MDX file directly
    const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`);

    let fileContent: string;
    try {
        fileContent = await fs.readFile(filePath, 'utf-8');
    } catch {
        notFound();
    }

    // Parse frontmatter and content
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (!frontmatterMatch) {
        notFound();
    }

    const frontmatter = frontmatterMatch[1];
    const content = frontmatterMatch[2].trim();

    // Parse frontmatter fields
    const titleMatch = frontmatter.match(/title:\s*(.+)/);
    const dateMatch = frontmatter.match(/publishedDate:\s*(.+)/);
    const categoryMatch = frontmatter.match(/category:\s*(.+)/);
    const thumbnailMatch = frontmatter.match(/thumbnail:\s*(.+)/);

    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';
    const publishedDate = dateMatch ? dateMatch[1].trim() : null;
    const category = categoryMatch ? categoryMatch[1].trim() : null;
    const thumbnail = thumbnailMatch ? thumbnailMatch[1].trim() : '/images/blog-default.jpg';

    const htmlContent = parseMarkdown(content);

    return (
        <article className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
            {/* Hero Header */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="w-full h-full relative">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 container max-w-4xl mx-auto px-4 pb-12">
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

            {/* Main Content */}
            <div className="container max-w-3xl mx-auto px-4 mt-12">
                {/* Introduction styling */}
                <div className="prose prose-lg prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-500 hover:text-[#2a9d8f] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
