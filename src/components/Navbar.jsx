// src/components/Navbar.js
import { Link } from 'react-router-dom';
import { VscCode } from 'react-icons/vsc'; // Example icon

export default function Navbar() {
    return (
        <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
                        <VscCode className="text-sky-400 text-2xl" />
                        <span>AlgoViz</span>
                    </Link>
                    {/* You can add other nav links here */}
                    <div className="flex items-center gap-4">
                       <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                           GitHub
                       </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}