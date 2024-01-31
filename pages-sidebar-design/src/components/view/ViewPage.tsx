import { useState } from 'react';
import { Box, Container, Drawer } from '@mui/material';
import viewBg from '../../assets/header_bg.svg';
import Header from './Header';
import EditButton from '../EditButton';
import TopBar from '../edit/TopBar';
import AdvanceSettingsBtn from '../edit/AdvanceSettingsBtn';
import EditTabs from '../edit/EditTabs';
import Settings from '../edit/Settings/Settings';
import Footer from '../edit/element/Footer';


const ViewPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [footerShow, setFooterShow] = useState(false);
  const [accountSetting, setAccountSetting] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{}}>
      <EditButton toggleClick={() => toggleSidebar()} />

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
          <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <TopBar onCrossClick={() => setSidebarOpen(false)} />
              <AdvanceSettingsBtn onClick={() => setAccountSetting(true)} />
              {accountSetting ? <Settings setSetting={setAccountSetting} /> : <EditTabs setFooterTrue={() => setFooterShow(true)} setFooterFalse={() => setFooterShow(false)} />}
            </Box>
            {footerShow && <Box>
              <Footer />
            </Box>}
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
