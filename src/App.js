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

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          <MouseTrail />
          <Navbar />
          <div className="portfolio-container">
            <HeroSection />
          </div>
          <AboutSection />
          <ProjectSection />
          <AchievementSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
