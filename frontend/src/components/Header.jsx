import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">René Sultan</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/work" className="text-gray-300 hover:text-white">Work</Link></li>
            <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
            <li><Link to="/bookshelf" className="text-gray-300 hover:text-white">Bookshelf</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;