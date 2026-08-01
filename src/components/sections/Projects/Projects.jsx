import React from 'react';
import Section from '../../ui/Section/Section';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';
import './Projects.css';

/**
 * Projects Component
 *
 * The featured project renders as a full-width panel with a hard-number
 * stat row; the remaining projects sit in a row below.
 */
function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" className="projects" title="Projects" index="02">
      {featured && <ProjectCard project={featured} />}
      <div className="projects__grid">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
