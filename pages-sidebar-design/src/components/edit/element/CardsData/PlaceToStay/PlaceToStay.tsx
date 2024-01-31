import { useState, useRef, ChangeEvent } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { styles } from './styles';
import PhoneInputField from '../../../../common/PhoneInput';



const PlaceToStay = () => {

  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState<Blob | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files ? e.target.files[0] : null)
  }


  return (
    <Box mt={3}>
      <Typography sx={styles.mainHeading}>Place To Stay</Typography>

      <Box mr={3} ml={3}>
        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Name</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Name'
            variant="outlined"
          />

        </Box>

        <Typography sx={styles.miniHeading}>Photo</Typography>
        <Box sx={styles.mainImageDiv}>

          <img height={136} width={223} onClick={() => hiddenFileInput.current!.click()} src={picture ? URL.createObjectURL(picture) : "../../../../../src/assets/Image-Upload.svg"} alt='images' style={{ cursor: 'pointer' }} />
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
      <Box mt={2} mr={3} ml={3} >
        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Address</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Address'
            variant="outlined"
          />

        </Box>

        <Box mt={2} mb={3}  >
          <Typography sx={styles.miniHeading}>Phone Number</Typography>
          <PhoneInputField
            value={phone}
            onChange={(phone) => setPhone(phone)}

          />

        </Box>

        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Email</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Email'
            variant="outlined"
          />

        </Box>

        <Box mt={2} mb={3} >
          <Typography sx={styles.miniHeading}>Website</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Website'
            variant="outlined"
          />

        </Box>

      </Box>
    </Box>
  )
}

export default PlaceToStay