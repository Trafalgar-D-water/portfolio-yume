import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface VSCodeLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
  selectedFilters?: string[];
  onFilterChange?: (filters: string[]) => void;
}

export function VSCodeLayout({ children, currentPage, onPageChange, selectedFilters, onFilterChange }: VSCodeLayoutProps) {
  const [activeTab, setActiveTab] = React.useState('explorer');
  const [sidebarVisible, setSidebarVisible] = React.useState(currentPage !== 'hello');

  React.useEffect(() => {
    if (currentPage === 'hello') {
      setSidebarVisible(false);
    } else {
      setSidebarVisible(true);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden font-mono">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        {sidebarVisible && (
          <Sidebar
            activeTab={activeTab}
            onFileClick={onPageChange}
            currentPage={currentPage}
            selectedFilters={selectedFilters}
            onFilterChange={onFilterChange}
          />
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-vscode-editor overflow-hidden relative">
          {/* Tab Bar / Breadcrumbs */}
          <div className="h-9 border-b border-border flex items-center bg-vscode-editor px-4 justify-between">
            <div className="flex items-center">
              <span className="text-muted-foreground text-sm">{currentPage === 'about' ? 'personal-info' : currentPage}</span>
              <span className="text-muted-foreground mx-2">/</span>
              <span className="text-white text-sm">{currentPage === 'about' ? 'bio' : 'index.tsx'}</span>
            </div>

            {/* Sidebar Toggle Button (Mobile/Desktop) */}
            <button
              onClick={() => setSidebarVisible(!sidebarVisible)}
              className="text-muted-foreground hover:text-white transition-colors"
              title="Toggle Sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M9 3v18" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto relative">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
