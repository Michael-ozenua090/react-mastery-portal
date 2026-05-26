// src/components/MainContent.jsx
import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { WEEK_COLORS } from '../data/curriculumData';

// --- Interactive Auditing Tool ---
function QuizWidget({ questionData, index }) {
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isCorrect = selectedOpt === questionData.correct;

  return (
    <div className="quiz-card">
      <div className="quiz-q">Question {index + 1}: {questionData.question}</div>
      <div className="quiz-options">
        {questionData.options.map((opt, i) => (
          <button 
            key={i} 
            disabled={hasSubmitted}
            className={`quiz-opt ${selectedOpt === i ? 'selected' : ''} ${hasSubmitted && i === questionData.correct ? 'correct' : ''} ${hasSubmitted && selectedOpt === i && !isCorrect ? 'wrong' : ''}`}
            onClick={() => setSelectedOpt(i)}
          >
            {opt}
          </button>
        ))}
      </div>
      {selectedOpt !== null && !hasSubmitted && (
        <button className="quiz-submit" onClick={() => setHasSubmitted(true)}>Check Answer</button>
      )}
      {hasSubmitted && (
        <div className={`quiz-feedback ${isCorrect ? 'text-green' : 'text-red'}`}>
          {isCorrect ? '✅ Correct! Great job.' : '❌ Incorrect. Review the lesson and try again!'}
        </div>
      )}
    </div>
  );
}

