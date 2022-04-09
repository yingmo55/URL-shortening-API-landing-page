// create component named Hero
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import Button from '../Button/Button';
import workingIllust from '../../images/illustration-working.svg';
import ShortenUrl from '../ShortenUrl/ShortenUrl';

function Hero() {

  const shortenUrlStyle = {
    position: 'absolute',
    width: 'fit-content',
    bottom: '-50px',
    margin: '0 auto',
    textAlign: 'center'
  }

  return (
      <header className="hero" >
        <Navbar />
        <div></div>
        <img src={workingIllust} alt="flat color Illustration of a working person" className="hero-illustration" />
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <Button text='Get Started' />
        <ShortenUrl style={shortenUrlStyle} />
      </header>
  );
}

export default Hero;

