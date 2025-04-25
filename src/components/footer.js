import React from "react";
import '../components/footer.css';
import logoSito from '../img/logo_sito.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const footer=React.forwardRef((props, ref) =>{
    return(
       
        
     
            <footer className="site-footer" id="contatti">
              <div className="footer-container">
                <div className="footer-logo">
                  <img src={logoSito} alt="GALIO Logo" className="footer-logo-img" />
                </div>
                
                <div className="footer-content">
                  <div className="footer-section">
                    <h3>GALIO School Enduro Experience</h3>
                    <p>La tua scuola di maxienduro in Italia. Corsi per tutti i livelli e tour guidati nelle location più belle.</p>
                  </div>
                  
                  <div className="footer-section">
                    <h3>Contatti</h3>
                    <ul className="footer-contacts">
                      <li><i className="fa fa-map-marker"></i> Masserano (BI)</li>
                      <li><i className="fa fa-phone"></i> +39 123 456 7890</li>
                      <li><i className="fa fa-envelope"></i> info@gallino-offroad.it</li>
                    </ul>
                  </div>
                  
                  <div className="footer-section">
                    <h3>Seguici</h3>
                    <div className="social-links">

                    <a href="https://instagram.com/gallinogiuseppe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram/>
                      </a>
                      <a href="https://facebook.com/giuseppe.gallino" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                       <FaFacebook/>
                      </a>
                    
                      
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GALLINO School Enduro Experience. Tutti i diritti riservati.</p>
                <div className="footer-bottom-links">
                  <a href="/privacy-policy">Privacy Policy</a>
                  <a href="/cookie-policy">Cookie Policy</a>
                </div>
              </div>
            </footer>



    )
;});

export default footer;