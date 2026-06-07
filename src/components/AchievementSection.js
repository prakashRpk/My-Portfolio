import React, { useState } from 'react';
import achMca from '../assets/ach_mca.png';
import achHtml from '../assets/ach_html.png';
import achJs from '../assets/ach_js.png';
import achMern from '../assets/ach_mern.png';
import achHackthon1 from '../assets/ach_hackthon_1.png';
import achHackthon2 from '../assets/ach_hackthon_2.png';
import achHackthon3 from '../assets/ach_hackthon_3.png';
import achievementData from '../json/achievements.json';

const AchievementSection = () => {
  const milestones = achievementData.achievements || achievementData.milestones || [];
  const [activeIdx, setActiveIdx] = useState(0);
  const [subImageIdxs, setSubImageIdxs] = useState({});
  const [lightboxImg, setLightboxImg] = useState(null);

  const handleOpenLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
  };

  const handleCloseLightbox = () => {
    setLightboxImg(null);
  };

  const imageMap = {
    ach_mca: achMca,
    ach_html: achHtml,
    ach_js: achJs,
    ach_mern: achMern,
    ach_hackthon_1: achHackthon1,
    ach_hackthon_2: achHackthon2,
    ach_hackthon_3: achHackthon3
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % milestones.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const getActiveSubImageIdx = (milestoneIdx) => {
    return subImageIdxs[milestoneIdx] || 0;
  };

  const nextSubImage = (milestoneIdx, totalSubImages, e) => {
    e.stopPropagation();
    setSubImageIdxs((prev) => ({
      ...prev,
      [milestoneIdx]: ((prev[milestoneIdx] !== undefined ? prev[milestoneIdx] : 0) + 1) % totalSubImages,
    }));
  };

  const prevSubImage = (milestoneIdx, totalSubImages, e) => {
    e.stopPropagation();
    setSubImageIdxs((prev) => ({
      ...prev,
      [milestoneIdx]: ((prev[milestoneIdx] !== undefined ? prev[milestoneIdx] : 0) - 1 + totalSubImages) % totalSubImages,
    }));
  };

  return (
    <section className="achievement-section" id="achievements">
      <div className="achievement-container">
        <div className="project-header">
          <h2 className="project-title">Achievements</h2>
          <p className="project-subtitle">
            Academic milestones, professional certifications, and developer journey highlights.
          </p>
        </div>

        {/* Achievement Card Slider */}
        <div className="ach-slider-wrapper">
          <div className="ach-slider-content">
            {milestones.map((m, idx) => {
              const isActive = idx === activeIdx;
              const currentImg = m.imgKeys && m.imgKeys.length > 0 
                ? imageMap[m.imgKeys[getActiveSubImageIdx(idx)]] 
                : imageMap[m.imgKey];

              return (
                <div 
                  key={idx} 
                  className={`ach-slide-card ${isActive ? 'is-active' : ''}`}
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  <div className="ach-slide-image-container">
                    {m.imgKeys && m.imgKeys.length > 0 ? (
                      <>
                        <div className="sub-slider-track" style={{ 
                          display: 'flex', 
                          width: `${m.imgKeys.length * 100}%`,
                          transform: `translateX(-${(getActiveSubImageIdx(idx) * 100) / m.imgKeys.length}%)`,
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          height: '100%'
                        }}>
                          {m.imgKeys.map((imgK, imgIdx) => (
                            <img 
                              key={imgIdx}
                              src={imageMap[imgK]} 
                              alt={`${m.title} - ${imgIdx + 1}`} 
                              className="ach-slide-image"
                              style={{ width: `${100 / m.imgKeys.length}%`, height: '100%', objectFit: 'cover' }}
                            />
                          ))}
                        </div>
                        {m.imgKeys.length > 1 && (
                          <>
                            <button 
                              className="sub-slider-arrow left" 
                              onClick={(e) => prevSubImage(idx, m.imgKeys.length, e)}
                              aria-label="Previous image"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                              </svg>
                            </button>
                            <button 
                              className="sub-slider-arrow right" 
                              onClick={(e) => nextSubImage(idx, m.imgKeys.length, e)}
                              aria-label="Next image"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                            <div className="sub-slider-dots">
                              {m.imgKeys.map((_, imgIdx) => (
                                <span 
                                  key={imgIdx} 
                                  className={`sub-dot ${imgIdx === getActiveSubImageIdx(idx) ? 'is-active' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSubImageIdxs((prev) => ({ ...prev, [idx]: imgIdx }));
                                  }}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <img 
                        src={imageMap[m.imgKey]} 
                        alt={m.title} 
                        className="ach-slide-image"
                      />
                    )}
                    <button 
                      className="image-view-lightbox-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenLightbox(currentImg);
                      }}
                      aria-label="View full image"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Glassmorphic Panel Overlay */}
                  <div className="ach-slide-glass-panel">
                    <div className="glass-panel-top">
                      <div className="glass-panel-text">
                        <h3 className="glass-panel-title">{m.title}</h3>
                        <p className="glass-panel-desc">{m.desc}</p>
                        <span className="glass-panel-date">{m.date}</span>
                      </div>
                      <div className="glass-panel-action">
                        <div className="slider-controls">
                          <span className="slider-count">
                            {String(activeIdx + 1).padStart(2, '0')} <span className="slash">/</span> {String(milestones.length).padStart(2, '0')}
                          </span>
                          <button className="slider-arrow-btn" onClick={prevSlide} aria-label="Previous Slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="19" y1="12" x2="5" y2="12"></line>
                              <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                          </button>
                          <button className="slider-arrow-btn" onClick={nextSlide} aria-label="Next Slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="ach-slider-dots">
            {milestones.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${idx === activeIdx ? 'is-active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {lightboxImg && (
        <div className="lightbox-modal" onClick={handleCloseLightbox}>
          <button className="lightbox-close" onClick={handleCloseLightbox} aria-label="Close lightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Full View" className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementSection;
