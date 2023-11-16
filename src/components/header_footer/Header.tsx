import React, { useState, useEffect } from 'react';

import {AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SideDrawer from './SideDrawer';

import SGLogo from '../../resources/images/SGLogoWhite-circle.png';

const Header: React.FC = () => {
    // Makes Drawer open and close dynamically
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDrawer = (value: boolean) => {
        setDrawerOpen(value)
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }        
    };

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll)
    },[]);

    return (

//////// Navbar ////////
        <AppBar 
            position='fixed'
            style={{
                backgroundColor:headerShow ? '#2f2f2f': 'transparent',
                boxShadow: 'none',
                padding:'10px 0px'
            }}
        >
            <Toolbar>
                <div className='header_logo'>
                    <div className='font_righteous header_logo_skylands'>
                        Skylands<br></br>Grappling
                    </div>
                    <div className='header_logo_title'>
                        Brazilian Jiu-Jitsu
                    </div>
                    <div className='phone_number'>
                        <a href="tel:+9082941347">908-294-1347</a>
                    </div>
                </div>
                {/* <div>
                    <img src={SGLogo} alt="Skylands Grappling logo" className='sglogo'/>
                </div> */}

                {/* Icon Button requires these attributes */}
                <IconButton 
                    aria-label='Menu' 
                    color='inherit'
                    onClick={()=> toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                <SideDrawer 
                    open={drawerOpen}
                    onClose={(value)=>toggleDrawer(value)}
                />

            </Toolbar>
        </AppBar>
    );
};


export default Header;
