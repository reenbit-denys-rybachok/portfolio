import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      'JavaScript',
      'TypeScript'
    ]
  },
  {
    title: 'Frontend Frameworks',
    skills: [
      'React',
      'Next.js',
      'Angular'
    ]
  },
  {
    title: 'UI Libraries & Styling',
    skills: [
      'Tailwind CSS',
      'Material UI',
      'Fluent UI'
    ]
  },
  {
    title: 'State Management',
    skills: [
      'Redux Toolkit'
    ]
  },
  {
    title: 'Backend Frameworks',
    skills: [
      'NestJS',
      'Fastify'
    ]
  },
  {
    title: 'Backend Technologies',
    skills: [
      'REST API',
      'WebSockets'
    ]
  },
  {
    title: 'Database',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Prisma',
      'TypeORM'
    ]
  },
  {
    title: 'APIs & Integrations',
    skills: [
      'Google API',
      'Microsoft API',
      'Amazon Product Advertising API',
      'OAuth Authentication',
      'Social Login Providers'
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Azure',
      'Git',
      'Browser Extension Development'
    ]
  },
  {
    title: 'AI & Tools',
    skills: [
      'Claude',
      'Codex',
      'ChatGPT',
    ]
  }
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills