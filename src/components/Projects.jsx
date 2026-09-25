import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
        <span className="text-gradient">Featured</span> Deployments
      </h2>

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {portfolioData.projects.map(project => (
          <div 
            key={project.id} 
            className="glass-panel" 
            style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            onClick={() => setSelectedProject(project)}
          >
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', borderRadius: '4px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 10, 15, 0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '2rem'
        }} onClick={() => setSelectedProject(null)}>
          <div className="glass-panel project-modal-content" style={{ maxWidth: '800px', width: '100%', overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div className="project-modal-body" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 className="project-modal-title" style={{ fontSize: '2rem' }}>{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', flexShrink: 0 }}>
                  <X size={24} />
                </button>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{selectedProject.description}</p>
              <div className="project-modal-actions" style={{ display: 'flex', gap: '1rem' }}>
                <a href={selectedProject.demoUrl} className="btn btn-primary"><ExternalLink size={18} /> Live Demo</a>
                <a href={selectedProject.codeUrl} className="btn btn-outline"><Github size={18} /> View Code</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
