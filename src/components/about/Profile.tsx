import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import prof_pic from '../../resources/images/prof2.jpg';

const Profile: React.FC = () => {
    return(
        <Fade>
            <div className='profile_wrapper'>
                <img src={prof_pic} alt='Professor Doug Horville' />
                <Slide 
                direction='up'
                triggerOnce
                >
                    <Fade>
                <div className='profile'>
                <h2>Doug Horville</h2>
                <div className='profile_description'>
                    Doug Horville has been training in martial arts most of his life. He is a 3rd degree black belt under Sifu Dave Ferreira in the Evolutionary Martial Arts system, as well as a Brazilian Jiu-Jitsu black belt under Professor Marcelo Meleiro, and has been practicing grappling/BJJ since 2003.
                </div>
                </div>
                </Fade>
                </Slide>
            </div>
        </Fade>
    );
}

export default Profile;