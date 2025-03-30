

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays,Info} from 'lucide-react';


import '../components/Calendar.css';

export default function CalendarEvent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const itemsPerPage = 5;
  
  // Date specifiche e alternanza corsi base/avanzato
  const courses = [
    {
      date: "17 Maggio '24",
      time: '09:00 - 18:00',
      type: 'Corso Base',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati.'
    },
    {
      date: "18 Maggio '24",
      time: '09:00 - 18:00',
      type: 'Corso Avanzato',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica.'
      
    },
    {
      date: "24 Maggio '24",
      time: '09:00 - 18:00',
      type: 'Corso Base',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati.'
    },
    {
      date: "25 Maggio '24",
      time: '09:00 - 18:00',
      type: 'Corso Avanzato',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica.'
    },
    {
      date: "14 Giugno '24",
      time: '09:00 - 18:00',
      type: 'Corso Base',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati.',
      
    },
    // Aggiungi altre date se necessario per raggiungere 10 corsi totali
    {
      date: "15 Giugno '24",
      time: '09:00 - 18:00',
      type: 'Corso Avanzato',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica.'
    },
    {
      date: "12 Luglio '24",
      time: '09:00 - 18:00',
      type: 'Corso Base',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati.'
    },
    {
      date: "13 Luglio '24",
      time: '09:00 - 18:00',
      type: 'Corso Avanzato',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica.'
    },
    {
      date: "19 Luglio '24",
      time: '09:00 - 18:00',
      type: 'Corso Base',
      instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi vuole partire da zero nella guida in fuoristrada con esercizi tecnici mirati.'
    },
    {
        date: "20 Luglio '24",
        time: '09:00 - 18:00',
        type: 'Corso Avanzato',
        instructor: 'Giuseppe Gallino',
      address: 'Masserano (BI)',
      Person:'Max 6 Persone',
      info: 'per chi ha già una minima esperienza di guida in fuoristrada e voglia perfezionare la tecnica.'
      }
  ];

  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  // Ottieni i corsi per la pagina corrente
  const getCurrentPageCourses = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return courses.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const toggleTooltip = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  const toggleInfo = () => {
    setShowInfo(prev => !prev);
  };

  
//provvisorio link a messagger (inserimento con Api in corso..)
  const handleEventAction = (index) => {
     window.open("https://www.messenger.com/t/100002404468546", "_blank");
   
    
  };


  const openMessenger = () => {
   
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center bg-gray-100 p-3 border-b">
        <CalendarDays className="mr-2 text-blue-600" />
       
        <h2 className="text-lg font-semibold">Calendario Corsi</h2>
        <button 
          onClick={toggleInfo}
          className="info-botton2"
          aria-label="Informazioni"
        >
          <Info size={20} />
        </button>
      </div>
      
      {showInfo && (
        <div className="container">
          <h3 className="title">Importante</h3>
          <p className="text">
          è richiesta la tessera AICS MOTOALLENA FUORISTADA che può essere richiesta anche al momento dell'iscrizione
          </p>
        </div>
      )}
      
      <div className="max-h-[400px] overflow-y-auto">
        <div className="relative border-l-2 border-blue-300 ml-4 py-2">
          {getCurrentPageCourses().map((course, index) => (
            <div 
              key={index} 
              className="mb-2 pl-4 relative border-b pb-2 last:border-b-0"
            >
              <div className="absolute -left-[10px] top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="text-sm">
                <span className="font-medium text-gray-700 mr-2">{course.date}</span>
                <span className="text-xs text-gray-500">{course.time}</span>
              </div>
              <div className="text-xs">
                <div className={`font-semibold ${course.type === 'Corso Base' ? 'text-blue-700' : 'text-blue-700'}`}>
                  {course.type}
                  <button
                    onClick={() => toggleTooltip(index)}
                    className="info-button"
                    aria-label="Mostra informazioni"
                  >
                    <Info size={14} />
                  </button>
                </div>
                <div className="text-gray-600">
                  Istruttore: {course.instructor}
                </div>
                <div className="text-gray-600">
                  Luogo: {course.address}
                </div>
                <div className="text-gray-600">
                  Persone: {course.Person}
                </div>

                  
                  {activeTooltip === index && (
                    <div className="tooltip">
                      <div className="tooltip-text">{course.info}</div>
                      <div className="tooltip-arrow"></div>
                    </div>
                  )}


<button 
                  onClick={() => handleEventAction(index)}
                  className="action-button"
                >
                  Dettagli
                
                </button>
              </div>
             
               
            
                
            </div>
            
          ))}
        </div>
      </div>

      {/* Navigazione paginazione */}
      <div className="flex justify-between items-center p-3 bg-gray-100 border-t">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeft />
        </button>
        
        <span className="text-sm text-gray-600">
          Pagina {currentPage} di {totalPages}
        </span>
        
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="p-2 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}