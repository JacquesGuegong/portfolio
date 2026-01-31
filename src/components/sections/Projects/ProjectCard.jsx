import React from 'react';
import Button from '../../ui/Button/Button';
import './ProjectCard.css';

/**
 * ProjectCard Component
 * 
 * Reusable card component for displaying individual project information.
 * Shows title, description, tech stack, features, and optional GitHub link.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string[]} props.tech - Array of technologies used
 * @param {string[]} props.features - Array of project features
 * @param {string|null} props.github - GitHub repository URL (optional)
 * @returns {JSX.Element} Project card with all project details
 */
function ProjectCard({ title, description, tech, features, github }) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        
        <div className="project-card__tech">
          <h4 className="project-card__tech-title">Technologies</h4>
          <ul className="project-card__tech-list">
            {tech.map((technology, index) => (
              <li key={index} className="project-card__tech-item">
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card__features">
          <h4 className="project-card__features-title">Key Features</h4>
          <ul className="project-card__features-list">
            {features.map((feature, index) => (
              <li key={index} className="project-card__features-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {github && (
          <div className="project-card__actions">
            <Button
              variant="outline"
              size="medium"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__button"
            >
              View on GitHub
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
