import React from 'react';
import { personalInfo } from '../../data/personal';
import './Footer.css';

/**
 * Footer Component
 *
 * Site footer with copyright information and social links.
 * Uses semantic <footer> element for accessibility.
 *
 * @returns {JSX.Element} The site footer
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  const { firstName, lastName, github, linkedin } = personalInfo;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyright">
            © {currentYear} {firstName} {lastName}
          </p>
          <nav className="footer__links" aria-label="Social links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="footer__link">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
