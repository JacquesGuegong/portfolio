import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * Site footer with copyright information and minimal contact details.
 * Uses semantic <footer> element for accessibility.
 * 
 * @returns {JSX.Element} The site footer
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyright">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="footer__tagline">
            Built with React & passion for AI/ML
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
