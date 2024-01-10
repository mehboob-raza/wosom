import { Box, Container, Typography } from '@mui/material'
import SelectBtn from './SelectBtn'
import DemoCards from './DemoCards'

const Template = () => {
  return (
      <Box mb={6} sx={{
          background:'#fff',
      }}>
          <Container maxWidth='xl'>
            <Box p={2}>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>Templates </Typography>
                <Typography sx={{color:'#99A1B7'}}>Home</Typography>

                
              </Box>
              <Box>
                  <SelectBtn />
              </Box>
              <Box mt={2}>
                  <DemoCards />
              </Box>

          </Container>
          
      </Box>
  )
}

export default Template