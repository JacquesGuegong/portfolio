import React from 'react';
import Section from '../../ui/Section/Section';
import { education } from '../../../data/education';
import './Education.css';

/**
 * Education Component
 * 
 * Education section displaying academic qualifications and background.
 * Maps over education data and renders each entry with degree, field, status, and description.
 * 
 * @returns {JSX.Element} Education section with education entries
 */
function Education() {
  return (
    <Section id="education" className="education" title="Education">
      <div className="education__list">
        {education.map((edu) => (
          <article key={edu.id} className="education__item">
            <div className="education__header">
              <h3 className="education__degree">{edu.degree}</h3>
              <span className={`education__status education__status--${edu.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {edu.status}
              </span>
            </div>
            <p className="education__field">{edu.field}</p>
            <p className="education__institution">{edu.institution}</p>
            {edu.location && (
              <p className="education__location">{edu.location}</p>
            )}
            {(edu.startDate || edu.endDate) && (
              <p className="education__dates">
                {edu.startDate && `${edu.startDate} - `}
                {edu.endDate}
              </p>
            )}
            <p className="education__description">{edu.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Education;
