import React from 'react';

const Location: React.FC = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12060.774113358151!2d-74.97630130593193!3d40.91150237058994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3800a9fc443c1%3A0x50c19fad47499ec3!2s5%20Walnut%20St%2C%20Hardwick%20Township%2C%20NJ%2007825!5e0!3m2!1sen!2sus!4v1675187515839!5m2!1sen!2sus'
        width='100%'
        height='500px'
        style={{ border: 0 }}
        title='gglemaps'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        // onClick={() => {
        //     window.open(
        //         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.1933331113883!2d-74.9724389147474!3d40.91150665155701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3800a9fc443c1%3A0x50c19fad47499ec3!2s5%20Walnut%20St%2C%20Hardwick%20Township%2C%20NJ%2007825!5e0!3m2!1sen!2sus!4v1672669396733!5m2!1sen!2sus'
        //     );
        // }}
      >
        <div>
          Hope Community Center
        </div>
      </iframe>
      <div className='location_tag'>
        <div>
            Location
        </div>
      </div>
    </div>
  );
};

export default Location;
