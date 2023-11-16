import React from "react";
import { Fade } from "react-awesome-reveal";

import SGLogo from '../../resources/images/SGLogoWhite-circle.png';

const Footer: React.FC = () => {
  return (
    <footer className='back_red'>
      <Fade triggerOnce delay={200}>
        <div className='font_righteous footer'>
          <img src={SGLogo} alt="Skylands Grappling logo" className='footer_logo'/>
        </div>
        <div className='footer_copyright'>Iron Mountain MMA LLC 2022 All Rights Reserved</div>
      </Fade>
    </footer>
  );
};

export default Footer;
