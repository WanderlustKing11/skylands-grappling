import React from 'react';
import MyButton from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal';

const Pricing: React.FC = () => {
    const priceState = {
        init: ["First 5","$60","35% Off"],
        param: ["sign ups","for 4 classes / Month","for first responders"],
        desc: ["get one month free!", "Accepting cash only now. Paypal/Square coming soon!", "We want to train those who need it the most"],
        linkTo: ["http://sales.a", "http://sales.b", "http://sales.c"],
        delay: [400,0,400]
    }

    const showBoxes = () => (
        priceState.init.map((box,index)=>(
            <Zoom key={index} className='pricing_item' delay={priceState.delay[index]}>
                <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                        <span>{priceState.init[index]}</span>
                        <span>{priceState.param[index]}</span>
                    </div>
                    <div className='pricing_description'>
                        {priceState.desc[index]}
                    </div>
                    {/* This div creates buttons that link to individually provided index links */}
                    {/* <div className='pricing_buttons'>
                        <MyButton 
                            text="Click here"
                            style={{
                                color:'#fff'
                            }}
                            link={priceState.linkTo[index]}
                        />
                    </div> */}
                </div>
            </Zoom>
        ))
    )

    return (
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2>Pricing</h2>

                <div className='pricing_wrapper'>
                    { showBoxes() }
                </div>

                <div className='location_title'>
                    <h3>Hope Community Center</h3>
                    <p>Click below for directions</p>
                </div>
            </div>

        </div>
    )
}

export default Pricing;