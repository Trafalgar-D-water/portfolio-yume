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
              <span className="text-secondary">*</span> I have 2.5+ years of experience as a backend engineer,
              <br />
              <span className="text-secondary">*</span> focused on building reliable, efficient, and scalable server-side systems.
              <br />
              <span className="text-secondary">*</span> I enjoy designing clean architectures, optimizing performance,
              <br />
              <span className="text-secondary">*</span> and ensuring that applications run smoothly under real-world load.
              <br />
              <span className="text-secondary">*/</span>
            </p>

            <p>
              My journey began as a self-taught developer, exploring programming through online resources and open-source projects. Over time, I developed strong proficiency in backend technologies and gained hands-on experience building production-grade systems.
            </p>

            <p>
              Outside of work, I enjoy learning new tools and technologies, contributing to the developer community, and discovering ideas that push my skills forward. When I’m not coding, you’ll probably find me reading about emerging tech or sketching out concepts for my next project over a cup of coffee.
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
                <img src="https://avatars.githubusercontent.com/u/155691673?v=4" alt="Profile" className="w-8 h-8 rounded-full" />
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
              <div className="font-mono">
                <div>
                  <span className="text-syntax-keyword">function</span> <span className="text-syntax-function">initializeModelChunk</span><span className="text-foreground">&lt;</span><span className="text-syntax-variable">T</span><span className="text-foreground">&gt;(</span><span className="text-syntax-variable">chunk</span><span className="text-foreground">:</span> <span className="text-syntax-variable">ResolvedModelChunk</span><span className="text-foreground">):</span> <span className="text-syntax-variable">T</span> <span className="text-foreground">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">value</span><span className="text-foreground">:</span> <span className="text-syntax-variable">T</span> <span className="text-foreground">=</span> <span className="text-syntax-function">parseModel</span><span className="text-foreground">(</span><span className="text-syntax-variable">chunk</span><span className="text-foreground">.</span><span className="text-syntax-variable">_response</span><span className="text-foreground">,</span> <span className="text-syntax-variable">chunk</span><span className="text-foreground">.</span><span className="text-syntax-variable">_value</span><span className="text-foreground">);</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">initializedChunk</span><span className="text-foreground">:</span> <span className="text-syntax-variable">InitializedChunk</span><span className="text-foreground">&lt;</span><span className="text-syntax-variable">T</span><span className="text-foreground">&gt;</span> <span className="text-foreground">=</span> <span className="text-foreground">(</span><span className="text-syntax-variable">chunk</span><span className="text-foreground">:</span> <span className="text-syntax-keyword">any</span><span className="text-foreground">);</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-variable">initializedChunk</span><span className="text-foreground">.</span><span className="text-syntax-variable">_status</span> <span className="text-foreground">=</span> <span className="text-syntax-variable">INITIALIZED</span><span className="text-foreground">;</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-variable">initializedChunk</span><span className="text-foreground">.</span><span className="text-syntax-variable">_value</span> <span className="text-foreground">=</span> <span className="text-syntax-variable">value</span><span className="text-foreground">;</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-keyword">return</span> <span className="text-syntax-variable">value</span><span className="text-foreground">;</span>
                </div>
                <div><span className="text-foreground">{`}`}</span></div>
              </div>
            </div>
          </div>

          {/* Snippet 2 */}
          <div className="bg-background border border-border rounded-lg p-6 shadow-lg relative group hover:border-secondary transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="https://avatars.githubusercontent.com/u/155691673?v=4" alt="Profile" className="w-8 h-8 rounded-full" />
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
              <div className="font-mono">
                <div>
                  <span className="text-syntax-keyword">export function</span> <span className="text-syntax-function">parseModelTuple</span><span className="text-foreground">(</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-variable">response</span><span className="text-foreground">:</span> <span className="text-syntax-variable">Response</span><span className="text-foreground">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-variable">value</span><span className="text-foreground">:</span> <span className="text-foreground">{`{+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>`}</span><span className="text-foreground">,</span>
                </div>
                <div>
                  <span className="text-foreground">):</span> <span className="text-syntax-keyword">any</span> <span className="text-foreground">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-keyword">const</span> <span className="text-syntax-variable">tuple</span><span className="text-foreground">:</span> <span className="text-foreground">[</span><span className="text-syntax-keyword">mixed</span><span className="text-foreground">,</span> <span className="text-syntax-keyword">mixed</span><span className="text-foreground">,</span> <span className="text-syntax-keyword">mixed</span><span className="text-foreground">,</span> <span className="text-syntax-keyword">mixed</span><span className="text-foreground">]</span> <span className="text-foreground">=</span> <span className="text-foreground">(</span><span className="text-syntax-variable">value</span><span className="text-foreground">:</span> <span className="text-syntax-keyword">any</span><span className="text-foreground">);</span>
                </div>
                <div className="pl-4">
                  <span className="text-syntax-keyword">return</span> <span className="text-syntax-variable">tuple</span><span className="text-foreground">;</span>
                </div>
                <div><span className="text-foreground">{`}`}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
