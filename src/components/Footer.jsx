import { FaEnvelope, FaTelegramPlane, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    // TODO: REPLACE WITH REAL GITHUB URL
    const GITHUB_URL = "https://github.com/swale4126-bit/swale412-bit.git";
    
    // TODO: REPLACE WITH REAL LINKEDIN URL
    const LINKEDIN_URL = "https://www.linkedin.com/in/wale-solomon-080173429";

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid md:grid-cols-3 gap-10 mb-12 border-b border-slate-800 pb-12">
                    
                    {/* Brand Info */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-wide mb-4">
                            Wale<span className="text-blue-500">Dev</span>
                        </h2>
                        <h3 className="text-lg text-gray-300 font-medium mb-3">
                            Full-Stack Web Developer
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                            Building modern web applications with React and modern backend technologies.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="text-gray-400 hover:text-blue-400 transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Icons */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold mb-6">Connect</h3>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-gray-400">
                            <a 
                                href={GITHUB_URL} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 p-3 rounded-full hover:bg-gray-700 hover:text-white transition transform hover:scale-110"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a 
                                href={LINKEDIN_URL} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a 
                                href="mailto:swale4126@gmail.com" 
                                className="bg-slate-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition transform hover:scale-110"
                                aria-label="Email"
                            >
                                <FaEnvelope className="text-xl" />
                            </a>
                            <a 
                                href="https://t.me/wsm51921" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 p-3 rounded-full hover:bg-blue-400 hover:text-white transition transform hover:scale-110"
                                aria-label="Telegram"
                            >
                                <FaTelegramPlane className="text-xl" />
                            </a>
                            <a 
                                href="tel:+251963621997" 
                                className="bg-slate-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition transform hover:scale-110"
                                aria-label="Phone"
                            >
                                <FaPhoneAlt className="text-xl" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        © 2026 Wale Solomon. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;