import React from 'react';
import Section from '../../ui/Section/Section';
import { personalInfo } from '../../../data/personal';
import './Contact.css';

/**
 * Contact Component
 *
 * The pipeline's terminal node — direct endpoints, no form.
 */
function Contact() {
  const { email, github, linkedin, location, resume } = personalInfo;

  const endpoints = [
    { label: 'Email', value: email, href: `mailto:${email}`, external: false },
    { label: 'GitHub', value: 'github.com/JacquesGuegong', href: github, external: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/jacquesduvalguegong', href: linkedin, external: true },
    { label: 'Resume', value: 'Download PDF', href: resume.url, external: true },
  ];

  return (
    <Section id="contact" className="contact" title="Contact" index="07">
      <p className="contact__intro">
        Open to backend and AI-integration roles. Based in {location} — email is the fastest way to reach me.
      </p>
      <ul className="contact__endpoints">
        {endpoints.map((endpoint) => (
          <li key={endpoint.label} className="contact__endpoint">
            <span className="contact__endpoint-label mono">{endpoint.label}</span>
            <a
              href={endpoint.href}
              target={endpoint.external ? '_blank' : undefined}
              rel={endpoint.external ? 'noopener noreferrer' : undefined}
              className="contact__endpoint-value"
            >
              {endpoint.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Contact;
