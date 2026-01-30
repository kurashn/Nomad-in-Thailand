"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();

    const switchLocale = (locale: string) => {
        router.replace(pathname, { locale });
        setIsOpen(false);
    };

    const menuItems = [
        { href: "/", label: t('top') },
        { href: "/nomad-info", label: t('nomadGuide') },
        { href: "/blog", label: t('column') },
        { href: "/nomad-info/sponsor", label: t('sponsor') },
        { href: "/contact", label: t('contact') },
    ];

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted">
            <div className="w-full pl-[20px] pr-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
                            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                <Image
                                    src="/character/nomad-dog-hero-transparent.png"
                                    alt="Nomad in Thailand Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg md:text-xl leading-none tracking-tight text-foreground">
                                    Nomad in Thailand
                                </span>
                                <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-wide">
                                    -ノマタイ-
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 ml-10">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Language Switcher Desktop - Improved Design */}
                        <div className="flex items-center border-l pl-4 ml-4">
                            <div className="flex items-center bg-muted/50 rounded-full p-1 gap-1">
                                <button
                                    onClick={() => switchLocale('ja')}
                                    className={`px-3 py-1.5 text-sm font-bold rounded-full transition-all duration-200 ${currentLocale === 'ja'
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        }`}
                                >
                                    🇯🇵 JP
                                </button>
                                <button
                                    onClick={() => switchLocale('en')}
                                    className={`px-3 py-1.5 text-sm font-bold rounded-full transition-all duration-200 ${currentLocale === 'en'
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        }`}
                                >
                                    🇺🇸 EN
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="-mr-2 flex md:hidden items-center gap-3">
                        {/* Language Switcher Mobile - Improved Design */}
                        <div className="flex items-center bg-muted/50 rounded-full p-0.5 gap-0.5">
                            <button
                                onClick={() => switchLocale('ja')}
                                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${currentLocale === 'ja'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                🇯🇵
                            </button>
                            <button
                                onClick={() => switchLocale('en')}
                                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${currentLocale === 'en'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                🇺🇸
                            </button>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-muted bg-background">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-muted transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
