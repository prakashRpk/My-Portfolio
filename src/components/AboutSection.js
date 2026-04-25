import React from 'react';
import wireframeSphere from '../assets/wireframe-sphere.png';
import timelineData from '../json/about_timeline.json';
import skillsData from '../json/skills.json';

const AboutSection = () => {
  // Quadruple the row content for a truly seamless infinite loop on any screen width
  const full_row1 = [...skillsData.row1, ...skillsData.row1, ...skillsData.row1, ...skillsData.row1];
  const full_row2 = [...skillsData.row2, ...skillsData.row2, ...skillsData.row2, ...skillsData.row2];

  return (
    <section className="about-section" id="about">
      <div className="about-header-top">
        <div className="badge-small">Our Story</div>
        <h2 className="about-title">
          Our Existence <span className="text-gradient">Explained</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-left">
          <div className="about-visual">
            <img src={wireframeSphere} alt="Wireframe Sphere" className="sphere-img" />
          </div>

        </div>

        <div className="about-right">
          <div className="about-text">
            <p>
              I am a dedicated <strong>Full-Stack Developer</strong> with a passion for crafting user-friendly and scalable web applications. My journey in technology began during my <strong>BSc in Computer Science</strong> (graduated 2023), where I developed a strong foundation in core programming concepts.
            </p>
            <p>
              Currently, I am pursuing my <strong>Master of Computer Applications (MCA)</strong> at Hindusthan College of Arts and Science, maintaining a high academic standard with a <strong>91% GPA</strong>. This academic rigor complements my hands-on experience in building modern web solutions.
            </p>
            <p>
              My expertise lies in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js), but I am also proficient in C, C++, and various design tools like <strong>Figma and Adobe XD</strong>. I believe in writing clean, maintainable code that solves real-world problems.
            </p>
            <p>
              Whether it's developing secure banking systems or dynamic e-commerce platforms, I focus on delivering <strong>high-performance software</strong> that provides an exceptional user experience while adhering to the latest industry standards.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Marquee - Row 1 */}
      <div className="skills-marquee">
        <div className="marquee-content">
          {full_row1.map((skill, index) => (
            <div key={index} className="skill-item icon-text">
              <span className="skill-icon-mini">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Marquee - Row 2 (Reverse) */}
      <div className="skills-marquee row-reverse">
        <div className="marquee-content">
          {full_row2.map((skill, index) => (
            <div key={index} className="skill-item icon-text">
              <span className="skill-icon-mini">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
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
