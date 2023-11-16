import React from 'react';
import Carousel from './Carousel';
import Countdown from './countdown';
import { Fade } from 'react-awesome-reveal';

import SGLogo from '../../resources/images/SGLogoWhite-circle.png';

const Featured: React.FC = () => {
    return(
        <div className="featured_container">
            <Carousel />
            <Fade duration={2500}>
                <div>
                    <img src={SGLogo} alt="Skylands Grappling logo" className='sglogo'/>
                </div>
            </Fade>

            {/* ***Temp Announcement*** */}
            {/* <div className='announcement'>
            We're currently not open... yet. But it won't be long until we are! Feel free to email us now and register for your first class, or private lessons!
            </div> */}

            <Fade delay={1000} duration={2500}>
            <div className='jits_img'>
                <div className='wrapper'>
                    Welcome to the Mat
                </div>
            </div>
            </Fade>

            {/* <Countdown /> */}
        </div>
    )
}

export default Featured;