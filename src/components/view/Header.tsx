import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material'
import viewBg from '../../assets/header_bg.svg'
import icon from '../../assets/viewIcon.svg'
import pro from '../../assets/proVerified.svg'
import { useState } from 'react'
import Gallery from './Gallery/Gallery'
import About from './about-us/About.tsx'
import Contact from './contact-us/Contact.tsx'

const Header = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    const renderComponent = () => {
    switch (value) {
      case 0:
        return <Gallery />;
      case 1:
        return <About />;
      case 2:
        return <Contact />;
      default:
        return null;
    }
    };
  return (
      <Box>
          <Box sx={{
              width: '100%',
            //   display: 'flex',
          }}>
              <Box component='img' src={viewBg} sx={{
              width: '100%',
              display: 'flex',
              }} />
              <Box sx={{
                   
              }}>
                <Container maxWidth='lg' sx={{
                      backgroundColor:'#fff'
                  }}>
                    <Box sx={{
                        display: 'flex',
                        position: 'relative',
                        }}>
                            <Box component='img' src={icon} sx={{
                                display: 'flex',
                                position: 'absolute',
                                top: "-70px",
                                
                                }} />
                    </Box>
                    
                      <Box mt={14} sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent:'space-between'
                    }}>
                        <Box display='flex' flexDirection='column' gap={1}>
                            <Typography>Brand New</Typography>
                            <Typography>Name</Typography>
                            <Typography>Location</Typography>
                            <Typography>Category</Typography>
                            <Box component='img' src={pro} /> 
                          </Box>
                          <Box display='flex' flexDirection='column' gap={1}>
                              <Button sx={{
                                    display: 'flex',
                                    textTransform:'capitalize',
                                    height: '40px',
                                    padding: '9px 17.974px 9px 18.32px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    borderRadius: '7px',
                                    border: '1px solid #CCC',
                                  background: '#DDD',
                                  color:'black',
                                  '&:hover': {
                                    background: '#DDD',
                                    }
                                }}>Request Quote</Button>
                              <Button sx={{
                                  color:'black',
                                    display: 'flex',
                                    textTransform:'capitalize',
                                    height: '40px',
                                    padding: '9px 17.974px 9px 18.32px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    borderRadius: '7px',
                                    border: '1px solid #CCC',
                                    background: '#DDD',
                                    '&:hover': {
                                      background: '#DDD',
                                    }
                                }}>Message</Button>
                          </Box>
                    </Box>
                      
                    <Box mt={4} sx={{ backgroundColor: '#eff0f0', p: 1, borderRadius: 4, borderBottom: '2px solid #494949' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary" // Set the color of the unselected tabs' indicator/bar
                            textColor="inherit" // Set the color of the text
                            sx={{ backgroundColor: 'transparent' }} // Set the background color of the Tabs container to be transparent
                        >
                            <Tab label="Gallery" sx={{ color: 'black', fontWeight: '800' }} />
                            <Tab label="About Us" sx={{ color: 'black', fontWeight: '800' }} />
                            <Tab
                            label="Contact Us"
                            sx={{
                                color: 'black',
                                fontWeight: '800',
                            }}
                            />
                        </Tabs>
                    </Box>
                    <Box mt={4}>
                        {renderComponent()}
                    </Box>
                </Container>
               
              </Box>
              
          </Box>
      </Box>
  )
}

export default Header