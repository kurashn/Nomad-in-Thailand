
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
    title: "タイ移住完全ガイド2026 | Nomad in Thailand (Secret)",
    description: "公式LINE友だち限定公開の特別ガイド。ビザ、生活費、エリア、移住チェックリストを完全網羅。",
};

export default function SecretLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
