import { Box, Typography } from '@mui/material'
import React from 'react'
import bg from '../../../assets/viewBanner.svg'

const Banner = () => {
  return (
    <Box mb={8} >
          {/* <Container maxWidth='md'> */}
            
              
              <Box sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                position: 'relative',
                pb: 8
                  
                }}>
              <Box component='img' src={bg} sx={{
                  width: '100%',
                  display: 'flex',
              }} />
              <Box sx={{
                  backgroundColor: '#fff',
                  p: 2,
                  width: {md: '40%', sm:'60%', },
                  position: 'absolute',
                  display: 'flex',
                  right: 0,
                  top: {md:'30%', sm:'10%', xs:0},
                  opacity:0.6
              }}>
                  <Box sx={{
                      border: '1px solid #C09653',
                      p:2
                  }}>
                      <Typography variant='h4' sx={{fontWeight:'700'}}>Explore Our Gallery</Typography>
                      <Typography variant='body1' >welcome to our gallery where inspiration meets creativity. we’re delighted to share our work with you</Typography>
                  </Box>
              </Box>
              </Box>
              

          {/* </Container> */}
      </Box>
  )
}

export default Banner