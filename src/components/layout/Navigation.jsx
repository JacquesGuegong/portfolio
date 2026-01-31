import React, { useState } from 'react';
import './Navigation.css';

/**
 * Navigation Component
 * 
 * Main site navigation with anchor links to portfolio sections.
 * Includes mobile menu toggle functionality.
 * Uses semantic <nav> element with proper ARIA labels for accessibility.
 * 
 * @returns {JSX.Element} The site navigation menu
 */
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items mapping to section IDs
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  /**
   * Handles smooth scroll to section and closes mobile menu
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  /**
   * Toggles mobile menu open/closed state
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <button
        className="navigation__toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="navigation-menu"
        onClick={toggleMenu}
      >
        <span className="navigation__toggle-icon" aria-hidden="true">
          {isMenuOpen ? '✕' : '☰'}
        </span>
      </button>
      <ul
        id="navigation-menu"
        className={`navigation__menu ${isMenuOpen ? 'navigation__menu--open' : ''}`}
      >
        {navItems.map((item) => (
          <li key={item.id} className="navigation__item">
            <a
              href={`#${item.id}`}
              className="navigation__link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
