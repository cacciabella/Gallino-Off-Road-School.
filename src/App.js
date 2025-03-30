import React, { useRef } from 'react';
import Header from './components/header';
import AboutUs from './components/AboutUs';
import CalendarEvent from './components/Calendar_Event';

function App() {
  const myRef = useRef(null);

  const scrollToComponent = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToComponent={scrollToComponent} />
      <AboutUs ref={myRef} />
      <CalendarEvent />
    </div>
  );
}

export default App;
