import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname === '/' ? '/about' : location.pathname;

    const navItems = [
        { name: '_hello', path: '/' },
        { name: '_about-me', path: '/about' },
        { name: '_projects', path: '/projects' },
        { name: '_contact-me', path: '/contact' },
    ];

    return (
        <div className="h-12 border-b border-border bg-vscode-activitybar flex items-center px-4 justify-between z-50 relative">
            <div className="flex items-center h-full">
                <div className="text-foreground/80 font-medium mr-16 w-48 truncate">
                    priyanshu-patnayak
                </div>
                <div className="flex h-full">
                    {navItems.map((item) => {
                        const isActive =
                            (item.path === '/' && location.pathname === '/') ||
                            (item.path !== '/' && location.pathname.startsWith(item.path));

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                  h-full flex items-center px-8 border-r border-border text-sm transition-colors
                  ${isActive
                                        ? 'text-white border-b-2 border-b-accent bg-vscode-editor/50'
                                        : 'text-muted-foreground hover:text-white hover:bg-white/5'}
                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
