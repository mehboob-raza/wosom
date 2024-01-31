export const styles = {
    mainHeading: {
        fontWeight: 'bold',
        marginLeft: '30px',
        fontSize: "20px"
    },
    subHeading: {
        fontWeight: 'bold',
        marginBottom: '15px',
        fontSize: "15px"
    },
    mainImageDiv: {
        marginTop: '23px',
        display: 'flex',
        justifyContent: `center`
    },
    galleryHeadingDiv: {
        display: "flex",
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    imageDiv: {
        marginTop: '23px',
        display: 'flex',
        justifyContent: 'center'
    },
    addMoreDiv: {
        display: 'flex',
        flexDirection: 'column'
    },
    addMoreDivStyle: {
        color: "#78829DB2",
        textAlign: 'center',
        fontSize: "12px",
        marginY: "23px"
    },
    addMoreBtn: {
        display: 'flex',
        textTransform: 'capitalize',
        height: '40px',
        padding: '9px 17.974px 9px 18.32px',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        flexShrink: 0,
        borderRadius: '7px',
        border: '1px solid #CCC',
        background: 'rgba(169, 169, 169, 0.1)',
        color: 'rgba(0, 0, 0, 0.50)',
        '&:hover': {
            background: '#DDD',
        }
    },
    multiImageDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginX: '20px',
        marginTop: '40px'
    }
}