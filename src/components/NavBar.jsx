import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                MyBookApp
            </h1>
            </Link>

            {/* Optional navigation links */}
            <nav className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
            </Link>
            </nav>
        </div>
        </header>
    );
};

export default Navbar;
