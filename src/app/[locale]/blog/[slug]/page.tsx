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

        // Table processing
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

        // YouTube Embed Shortcode: [YOUTUBE:videoId]
        const youtubeMatch = line.match(/^\[YOUTUBE:(.+?)\]$/);
        if (youtubeMatch) {
            if (currentListType) flushList();
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
                <div className="relative z-20 container max-w-4xl mx-auto px-4 pb-12 pt-24">
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
