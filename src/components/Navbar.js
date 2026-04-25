import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-pill">
        <div className="nav-left">
          <div className="nav-logo">
            {/* Logo SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
        </div>
        
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#playground" className="nav-link">Playground</a>
          <a href="#resource" className="nav-link">Resource</a>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
