// create component named Hero
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

import workingIllust from '../../images/illustration-working.svg';

function Hero() {
  return (
    <header className="Hero">
      <Navbar />
      <img src={workingIllust} alt="flat color Illustration of a working person" className="Hero-illustration" />
      <h1>More than just shorter links</h1>
      <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <button>Get Started</button>
    </header>
  );
}

export default Hero;

