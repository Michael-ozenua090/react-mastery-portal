import { useState } from 'react';

export default function CheckpointExam({ questions, onPass, title, week }) {
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
