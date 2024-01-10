import { Box, Container, Typography } from '@mui/material'
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

 const contactCards = [
  {
    icon: <CiLocationOn />,
    name: "Address",
    text: "7 Green Lake Street ",
  },
  {
    icon: <IoMdMail />,
    name: "Email Us",
    text: "example@gmail.com ",
  },
  {
    icon: <FaPhone />,
    name: "Call Now",
    text: "+1 800 123 456 789",
  },
];

const ContactCards = () => {
  return (
      <Box mt={6}>
          <Container maxWidth='md'>
              <Box sx={{
                  display: 'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  
                  p: 3,
                  gap:3
              }}>
                  {
                      contactCards.map((data, i) => {
                          return (
                              <Box sx={{
                                width:'100%', 
                                boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.15)",
                                background: "rgba(255, 255, 255, 0.00)",
                                borderRadius: '12px',
                                height: '280px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent:'center',
                                flexDirection: 'column',
                                gap:3
                              }}>
                                  <Box sx={{
                                    color: '#C09653',
                                    p: '25px',
                                    backgroundColor: '#F5F5F5',
                                    borderRadius: '42.5px',
                                    fontSize:'26px',
                                    height:'85px'
                                  }}>
                                      {data.icon}
                                  </Box>
                                  <Typography sx={{
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                  }}> {data.name} </Typography>
                                  <Typography sx={{color:'#848892', textAlign:'center'}}> {data.text} </Typography>
                                  
                              </Box>
                          )
                      })
                  }
              </Box>
          </Container>
    </Box>
  )
}

export default ContactCards