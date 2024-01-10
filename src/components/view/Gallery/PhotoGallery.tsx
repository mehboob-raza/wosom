import PhotoAlbum from 'react-photo-album'
import photos from '../../../Data/data'
import { Box, Container, Typography } from '@mui/material'

const PhotoGallery = () => {
  return (
      <Box mt={6}>
          <Container>
              <Typography variant='h5' sx={{fontWeight:'bold', textAlign:'center'}}>This Is Photo Gallery</Typography>
              <Box mt={4} mb={4}>
                  <PhotoAlbum photos={photos} layout="columns" />
              </Box>

          </Container>
    </Box>
  )
}

export default PhotoGallery