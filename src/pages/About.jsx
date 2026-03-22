import { motion } from "framer-motion";

function About() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold mb-10 text-center"
            >
                About Me
            </motion.h1>

            {/* Intro */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center"
            >
                My name is <span className="font-semibold text-gray-800">Wale Solomon</span>,
                and I am an Information Systems student at Hawassa University. I am passionate
                about building modern web applications and designing efficient systems that
                solve real-world problems.
            </motion.p>

            {/* Second Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center mt-6">
                I have experience working with technologies such as React, Tailwind CSS,
                Node.js, PHP, MySQL, and JavaScript. In addition, I have practical knowledge
                in networking including VLAN configuration, routing, DHCP, and network security (ACL).
            </p>

            {/* Cards Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">

                {/* Education */}
                <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Education
                    </h3>
                    <p className="text-gray-600">
                        BSc in Information Systems at Hawassa University.
                        Currently developing strong skills in software development and networking.
                    </p>
                </div>

                {/* Skills */}
                <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Skills
                    </h3>
                    <p className="text-gray-600">
                        Web Development (React, Node.js, PHP) and Networking
                        (VLAN, Routing, DHCP, ACL Security).
                    </p>
                </div>

                {/* Goal */}
                <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Career Goal
                    </h3>
                    <p className="text-gray-600">
                        My goal is to become a full-stack developer and network engineer,
                        contributing to innovative and secure technology solutions.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default About;