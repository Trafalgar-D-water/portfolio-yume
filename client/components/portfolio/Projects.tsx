import React from 'react';
import { ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'frontend' | 'fullstack' | 'backend';
}

export function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      type: 'fullstack'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'TailwindCSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      type: 'fullstack'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A VS Code themed portfolio website showcasing projects and skills with a unique developer-focused design.',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      type: 'frontend'
    },
    {
      id: '4',
      title: 'API Gateway Service',
      description: 'A microservices API gateway with rate limiting, authentication, and load balancing capabilities.',
      technologies: ['Node.js', 'Redis', 'Docker', 'AWS'],
      githubUrl: 'https://github.com',
      type: 'backend'
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'frontend':
        return <Globe size={16} className="text-blue-400" />;
      case 'backend':
        return <Database size={16} className="text-green-400" />;
      case 'fullstack':
        return <Code2 size={16} className="text-purple-400" />;
      default:
        return <Code2 size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl">
      {/* Code Header */}
      <div className="mb-6">
        <div className="text-syntax-comment text-sm font-mono mb-2">
          // My Featured Projects
        </div>
        <div className="font-mono text-sm">
          <span className="text-syntax-keyword">const</span>
          <span className="text-syntax-variable"> projects</span>
          <span className="text-white"> = [</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {projects.map((project, index) => (
          <div key={project.id} className="border border-border rounded-lg p-6 bg-card hover:bg-card/80 transition-colors">
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                {getProjectIcon(project.type)}
                <h3 className="text-lg font-semibold text-syntax-function">
                  {project.title}
                </h3>
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded hover:bg-white/10 transition-colors"
                    title="View Source"
                  >
                    <Github size={16} className="text-gray-400 hover:text-white" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded hover:bg-white/10 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} className="text-gray-400 hover:text-white" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded bg-vscode-selection text-syntax-variable border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Code-style object */}
            <div className="mt-4 font-mono text-xs text-syntax-comment">
              {`// ${project.type} project ${index + 1}`}
            </div>
          </div>
        ))}
      </div>

      {/* Closing bracket */}
      <div className="font-mono text-sm">
        <span className="text-white">];</span>
      </div>

      {/* Additional Section */}
      <div className="mt-8 p-4 border border-border rounded-lg bg-vscode-selection/10">
        <div className="font-mono text-sm mb-2">
          <span className="text-syntax-comment">// Want to see more?</span>
        </div>
        <p className="text-muted-foreground">
          These are just a few of my featured projects. Check out my{" "}
          <a 
            href="https://github.com" 
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>{" "}
          for more repositories and contributions to open-source projects.
        </p>
      </div>
    </div>
  );
}
