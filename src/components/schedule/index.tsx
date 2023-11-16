import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import icon_calendar from "../../resources/images/icons/calendar.png";

const Schedule: React.FC = () => {
  return (
    <div className='bck_black'>
        <div className='sch_an'>We're starting with 2 classes available per week:</div>
        <div className='sch_wrapper'>
          <Zoom className='sch_item' triggerOnce>
            <div>
              <div className='sch_outer'>
                <div className='sch_inner'>
                    <div className='sch_icon_square bck_yellow'></div>
                    <div 
                      className='sch_icon'
                      style={{
                        background:`url(${icon_calendar})`
                      }}
                    ></div>
                    <div className='sch_title'>
                    Tuesdays at Noon
                    </div>
                    <div className='sch_desc'>
                      12:00 - 1:30 pm
                    </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className='sch_item' triggerOnce>
            <div>
              <div className='sch_outer'>
                <div className='sch_inner'>
                    <div className='sch_icon_square bck_orange'></div>
                    <div 
                      className='sch_icon'
                      style={{
                        background:`url(${icon_calendar})`
                      }}
                    ></div>
                    <div className='sch_title'>
                      Wednesday Nights
                    </div>
                    <div className='sch_desc'>
                      8:30 - 10:00 pm
                    </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        <div className='sch_an'>More classes coming soon!</div>
    </div>
  );
};

export default Schedule;
