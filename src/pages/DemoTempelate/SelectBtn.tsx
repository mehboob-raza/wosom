import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { buttons } from '../../Data/data'
import { useState } from 'react';

const SelectBtn = () => {
      const [select, setSelect] = useState('');

  return (
      <Box>
          <Container>
              <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Pick The Template You <span style={{ fontFamily: 'ButterScotch, sans-serif', color: '#C09653' }}>Adorel</span> </Typography>
                    <Box>
                        <TextField
                        label="Search input"
                        sx={{
                        // mr: { lg: , md: 0, sm: 0, xs: 0 },
                        // width:{lg:'18%' ,md:'100%', sm:'100%', xs:'100%'},
                        }}
                        />
                    </Box>
              </Box>

              <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Box mt={4} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flexWrap:'wrap',
                }}>
                  {
                      buttons.map((button, i) => {
                          return <Button key={i} sx={{
                              border: '1px solid black',
                              borderRadius: '12px',
                              color: '#000',
                              px: 4,
                              py: 1.4,
                              fontWeight: 'bold',
                              textTransform:'capitalize'
                          }}>
                              {button}
                          </Button>
                      })
              }
                  </Box>

                  <Box>
                    <FormControl
                        variant="filled"
                        sx={{
                        width: 140,
                        mt: 4,
                        borderRadius: 4,  // Set the borderRadius to 4
                        }}
                        size='small'
                    >
                        <InputLabel id="demo-simple-select-filled-label">All Template</InputLabel>
                        <Select
                        id="demo-simple-select-filled"
                        value={select}
                        sx={{
                            borderBottom: 'none',  // Remove the bottom border
                            borderRadius: 4,  // Set the borderRadius to 4
                            '&.MuiFilledInput': {
                            border: 'none',  // Remove the bottom border for the filled variant
                            },
                            '.MuiOutlinedInput-notchedOutline': { border: 0 }
                            
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Template one</MenuItem>
                        <MenuItem value={20}>Template two</MenuItem>
                        <MenuItem value={30}>Template three</MenuItem>
                        </Select>
                    </FormControl>
                  </Box>

                  {/* <Box >
                      <FormControl variant="filled" sx={{
                          width: 140, mt: 4, }} size='small'>
                        <InputLabel id="demo-simple-select-filled-label">All Template</InputLabel>
                        <Select
                        // labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                              value={select}
                             
                        // onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Template one</MenuItem>
                            <MenuItem value={20}>Template two</MenuItem>
                            <MenuItem value={30}>Template three</MenuItem>
                        </Select>
                    </FormControl>
                  </Box> */}
              </Box>
              
          </Container>
      </Box>
  )
}

export default SelectBtn