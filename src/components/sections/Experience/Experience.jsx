import React from 'react';
import Section from '../../ui/Section/Section';
import { experience } from '../../../data/experience';
import './Experience.css';

/**
 * Experience Component
 *
 * Work history log — role, company, and dates left, duties right.
 * Same visual language as the Education version-history rows.
 */
function Experience() {
  return (
    <Section id="experience" className="experience" title="Experience" index="05">
      <ol className="experience__log">
        {experience.map((entry) => (
          <li key={entry.id} className="experience__entry">
            <span className="experience__dates mono">
              {entry.start}–{entry.end}
            </span>
            <div className="experience__body">
              <div className="experience__row">
                <h3 className="experience__role">{entry.role}</h3>
                <span className="experience__company">{entry.company}</span>
              </div>
              <ul className="experience__highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="experience__highlight">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
