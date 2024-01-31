import { Box, TextField, Typography } from '@mui/material'
import { styles } from './styles';


const Socials = () => {

  const Fields = [
    {
      name: "WhatsApp",
      image: "../../../../../../src/assets/Icons/whatsapp.svg"
    },
    {
      name: "Facebook",
      image: "../../../../../../src/assets/Icons/facebook.svg"
    },
    {
      name: "Instagram",
      image: "../../../../../../src/assets/Icons/instagram.svg"
    },
    {
      name: "Twitter",
      image: "../../../../../../src/assets/Icons/twitter.svg"
    },
    {
      name: "LinkedIn",
      image: "../../../../../../src/assets/Icons/linkedin.svg"
    }
  ]


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add Socials</Typography>

        {Fields.map((item) => (<Box mt={2} mr={3} ml={3} >
          <Typography display={"flex"} alignItems={"center"} sx={styles.miniHeading}>
            <img src={item.image} alt='cards' style={{ cursor: 'pointer', marginRight: '5px' }} height='14px' />
            {item.name}
          </Typography>
          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder={item.name}
            variant="outlined"
          />

        </Box>))}


      </Box>
    </Box>
  )
}

export default Socials