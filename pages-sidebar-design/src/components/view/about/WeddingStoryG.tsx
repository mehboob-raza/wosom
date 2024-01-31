import { Box, Grid, Typography } from '@mui/material'
import WeddingStory from '../../../assets/weddingStory.svg'

const WeddingStoryG = () => {
  return (
      <Box mt={6}>
          <Grid container >
              <Grid item md={6} sm={12} xs={12}>
                  <Box component='img' src={WeddingStory} />
              </Grid>
              <Grid md={6} sm={12} xs={12}>
                  <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      mt:2
                  }}> 
                      <Typography variant='h4' sx={{fontFamily:'ButterScotch', mt:3}}>Andréa's & Ileana’s Wedding Story</Typography>
                      <Typography variant='body2' sx={{color:'#808080', lineHeight:2}}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus
                      </Typography>
                      <Typography variant='body2' sx={{color:'#808080', lineHeight:2}}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus
                      </Typography>
                  </Box>
              </Grid>
          </Grid>
    </Box>
  )
}

export default WeddingStoryG