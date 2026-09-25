import React from 'react';
import { portfolioData } from '../data/portfolioData';

// Fix: moved roleFormatter ABOVE the component to avoid ReferenceError
const roleFormatter = (role) => {
  return role;
};

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        <span className="text-gradient">Education</span> & Timeline
      </h2>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        <div className="timeline-line" style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'var(--border-glass)' }}></div>
        
        {portfolioData.experience.map((exp, index) => (
          <div key={exp.id} className="timeline-card" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
            <div className="timeline-dot" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-secondary)',
              border: '2px solid var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              flexShrink: 0,
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
            }}>
              <div className="timeline-dot-inner" style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
            </div>
            <div className="glass-panel timeline-panel" style={{ padding: '1.5rem', flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--accent-violet)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{exp.period}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{roleFormatter(exp.role)}</h3>
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', fontSize: '0.875rem' }}>{exp.company}</div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
