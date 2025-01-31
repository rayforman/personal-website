import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Ray Forman</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/work" className="hover:text-blue-400 transition-colors">Work</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/bookshelf" className="hover:text-blue-400 transition-colors">Bookshelf</Link></li>
              <li><Link to="/Inspiration" className="hover:text-blue-400 transition-colors">Inspiration</Link></li>
              <li><Link to="/Animation" className="hover:text-blue-400 transition-colors">Animation</Link></li>
              <li><Link to="/Map" className="hover:text-blue-400 transition-colors">Map</Link></li>
              <li><Link to="/Resume" className="hover:text-blue-400 transition-colors">Resume</Link></li>
            </ul>
          </nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.nav 
          className="bg-gray-800 p-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="space-y-2">
            <li><Link to="/about" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/work" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
            <li><Link to="/projects" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/bookshelf" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Bookshelf</Link></li>
            <li><Link to="/Inspiration" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Inspiration</Link></li>
            <li><Link to="/Animation" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Animation</Link></li>
            <li><Link to="/Map" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Map</Link></li>
            <li><Link to="/Resume" className="block hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Resume</Link></li>
          </ul>
        </motion.nav>
      )}

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Ray Forman. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Layout;