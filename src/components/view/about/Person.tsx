import { Box, Container, Typography } from '@mui/material'
import personIcon from '../../../assets/personIcon.svg'

const Person = () => {
  return (
      <Box mt={6}>
          <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>This Is Person</Typography>
          <Container maxWidth='xs'>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt:4
            }}>
                  <Box component='img' src={personIcon}  />
                <Typography sx={{fontFamily:'ButterScotch', fontSize:'24px', textAlign:'center'}}>Bridesmaid</Typography>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight:'bold' }}>Jenny Wilson</Typography> 
                <Typography sx={{color:'#808080', mt:2}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum dolor sit amet, consectetuer adipiscing eli</Typography>  
              </Box>
          </Container>
      </Box>
  )
}

export default Person