import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="logo text-gradient">Cosmos Explorer</h3>
            <p className="about-text">
              This interactive project is designed to showcase the beauty and scale of our solar system through modern web technologies. 
              Built with React, combining responsive design, dynamic data fetching, and an immersive user interface to bring the cosmos to your screen.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Project Contributors</h3>
            <ul>
              <li><a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer">Amaka (GitHub)</a></li>
              <li><a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">Ifeoma (LinkedIn)</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Resources & Links</h3>
            <ul>
              <li><a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">TSAcademy</a></li>
              <li><a href="https://github.com/JoekahunaNG/TS_Academy_FrontEnd_Practice_Task" target="_blank" rel="noopener noreferrer">JoekahunaNG Team Repo</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom glass">
          <p>&copy; {new Date().getFullYear()} JoekahunaNG Cosmos Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
