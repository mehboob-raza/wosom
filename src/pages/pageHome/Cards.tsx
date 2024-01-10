import { Autocomplete, Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import {  myData } from '../../Data/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          {myData.map((data, i) => (
            <Grid item key={i} lg={3.4} md={4} sm={6} xs={12}>
              <Card
                sx={{
                  width: '100%',
                  boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
                  border: '1px solid var(--s, rgba(169, 169, 169, 0.50))',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <img src={data.icon} alt='icon' />
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                      {data.heading}
                    </Typography>
                  </Box>

                  <Box
                    mt={4}
                    sx={{
                      display: 'flex',
                      backgroundColor: hoveredIndex === i ? '#F1F1F1' : 'transparent',
                      width: '100%',
                      p: 3,
                      gap: hoveredIndex === i ? '50px' : 0,
                      transition: 'gap 0.4s ease-in-out',
                    }}
                  >

                    <Box
                      sx={{
                        display: 'flex',
                        cursor: 'pointer',
                        gap: hoveredIndex === i ? '50px' : 0,
                        transition: 'gap 0.7s ease-in-out',
                      }}
                    >
                      
                      <Box sx={{
                        display: 'flex',
                        height: '220px',
                        overflow: 'hidden',
                      }} >
                        <img src={data.img} alt='img' height='300px'
                          style={{
                          transition: 'height 0.5s ease-in-out',
                          height: hoveredIndex === i ? '220px':'300px' ,
               
                        }}  
                        />
                      </Box>
                      <img
                        src={data.img1}
                        alt='img1'
                        style={{
                          display: 'flex',
                          marginLeft: '-40px',
                          marginTop: '60px',
                          height: '140px',
                          zIndex: 1
                        }}
                      />
                    </Box>
                  </Box>

                   <Box
                    sx={{
                      display: 'flex',
                      position: 'absolute',
                      top: '40%',
                      left: '40%',
                      transform: hoveredIndex === i ? 'translateY(-20px)' : 'translateY(0)',
                      transition: 'transform 0.7s ease-in-out',
                          zIndex: 1

                    }}
                  >
                    {hoveredIndex === i && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          gap: 2,
                        }}
                      >
                        <Link to='viewPage'>
                        <Button variant="contained" sx={{
                            backgroundColor: '#C09653',
                            borderRadius: '12px',
                            fontSize:'14px',
                            '&:hover': {
                            backgroundColor: '#C09653',
                            }
                        }}>
                          View My Page
                        </Button>
                        </Link>
                        <Link to='editPage'>
                          <Button variant="contained" sx={{
                            backgroundColor: '#C09653',
                            borderRadius: '12px',
                            fontSize:'14px',
                            '&:hover': {
                            backgroundColor: '#C09653',
                            }
                        }}>
                          Edit my page
                        </Button>
                        </Link>
                      </Box>
                    )}
                  </Box>

                  <Typography variant='h4' sx={{ fontWeight: '600', mt: 5, fontSize: '24px' }}>
                    {data.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Cards;
