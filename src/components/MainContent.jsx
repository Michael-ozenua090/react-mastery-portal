// src/components/MainContent.jsx
import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { WEEK_COLORS } from '../data/curriculumData';
import Footer from './Footer';
import QuizWidget from './QuizWidget';
import CheckpointExam from './CheckpointExam';

// --- Markdown renderer for sec.body text ---
function renderMarkdown(text) {
  if (!text) return null;
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
        const tagRegex = /<(code|strong|em)>([\s\S]*?)<\/\1>|<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
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

export default function MainContent({ dayData, onPassCheckpoint }) {
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

  const renderSection = (sec, idx) => {
    // Homework specific render
    if (sec.type === 'homework') {
      return (
        <section key={idx} className="content-section" style={{
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
          <h3 style={{ color: '#f7b731', fontWeight: '600', fontSize: '1.05rem', margin: '0 0 0.75rem 0' }}>{sec.title}</h3>
          {sec.body && <div className="section-body" style={{ marginTop: 0 }}>{renderMarkdown(sec.body)}</div>}
          {sec.boxTitle && (
            <div className={`info-box ${sec.boxType || 'rule'}`} style={{ marginTop: '1rem' }}>
              <div className="info-box-title">{sec.boxTitle}</div>
              <SafeHtml html={sec.boxBody} />
            </div>
          )}
        </section>
      );
    }

    // Default renders for other types
    return (
      <section key={idx} className="content-section" style={{ marginBottom: '2rem' }}>
        {sec.title && <h2 className="section-title" style={{ margin: '0 0 0.75rem 0' }}>{sec.title}</h2>}
        {sec.timeEstimate && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(247,183,49,0.12)', color: '#f7b731', border: '1px solid rgba(247,183,49,0.3)', borderRadius: '20px', padding: '0.2rem 0.75rem', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.75rem' }}>
            ⏱ {sec.timeEstimate}
          </div>
        )}
        {sec.body && <div className="section-body">{renderMarkdown(sec.body)}</div>}
        
        {sec.type === 'filetree' && <div className="file-tree">{renderTree(sec.tree)}</div>}

        {sec.type === 'rules' && (
          <div className="rule-grid">
            {sec.rules.map((r, i) => (
              <div key={i} className="rule-card">
                <div className="rule-card-num">{r.num}</div>
                <h3 className="rule-card-title" style={{ margin: '0 0 0.3rem 0' }}>{r.title}</h3>
                <div className="rule-card-body">{r.body}</div>
              </div>
            ))}
          </div>
        )}
        
        {sec.code && <CodeBlock code={sec.code} lang={sec.lang} />}
        
        {sec.boxType && (
          <aside className={`info-box ${sec.boxType}`}>
            <h4 className="info-box-title" style={{ margin: '0 0 0.35rem 0' }}>{sec.boxTitle}</h4>
            <SafeHtml html={sec.boxBody} />
          </aside>
        )}

        {sec.type === 'quiz' && (
          <div className="quiz-container">
            {sec.questions.map((q, i) => (
              <QuizWidget key={i} questionData={q} index={i} />
            ))}
          </div>
        )}

        {sec.type === 'exam' && (
          <CheckpointExam 
            questions={sec.questions} 
            onPass={onPassCheckpoint} 
            title={sec.title} 
            week={dayData.week} 
          />
        )}
      </section>
    );
  };

  return (
    <main className="main">
      <header className="day-header" style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="day-badge" style={{ background: `${wc.color}18`, color: wc.color }}>
          Week {dayData.week} · Day {dayData.dayNumber}
        </div>
        <h1 className="day-title" style={{ margin: '0 0 0.4rem 0' }}>{dayData.title}</h1>
        <p className="day-subtitle" style={{ margin: '0 0 1.2rem 0' }}>{dayData.subtitle}</p>
        
        <div className="topics-row">
          {dayData.topics.map(t => <span key={t} className="topic-tag">{t}</span>)}
        </div>

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
      </header>

      <article>
        {dayData.sections.map((sec, idx) => renderSection(sec, idx))}
      </article>

      <Footer />
    </main>
  );
}