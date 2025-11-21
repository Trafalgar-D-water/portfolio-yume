import React, { useState, useEffect } from 'react';
import { ActivityBar } from './ActivityBar';
import { Sidebar } from './Sidebar';
import { EditorTabs } from './EditorTabs';
import { StatusBar } from './StatusBar';

interface VSCodeLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function VSCodeLayout({ children, currentPage, onPageChange }: VSCodeLayoutProps) {
  const [activeActivityTab, setActiveActivityTab] = useState('explorer');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-hide sidebar on mobile
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleActivityTabChange = (tab: string) => {
    setActiveActivityTab(tab);
    // Toggle sidebar if clicking the same tab
    if (tab === activeActivityTab && sidebarVisible) {
      setSidebarVisible(false);
    } else {
      setSidebarVisible(true);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-background overflow-hidden">
      {/* Main layout */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          activeTab={activeActivityTab}
          onTabChange={handleActivityTabChange}
        />

        {/* Sidebar - overlay on mobile */}
        {sidebarVisible && (
          <div className={`${isMobile ? 'absolute top-0 left-12 z-10 h-full shadow-xl' : 'h-full flex-shrink-0'}`}>
            <Sidebar activeTab={activeActivityTab} />
          </div>
        )}

        {/* Mobile overlay backdrop */}
        {isMobile && sidebarVisible && (
          <div
            className="absolute inset-0 bg-black/50 z-0"
            onClick={() => setSidebarVisible(false)}
          />
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-vscode-editor">
          {/* Editor Tabs - scrollable on mobile */}
          <div className="flex-shrink-0 overflow-x-auto border-b border-border bg-vscode-tabs">
            <EditorTabs
              activeTab={currentPage}
              onTabChange={onPageChange}
            />
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto relative">
            {children}
          </div>
        </div>
      </div>

      {/* Status Bar - hidden on small mobile */}
      <div className="flex-shrink-0 hidden sm:block">
        <StatusBar />
      </div>
    </div>
  );
}
