import React, { useState } from 'react';

import ExperienceDetails from "./ExperienceDetails";
import ExperienceList from "./ExerienceList";
import data from "../data/Data";


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '70vh',
        paddingTop: '10vh'
    },
    listContainer: {
        overflowY: 'auto',
        maxHeight: '100%',
        textAlign: 'left'
    },
    detailsContainer: {
        maxHeight: '100%'
    }
}

const ExperienceDisplay = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSelectExperience = (index) => {
        setSelectedIndex(index);
    }

    return (
        <div style={styles.container}>
            <div class="col-4" style={styles.listContainer}>
                <ExperienceList onSelectExperience={handleSelectExperience} data={data}/>
            </div>
            <div class="col-8" style={styles.detailsContainer}>
                <ExperienceDetails details={data[selectedIndex].details} />
            </div>
        </div>
    )
}

export default ExperienceDisplay;