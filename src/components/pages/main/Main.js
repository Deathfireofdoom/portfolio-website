import React from 'react';

import LandingSection from './sections/landing/Landing';
import ExperienceSection from './sections/experience/Experience';

const Main = () => {
  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      <LandingSection />
      <ExperienceSection />
    </div>
  );
};

export default Main;
