import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Ray Forman. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://github.com/rayforman" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/rayforman" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://twitter.com/rene_sultan" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;