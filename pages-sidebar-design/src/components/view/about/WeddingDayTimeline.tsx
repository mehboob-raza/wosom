import { Box, Container, Typography } from '@mui/material'
import timeline from '../../../assets/timeline.svg'

const WeddingDayTimeline = () => {
  return (
      <Box mt={6} mb={6}>
          <Typography sx={{fontWeight:'bold', textAlign:'center'}}>wedding day timeline</Typography>
          {/* <Container maxWidth='lg'> */}
              <Box sx={{
                  background: 'rgba(245, 245, 245, 0.42)',
                  mt:6
              }}>
                  <Typography sx={{
                      fontSize: '38.85px',
                    fontStyle: 'normal',
                      fontWeight: '600',
                      textAlign: 'center',
                        pt:4
                  }}>Our Wedding Day</Typography>
                  <Typography sx={{color:'black', textAlign:'end', alignItems:'center'}}>
                            15 <span style={{fontFamily:'ButterScotch'}}> July </span> 2023
                    </Typography>
                  <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt:3,
                  }}>
                      <Typography sx={{
                          width: '70%',
                          textAlign:'center'
                        }}>
                      Your presence would mean the world to us as we exchange vows and embark on this beautiful journey together. The day promises to be filled with love, laughter, and cherished moments.We look forward to sharing this magical moment with you.
                  </Typography>
                  </Box>
                  <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt:6
                  }}>
                      <Box component='img' src={timeline} />
                  </Box>
              </Box>
          {/* </Container> */}
    </Box>
  )
}

export default WeddingDayTimeline