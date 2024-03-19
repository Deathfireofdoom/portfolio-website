import React from 'react';
import CodeBlock from './CodeBlock'; // Adjust this import path according to your folder structure
import "/node_modules/primeflex/primeflex.css";
const LandingSection = () => {
  // Styles for the main container
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: '#282a36',
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
  const text = "OSKARELVKULL".split('').map((letter, index) => (
    <div key={index}>{letter}</div>
  ));

  return (
      <div class="grid" style={containerStyle}>
          <div class="col-2" style={{display: 'flex'}}>
              <div class="text-center p-3 border-round-sm font-bold" style={{color: 'white'}}>{text}</div>
          </div>
          <div class="col-8" style={{ flexDirection: 'column',display:'flex'}}>
            <div style={{flexDirection: 'row',  display: 'flex', alignContent: 'center', justifyContent: 'center', color: 'white'}}>
                <div class="text-center p-3 border-round-sm bg-primary font-bold ">Main</div>
                <div class="text-center p-3 border-round-sm bg-primary font-bold ">About</div>
                <div class="text-center p-3 border-round-sm bg-primary font-bold ">Projects</div>
                <div class="text-center p-3 border-round-sm bg-primary font-bold ">Contact</div>
            </div>
            <div style={{flex: 1, display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
              <CodeBlock/>
              <div style={{height: '100px'}}></div>
            </div>
          </div>
          <div class="col-1">
          </div>
          <div class="col-1" style={{flexDirection: 'row', display: 'flex', alignContent: 'right', justifyContent: 'flex-end'}}>
              <div class="text-center p-3 border-round-sm bg-primary font-bold">Linkedin</div>
              <div class="text-center p-3 border-round-sm bg-primary font-bold">Github</div>
          </div>
      </div>
  );
};

export default LandingSection;