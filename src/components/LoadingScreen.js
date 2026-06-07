import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2400); // Let the 2.2s animation complete, then wait 200ms

    const finishTimer = setTimeout(() => {
      onFinished();
    }, 3200); // 2.4s + 800ms fadeout transition

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-container">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 3508 2481"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
        >
          <text
            x="1754"
            y="1240"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontFamily: "'Fineday - style one non-connect', 'Fineday - Style One Non-Connect', 'Fineday-StyleOne', 'Fineday', sans-serif",
              fontSize: '720px'
            }}
          >
            Welcome
          </text>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
