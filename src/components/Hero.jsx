import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Twitter, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '6rem' 
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block' }}>I am {portfolioData.bio.name}.</span>
            <span className="text-gradient">{portfolioData.bio.description}</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', lineHeight: 1.6 }}>
            {portfolioData.bio.role} blending aesthetic intuition with engineering rigor to build the next generation of web applications.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex' }}><Github size={20} /></a>
            <a href="#" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex' }}><Linkedin size={20} /></a>
            <a href="#" className="glass-panel" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex' }}><Twitter size={20} /></a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-20px',
            background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-violet))',
            filter: 'blur(40px)',
            opacity: 0.3,
            borderRadius: '50%'
          }}></div>
          <div className="glass-panel" style={{ padding: '1rem', position: 'relative' }}>
             <img 
               src="/avater.png" 
               alt="Hero"
               style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
