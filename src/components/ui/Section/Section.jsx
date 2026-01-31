import React from 'react';
import Container from '../Container/Container';
import './Section.css';

/**
 * Section Component
 * 
 * Reusable section wrapper component that provides semantic HTML structure
 * and consistent spacing. Automatically wraps content in a Container component
 * and optionally renders a section title.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered within the section
 * @param {string} [props.id] - Unique identifier for the section (for anchor links)
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.title] - Optional section title to display as h2 heading
 * @returns {JSX.Element} Semantic section element with container and optional title
 */
function Section({ children, id, className = '', title }) {
  const sectionClasses = `section ${className}`.trim();

  return (
    <section id={id} className={sectionClasses}>
      <Container>
        {title && (
          <h2 className="section__title">{title}</h2>
        )}
        <div className="section__content">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default Section;
