import React, { useState } from 'react';
import './header.css';
import fotoHeader from '../img/foto_header.jpg';
import logoSito from '../img/logo_sito.png';


function Hero({ scrollToComponent }) {
  const [showNav, setShowNav] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/Calendar_Event' },
    { name: 'Chi Sono', path: '/corsi' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Contatti', path: '/contatti' },
    { name: 'Eventi', path: '/eventi' }
  ];

 
  


  return (
    <div className="hero" style={{ backgroundImage: `url(${fotoHeader})` }}>
      <nav className="navbar">
      <img src={logoSito} style={{ width: '150px', height: 'auto' }} />

        <button
          className="navbar-toggler"
          onClick={() => setShowNav(!showNav)}
          aria-label={showNav ? 'Chiudi menu' : 'Apri menu'}
        >
          {showNav ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`menu-dropdown ${showNav ? 'open' : ''}`}>
        <ul className="navbar-nav"
       >
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a href={item.path} className="navbar-link" onClick={() => setShowNav(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-mask">
        <div className="hero-content">
        
           <h1>CORSI MAXIENDURO</h1> 
          <button className="hero-btn" onClick={scrollToComponent}>
            PER SAPERNE DI PIÚ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
