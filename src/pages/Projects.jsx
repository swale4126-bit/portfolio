import { useState } from "react";
import { FaGithub, FaReact, FaNodeJs, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql, SiBootstrap, SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";

function Projects() {
    // TODO: REPLACE WITH REAL GITHUB URLS
    const GITHUB_BMS = "https://github.com/YOUR-USERNAME/business-management-system";
    const GITHUB_HAWASSA = "https://github.com/YOUR-USERNAME/visit-hawassa";
    const GITHUB_CLINIC = "https://github.com/YOUR-USERNAME/clinic-management-system";

    // TODO: REPLACE WITH REAL LIVE URLS
    const LIVE_BMS = "https://YOUR-BMS-LIVE-URL.com";
    const LIVE_HAWASSA = "https://YOUR-VISIT-HAWASSA-LIVE-URL.com";
    const LIVE_CLINIC = "https://YOUR-CLINIC-LIVE-URL.com";

    const projects = [
        {
            name: "Business Management System",
            isProminent: true,
            techIcons: [
                { icon: <FaReact className="text-[#61DAFB]" />, name: "React.js" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
                { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
                { icon: <SiExpress className="text-gray-800" />, name: "Express.js" },
                { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" }
            ],
            description: "Business Management System is a full-stack web application designed to centralize core business operations including products, inventory, sales, customers, suppliers, and employees.",
            features: [
                "Frontend-backend integration",
                "REST API development",
                "Authentication and authorization",
                "CRUD operations",
                "PostgreSQL database integration",
                "Responsive interface"
            ],
            // TODO: REPLACE WITH REAL PROJECT SCREENSHOTS
            screenshots: [
                "/assets/projects/bms-dashboard.png",
                "/assets/projects/bms-products.png",
                "/assets/projects/bms-inventory.png",
                "/assets/projects/bms-sales.png",
                "/assets/projects/bms-customers.png"
            ],
            github: GITHUB_BMS,
            liveUrl: LIVE_BMS
        },
        {
            name: "Visit Hawassa",
            // TODO: REPLACE WITH REAL PROJECT SCREENSHOT
            image: "/assets/projects/visit-hawassa.png",
            techIcons: [
                { icon: <FaReact className="text-[#61DAFB]" />, name: "React.js" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" }
            ],
            description: "Visit Hawassa is a responsive web application that helps users discover attractions, places, and experiences in Hawassa through a modern and user-friendly interface.",
            github: GITHUB_HAWASSA,
            liveUrl: LIVE_HAWASSA
        },
        {
            name: "Hawassa University Clinic Management System",
            // TODO: REPLACE WITH REAL PROJECT SCREENSHOT
            image: "/assets/projects/clinic-management-system.png",
            techIcons: [
                { icon: <TbBrandCSharp className="text-[#239120]" />, name: "C#" },
                { icon: <SiDotnet className="text-[#512BD4]" />, name: "ASP.NET" },
                { icon: <SiBootstrap className="text-[#7952B3]" />, name: "Bootstrap" }
            ],
            description: "A web-based clinic management system designed to support the organization of clinic operations, patient information, and healthcare-related workflows.",
            github: GITHUB_CLINIC,
            liveUrl: LIVE_CLINIC
        }
    ];

    const ImageCarousel = ({ screenshots }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1));
        };

        const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
        };

        return (
            <div className="relative w-full h-64 md:h-full bg-gray-100 overflow-hidden group">
                <img
                    src={screenshots[currentIndex]}
                    alt={`Screenshot ${currentIndex + 1}`}
                    className="w-full h-full object-cover object-top transition-opacity duration-300"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Screenshot+Placeholder"; }}
                />
                <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                    <FaChevronLeft />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                    <FaChevronRight />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                        ></div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                                project.isProminent 
                                    ? "md:col-span-2 border border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.15)]" 
                                    : "border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1"
                            }`}
                        >
                            <div className={`flex flex-col ${project.isProminent ? 'md:flex-row' : ''} h-full`}>
                                
                                <div className={`${project.isProminent ? 'md:w-2/5' : 'w-full'} border-b md:border-b-0 md:border-r border-gray-100`}>
                                    {project.screenshots ? (
                                        <ImageCarousel screenshots={project.screenshots} />
                                    ) : (
                                        <div className="w-full h-56 bg-gray-100">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover object-top"
                                                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Project+Placeholder"; }}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className={`p-8 flex flex-col justify-between ${project.isProminent ? 'md:w-3/5 w-full' : 'w-full'}`}>
                                    
                                    <div>
                                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                                            <h3 className={`font-bold text-gray-900 leading-tight ${project.isProminent ? 'text-3xl' : 'text-2xl'}`}>
                                                {project.name}
                                            </h3>
                                            {project.isProminent && (
                                                <span className="shrink-0 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    Featured Full-Stack Project
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mb-6 text-base leading-relaxed">
                                            {project.description}
                                        </p>

                                        {project.features && (
                                            <ul className="mb-6 grid sm:grid-cols-2 gap-y-2 gap-x-4">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {project.techIcons.map((tech, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                                                >
                                                    <span className="text-base">{tech.icon}</span>
                                                    {tech.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-auto">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md flex-1 sm:flex-none"
                                            >
                                                <FaExternalLinkAlt className="text-sm" />
                                                Live Demo
                                            </a>
                                        )}
                                        
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors font-medium text-sm shadow-sm hover:shadow-md flex-1 sm:flex-none"
                                            >
                                                <FaGithub className="text-lg" />
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;