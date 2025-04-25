// pages/index.js
import React, { useRef, useEffect } from 'react';
import Header from '../src/components/header'; // Assicurati di avere la corretta struttura di cartelle
import AboutUs from '../src/components/AboutUs';
import CalendarEvent from '../src/components/Calendar_Event';
import AboutMe from '../src/components/AboutMe';
import Footer from '../src/components/footer';


export default function Home() {
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    // Scrolla sempre alla sezione con id "home"
    const timeout = setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // leggero delay per assicurarsi che il DOM sia pronto

    return () => clearTimeout(timeout);
  }, []);

  // Funzione per fare scroll a una sezione
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToComponent = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToComponent={scrollToComponent} scrollToCalendar={() => scrollToSection(calendarRef)} />
      <AboutUs ref={myRef} />
      <CalendarEvent />
      <AboutMe />
      <Footer />
    </div>
  );
}
