import React from 'react';
import './ProjectCard.css';

/**
 * ProjectCard Component
 *
 * Renders a project as a spec panel: title + status, a short
 * description, tech stack as monospace labels (grouped by
 * Backend/Frontend for the featured project), an optional hard-number
 * metrics row, and repo links.
 *
 * @param {Object} props
 * @param {Object} props.project
 */
function ProjectCard({ project }) {
  const { title, subtitle, status, statusLabel, description, stacks, tech, metrics, links, featured } = project;

  const cardClasses = ['project-card', featured && 'project-card--featured'].filter(Boolean).join(' ');

  return (
    <article className={cardClasses}>
      <header className="project-card__header">
        <h3 className="project-card__title font-display">
          {title}
          {subtitle && <span className="project-card__subtitle">— {subtitle}</span>}
        </h3>
        {statusLabel && (
          <span className={`project-card__status project-card__status--${status}`}>
            <span className="project-card__status-dot" aria-hidden="true" />
            {statusLabel}
          </span>
        )}
      </header>

      <p className="project-card__description">{description}</p>

      {stacks ? (
        <dl className="project-card__stacks">
          {stacks.map((stack) => (
            <div className="project-card__stack-row" key={stack.label}>
              <dt className="project-card__stack-label mono">{stack.label}</dt>
              <dd className="project-card__stack-items mono">{stack.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="project-card__tech mono">{tech.join(' · ')}</p>
      )}

      {metrics && metrics.length > 0 && (
        <dl className="project-card__metrics">
          {metrics.map((metric) => (
            <div className="project-card__metric" key={metric.label}>
              <dt className="project-card__metric-value mono tabular-nums">{metric.value}</dt>
              <dd className="project-card__metric-label">{metric.label}</dd>
            </div>
          ))}
        </dl>
      )}

      {links && links.length > 0 && (
        <div className="project-card__links">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <span className="project-card__link-icon" aria-hidden="true">
                {link.icon === 'play' ? (
                  <svg viewBox="0 0 12 12" width="9" height="9" focusable="false">
                    <path d="M3 2L10 6L3 10Z" fill="currentColor" />
                  </svg>
                ) : (
                  '→'
                )}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
