import React from 'react';
import CodeBlock from './CodeBlock'; // Adjust this import path according to your folder structure
import "/node_modules/primeflex/primeflex.css";
import Navbar from '../../../../common/Navbar';
import SocialIcons from '../../../../common/SocialIcons';

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: '#282a36',
  },
  textColumn: {
    display: 'flex',
    color: 'white'
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
  iconsColor: "white",
  navbarColor: "white",
}



const LandingSection = () => {
  const text = "OSKARELVKULL".split('').map((letter, index) => (
    <div key={index}>{letter}</div>
  ));

  return (
      <div id="home" class="grid" style={styles.container}>
          <div class="col-2" style={styles.textColumn}>
              <div class="text-center p-3">{text}</div>
          </div>
          <div class="col-8" style={styles.contentColumn}>
            <Navbar color={styles.navbarColor} />
            <div style={styles.codeBlock}>
              <CodeBlock/>
            </div>
          </div>
          <div class="col-1">
          </div>
          <div class="col-1" style={styles.socialIconsColumn}>
            <SocialIcons color={styles.iconsColor}/>
          </div>
      </div>
  );
};

export default LandingSection;