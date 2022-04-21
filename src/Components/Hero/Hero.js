// create component named Hero
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import Button from '../Button/Button';
import workingIllust from '../../images/illustration-working.svg';

function Hero() {

  const btnStyle = {
    borderRadius: 50,
  }

  return (
      <header className="hero" >
        <Navbar />
        <div></div>
        <img src={workingIllust} alt="flat color Illustration of a working person" className="hero-illustration" />
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <Button styles={btnStyle}>Get Started</Button>
      </header>
  );
}

export default Hero;

