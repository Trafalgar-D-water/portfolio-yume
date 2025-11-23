import React from 'react';
import { X, Code2, Palette, FileText, Briefcase, User, Mail } from 'lucide-react';

interface Tab {
  id: string;
  title: string;
  fileName: string;
  icon: React.ElementType;
  isDirty?: boolean;
}

interface EditorTabsProps {
  activeTab: string;
  openTabs: string[];
  onTabChange: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

export function EditorTabs({ activeTab, openTabs, onTabChange, onTabClose }: EditorTabsProps) {
  const allTabs: Tab[] = [
    {
      id: 'about',
      title: 'About Me',
      fileName: 'About.tsx',
      icon: User,
    },
    {
      id: 'projects',
      title: 'Projects',
      fileName: 'Projects.tsx',
      icon: Briefcase,
    },
    {
      id: 'skills',
      title: 'Skills',
      fileName: 'Skills.tsx',
      icon: Code2,
    },
    {
      id: 'experience',
      title: 'Experience',
      fileName: 'Experience.tsx',
      icon: FileText,
    },
    {
      id: 'contact',
      title: 'Contact',
      fileName: 'Contact.tsx',
      icon: Mail,
    },
  ];

  const visibleTabs = allTabs.filter(tab => openTabs.includes(tab.id));

  return (
    <div className="vscode-tabs h-10 flex items-center bg-vscode-tabs border-b border-border overflow-x-auto">
      <div className="flex min-w-max">
        {visibleTabs.map((tab) => (
          <div
            key={tab.id}
            className={`
              vscode-tab h-10 flex items-center gap-2 px-3 cursor-pointer group
              border-r border-border min-w-0 max-w-48 flex-shrink-0
              ${activeTab === tab.id ? 'active bg-vscode-tab-active' : 'bg-vscode-tabs hover:bg-vscode-tab-active'}
            `}
            onClick={() => onTabChange(tab.id)}
          >
            <tab.icon
              size={16}
              className={`
                flex-shrink-0
                ${activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}
              `}
            />
            <span
              className={`
                text-sm truncate hidden sm:block
                ${activeTab === tab.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}
              `}
            >
              {tab.fileName}
            </span>
            <span
              className={`
                text-xs truncate sm:hidden
                ${activeTab === tab.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}
              `}
            >
              {tab.title}
            </span>
            {tab.isDirty && (
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className={`
                flex-shrink-0 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity
                hover:bg-white/20
                ${activeTab === tab.id ? 'text-white' : 'text-gray-400'}
              `}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
