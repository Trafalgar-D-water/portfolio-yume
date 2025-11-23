import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  description: string[];
  technologies: string[];
  website?: string;
}

export function Experience() {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Software Engineer 1 (SDE-1)',
      company: 'Nissi computing Labs',
      location: 'Bengaluru, India',
      duration: '2024 - Present',
      type: 'Full-time',
      description: [
        'Designed and shipped backend services using Node.js, Redis, and PostgreSQL for high-traffic internal tools',
        'Introduced Docker-based microservice deployments, improving reliability and easing environment setup',
        'Built internal dashboards in React to monitor service health and request throughput',
        'Optimized database queries and caching layers, reducing API latency across critical endpoints',
        'Integrated CI/CD workflows on AWS, automating deployments and improving release confidence'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis', "Mongodb"],
      website: 'https://www.nissiagency.com/'
    },
    {
      id: '2',
      title: 'Backend Engineer ',
      company: 'Resonance',
      location: 'Bangalore, India',
      duration: '2024 - Present',
      type: 'Full-time',
      description: [
        'Developed scalable backend services in Node.js and Go, powering core features for customer platforms',
        'Implemented microservice communication patterns and improved service reliability under load',
        'Used MiniZinc (Python wrapper) to build optimization models for scheduling and allocation workflows',
        'Integrated external APIs, authentication layers, and internal analytics pipelines',
        'Improved performance of existing TypeScript services by refactoring bottleneck modules and query logic'
      ],
      technologies: ['nodejs', 'TypeScript', 'SASS', 'Redux', 'Jest', 'go', 'microservices', 'python(mini-zinc)'],
      website: 'https://digitalsolutions.com'
    },
    {
      id: '3',
      title: 'Freelance Java Full Stack Developer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: '2023 - 2024',
      type: 'Freelance',
      description: [
        'Delivered end-to-end web applications using Spring Boot, React, and MySQL for clients across multiple domains',
        'Built REST APIs, authentication modules, and real-time WebSocket features for e-commerce and SaaS products',
        'Optimized Hibernate queries and database schemas, improving load times for large datasets',
        'Managed hosting, CI/CD, and deployment pipelines on AWS for client projects',
        'Handled client communication, requirements gathering, and long-term maintenance contracts'
      ],

      technologies: ['Java', 'Spring Boot', 'React', 'MySql', 'hybernate', 'websocket', 'AWS'],
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'text-green-400';
      case 'Part-time':
        return 'text-blue-400';
      case 'Contract':
        return 'text-yellow-400';
      case 'Freelance':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl">
      {/* Code Header */}
      <div className="mb-6">
        <div className="text-syntax-comment text-sm font-mono mb-2">
          // Professional Experience Timeline
        </div>
        <div className="font-mono text-sm">
          <span className="text-syntax-keyword">const</span>
          <span className="text-syntax-variable"> workExperience</span>
          <span className="text-white"> = [</span>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>

            {/* Experience Card */}
            <div className="ml-12 p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-syntax-function mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg text-syntax-variable">{exp.company}</span>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className={`text-sm font-mono px-2 py-1 rounded border border-border ${getTypeColor(exp.type)}`}>
                  {exp.type}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <div className="text-syntax-comment text-sm font-mono mb-2">
                  // Key responsibilities and achievements:
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-syntax-keyword mt-1.5 w-1 h-1 bg-current rounded-full flex-shrink-0"></span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-syntax-comment text-sm font-mono mb-2">
                  // Technologies used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-vscode-selection text-syntax-variable border border-border font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code style object end */}
              <div className="mt-4 font-mono text-xs text-syntax-comment">
                {`// Experience ${index + 1} of ${experiences.length}`}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing bracket */}
      <div className="font-mono text-sm mt-6">
        <span className="text-white">];</span>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 p-4 border border-border rounded-lg bg-vscode-selection/10">
        <div className="font-mono text-sm mb-3">
          <span className="text-syntax-comment">// Career Summary</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-syntax-number">2.5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-syntax-number">20+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-syntax-number">5+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  );
}
