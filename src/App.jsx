import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveTerminal from './components/InteractiveTerminal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loading screen
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <img 
          src="/IMG_0460.png" 
          alt="Loading Logo" 
          style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '16px', marginBottom: '2rem', animation: 'pulseGlow 1.5s infinite' }} 
        />
        <div style={{
          width: '200px',
          height: '4px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            backgroundColor: 'var(--accent-cyan)',
            width: '100%',
            animation: 'loaderFill 2s ease-in-out'
          }}></div>
        </div>
        <style>{`
          @keyframes loaderFill {
            0% { width: 0% }
            100% { width: 100% }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="app-container" style={{ animation: 'fadeIn 1s ease-out' }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <BackgroundCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <InteractiveTerminal />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
