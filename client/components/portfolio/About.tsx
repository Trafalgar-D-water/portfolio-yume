import React from 'react';
import { User, Terminal, Cpu, Database, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel: Bio */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto border-r border-border">
        <div className="max-w-2xl">
          <div className="mb-8 text-muted-foreground">
            <span className="text-white">// personal-info</span> / bio
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-secondary">/**</span>
              <br />
              <span className="text-secondary">*</span> I have 5 years of experience in web development.
              <br />
              <span className="text-secondary">*</span> I specialize in building scalable, high-performance applications.
              <br />
              <span className="text-secondary">*</span> My passion lies in creating intuitive and dynamic user experiences.
              <br />
              <span className="text-secondary">*</span> I am always eager to learn new technologies and improve my skills.
              <br />
              <span className="text-secondary">*/</span>
            </p>

            <p>
              I started my journey as a self-taught developer, exploring the vast world of coding through online resources and open-source projects. Over the years, I've honed my skills in both frontend and backend technologies, allowing me to deliver complete and robust solutions.
            </p>

            <p>
              When I'm not coding, you can find me exploring new tech trends, contributing to the community, or simply enjoying a good cup of coffee while brainstorming my next big idea.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel: Code Snippet Showcase */}
      <div className="hidden md:flex flex-1 p-8 md:p-12 flex-col gap-6 overflow-y-auto bg-vscode-editor">
        <div className="text-muted-foreground">
          <span className="text-white">// Code snippet showcase:</span>
        </div>

        <div className="space-y-8">
          {/* Snippet 1 */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-lg relative group hover:border-secondary transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="https://github.com/priyanshupatnayak.png" alt="Profile" className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-secondary">@priyanshupatnayak</span>
                  <span className="text-xs text-muted-foreground">Created 5 months ago</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Terminal size={14} />
                <span>details</span>
              </div>
            </div>

            <div className="bg-vscode-editor p-4 rounded border border-border font-mono text-sm overflow-x-auto">
              <pre>
                <code className="language-typescript">
                  {`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Snippet 2 */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-lg relative group hover:border-secondary transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="https://github.com/priyanshupatnayak.png" alt="Profile" className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-secondary">@priyanshupatnayak</span>
                  <span className="text-xs text-muted-foreground">Created 9 months ago</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Terminal size={14} />
                <span>details</span>
              </div>
            </div>

            <div className="bg-vscode-editor p-4 rounded border border-border font-mono text-sm overflow-x-auto">
              <pre>
                <code className="language-typescript">
                  {`export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
  return tuple;
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
