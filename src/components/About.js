import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Learn more about my passion for quality assurance</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Quality Assurance Professional</h3>
            <p>
              As a dedicated Quality Assurance Engineer, I am passionate about ensuring software 
              quality through meticulous testing and attention to detail. I specialize in creating 
              comprehensive test strategies, developing automated test frameworks, and ensuring 
              the highest standards of software quality.
            </p>
            <p>
              My approach combines technical skills with a keen eye for detail, enabling me 
              to identify issues early in the development cycle and contribute to building 
              robust, reliable software products. I am continuously learning and expanding 
              my expertise in test automation and quality assurance best practices.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Focus</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Test Cases Created</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Automation Tools</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-container">
              <div className="gradient-orb orb-1"></div>
              <div className="gradient-orb orb-2"></div>
              <div className="gradient-orb orb-3"></div>
              <div className="geometric-shape shape-1"></div>
              <div className="geometric-shape shape-2"></div>
              <div className="geometric-shape shape-3"></div>
              <div className="visual-content">
                <div className="visual-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="visual-text">
                  <span>Quality</span>
                  <span>Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

