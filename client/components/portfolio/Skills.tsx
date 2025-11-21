import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export function Skills() {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3', level: 90, category: 'frontend' },
    { name: 'TailwindCSS', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'Vue.js', level: 70, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'FastAPI', level: 75, category: 'backend' },
    { name: 'GraphQL', level: 70, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },

    // Database
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'PostgreSQL', level: 75, category: 'database' },
    { name: 'Redis', level: 70, category: 'database' },
    { name: 'Firebase', level: 75, category: 'database' },

    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    { name: 'Vite', level: 85, category: 'tools' },
    { name: 'Webpack', level: 70, category: 'tools' },

    // Other
    { name: 'UI/UX Design', level: 75, category: 'other' },
    { name: 'Testing', level: 80, category: 'other' },
    { name: 'Agile', level: 85, category: 'other' },
  ];

  const categories = {
    frontend: { label: 'Frontend', color: 'text-blue-400' },
    backend: { label: 'Backend', color: 'text-green-400' },
    database: { label: 'Database', color: 'text-yellow-400' },
    tools: { label: 'Tools & DevOps', color: 'text-purple-400' },
    other: { label: 'Other', color: 'text-pink-400' },
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-foreground">{skill.name}</span>
        <span className="text-xs text-syntax-number">{skill.level}%</span>
      </div>
      <div className="w-full bg-border rounded-full h-2">
        <div
          className="bg-primary rounded-full h-2 transition-all duration-500 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 max-w-6xl">
      {/* Code Header */}
      <div className="mb-6">
        <div className="text-syntax-comment text-sm font-mono mb-2">
          /**
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * Technical Skills & Proficiency
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * Constantly learning and improving
        </div>
        <div className="text-syntax-comment text-sm font-mono">
          */
        </div>
      </div>

      <div className="font-mono text-sm mb-6">
        <span className="text-syntax-keyword">interface</span>
        <span className="text-syntax-function"> SkillSet</span>
        <span className="text-white"> {`{`}</span>
      </div>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(categories).map(([categoryKey, categoryInfo]) => {
          const categorySkills = getSkillsByCategory(categoryKey);
          
          return (
            <div key={categoryKey} className="space-y-4">
              {/* Category Header */}
              <div className="font-mono text-sm ml-4">
                <span className={`${categoryInfo.color} font-semibold`}>
                  {categoryInfo.label}
                </span>
                <span className="text-white">: {`{`}</span>
              </div>

              {/* Skills in Category */}
              <div className="ml-8 space-y-3">
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>

              <div className="font-mono text-sm ml-4">
                <span className="text-white">{`},`}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing bracket */}
      <div className="font-mono text-sm mt-6">
        <span className="text-white">{`}`}</span>
      </div>

      {/* Learning Section */}
      <div className="mt-8 p-4 border border-border rounded-lg bg-vscode-selection/10">
        <div className="font-mono text-sm mb-3">
          <span className="text-syntax-comment">// Currently exploring</span>
        </div>
        <div className="font-mono text-sm space-y-1">
          <div>
            <span className="text-syntax-keyword">const</span>
            <span className="text-syntax-variable"> currentlyLearning</span>
            <span className="text-white"> = [</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="text-syntax-string">"Machine Learning"</div>
            <div className="text-syntax-string">"Rust"</div>
            <div className="text-syntax-string">"WebAssembly"</div>
            <div className="text-syntax-string">"Kubernetes"</div>
          </div>
          <div className="text-white">];</div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-6 p-4 border border-border rounded-lg bg-card/50">
        <div className="font-mono text-sm mb-3">
          <span className="text-syntax-comment">// Certifications & Achievements</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-foreground">AWS Certified Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-foreground">React Developer Certification</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-foreground">Google Analytics Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
