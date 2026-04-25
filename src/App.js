import React, { useState } from 'react';
import './style/App.css';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import AchievementSection from './components/AchievementSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navbar />
          <div className="portfolio-container">
            <Sidebar />
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
