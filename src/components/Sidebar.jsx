import { WEEK_COLORS } from '../data/curriculumData';

// Add the isOpen prop here!
export default function Sidebar({ curriculum, selectedIndex, onSelectDay, isOpen }) {
  const weeks = [
    { week: 1, days: [0, 1, 2] },
    { week: 2, days: [3, 4, 5] },
    { week: 3, days: [6, 7, 8] },
    { week: 4, days: [9, 10, 11] }
  ];

  return (
    // Add dynamic class for mobile sliding
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
              return (
                <button 
                  key={di}
                  className={`day-btn ${isActive ? 'active' : ''}`} 
                  onClick={() => onSelectDay(di)}
                >
                  <div className="day-dot" style={{ background: `${wc.color}22`, color: wc.color }}>
                    D{day.dayNumber}
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