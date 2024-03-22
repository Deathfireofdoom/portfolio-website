import React, { useEffect, useRef, useState } from 'react';

import LandingSection from './sections/landing/Landing';
import ExperienceSection from './sections/experience/Experience';

const Main = () => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [useRef(null), useRef(null)];

  const handleScroll = (direction) => {
    let nextSection = currentSection + direction;

    if (nextSection >= 0 && nextSection < sections.length) {
      setCurrentSection(nextSection);
      sections[nextSection].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const { deltaY } = event;
      if (deltaY > 0) {
        handleScroll(1);
      } else {
        handleScroll(-1);
      }
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  return (
    <div ref={containerRef} style={{ overflowY: 'hidden', height: '100vh' }}>
      <div ref={sections[0]}><LandingSection /></div>
      <div ref={sections[1]}><ExperienceSection /></div>
    </div>
  );
};

export default Main;
