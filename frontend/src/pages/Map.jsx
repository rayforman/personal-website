import React, { useState, useEffect, useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const WorldMap = () => {
  const [visitedCountries] = useState([
    'FR', 'GB', 'ES', 'IT'
  ]);
  const svgRef = useRef(null);

  useEffect(() => {
    // Load and manipulate the SVG after component mounts
    fetch('/world.svg')
      .then(response => response.text())
      .then(svgContent => {
        const container = svgRef.current;
        container.innerHTML = svgContent;
        
        // Add styling to countries after SVG is loaded
        const allPaths = container.querySelectorAll('path');
        allPaths.forEach(path => {
          const countryId = path.getAttribute('id');
          if (countryId) {
            path.classList.add(
              'transition-colors',
              'duration-200',
              visitedCountries.includes(countryId) 
                ? 'fill-green-600' 
                : 'fill-gray-800'
            );
            
            // Add hover effects
            path.addEventListener('mouseenter', () => {
              path.classList.remove(visitedCountries.includes(countryId) ? 'fill-green-600' : 'fill-gray-800');
              path.classList.add(visitedCountries.includes(countryId) ? 'fill-green-500' : 'fill-gray-700');
            });
            
            path.addEventListener('mouseleave', () => {
              path.classList.remove(visitedCountries.includes(countryId) ? 'fill-green-500' : 'fill-gray-700');
              path.classList.add(visitedCountries.includes(countryId) ? 'fill-green-600' : 'fill-gray-800');
            });
          }
        });
      })
      .catch(error => console.error('Error loading SVG:', error));
  }, [visitedCountries]);

  return (
    <AnimatedPage>
      <div className="w-full max-w-[2000px] mx-auto" ref={svgRef}></div>
    </AnimatedPage>
  );
};

export default WorldMap;