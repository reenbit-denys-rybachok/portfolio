import TechTree from './TechTree';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend Frameworks',
    skills: ['React', 'Next.js', 'Angular'],
  },
  {
    title: 'UI Libraries & Styling',
    skills: ['Tailwind CSS', 'Material UI', 'Fluent UI'],
  },
  {
    title: 'State Management',
    skills: ['Redux Toolkit'],
  },
  {
    title: 'Backend Frameworks',
    skills: ['NestJS', 'Fastify'],
  },
  {
    title: 'Backend Technologies',
    skills: ['REST API', 'WebSockets'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'TypeORM'],
  },
  {
    title: 'APIs & Integrations',
    skills: [
      'Google API',
      'Microsoft API',
      'Amazon Product Advertising API',
    ],
  },
  {
    title: 'Authentication & Payments',
    skills: ['OAuth Authentication', 'Social Login Providers', 'Stripe'],
  },
  {
    title: 'Project Management & Cloud',
    skills: ['Jira', 'Azure'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Browser Extension Development'],
  },
  {
    title: 'AI & Tools',
    skills: ['Codex', 'ChatGPT', 'Claude'],
  },
  {
    title: 'Code Quality Tools',
    skills: ['ESLint', 'Prettier', 'Husky'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <TechTree categories={skillCategories} />
      </div>
    </section>
  );
}

export default Skills;
