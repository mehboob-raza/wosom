import { useState, useRef, ChangeEvent } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { styles } from './styles';
import Switch from '@mui/material/Switch';
import PhoneInputField from '../../../../common/PhoneInput';



const Person = () => {

  const [picture, setPicture] = useState<Blob | null>(null);
  const [addressSwitch, setAddressSwitch] = useState(true);
  const [phoneSwitch, setPhoneSwitch] = useState(true);
  const [phone, setPhone] = useState('');

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files ? e.target.files[0] : null)
  }


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add a Person</Typography>
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

        <Box mt={2} mr={3} ml={3} >
          <Typography sx={styles.subHeading}>Alignment</Typography>
          <Box>
            <img height={60} width={108} src={"../../../../../src/assets/person_structure_left.svg"} alt='images' style={{ margin: "0px 25px 0px 25px" }} />
            <img height={60} width={108} src={"../../../../../src/assets/person_structure_right.svg"} alt='images' />
          </Box>
        </Box>

      </Box>
      <Box mt={2} mr={3} ml={3} >
        <Typography sx={styles.subHeading}>Details</Typography>
        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Name</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Name'
            variant="outlined"
          />

        </Box>

        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Role</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Role'
            variant="outlined"
          />

        </Box>

        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Address <Switch value={addressSwitch} onChange={() => setAddressSwitch(!addressSwitch)} /></Typography>

          <TextField sx={styles.commonWidth}
            disabled={addressSwitch}
            id="outlined-basic"
            placeholder='Enter Address'
            variant="outlined"
          />

        </Box>

        <Box mt={2} mb={3}  >
          <Typography sx={styles.miniHeading}>Phone Number <Switch value={phoneSwitch} onChange={() => setPhoneSwitch(!phoneSwitch)} /></Typography>
          <PhoneInputField
            disabled={phoneSwitch}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />

        </Box>

      </Box>
    </Box>
  )
}

export default Person