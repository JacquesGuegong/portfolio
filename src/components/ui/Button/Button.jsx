import React from 'react';
import './Button.css';

/**
 * Button Component
 * 
 * Reusable button component that can render as either a semantic <button>
 * or an <a> element depending on whether an href prop is provided.
 * Supports multiple variants and sizes for consistent UI patterns.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content/text
 * @param {string} [props.variant='primary'] - Button style variant: 'primary', 'secondary', or 'outline'
 * @param {string} [props.size='medium'] - Button size: 'small', 'medium', or 'large'
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.href] - If provided, renders as <a> instead of <button>
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {boolean} [props.disabled=false] - Disabled state (only applies to button element)
 * @param {string} [props.type='button'] - Button type: 'button', 'submit', or 'reset'
 * @param {string} [props.target] - Link target (e.g., '_blank' for external links)
 * @param {string} [props.rel] - Link rel attribute (e.g., 'noopener noreferrer' for external links)
 * @returns {JSX.Element} Button or anchor element with appropriate styling
 */
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
}) {
  // Build className string with base, variant, size, and custom classes
  const baseClasses = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  const buttonClasses = [baseClasses, variantClass, sizeClass, disabledClass, className]
    .filter(Boolean)
    .join(' ');

  // Common props for both button and anchor
  const commonProps = {
    className: buttonClasses,
    onClick: disabled ? undefined : onClick,
  };

  // Render as anchor if href is provided
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        aria-disabled={disabled}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  // Render as button element
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      {...commonProps}
    >
      {children}
    </button>
  );
}

export default Button;
