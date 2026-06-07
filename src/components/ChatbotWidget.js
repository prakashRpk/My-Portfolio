import React, { useState, useRef, useEffect } from 'react';
import RobotMascot from './RobotMascot';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Hi! I'm Prakash's virtual assistant. How can I help you today?" }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Track cursor position to make chatbot mascot eyes look at the mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const pupils = document.querySelectorAll('.chatbot-widget-container .mascot-pupil');
      pupils.forEach(pupil => {
        const rect = pupil.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        // Maximum look offset capped at 8px
        const distance = Math.min(8, Math.hypot(dx, dy) / 40);

        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const userMessage = { id: Date.now(), sender: 'user', text: userText };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputVal('');
    setIsTyping(true);

    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

    // Format message history for Gemini API (only user/model alternating, starting with user)
    const conversationHistory = [];
    let expectedRole = 'user';
    for (const msg of updatedMessages) {
      const role = msg.sender === 'user' ? 'user' : 'model';
      if (role === expectedRole) {
        conversationHistory.push({
          role,
          parts: [{ text: msg.text }]
        });
        expectedRole = expectedRole === 'user' ? 'model' : 'user';
      }
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: conversationHistory,
          systemInstruction: {
            parts: [
              {
                text: `You are a professional assistant for Prakash R's portfolio. You are knowledgeable, friendly, and helpful.
Here are details about Prakash:
- Name: Prakash R
- Role: Full-Stack Developer
- Education: Currently pursuing Master of Computer Applications (MCA) at Hindusthan College of Arts and Science (GPA: 91%). Graduated with a BSc in Computer Science in 2023 (65%).
- Skills: MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript, HTML5, CSS3, C++, C, SQL, REST APIs, Git, GitHub, Figma, Adobe XD, Postman, Firebase.
- Projects:
  1. Online Diary: A secure personal journal application featuring full CRUD operations, JWT authentication, and bcrypt for data privacy. Tech stack: Node.js, Express.js, MongoDB, React, JWT.
  2. Restaurant E-commerce: A full-stack ordering platform with a dynamic menu and user authentication. Tech stack: React, Node.js, MongoDB, Express.js.
  3. Banking Application: A secure banking system with transaction management and secure login features. Tech stack: MongoDB, Express, React, Node.
  4. Portfolio Website: A responsive personal portfolio built with React.js showcasing skills, projects, and background with smooth navigation. Tech stack: React, CSS, Framer Motion.
- Certifications: EF SET English Certificate C2 Proficient (2022), HTML - Advanced Certification (2024), Legacy JavaScript Algorithms Certification (2024).
- Contact: Email at prakashrpk.dev@gmail.com, GitHub (https://github.com/prakashRpk).

Answer any questions from the user about Prakash's work, background, and skills. Be concise, polite, and professional. Speak in the third person when referring to Prakash, but introduce yourself as his AI Assistant. If a user asks about something unrelated, politely bring the conversation back to Prakash and his career. Keep answers short and tailored for a chat widget.`
              }
            ]
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API returned status ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (replyText) {
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: replyText }]);
      } else {
        throw new Error('Invalid response structure from Gemini API');
      }
    } catch (error) {
      console.error("Gemini API Error:", error);

      // Fallback to offline rule-based response
      let replyText = "Thanks for your message! Prakash is currently offline, but you can leave your email here or write him via the contact form below.";
      const query = userText.toLowerCase();

      if (query.includes('project') || query.includes('work')) {
        replyText = "Prakash has worked on awesome MERN stack applications like Online Diary, Restaurant E-commerce, and a Banking Application. You can view them in the 'Work' section above!";
      } else if (query.includes('skill') || query.includes('tech') || query.includes('languages')) {
        replyText = "Prakash is highly proficient in React, Node.js, Express.js, MongoDB, JavaScript, and modern responsive CSS layout design.";
      } else if (query.includes('contact') || query.includes('hire') || query.includes('email')) {
        replyText = "You can hire or contact Prakash using the Contact form at the bottom of the page, or by emailing him directly at prakashrpk.dev@gmail.com.";
      } else if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
        replyText = "Hello! Nice to meet you. Ask me about Prakash's skills, projects, or how to get in touch!";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: replyText }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-widget-container">
      {/* Floating Action Button (FAB) */}
      <button 
        className={`chatbot-fab ${isOpen ? 'is-active' : 'is-closed-mascot'}`} 
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with AI Assistant"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <RobotMascot width="100%" height="100%" className="robot-svg-mascot" />
        )}
      </button>

      {/* Chat Popup Window */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <div className="chatbot-header-profile">
              <div className="chatbot-avatar-container">
                <RobotMascot width="100%" height="100%" className="chatbot-avatar" />
                <span className="chatbot-status-dot"></span>
              </div>
              <div className="chatbot-info">
                <h4>Prakash's Assistant</h4>
                <p>Online & Ready to Help</p>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg-bubble ${msg.sender}`}>
                <div className="msg-text">{msg.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-msg-bubble bot typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about skills, projects..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputVal.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
