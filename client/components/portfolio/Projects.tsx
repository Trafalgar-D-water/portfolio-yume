import React from 'react';
import { ExternalLink, Github, Code2, Layout, Database, Server, ChevronDown, Check } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: string;
}

interface ProjectsProps {
  selectedFilters?: string[];
}

export function Projects({ selectedFilters = [] }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: '1',
      title: '_ui-animations',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      technologies: ['React', 'Framer Motion'],
      category: 'React',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: '_tetris-game',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      technologies: ['React', 'Canvas'],
      category: 'React',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: '_ethereum',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      technologies: ['Vue', 'Web3'],
      category: 'Vue',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: '_portfolio-v2',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      technologies: ['Next.js', 'Tailwind'],
      category: 'Next.js',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedFilters.length === 0) return true;
    // Check if project matches any of the selected filters
    // A project matches if its category matches OR if any of its technologies match
    return selectedFilters.includes(project.category) ||
      project.technologies.some(tech => selectedFilters.includes(tech));
  });

  return (
    <div className="h-full flex overflow-hidden relative">
      {/* Background Gradient Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Projects Grid */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="bg-vscode-activitybar border border-border rounded-lg overflow-hidden flex flex-col hover:border-secondary transition-colors">
              <div className="p-4 border-b border-border flex items-center gap-2">
                <span className="text-secondary font-bold text-sm">Project {index + 1}</span>
                <span className="text-muted-foreground text-sm">// {project.title}</span>
              </div>

              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-vscode-editor/80 p-1 rounded">
                  {project.category === 'React' && <Code2 size={16} className="text-blue-400" />}
                  {project.category === 'Vue' && <Layout size={16} className="text-green-400" />}
                  {project.category === 'Next.js' && <Server size={16} className="text-white" />}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <button className="bg-secondary/10 hover:bg-secondary/20 text-white px-4 py-2 rounded text-sm transition-colors border border-transparent hover:border-secondary w-fit">
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
