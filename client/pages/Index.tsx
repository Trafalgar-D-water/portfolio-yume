import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VSCodeLayout } from '@/components/vscode/VSCodeLayout';
import { Home } from '@/components/portfolio/Home';
import { About } from '@/components/portfolio/About';
import { Projects } from '@/components/portfolio/Projects';
import { Skills } from '@/components/portfolio/Skills';
import { Experience } from '@/components/portfolio/Experience';
import { Contact } from '@/components/portfolio/Contact';

export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('hello');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['React', 'Vue', 'Next.js', 'HTML', 'CSS', 'Angular', 'Gatsby', 'Flutter']);

  // Update current page based on URL
  useEffect(() => {
    const path = location.pathname.slice(1); // Remove leading slash
    if (path && ['about', 'projects', 'skills', 'experience', 'contact'].includes(path)) {
      setCurrentPage(path);
    } else {
      setCurrentPage('hello'); // Default to hello/home page
    }
  }, [location.pathname]);

  // Handle page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    navigate(page === 'hello' ? '/' : `/${page}`);
  };

  // Render the current page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'hello':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects selectedFilters={selectedFilters} />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <VSCodeLayout
      currentPage={currentPage}
      onPageChange={handlePageChange}
      selectedFilters={selectedFilters}
      onFilterChange={setSelectedFilters}
    >
      {renderPageContent()}
    </VSCodeLayout>
  );
}
