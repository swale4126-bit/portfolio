import { motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-lg text-gray-600 leading-relaxed space-y-6"
                >
                    <p>
                        I am an Information Systems student at Hawassa University and a <span className="font-semibold text-gray-900">Full-Stack Web Developer</span> focused on building modern, responsive, and practical web applications.
                    </p>
                    <p>
                        I have hands-on experience developing frontend interfaces with <span className="text-blue-600 font-medium">React and Tailwind CSS</span>, building backend services with <span className="text-green-600 font-medium">Node.js and Express.js</span>, and working with <span className="text-blue-500 font-medium">PostgreSQL databases</span>.
                    </p>
                    
                    <div className="bg-blue-50/50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-8">
                        <p className="text-gray-800 font-medium italic">
                            "My goal is to contribute to real-world software projects, grow as a developer, and build reliable solutions that solve practical problems."
                        </p>
                    </div>
                </motion.div>

            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>
        </section>
    );
}

export default About;