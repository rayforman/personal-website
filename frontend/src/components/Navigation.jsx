import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Bookshelf', path: '/bookshelf' },
  { name: 'Inspiration', path: '/Inspiration' },
  { name: 'Animation', path: '/Animation' },
  { name: 'Map', path: '/Map' },
  { name: 'Resume', path: '/Resume' }
];

const Navigation = () => {
  return (
    <nav className="mt-8">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path} 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;