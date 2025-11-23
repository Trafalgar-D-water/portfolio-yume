import React from 'react';
import { projects } from '../../data/projects';

interface ProjectsProps {
  selectedFilters?: string[];
}

export function Projects({ selectedFilters = [] }: ProjectsProps) {
  const filteredProjects = selectedFilters.length > 0
    ? projects.filter(project =>
      project.technologies.some(tech => selectedFilters.includes(tech))
    )
    : projects;

  const handleViewProject = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="h-full overflow-y-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-muted-foreground">
          <span className="text-white">// projects</span> / showcase
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-background border border-border rounded-lg overflow-hidden flex flex-col hover:border-secondary transition-colors group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => {
                    const getTechStyle = (t: string) => {
                      switch (t) {
                        case 'React': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
                        case 'Vue': return 'bg-green-500/10 text-green-400 border-green-500/20';
                        case 'Angular': return 'bg-red-500/10 text-red-400 border-red-500/20';
                        case 'Next.js': return 'bg-white/10 text-gray-200 border-white/20';
                        case 'Tailwind': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
                        case 'HTML': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
                        case 'CSS': return 'bg-blue-600/10 text-blue-300 border-blue-600/20';
                        case 'Framer Motion': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
                        case 'Web3': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
                        case 'Flutter': return 'bg-blue-400/10 text-blue-400 border-blue-400/20';
                        case 'Gatsby': return 'bg-purple-600/10 text-purple-400 border-purple-600/20';
                        default: return 'bg-secondary/10 text-secondary border-secondary/20';
                      }
                    };

                    return (
                      <span key={tech} className={`text-xs px-2 py-1 rounded border ${getTechStyle(tech)}`}>
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleViewProject(project.link)}
                  className="bg-secondary/10 hover:bg-secondary/20 text-white px-4 py-2 rounded text-sm transition-colors border border-transparent hover:border-secondary w-fit"
                >
                  view-project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
