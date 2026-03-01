"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function BreadcrumbJsonLd() {
    const pathname = usePathname();

    // Root is always home
    const breadcrumbs = [
        {
            name: "Home",
            item: "https://totonoi-thai.com",
        },
    ];

    // Split path and accumulate
    const segments = pathname.split("/").filter((p) => p);
    let currentPath = "https://totonoi-thai.com";

    segments.forEach((segment) => {
        currentPath += `/${segment}`;

        // Simple capitalization/formatting for breadcrumb name
        // You might want a dictionary for mapping slugs to nice names
        const name = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

        breadcrumbs.push({
            name: name,
            item: currentPath,
        });
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.item,
        })),
    };

    return (
        <Script
            id="breadcrumb-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="afterInteractive"
        />
    );
}
