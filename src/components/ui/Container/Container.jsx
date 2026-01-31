import React from 'react';
import './Container.css';

/**
 * Container Component
 * 
 * Reusable layout container component that provides consistent max-width
 * and horizontal padding across the application. Wraps content sections
 * to maintain proper spacing and readability.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be wrapped
 * @param {string} [props.className] - Additional CSS classes to apply
 * @returns {JSX.Element} Container wrapper element
 */
function Container({ children, className = '' }) {
  const containerClasses = `container ${className}`.trim();

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}

export default Container;
