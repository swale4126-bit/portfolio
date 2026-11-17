import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import wa1 from "../assets/wa1.jpg";

function Home() {
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/wale-solomon-080173429",
            icon: <FaLinkedin className="text-xl" />,
            hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
            label: "LinkedIn Profile"
        },
        {
            name: "GitHub",
            href: "https://github.com/swale4126-bit",
            icon: <FaGithub className="text-xl" />,
            hoverClass: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
            label: "GitHub Profile"
        },
        {
            name: "Email",
            href: "mailto:swale4126@gmail.com",
            icon: <FaEnvelope className="text-xl" />,
            hoverClass: "hover:bg-red-500 hover:text-white hover:border-red-500",
            label: "Send Email"
        },
        {
            name: "Telegram",
            href: "https://t.me/wsm51921",
            icon: <FaTelegramPlane className="text-xl" />,
            hoverClass: "hover:bg-blue-500 hover:text-white hover:border-blue-500",
            label: "Telegram Contact"
        },
        {
            name: "Phone",
            href: "tel:+251963621997",
            icon: <FaPhoneAlt className="text-lg" />,
            hoverClass: "hover:bg-green-600 hover:text-white hover:border-green-600",
            label: "+251963621997"
        }
    ];

    return (
        <section id="home" className="pt-20 pb-16 bg-white">
            {/* Hero Main Content */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 items-center gap-12">
                    {/* Left Column */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
                        >
                            Hello, I'm <span className="text-blue-600">Wale Solomon</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-3 text-2xl font-medium text-gray-700"
                        >
                            Full-Stack Web Developer
                        </motion.h2>

                        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                            I am an Information Systems student at Hawassa University and a Full-Stack Web Developer focused on building modern, responsive, and practical web applications using React.js, Tailwind CSS, Node.js, Express.js, and PostgreSQL.
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                            >
                                View My Projects
                            </a>

                            <a
                                href="/assets/Wale-Solomon-CV.pdf"
                                download
                                className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium shadow-sm"
                            >
                                Download CV
                            </a>

                            <a
                                href="#contact"
                                className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 font-medium shadow-sm"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Links Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 flex-wrap"
                        >
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
                                Connect:
                            </span>
                            {socialLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={item.label}
                                    className={`w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 flex items-center justify-center transition-all duration-200 ${item.hoverClass}`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <div className="relative">
                            <img
                                src={wa1}
                                alt="Wale Solomon"
                                className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl border-4 border-white bg-gray-100"
                            />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2.5 whitespace-nowrap">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-semibold text-gray-800">
                                    Open to Junior & Remote Roles
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;
