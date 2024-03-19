import React from 'react';
import ExperienceCard from './components/ExperienceCard';

const ExperienceSection = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // or use "100vh" for full viewport height
    width: '100vw', // or use "100vw" for full viewport width
    backgroundColor: 'orange',
    color: 'white',
    fontSize: '48px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={style}>
      <ExperienceCard
        role="backend engineer"
        company="pvh Group"
        techStack={["Python", "NodeJS"]}
        period="Jan 2020 - Current"
      />
    </div>
  );
};

export default ExperienceSection;