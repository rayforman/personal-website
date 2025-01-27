import React, { useState, useEffect, useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const WorldMap = () => {
  const visitedCountries = [
    'TN', 'BE', 'FR', 'DE', 'IS', 'IT', 'MT', 'NL', 'NO', 'PT', 'ES', 'SE', 
    'CH', 'VA', 'AG', 'BB', 'CA', 'CR', 'DO', 'GD', 'MX', 'PA', 'LC', 'US', 
    'AU', 'CL', 'PE', 'UK'
  ];
  const visitedTerritories = [
    'TEN', 'PR', 'STH'
  ];
  

  const svgRef = useRef(null);

  const totalCountries = 197
  const numCountriesVisited = visitedCountries.length
  const numTerritoriesVisited = visitedCountries.length
  const totalVisited = numCountriesVisited + numTerritoriesVisited
  const numCountriesNotVisited = totalCountries - numCountriesVisited

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
            if (visitedCountries.includes(countryId) || visitedTerritories.includes(countryId)) {
              path.classList.add('fill-green-600', 'hover:fill-green-500');
            } else {
              path.classList.add('hover:fill-gray-700');
            }
          } 
        });
      })
      .catch(error => console.error('Error loading SVG:', error));
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
      <div className="space-y-4">
        <div className="w-full max-w-[2000px] mx-auto" ref={svgRef}></div>
        <div className="text-center space-x-4">
          <span>Countries Visited: {numCountriesVisited}</span>
          <span>Countries Not Visited: {numCountriesNotVisited}</span>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default WorldMap;

