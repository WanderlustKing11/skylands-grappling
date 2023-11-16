import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';

const Discount: React.FC = () => {
    const end = 20;
    const [start, setStart] = useState(0);


    const percentage = () => {
        if(start < end) {
            setStart(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if(start > 0 && start < 20) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1)
            },40)
        }
    },[start]);

    return(
        <div className='center_wrapper'>
            <div className='discount_wrapper'>

            <Fade
                onVisibilityChange={ (inView) => {
                    if(inView){
                        percentage()
                    }
                }}
            >
                <div className='discount_percentage'>
                    <span>{start}%</span>
                    <span>OFF</span>
                </div>
            </Fade>

            <Slide direction='left'>
                <div className='discount_description'>
                    <h3>Residents from Hope get 20% off their membership! Send us an email to let us know you're interested.</h3>
                    {/* <p></p> */}

                    <MyButton 
                        text="Email Us"
                        link="skylandsgrappling@gmail.com"
                        size='small'
                        style={{
                            background: '#ffa800',
                            color: '#fff',                            
                        }}
                        iconTicket={true}
                    />

                </div>

            </Slide>

            </div>
        </div>
    );
}

export default Discount;
