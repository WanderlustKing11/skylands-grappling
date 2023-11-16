import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

import { TimeProp } from './time.model';

const Countdown: React.FC = () => {
  const [time, setTime] = useState<TimeProp>({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  });

  // Renders the Countdown time and unit of measure
  const renderItem = (time: number | string, value: string) => (
    <div className='countdown_item'>
      <div className='countdown_time'>
        {time}
      </div>
      <div className='countdown_tag'>
        {value}
      </div>
    </div>
  );

  // useCallback makes sure that we only render if there is an actual change in state
  const getTimeUntil = useCallback((deadline: string) => {
    // Event time (in the future) - Current time
    const time = Date.parse(deadline) - Date.now();
    if (time < 0) {
      console.log('Date passed');      
    } else {
      const seconds = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor((time/(1000*60*60))%24);
      const days = Math.floor((time/(1000*60*60*24)));
      
      // Time updated
      setTime({
        days,
        hours,
        minutes,
        seconds
      });
    }    
  },[])

  // Renders when the App starts, and updates every second
  useEffect(() => {
    setInterval(() => getTimeUntil('Feb, 1, 2023, 20:30:00'), 1000)
  }, [getTimeUntil]);

  return (
    <Slide direction='left' delay={1000}>
      <div className='countdown_wrapper'>
        <div className='countdown_top'>
            Starting this Wednesday
        </div>
        <div className='countdown_bottom'>          
            {renderItem(time.days, 'Days')}
            {renderItem(time.hours, 'HS')}
            {renderItem(time.minutes, 'Min')}
            {renderItem(time.seconds, 'Sec')}           
        </div>
      </div>
    </Slide>
  )
}

export default Countdown;
