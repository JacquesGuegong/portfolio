import React from 'react';
import Section from '../../ui/Section/Section';
import { about } from '../../../data/about';
import './About.css';

/**
 * About Component
 * 
 * About section displaying personal background, experience, and goals.
 * Uses data from about.js to maintain consistency and easy updates.
 * 
 * @returns {JSX.Element} About section with paragraphs and optional skills summary
 */
function About() {
  return (
    <Section id="about" className="about" title="About Me">
      <div className="about__content">
        <div className="about__text">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
