export default function Header({ onMenuClick, theme, onToggleTheme }) {
  return (
    <div className="header">
      <button className="menu-btn" onClick={onMenuClick}>☰</button>
      <div className="header-logo">⚛ <span>React Mastery</span></div>
      <div className="course-meta">
        <span><b>12 classes</b> total</span>
        <span><b>3 days</b>/week</span>
      </div>
      <div className="header-tagline">For students who know HTML, CSS & JS</div>
      <button 
        className="theme-toggle" 
        onClick={onToggleTheme}
        aria-label="Toggle theme"
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}