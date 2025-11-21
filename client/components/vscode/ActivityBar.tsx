import React from 'react';
import { 
  FileText, 
  Search, 
  GitBranch, 
  Play, 
  Package, 
  User, 
  Settings,
  Github,
  Mail,
  Linkedin
} from 'lucide-react';

interface ActivityBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ActivityBar({ activeTab, onTabChange }: ActivityBarProps) {
  const topItems = [
    { id: 'explorer', icon: FileText, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'source-control', icon: GitBranch, label: 'Source Control' },
    { id: 'run-debug', icon: Play, label: 'Run and Debug' },
    { id: 'extensions', icon: Package, label: 'Extensions' },
  ];

  const bottomItems = [
    { id: 'accounts', icon: User, label: 'Accounts' },
    { id: 'settings', icon: Settings, label: 'Manage' },
  ];

  const socialItems = [
    { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com' },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { id: 'email', icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <div className="vscode-activitybar w-12 h-full flex flex-col items-center py-2">
      {/* Top Navigation */}
      <div className="flex flex-col gap-1">
        {topItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              p-2 rounded-sm transition-colors relative group
              ${activeTab === item.id
                ? 'text-white bg-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
            title={item.label}
          >
            <item.icon size={20} className="md:w-6 md:h-6" />
            {activeTab === item.id && (
              <div className="absolute left-0 top-0 w-0.5 h-full bg-white rounded-r-sm" />
            )}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Social Links - hidden on small screens */}
      <div className="hidden md:flex flex-col gap-1 mb-2">
        {socialItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-sm transition-colors text-gray-400 hover:text-white hover:bg-white/5 group"
            title={item.label}
          >
            <item.icon size={16} />
          </a>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-1">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              p-2 rounded-sm transition-colors
              ${activeTab === item.id
                ? 'text-white bg-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
            title={item.label}
          >
            <item.icon size={16} className="md:w-5 md:h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
