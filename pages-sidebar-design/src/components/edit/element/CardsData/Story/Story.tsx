import React, { useState, useRef, ChangeEvent } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { styles } from './styles';


const Story = () => {


  const [textValue, setTextValue] = useState('');
  const [picture, setPicture] = useState<Blob | null>(null);


  const handleTextChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTextValue(event.target.value as string);

  };


  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files ? e.target.files[0] : null)
  }


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add Photo for your story</Typography>
        <Box sx={styles.mainImageDiv}>

          <img height={136} width={223} onClick={() => hiddenFileInput.current!.click()} src={picture ? URL.createObjectURL(picture) : "../../../../../src/assets/Image-Upload.svg"} alt='images' style={{ cursor: 'pointer' }} />

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
        <Typography sx={styles.subHeading}>Details</Typography>
        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Story Title</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='My wedding Story'
            variant="outlined"
          />

        </Box>

        <Box mt={2} >
          <Typography sx={styles.miniHeading}>Story</Typography>
          <TextField
            sx={styles.commonWidth}
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder='Tell your story here...'
            defaultValue=""
            onChange={handleTextChange}
            value={textValue}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Story