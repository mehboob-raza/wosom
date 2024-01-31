import { Box, Container, Grid, Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";



const contactUsData = [
  {
    icon: '../../../../src/assets/webIcon.svg',
    name: "Website",
    link: "kimberleyrosebridal.co.uk",
  },
  {
    icon: '../../../../src/assets/mailIcon.svg',
    name: "Email",
    link: "contact@kimberle.com",
  },
  {
    icon: '../../../../src/assets/contactIcon.svg',
    name: "Contact Number",
    link: "+613 8376 2684",
  },
  {
    icon: '../../../../src/assets/smily.svg',
    name: "Follow Us",
    link: <FaFacebook />,
    link1: <FaTiktok />,
    link2: <FaInstagram />,
    link3: <FaTwitter />,
  },
  {
    icon: '../../../../src/assets/house.svg',
    name: "Address",
    link: "174 Exeter Street, Plymouth",
  },
  {
    icon: '../../../../src/assets/hash.svg',
    name: "Hashtags",
    link: "#wosom #boutique ",
  },
];
const ContactCards = () => {
  return (
    <Box mt={8}>
      <Container maxWidth="lg">
        <Grid container>
          {contactUsData.map((data, i) => {
            return (
              <Grid item key={i} md={4} sm={6} xs={12}>
                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 6,
                  alignItems: 'center',
                  ml:6
                }}>
                  <Box sx={{
                    display: 'flex',
                    background: '#C09653',
                    height: '48px',
                    borderRadius: '24px',
                    width: '48px',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Box component='img' src={data.icon} width='16px' height='16px' />
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap:'5px'
                  }}>
                    <Typography variant="h6" sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                    }}>{data.name}</Typography>
                    <Typography variant="body1" sx={{color:'#555454', display:'flex', alignItems:'center', gap:3}}>{data.link} {data.link1} {data.link2} {data.link3} </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactCards;
