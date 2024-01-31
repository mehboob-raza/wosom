import React, { useState, useRef } from 'react'
import { Box, Button, Typography, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styles } from './styles';

const WeddingTimeline = () => {

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const [picture, setPicture] = useState<Blob | object | null>(null);
  const [allImages, setAllImages] = useState<object[]>([]);
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTextValue(event.target.value as string);

  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageUpload = (e: any) => {
    setAllImages([...allImages, e.target.files[0]])
  }

  const handleSelectImage = (val: Blob | object) => {
    setPicture(val)
  }


  const handleDeleteSelectImage = () => {
    const newImagesData = allImages.filter((i) => i != picture)
    setAllImages(newImagesData)
    setPicture(null)
  }


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add Wedding Day Timeline</Typography>
        <Box sx={styles.imageDiv}>

          <img height={136} width={223} src={picture ? URL.createObjectURL(picture as Blob) : "../../../../../../src/assets/Image-Upload.svg"} alt='images' />
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: 'none' }}
            onChange={(event) => {
              handleImageUpload(event);
            }}
          />
        </Box>

        <Box sx={styles.addMoreDiv}>
          <Typography sx={styles.addMoreDivStyle}>You can add multiple photos in timeline</Typography>
          <Button onClick={() => hiddenFileInput.current!.click()} sx={styles.addMoreBtn}>Add More</Button>
          <hr style={{ margin: "23px 30px 0px 30px" }} />
        </Box>

        <Box sx={styles.multiImageDiv}>
          <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <img height={23} width={14} src={"../../../../../../src/assets/Icons/grip-vertical-solid.svg"} alt='image' style={{ marginRight: '10px' }} />
            <Box overflow={'auto'} width={"245px"} display={"flex"}>
              {allImages.length > 0 && allImages?.map((val) => (
                <img height={90} onClick={() => handleSelectImage(val)} width={114} src={URL.createObjectURL(val as Blob)} alt='images' style={{ marginRight: '10px', }} />
              ))}

            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <img height={23} width={14} src={"../../../../../../src/assets/Icons/Edit.svg"} alt='image' style={{ cursor: 'pointer', }} />
            <img height={23} width={14} onClick={() => handleDeleteSelectImage()} src={"../../../../../../src/assets/Icons/Delete.svg"} alt='image' style={{ cursor: 'pointer', }} />
          </Box>

        </Box>

        <Box mt={2} mr={3} ml={3} >
          <Typography sx={styles.subHeading}>Date Of Memory</Typography>
          <Box sx={{}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="" />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>

        <Box mt={2} mr={3} ml={3}>
          <Typography sx={styles.subHeading}>Description</Typography>
          <TextField
            sx={{
              width: '275px',
            }}
            id="outlined-multiline-static"
            multiline
            rows={3}
            placeholder='Enter Description'
            defaultValue=""
            onChange={handleTextChange}
            value={textValue}
          />
        </Box>

        <Box sx={styles.multiImageDiv}>
          <Box display={'flex'} alignItems={'center'}>
            <img height={23} width={14} src={"../../../../../../src/assets/Icons/grip-vertical-solid.svg"} alt='cards' style={{ cursor: 'pointer', marginRight: '10px' }} />
            <Box overflow={'auto'} width={"245px"} display={"flex"}>
              {allImages.length > 0 && allImages?.map((val) => (
                <img height={90} onClick={() => handleSelectImage(val)} width={114} src={URL.createObjectURL(val as Blob)} alt='cards' style={{ cursor: 'pointer', marginRight: '10px', }} />
              ))}

            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <img height={23} width={14} src={"../../../../../../src/assets/Icons/Edit.svg"} alt='cards' style={{ cursor: 'pointer', }} />
            <img height={23} width={14} onClick={() => handleDeleteSelectImage()} src={"../../../../../../src/assets/Icons/Delete.svg"} alt='cards' style={{ cursor: 'pointer', }} />
          </Box>

        </Box>


      </Box>

    </Box>
  )
}

export default WeddingTimeline