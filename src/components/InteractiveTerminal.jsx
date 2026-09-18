import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'CYBERPORT OS v1.0.0 initialized.' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  const commands = {
    help: 'Available commands: help, skills, projects, contact, clear, bio',
    bio: portfolioData.bio.description,
    skills: portfolioData.skills.map(s => s.name).join(', '),
    projects: portfolioData.projects.map(p => p.title).join(' | '),
    contact: 'Email me at hello@yourdomain.com',
    clear: 'CLEAR_COMMAND'
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `> ${input}` }];
    
    if (cmd === 'clear') {
      setHistory([]);
    } else if (commands[cmd]) {
      newHistory.push({ type: 'output', text: commands[cmd] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: 'error', text: `Command not found: ${cmd}` });
      setHistory(newHistory);
    }
    
    setInput('');
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="section container">
      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '0.75rem 1rem', display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-glass)' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div className="font-mono" style={{ padding: '1.5rem', height: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {history.map((line, i) => (
            <div key={i} style={{ 
              color: line.type === 'error' ? '#ff5f56' : line.type === 'input' ? 'var(--accent-cyan)' : 'var(--text-main)',
              marginBottom: '0.5rem',
              wordBreak: 'break-all'
            }}>
              {line.text}
            </div>
          ))}
          <div ref={endRef} />
          <form onSubmit={handleCommand} style={{ display: 'flex', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>&gt;</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="font-mono"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                outline: 'none',
                width: '100%'
              }}
              autoFocus
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
