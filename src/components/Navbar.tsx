"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const switchLocale = (locale: string) => {
        router.replace(pathname, { locale });
        setIsOpen(false);
    };

    const menuItems = [
        { href: "/", label: "ホーム" },
        { href: "/#about", label: "TOTONOI THAIとは" },
        { href: "/retreat", label: "リトリート合宿" },
        { href: "/blog", label: "タイ生活情報" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-[#020B18]/95 backdrop-blur-md border-b border-white/10"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src="/character/totonoi-logo.png"
                                    unoptimized
                                    alt="TOTONOI THAI Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className="font-black text-base md:text-lg leading-tight tracking-widest text-white"
                                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
                                >
                                    TOTONOI THAI
                                </span>
                                <span
                                    className="text-[10px] font-medium text-white/70 tracking-wider"
                                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                                >
                                    タイ移住×ウェルネス
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-bold text-white hover:text-[#00A37E] transition-colors whitespace-nowrap"
                                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <a
                                href="https://lin.ee/WYck3Sx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A37E] hover:bg-[#008c6a] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#00A37E]/40 whitespace-nowrap"
                            >
                                イベント情報を受け取る
                                <span className="bg-white/20 rounded-full p-0.5">
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-md"
                            aria-label="Toggle menu"
                        >
                            {isOpen
                                ? <X className="h-6 w-6 text-white" style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.8))" }} />
                                : <Menu className="h-6 w-6 text-white" style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.8))" }} />
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 lg:hidden flex flex-col"
                    style={{ zIndex: 9999, background: '#020B18' }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src="/character/totonoi-logo.png"
                                    unoptimized
                                    alt="TOTONOI THAI Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-base text-white tracking-widest leading-tight">
                                    TOTONOI THAI
                                </span>
                                <span className="text-[10px] text-white/60 tracking-wider">
                                    タイ移住×ウェルネス
                                </span>
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-7 h-7 text-white" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
                        <div className="space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center px-4 py-4 text-lg font-bold text-white hover:text-[#00A37E] hover:bg-white/5 rounded-xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="my-6 border-t border-white/10" />

                        <div className="px-4">
                            <a
                                href="https://lin.ee/WYck3Sx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full px-5 py-4 rounded-xl bg-[#00A37E] text-white font-bold shadow-lg hover:bg-[#008c6a] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                イベント情報を受け取る
                                <span className="bg-white/20 p-1.5 rounded-full">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
