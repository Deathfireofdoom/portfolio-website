import ExperienceCard from "./ExperienceCard";

const styles = {
    container: {
        maxHeight: '100%'
    },
    header: {
        textAlign: 'left',
        paddingBottom: '5px'
    },
    body: {
        overflowY: 'auto',
        maxHeight: '100%'
    },
}

const ExperienceList = ({onSelectExperience, data}) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>EXPERIENCE</div>
            <div styles={styles.body}>
                {data.map((item, index) => (
                <div key={index} onClick={() => onSelectExperience(index)}>
                    <ExperienceCard {...item} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceList;
