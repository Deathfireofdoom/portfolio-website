import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  }
}

const Navbar = ({color}) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{...styles.container, color: color}}>
        <div className="text-center p-3 border-round-sm bg-primary" onClick={() => scrollToSection('home')}>HOME</div>
        <div className="text-center p-3 border-round-sm bg-primary" onClick={() => scrollToSection('experience')}>EXPERIENCE</div>
    </div>
  );
};

export default Navbar;
