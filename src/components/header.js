import React from 'react';
import './header.css';
import fotoHeader from '../img/foto_header.jpg';

function Hero() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${fotoHeader})` }}
    >
      <div className="hero-mask">
        <div className="hero-content">
          <h1>CORSI MAXIENDURO</h1>
          <button className="hero-btn">PER SAPERNE DI PIU</button>
        </div>
        
        {/* <div className="scroll-down" onClick={scrollDown}>
          <span></span>
         
         
        </div> */}
      </div>
    </div>
  );
}

export default Hero;