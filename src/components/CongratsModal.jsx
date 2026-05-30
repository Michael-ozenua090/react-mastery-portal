// src/components/CongratsModal.jsx
import { useEffect, useRef } from 'react';

// Generates confetti particle data once
const CONFETTI_COUNT = 60;
const COLORS = ['#00d4aa', '#f7b731', '#a371f7', '#79c0ff', '#ff7b72', '#7ee787', '#ffffff'];

function generateParticles() {
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    id: i,
    color: COLORS[i % COLORS.length],
    left: Math.random() * 100,        // % across modal width
    delay: Math.random() * 1.2,       // stagger fall start
    duration: 1.8 + Math.random() * 1.4, // vary fall speed
    size: 6 + Math.random() * 6,      // 6–12px
    rotate: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }));
}

const particles = generateParticles();

export default function CongratsModal({ weekUnlocked, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Trap focus inside modal
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  const messages = {
    2: { week: 'Week 2', subtitle: 'Events, Lists & Forms await you!', emoji: '🚀' },
    3: { week: 'Week 3', subtitle: 'useEffect & the real internet await you!', emoji: '🌐' },
    default: { week: 'New Content', subtitle: 'Keep pushing — you\'re unstoppable!', emoji: '⚡' },
  };

  const msg = messages[weekUnlocked] ?? messages.default;

  return (
    <div className="congrats-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="congrats-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        {/* Confetti particles */}
        <div className="confetti-stage" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className={`confetti-piece ${p.shape}`}
              style={{
                left: `${p.left}%`,
                backgroundColor: p.color,
                width: p.shape === 'rect' ? `${p.size * 0.6}px` : `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: p.shape === 'circle' ? '50%' : '2px',
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                transform: `rotate(${p.rotate}deg)`,
              }}
            />
          ))}
        </div>

        {/* Modal body */}
        <div className="congrats-body">
          <div className="congrats-emoji">{msg.emoji}</div>
          <h2 className="congrats-heading">Exam Passed!</h2>
          <p className="congrats-week">{msg.week} Unlocked 🔓</p>
          <p className="congrats-sub">{msg.subtitle}</p>

          <div className="congrats-divider" />

          <p className="congrats-hint">Head to the sidebar to start your next lesson.</p>

          <button className="congrats-btn" onClick={onClose} autoFocus>
            Let's Go! →
          </button>
        </div>
      </div>
    </div>
  );
}
