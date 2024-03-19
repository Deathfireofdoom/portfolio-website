import React from 'react';

// Styles
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: 'black', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    alignContent: 'left',
    justifyContent: 'left',

},
  row: {
    display: 'flex',
    marginBottom: '10px', // Adds space between rows
  },
  label: {
    fontWeight: 'bold',
    marginRight: '10px', // Ensures space between the label and its value
    minWidth: '300px', // Ensures labels align by setting a minimum width
    textAlign: 'left'
},
  value: {
    flex: 1, // Takes up the remaining space in the flex container
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
