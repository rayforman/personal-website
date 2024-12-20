import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Bookshelf', path: '/bookshelf' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
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