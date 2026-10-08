import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaPlug, FaRocket } from "react-icons/fa";

function DevelopmentApproach() {
    const approaches = [
        {
            title: "Understand",
            description: "Understand the problem, users, and requirements before development.",
            icon: <FaLightbulb className="text-3xl text-yellow-500 mb-4" />
        },
        {
            title: "Build",
            description: "Develop clean, responsive interfaces and reliable backend functionality.",
            icon: <FaCode className="text-3xl text-blue-500 mb-4" />
        },
        {
            title: "Integrate",
            description: "Connect APIs, databases, authentication, and application features.",
            icon: <FaPlug className="text-3xl text-green-500 mb-4" />
        },
        {
            title: "Improve",
            description: "Test, refine, and continuously improve the user experience and application quality.",
            icon: <FaRocket className="text-3xl text-purple-500 mb-4" />
        }
    ];

    return (
        <section id="approach" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">My Development Approach</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {approaches.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center"
                        >
                            {item.icon}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default DevelopmentApproach;
