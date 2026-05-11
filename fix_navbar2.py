import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Make navbar transparent at top and dark when scrolled
# We need to add useEffect for scroll state
if 'import { useState, useEffect }' not in content:
    content = content.replace('import { useState }', 'import { useState, useEffect }')

# Add scroll state
if 'const [scrolled, setScrolled] = useState(false);' not in content:
    content = content.replace('const [isOpen, setIsOpen] = useState(false);', '''const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);''')

# Replace <nav> class
content = re.sub(
    r'<nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted">',
    '<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#020B18]/90 backdrop-blur-md border-b border-white/10 py-1" : "bg-transparent py-4"}`}>',
    content
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
