import React, { useState } from 'react';
import { Box, Container, Button, Drawer, Typography } from '@mui/material';
import viewBg from '../../assets/header_bg.svg';
import Header from './Header';
import { IoIosArrowBack } from "react-icons/io";
import EditButton from '../EditButton';
import TopBar from '../edit/TopBar';
import AdvanceSettingsBtn from '../edit/AdvanceSettingsBtn';
import EditTabs from '../edit/EditTabs';

interface ViewPageProps {
  toggleSidebar: () => void;
}

const ViewPage: React.FC <ViewPageProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{  }}>
     <EditButton toggleSidebar={toggleSidebar} />

      <Box>
        <Box component='img' src={viewBg} sx={{ width: '100%' }} />

          <Drawer
            anchor="left"
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            ModalProps={{
              BackdropProps: {
                invisible: true,
              },
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: 330,
                position: 'fixed',
                zIndex: 999,
              },
              // left: sidebarOpen ? '0' : '-300px',
              // transition: 'left 3s ease-in-out'
            }}
          >
            <Box>
              <TopBar />
              <AdvanceSettingsBtn />
              <EditTabs />
            </Box>
        </Drawer>

      <Container component="main" maxWidth="lg">
        <Header />
      </Container>
      </Box>
    </Box>
  );
};

export default ViewPage;
