import { WEEK_COLORS } from '../data/curriculumData';

export default function Sidebar({ curriculum, selectedIndex, onSelectDay, isOpen, maxUnlocked }) {
  // Dynamically group days by week — no manual updates needed when new days are added
  const weekMap = {};
  curriculum.forEach((day, index) => {
    if (!weekMap[day.week]) weekMap[day.week] = [];
    weekMap[day.week].push(index);
  });
  const weeks = Object.keys(weekMap).map(w => ({ week: Number(w), days: weekMap[w] }));
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