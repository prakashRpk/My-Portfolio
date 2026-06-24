import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-pill">
        <div className="nav-left">
          <a href="#" className="nav-logo-link">
            <span className="nav-logo-text">My Portfolio</span>
          </a>
        </div>
        
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#work" className="nav-link" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#achievements" className="nav-link" onClick={() => setIsOpen(false)}>Achievements</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="nav-right">
          <div className="nav-profile">
            <div className="nav-avatar">
              <img src={portrait} alt="Alexander Isak" />
            </div>
            <div className="nav-profile-info">
              <span className="nav-profile-name">Prakash R</span>
              <span className="nav-profile-role">Full-Stack Developer</span>
            </div>
          </div>

          <button 
            className={`hamburger-btn ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
