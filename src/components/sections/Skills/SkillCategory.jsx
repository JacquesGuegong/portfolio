import React from 'react';
import './SkillCategory.css';

/**
 * SkillCategory Component
 * 
 * Reusable component for displaying a category of skills.
 * Shows category title and renders skills as badge/tag list.
 * 
 * @param {Object} props - Component props
 * @param {string} props.category - Category name (e.g., "Frontend", "Backend")
 * @param {string[]} props.skills - Array of skills in this category
 * @returns {JSX.Element} Skill category section with title and skill badges
 */
function SkillCategory({ category, skills }) {
  return (
    <div className="skill-category">
      <h3 className="skill-category__title">{category}</h3>
      <ul className="skill-category__list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-category__item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCategory;
