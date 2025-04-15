import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import exampleConnections from '../data/example-connections.json';

// In development, we'll use the example connections
// In production, we'll try to load the real connections file if it exists
const loadConnections = async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      // Try to load the real connections file in production
      const response = await fetch('/data/private-connections.json');
      if (response.ok) {
        return await response.json();
      }
    }
    // Fall back to example connections
    return exampleConnections;
  } catch (error) {
    console.error('Error loading connections:', error);
    return exampleConnections;
  }
};

const ConnectionsMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [connections, setConnections] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const svgRef = useRef(null);

  const handleBackClick = () => {
    navigate('/Map');
  };
  
  const handleMouseOver = (e, countryId) => {
    // Only show tooltip for connection countries
    if (connections[countryId]) {
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
    // Load connections data
    loadConnections().then(data => {
      setConnections(data);
      setIsLoading(false);
    });

    // Load SVG map
    fetch('/world.svg')
      .then(response => response.text())
      .then(svgContent => {
        const container = svgRef.current;
        if (!container) return;
        
        container.innerHTML = svgContent;
        
        // We need to wait for connections to be loaded before coloring the map
        loadConnections().then(connectionData => {
          const allPaths = container.querySelectorAll('path');
          allPaths.forEach(path => {
            path.classList.add('fill-gray-800');
            const countryId = path.getAttribute('id');
            
            if (countryId) {
              // Add event listeners for tooltips
              path.addEventListener('mousemove', (e) => handleMouseOver(e, countryId));
              path.addEventListener('mouseout', handleMouseOut);
              
              // Apply colors based on whether there's a connection
              if (connectionData[countryId]) {
                path.classList.add('fill-blue-600', 'hover:fill-blue-500');
              } else {
                path.classList.add('hover:fill-gray-700');
              }
            } 
          });
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

  if (isLoading) {
    return (
      <AnimatedPage>
        <div className="container mx-auto px-4 text-center">
          <div className="my-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading connections map...</p>
          </div>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Personal Connections Map</h1>
          <button 
            onClick={handleBackClick}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Back to World Map
          </button>
        </div>
        <p className="text-lg text-gray-300 mb-6">
          This map shows my personal connections around the world. Hover over the blue countries to see who I know there.
        </p>
      </div>
      
      <div className="space-y-4 relative">
        <div className="w-full max-w-[2000px] mx-auto" ref={svgRef}></div>
        
        {/* Tooltip that follows cursor */}
        {hoveredCountry && connections[hoveredCountry] && (
          <div 
            className="absolute bg-black text-white px-3 py-2 rounded pointer-events-none z-10"
            style={{ 
              left: `${tooltipPosition.x - 200}px`, 
              top: `${tooltipPosition.y - 80}px` 
            }}
          >
            <strong>{hoveredCountry}:</strong> {connections[hoveredCountry]}
          </div>
        )}
        
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 px-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-600 mr-2"></div>
            <span>Personal Connection</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800 mr-2"></div>
            <span>No Connection</span>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ConnectionsMap;