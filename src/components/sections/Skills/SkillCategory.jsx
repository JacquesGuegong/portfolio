import React from 'react';
import './SkillCategory.css';

/**
 * SkillCategory Component
 *
 * One row of the skills spec sheet: a domain label beside its items.
 *
 * @param {Object} props
 * @param {string} props.domain
 * @param {string[]} props.items
 */
function SkillCategory({ domain, items }) {
  return (
    <div className="skill-row">
      <h3 className="skill-row__domain mono">{domain}</h3>
      <ul className="skill-row__items">
        {items.map((item) => (
          <li key={item} className="skill-row__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCategory;
