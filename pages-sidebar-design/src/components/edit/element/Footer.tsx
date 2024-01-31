import { Box } from '@mui/material'

const Footer = () => {
    return (
        <Box display={"flex"} justifyContent={"flex-end"}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"end"} sx={{ background: 'rgba(66, 66, 66, 1)', width: '60%', height: '50px', paddingRight: "13px" }}>
                <img src={"../../../../src/assets/Icons/Vector.svg"} alt='cards' style={{ cursor: 'pointer' }} height={19} width={19} />
            </Box>
            <Box sx={{}}>
                <Box sx={{ height: '50px', width: '129px', display: 'flex', borderRadius: '0px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(227, 227, 227, 1)', color: 'black', fontSize: '12px' }} >Save Changes</Box>
            </Box>
        </Box>
    )
}

export default Footer