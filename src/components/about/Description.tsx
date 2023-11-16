import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Description: React.FC = () => {
    return(
        <Fade>
            <div className='center_wrapper'>
                <h2>BJJ in Hope</h2>
                <div className='about_description'>
                    Introducing Brazilian Jiu-Jitsu at the Hope Township Community Center. Learn some of the best and most practical ground self defense in modern times. Enjoy the training, get in shape, and learn something new by participating in one of the fastest growing sports in the world.
                </div>
            </div>
        </Fade>
    );
}

export default Description;