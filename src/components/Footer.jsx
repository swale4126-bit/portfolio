import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-20">

            <div className="max-w-7xl mx-auto px-6 py-10 text-center">

                <h2 className="text-xl font-semibold mb-6">
                    Contact Me
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">

                    {/* GitHub */}
                    <a
                        href="https://github.com/yourusername"
                        className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                        <FaGithub />
                        github.com/swale4126-bit
                    </a>

                    {/* Email */}
                    <p className="flex items-center gap-2">
                        <FaEnvelope />
                        swale4126@gmail.com
                    </p>

                    {/* Phone */}
                    <p className="flex items-center gap-2">
                        <FaPhone />
                        +251 963 621 997
                    </p>

                </div>

                <p className="text-gray-400 text-sm mt-8">
                    © 2026 Wale Solomon | Portfolio Website
                </p>

            </div>

        </footer>
    );
}

export default Footer;