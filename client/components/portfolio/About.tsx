import React from 'react';
import { Code2, Coffee, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <div className="p-4 md:p-6 max-w-4xl" style={{ overflow: "scroll" }}>
      {/* Code Header Comment */}
      <div className="mb-6">
        <div className="text-syntax-comment text-sm font-mono mb-2">
          /**
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * @author Priyanshu Patnayak
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * @description Full Stack Developer & UI/UX Enthusiast
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * @version 2.0.1
        </div>
        <div className="text-syntax-comment text-sm font-mono">
          */
        </div>
      </div>

      {/* Code-style About */}
      <div className="font-mono text-sm space-y-4">
        <div className="flex items-start gap-2">
          <span className="text-syntax-keyword">const</span>
          <span className="text-syntax-variable">developer</span>
          <span className="text-white">=</span>
          <span className="text-white">{`{`}</span>
        </div>

        <div className="ml-4 space-y-2">
          <div className="flex gap-2">
            <span className="text-syntax-function">name</span>
            <span className="text-white">:</span>
            <span className="text-syntax-string">"Priyanshu Patnayak"</span>
            <span className="text-white">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-syntax-function">role</span>
            <span className="text-white">:</span>
            <span className="text-syntax-string">"Full Stack Developer"</span>
            <span className="text-white">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-syntax-function">location</span>
            <span className="text-white">:</span>
            <span className="text-syntax-string">"India"</span>
            <span className="text-white">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-syntax-function">experience</span>
            <span className="text-white">:</span>
            <span className="text-syntax-number">3</span>
            <span className="text-white">,</span>
            <span className="text-syntax-comment">// years</span>
          </div>

          <div className="flex gap-2">
            <span className="text-syntax-function">skills</span>
            <span className="text-white">:</span>
            <span className="text-white">[</span>
          </div>

          <div className="ml-4 space-y-1">
            <div className="text-syntax-string">"React"</div>
            <div className="text-syntax-string">"TypeScript"</div>
            <div className="text-syntax-string">"Node.js"</div>
            <div className="text-syntax-string">"Python"</div>
            <div className="text-syntax-string">"AWS"</div>
            <div className="text-syntax-string">"Docker"</div>
          </div>

          <div className="text-white">],</div>

          <div className="flex gap-2">
            <span className="text-syntax-function">passions</span>
            <span className="text-white">:</span>
            <span className="text-white">[</span>
          </div>

          <div className="ml-4 space-y-1">
            <div className="text-syntax-string">"Clean Code"</div>
            <div className="text-syntax-string">"User Experience"</div>
            <div className="text-syntax-string">"Problem Solving"</div>
            <div className="text-syntax-string">"Open Source"</div>
          </div>

          <div className="text-white">],</div>

          <div className="flex gap-2">
            <span className="text-syntax-function">currentlyLearning</span>
            <span className="text-white">:</span>
            <span className="text-syntax-string">"Machine Learning"</span>
            <span className="text-white">,</span>
          </div>

          <div className="flex gap-2">
            <span className="text-syntax-function">funFact</span>
            <span className="text-white">:</span>
            <span className="text-syntax-string">"I debug with console.log() and I'm not ashamed"</span>
          </div>
        </div>

        <div className="text-white">{`};`}</div>
      </div>

      {/* Personal Description */}
      <div className="mt-8 space-y-4 text-foreground">
        <h2 className="text-xl font-semibold text-syntax-function">About Me</h2>
        <p className="leading-relaxed">
          Hello! I'm Priyanshu, a passionate full-stack developer with a love for creating
          innovative and user-friendly applications. With {" "}
          <span className="text-syntax-keyword">3+ years</span> of experience in the field,
          I specialize in modern web technologies and enjoy turning complex problems into
          simple, beautiful solutions.
        </p>

        <p className="leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing to
          open-source projects, or enjoying a good cup of coffee while reading about the
          latest trends in software development.
        </p>

        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-syntax-variable" />
            <span>Based in India</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} className="text-syntax-variable" />
            <span>Available for freelance</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Coffee size={16} className="text-syntax-variable" />
            <span>Coffee enthusiast</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Code2 size={16} className="text-syntax-variable" />
            <span>Always learning</span>
          </div>
        </div>
      </div>
    </div>
  );
}
