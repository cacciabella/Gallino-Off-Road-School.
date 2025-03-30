// src/Navbar.js
import React, { useState } from 'react';
import '../components/navbar.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  
  const menuItems = [
    { name: 'Home', path: '/Calendar_Event' },
    { name: 'Chi Sono', path: '/corsi' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Contatti', path: '/contatti' },
    { name: 'Eventi', path: '/eventi' }
  ];
  
  return (
    <div className="navbar-container">
      {/* Navbar fissa */}
      <nav className="navbar">
        <div className="logo">MaxiEnduro</div>
        <button 
          className="navbar-toggler"
          onClick={() => setShowNav(!showNav)}
          aria-label={showNav ? 'Chiudi menu' : 'Apri menu'}
        >
          {showNav ? '✕' : '☰'}
        </button>
      </nav>
      
      {/* Menu a discesa */}
      <div className={`menu-dropdown ${showNav ? 'open' : ''}`}>
        <ul className="navbar-nav">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a 
                href={item.path} 
                className="navbar-link"
                onClick={() => setShowNav(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;