import React, { useRef,useEffect } from 'react';
import Header from './components/header';
import AboutUs from './components/AboutUs';
import CalendarEvent from './components/Calendar_Event';
import AboutMe from './components/AboutMe';
import Footer from './components/footer';

function App() {
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
  // Create a scroll function that can handle any component
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
      <Header scrollToComponent={scrollToComponent}
     
      scrollToCalendar={() => scrollToSection(calendarRef)} />
      <AboutUs ref={myRef} />
      <CalendarEvent />
      <AboutMe />
      <Footer/>

    </div>
  );
}

export default App;
