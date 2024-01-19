import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


const BackButton = () => {
    const navigate = useNavigate()
  return (
      <Box mt={1} sx={{
          display: 'flex',
          alignItems:'start'
      }}>
          <Button onClick={() => navigate('/elements')}>
              <IoIosArrowBack />
          </Button>
    </Box>
  )
}

export default BackButton