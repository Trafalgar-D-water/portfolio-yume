import React from 'react';
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
  Mail
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onFileClick?: (fileName: string) => void;
}

interface FileTreeItem {
  name: string;
  type: 'file' | 'folder';
  icon: React.ElementType;
  children?: FileTreeItem[];
  isOpen?: boolean;
  extension?: string;
}

export function Sidebar({ activeTab, onFileClick }: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = React.useState<Set<string>>(
    new Set(['portfolio', 'src', 'components'])
  );

  const fileTree: FileTreeItem[] = [
    {
      name: 'portfolio',
      type: 'folder',
      icon: FolderOpen,
      children: [
        {
          name: 'src',
          type: 'folder',
          icon: Folder,
          children: [
            {
              name: 'components',
              type: 'folder',
              icon: Folder,
              children: [
                { name: 'About.tsx', type: 'file', icon: Code2, extension: 'tsx' },
                { name: 'Projects.tsx', type: 'file', icon: Code2, extension: 'tsx' },
                { name: 'Skills.tsx', type: 'file', icon: Code2, extension: 'tsx' },
                { name: 'Experience.tsx', type: 'file', icon: Code2, extension: 'tsx' },
                { name: 'Contact.tsx', type: 'file', icon: Code2, extension: 'tsx' },
              ]
            },
            { name: 'index.tsx', type: 'file', icon: Code2, extension: 'tsx' },
            { name: 'App.tsx', type: 'file', icon: Code2, extension: 'tsx' },
            { name: 'styles.css', type: 'file', icon: Palette, extension: 'css' },
          ]
        },
        { name: 'README.md', type: 'file', icon: FileText, extension: 'md' },
        { name: 'package.json', type: 'file', icon: FileText, extension: 'json' },
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

  const renderFileTree = (items: FileTreeItem[], level = 0, parentPath = '') => {
    return items.map((item, index) => {
      const itemPath = parentPath ? `${parentPath}/${item.name}` : item.name;
      const isExpanded = expandedFolders.has(itemPath);

      return (
        <div key={`${itemPath}-${index}`}>
          <div
            className="flex items-center gap-1 px-2 py-1 hover:bg-white/5 cursor-pointer text-sm group"
            style={{ paddingLeft: `${8 + level * 16}px` }}
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(itemPath);
              } else {
                onFileClick?.(item.name);
              }
            }}
          >
            {item.type === 'folder' && (
              <>
                {isExpanded ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
                {isExpanded ? (
                  <FolderOpen size={16} className="text-blue-400" />
                ) : (
                  <Folder size={16} className="text-blue-400" />
                )}
              </>
            )}
            {item.type === 'file' && (
              <item.icon
                size={16}
                className={`
                  ${item.extension === 'tsx' ? 'text-blue-300' :
                    item.extension === 'css' ? 'text-purple-300' :
                      item.extension === 'md' ? 'text-yellow-300' :
                        item.extension === 'json' ? 'text-green-300' :
                          'text-gray-400'}
                `}
              />
            )}
            <span className="text-foreground group-hover:text-white truncate">
              {item.name}
            </span>
          </div>
          {item.type === 'folder' && isExpanded && item.children && (
            <div>
              {renderFileTree(item.children, level + 1, itemPath)}
            </div>
          )}
        </div>
      );
    });
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'explorer':
        return (
          <div className="p-2">
            <div className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">
              Explorer
            </div>
            <div className="space-y-1">
              {renderFileTree(fileTree)}
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="p-2">
            <div className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">
              Search
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-1 bg-vscode-editor border border-gray-600 rounded text-sm text-foreground"
              />
              <div className="text-xs text-muted-foreground">
                No results found
              </div>
            </div>
          </div>
        );

      case 'source-control':
        return (
          <div className="p-2">
            <div className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">
              Source Control
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Clean working tree</span>
              </div>
              <div className="text-xs">
                Last commit: Initial portfolio setup
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-2">
            <div className="text-xs font-semibold text-white mb-3 uppercase tracking-wider">
              {activeTab.replace('-', ' ')}
            </div>
            <div className="text-sm text-muted-foreground">
              Content for {activeTab}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="vscode-sidebar w-64 md:w-64 sm:w-56 h-full border-r border-border bg-vscode-sidebar overflow-y-auto">
      {getTabContent()}
    </div>
  );
}
