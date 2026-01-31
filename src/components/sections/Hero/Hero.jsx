import React from 'react';
import Section from '../../ui/Section/Section';
import Button from '../../ui/Button/Button';
import { personalInfo } from '../../../data/personal';
import './Hero.css';

/**
 * Hero Component
 * 
 * Main hero section displaying name, title, description, and call-to-action buttons.
 * Uses data from personal.js to maintain consistency across the portfolio.
 * 
 * @returns {JSX.Element} Hero section with introduction and CTAs
 */
function Hero() {
  const { hero, email, photo, resume } = personalInfo;

  /**
   * Handles smooth scroll to projects section
   */
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section id="hero" className="hero" title={null}>
      <div className="hero__content">
        {photo && (
          <div className="hero__image-wrapper">
            <img 
              src={photo} 
              alt={`${hero.name} - ${hero.subtitle}`}
              className="hero__image"
            />
          </div>
        )}
        <p className="hero__greeting">{hero.greeting}</p>
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__description">{hero.description}</p>
        <div className="hero__cta">
          <Button
            variant="primary"
            size="large"
            href={hero.ctaLink}
            onClick={handleScrollToProjects}
            className="hero__cta-primary"
          >
            {hero.ctaText}
          </Button>
          <Button
            variant="outline"
            size="large"
            href={`mailto:${email}`}
            className="hero__cta-secondary"
          >
            Get In Touch
          </Button>
          {resume && resume.url && (
            <Button
              variant="outline"
              size="large"
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta-resume"
            >
              {resume.downloadText || 'Download Resume'}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Hero;
