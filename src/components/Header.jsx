import { useState } from 'react';
import './Header.css';

function Header({ isMenuOpen, setIsMenuOpen }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-bracket"></span>
          <span className="logo-text">DR</span>
          <span className="logo-bracket"></span>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
