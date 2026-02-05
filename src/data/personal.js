/**
 * Personal Information Data
 * 
 * Centralized source of truth for personal profile information.
 * Used across multiple components to maintain consistency.
 */

export const personalInfo = {
  // Basic Information
  name: 'Jacques Duval Guegong',
  firstName: 'Jacques',
  lastName: 'Duval Guegong',
  title: 'Computer Science Graduate | Incoming AI/ML Master\'s Student',
  role: 'AI/ML Master\'s Student & Software Engineer',
  description: 'Passionate software engineer with a strong foundation in full-stack development and a drive to build innovative AI-driven applications. I combine technical expertise with creative problem-solving to deliver scalable, real-world solutions.',
  
  // Contact Information
  email: 'Jamesduval1991@gmail.com',
  
  // Social Links
  linkedin: 'www.linkedin.com/in/jacques-duval-bb7945206',
  github: 'https://github.com/JacquesGuegong',
  
  // Photo
  photo: '/assets/images/1.png', 
  
  // Resume/CV
  resume: {
    url: '/assets/documents/Jacques_Duval_Guegong_Resume.pdf',
    downloadText: 'Download Resume',
  },
  
  // Hero Section Content
  hero: {
    greeting: 'Hello, I\'m',
    name: 'Jacques Duval Guegong',
    subtitle: 'AI/ML Master\'s Student & Software Engineer',
    description: 'Passionate software engineer with a strong foundation in full-stack development and a drive to build innovative AI-driven applications.',
    ctaText: 'View My Work',
    ctaLink: '#projects',
  },
};

export default personalInfo;
