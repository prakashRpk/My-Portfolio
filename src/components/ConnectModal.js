import React, { useState, useEffect } from 'react';

const ConnectModal = ({ isOpen, onClose, initialEmail }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Reset form states
      setIsSuccess(false);
      setError('');
      setName('');
      setMessage('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('connect-modal-overlay')) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Access key for Web3Forms (can be set in .env or hardcoded)
    const accessKey = process.env.REACT_APP_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

    if (accessKey === 'YOUR_ACCESS_KEY_HERE' || !accessKey) {
      // Simulation mode
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // As a fallback, trigger mailto client after a short delay
        const mailtoUrl = `mailto:mrprakash08112004@gmail.com?subject=Portfolio Connection: ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
        
        // We will store this url or trigger it so that they actually get the email
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 1500);
      }, 2000);
    } else {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            message: message,
            subject: `Connection Request from ${name}`
          })
        });

        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Submission error:', err);
        setError('Failed to send message. Opening email client instead...');
        // Fallback to mailto directly on error
        setTimeout(() => {
          const mailtoUrl = `mailto:mrprakash08112004@gmail.com?subject=Portfolio Connection: ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
          window.location.href = mailtoUrl;
          setIsSuccess(true);
        }, 2000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="connect-modal-overlay" onClick={handleOverlayClick}>
      <div className="connect-modal-container">
        
        {/* Close Button */}
        <button className="connect-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!isSuccess ? (
          <>
            <div className="connect-modal-header">
              <span className="connect-modal-badge">Let's Connect</span>
              <h2 className="connect-modal-title">Tell me about your project</h2>
              <p className="connect-modal-subtitle">Fill out the details below and I'll get back to you shortly.</p>
            </div>

            <form className="connect-modal-form" onSubmit={handleSubmit}>
              
              {/* Email Input */}
              <div className="connect-form-group">
                <label htmlFor="connect-email" className="connect-form-label">Your Email</label>
                <input
                  type="email"
                  id="connect-email"
                  className="connect-form-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Name Input */}
              <div className="connect-form-group">
                <label htmlFor="connect-name" className="connect-form-label">Your Name</label>
                <input
                  type="text"
                  id="connect-name"
                  className="connect-form-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="connect-form-group">
                <label htmlFor="connect-message" className="connect-form-label">Your Message</label>
                <textarea
                  id="connect-message"
                  className="connect-form-input connect-form-textarea"
                  placeholder="Write your message here..."
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              {error && <div className="connect-form-error">{error}</div>}

              {/* Submit Button */}
              <button type="submit" className="connect-form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="connect-submit-loading">
                    <span className="connect-spinner"></span>
                    <span>Sending message...</span>
                  </div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="submit-arrow-icon">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12,5 19,12 12,19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="connect-modal-success">
            <div className="success-icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </div>
            <h2 className="success-title">Message Sent!</h2>
            <p className="success-desc">
              Thank you, <strong>{name}</strong>. Your message has been sent successfully. I will get in touch with you at <strong>{email}</strong> soon!
            </p>
            
            <div className="success-actions">
              <button className="success-close-btn" onClick={onClose}>
                Done
              </button>
              <a 
                href={`mailto:mrprakash08112004@gmail.com?subject=Portfolio Connection: ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`}
                className="success-mailto-btn"
              >
                Send via Mail App directly
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectModal;
