import React from 'react';
import Navigation from './Navigation';
import useHideOnScroll from '../../hooks/useHideOnScroll';
import { personalInfo } from '../../data/personal';
import './Header.css';

/**
 * Header Component
 *
 * Sticky nav that hides on scroll down, reappears on scroll up.
 */
function Header() {
  const visible = useHideOnScroll();

  return (
    <header className={`header${visible ? '' : ' header--hidden'}`} role="banner">
      <div className="header__container">
        <div className="header__brand">
          <a href="#hero" className="header__logo font-display" aria-label="Jacques Duval Guegong — back to top">
            {personalInfo.firstName} {personalInfo.lastName}
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
