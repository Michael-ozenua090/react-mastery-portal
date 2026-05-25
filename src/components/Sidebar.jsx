import { WEEK_COLORS } from '../data/curriculumData';

export default function Sidebar({ curriculum, selectedIndex, onSelectDay, isOpen, maxUnlocked }) {
    const weeks = [
    { week: 1, days: [0, 1, 2] } // Only index 0, 1, and 2 exist (Day 1, 2, 3)
    ];
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {weeks.map(({ week, days }) => {
        const wc = WEEK_COLORS[week];
        const validDays = days.filter(di => curriculum[di]);
        if (validDays.length === 0) return null;

        return (
          <div key={`week-${week}`}>
            <div className="week-label">{wc.label}</div>
            {validDays.map((di) => {
              const day = curriculum[di];
              const isActive = di === selectedIndex;
              const isLocked = di > maxUnlocked; // Logic to check if locked

              return (
                <button 
                  key={di}
                  disabled={isLocked} // Prevents clicking
                  className={`day-btn ${isActive ? 'active' : ''}`} 
                  style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                  onClick={() => onSelectDay(di)}
                >
                  <div className="day-dot" style={{ background: `${wc.color}22`, color: wc.color }}>
                    {isLocked ? '🔒' : `D${day.dayNumber}`}
                  </div>
                  <div className="day-btn-text">
                    <div className="day-btn-num">Day {day.dayNumber}</div>
                    <div className="day-btn-title">{day.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
}