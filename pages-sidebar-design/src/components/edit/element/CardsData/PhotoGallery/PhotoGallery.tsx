import { useState, useRef, ChangeEvent } from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from './styles';

const PhotoGallery = () => {

  const [picture, setPicture] = useState<Blob | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files ? e.target.files[0] : null)
  }


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add Your Photo Gallery</Typography>
        <Box sx={styles.mainImageDiv}>

          <img height={136} width={223} onClick={() => hiddenFileInput.current!.click()} src={picture ? URL.createObjectURL(picture) : "../../../../../../src/assets/Image-Upload.svg"} alt='image' />
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: 'none' }}
            onChange={(event) => {
              handleImageUpload(event);
            }}
          />
        </Box>

      </Box>
      <Box mt={4} mr={3} ml={3} >
        <Box sx={styles.galleryHeadingDiv}>
          <Typography sx={styles.subHeading}>Gallery</Typography>
          <img height={21} width={21} src={"../../../../../../src/assets/Icons/Delete.svg"} alt='image' />
        </Box>
        <Box mt={2} mb={5} >
          {Array(8).fill(8).map(() => (
            <img height={90} width={114} src={"../../../../../../src/assets/image2.svg"} alt='images' style={{ marginLeft: "20px" }} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default PhotoGallery