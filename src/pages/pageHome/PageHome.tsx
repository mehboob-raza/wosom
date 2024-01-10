import { Autocomplete, Box, Button, Container, TextField, Typography } from '@mui/material'
import Cards from './Cards'
import { CiCirclePlus } from "react-icons/ci";

const PageHome = () => {
  return (
    <Box sx={{background:'#fff'}}>
      <Container maxWidth='xl'>
        <Box p={2} sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Box>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>My Pages </Typography>
            <Typography sx={{color:'#99A1B7'}}>Home</Typography>
            </Box>
            <Box>
            <Button sx={{
              color: 'blue',
              display: 'flex',
              gap: 1,
              '&:hover': {
                background:'transparent',
              }
              }}>
                Add Page  <CiCirclePlus style={{color:'blue', fontSize:'18px'}} /> 
              </Button>
            </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: { lg: 'end', md: 'end', sm: 'center', xs: 'center' },
          p:{lg:0, md:3, sm:3, xs:3}
        }}>
              
                  <TextField
                    label="Search input"
                    sx={{
                      // mr: { lg: , md: 0, sm: 0, xs: 0 },
                      width:{lg:'18%' ,md:'100%', sm:'100%', xs:'100%'},
                    }}
                    />
          </Box>

        <Cards />
      </Container>
    </Box>
  )
}

export default PageHome