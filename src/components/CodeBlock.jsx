// src/components/CodeBlock.jsx
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);

export default function CodeBlock({ code, lang = 'jsx' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">{lang}</span>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? 'Copied! ✓' : 'Copy'}
        </button>
      </div>
      <div className="code-body">
        {/* This component safely colors our code without messy HTML hacks! */}
        <SyntaxHighlighter 
          language={lang} 
          style={vscDarkPlus} 
          customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}