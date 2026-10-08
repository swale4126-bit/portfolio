import { motion } from "framer-motion";
import wa1 from "../assets/wa1.jpg";

function Home() {
    return (
        <section id="home" className="pt-20 pb-16 bg-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 items-center gap-12">
                    {/* Left */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
                        >
                            Hello, I'm <span className="text-blue-600">Wale Solomon</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-2xl font-medium text-gray-700"
                        >
                            Full-Stack Web Developer
                        </motion.h2>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            I am an Information Systems student at Hawassa University and a Full-Stack Web Developer focused on building modern, responsive, and practical web applications using React.js, Tailwind CSS, Node.js, Express.js, and PostgreSQL.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm hover:shadow-md"
                            >
                                View My Projects
                            </a>

                            <a
                                href="/assets/Wale-Solomon-CV.pdf"
                                download
                                className="bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium shadow-sm"
                            >
                                Download CV
                            </a>

                            <a
                                href="#contact"
                                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium shadow-sm"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <img
                            src={wa1}
                            alt="Wale Solomon"
                            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-5xl mx-auto mt-20 px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">3+</h3>
                        <p className="text-gray-600 font-medium mt-1">Featured Projects</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">10+</h3>
                        <p className="text-gray-600 font-medium mt-1">Technologies</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">2+</h3>
                        <p className="text-gray-600 font-medium mt-1">Full-Stack Applications</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">1</h3>
                        <p className="text-gray-600 font-medium mt-1">Professional Portfolio</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;