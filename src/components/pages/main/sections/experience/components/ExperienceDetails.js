import Markdown from "react-markdown";

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
        paddingLeft: '20px',
        paddingRight: '20px',
        width: '100%',
        alignItems: 'flex-start',
        textAlign: 'left',
    }    
}

const ExperienceDetails = ({details}) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                DETAILS
            </div>
            <div style={styles.body}>
                <Markdown>
                    {details}
                </Markdown>
            </div>
        </div>
    )
};

export default ExperienceDetails;