// --- WEEK 1 FINAL EXAM COMPONENT ---
function CheckpointExam({ questions, onPass }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIndex, optIndex) => {
    if (!submitted) setAnswers({ ...answers, [qIndex]: optIndex });
  };

  const handleReset = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) totalScore += 1;
    });
    setScore(totalScore);
    setSubmitted(true);

    // 80% to pass (8 out of 10)
    if (totalScore >= (questions.length * 0.8)) {
      onPass(); 
    }
  };

  return (
    <div style={{ background: 'rgba(163, 113, 247, 0.05)', padding: '2rem', borderRadius: '12px', border: '2px solid #a371f7' }}>
      <h2 style={{ color: '#a371f7', marginTop: 0 }}>🏆 Week 1 Certification Exam</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>You must score at least 80% to unlock Week 2.</p>

      {questions.map((q, i) => {
        const isCorrect = answers[i] === q.correct;
        return (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <div className="quiz-q">{i + 1}. {q.question}</div>
            <div className="quiz-options">
              {q.options.map((opt, optIdx) => (
                <button 
                  key={optIdx} disabled={submitted}
                  className={`quiz-opt ${answers[i] === optIdx ? 'selected' : ''} ${submitted && optIdx === q.correct ? 'correct' : ''} ${submitted && answers[i] === optIdx && !isCorrect ? 'wrong' : ''}`}
                  onClick={() => handleSelect(i, optIdx)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {!submitted ? (
        <button className="quiz-submit" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} onClick={handleSubmit}>
          Submit Exam
        </button>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: 'var(--card)', borderRadius: '8px' }}>
          <h3 style={{ margin: 0, color: score >= (questions.length * 0.8) ? '#7ee787' : '#ff7b72' }}>
            You scored {score} / {questions.length}
          </h3>
          {score >= (questions.length * 0.8) ? (
            <p>Amazing job! You have mastered Week 1. Week 2 is now unlocked! 🎉</p>
          ) : (
            <>
              <p style={{ color: 'var(--muted)', marginBottom: '1.2rem' }}>
                You need at least {Math.ceil(questions.length * 0.8)} correct to pass. Review the lessons and give it another shot!
              </p>
              <button
                onClick={handleReset}
                style={{
                  background: 'linear-gradient(135deg, #a371f7, #7c3aed)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.8rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                🔄 Try Again
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function MainContent({ dayData, onPassCheckpoint }) {

  // Add this safety check:
  if (!dayData) {
    return (
      <main className="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>🚧 Day coming soon! Stay tuned.</h2>
      </main>
    );
  }

  const wc = WEEK_COLORS[dayData.week];

  const renderTree = (treeString) => {
    return treeString.split('\n').map((line, i) => {
      let color = '#e6edf3';
      if (line.includes('🚫')) color = '#ff7b72';
      if (line.includes('✅')) color = '#7ee787';
      if (line.includes('⚠️')) color = '#f7b731';
      return <div key={i} style={{ color }}>{line}</div>;
    });
  };

  return (
    <main className="main">
      <div className="day-header">
        <div className="day-badge" style={{ background: `${wc.color}18`, color: wc.color }}>
          Week {dayData.week} · Day {dayData.dayNumber}
        </div>
        <h1 className="day-title">{dayData.title}</h1>
        <p className="day-subtitle">{dayData.subtitle}</p>
        
        <div className="topics-row">
          {dayData.topics.map(t => <span key={t} className="topic-tag">{t}</span>)}
        </div>

        {/* --- DYNAMIC PROGRESS BAR --- */}
        <div className="progress-wrap" style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.4rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>Course Progress</span>
            <span>{dayData.dayNumber} / 12 classes</span>
          </div>
          <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${(dayData.dayNumber / 12) * 100}%`, 
              background: wc.color, 
              height: '100%', 
              transition: 'width 0.4s ease' 
            }}></div>
          </div>
        </div>
        {/* ---------------------------- */}
      </div>

      {dayData.sections.map((sec, idx) => (
        <div key={idx} className="section">
          {sec.title && <div className="section-title">{sec.title}</div>}
          {sec.timeEstimate && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(247,183,49,0.12)', color: '#f7b731', border: '1px solid rgba(247,183,49,0.3)', borderRadius: '20px', padding: '0.2rem 0.75rem', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              ⏱ {sec.timeEstimate}
            </div>
          )}
          {sec.body && <p className="section-body">{sec.body}</p>}
          
          {sec.type === 'filetree' && <div className="file-tree">{renderTree(sec.tree)}</div>}

          {sec.type === 'rules' && (
            <div className="rule-grid">
              {sec.rules.map((r, i) => (
                <div key={i} className="rule-card">
                  <div className="rule-card-num">{r.num}</div>
                  <div className="rule-card-title">{r.title}</div>
                  <div className="rule-card-body">{r.body}</div>
                </div>
              ))}
            </div>
          )}
          
          {sec.code && <CodeBlock code={sec.code} lang={sec.lang} />}
          
          {sec.boxType && (
            <div className={`info-box ${sec.boxType}`}>
              <div className="info-box-title">{sec.boxTitle}</div>
              <div dangerouslySetInnerHTML={{ __html: sec.boxBody }} />
            </div>
          )}

            {/* Render standard mid-lesson quizzes */}
          {sec.type === 'quiz' && (
            <div className="quiz-container">
              {sec.questions.map((q, i) => (
                <QuizWidget key={i} questionData={q} index={i} />
              ))}
            </div>
          )}

          {/* Render the BOSS FIGHT EXAM */}
          {sec.type === 'exam' && (
            <CheckpointExam questions={sec.questions} onPass={onPassCheckpoint} />
          )}

          {/* Render PRACTICE AT HOME homework card */}
          {sec.type === 'homework' && (
            <div style={{
              background: 'rgba(247, 183, 49, 0.06)',
              border: '2px solid rgba(247, 183, 49, 0.4)',
              borderRadius: '12px',
              padding: '1.75rem',
              marginTop: '0.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.3rem' }}>🏠</span>
                <span style={{ color: '#f7b731', fontWeight: '700', fontSize: '1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Practice at Home</span>
                {sec.timeEstimate && (
                  <span style={{ marginLeft: 'auto', background: 'rgba(247,183,49,0.15)', color: '#f7b731', border: '1px solid rgba(247,183,49,0.35)', borderRadius: '20px', padding: '0.2rem 0.75rem', fontSize: '0.72rem', fontWeight: '600' }}>⏱ {sec.timeEstimate}</span>
                )}
              </div>
              <div style={{ color: '#f7b731', fontWeight: '600', fontSize: '1.05rem', marginBottom: '0.75rem' }}>{sec.title}</div>
              {sec.body && <p className="section-body" style={{ marginTop: 0 }}>{sec.body}</p>}
              {sec.boxTitle && (
                <div className="info-box rule" style={{ marginTop: '1rem' }}>
                  <div className="info-box-title">{sec.boxTitle}</div>
                  <div dangerouslySetInnerHTML={{ __html: sec.boxBody }} />
                </div>
              )}
            </div>
          )}

        </div>
      ))}
    </main>
  );
}