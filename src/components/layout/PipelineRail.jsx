import React from 'react';
import useActiveSection from '../../hooks/useActiveSection';
import './PipelineRail.css';

/**
 * PipelineRail
 *
 * The portfolio's signature element: a fixed vertical rail with one
 * node per section. The node for the section currently in view fills
 * solid brass — a direct metaphor for a CI/CD pipeline stage moving
 * from pending to green. Doubles as in-page navigation.
 */
const NODES = [
  { id: 'hero', index: '01', label: 'Intro' },
  { id: 'projects', index: '02', label: 'Projects' },
  { id: 'skills', index: '03', label: 'Skills' },
  { id: 'about', index: '04', label: 'About' },
  { id: 'education', index: '05', label: 'Education' },
  { id: 'contact', index: '06', label: 'Contact' },
];

function PipelineRail() {
  const activeId = useActiveSection(NODES.map((node) => node.id));

  const handleClick = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="pipeline-rail" aria-label="Section progress">
      <ol className="pipeline-rail__list">
        {NODES.map((node) => {
          const isActive = activeId === node.id;
          return (
            <li key={node.id} className="pipeline-rail__item">
              <a
                href={`#${node.id}`}
                className={`pipeline-rail__node${isActive ? ' is-active' : ''}`}
                onClick={(event) => handleClick(event, node.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="pipeline-rail__dot" aria-hidden="true" />
                <span className="pipeline-rail__tag mono">
                  {node.index} · {node.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default PipelineRail;
