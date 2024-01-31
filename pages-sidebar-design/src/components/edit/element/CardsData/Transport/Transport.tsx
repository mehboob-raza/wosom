import { useState, useRef, ChangeEvent } from 'react'
import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { styles } from './styles';
import PhoneInputField from '../../../../common/PhoneInput';
import { SelectChangeEvent } from '@mui/material/Select';



const Transport = () => {

  const [picture, setPicture] = useState<Blob | null>(null);
  const [phone, setPhone] = useState('');
  const [selectVendor, setSelectVendor] = useState('select');
  const [searchVendor, setSearchVendor] = useState('search');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectVendor(event.target.value as string);
  };

  const handleSearchChange = (event: SelectChangeEvent<string>) => {
    setSearchVendor(event.target.value as string);
  };


  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files ? e.target.files[0] : null)
  }


  return (
    <Box mt={3}>
      <Typography sx={styles.mainHeading}>Add Transport</Typography>
      <Box m={3}>
        <FormControl size="medium" fullWidth>
          <Select
            sx={{
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              }
            }}
            labelId="text-size-label"
            id="demo-select-small"
            value={selectVendor}
            onChange={(event) => handleSelectChange(event)}
            open={isSelectOpen}
            onClose={() => setIsSelectOpen(false)}
            onOpen={() => setIsSelectOpen(true)}
          >
            <MenuItem value="select">Select Vendors</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box m={3}>
        <FormControl size="medium" fullWidth>
          <Select
            sx={{
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              }
            }}
            labelId="text-size-label"
            id="demo-select-small"
            value={searchVendor}
            onChange={handleSearchChange}
            open={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onOpen={() => setIsSearchOpen(true)}
          >
            <MenuItem value="search">Search Vendors</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <hr style={{ margin: "23px 30px 0px 30px" }} />
      </Box>
      <Typography sx={styles.mainHeading}>Add Manually</Typography>
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

export default Transport