import React, { useState, useEffect } from 'react'
import HeroSection from './Section/HeroSection'
import MataPelajaran from './Section/MataPelajaran';
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

  const getImagePath = (fileName) => {
    return '../../assets/' + fileName;
  };

  return (
    <div>
        <HeroSection matches={matches}/>
        <PackageSection matches={matches}/>
        <ServiceSection matches={matches} getImagePath={getImagePath}/>
        <MataPelajaran matches={matches}/>
    </div>
  )
}

export default Homepage