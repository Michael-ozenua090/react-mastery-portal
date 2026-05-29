// src/App.jsx
import { useState, useEffect } from 'react';
import { curriculum } from './data/curriculumData';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  // 1. Initialize state from localStorage (or default to 0 / 2 if new user)
  const [selectedDayIndex, setSelectedDayIndex] = useState(() => {
    const savedDay = localStorage.getItem('speta_currentDay');
    return savedDay !== null ? parseInt(savedDay, 10) : 0;
  });
  
  const [maxUnlockedDay, setMaxUnlockedDay] = useState(() => {
    const savedLock = localStorage.getItem('speta_maxUnlocked');
    return savedLock !== null ? parseInt(savedLock, 10) : 2;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Whenever state changes, save it automatically to localStorage!
  useEffect(() => {
    localStorage.setItem('speta_currentDay', selectedDayIndex);
  }, [selectedDayIndex]);

  useEffect(() => {
    localStorage.setItem('speta_maxUnlocked', maxUnlockedDay);
  }, [maxUnlockedDay]);

  const currentDayData = curriculum[selectedDayIndex];

  // Function to unlock the next week based on which exam was passed
  const unlockNextWeek = () => {
    if (selectedDayIndex === 2) {
      // If passed Day 3 (index 2), unlock Week 2 (up to Day 6, index 5)
      setMaxUnlockedDay(5);
      alert("🎉 Congratulations! Week 2 is now unlocked! 🎉");
    } else if (selectedDayIndex === 5) {
      // If passed Day 6 (index 5), unlock Week 3 (up to Day 9, index 8)
      setMaxUnlockedDay(8);
      alert("🎉 Congratulations! Week 3 is now unlocked! 🎉");
    } else {
      // Unlocks the rest of the course
      setMaxUnlockedDay(11);
      alert("🎉 Congratulations! New content unlocked! 🎉");
    }
  };

  return (
    <>
      <Header onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <div className="layout">
        <Sidebar 
          curriculum={curriculum} 
          selectedIndex={selectedDayIndex} 
          onSelectDay={(index) => {
            setSelectedDayIndex(index);
            setIsMobileMenuOpen(false);
          }} 
          isOpen={isMobileMenuOpen}
          maxUnlocked={maxUnlockedDay} 
        />
        
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        <MainContent 
          dayData={currentDayData} 
          onPassCheckpoint={unlockNextWeek} 
        />
      </div>
    </>
  );
}

export default App;