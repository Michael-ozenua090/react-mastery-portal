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

export default function MainContent({ dayData }) {
  if (!dayData) return <div className="main">Loading...</div>;
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
      </div>

      {dayData.sections.map((sec, idx) => (
        <div key={idx} className="section">
          <div className="section-title">{sec.title}</div>
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

          {/* Render the Interactive Quizzes! */}
          {sec.type === 'quiz' && (
            <div className="quiz-container">
              {sec.questions.map((q, i) => (
                <QuizWidget key={i} questionData={q} index={i} />
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}