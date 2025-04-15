import React, { useState, useEffect, useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
  const visitedCountries = [
    'TN', 'BE', 'FR', 'DE', 'IS', 'IT', 'MT', 'NL', 'NO', 'PT', 'ES', 'SE', 
    'CH', 'VA', 'AG', 'BB', 'CA', 'CR', 'DO', 'GD', 'MX', 'PA', 'LC', 'US', 
    'AU', 'CL', 'PE', 'UK', 'DK', 'IE'
  ];
  
  const visitedTerritories = [
    'TEN', 'PR', 'STH'
  ];
  
  // New array for connection countries with their associated contacts
  const connectionCountries = {
    'LK': 'Sid Jha',
    'IN': 'Suki Gupta',
    'RS': 'Nikola Desnica, Leo Jergovic',
    'PL': 'Aleksy Chvedzuk',
    'TZ': 'Collin Emmanuel',
    'MY': 'Joey Tristan',
    'NP': 'Joey Tristan\'s Friend (EBC Guide)',
    'CN': 'Jin Ma',
    'OM': 'Geethan Ramesh',
    'AE': 'Geethan Ramesh',
    'MA': 'Ismail Ennibi',
    'GY': 'Darran Shivdat',
    'EC': 'Anthony Ayala',
    'IT': 'Federico Stanzani',
    'ES': 'Armando Martinez de la Villa',
    'PA': 'José Isaac Tejedor',
    'IL': 'Sahar Paz, David Ioinovich',
    'UK': 'Ben Harrison',
    'BR': 'Lorenzo Bogaert',
    'SG': 'Sajush Arora, Rohan Sureash',
    'CO': 'Felipe Rachid'
  };

  const svgRef = useRef(null);

  const totalCountries = 197
  const numCountriesVisited = visitedCountries.length
  const numTerritoriesVisited = visitedTerritories.length
  const totalVisited = numCountriesVisited + numTerritoriesVisited
  const numCountriesNotVisited = totalCountries - numCountriesVisited

  const handleMouseOver = (e, countryId) => {
    // Only show tooltip for connection countries
    if (connectionCountries[countryId]) {
      setHoveredCountry(countryId);
      // Get cursor position for tooltip placement
      setTooltipPosition({ 
        x: e.clientX, 
        y: e.clientY 
      });
    }
  };

  const handleMouseOut = () => {
    setHoveredCountry(null);
  };

  useEffect(() => {
    fetch('/world.svg')
      .then(response => response.text())
      .then(svgContent => {
        const container = svgRef.current;
        container.innerHTML = svgContent;
        
        const allPaths = container.querySelectorAll('path');
        allPaths.forEach(path => {
          path.classList.add('fill-gray-800');
          const countryId = path.getAttribute('id');
          
          if (countryId) {
            // Add event listeners for tooltips
            path.addEventListener('mousemove', (e) => handleMouseOver(e, countryId));
            path.addEventListener('mouseout', handleMouseOut);
            
            // Apply colors based on category
            if (visitedCountries.includes(countryId) || visitedTerritories.includes(countryId)) {
              path.classList.add('fill-green-600', 'hover:fill-green-500');
            } else if (connectionCountries[countryId]) {
              // Connection countries get a different color (blue)
              path.classList.add('fill-blue-600', 'hover:fill-blue-500');
            } else {
              path.classList.add('hover:fill-gray-700');
            }
          } 
        });
      })
      .catch(error => console.error('Error loading SVG:', error));
      
    // Cleanup event listeners when component unmounts
    return () => {
      if (svgRef.current) {
        const allPaths = svgRef.current.querySelectorAll('path');
        allPaths.forEach(path => {
          path.removeEventListener('mousemove', handleMouseOver);
          path.removeEventListener('mouseout', handleMouseOut);
        });
      }
    };
  }, []);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">World Map</h1>
          <p className="text-lg text-gray-300 mb-6">
            For me, traveling the world is a fundamental part of the human experience and is my favorite way to remind myself of the tiny bubble I live in. Only by leaving your comfort zone can you begin to appreciate the limits of your daily experience and worldview. I see traveling as not a form of vacation but as a moral obligation to contextualize myself as part of an impossibly complex world. Before I die, I want to travel to at least 100 countries. Here's how I'm doing so far:
          </p>
        </div>
      </div>
      <div className="space-y-4 relative">
        <div className="w-full max-w-[2000px] mx-auto" ref={svgRef}></div>
        
        {/* Tooltip that follows cursor - adjusted to show down and to the left */}
        {hoveredCountry && connectionCountries[hoveredCountry] && (
          <div 
            className="absolute bg-black text-white px-2 py-1 rounded pointer-events-none z-10"
            style={{ 
              left: `${tooltipPosition.x - 200}px`, 
              top: `${tooltipPosition.y - 80}px`
            }}
          >
            {connectionCountries[hoveredCountry]}
          </div>
        )}
        
        <div className="text-center space-x-4">
          <span>Countries Visited: {numCountriesVisited}</span>
          <span>Countries Not Visited: {numCountriesNotVisited}</span>
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-600 mr-2"></div>
            <span>Visited</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-600 mr-2"></div>
            <span>Personal Connection</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800 mr-2"></div>
            <span>Not Visited</span>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default WorldMap;