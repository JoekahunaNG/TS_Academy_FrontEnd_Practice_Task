import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToPlanets = () => {
    const planetsSection = document.getElementById('planets');
    if (planetsSection) {
      planetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-header">
      <div className="video-background-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="background-video"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <nav className="top-nav glass">
        <div className="logo text-gradient">Cosmos Explorer</div>
        <ul className="nav-links">
          <li><button onClick={scrollToPlanets} className="nav-link">Planets</button></li>
          <li><button onClick={scrollToContact} className="nav-link btn-primary">Contact Us</button></li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">Discover The <span className="text-gradient">Solar System</span></h1>
        <p className="hero-subtitle">Journey through the wonders of our cosmic neighborhood. Explore dynamic data about neighboring planets.</p>
        <div className="hero-actions">
          <button onClick={scrollToPlanets} className="btn-explore">Explore the Data</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
