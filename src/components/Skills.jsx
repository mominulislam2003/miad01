import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const categories = ['All', ...new Set(portfolioData.skills.map(s => s.category))];
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        <span className="text-gradient">Core</span> Capabilities & Services
      </h2>

      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="btn font-mono"
              style={{
                background: activeTab === cat ? 'var(--accent-violet)' : 'transparent',
                border: `1px solid ${activeTab === cat ? 'var(--accent-violet)' : 'var(--border-glass)'}`,
                color: 'white'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {filteredSkills.map(skill => (
            <div key={skill.name} className="glass-panel" style={{ padding: '1rem 2rem', border: '1px solid var(--accent-cyan)' }}>
              <span style={{ fontWeight: 'bold' }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--accent-cyan)' }}>Specialized Services</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {portfolioData.services.map((service, index) => (
          <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>{service.title}</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
