import React from 'react';
import Section from '../../ui/Section/Section';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';
import './Projects.css';

/**
 * Projects Component
 * 
 * Projects section displaying portfolio projects in a grid layout.
 * Maps over projects data and renders each project using ProjectCard component.
 * 
 * @returns {JSX.Element} Projects section with grid of project cards
 */
function Projects() {
  return (
    <Section id="projects" className="projects" title="Projects">
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            features={project.features}
            github={project.github}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
