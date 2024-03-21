
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',        
        height: '100%',
        alignItems: 'flex-start'
    },
    header: {
        paddingLeft: '10px',
        paddingBottom: '5px'
    },
    body: {
        border: '2px dashed black',
        flex: 1,
        width: '100%',
    }    
}

const ExperienceDetails = ({details}) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                DETAILS
            </div>
            <div style={styles.body}>
                {details}
            </div>
        </div>
    )
};

export default ExperienceDetails;