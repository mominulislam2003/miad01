import React, { useState } from 'react';
import { Send, Copy, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.bio.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        <span className="text-gradient">Initiate</span> Contact
      </h2>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Transmission Channel</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Open to new opportunities and interesting projects. Establish a secure connection below.</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
            <div style={{ flex: 1, fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>{portfolioData.bio.contact.email}</div>
            <button onClick={handleCopy} className="btn btn-outline" style={{ padding: '0.5rem', flexShrink: 0 }}>
              {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--accent-violet)' }}>Phone</span>
              <span className="font-mono">{portfolioData.bio.contact.phone}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--accent-violet)' }}>Location</span>
              <span className="font-mono" style={{ textAlign: 'right', maxWidth: '60%' }}>{portfolioData.bio.contact.location}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--accent-violet)' }}>Birthday</span>
              <span className="font-mono">{portfolioData.bio.contact.birthday}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>IDENTIFIER</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'white', outline: 'none' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>RETURN ADDRESS (EMAIL)</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'white', outline: 'none' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>PAYLOAD</label>
            <textarea 
              required
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              rows="4" 
              style={{ width: '100%', padding: '0.75rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-glass)', borderRadius: '4px', color: 'white', outline: 'none', resize: 'vertical' }} 
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {sent ? 'TRANSMITTED' : 'TRANSMIT'} <Send size={18} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
