import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Github } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="p-2 text-gray-400">
                <SettingsIcon />
            </div>
        );
    }

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('github-light');
        } else if (theme === 'github-light') {
            setTheme('github-dark');
        } else {
            setTheme('dark');
        }
    };

    const getIcon = () => {
        if (theme === 'github-light') return <Sun size={20} className="md:w-5 md:h-5" />;
        if (theme === 'github-dark') return <Github size={20} className="md:w-5 md:h-5" />;
        return <Moon size={20} className="md:w-5 md:h-5" />; // VS Code Dark
    };

    const getLabel = () => {
        if (theme === 'github-light') return 'GitHub Light';
        if (theme === 'github-dark') return 'GitHub Dark';
        return 'VS Code Dark';
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-sm transition-colors text-gray-400 hover:text-white hover:bg-white/5"
            title={`Switch Theme (${getLabel()})`}
        >
            {getIcon()}
        </button>
    );
}

function SettingsIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-5 md:h-5"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}
