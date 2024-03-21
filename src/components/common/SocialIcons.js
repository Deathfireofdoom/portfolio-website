import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const styles = {
    container: {
        paddingTop: "10px",
        paddingLeft: "30px",
    },
    icons: {
        marginRight: "15px"
    }
}

const linkedInUrl = "https://www.linkedin.com/in/elvkull/"
const gitHubUrl = "https://github.com/Deathfireofdoom"

const SocialIcons = ({color}) => {
    return (
        <div style={styles.container}>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon size="2x" color={color} style={styles.icons} icon={faLinkedinIn} />
            </a>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon size="2x" color={color} style={styles.icons} icon={faGithub} />
            </a>
        </div>
    );
};

export default SocialIcons;