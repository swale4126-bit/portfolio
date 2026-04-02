import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import wa1 from "../assets/wa1.jpg";

function Home() {
    return (
        <div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 items-center gap-12">

                    {/* Left */}
                    <div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold leading-tight"
                        >
                            Hi, I'm <span className="text-blue-500">Wale Solomon</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-xl text-gray-700"
                        >
                            Web Developer & Networking Enthusiast
                        </motion.h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            I am an Information Systems student at Hawassa University.
                            I build modern web applications and design secure network systems
                            using React, PHP, MySQL, and Cisco Packet Tracer.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 flex gap-4"
                        >
                            <Link
                                to="/projects"
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                            >
                                View Projects
                            </Link>

                            <a
                                href="/cv(2).pdf"
                                download
                                className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                            >
                                Download CV
                            </a>
                        </motion.div>

                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <img
                            src={wa1}
                            alt="Wale Solomon"
                            className="w-72 h-72 object-cover rounded-full shadow-xl"
                        />
                    </motion.div>

                </div>
            </div>

            {/* Stats Section 🔥 */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">

                    <div>
                        <h3 className="text-3xl font-bold text-blue-500">5+</h3>
                        <p className="text-gray-600">Projects</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-500">3+</h3>
                        <p className="text-gray-600">Web Technologies</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-500">2+</h3>
                        <p className="text-gray-600">Networking Projects</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-500">1+</h3>
                        <p className="text-gray-600">Internship Ready</p>
                    </div>

                </div>
            </div>

            {/* What I Do */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What I Do
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                        <p className="text-gray-600">
                            I create modern, responsive, and user-friendly interfaces using
                            React, Tailwind CSS, HTML, and JavaScript.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                        <p className="text-gray-600">
                            I develop secure backend systems using  PHP, and MySQL
                            to handle data and application logic.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-3">Networking & Security</h3>
                        <p className="text-gray-600">
                            I design and simulate secure networks using VLAN, DHCP,
                            and ACL configurations in Cisco Packet Tracer.
                        </p>
                    </div>

                </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 py-16">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Technologies I Use
                </h2>

                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {[
                        "React",
                        "Tailwind CSS",
                        "JavaScript",

                        "PHP",
                        "MySQL",
                        "Cisco Packet Tracer",
                        "Networking"
                    ].map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Interested in My Work?
                </h2>

                <p className="text-gray-600 mb-6">
                    Explore my projects or contact me for internship and collaboration opportunities.
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        to="/projects"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                    >
                        View Projects
                    </Link>

                    <Link
                        to="/contact"
                        className="border px-6 py-3 rounded-lg hover:bg-gray-100"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Home;