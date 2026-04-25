import React from 'react';
import portrait from '../assets/portrait.png';
import logo3d from '../assets/logo-3d.png';

const HeroSection = () => {
  return (
    <main className="main-content">
      <section className="hero">
        <h2 className="hero-title">
          Start building <span className="highlight-pill">websites</span> people remember
        </h2>
      </section>

      <section className="content-grid">
        <div className="stats-container">
          <div className="stat-item">
            <h2>10+</h2>
            <p>Year of experience</p>
          </div>
          <div className="stat-item">
            <h2>6x</h2>
            <p>Industry Awards</p>
          </div>
        </div>

        <div className="visual-element">
          <img src={logo3d} alt="3D Logo" className="glass-logo" />
          <div className="award-seal">
            <div className="award-seal-text">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fontSize="8" fontWeight="bold" fill="white">
                  <textPath xlinkHref="#circlePath">
                    AWARD WINNING DESIGNER - SINCE 2020 - AWARD WINNING DESIGNER - SINCE 2020 -
                  </textPath>
                </text>
              </svg>
            </div>
            <svg className="seal-center" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px' }}><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8M8 12h8"></path></svg>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HeroSection;
