import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  
  const visitedCountries = [
    'TN', 'BE', 'FR', 'DE', 'IS', 'IT', 'MT', 'NL', 'NO', 'PT', 'ES', 'SE', 
    'CH', 'VA', 'AG', 'BB', 'CA', 'CR', 'DO', 'GD', 'MX', 'PA', 'LC', 'US', 
    'AU', 'CL', 'PE', 'UK', 'DK', 'IE'
  ];
  
  const visitedTerritories = [
    'TEN', 'PR', 'STH'
  ];
  
  // Special country for connections map access
  const accessPoint = 'FJ'; // Fiji

  const svgRef = useRef(null);

  const totalCountries = 197;
  const numCountriesVisited = visitedCountries.length;
  const numTerritoriesVisited = visitedTerritories.length;
  const totalVisited = numCountriesVisited + numTerritoriesVisited;
  const numCountriesNotVisited = totalCountries - numCountriesVisited;

  const handleCountryClick = (countryId) => {
    if (countryId === accessPoint) {
      setShowModal(true);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Simple password checking
    if (password === process.env.REACT_APP_CONNECTIONS_PASSWORD) {
      setPasswordError('');
      setShowModal(false);
      // Navigate to connections map with complex URL pattern for extra security
      navigate(process.env.REACT_APP_SECRET_MAP_URL);
    } else {
      setPasswordError('Invalid password');
    }
  };

  const handleMouseOver = (e, countryId) => {
    setHoveredCountry(countryId);
    // Get cursor position for tooltip placement
    setTooltipPosition({ 
      x: e.clientX, 
      y: e.clientY 
    });
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
            // Add event listeners for tooltips and clicks
            path.addEventListener('mousemove', (e) => handleMouseOver(e, countryId));
            path.addEventListener('mouseout', handleMouseOut);
            path.addEventListener('click', () => handleCountryClick(countryId));
            
            // Apply colors based on category
            if (visitedCountries.includes(countryId) || visitedTerritories.includes(countryId)) {
              path.classList.add('fill-green-600', 'hover:fill-green-500');
            } else if (countryId === accessPoint) {
              // Special color for the access point (slightly different blue)
              path.classList.add('fill-blue-400', 'hover:fill-blue-300', 'cursor-pointer');
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
          path.removeEventListener('click', handleCountryClick);
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
        {hoveredCountry && (
          <div 
            className="absolute bg-black text-white px-2 py-1 rounded pointer-events-none z-10"
            style={{ 
              left: `${tooltipPosition.x - 200}px`, 
              top: `${tooltipPosition.y - 80}px`
            }}
          >
            {hoveredCountry === accessPoint 
              ? "Click to view connections map" 
              : visitedCountries.includes(hoveredCountry) 
                ? "Visited" 
                : hoveredCountry}
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
            <div className="w-4 h-4 bg-blue-400 mr-2"></div>
            <span>Connections Map Access (Click Fiji)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800 mr-2"></div>
            <span>Not Visited</span>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Private Connections Map</h2>
            <p className="mb-4">Enter password to view your personal connections map:</p>
            
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
                placeholder="Enter password"
              />
              
              {passwordError && (
                <p className="text-red-500 mb-4">{passwordError}</p>
              )}
              
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-600 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default WorldMap;