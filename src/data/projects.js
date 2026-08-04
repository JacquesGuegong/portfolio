/**
 * Projects Data
 *
 * Portfolio projects with details, technologies, and links.
 */

export const projects = [
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    status: 'live',
    statusLabel: 'Live',
    featured: true,
    description:
      'Full-stack mobile application — a Spring Boot REST API with JWT authentication, paired with a React Native iOS/Android/Web frontend.',
    stacks: [
      {
        label: 'Backend',
        items: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'JWT', 'Spring Security', 'JUnit 5', 'Flyway', 'Docker', 'GitHub Actions', 'Claude AI API'],
      },
      {
        label: 'Frontend',
        items: ['React Native', 'Expo', 'TypeScript'],
      },
    ],
    metrics: [
      { value: '4', label: 'AI features integrated' },
      { value: '8', label: 'Tests passing — unit · integration · repository' },
      { value: '3', label: 'CI/CD pipeline jobs — all green' },
      { value: '100MB', label: 'Docker runtime image, multi-stage build' },
    ],
    links: [
      { label: 'Backend repo', url: 'https://github.com/JacquesGuegong/personal-finance-app' },
      { label: 'Frontend repo', url: 'https://github.com/JacquesGuegong/personal-finance-mobile' },
      { label: 'Watch demo', url: 'https://youtu.be/b7chZd7F0GY', icon: 'play' },
    ],
  },
  {
    id: 'ai-document-intelligence',
    title: 'AI Document Intelligence Platform',
    status: 'in-development',
    statusLabel: 'In Development',
    description:
      'A SaaS RAG pipeline — documents are ingested, chunked, embedded, retrieved, and answered with citations. Chose pgvector over Pinecone after benchmarking latency, and cut response time 35% by fixing a batching inefficiency.',
    tech: ['Python', 'FastAPI', 'TypeScript', 'React', 'LangChain', 'OpenAI API', 'pgvector', 'PostgreSQL', 'Docker', 'Stripe'],
    links: [],
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    description:
      'Delivered through a full Agile SDLC — JWT auth and RBAC, real-time search under 150ms, and SQL indexing work that cut load times 40%.',
    tech: ['React', 'TypeScript', 'Django', 'MySQL'],
    links: [{ label: 'View repo', url: 'https://github.com/mohsinshah04/Library-Management-System' }],
  },
  {
    id: 'gym-management',
    title: 'Gym Management App',
    subtitle: 'Senior Design',
    description:
      'Led API design for a 3-person Agile team. Cross-platform React Native app running a 60fps UI, delivered on schedule.',
    tech: ['React Native', 'Django REST API', 'iOS & Android'],
    links: [{ label: 'View repo', url: 'https://github.com/PointAToB/App' }],
  },
];

export default projects;
