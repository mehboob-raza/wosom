import { Box, TextField, Typography } from '@mui/material'
import { styles } from './styles';


const Socials = () => {

  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add Location</Typography>

        <Box mt={2} mr={3} ml={3} >
          <Typography display={"flex"} alignItems={"center"} sx={styles.miniHeading}>
            {"Location"}
          </Typography>
          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='add iframe location'
            variant="outlined"
          />

        </Box>


      </Box>
    </Box>
  )
}

export default Socials