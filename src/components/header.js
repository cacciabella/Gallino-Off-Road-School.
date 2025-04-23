import React, { useState } from 'react';
import './header.css';
import fotoHeader from '../img/foto_header.jpg';
import logoSito from '../img/logo_sito.png';
import { Link } from 'react-scroll';

function Hero({ scrollToComponent }) {
  const [showNav, setShowNav] = useState(false);
  
  const menuItems = [
    { name: 'Home', path: 'AboutUs' },
    { name: 'Chi Sono', path: '/corsi' },
    { name: 'Chi Siamo', path: '/AboutUs' },
    { name: 'Contatti', path: '/contatti' },
    { name: 'Eventi', path: '/Calendar_Event' }
  ];
  
  return (
    <div className="hero" style={{ backgroundImage: `url(${fotoHeader})` }}>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-top">
            <img src={logoSito} style={{ width: '150px', height: 'auto' }} alt="Logo" />
            
            <button
              className="navbar-toggler"
              onClick={() => setShowNav(!showNav)}
              aria-label={showNav ? 'Chiudi menu' : 'Apri menu'}
            >
              {showNav ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        <div className={`menu-dropdown ${showNav ? 'open' : ''}`}>
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <Link to={item.path} className="navbar-link" onClick={() => setShowNav(false)}
                smooth={true}    duration={500}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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