import React, { useState, Dispatch, SetStateAction } from 'react'
import { Box, Button, Typography, TextField, FormControl, Select, MenuItem } from '@mui/material'
import { styles } from './styles';
import Switch from '@mui/material/Switch';
import { SelectChangeEvent } from '@mui/material/Select';


import BackButton from '../../BackButton';

interface SettingsProps {
    setSetting: Dispatch<SetStateAction<boolean>>;
}

const Settings = (props: SettingsProps) => {

    const { setSetting } = props

    const [textValue, setTextValue] = useState('');
    const [textSize, setTextSize] = useState('medium');
    const [addressSwitch, setAddressSwitch] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setTextSize(event.target.value as string);
    };

    const handleTextChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTextValue(event.target.value as string);

    };

    const pages = [
        "Gallery",
        "About",
        "Timeline"
    ]


    return (
        <Box>
            <BackButton onClick={() => setSetting(false)} />
            <Box mt={2}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"end"} mr={1}>
                    <Typography sx={styles.subHeading}>Activate Site</Typography>
                    <Switch value={addressSwitch} onChange={() => setAddressSwitch(!addressSwitch)} />
                </Box>
                <Box>
                    <Typography sx={styles.mainHeading}>Site Pages</Typography>

                    {pages.map((item) => (
                        <Box sx={styles.multiImageDiv}>
                            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                <img height={23} width={14} src={"../../../../src/assets/Icons/grip-vertical-solid.svg"} alt='image' style={{ marginRight: '10px' }} />
                                <Box display={"flex"} alignItems={"center"}>
                                    <Typography sx={styles.miniHeading}>{item}</Typography>
                                </Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                <Switch value={addressSwitch} onChange={() => setAddressSwitch(!addressSwitch)} />
                                <img height={23} width={14} src={"../../../../src/assets/Icons/Delete.svg"} alt='image' style={{ cursor: 'pointer', }} />
                            </Box>

                        </Box>
                    ))}

                    <Box sx={styles.addMoreDiv}>
                        <Button sx={styles.addMoreBtn}>Add Page</Button>
                        <hr style={{ margin: "23px 50px 30px 50px" }} />
                    </Box>



                    <Typography sx={styles.mainHeading}>About Pages</Typography>

                    <Box mt={2} mr={3} ml={3} >
                        <Typography sx={styles.subHeading}>Your Page Name</Typography>
                        <TextField
                            sx={{
                                width: '275px',
                            }}
                            id="outlined-multiline-static"
                            placeholder='Enter Page Name'
                            onChange={handleTextChange}
                            value={textValue}
                        />
                    </Box>

                    <Box mt={2} mr={3} ml={3}>
                        <Typography sx={styles.subHeading}>Assign Event</Typography>
                        <FormControl size="medium" fullWidth>
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

                    <Box mt={2} mr={3} ml={3} display={"flex"} alignItems={"center"}>
                        <Typography sx={[styles.subHeading, { marginRight: '5px' }]}>Language: </Typography>
                        <img height={23} width={14} src={"../../../../src/assets/Icons/Edit.svg"} alt='image' style={{ cursor: 'pointer', }} />
                    </Box>

                    <Box mt={2} mr={3} ml={3} display={"flex"} alignItems={"center"}>
                        <Typography sx={[styles.subHeading, { marginRight: '5px' }]}>Website URL:</Typography>
                        <Typography fontWeight={"bold"} fontSize={"13px"}>www.mypagewosom.com</Typography>
                    </Box>

                    <Box sx={styles.addMoreDiv} mb={3}>
                        <hr style={{ margin: "23px 50px 30px 50px" }} />
                        <Button sx={[styles.addMoreBtn, { background: 'rgba(179, 5, 5, 1)', color: 'white' }]}>Delete Page</Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Settings