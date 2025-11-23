import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FileText,
  Code2,
  Palette,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Search,
  Terminal,
  Gamepad2
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onFileClick?: (fileName: string) => void;
  currentPage?: string;
  selectedFilters?: string[];
  onFilterChange?: (filters: string[]) => void;
}

interface FileTreeItem {
  name: string;
  type: 'file' | 'folder';
  icon: React.ElementType;
  children?: FileTreeItem[];
  isOpen?: boolean;
  extension?: string;
  color?: string;
}

export function Sidebar({ activeTab, onFileClick, currentPage, selectedFilters = [], onFilterChange }: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = React.useState<Set<string>>(
    new Set(['personal-info', 'contacts', 'projects'])
  );
  const [searchQuery, setSearchQuery] = useState('');

  const fileTree: FileTreeItem[] = [
    {
      name: 'personal-info',
      type: 'folder',
      icon: Folder,
      children: [
        { name: 'bio', type: 'file', icon: Folder, extension: 'folder-red', color: 'text-accent' },
        { name: 'interests', type: 'file', icon: Folder, extension: 'folder-green', color: 'text-primary' },
        { name: 'education', type: 'file', icon: Folder, extension: 'folder-blue', color: 'text-secondary' },
      ]
    },
    {
      name: 'contacts',
      type: 'folder',
      icon: Folder,
      children: [
        { name: 'user@gmail.com', type: 'file', icon: Mail, extension: 'mail' },
        { name: '+3598246359', type: 'file', icon: Gamepad2, extension: 'phone' },
      ]
    }
  ];

  const toggleFolder = (folderPath: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderPath)) {
      newExpanded.delete(folderPath);
    } else {
      newExpanded.add(folderPath);
    }
    setExpandedFolders(newExpanded);
  };

  const handleFilterToggle = (tech: string) => {
    if (!onFilterChange) return;
    if (selectedFilters.includes(tech)) {
      onFilterChange(selectedFilters.filter(t => t !== tech));
    } else {
      onFilterChange([...selectedFilters, tech]);
    }
  };

  const renderFileTree = (items: FileTreeItem[], level = 0, parentPath = '') => {
    return items.map((item, index) => {
      const itemPath = parentPath ? `${parentPath}/${item.name}` : item.name;
      const isExpanded = expandedFolders.has(itemPath);

      return (
        <div key={`${itemPath}-${index}`}>
          <div
            className="flex items-center gap-1 px-4 py-1 hover:bg-white/5 cursor-pointer text-sm group transition-colors"
            style={{ paddingLeft: `${16 + level * 16}px` }} // Adjusted padding for nested items
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(itemPath);
              } else {
                // Map specific files to routes if needed, or just handle click
                if (item.name === 'bio') onFileClick?.('about');
                if (item.name === 'interests') onFileClick?.('skills');
                if (item.name === 'education') onFileClick?.('experience');
              }
            }}
          >
            {item.type === 'folder' && (
              <span className="mr-1">
                {isExpanded ? (
                  <ChevronDown size={14} className="text-foreground" />
                ) : (
                  <ChevronRight size={14} className="text-foreground" />
                )}
              </span>
            )}

            {item.type === 'file' && (
              <span className="mr-4"></span>
            )}

            <item.icon
              size={16}
              className={`mr-2 ${item.color || 'text-foreground'}`}
            />

            <span className={`truncate ${isExpanded || item.type === 'file' ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.name}
            </span>
          </div>
          {item.type === 'folder' && isExpanded && item.children && (
            <div className="py-1">
              {renderFileTree(item.children, level + 1, itemPath)}
            </div>
          )}
        </div>
      );
    });
  };

  const renderProjectFilters = () => {
    const isExpanded = expandedFolders.has('projects');
    const techs = ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter', 'Next.js'];

    return (
      <div>
        <div
          className="flex items-center gap-1 px-4 py-1 hover:bg-white/5 cursor-pointer text-sm group transition-colors"
          onClick={() => toggleFolder('projects')}
        >
          <span className="mr-1">
            {isExpanded ? (
              <ChevronDown size={14} className="text-foreground" />
            ) : (
              <ChevronRight size={14} className="text-foreground" />
            )}
          </span>
          <span className="font-bold text-foreground">projects</span>
        </div>

        {isExpanded && (
          <div className="py-2 px-6 space-y-2">
            {techs.map(tech => (
              <div
                key={tech}
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => handleFilterToggle(tech)}
              >
                <div className={`w-4 h-4 border border-muted-foreground rounded flex items-center justify-center transition-colors ${selectedFilters.includes(tech) ? 'bg-secondary border-secondary' : 'group-hover:border-white'}`}>
                  {selectedFilters.includes(tech) && <Code2 size={10} className="text-white" />}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm transition-colors ${selectedFilters.includes(tech) ? 'text-white' : 'text-muted-foreground group-hover:text-white'}`}>
                    {tech === 'React' && <Code2 size={14} className="inline mr-1 text-blue-400" />}
                    {tech === 'Vue' && <Code2 size={14} className="inline mr-1 text-green-400" />}
                    {tech === 'Angular' && <Code2 size={14} className="inline mr-1 text-red-500" />}
                    {tech === 'HTML' && <Code2 size={14} className="inline mr-1 text-orange-500" />}
                    {tech === 'CSS' && <Code2 size={14} className="inline mr-1 text-blue-300" />}
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 md:w-72 h-full border-r border-border bg-vscode-sidebar overflow-y-auto py-4">
      {currentPage === 'projects' ? renderProjectFilters() : renderFileTree(fileTree)}
    </div>
  );
}
