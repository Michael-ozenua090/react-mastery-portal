// src/App.jsx
import { useState } from 'react';
import { curriculum } from './data/curriculumData';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // NEW: State to track how far they are allowed to go.
  // Index 2 represents Day 3. So Days 1, 2, and 3 are open by default.
  const [maxUnlockedDay, setMaxUnlockedDay] = useState(2); 

  const currentDayData = curriculum[selectedDayIndex];

  // Function to unlock the next week
  const unlockNextWeek = () => {
    setMaxUnlockedDay(11); // Unlocks the rest of the course! (Index 11 is Day 12)
    alert("🎉 Congratulations! Week 2 is now unlocked! 🎉");
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
          maxUnlocked={maxUnlockedDay} // Pass the lock state to the sidebar
        />
        
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        <MainContent 
          dayData={currentDayData} 
          onPassCheckpoint={unlockNextWeek} // Pass the unlock function down
        />
      </div>
    </>
  );
}

export default App;