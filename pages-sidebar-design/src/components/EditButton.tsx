// EditButton.tsx
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FiEdit } from 'react-icons/fi';

interface ViewPageProps {
  toggleClick: () => void;
}

const EditButton = (props: ViewPageProps) => {

  const { toggleClick } = props
  const [hover, setHover] = useState(false)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        position: 'fixed',
        background: '#fff',
        borderRadius: '10px',
        bottom: '50%',
        p: 1,
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={toggleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FiEdit
        style={{
          color: 'black',
          fontSize: '10px',
        }}
      />
      {
        hover && <Typography sx={{ fontSize: '10px' }}>Edit site</Typography>
      }
    </Box>
  );
};

export default EditButton;
