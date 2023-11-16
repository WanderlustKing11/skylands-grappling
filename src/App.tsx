import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import Schedule from './components/schedule';
import About from './components/about';
import Pricing from './components/pricing';
import Location from './components/location';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Element name='featured'>
        <Featured />
      </Element>

      <Element name='schedule'>
        <Schedule />
      </Element>

      <Element name='about'>
        <About />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;
