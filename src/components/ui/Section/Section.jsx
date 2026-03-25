import React from 'react';
import Container from '../Container/Container';
import useScrollReveal from '../../../hooks/useScrollReveal';
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
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });

  return (
    <section id={id} className={sectionClasses}>
      <Container>
        {title && (
          <h2 ref={titleRef} className="section__title reveal">{title}</h2>
        )}
        <div ref={contentRef} className="section__content reveal reveal--delay-1">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default Section;
