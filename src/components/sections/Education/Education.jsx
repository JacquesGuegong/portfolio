import React from 'react';
import Section from '../../ui/Section/Section';
import { education } from '../../../data/education';
import './Education.css';

/**
 * Education Component
 *
 * Framed as a version history — each degree is a release, tagged
 * v1 through v3, shipped or in progress.
 */
function Education() {
  return (
    <Section id="education" className="education" title="Education" index="06">
      <ol className="education__log">
        {education.map((entry) => (
          <li key={entry.id} className="education__entry">
            <span className="education__version mono">{entry.version}</span>
            <div className="education__body">
              <div className="education__row">
                <h3 className="education__degree">{entry.degree}</h3>
                <span className={`education__status education__status--${entry.status}`}>
                  <span className="education__status-dot" aria-hidden="true" />
                  {entry.status === 'in-progress' ? 'In progress' : 'Shipped'}
                </span>
              </div>
              <p className="education__meta">
                {entry.institution} <span aria-hidden="true">·</span> {entry.date}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Education;
