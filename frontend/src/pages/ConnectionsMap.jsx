import React, { useState, useEffect, useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const ConnectionsMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [connections, setConnections] = useState({});
  
  const visitedCountries = [
    'TN', 'BE', 'FR', 'DE', 'IS', 'IT', 'MT', 'NL', 'NO', 'PT', 'ES', 'SE', 
    'CH', 'VA', 'AG', 'BB', 'CA', 'CR', 'DO', 'GD', 'MX', 'PA', 'LC', 'US', 
    'AU', 'CL', 'PE', 'UK', 'DK', 'IE', 'TW', 'CN', 'SG', 'TH', 'KR', 'MY',
    'ID', 
  ];
  
  const visitedTerritories = [
    'TEN', 'PR', 'STH'
  ];

  const svgRef = useRef(null);

  const totalCountries = 197;
  const numCountriesVisited = visitedCountries.length;
  const numTerritoriesVisited = visitedTerritories.length;
  const totalVisited = numCountriesVisited + numTerritoriesVisited;
  const numCountriesNotVisited = totalCountries - numCountriesVisited;

  const handleMouseOver = (e, countryId) => {
    // Only set hoveredCountry if it's a connection country
    if (connections[countryId]) {
      setHoveredCountry(countryId);
      
      // Just use clientX and clientY for fixed positioning
      setTooltipPosition({ 
        x: e.clientX, 
        y: e.clientY 
      });
    }
  };

  const handleMouseOut = () => {
    setHoveredCountry(null);
  };

  // Load connections from environment variable
  useEffect(() => {
    try {
      // Use the environment variable for connections
      const connectionsJson = process.env.REACT_APP_CONNECTIONS_DT;
      if (connectionsJson) {
        setConnections(JSON.parse(connectionsJson));
      }
    } catch (error) {
      console.error("Error loading connections data:", error);
    }
  }, []);

  useEffect(() => {
    fetch('/world.svg')
      .then(response => response.text())
      .then(svgContent => {
        const container = svgRef.current;
        container.innerHTML = svgContent;
        
        const allPaths = container.querySelectorAll('path');
        allPaths.forEach(path => {
          // path.classList.add('fill-gray-800');
          const countryId = path.getAttribute('id');
          
          if (countryId) {
            // Add event listeners for tooltips
            path.addEventListener('mousemove', (e) => handleMouseOver(e, countryId));
            path.addEventListener('mouseout', handleMouseOut);
            
            // Apply colors based on category
            if (visitedCountries.includes(countryId) || visitedTerritories.includes(countryId)) {
              path.classList.add('fill-green-600', 'hover:fill-green-500');
            } else if (connections[countryId]) {
              // Connection countries get a different color (blue)
              path.classList.add('fill-blue-600', 'hover:fill-blue-500');
            } else {
              path.classList.add('fill-gray-800', 'hover:fill-gray-700');
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
          const countryId = path.getAttribute('id');
          path.removeEventListener('mousemove', (e) => handleMouseOver(e, countryId));
          path.removeEventListener('mouseout', handleMouseOut);
        });
      }
    };
  }, [connections]);

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">World Map ⭐</h1>
          <p className="text-lg text-gray-300 mb-6">
            This special map shows both countries I've visited and countries where I have personal connections. By pure chance I've been blessed to make a network of friends from around the world. Here's who I plan to visit as I travel the world. 
          </p>
        </div>
      </div>
      <div className="space-y-4 relative">
        <div className="w-full max-w-[2000px] mx-auto" ref={svgRef}></div>
        
        {/* Tooltip that follows cursor - only for connection countries */}
        {hoveredCountry && connections[hoveredCountry] && (
          <div 
            className="fixed bg-black text-white px-2 py-1 rounded pointer-events-none z-10"
            style={{ 
              left: `${tooltipPosition.x + 15}px`, 
              top: `${tooltipPosition.y - 15}px`
            }}
          >
            {connections[hoveredCountry]}
          </div>
        )}
        
        <div className="text-center space-x-4">
          <span>Countries Visited: {numCountriesVisited}</span>
          <span>Personal Connections: {Object.keys(connections).length}</span>
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
            <span>Connection</span>
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

export default ConnectionsMap;


/*

Country codes:
    'TN': 'Tunisia',
    'BE': 'Belgium',
    'FR': 'France',
    'DE': 'Germany',
    'IS': 'Iceland',
    'IT': 'Italy',
    'MT': 'Malta',
    'NL': 'Netherlands',
    'NO': 'Norway',
    'PT': 'Portugal',
    'ES': 'Spain',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'VA': 'Vatican City',
    'AG': 'Antigua and Barbuda',
    'BB': 'Barbados',
    'CA': 'Canada',
    'CR': 'Costa Rica',
    'DO': 'Dominican Republic',
    'GD': 'Grenada',
    'MX': 'Mexico',
    'PA': 'Panama',
    'LC': 'Saint Lucia',
    'US': 'United States',
    'AU': 'Australia',
    'CL': 'Chile',
    'PE': 'Peru',
    'UK': 'United Kingdom',
    'DK': 'Denmark',
    'IE': 'Ireland',
    'TEN': 'Netherlands Antilles',
    'PR': 'Puerto Rico',
    'STH': 'Saint Helena',
    'FJ': 'Fiji',
    'AF': 'Afghanistan',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BY': 'Belarus',
    'BZ': 'Belize',
    'BJ': 'Benin',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana',
    'BR': 'Brazil',
    'BN': 'Brunei',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CV': 'Cape Verde',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CN': 'China',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CG': 'Congo',
    'CD': 'Democratic Republic of the Congo',
    'CU': 'Cuba',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'ET': 'Ethiopia',
    'FI': 'Finland',
    'GA': 'Gabon',
    'GM': 'Gambia',
    'GE': 'Georgia',
    'GH': 'Ghana',
    'GR': 'Greece',
    'GT': 'Guatemala',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HN': 'Honduras',
    'HU': 'Hungary',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran',
    'IQ': 'Iraq',
    'IL': 'Israel',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KP': 'North Korea',
    'KR': 'South Korea',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': 'Laos',
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MH': 'Marshall Islands',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'MD': 'Moldova',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'MK': 'North Macedonia',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestine',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PH': 'Philippines',
    'PL': 'Poland',
    'QA': 'Qatar',
    'RO': 'Romania',
    'RU': 'Russia',
    'RW': 'Rwanda',
    'KN': 'Saint Kitts and Nevis',
    'VC': 'Saint Vincent and the Grenadines',
    'WS': 'Samoa',
    'SM': 'San Marino',
    'ST': 'Sao Tome and Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'SS': 'South Sudan',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SZ': 'Eswatini',
    'SY': 'Syria',
    'TW': 'Taiwan',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TO': 'Tonga',
    'TT': 'Trinidad and Tobago',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela',
    'VN': 'Vietnam',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe',
    'FM': 'Micronesia',
    'GL': 'Greenland'

*/