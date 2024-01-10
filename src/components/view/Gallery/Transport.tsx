import { Box, Container, Grid, Typography } from '@mui/material'
import { transportData } from '../../../Data/data'
import { LuPhone } from "react-icons/lu";
import { VscMail } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";


const Transport = () => {
  return (
    <Box mt={6}>
      <Typography sx={{fontWeight:'800', textAlign:'center'}}>Transport,place to stay,Activity</Typography>
      <Container maxWidth='md'>
        <Box mt={4}>
          {
            transportData.map((data, i) => {
              return <Box key={i} sx={{
                display: 'flex',
                flexDirection: {sm:'row',xs:'column'},
                alignItems: 'center',
                justifyContent: 'center',
                gap:3
              }}>
                  <Box component='img' src={data.img} />
                <Box>
                  <Typography variant='h4' sx={{ fontWeight: '600',  }}> {data.h1} </Typography>
                  <Typography sx={{display:'flex', alignItems:'center', gap:1}}> <LuPhone/> {data.phone} </Typography>
                  <Typography sx={{display:'flex', alignItems:'center', gap:1}}> <VscMail /> {data.mail} </Typography>
                  <Typography sx={{display:'flex', alignItems:'center', gap:1 }}> <TbWorld /> {data.website} </Typography>
                  <Typography sx={{display:'flex', alignItems:'center', gap:1}}> <TfiLocationPin /> {data.address} </Typography>
                  <Typography sx={{color:'#808080'}}> {data.text} </Typography>
                </Box>
                  
              </Box>
            })
          }
        </Box>  

      </Container>
           
          
    </Box>
  )
}

export default Transport