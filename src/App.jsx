// src/App.jsx
import { useState } from 'react';
import { curriculum } from './data/curriculumData';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentDayData = curriculum[selectedDayIndex];

  return (
    <>
      {/* Pass the toggle function to the Header */}
      <Header onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      <div className="layout">
        {/* Pass the state to the Sidebar */}
        <Sidebar 
          curriculum={curriculum} 
          selectedIndex={selectedDayIndex} 
          onSelectDay={(index) => {
            setSelectedDayIndex(index);
            setIsMobileMenuOpen(false); // Auto-close menu when a day is clicked
          }} 
          isOpen={isMobileMenuOpen}
        />
        
        {/* Overlay that dims the background when mobile menu is open */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        <MainContent dayData={currentDayData} />
      </div>
    </>
  );
}

export default App;