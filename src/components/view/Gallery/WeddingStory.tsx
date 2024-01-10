import { Box, Container, Typography } from '@mui/material'
import weddingStory from '../../../../src/assets/weddingStory.svg'
import WeddingStoryG from './WeddingStoryG'

const WeddingStory = () => {
  return (
      <Box sx={{
          mt:{sm:6, xs:6}
      }}>
          <Container maxWidth='lg'>
              <Typography sx={{fontWeight:'bold', textAlign:'center'}}> This is Wedding Story </Typography>
              <Typography mt={5} sx={{ fontFamily: 'ButterScotch', textAlign: 'center', fontSize: '26px' }}>Wedding Story</Typography>
              
              <Box mt={2} sx={{
                  display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
              }}>
                  <Box component='img' src={weddingStory} width='100%' height='504px' />
                  <Box sx={{
                      width: '40%',
                      mt: 2,
                      p:2
                  }}>
                      <Typography variant='h5' sx={{textAlign:'center'}}>Andréa's & Ileana’s Wedding</Typography>
                      <Typography variant='body2' mt={3} sx={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus</Typography>
                  </Box>
              </Box>
              <WeddingStoryG />
          </Container>          
      </Box>
  )
}

export default WeddingStory