/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Box, Tab, Tabs } from "@mui/material";
import Element from './element/Element';
import Design from './designs/Design';

const EditTabs = () => {
  const [activeTab, setActiveTab] = useState('elements');

  const handleTabChange = (_: any, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box mt={1} sx={{ scrollbarWidth: 'thin', scrollbarColor: '#bdbdbd transparent' }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        sx={{
          borderBottom: '1px solid #ececec',
          borderTop: '1px solid #ececec',
        }}
      >
        <Tab
          label="Elements"
          value="elements"
          sx={{
            textTransform: 'capitalize',
            color: '#000',
            borderRight: '1px solid #ECECEC',
            backgroundColor: activeTab === 'elements' ? '#ECECEC' : 'transparent',
          }}
        />
        <Tab
          label="Design"
          value="design"
          sx={{
            textTransform: 'capitalize',
            color: '#000',
            backgroundColor: activeTab === 'design' ? '#ECECEC' : 'transparent',
          }}
        />
      </Tabs>

      {activeTab === 'elements' && <Element />}
      {activeTab === 'design' && <Design />}
    </Box>
  );
};

export default EditTabs;
