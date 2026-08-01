import React from 'react';
import Container from '../Container/Container';
import useScrollReveal from '../../../hooks/useScrollReveal';
import './Section.css';

/**
 * Section Component
 *
 * Reusable section wrapper. When given an `index` and `title`, renders
 * a left-aligned, numbered header (e.g. "02 — Projects") matching the
 * pipeline rail's numbering, instead of a centered heading.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.id]
 * @param {string} [props.className]
 * @param {string} [props.title] - Section heading
 * @param {string} [props.index] - Two-digit index shown before the title (e.g. "02")
 * @returns {JSX.Element}
 */
function Section({ children, id, className = '', title, index }) {
  const sectionClasses = `section ${className}`.trim();
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id={id} className={sectionClasses}>
      <Container>
        {title && (
          <div ref={headerRef} className="section__header reveal">
            {index && <span className="section__index mono">{index}</span>}
            <h2 className="section__title font-display">{title}</h2>
          </div>
        )}
        <div ref={contentRef} className="section__content reveal">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default Section;
