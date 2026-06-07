import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container-box">
        
        {/* Top Header Information */}
        <div className="contact-header-block">
          <span className="contact-badge-pill">Get In Touch</span>
          <h2 className="contact-main-title">Let's Connect & Build Something.</h2>
          <p className="contact-manual-reach">
            Or just reach out manually to <a href="mailto:prakashrpk.dev@gmail.com">prakashrpk.dev@gmail.com</a>.
          </p>
        </div>

        {/* Columns Grid */}
        <div className="contact-columns-grid">
          
          {/* Email Support */}
          <div className="contact-col-item">
            <div className="contact-col-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email Support</h3>
            <p className="contact-col-desc">Drop an email for collaborations or opportunities.</p>
            <a href="mailto:prakashrpk.dev@gmail.com" className="contact-col-link">prakashrpk.dev@gmail.com</a>
          </div>

          {/* GitHub Profile */}
          <div className="contact-col-item">
            <div className="contact-col-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <h3>GitHub Profile</h3>
            <p className="contact-col-desc">Explore my open-source code and projects.</p>
            <a href="https://github.com/prakashRpk" target="_blank" rel="noopener noreferrer" className="contact-col-link">github.com/prakashRpk</a>
          </div>

          {/* Location */}
          <div className="contact-col-item">
            <div className="contact-col-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3>Location</h3>
            <p className="contact-col-desc">Based in India, open to remote opportunities.</p>
            <span className="contact-col-link" style={{ cursor: 'default' }}>Coimbatore, Tamil Nadu, India</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
