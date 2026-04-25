import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 500);
          setTimeout(() => onFinished(), 1200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          {/* Stylized Terminal Logo */}
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>

        <div className="loading-info">
          <span className="loading-text">SYSTEM INITIALIZING</span>
          <span className="loading-percentage">{Math.min(progress, 100)}%</span>
        </div>
      </div>

      <div className="loading-footer">
        <span>© 2024 PRAKASH R DEV</span>
        <span>TERMINAL v1.0.4</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
