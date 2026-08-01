/**
 * Personal Information Data
 *
 * Centralized source of truth for personal profile information.
 */

export const personalInfo = {
  name: 'Jacques Duval Guegong',
  firstName: 'Jacques',
  lastName: 'Duval Guegong',
  role: 'Software Engineer',
  location: 'Milwaukee, WI',

  email: 'jamesduval1991@gmail.com',
  linkedin: 'https://linkedin.com/in/jacquesduvalguegong',
  github: 'https://github.com/JacquesGuegong',

  resume: {
    url: '/assets/documents/Jacques_Duval_Guegong_Resume.pdf',
    downloadText: 'Download Resume',
  },

  hero: {
    eyebrow: 'Software Engineer — Milwaukee, WI',
    headline: 'I build backend systems that survive contact with production.',
    description:
      'Java and Spring Boot APIs, Claude AI integrated into mobile products, shipped through Docker and GitHub Actions CI/CD.',
    ctaPrimary: { text: 'View the work', href: '#projects' },
    ctaSecondary: { text: 'Email', href: 'mailto:jamesduval1991@gmail.com' },
    metrics: [
      { value: '04', label: 'Projects shipped' },
      { value: '06', label: 'Technical domains' },
      { value: '100%', label: 'CI/CD pipelines green' },
    ],
  },
};

export default personalInfo;
