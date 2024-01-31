import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const GetInTouch = () => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
      <Box pb={6}>
          <Container maxWidth='md'>
            <Box sx={{
                  display: 'flex',
                  borderTop: '2px solid #C09653',
                  pb: 4,
                  mt: 5
              }}>
                  
            </Box>

            <Box mb={6} sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap:4
              }}>
                
                  <Typography variant='h5' sx={{
                      fontWeight: '500',
                      color: '#555454',
                      
                      }}>Get In Touch with us</Typography>
                <Box sx={{
                      borderBottom: '2px solid #C09653',
                      pb: 2,
                      width:{md:'10%', sm:0, xs:0}
                  }}>
                </Box>
                  <Typography variant='body1' sx={{
                      color: '#757575',
                  }}>
                      SHORT DESCRIPTION::Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat
                  </Typography>
            </Box>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <Grid container spacing={3}>
               
                <Grid item xs={12} sm={12}>
                    <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    required
                    sx={{
                        background: "#F8F8F8"
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    required
                    type="email"
                    sx={{
                        background: "#F8F8F8"
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    sx={{
                        background: "#F8F8F8"
                    }}
                    />
                </Grid>
                <Box p={3} display='flex' alignItems='center' justifyContent='space-between' width='100%'>
                    <Button type="submit" variant="contained" sx={{
                        backgroundColor:'#C09653',
                        '&:hover': {
                            backgroundColor:'#C09653',
                        }
                    }}>
                    Submit
                    </Button>
                    <Box display='flex' alignItems='center' gap={2}>
                        <FaFacebook style={{color:'#C09653'}} />  
                        <FaTiktok style={{color:'#C09653'}}/>   
                        <FaInstagram style={{color:'#C09653'}} />      
                        <FaTwitter style={{color:'#C09653'}} />
                    </Box>      
                </Box>
                </Grid>
            </form>
              
            <Box sx={{
                  display: 'flex',
                  borderTop: '2px solid #C09653',
                  mt: 8
              }}>
                  
              </Box>
          </Container>
    </Box>
  )
}

export default GetInTouch