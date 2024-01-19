import { Box, FormControl, IconButton, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import BackButton from '../../../BackButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Text = () => {
    const [textSize, setTextSize] = useState('medium');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTextSize(event.target.value as string);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
      <Box>
        <BackButton />

        <Box>
              <Typography sx={{fontWeight:'bold'}}>Edit Title</Typography>
              <Input type='text' multiline />
        </Box>
        <Box mt={2}>
            <FormControl fullWidth>
                <InputLabel id="text-size-label">Text Size</InputLabel>
                <Select
                labelId="text-size-label"
                id="text-size"
                value={textSize}
                label="Text Size"
                onChange={handleChange}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
                >
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
                </Select>
                <IconButton onClick={handleToggle} size="small" style={{ marginLeft: '-36px' }}>
                {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </FormControl>
        </Box>

    </Box>
  )
}

export default Text