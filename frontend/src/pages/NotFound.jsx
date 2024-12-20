import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const NotFound = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found.</p>
        <Link 
          to="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Go Home
        </Link>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;