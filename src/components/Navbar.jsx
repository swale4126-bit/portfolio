import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="w-full bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <h1 className="text-xl font-bold">
                    Wale<span className="text-blue-500">Dev</span>
                </h1>

                {/* Menu */}
                <ul className="flex gap-8">

                    <li>
                        <Link to="/" className="hover:text-blue-400">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className="hover:text-blue-400">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="/skills" className="hover:text-blue-400">
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects" className="hover:text-blue-400">
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="hover:text-blue-400">
                            Contact
                        </Link>
                    </li>

                </ul>

            </div>
        </div>
    );
}

export default Navbar;