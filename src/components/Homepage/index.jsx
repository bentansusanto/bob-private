import React, { useState, useEffect } from 'react'
import HeroSection from './Section/HeroSection'
import PackageSection from './Section/PackageSection'
import ServiceSection from './Section/ServiceSection';

const mediaQuery = window.matchMedia('(max-width: 600px)');

const Homepage = () => {
  const [matches, setMatches] = useState(mediaQuery.matches)

  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return (
    <div>
        <HeroSection matches={matches}/>
        <PackageSection matches={matches}/>
        <ServiceSection/>
    </div>
  )
}

export default Homepage