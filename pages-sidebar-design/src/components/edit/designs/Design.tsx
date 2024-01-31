import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from './styles';

const Design = () => {

  const [picture, setPicture] = useState("../../../../src/assets/admin_theme.svg");

  const themesImages = [
    {
      image: "../../../../src/assets/themes1.svg",
      name: "Earthy Flora"
    },
    {
      image: "../../../../src/assets/themes2.svg",
      name: "Blue Aqua"

    },
    {
      image: "../../../../src/assets/admin_theme.svg",
      name: "love Birds"
    },
    {
      image: "../../../../src/assets/themes1.svg",
      name: "Earthy Flora"
    },
    {
      image: "../../../../src/assets/themes2.svg",
      name: "Blue Aqua"

    },
    {
      image: "../../../../src/assets/admin_theme.svg",
      name: "love Birds"
    }

  ]


  const handleImageSelect = (e: string) => {
    setPicture(e)
  }


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Selected Theme</Typography>
        <Box sx={styles.mainImageDiv}>
          <img height={277} width={223} src={picture} alt='image' />
          <Typography sx={styles.subHeading}>Theme By Admin</Typography>
          <Typography sx={styles.addMoreDivStyle}>Explore design options and make it uniquely yours!</Typography>

        </Box>

      </Box>
      <Box mt={4} mr={3} ml={3} >
        <Box sx={styles.galleryHeadingDiv}>
          <Typography sx={styles.subHeading}>More Designs</Typography>
        </Box>
        <Box mt={2} mb={5} display={"flex"} flexWrap={"wrap"}>
          {themesImages.map((val) => (
            <Box alignItems={"center"} display={"flex"} flexDirection={"column"} mb={2}>
              <img onClick={() => handleImageSelect(val.image)} height={130} width={123} src={val.image} alt='images' style={{ marginRight: "12px" }} />
              <Typography sx={styles.miniHeading}>{val.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Design