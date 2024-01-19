import { Box, Typography } from '@mui/material'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const TopBar = () => {
  return (
      <Box mt={2} sx={{
          borderRadius: '0px var(--12, 12px) 0px 0px',
          background: 'rgba(37, 47, 74, 0.18)',
          height: '40px',
          p:1
      }}>
          <Box display='flex' alignItems='center' justifyContent='space-between'>
              <LuMenu style={{color:'#1E3050', background:'#fff', fontSize:'24px', cursor:'pointer'}} />
              <Typography sx={{color:'#000', fontSize:'20px', fontWeight:'600'}}>Edit Mode</Typography>
              <RxCross2 style={{color:'#000', cursor:'pointer'}} />
          </Box>
    </Box>
  )
}

export default TopBar