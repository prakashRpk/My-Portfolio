import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-text">Contact Us</div>
      
      <div className="contact-container">
        <div className="contact-main">
          {/* Left Column */}
          <div className="contact-info">
            <h2 className="contact-title">Reach out 
              <span className="title-arrow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </h2>
            <p className="contact-description">
              Have a question or need assistance? Reach out to our dedicated support team. 
              We're here to help with any inquiries you may have.
            </p>
            
            <div className="contact-checklist">
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Personalized assistance</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Timely response</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Comprehensive support</span>
              </div>
            </div>

            <div className="contact-social-pills">
              <div className="social-pill">𝕏</div>
              <div className="social-pill">f</div>
              <div className="social-pill"></div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="contact-form-card">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="contact-grid">
          <div className="contact-card">
            <div className="card-icon">✉</div>
            <div className="card-content">
              <h4>Email us</h4>
              <p>hi@affanlab.com</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="card-icon">📞</div>
            <div className="card-content">
              <h4>Call us</h4>
              <p>(501) 123-4567</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="card-icon">📍</div>
            <div className="card-content">
              <h4>Our location</h4>
              <p>Crosby Street, New York, US</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
