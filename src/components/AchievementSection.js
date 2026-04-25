import React from 'react';
import worldMap from '../assets/world-map.png';
import milestoneImg from '../assets/milestone.png';
import achievementData from '../json/achievements.json';

const AchievementSection = () => {
  const { stats, milestones } = achievementData;
  const imageMap = { milestone: milestoneImg };

  return (
    <section className="achievement-section">

      <div className="achievement-container">
        <h2 className="achievement-header">
          Learn about our core <br />
          <span>values, our story and</span> <br />
          how we balance work.
        </h2>

        <div className="achievement-stats">
          {stats.map((stat, i) => (
            <div key={i} className="ach-stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="ach-timeline-wrapper">
          <div className="ach-timeline-line"></div>
          <div className="ach-cards">
            {milestones.map((m, i) => (
              <div key={i} className="ach-card">
                <div className="ach-year-tag">{m.year}</div>
                <div className="ach-dot"></div>
                <div className="ach-image-box">
                  <img src={imageMap[m.imgKey]} alt={m.title} />
                  <div className="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
