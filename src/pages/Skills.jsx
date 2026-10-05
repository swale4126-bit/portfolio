import { motion } from "framer-motion";
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaServer, FaDatabase, FaCode, FaTools, FaUsers, FaComments, FaClock
} from "react-icons/fa";
import { 
    SiTailwindcss, SiBootstrap, SiExpress, SiPostgresql, SiMysql, SiDotnet
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
                { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
                { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
                { name: "C#", icon: <TbBrandCSharp className="text-[#239120]" /> },
                { name: "ASP.NET Framework", icon: <SiDotnet className="text-[#512BD4]" /> }
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
            ]
        },
        {
            title: "Tools & Development",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
                { name: "REST APIs", icon: <TbApi className="text-gray-600" /> },
                { name: "Visual Studio Code", icon: <FaCode className="text-[#007ACC]" /> }
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Team Collaboration", icon: <FaUsers className="text-blue-500" /> },
                { name: "Communication", icon: <FaComments className="text-green-500" /> },
                { name: "Time Management", icon: <FaClock className="text-yellow-500" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-800 text-center tracking-tight">
                                {category.title}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-100 transition-colors duration-200 group cursor-default"
                                    >
                                        <div className="text-3xl bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-200">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-gray-700">{skill.name}</span>
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