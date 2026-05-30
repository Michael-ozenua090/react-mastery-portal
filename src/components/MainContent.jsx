// src/components/MainContent.jsx
import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { WEEK_COLORS } from '../data/curriculumData';

// --- Markdown renderer for sec.body text ---
// Handles: **bold**, `inline code`, and \n newlines
function renderMarkdown(text) {
  if (!text) return null;
  // Split on **bold** and `code` tokens
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const paragraphs = text.split('\n');
  return paragraphs.map((para, pIdx) => {
    if (!para.trim()) return null;
    const parts = [];
    let lastIdx = 0;
    let m;
    tokenRegex.lastIndex = 0;
    while ((m = tokenRegex.exec(para)) !== null) {
      if (m.index > lastIdx) {
        parts.push(<span key={`t${pIdx}-${lastIdx}`}>{para.slice(lastIdx, m.index)}</span>);
      }
      const token = m[0];
      if (token.startsWith('**')) {
        parts.push(<strong key={`b${pIdx}-${m.index}`}>{token.slice(2, -2)}</strong>);
      } else {
        parts.push(<code key={`c${pIdx}-${m.index}`}>{token.slice(1, -1)}</code>);
      }
      lastIdx = tokenRegex.lastIndex;
    }
    if (lastIdx < para.length) {
      parts.push(<span key={`t${pIdx}-${lastIdx}`}>{para.slice(lastIdx)}</span>);
    }
    return <p key={pIdx} style={{ margin: '0 0 0.6em 0' }}>{parts}</p>;
  });
}

// --- Safe HTML renderer (replaces dangerouslySetInnerHTML) ---
// Handles the limited HTML subset used in box bodies:
// <code>, <strong>, <em>, <br/>, and HTML entities like &lt; &gt;
function decodeEntities(str) {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function SafeHtml({ html }) {
  if (!html) return null;
  const lines = html.split(/<br\s*\/?>/ );
  return (
    <>
      {lines.map((line, lineIdx) => {
        const segments = [];
        const tagRegex = /<(code|strong|em)>([\s\S]*?)<\/\1>|<a\s+href="([^"]+)">([\s\S]*?)<\/a>/g;
        let lastIdx = 0;
        let m;
        while ((m = tagRegex.exec(line)) !== null) {
          if (m.index > lastIdx) {
            segments.push(<span key={`t${lastIdx}`}>{decodeEntities(line.slice(lastIdx, m.index))}</span>);
          }
          if (m[1]) {
            const Tag = m[1];
            segments.push(<Tag key={m.index}>{decodeEntities(m[2])}</Tag>);
          } else if (m[3]) {
            segments.push(
              <a key={m.index} href={m[3]} target="_blank" rel="noopener noreferrer">
                {decodeEntities(m[4])}
              </a>
            );
          }
          lastIdx = tagRegex.lastIndex;
        }
        if (lastIdx < line.length) {
          segments.push(<span key={`t${lastIdx}`}>{decodeEntities(line.slice(lastIdx))}</span>);
        }
        return (
          <span key={lineIdx}>
            {lineIdx > 0 && <br />}
            {segments}
          </span>
        );
      })}
    </>
  );
}

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

// --- DYNAMIC CHECKPOINT EXAM COMPONENT ---
function CheckpointExam({ questions, onPass, title, week }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const handleSelect = (qIndex, optIndex) => {
    if (!submitted) {
      const updated = { ...answers, [qIndex]: optIndex };
      setAnswers(updated);
      // Hide warning as soon as all questions are answered
      if (Object.keys(updated).length === questions.length) {
        setShowWarning(false);
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
    setShowWarning(false);
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) {
      setShowWarning(true);
      return; // Block submission
    }
    setShowWarning(false);
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
      <h2 style={{ color: '#a371f7', marginTop: 0 }}>🏆 {title || `Week ${week} Certification Exam`}</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>You must score at least 80% to unlock Week {week + 1}.</p>

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
        <>
          {showWarning && (
            <div style={{
              background: 'rgba(247, 129, 102, 0.1)',
              border: '1px solid rgba(247, 129, 102, 0.5)',
              borderRadius: '8px',
              padding: '0.85rem 1.2rem',
              marginBottom: '1rem',
              color: '#ffab91',
              fontSize: '0.9rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              ⚠️ Please answer all questions before submitting. You have {questions.length - Object.keys(answers).length} question{questions.length - Object.keys(answers).length !== 1 ? 's' : ''} left.
            </div>
          )}
          <button className="quiz-submit" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} onClick={handleSubmit}>
            Submit Exam
          </button>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: 'var(--card)', borderRadius: '8px' }}>
          <h3 style={{ margin: 0 }} className={score >= (questions.length * 0.8) ? 'text-green' : 'text-red'}>
            You scored {score} / {questions.length}
          </h3>
          {score >= (questions.length * 0.8) ? (
            <p>Amazing job! You have mastered Week {week}. Week {week + 1} is now unlocked! 🎉</p>
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

        {/* --- MILESTONE CARD --- */}
        {dayData.milestone && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            background: `linear-gradient(135deg, ${wc.color}14, ${wc.color}08)`,
            border: `1px solid ${wc.color}40`,
            borderRadius: '12px',
            padding: '1.1rem 1.4rem',
            marginTop: '1.2rem',
          }}>
            <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{dayData.milestone.icon}</span>
            <div>
              <div style={{ color: wc.color, fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{dayData.milestone.title}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{dayData.milestone.text}</div>
            </div>
          </div>
        )}
        {/* ----------------------- */}

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
          {sec.type !== 'homework' && sec.title && <div className="section-title">{sec.title}</div>}
          {sec.type !== 'homework' && sec.timeEstimate && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(247,183,49,0.12)', color: '#f7b731', border: '1px solid rgba(247,183,49,0.3)', borderRadius: '20px', padding: '0.2rem 0.75rem', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              ⏱ {sec.timeEstimate}
            </div>
          )}
          {sec.type !== 'homework' && sec.body && <div className="section-body">{renderMarkdown(sec.body)}</div>}
          
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
              <SafeHtml html={sec.boxBody} />
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
            <CheckpointExam 
              questions={sec.questions} 
              onPass={onPassCheckpoint} 
              title={sec.title} 
              week={dayData.week} 
            />
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
              {sec.body && <div className="section-body" style={{ marginTop: 0 }}>{renderMarkdown(sec.body)}</div>}
              {sec.boxTitle && (
                <div className={`info-box ${sec.boxType || 'rule'}`} style={{ marginTop: '1rem' }}>
                  <div className="info-box-title">{sec.boxTitle}</div>
                  <SafeHtml html={sec.boxBody} />
                </div>
              )}
            </div>
          )}

        </div>
      ))}
    </main>
  );
}