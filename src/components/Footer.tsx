"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-muted py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div>
                            <div className="mb-4">
                                <div className="relative w-24 h-24">
                                    <Image
                                        src="/character/nomad-dog-waving-new.png"
                                        alt="Nomad Dog"
                                        fill
                                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">コンテンツ</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/events" className="hover:text-primary transition-colors">イベント情報</Link></li>
                            <li><Link href="/nomad-info" className="hover:text-primary transition-colors">ノマド情報</Link></li>
                            <li><Link href="/living" className="hover:text-primary transition-colors">タイ生活情報</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">つながる</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="https://www.youtube.com/@T78community" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    YouTube: 海外ノマドポッドキャスト
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    お問い合わせ
                                </Link>
                            </li>
                            <li>
                                <span className="text-muted-foreground cursor-not-allowed">
                                    メルマガ (準備中)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-muted text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Nomad Place. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
