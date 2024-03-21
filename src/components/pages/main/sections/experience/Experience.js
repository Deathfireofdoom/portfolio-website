import React from 'react';
import ExperienceDisplay from './components/ExperienceDisplay';
import Navbar from '../../../../common/Navbar';
import SocialIcons from '../../../../common/SocialIcons';


const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: 'white',
  },
  textColumn: {
    display: 'flex',
    color: 'black'
  },
  contentColumn: {
    flexDirection: 'column',
    display: 'flex'
  },
  codeBlock: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '100px',
  },
  socialIconsColumn: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white'
  },
  iconsColor: 'black',
  navbarColor: 'black',
}

const ExperienceSection = () => {
  const text = "WORKEXPERIENCE".split('').map((letter, index) => (
    <div key={index}>{letter}</div>
  ));
  
  return (
    <div id="experience" class="grid" style={styles.container}>
        <div class="col-2" style={styles.textColumn}>
            <div class="text-center p-3">{text}</div>
        </div>
        <div class="col-8" style={styles.contentColumn}>
          <Navbar color={styles.navbarColor}/>
          <ExperienceDisplay />
        </div>
        <div class="col-1">
        </div>
        <div class="col-1" style={styles.socialIconsColumn}>
          <SocialIcons color={styles.iconsColor} />
        </div>
    </div>
  );
};

export default ExperienceSection;