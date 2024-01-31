import PhotoAlbum from 'react-photo-album'
import photos from './ImageGallery'

const GalleryTwo = () => {
  return (
      <div>
          <PhotoAlbum photos={photos} layout="masonry" />;
    </div>
  )
}

export default GalleryTwo