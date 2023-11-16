import React from 'react';
import { scroller } from 'react-scroll';

import { Drawer, List, ListItem } from '@mui/material';
import { Slide } from 'react-awesome-reveal';


interface SideDrawerProps {
  open: boolean;
  onClose: (value: boolean) => void; 
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "schedule", value: "Schedule" },
    { where: "about", value: "About" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" }
  ];

  const scrollToElement = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  }

  const renderItem = (item: {where: string, value: string}, index: number) => {

    return (
    <ListItem 
      button 
      onClick={() => scrollToElement(item.where)} 
      key={item.where}
      sx={{
        justifyContent: 'center',
        padding: '0',   
      }}
      
    >
      <Slide>
      <div className='drawerListItem'
        style={{
        borderBottom: index === links.length - 1 ? 'none' : '2px groove #4d4d4d',
      }}
      >
        {item.value}
      </div>
      </Slide>
    </ListItem>
    );
  };

  return (
    <Drawer
      anchor='top'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List 
        component='nav'
        sx={{
        backgroundColor: '#2c2c2c',
        padding: '0',
      }}
      >
        { links.map((item, index)=> renderItem(item, index)) },
      </List>
    </Drawer>
  );
};

export default SideDrawer;
