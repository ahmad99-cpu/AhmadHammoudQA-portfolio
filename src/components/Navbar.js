import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home" className="logo-text">Ahmad Hammoud</a>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

