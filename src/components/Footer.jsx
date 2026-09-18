import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-glass)', padding: '2rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Cyberport. All systems operational.
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-cyan)', animation: 'pulseGlow 2s infinite' }} />
          SYSTEM_ONLINE
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn btn-outline"
          style={{ padding: '0.5rem' }}
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
