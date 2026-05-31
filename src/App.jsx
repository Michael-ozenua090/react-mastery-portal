// src/App.jsx
import { useState, useEffect } from 'react';
import { curriculum } from './data/curriculumData';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import CongratsModal from './components/CongratsModal';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // 1. Initialize state from localStorage via Custom Hook
  const [selectedDayIndex, setSelectedDayIndex] = useLocalStorage('speta_currentDay', 0);
  const [maxUnlockedDay, setMaxUnlockedDay] = useLocalStorage('speta_maxUnlocked', 2);
  const [theme, setTheme] = useLocalStorage('speta_theme', 'dark');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Controls which week was just unlocked (null = modal hidden)
  const [unlockedWeek, setUnlockedWeek] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentDayData = curriculum[selectedDayIndex];

  // Function to unlock the next week based on which exam was passed
  const unlockNextWeek = () => {
    if (selectedDayIndex === 2) {
      // Passed Day 3 exam → unlock Week 2 (up to Day 6, index 5)
      setMaxUnlockedDay(5);
      setUnlockedWeek(2);
    } else if (selectedDayIndex === 5) {
      // Passed Day 6 exam → unlock Week 3 (up to Day 9, index 8)
      setMaxUnlockedDay(8);
      setUnlockedWeek(3);
    } else {
      // Unlocks the rest of the course
      setMaxUnlockedDay(11);
      setUnlockedWeek('default');
    }
  };

  return (
    <>
      <Header 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        theme={theme}
        onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      />
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
          key={selectedDayIndex}
          dayData={currentDayData} 
          onPassCheckpoint={unlockNextWeek} 
        />
      </div>

      {/* Celebration modal — renders only when an exam is passed */}
      {unlockedWeek !== null && (
        <CongratsModal
          weekUnlocked={unlockedWeek}
          onClose={() => setUnlockedWeek(null)}
        />
      )}
    </>
  );
}

export default App;