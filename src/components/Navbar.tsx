"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, MessageCircle } from "lucide-react";
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
        { href: "/#about", label: t('about') },
        { href: "/blog", label: t('column') },
    ];

    return (
        <>
            <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted">
                <div className="w-full pl-[20px] pr-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                    <Image
                                        src="/character/totonoi-logo.png" unoptimized
                                        alt="TOTONOI THAI Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg md:text-xl leading-none tracking-tight text-foreground">
                                        TOTONOI THAI
                                    </span>
                                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-wide">
                                        - タイ移住×ウェルネス -
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8 ml-10">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </div>

                        <div className="-mr-2 flex lg:hidden items-center gap-3">

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
            </nav>

            {/* Mobile Menu Overlay - outside nav to avoid height constraint */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 lg:hidden flex flex-col"
                        style={{ zIndex: 9999, background: '#FFFBF7' }}
                    >
                        {/* Header with logo & close */}
                        <div className="flex items-center justify-between px-5 h-16 border-b border-muted/50 flex-shrink-0">
                            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                                <div className="relative w-10 h-10 flex-shrink-0">
                                    <Image
                                        src="/character/totonoi-logo.png" unoptimized
                                        alt="TOTONOI THAI Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg leading-none tracking-tight text-foreground">
                                        TOTONOI THAI
                                    </span>
                                    <span className="text-[10px] font-medium text-muted-foreground tracking-wide">
                                        - タイ移住×ウェルネス -
                                    </span>
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-7 h-7 text-foreground" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
                            <div className="space-y-1">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center px-4 py-4 text-lg font-semibold text-foreground hover:text-primary hover:bg-muted/50 rounded-xl transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="my-6 border-t border-muted/50" />

                            {/* Official LINE Button */}
                            <div className="px-4 mb-6">
                                <a
                                    href="https://lin.ee/VRrmYI1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-5 py-4 rounded-xl bg-[#06C755] text-white font-bold shadow-md hover:bg-[#05b34c] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('line')}
                                </a>
                            </div>

                        </div>
                    </div>
                )
            }
        </>
    );
}
