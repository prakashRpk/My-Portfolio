import React, { useState } from 'react';
import './style/App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import AchievementSection from './components/AchievementSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import MouseTrail from './components/MouseTrail';
import ConnectModal from './components/ConnectModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  const openConnectModal = (email) => {
    setModalEmail(email);
    setIsModalOpen(true);
  };

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          <MouseTrail />
          <Navbar />
          <div className="portfolio-container">
            <HeroSection onConnectClick={openConnectModal} />
          </div>
          <AboutSection />
          <ProjectSection />
          <AchievementSection />
          <ContactSection />
          <Footer />

          <ConnectModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            initialEmail={modalEmail} 
          />
        </>
      )}
    </>
  );
}

export default App;
