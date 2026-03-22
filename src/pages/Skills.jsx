import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaGitAlt,
    FaNetworkWired
} from "react-icons/fa";

import {
    SiMysql,
    SiTailwindcss,
    SiCplusplus
} from "react-icons/si";

import { motion } from "framer-motion";

function Skills() {

    const webSkills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-4xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700 text-4xl" /> }
    ];

    const networkingSkills = [
        "VLAN Configuration",
        "Routing (Router-on-a-Stick)",
        "DHCP Configuration",
        "Network Design",
        "ACL Security"
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">

            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-12">
                My Skills
            </h1>

            {/* Web Skills */}
            <h2 className="text-2xl font-semibold mb-6">
                Web Development
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

                {webSkills.map((skill, index) => (

                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center transition"
                    >
                        <div className="flex justify-center mb-3">
                            {skill.icon}
                        </div>

                        <p className="font-semibold">{skill.name}</p>
                    </motion.div>

                ))}

            </div>

            {/* Networking Skills Section */}
            <div className="mt-20">

                <h2 className="text-2xl font-semibold mb-6">
                    Networking Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

                    {networkingSkills.map((skill, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center transition"
                        >
                            <div className="flex justify-center mb-3">
                                <FaNetworkWired className="text-purple-500 text-4xl" />
                            </div>

                            <p className="font-semibold">{skill}</p>
                        </motion.div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Skills;