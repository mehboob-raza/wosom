import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { IoIosArrowBack } from 'react-icons/io';

interface CloseSideBarProps {
  onClose: () => void;
  open: boolean;
}

const CloseSideBar: React.FC<CloseSideBarProps> = ({ open, onClose }) => {
  const [hover, setHover] = useState(false);

  return (
    
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        position: 'fixed',
        left: open ? '330px': '-330px',
        top:'50%',
        background: '#fff',
        borderRadius: '10px',
        bottom:'50%',
        p: 1,
        '&:hover': {
          cursor: 'pointer',
        },
      }}
          onClick={onClose}
          onMouseOver= {() => setHover(true)}
          onMouseLeave= {() => setHover(false)}
    >
      <IoIosArrowBack
        style={{
          color: 'black',
          fontSize: '10px',
        }}
      />
          {
              hover && <Typography sx={{ fontSize: '10px' }}>view site</Typography>
        }
    </Box>
  );
};

export default CloseSideBar;