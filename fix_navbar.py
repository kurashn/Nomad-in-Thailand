import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace menuItems
content = re.sub(
    r'const menuItems = \[.*?\];',
    '''const menuItems = [
        { href: "/", label: t('home') },
        { href: "/#about", label: t('about') },
        { href: "/#programs", label: t('programs') },
        { href: "/#facilities", label: t('facilities') },
        { href: "/#faq", label: t('faq') },
    ];''',
    content,
    flags=re.DOTALL
)

# Replace logo section
content = re.sub(
    r'<Image\s+src="/character/totonoi-logo\.png" unoptimized\s+alt="TOTONOI THAI Logo"\s+fill\s+className="object-contain"\s+priority\s+/>\s+</div>\s+<div className="flex flex-col">\s+<span className="font-bold text-lg md:text-xl leading-none tracking-tight text-foreground">\s+TOTONOI THAI\s+</span>\s+<span className="text-\[10px\] md:text-xs font-medium text-muted-foreground tracking-wide">\s+- タイ移住×ウェルネス -\s+</span>\s+</div>',
    '''<Image
                                        src="/character/totonoi-logo.png" unoptimized
                                        alt="TOTONOI THAI Logo"
                                        fill
                                        className="object-contain brightness-0 invert"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col text-white">
                                    <span className="font-bold text-lg md:text-xl leading-none tracking-tight">
                                        TOTONOI THAI
                                    </span>
                                    <span className="text-[10px] md:text-xs font-medium text-white/80 tracking-wide mt-1">
                                        整う、純粋、人生を整える。
                                    </span>
                                </div>''',
    content,
    flags=re.DOTALL
)

# Replace desktop menu
content = re.sub(
    r'<div className="hidden lg:flex items-center space-x-8 ml-10">.*?</div>',
    '''<div className="hidden lg:flex items-center space-x-6 ml-auto">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-[#00A37E] transition-colors px-2 py-2 rounded-md text-sm font-bold text-white whitespace-nowrap drop-shadow-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="https://lin.ee/VRrmYI1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00A37E] hover:bg-[#008c6a] text-white font-bold text-sm transition-all shadow-md group"
                            >
                                {t('reserve')}
                                <span className="ml-2 bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                    import { ArrowRight } from "lucide-react"; // Note: ArrowRight is already imported at top
                                    <ArrowRight className="w-3 h-3" />
                                </span>
                            </a>
                        </div>''',
    content,
    flags=re.DOTALL
)

# Replace mobile line CTA
content = re.sub(
    r'<a\s+href="https://lin.ee/VRrmYI1"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="flex items-center justify-center w-full px-5 py-4 rounded-xl bg-\[#06C755\] text-white font-bold shadow-md hover:bg-\[#05b34c\] transition-colors"\s+onClick=\{\(\) => setIsOpen\(false\)\}\s+>\s+\{t\(\'line\'\)\}\s+</a>',
    '''<a
                                    href="https://lin.ee/VRrmYI1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-5 py-4 rounded-xl bg-[#00A37E] text-white font-bold shadow-md hover:bg-[#008c6a] transition-colors group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('reserve')}
                                    <span className="ml-3 bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </a>''',
    content,
    flags=re.DOTALL
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
