import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import hawassa from "../assets/projects/hawassa.png";
import clinic from "../assets/projects/clinic.png";
import Network from "../assets/projects/Network.png";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            name: "Visit Hawassa Website",
            image: hawassa,
            tech: ["HTML", "CSS", "JavaScript"],
            description:
                "A tourism website that introduces the city of Hawassa, including tourist attractions, culture, and travel information.",
            github: "https://github.com/swale4126-bit/Visit-Hawassa.git"

        },
        {
            name: "Learning Management System",

            tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            description:
                "A web-based learning management system that allows instructors to upload course materials and students to access lessons.",
            github: "#"

        },
        {
            name: "Student Portal",

            tech: ["React", "Tailwind CSS", "Node.js"],
            description:
                "A modern student portal where students can view grades, GPA, and course information.",
            github: "https://github.com/swale4126-bit/Student-Portal.git",

        },
        {
            name: "Medical Clinic System",
            image: clinic,
            tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            description:
                "A clinic management system for handling patient records and appointments.",
            github: "https://github.com/swale4126-bit/Medical_c.git"

        },
        {
            name: "Enterprise VLAN Network Design",
            image: Network, // ✅ FIXED
            tech: ["Cisco Packet Tracer", "VLAN", "DHCP", "Routing"],
            description:
                "Designed a scalable enterprise network with VLANs, Router-on-a-Stick, DHCP, and full connectivity testing.",
            download: "https://drive.google.com/file/d/1hdwR1cYyMo3R5U7o1Kd_g5FBdRP2DfR5/view?usp=drive_link" // ✅ ADD YOUR LINK
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-center mb-12">
                My Projects
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    >
                        {/* Image */}
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                        )}

                        <div className="p-6">

                            {/* Title + Networking Tag */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-semibold">
                                    {project.name}
                                </h2>

                                {project.tech.includes("Cisco Packet Tracer") && (
                                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                                        Networking
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 mt-3 mb-4">
                                {project.description}
                            </p>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">

                                {/* GitHub */}
                                {project.github && project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black"
                                    >
                                        <FaGithub />
                                        Code
                                    </a>
                                )}

                                {/* Demo */}
                                {project.demo && project.demo !== "#" && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
                                    >
                                        <FaExternalLinkAlt />
                                        Demo
                                    </a>
                                )}

                                {/* ✅ Download Button (Networking Only) */}
                                {project.download && (
                                    <a
                                        href={project.download}
                                        target="_blank"
                                        className="text-blue-500 mt-2 inline-block hover:underline"
                                    >
                                        Download Packet Tracer File
                                    </a>
                                )}

                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;