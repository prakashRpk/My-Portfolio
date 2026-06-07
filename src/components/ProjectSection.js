import React, { useState, useEffect, useRef } from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import projectsData from '../json/projects.json';

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Map images from imported assets
  const imageMap = { p1, p2, p3 };

  // Dynamically extract categories
  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="project-section" id="work">
      <div className="project-header">
        <h2 className="project-title">Projects</h2>
        <p className="project-subtitle">
          Hand-picked projects built for real brands, real goals, real growth.
        </p>
      </div>

      {/* Filter Pills (Desktop only, hidden on mobile via CSS) */}
      <div className="filter-pills-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-pill ${selectedCategory === category ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filter Dropdown (Mobile only, visible on mobile via CSS) */}
      <div className="filter-dropdown-container" ref={dropdownRef}>
        <div className="filter-dropdown-select" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span>{selectedCategory}</span>
          <svg className={`dropdown-chevron ${isDropdownOpen ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        {isDropdownOpen && (
          <div className="filter-dropdown-options">
            {categories.map((category) => (
              <div
                key={category}
                className={`filter-dropdown-option ${selectedCategory === category ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false);
                }}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={imageMap[project.imgKey] || p1} alt={project.title} />
              
              {/* GitHub Code Link (Top-right bookmark equivalent) */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-github-link"
                title="View Source Code"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <div className="project-info">
              <span className="project-badge">{project.category}</span>
              <h3 className="project-title-text">{project.title}</h3>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tech-stack">
                {project.tech.map((t, index) => (
                  <span key={index} className="tech-tag">{t}</span>
                ))}
              </div>

              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-view-live"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
