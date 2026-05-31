import { useState } from 'react';

export default function QuizWidget({ questionData, index }) {
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
