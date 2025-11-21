import React from 'react';
import { GitBranch, Bell, Settings, Zap, CheckCircle } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="vscode-statusbar h-6 flex items-center justify-between px-2 text-xs text-white">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer">
          <GitBranch size={14} />
          <span>main</span>
        </div>
        
        <div className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer">
          <CheckCircle size={14} className="text-green-400" />
          <span>No issues</span>
        </div>
        
        <div className="hover:bg-white/10 px-1 rounded cursor-pointer">
          Portfolio v2.0.1
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="hover:bg-white/10 px-1 rounded cursor-pointer">
          Ln 42, Col 16
        </div>
        
        <div className="hover:bg-white/10 px-1 rounded cursor-pointer">
          Spaces: 2
        </div>
        
        <div className="hover:bg-white/10 px-1 rounded cursor-pointer">
          UTF-8
        </div>
        
        <div className="hover:bg-white/10 px-1 rounded cursor-pointer">
          TypeScript JSX
        </div>

        <div className="flex items-center gap-1">
          <div className="hover:bg-white/10 p-1 rounded cursor-pointer">
            <Bell size={14} />
          </div>
          <div className="hover:bg-white/10 p-1 rounded cursor-pointer">
            <Settings size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
