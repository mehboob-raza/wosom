import { useState, useRef, ChangeEvent } from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from './styles';


const Photo = () => {

  const [textAlign, setTextAlign] = useState('center');
  const [picture, setPicture] = useState<Blob | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files ? e.target.files[0] : null)
  }


  const alignImages = [
    {
      img: '../../../../../../src/assets/align-left.svg',
      value: 'left'
    },
    {
      img: '../../../../../../src/assets/align-center.svg',
      value: 'center'
    },
    {
      img: '../../../../../../src/assets/align-right.svg',
      value: "right"
    },
  ]



  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add Photo</Typography>
        <Box sx={{
          marginTop: '23px', display: 'flex', justifyContent: `${textAlign
            }`
        }}>

          <img height={136} width={223} onClick={() => hiddenFileInput.current!.click()} src={picture ? URL.createObjectURL(picture) : "../../../../../../src/assets/Image-Upload.svg"} alt='image' />

        </Box>

        <input
          type="file"
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={(event) => {
            handleImageUpload(event);
          }}
        />

      </Box>
      <Box mt={2} mr={3} ml={3} >
        <Typography sx={styles.subHeading}>Alignment</Typography>
        <Box sx={styles.alignmentDiv}>
          {alignImages.map((card) => (
            <img height={23} onClick={() => setTextAlign(card.value)} src={card.img} alt='image' />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Photo