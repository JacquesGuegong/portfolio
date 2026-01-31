import React from 'react';
import Section from '../../ui/Section/Section';
import Button from '../../ui/Button/Button';
import { personalInfo } from '../../../data/personal';
import './Contact.css';

/**
 * Contact Component
 * 
 * Contact section displaying contact information and social links.
 * Uses data from personal.js to maintain consistency across the portfolio.
 * 
 * @returns {JSX.Element} Contact section with email, social links, and optional location
 */
function Contact() {
  const { email, linkedin, github, resume } = personalInfo;

  return (
    <Section id="contact" className="contact" title="Contact">
      <div className="contact__content">
        <p className="contact__intro">
          I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow developers and AI/ML enthusiasts.
        </p>
        
        <div className="contact__methods">
          <div className="contact__item">
            <h3 className="contact__label">Email</h3>
            <Button
              variant="primary"
              size="large"
              href={`mailto:${email}`}
              className="contact__button"
            >
              {email}
            </Button>
          </div>

          <div className="contact__item">
            <h3 className="contact__label">LinkedIn</h3>
            <Button
              variant="outline"
              size="large"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__button"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <div className="contact__item">
            <h3 className="contact__label">GitHub</h3>
            <Button
              variant="outline"
              size="large"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__button"
            >
              View My GitHub
            </Button>
          </div>

          {resume && resume.url && (
            <div className="contact__item">
              <h3 className="contact__label">Resume</h3>
              <Button
                variant="primary"
                size="large"
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                {resume.downloadText || 'Download Resume'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
