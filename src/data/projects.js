/**
 * Projects Data
 * 
 * Portfolio projects with details, technologies, and links.
 */

export const projects = [
  {
    id: 'library-management',
    title: 'Library Management System',
    description: 'A comprehensive full-stack web application for managing library operations, including book inventory, user management, and borrowing workflows.',
    tech: ['React', 'Django', 'MySQL', 'REST API', 'Axios'],
    features: [
      'User authentication and authorization',
      'CRUD operations for books and users',
      'Advanced search and filtering',
      'Real-time availability tracking',
      'Admin dashboard for library management'
    ],
    github: 'https://github.com/mohsinshah04/Library-Management-System',
   
  },
  {
    id: 'gym-management',
    title: 'Gym Management & Fitness App',
    description: 'A mobile fitness application that helps users track workouts, set goals, and monitor progress with an intuitive interface and persistent data storage.',
    tech: ['React Native', 'Django', 'REST API', 'Mobile Development'],
    features: [
      'User profile creation and management',
      'Workout logging and tracking',
      'Exercise library with instructions',
      'Progress visualization and analytics',
      'Cross-platform compatibility (iOS/Android)'
    ],
    github: 'https://github.com/PointAToB/App',
    
  },
  {
    id: 'mysql-database',
    title: 'Database Management Project',
    description: 'A comprehensive database design and management project demonstrating proficiency in MySQL, including schema design, query optimization, and data relationships.',
    tech: ['MySQL', 'Database Design', 'SQL', 'Data Modeling'],
    features: [
      'Normalized database schema design',
      'Complex SQL queries and joins',
      'Index optimization for performance',
      'Data integrity constraints',
    ],
    github: 'https://github.com/JacquesGuegong/SQL-Projects', 
    
  },
  {
    id: 'codecademy-react',
    title: 'React Learning Projects',
    description: 'Interactive React applications built during Codecademy coursework, showcasing component-based architecture, state management, and modern React patterns.',
    tech: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    features: [
      'Functional components and hooks',
      'State management with useState',
      'Component composition and reusability',
      'Event handling and user interactions',
      'Responsive design implementation'
    ],
   
  },
];

export default projects;
