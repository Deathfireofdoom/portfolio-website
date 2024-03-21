import React from 'react';
import ExperienceCard from './components/ExperienceCard';
import ExperienceDisplay from './components/ExperienceDisplay';
import Navbar from '../../../../common/Navbar';
import SocialIcons from '../../../../common/SocialIcons';


const ExperienceSection = () => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // or use "100vh" for full viewport height
    width: '100vw', // or use "100vw" for full viewport width
    backgroundColor: 'white',
    color: 'white',
    fontSize: '48px',
    fontFamily: 'Arial, sans-serif',
  };

  // Styles for the main container
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: 'white',
    color: 'black'
  };

  // Styles for the container of the vertical text
  const verticalTextContainerStyle = {
    position: 'absolute',
    top: '20px', // Adjust as needed
    left: '20px', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'white',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  };

  // Splitting the text into letters for vertical display
  const text = "   WORKEXPERIENCE".split('').map((letter, index) => (
    <div key={index}>{letter}</div>
  ));
  return (
    <div id="experience" class="grid" style={containerStyle}>
        <div class="col-2" style={{display: 'flex'}}>
            <div class="text-center p-3 border-round-sm" style={{color: 'black'}}>{text}</div>
        </div>
        <div class="col-8" style={{ flexDirection: 'column',display:'flex'}}>
          <Navbar />
          <ExperienceDisplay />
        </div>
        <div class="col-1">
        </div>
        <div class="col-1" style={{flexDirection: 'row', display: 'flex', alignContent: 'right', justifyContent: 'flex-end'}}>
          <SocialIcons color="black" />
        </div>
    </div>
  );
};

export default ExperienceSection;