import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-slate-900 py-5'} text-white border-b border-slate-800/50`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide cursor-pointer flex items-center" onClick={(e) => handleScroll(e, '#home')}>
                    Wale<span className="text-blue-500">Dev</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleScroll(e, link.href)}
                                className="relative text-gray-300 hover:text-white transition-colors duration-300 group text-sm uppercase tracking-wider"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-2xl text-gray-300 hover:text-white transition-colors focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-slate-900 border-t border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 shadow-xl' : 'max-h-0'}`}>
                <ul className="flex flex-col px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.name} className="w-full">
                            <a 
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="block w-full py-2 text-gray-300 hover:text-blue-400 hover:pl-2 transition-all duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;