import React from 'react';
import Section from '../../ui/Section/Section';
import Button from '../../ui/Button/Button';
import { personalInfo } from '../../../data/personal';
import './Hero.css';

/**
 * Hero Component
 *
 * The thesis of the page: a specific, engineering-flavored claim
 * backed immediately by real numbers. No photo — the hero is about
 * the work, not the face; the portrait lives in About instead.
 */
function Hero() {
  const { hero } = personalInfo;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Section id="hero" className="hero" title={null}>
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
    </Section>
  );
}

export default Hero;
