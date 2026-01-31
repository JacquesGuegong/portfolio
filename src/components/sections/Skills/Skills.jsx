import React from 'react';
import Section from '../../ui/Section/Section';
import SkillCategory from './SkillCategory';
import { skills } from '../../../data/skills';
import './Skills.css';

/**
 * Skills Component
 * 
 * Skills section displaying technical skills organized by category.
 * Maps over skills data and renders each category using SkillCategory component.
 * 
 * @returns {JSX.Element} Skills section with grid of skill categories
 */
function Skills() {
  // Convert skills object to array of [category, skillsArray] pairs
  const skillCategories = Object.entries(skills);

  return (
    <Section id="skills" className="skills" title="Skills">
      <div className="skills__grid">
        {skillCategories.map(([category, skillsList]) => (
          <SkillCategory
            key={category}
            category={category}
            skills={skillsList}
          />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
