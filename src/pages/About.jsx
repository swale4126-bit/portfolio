import { motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-10 items-start">
                    {/* Left Column: Who I Am */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-3 text-lg text-gray-600 leading-relaxed space-y-5"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Who I Am</h3>
                        <p>
                            I am an Information Systems student at Hawassa University and a <span className="font-semibold text-gray-900">Full-Stack Web Developer</span> focused on building modern, responsive, and practical web applications.
                        </p>
                        <p>
                            I have hands-on experience developing frontend interfaces with <span className="text-blue-600 font-medium">React.js and Tailwind CSS</span>, building backend services with <span className="text-green-600 font-medium">Node.js and Express.js</span>, and working with <span className="text-blue-500 font-medium">PostgreSQL and MySQL databases</span>.
                        </p>
                        <p>
                            I enjoy turning real-world requirements into useful software solutions and continuously improving my skills through practical development projects.
                        </p>
                        
                        <div className="pt-4">
                            <a 
                                href="#projects" 
                                className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm hover:shadow-md text-sm"
                            >
                                View My Projects
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Quick Facts */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-2 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">Quick Facts</h3>
                        
                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-lg">🎓</span>
                                <div>
                                    <strong className="block text-gray-900 font-semibold">Information Systems</strong>
                                    Hawassa University
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lg">💻</span>
                                <div>
                                    <strong className="block text-gray-900 font-semibold">Full-Stack Development</strong>
                                    React.js • Node.js • Express.js
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lg">🗄️</span>
                                <div>
                                    <strong className="block text-gray-900 font-semibold">Databases</strong>
                                    PostgreSQL • MySQL
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lg">📱</span>
                                <div>
                                    <strong className="block text-gray-900 font-semibold">Responsive Development</strong>
                                    Modern responsive web applications
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>
        </section>
    );
}

export default About;