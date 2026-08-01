import React from 'react';
import Section from '../../ui/Section/Section';
import AboutPhoto from './AboutPhoto';
import { about } from '../../../data/about';
import { personalInfo } from '../../../data/personal';
import './About.css';

/**
 * About Component
 *
 * About section: a photo beside the personal narrative.
 */
function About() {
  const { photo, firstName, lastName, initials } = personalInfo;

  return (
    <Section id="about" className="about" title="About" index="04">
      <div className="about__layout">
        <AboutPhoto src={photo} alt={`${firstName} ${lastName}`} initials={initials} />
        <div className="about__content">
          <div className="about__text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
