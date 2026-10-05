import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import wa1 from "../assets/wa1.jpg";

function Home() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    const GITHUB_URL = "https://github.com/swale4126-bit";
    
    const LINKEDIN_URL = "https://www.linkedin.com/in/wale-solomon-080173429";
    
    const CV_PATH = "/cv.pdf";

    return (
        <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gray-50 flex items-center min-h-[calc(100vh-80px)]">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16">
                    
                    {/* Left Content */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight"
                        >
                            Hi, I'm <span className="text-blue-600">Wale Solomon</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-3 text-xl md:text-2xl font-semibold text-gray-700 tracking-wide"
                        >
                            Full-Stack Web Developer
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 space-y-4 max-w-xl mx-auto md:mx-0"
                        >
                            <p className="text-gray-600 text-lg leading-relaxed">
                                I build modern, responsive, and practical web applications using React, Tailwind CSS, Node.js, Express.js, and PostgreSQL.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                I enjoy turning ideas into reliable digital products with clean interfaces, scalable backend services, and well-structured databases.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start"
                        >
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="bg-blue-600 text-white px-8 py-3.5 rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/30 text-center"
                            >
                                View My Projects
                            </button>
                            
                            <a 
                                href={CV_PATH}
                                download
                                className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 font-semibold shadow-sm text-center"
                            >
                                Download CV
                            </a>

                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="bg-transparent border-2 border-transparent text-gray-600 px-6 py-3.5 rounded-xl hover:text-blue-600 transition-all duration-300 font-medium text-center"
                            >
                                Contact Me
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex justify-center md:justify-start gap-5"
                        >
                            <a 
                                href={GITHUB_URL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 transition-colors duration-300 p-2"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-3xl" />
                            </a>
                            <a 
                                href={LINKEDIN_URL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 transform scale-105"></div>
                            <img 
                                src={wa1} 
                                alt="Wale Solomon" 
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Home;