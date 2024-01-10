import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { TbTextSize } from "react-icons/tb";
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import PanoramaIcon from '@mui/icons-material/Panorama';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { FaTimeline } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { FaPerson } from "react-icons/fa6";


const SidebarEdit = () => {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleDrawerToggle = () => {
      setOpen(false);
    };
    const handleDrawerToggle1 = () => {
    setOpen(true);
    };
    

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const sidebarContent = (
      <Box sx={{
          width: '340px',
          mt:'64px'
    }}>
      <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
        <Tab label="Elements" />
        <Tab label="Design" />
      </Tabs>
      {tabValue === 0 && (
        <Box p={2}>
                  {/* Add your elements with icons here */}
        <Box display="flex" alignItems="center" mb={1}>
          <TbTextSize fontSize="medium" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Text
          </Typography>
        </Box>
          <Box display="flex" alignItems="center" mb={1}>
          <FormatIndentIncreaseIcon fontSize="small" /> {/* Icon */}
          <Typography>Text Block</Typography>

        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <PanoramaIcon fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Photo
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <VideoCallIcon fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Video
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <FaTimeline fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Phot Timeline
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <FaBookOpen fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Story
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <LuGalleryHorizontalEnd fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Photo Gallery
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <FaPerson fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Person
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <AccessTimeIcon fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            QnA
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <AccessTimeIcon fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Transportation
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <AccessTimeIcon fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Place To Stay
          </Typography>
        </Box> 
        <Box display="flex" alignItems="center" mb={1}>
          <AccessTimeIcon fontSize="small" /> {/* Icon */}
          <Typography variant="body1" ml={1}>
            Activity
          </Typography>
        </Box>          
        </Box>
      )}
      {tabValue === 1 && (
        <Box p={2}>
          {/* Add your design elements here */}
          <Typography>Design Elements</Typography>
        </Box>
      )}
      <Box p={2} mt="auto">
        <Button variant="contained" color="primary" fullWidth>
          Save Changes
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width:'340px', position:'relative' }}>
      <AppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'rgba(37, 47, 74, 0.18)', width: '100%',height:'64px'}}
      >
        <Toolbar >
                  <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap:6
                }}>
                      <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle1}
                        sx={{
                            backgroundColor: '#fff',
                            
                            }}
                        >
                        <MenuIcon sx={{color:'black'}} />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, color:'#000' }}>
                        Edit Mode
                    </Typography>
                    {
                                open && <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                            >
                        <CloseIcon sx={{color:'black'}} />
                    </IconButton>
                        }
                </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {sidebarContent}
      </Drawer>
    </Box>
  );
};

export default SidebarEdit;
