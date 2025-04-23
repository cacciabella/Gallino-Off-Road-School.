import React, { useRef } from 'react';
import Header from './components/header';
import AboutUs from './components/AboutUs';
import CalendarEvent from './components/Calendar_Event';

function App() {
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const calendarRef = useRef(null);
  
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
      scrollToHome={() => scrollToSection(homeRef)}
      scrollToAboutUs={() => scrollToSection(aboutUsRef)}
      scrollToCalendar={() => scrollToSection(calendarRef)} />
      <AboutUs ref={myRef} />
      <CalendarEvent />
    </div>
  );
}

export default App;
