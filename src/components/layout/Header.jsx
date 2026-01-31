import React from 'react';
import Navigation from './Navigation';
import './Header.css';

/**
 * Header Component
 * 
 * Site header containing the site name/logo and main navigation.
 * Uses semantic HTML5 <header> element for accessibility.
 * 
 * @returns {JSX.Element} The site header with navigation
 */
function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <div className="header__brand">
          <a href="#hero" className="header__logo" aria-label="Go to homepage">
            Portfolio
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
