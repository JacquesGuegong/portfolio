import React from 'react';
import Section from '../../ui/Section/Section';
import SkillCategory from './SkillCategory';
import { skills } from '../../../data/skills';
import './Skills.css';

/**
 * Skills Component
 *
 * A spec sheet, not a badge wall: each domain gets a row with a mono
 * label and its items listed cleanly beside it.
 */
function Skills() {
  return (
    <Section id="skills" className="skills" title="Skills" index="03">
      <div className="skills__sheet">
        {skills.map((group) => (
          <SkillCategory key={group.domain} domain={group.domain} items={group.items} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
