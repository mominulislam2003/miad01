import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        <span className="text-gradient">System</span> Profile
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Biography</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            {portfolioData.bio.longDescription}
          </p>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', marginTop: '1.5rem', color: 'var(--accent-cyan)' }}>Personal Interests</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
            {portfolioData.bio.interests}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Languages</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {portfolioData.languages.map((lang, index) => (
                <div key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid var(--border-glass)', borderRadius: '4px' }}>
                  <span style={{ fontWeight: 'bold' }}>{lang.name}</span> <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>({lang.level})</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <StatCard val={portfolioData.bio.stats.yearsOfExperience} label="Years Exp" suffix="+" />
            <StatCard val={portfolioData.bio.stats.completedProjects} label="Projects" suffix="+" />
          </div>

        </div>

      </div>
    </section>
  );
};

const StatCard = ({ val, label, suffix }) => (
  <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="font-mono text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
      {val}{suffix}
    </div>
    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
      {label}
    </div>
  </div>
);

export default About;
