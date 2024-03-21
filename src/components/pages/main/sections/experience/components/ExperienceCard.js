import React from 'react';

// Styles
const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    alignContent: 'left',
    justifyContent: 'left',
    marginBottom: '30px'

},
  row: {
    display: 'flex',
    marginBottom: '4px', // Adds space between rows
  },
  label: {
    fontWeight: 'bold',
    minWidth: '100px', // Ensures labels align by setting a minimum width
    textAlign: 'left',
    fontSize: '1rem',
    color: 'black',
    fontFamily: '"M PLUS Code Latin"',
},
  value: {
    flex: 1, // Takes up the remaining space in the flex container
    fontSize: '1rem',
    fontFamily: '"M PLUS Code Latin"',
    color: 'black',
  },
};

const ExperienceCard = ({ role, company, location, techStack, period }) => {
  return (
    <div style={styles.card}>
      <div style={styles.row}>
        <div style={styles.label}>Role:</div>
        <div style={styles.value}>{role}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Company:</div>
        <div style={styles.value}>{company}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Location:</div>
        <div style={styles.value}>{location}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Techstack:</div>
        <div style={styles.value}>{techStack.join(', ')}</div>
      </div>
      <div style={styles.row}>
        <div style={styles.label}>Period:</div>
        <div style={styles.value}>{period}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
