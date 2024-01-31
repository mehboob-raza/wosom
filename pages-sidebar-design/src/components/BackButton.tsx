import { Box, Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

interface BackButtonProps {
    onClick: () => void;
}

const BackButton = (props: BackButtonProps) => {
    const { onClick } = props
    // const navigate = useNavigate()
    return (
        <Box mt={1} sx={{
            display: 'flex',
            alignItems: 'start',

        }}>
            <Button onClick={onClick}>
                <IoIosArrowBack />
            </Button>
        </Box>
    )
}

export default BackButton