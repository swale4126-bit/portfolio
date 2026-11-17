import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiPostgresql, SiMysql, SiDotnet } from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            description: "Modern, component-driven UI development",
            skills: [
                { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> }
            ]
        },
        {
            title: "Backend",
            description: "Server architecture & REST APIs",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
                { name: "C#", icon: <TbBrandCSharp className="text-[#239120]" /> },
                { name: "ASP.NET Framework", icon: <SiDotnet className="text-[#512BD4]" /> }
            ]
        },
        {
            title: "Database",
            description: "Relational data modeling & queries",
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
            ]
        },
        {
            title: "Tools & Workflow",
            description: "Version control & API development",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
                { name: "REST APIs", icon: <TbApi className="text-blue-600" /> },
                { name: "Visual Studio Code", icon: <FaCode className="text-[#007ACC]" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-3"></div>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                        Core technologies and frameworks used across my full-stack web development projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                            <div className="border-b border-gray-100 pb-3 mb-4">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    {category.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2.5 flex-grow">
                                {category.skills.map((skill, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-100/80 transition-colors duration-200"
                                    >
                                        <div className="text-2xl bg-white p-1.5 rounded-lg shadow-2xs shrink-0 flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
