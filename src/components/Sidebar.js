import React from 'react';
import portrait from '../assets/portrait.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="badge-available">
        <span className="dot"></span>
        Available for Work
      </div>

      <div className="social-links">
        <a href="#" className="social-icon" aria-label="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="#" className="social-icon" aria-label="Dribbble">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-1.354-.402-2.714-.187-.13-.3-.268-.59-.413-.88 1.554-.658 2.39-1.574 2.474-1.668a10.607 10.607 0 00-2.022-2.1c-.083.098-.923 1.054-2.532 1.637a14.862 14.862 0 00-2.616-1.56c-.05-.187-.1-.377-.156-.566C16.892 4.1 16.48 2.6 16.438 2.45a10.748 10.748 0 00-4.438-.95 10.748 10.748 0 00-4.438.95c-.042.15-.454 1.65-1.127 3.86a14.862 14.862 0 00-2.616 1.56c-1.61-.583-2.45-1.54-2.533-1.637a10.607 10.607 0 00-2.021 2.1c.084.094.92 1.01 2.474 1.668-.145.29-.283.58-.413.88-1.36-.215-2.364.077-2.714.187a10.748 10.748 0 00-.012 4.716c.35.11 1.354.402 2.714.187.13.3.268.59.413.88-1.554.658-2.39 1.574-2.474 1.668a10.428 10.428 0 002.502 2.502c.083-.098.923-1.054 2.532-1.637a14.862 14.862 0 002.616 1.56c.05.187.1.377.156.566.042.15.454 1.65 1.127 3.86a10.748 10.748 0 004.438.95c1.6 0 3.1-.35 4.438-.95.673-2.21 1.085-3.71 1.127-3.86.056-.188.106-.378.156-.566a14.862 14.862 0 002.616 1.56c1.61.583 2.45 1.54 2.533 1.637a10.428 10.428 0 002.502-2.502c-.083-.094-.92-1.01-2.474-1.668.145-.29.283-.58.413-.88 1.36.215 2.364-.077 2.714-.187a10.748 10.748 0 00.012-4.716z" />
          </svg>
        </a>
      </div>

      <div className="profile-img-container">
        <img src={portrait} alt="Alexander Isak" className="profile-img" />
      </div>

      <div className="sidebar-overlay">
        <h1 className="sidebar-name">Hey, I'm Prakash</h1>
        <p className="sidebar-bio">
          I'm a Full-Stack Developer crafting user-friendly web applications, currently pursuing my MCA.
        </p>
        <div className="sidebar-actions">
          <button className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            Let's talk
          </button>
          <a href="/resume.html" className="btn-secondary" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
