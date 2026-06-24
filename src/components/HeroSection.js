import React, { useEffect } from 'react';
import heroPerson from '../assets/portrait.png';
import RobotMascot from './RobotMascot';

const HeroSection = ({ onConnectClick }) => {
  // Track cursor position to make hero robot mascot eyes look at the mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const pupils = document.querySelectorAll('.hero-floating-robot .mascot-pupil');
      pupils.forEach(pupil => {
        const rect = pupil.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        // Maximum look offset capped at 8px
        const distance = Math.min(8, Math.hypot(dx, dy) / 40);

        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="main-content hero-main">
      <div className="hero-grid">
        {/* Left Column */}
        <div className="hero-left-col">
          <h1 className="hero-main-title">
            Hi, I'm Prakash R <br />
            <span className="text-gradient">Full-Stack Developer</span>
          </h1>
          <p className="hero-subtitle">
            I design and build interactive, high-performance web applications using the MERN stack and modern digital solutions.
          </p>

          <form className="consulting-form" onSubmit={(e) => {
            e.preventDefault();
            const inputEl = e.target.querySelector('.consulting-input');
            const email = inputEl.value.trim();
            if (email && onConnectClick) {
              onConnectClick(email);
              inputEl.value = '';
            }
          }}>
            <input type="email" placeholder="Enter your email" className="consulting-input" required />
            <button type="submit" className="consulting-btn">Let's Connect</button>
          </form>

          <div className="hero-trust-logos">
            <p className="trust-text">Find me on social networks</p>
            <div className="logos-strip">
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="logo-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="logo-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="logo-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                </svg>
                <span>Twitter</span>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="logo-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right-col">
          <div className="portrait-container-new">
            {/* Background glowing liquid blobs */}
            <div className="blob blob-orange"></div>
            <div className="blob blob-yellow"></div>
            <div className="blob blob-blue"></div>
            <div className="blob blob-pink"></div>

            <img src={heroPerson} alt="Prakash R Portrait" className="hero-portrait-img" />

            {/* Floating Academic Performance badge */}
            <div className="floating-badge trustpilot-badge">
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="badge-text">
                <span className="rating-num">91% Score</span>
                <span className="reviews-count">MCA Academic GPA</span>
              </div>
            </div>

            {/* Floating Interactive Robot Mascot */}
            <div className="hero-floating-robot clickable" title="Prakash's AI Mascot">
              <RobotMascot className="hero-robot-mascot" />
            </div>

            {/* Floating Projects badge */}
            <div className="floating-badge partner-badge">
              <div className="partner-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="partner-text">
                <span className="partner-title">4+ Projects</span>
                <span className="partner-subtitle">Full-Stack Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