/*   ABBREVIATION KEY

    // Africa (55 countries)
    'DZ': 'Algeria', 'AO': 'Angola', 'BJ': 'Benin', 'BW': 'Botswana', 'BF': 'Burkina Faso', 
    'BI': 'Burundi', 'CM': 'Cameroon', 'CV': 'Cape Verde', 'CF': 'Central African Republic', 
    'TD': 'Chad', 'KM': 'Comoros', 'CG': 'Congo', 'CD': 'Democratic Republic of the Congo', 
    'DJ': 'Djibouti', 'EG': 'Egypt', 'GQ': 'Equatorial Guinea', 'ER': 'Eritrea', 
    'ET': 'Ethiopia', 'GA': 'Gabon', 'GM': 'Gambia', 'GH': 'Ghana', 'GN': 'Guinea', 
    'GW': 'Guinea-Bissau', 'CI': 'Ivory Coast', 'KE': 'Kenya', 'LS': 'Lesotho', 
    'LR': 'Liberia', 'LY': 'Libya', 'MG': 'Madagascar', 'MW': 'Malawi', 'ML': 'Mali', 
    'MR': 'Mauritania', 'MU': 'Mauritius', 'MA': 'Morocco', 'MZ': 'Mozambique', 
    'NA': 'Namibia', 'NE': 'Niger', 'NG': 'Nigeria', 'RW': 'Rwanda', 'SN': 'Senegal', 
    'SC': 'Seychelles', 'SL': 'Sierra Leone', 'SO': 'Somalia', 'ZA': 'South Africa', 
    'SS': 'South Sudan', 'SD': 'Sudan', 'SZ': 'Eswatini', 'TZ': 'Tanzania', 'TG': 'Togo', 
    'TN': 'Tunisia', 'UG': 'Uganda', 'ZM': 'Zambia', 'ZW': 'Zimbabwe', 'ST': São Tomé and Principe,
  
    // Americas (35 countries)
    'AG': 'Antigua and Barbuda', 'AR': 'Argentina', 'BS': 'Bahamas', 'BB': 'Barbados', 
    'BZ': 'Belize', 'BO': 'Bolivia', 'BR': 'Brazil', 'CA': 'Canada', 'CL': 'Chile', 
    'CO': 'Colombia', 'CR': 'Costa Rica', 'CU': 'Cuba', 'DM': 'Dominica', 
    'DO': 'Dominican Republic', 'EC': 'Ecuador', 'SV': 'El Salvador', 'GD': 'Grenada', 
    'GT': 'Guatemala', 'GY': 'Guyana', 'HT': 'Haiti', 'HN': 'Honduras', 'JM': 'Jamaica', 
    'MX': 'Mexico', 'NI': 'Nicaragua', 'PA': 'Panama', 'PY': 'Paraguay', 'PE': 'Peru', 
    'LC': 'Saint Lucia', 'KN': 'Saint Kitts and Nevis', 'VC': 'Saint Vincent and the Grenadines', 
    'SR': 'Suriname', 'TT': 'Trinidad and Tobago', 'US': 'United States', 'UY': 'Uruguay', 
    'VE': 'Venezuela',
  
    // Asia (48 countries)
    'AF': 'Afghanistan', 'AM': 'Armenia', 'AZ': 'Azerbaijan', 'BH': 'Bahrain', 
    'BD': 'Bangladesh', 'BT': 'Bhutan', 'BN': 'Brunei', 'KH': 'Cambodia', 'CN': 'China', 
    'CY': 'Cyprus', 'GE': 'Georgia', 'IN': 'India', 'ID': 'Indonesia', 'IR': 'Iran', 
    'IQ': 'Iraq', 'IL': 'Israel', 'JP': 'Japan', 'JO': 'Jordan', 'KZ': 'Kazakhstan', 
    'KP': 'North Korea', 'KR': 'South Korea', 'KW': 'Kuwait', 'KG': 'Kyrgyzstan', 
    'LA': 'Laos', 'LB': 'Lebanon', 'MY': 'Malaysia', 'MV': 'Maldives', 'ML': 'Mali', 
    'MN': 'Mongolia', 'MM': 'Myanmar', 'NP': 'Nepal', 'OM': 'Oman', 'PK': 'Pakistan', 
    'PS': 'Palestine', 'PH': 'Philippines', 'QA': 'Qatar', 'SA': 'Saudi Arabia', 
    'SG': 'Singapore', 'LK': 'Sri Lanka', 'SY': 'Syria', 'TJ': 'Tajikistan', 
    'TH': 'Thailand', 'TL': 'Timor-Leste', 'TR': 'Turkey', 'TM': 'Turkmenistan', 
    'AE': 'United Arab Emirates', 'UZ': 'Uzbekistan', 'VN': 'Vietnam', 'YE': 'Yemen',
  
    // Europe (44 countries)
    'AL': 'Albania', 'AD': 'Andorra', 'AT': 'Austria', 'BY': 'Belarus', 'BE': 'Belgium', 
    'BA': 'Bosnia and Herzegovina', 'BG': 'Bulgaria', 'HR': 'Croatia', 'CZ': 'Czech Republic', 
    'DK': 'Denmark', 'EE': 'Estonia', 'FI': 'Finland', 'FR': 'France', 'DE': 'Germany', 
    'GR': 'Greece', 'HU': 'Hungary', 'IS': 'Iceland', 'IE': 'Ireland', 'IT': 'Italy', 
    'XK': 'Kosovo', 'LV': 'Latvia', 'LI': 'Liechtenstein', 'LT': 'Lithuania', 
    'LU': 'Luxembourg', 'MT': 'Malta', 'MD': 'Moldova', 'MC': 'Monaco', 'ME': 'Montenegro', 
    'NL': 'Netherlands', 'MK': 'North Macedonia', 'NO': 'Norway', 'PL': 'Poland', 
    'PT': 'Portugal', 'RO': 'Romania', 'RU': 'Russia', 'SM': 'San Marino', 
    'RS': 'Serbia', 'SK': 'Slovakia', 'SI': 'Slovenia', 'ES': 'Spain', 'SE': 'Sweden', 
    'CH': 'Switzerland', 'UA': 'Ukraine', 'GB': 'United Kingdom', 'VA': 'Vatican City',
  
    // Oceania (14 countries)
    'AU': 'Australia', 'FJ': 'Fiji', 'KI': 'Kiribati', 'MH': 'Marshall Islands', 
    'FM': 'Micronesia', 'NR': 'Nauru', 'NZ': 'New Zealand', 'PW': 'Palau', 
    'PG': 'Papua New Guinea', 'WS': 'Samoa', 'SB': 'Solomon Islands', 'TO': 'Tonga', 
    'TV': 'Tuvalu', 'VU': 'Vanuatu'

    // Territories (11 territories)
    'TEN': Tenerife
    'GRC': Gran Canaria
    'FUE': Fuerteventura
    'NMI': Northern Mariana Islands
    'CAY': Cayman Islands
    'NCL': New Caledonia
    'TCI': Turks and Caicos Islands
    'FPL': French Polynesia
    'STH': Saint Thomas (USVI)
    'SJH': Saint John (USVI)
    'SCR': Saint Croix (USVI)

*/