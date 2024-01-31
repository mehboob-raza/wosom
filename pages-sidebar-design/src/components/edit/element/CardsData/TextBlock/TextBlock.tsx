import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styles } from './styles';
import { SelectChangeEvent } from '@mui/material/Select';

interface TextStyleInterface {
  img: string;
  value: string;
}

const TextBlock = () => {
  const [textSize, setTextSize] = useState('medium');
  const [textAlign, setTextAlign] = useState('left');
  const [textStyle, setTextStyle] = useState<string[]>([]);
  const [colorValue, setColorValue] = useState('#000000');
  const [textValue, setTextValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTextSize(event.target.value as string);
  };

  const handleTextChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTextValue(event.target.value as string);
    console.log("event.target.value", event.target.value);

  };


  const stylesImages = [
    {
      img: '../../../../../src/assets/bold.svg',
      value: 'bold'
    },
    {
      img: '../../../../../src/assets/italic.svg',
      value: "italic"
    },
    {
      img: '../../../../../src/assets/underline.svg',
      value: 'underline'
    },
  ]

  const alignImages = [
    {
      img: '../../../../../src/assets/align-left.svg',
      value: 'left'
    },
    {
      img: '../../../../../src/assets/align-center.svg',
      value: 'center'
    },
    {
      img: '../../../../../src/assets/align-right.svg',
      value: "right"
    },
    {
      img: '../../../../../src/assets/align-s.svg',
      value: 'left'
    },
  ]

  const colorsDiv = [
    "#000000",
    "#555454",
    "#555454B2",
    "#A5A5A5",
    "#D9D9D9",
    "#1D384E",
    "#4A6071",
    "#6D8FA9",
    "#7DAACD",
    "#9DC8E9",
    "#996CAC",
    "#AD89BD",
    "#C2A7CD",
    "#E0D3E6",
    "#E5DAEA",
    "#F7B500",
    "#E3AB6B",
    "#F1A44E",
  ]

  const handleTextStyle = (card: TextStyleInterface) => {
    if (!textStyle.includes(card?.value)) {
      setTextStyle([...textStyle, card?.value])
    } else {
      const removeData = textStyle.filter((v: string) => v != card?.value)
      setTextStyle(removeData)
    }
  }


  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Edit Text Block</Typography>
        <TextField
          sx={{
            marginLeft: '30px', marginTop: "29px", width: '275px', '& textarea': {
              textAlign: `${textAlign}`,
              fontSize: `${textSize}`,
              textDecoration: textStyle.includes('underline') ? "underline" : "",
              fontStyle: textStyle.includes('italic') ? "italic" : "",
              fontWeight: textStyle.includes('bold') ? "bold" : "",
              color: `${colorValue}`
            }
          }}
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder='Hi, add your text block here'
          defaultValue=""
          onChange={handleTextChange}
          value={textValue}
        />
      </Box>
      <Box mt={2} mr={3} ml={3} >
        <Typography sx={styles.subHeading}>Size</Typography>
        <FormControl size="small" fullWidth>
          <Select
            labelId="text-size-label"
            id="demo-select-small"
            value={textSize}
            onChange={(event) => handleChange(event)}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2} mr={3} ml={3} >
        <Typography sx={styles.subHeading}>Style</Typography>
        {stylesImages.map((card) => (
          <img onClick={() => handleTextStyle(card)} src={card.img} alt='cards' style={{ cursor: 'pointer', marginLeft: "40px" }} height={33} />
        ))}
      </Box>
      <Box mt={2} mr={3} ml={3} >
        <Typography sx={styles.subHeading}>Alignment</Typography>
        <Box sx={styles.alignmentDiv}>
          {alignImages.map((card) => (
            <img onClick={() => setTextAlign(card.value)} src={card.img} alt='cards' style={{ cursor: 'pointer', }} height={23} />
          ))}
        </Box>
      </Box>
      <Box mt={2} mb={9} mr={3} ml={3} >
        <Typography sx={styles.subHeading}>Color</Typography>
        <Box display={'flex'} flexWrap={'wrap'}>
          {colorsDiv.map((val) => (
            <div onClick={() => setColorValue(val)} style={{ backgroundColor: `${val}`, borderRadius: '50%', margin: "10px 0px 0px 10px", height: '33px', width: '33px', cursor: 'pointer' }}></div>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default TextBlock