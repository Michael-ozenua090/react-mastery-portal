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