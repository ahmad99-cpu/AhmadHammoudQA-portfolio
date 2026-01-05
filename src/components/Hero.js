import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
        <div className="hero-text">
  <h1 className="hero-title">
    <span className="greeting">Quality Assurance Specialist</span>
    <span className="name">Ahmad Hammoud</span>
    {/* Combining the role and greeting for a cleaner look */}
    <span className="role-subtext">Optimizing software reliability through intelligent automation.</span>
  </h1>
  
  <p className="hero-description">
    Bridging the gap between development and deployment. With 2 years of experience 
    building scalable test suites, I help engineering teams deliver **flawless digital 
    products** by catching complex regressions before they reach your users.
  </p>

  <div className="hero-buttons">
    <a href="#projects" className="btn btn-primary">Explore Projects</a>
    <a href="#contact" className="btn btn-secondary-outline">Let's Connect</a>
  </div>
  
  {/* Social links stay the same, but ensure they are subtle icons */}
</div>
          <div className="hero-image">
            <div className="hero-visual">
              <div className="animated-network">
                <svg className="network-svg" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--secondary-color)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* Animated connecting lines */}
                  <line className="network-line line-1" x1="50" y1="100" x2="150" y2="200" />
                  <line className="network-line line-2" x1="150" y1="200" x2="250" y2="150" />
                  <line className="network-line line-3" x1="250" y1="150" x2="350" y2="250" />
                  <line className="network-line line-4" x1="200" y1="100" x2="200" y2="300" />
                  <line className="network-line line-5" x1="100" y1="300" x2="300" y2="100" />
                  <line className="network-line line-6" x1="50" y1="250" x2="200" y2="200" />
                  <line className="network-line line-7" x1="200" y1="200" x2="350" y2="100" />
                </svg>
                
                {/* Floating nodes */}
                <div className="network-node node-1">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="network-node node-2">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="network-node node-3">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="network-node node-4">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="network-node node-5">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                <div className="network-node node-6">
                  <div className="node-core"></div>
                  <div className="node-pulse"></div>
                </div>
                
                {/* Central icon */}
                <div className="network-center">
                  <div className="center-ring ring-1"></div>
                  <div className="center-ring ring-2"></div>
                  <div className="center-ring ring-3"></div>
                  <div className="center-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
                <div className="particle particle-6"></div>
                <div className="particle particle-7"></div>
                <div className="particle particle-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
    </section>
  );
};

export default Hero;

