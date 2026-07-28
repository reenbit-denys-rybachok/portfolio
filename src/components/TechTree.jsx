import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Palette,
  Box,
  Server,
  Plug,
  Database,
  Link,
  Cloud,
  Bot,
} from 'lucide-react';
import './TechTree.css';

/* ── Category colour palette ── */
const CAT_COLORS = [
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#14b8a6',
  '#06b6d4',
  '#f97316',
  '#6366f1',
  '#a855f7',
];

/* ── Icons per category ── */
const CAT_ICONS = {
  'Programming Languages': Code2,
  'Frontend Frameworks': Layout,
  'UI Libraries & Styling': Palette,
  'State Management': Box,
  'Backend Frameworks': Server,
  'Backend Technologies': Plug,
  Database: Database,
  'APIs & Integrations': Link,
  'Cloud & DevOps': Cloud,
  'AI & Tools': Bot,
};

const DEFAULT_CAT_ICON = Code2;

/* ── Skill-level indicator (1–3 bars) ── */
function getSkillBars(skill) {
  const core = [
    'React',
    'JavaScript',
    'Material UI',
    'NestJS',
    'REST API',
    'Amazon Product Advertising API',
    'Browser Extension Development',
    'Codex',
    'ChatGPT',
  ];
  const popular = [
    'TypeScript',
    'Next.js',
    'Angular',
    'OAuth Authentication',
    'Social Login Providers',
    'Azure',
    'Tailwind CSS',
    'Fluent UI',
    'MongoDB',
    'PostgreSQL',
    'TypeORM',
    'Redux Toolkit',
    'Git',
    'Claude',
    'Google API',
    'Microsoft API',
  ];
  if (core.includes(skill)) return 3;
  if (popular.includes(skill)) return 2;
  return 1;
}

/* ── Single skill chip ── */
function TreeSkill({ name, color }) {
  const bars = getSkillBars(name);
  return (
    <motion.span
      className="tree-skill"
      style={{ '--cat-color': color }}
      initial={{ opacity: 0, scale: 0.85, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="tree-skill-dot" style={{ background: color }} />
      <span className="tree-skill-name">{name}</span>
      {bars > 0 && (
        <span className="tree-skill-proficiency">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`bar ${i <= bars ? 'filled' : ''}`}
              style={i <= bars ? { background: color } : undefined}
            />
          ))}
        </span>
      )}
    </motion.span>
  );
}

/* ── Category node ── */
function TreeCategory({ title, skills, color }) {
  const IconComponent = CAT_ICONS[title] || DEFAULT_CAT_ICON;

  return (
    <div className="tree-category-wrapper">
      <div className="tree-category" style={{ '--cat-color': color }}>
        <IconComponent
          className="tree-cat-icon"
          size={22}
          strokeWidth={1.5}
          style={{ color }}
        />
        <span className="tree-cat-name">{title}</span>
      </div>

      <div className="tree-sub-connector" style={{ '--cat-color': color }} />

      <div className="tree-skills-grid">
        {skills.length === 0 ? (
          <span className="tree-empty">No skills listed</span>
        ) : (
          skills.map((skill) => (
            <TreeSkill key={skill} name={skill} color={color} />
          ))
        )}
      </div>
    </div>
  );
}

/* ── Main Tree component ── */
function TechTree({ categories }) {
  return (
    <div className="tree-container">
      {/* Categories row */}
      <div className="tree-categories">
        {categories.map((cat, index) => (
          <TreeCategory
            key={cat.title}
            title={cat.title}
            skills={cat.skills}
            color={CAT_COLORS[index % CAT_COLORS.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default TechTree;
