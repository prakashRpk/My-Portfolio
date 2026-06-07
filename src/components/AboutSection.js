import React from 'react';
import portrait from '../assets/portrait.png';
import timelineData from '../json/about_timeline.json';
import skillsData from '../json/skills.json';

const AboutSection = () => {
  // Combine all skills for a single continuous marquee track
  const allSkills = [...skillsData.row1, ...skillsData.row2];
  
  // Triplicate the list of skills to ensure seamless continuous scrolling without blank spaces
  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="about-section" id="about">
      {/* Centered Section Header matching Project Section style */}
      <div className="about-header">
        <h2 className="about-section-title">About Me</h2>
        <p className="about-section-subtitle">
          My background, academic journey, tech stack, and path as a developer.
        </p>
      </div>

      <div className="about-bento-grid">
        {/* Profile Picture Card - Left column */}
        <div className="about-bento-card about-profile-card">
          <div className="about-photo-wrapper">
            <img src={portrait} alt="Prakash R" className="about-photo" />
            <div className="about-work-badge">
              <span className="work-dot"></span>
              AVAILABLE FOR WORK
            </div>
          </div>
        </div>

        {/* Bio Content Card (Description) - Right column */}
        <div className="about-bento-card about-content-card">
          <h2 className="about-name">Prakash R</h2>
          <h3 className="about-role">Full-Stack Developer</h3>
          
          <div className="about-desc">
            <p>
              I am a dedicated Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), with a passion for crafting premium, user-friendly, and scalable web solutions.
            </p>
            <p>
              Currently, I am pursuing my Master of Computer Applications (MCA) at Hindusthan College of Arts and Science with a 91% GPA, combining solid academic principles with hands-on development experience.
            </p>
          </div>

          {/* Quick Info Grid to fill up empty space */}
          <div className="about-info-grid">
            <div className="info-item">
              <span className="info-label">Education</span>
              <span className="info-value">MCA (91% GPA)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Coimbatore, India</span>
            </div>
            <div className="info-item">
              <span className="info-label">Experience</span>
              <span className="info-value">Full-Stack Dev</span>
            </div>
            <div className="info-item">
              <span className="info-label">Freelance</span>
              <span className="info-value">Available</span>
            </div>
          </div>

          <div className="about-content-actions">
            <button className="btn-collaborate" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Collaborate
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling Skills Marquee Card - Spans full width */}
        <div className="about-bento-card about-skills-card">
          <div className="skills-label-wrapper">
            <span className="skills-card-label">Skills</span>
          </div>
          <div className="skills-marquee-container">
            <div className="skills-marquee-track">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-btn-badge">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="about-timeline">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.pos}`}>
              <div className="timeline-dot">
                <div className="dot-inner"></div>
                <div className="dot-glow"></div>
              </div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
