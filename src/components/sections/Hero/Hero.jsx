import React from 'react';
import Section from '../../ui/Section/Section';
import Button from '../../ui/Button/Button';
import { personalInfo } from '../../../data/personal';
import './Hero.css';

/**
 * Hero Component
 *
 * The thesis of the page: a specific, engineering-flavored claim
 * backed immediately by real numbers, with the portrait as a secondary,
 * supporting artifact — a fixed hard-edged frame (not a circular
 * avatar) with a duotone treatment mapped to the palette: Ink shadows,
 * Brass highlights.
 */
function Hero() {
  const { hero, photo, firstName, lastName, location } = personalInfo;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Section id="hero" className="hero" title={null}>
      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow mono">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="hero__headline font-display">{hero.headline}</h1>
          <p className="hero__description">{hero.description}</p>

          <div className="hero__cta">
            <Button
              variant="primary"
              size="large"
              href={hero.ctaPrimary.href}
              onClick={handleScrollToProjects}
              className="hero__cta-primary"
            >
              {hero.ctaPrimary.text}
            </Button>
            <Button variant="outline" size="large" href={hero.ctaSecondary.href} className="hero__cta-secondary">
              {hero.ctaSecondary.text}
            </Button>
          </div>

          <dl className="hero__metrics">
            {hero.metrics.map((metric) => (
              <div className="hero__metric" key={metric.label}>
                <dt className="hero__metric-value mono tabular-nums">{metric.value}</dt>
                <dd className="hero__metric-label">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {photo && (
          <figure className="hero__photo">
            <div className="hero__photo-frame">
              <img src={photo} alt={`${firstName} ${lastName}`} width="300" height="300" loading="eager" />
            </div>
            <figcaption className="hero__photo-caption mono">{location}</figcaption>
          </figure>
        )}
      </div>
    </Section>
  );
}

export default Hero;
