import vc1 from '../assets/vc-1.png';
import vc2 from '../assets/vc-2.png';
import vc3 from '../assets/vc-3.png';
import vc4 from '../assets/vc-4.png';
import vc5 from '../assets/vc-5.png';
import nm1 from '../assets/nm-1.png';
import nm2 from '../assets/nm-2.png';
import nm3 from '../assets/nm-3.png';
import nm4 from '../assets/nm-4.png';
import nm5 from '../assets/nm-5.png';
import up1 from '../assets/up-1.png';
import up2 from '../assets/up-2.png';
import up3 from '../assets/up-3.png';
import up4 from '../assets/up-4.png';

export const projects = [
  {
    title: 'Values Cart',
    role: 'Full-Stack Developer',
    description:
      'A comprehensive platform consisting of four interconnected applications: a cross-browser extension (Chrome, Safari, Edge), a marketplace for Ukrainian-made products, an admin panel for managing products and users, and a backend API. Users can discover Amazon products aligned with their personal values, browse categories like food, crafts, apparel, and home goods, and authenticate via social login (Google, Apple, LinkedIn, Facebook, Amazon).',
    technologies: [
      'React',
      'Node.js',
      'NestJS',
      'MongoDB',
      'Browser Extension',
      'Chrome API',
      'Edge API',
      'Safari API',
      'OAuth 2.0',
      'Amazon Product Advertising API',
      'Azure',
      'Stripe',
    ],
    highlights: [
      'Amazon',
      'Chrome Extension',
      'Safari Extension',
      'Edge Extension',
      'Marketplace',
      'Social Authentication',
      'Admin Panel',
      'Backend Services',
    ],
    detailedFeatures: [
      'Multi-browser support: Chrome, Safari, and Edge extensions',
      'Marketplace with categories',
      'Product search on Amazon with real-time results',
      'Social authentication: Google, Apple, LinkedIn, Facebook, Amazon',
      'User registration with email verification',
      'JWT authorization verification',
      'Admin panel for product and user management',
      'Backend services with MongoDB database',
      'Integration with Amazon Product Advertising API',
    ],
    images: [vc4, vc5, vc1, vc3, vc2],
  },
  {
    title: 'Nippi Marketer AI',
    role: 'Front-end Developer',
    description:
      'Cloud-based marketing platform for planning, managing, and analyzing marketing campaigns. The platform provides dashboards, analytics, budgeting, project management, and reporting tools.',
    technologies: [
      'React',
      'TypeScript',
      'Fluent UI',
      'Material UI',
      'Microsoft API',
      'Syncfusion',
    ],
    highlights: [
      'Marketing',
      'Analytics',
      'Dashboards',
      'Budget management',
      'Campaign planning',
      'Reporting tools',
    ],
    images: [nm1, nm2, nm3, nm4, nm5],
  },
  {
    title: 'Figure AI',
    role: 'Full-Stack Developer',
    description:
      'Admin panel for configuring and managing custom robotic components. It enabled users to define detailed technical specifications, generate manufacturing requests, manage product data, and work with structured forms, technical documentation, tables, and PDF-based model specifications.',
    technologies: [
      'Next',
      'TypeScript',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Tanstack',
    ],
    highlights: [
      'Technical specifications',
      'Manufacturing requests',
      'PDF models',
      'Data management',
    ],
  },
  {
    title: 'Uplifter',
    role: 'Front-end Developer',
    description:
      'Web-based platform for managing sports events throughout their entire lifecycle. It enables organizers to create and configure events, manage participant registrations, process results, and streamline complex workflows using dynamic forms and advanced configuration tools.',
    technologies: [
      'React',
      'TypeScript',
      'Angular',
      'React Hook Form',
      'Zod',
      'Tanstack',
    ],
    highlights: [
      'Event management',
      'Participant registration',
      'Results processing',
      'Dynamic Forms',
    ],
    images: [up1, up2, up3, up4],
  },
];
