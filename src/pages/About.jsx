import { motion } from "framer-motion";
import { FaLayerGroup, FaServer, FaDatabase, FaMobileAlt, FaGraduationCap } from "react-icons/fa";

function About() {
    const focusAreas = [
        {
            title: "Full-Stack Web Applications",
            desc: "Connecting responsive frontend interfaces with secure, reliable backend architectures.",
            icon: <FaLayerGroup className="text-blue-600 text-xl" />
        },
        {
            title: "REST API Development",
            desc: "Designing structured endpoints, robust authentication, and clean JSON payloads.",
            icon: <FaServer className="text-emerald-600 text-xl" />
        },
        {
            title: "Database-Driven Systems",
            desc: "Organizing relational schemas, data integrity, and queries in PostgreSQL and MySQL.",
            icon: <FaDatabase className="text-indigo-600 text-xl" />
        },
        {
            title: "Responsive User Interfaces",
            desc: "Crafting intuitive, accessible, and mobile-friendly component layouts.",
            icon: <FaMobileAlt className="text-purple-600 text-xl" />
        }
    ];

    return (
        <section id="about" className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Who I Am */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                            Full-Stack Web Developer
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Building Practical, High-Impact Web Solutions
                        </h3>

                        <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                            <p>
                                I am an Information Systems student at Hawassa University and a <strong className="text-gray-900 font-semibold">Full-Stack Web Developer</strong> focused on building modern, responsive, and practical web applications.
                            </p>
                            <p>
                                I have experience developing frontend applications with <span className="text-blue-600 font-medium">React.js and Tailwind CSS</span>, building backend services with <span className="text-emerald-600 font-medium">Node.js and Express.js</span>, and working with relational databases such as <span className="text-indigo-600 font-medium">PostgreSQL and MySQL</span>.
                            </p>
                            <p>
                                I enjoy solving practical problems through software development, learning new technologies, and building applications that provide useful solutions.
                            </p>
                        </div>

                        {/* Education Badge & Action */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl">
                                <FaGraduationCap className="text-blue-600 text-xl" />
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Education</p>
                                    <p className="text-sm font-semibold text-gray-900">B.Sc. Information Systems, Hawassa University</p>
                                </div>
                            </div>

                            <a 
                                href="#projects" 
                                className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md text-sm"
                            >
                                View My Projects
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: My Development Focus */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm"
                    >
                        <div className="border-b border-gray-200 pb-4 mb-5">
                            <h3 className="text-xl font-bold text-gray-900">My Development Focus</h3>
                            <p className="text-xs text-gray-500 mt-1">Key areas of technical concentration</p>
                        </div>

                        <div className="space-y-4">
                            {focusAreas.map((area, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-4 hover:border-blue-200 transition-colors"
                                >
                                    <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 shrink-0">
                                        {area.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-0.5">{area.title}</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">{area.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
