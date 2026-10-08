import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaLayerGroup } from "react-icons/fa";

function WhatICanDo() {
    const capabilities = [
        {
            title: "Full-Stack Development",
            description: "Build complete web applications by connecting modern frontend interfaces, backend services, APIs, and databases.",
            icon: <FaLayerGroup className="text-4xl text-blue-500 mb-4" />,
            technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"]
        },
        {
            title: "Frontend Development",
            description: "Create responsive, user-friendly, and modern interfaces using component-based development and responsive design.",
            icon: <FaLaptopCode className="text-4xl text-blue-400 mb-4" />,
            technologies: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Backend & API Development",
            description: "Build reliable server-side applications and RESTful APIs for handling application logic, authentication, and data.",
            icon: <FaServer className="text-4xl text-green-500 mb-4" />,
            technologies: ["Node.js", "Express.js", "REST APIs"]
        },
        {
            title: "Database Development",
            description: "Design and work with relational databases to store, organize, and manage application data efficiently.",
            icon: <FaDatabase className="text-4xl text-purple-500 mb-4" />,
            technologies: ["PostgreSQL", "MySQL"]
        }
    ];

    return (
        <section id="what-i-can-do" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Can Do</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex flex-col h-full">
                                {item.icon}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.technologies.map((tech, idx) => (
                                        <span 
                                            key={idx} 
                                            className="bg-white border border-gray-200 text-gray-700 px-3 py-1 text-sm rounded-md font-medium shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhatICanDo;
