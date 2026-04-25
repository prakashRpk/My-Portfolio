import React from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import projectsData from '../json/projects.json';

const ProjectSection = () => {
  // Map images from imported assets
  const imageMap = { p1, p2, p3 };

  return (
    <section className="project-section" id="work">
      <div className="project-header">
        <h2 className="project-title">Project</h2>
        <p className="project-subtitle">
          Hand-picked projects built for real brands, real goals, real growth.
        </p>
      </div>

      <div className="project-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={imageMap[project.imgKey]} alt={project.title} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link-btn">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link-btn primary">Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-text">
                <div className="project-meta">
                  <span className="project-cat">{project.category}</span>
                  <div className="project-tech-stack">
                    {project.tech.map((t, index) => (
                      <span key={index} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
