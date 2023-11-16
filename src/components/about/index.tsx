import React from 'react';
import Description from './Description';
import Discount from './Discount';
import Profile from './Profile';

const About: React.FC = () => {
    return(
        <div className='about_wrapper'>
            <Description />
            <Discount />
            <Profile />
        </div>
    );
}

export default About;
