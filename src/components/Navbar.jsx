import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--bg-glass)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent'
    }}>
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <img src="/IMG_0460.png" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>

        <div className="status-badge" style={{
          display: 'none', // Hidden on mobile by default, shown via media queries usually
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '999px',
          background: 'rgba(0, 240, 255, 0.1)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          color: 'var(--accent-cyan)'
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }} />
          Available for Hire
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {menuOpen && (
        <div className="glass-panel" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: 'none',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem' }}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
