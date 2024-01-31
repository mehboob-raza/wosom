import PhotoAlbum from 'react-photo-album'
import photos from './galleryImages'
import { Box } from '@mui/material'

const Gallery = () => {
  return (
    <Box mt={8} pb={6}>
      
        <PhotoAlbum layout="columns" photos={photos} />
    </Box>
  )
}

export default Gallery