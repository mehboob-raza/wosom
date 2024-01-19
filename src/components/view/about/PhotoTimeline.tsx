import { Box, Grid, Typography } from '@mui/material'
import verticleLine from '../../../assets/verticleLine.svg'
import { leftPhotoTimeline, rightPhotoTimeline } from '../../../Data/data'

const PhotoTimeline = () => {
  return (
      <Box mt={2}>
          <Typography sx={{
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center'
          }}>
              This is the photo timeline
          </Typography>
          {/* <Container maxWidth='md' mt={6}> */}
            <Box mt={6}>
        <Grid container>
          {
            leftPhotoTimeline.map((data, i) => {
              return <Grid item md={5} sm={12} xs={12} key={i}>
                          
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap:6

                }}>
                  <Box sx={{
                          p: 2,
                          background: '#F5F5F5',
                          width: '80%',
                    borderRadius: '12px',
                          height:'521px'
                        }}>
                          <Typography sx={{color:'black', textAlign:'end', alignItems:'center'}}>
                            {data.date.day} <span style={{fontFamily:'ButterScotch'}}> {data.date.month} </span> {data.date.year}
                          </Typography>
                          <Typography variant='h3' sx={{textAlign:'end', mt:1}}>
                              {data.h}
                          </Typography>
                          <Typography mt={2} variant='body1'>
                            {data.p}
                          </Typography>
                          <Typography mt={4} variant='body1'>
                            {data.p1}
                          </Typography>
                        </Box>
                        <Box component='img' src={data.img} />
                        <Box sx={{
                  p: 2,
                  background: '#F5F5F5',
                  width: '80%',
                    borderRadius: '12px',
                          height:'521px'
                  
                        }}>
                          <Typography sx={{color:'black', textAlign:'end', alignItems:'center'}}>
                            {data.date.day} <span style={{fontFamily:'ButterScotch'}}> {data.date.month} </span> {data.date.year}
                          </Typography>
                            <Typography variant='h3' sx={{textAlign:'end'}}>
                                {data.h}
                            </Typography>
                            <Typography mt={3} variant='body1'>
                              {data.p}
                            </Typography>
                            <Typography mt={4} variant='body1'>
                              {data.p1}
                            </Typography>
                          </Box>
                        </Box>
                    </Grid>
            })
          }
                 
          <Grid md={1} >
            <Box component='img' src={verticleLine} height='100%' sx={{
              display: { md: 'flex', sm: 'none', xs: 'none' },
              ml: 6
                    }} />    
          </Grid>
         
            {
            rightPhotoTimeline.map((data, i) => {
              return <Grid item md={5} sm={12} xs={12} key={i}>
                      
                <Box sx={{
                  mt:{sm:3, xs:3},
                  display: 'flex',
                  flexDirection: 'column',
            justifyContent: 'center',
                  alignItems: 'center',
                  gap:6
            
          }}>
                  <Box component='img' src={data.img} width='100%' height='484px' />
                        <Box sx={{
                            p: 2,
                            background: '#F5F5F5',
                            width: '80%',
                    borderRadius: '12px',
                          height:'521px'
                            
                                  }}>
                          <Typography sx={{color:'black', textAlign:'end', alignItems:'center'}}>
                            {data.date.day} <span style={{fontFamily:'ButterScotch'}}> {data.date.month} </span> {data.date.year}
                          </Typography>
                          <Typography variant='h3' sx={{textAlign:'end', mt:1}}>
                              {data.h}
                          </Typography>
                          <Typography mt={3} variant='body1'>
                            {data.p}
                          </Typography>
                          <Typography mt={4} variant='body1'>
                            {data.p1}
                          </Typography>
                        </Box>
                        <Box component='img' src={data.img1} width='100%' height='250px' />
                        </Box>

                  </Grid> 
            })
          }
         
                   
              </Grid>
            </Box>
          {/* </Container> */}
    </Box>
  )
}

export default PhotoTimeline