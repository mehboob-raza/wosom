import { Box, Typography } from '@mui/material'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const TopBar = (props: any) => {
  const { onCrossClick } = props
  return (
    <Box mt={0} sx={{
      // borderRadius: '0px var(--12, 12px) 0px 0px',
      background: 'rgba(37, 47, 74, 0.18)',
      height: '40px',
      p: 1
    }}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <img src={"../../../src/assets/PageMenu.svg"} alt='image' style={{ cursor: 'pointer' }} height={24} />
        {/* <LuMenu style={{ color: '#1E3050', background: '#fff', fontSize: '24px', cursor: 'pointer' }} /> */}
        <Typography sx={{ color: '#000', fontSize: '20px', fontWeight: '600' }}>Edit Mode</Typography>
        <Box onClick={onCrossClick}>
          <RxCross2 style={{ color: '#000', cursor: 'pointer' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default TopBar