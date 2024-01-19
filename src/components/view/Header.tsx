import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material'
import icon from '../../assets/viewIcon.svg'
import pro from '../../assets/proVerified.svg'
import { ChangeEvent, useState } from 'react'
import About from './about/About.tsx'
import Contact from './contact-us/Contact.tsx'
import GalleryTwo from './gallery2/GalleryTwo.tsx'

const Header = () => {
  const [value, setValue] = useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = ( _event: ChangeEvent<{}>, newValue: number) => {
  setValue(newValue);
};
    const renderComponent = () => {
    switch (value) {
      case 0:
        return <GalleryTwo />;
      case 1:
        return <About />;
      case 2:
        return <Contact />;
      default:
        return null;
    }
    };
  return (
      
    <Box sx={{mt:'-20px'}}>
        
            <Box>
              <Box  sx={{ backgroundColor: '#fff' }}>
                <Box sx={{
                        display: 'flex',
                        position: 'relative',
                        }}>
                            <Box component='img' src={icon} sx={{
                                display: 'flex',
                                position: 'absolute',
                                top: {md:"-70px", sm:'-70px', xs:'-50px'},
                                width: {md:'150px', sm:'130px', xs:'100px'},
                                height: {md:'150px', sm:'130px', xs:'100px'},
                                ml:2
                                }} />
                </Box>
                    
              <Box  p={2} sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          mt:{md:10, sm:8, xs:7}
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
              <Box mt={4} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTop: "0.5px solid rgba(0, 0, 0, 0.43)",
                        borderBottom: "0.5px solid rgba(0, 0, 0, 0.43)",
                        }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="inherit"
                                sx={{ backgroundColor: 'transparent',  }}
                            >
                                <Tab
                                  label="Gallery"
                                  sx={{
                                      color: 'black',
                                      fontWeight: 500,
                                      fontSize: '14px',
                                      position: 'relative',
                                      '&::before': {
                                          content: '""',
                                          position: 'absolute',
                                          bottom: '0',
                                          left: '50%',
                                          transform: 'translateX(-50%)',
                                          width: '0',
                                          height: '2px',
                                          backgroundColor: 'blue',
                                          transition: 'width 0.3s ease',
                                      },
                                      '&:hover::before': {
                                          width: '100%',
                                      },
                                      '&.Mui-selected::before': {
                                          width: '100%',
                                      },
                                  }}
                              />


                                <Tab
                                    label="About Us"
                                    sx={{
                                      color: 'black',
                                      fontWeight: 500,
                                      fontSize: '14px',
                                      position: 'relative',
                                      '&::before': {
                                          content: '""',
                                          position: 'absolute',
                                          bottom: '0',
                                          left: '50%',
                                          transform: 'translateX(-50%)',
                                          width: '0',
                                          height: '2px',
                                          backgroundColor: 'blue',
                                          transition: 'width 0.3s ease',
                                      },
                                      '&:hover::before': {
                                          width: '100%',
                                      },
                                      '&.Mui-selected::before': {
                                          width: '100%',
                                      },
                                  }}
                                />
                                <Tab
                                    label="Contact Us"
                                    sx={{
                                      color: 'black',
                                      fontWeight: 500,
                                      fontSize: '14px',
                                      position: 'relative',
                                      '&::before': {
                                          content: '""',
                                          position: 'absolute',
                                          bottom: '0',
                                          left: '50%',
                                          transform: 'translateX(-50%)',
                                          width: '0',
                                          height: '2px',
                                          backgroundColor: 'blue',
                                          transition: 'width 0.3s ease',
                                      },
                                      '&:hover::before': {
                                          width: '100%',
                                      },
                                      '&.Mui-selected::before': {
                                          width: '100%',
                                      },
                                  }}
                                />
                            </Tabs>
              </Box>
              <Box mt={4}>
                  {renderComponent()}
              </Box>
              </Box>
            </Box>
        </Box>
  )
}

export default Header