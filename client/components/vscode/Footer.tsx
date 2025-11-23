import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <div className="h-10 border-t border-border bg-vscode-activitybar flex items-center justify-between px-4 z-50 relative">
            <div className="flex items-center h-full">
                <span className="text-muted-foreground text-sm mr-4">find me in:</span>
                <a
                    href="https://x.com/priyanshuuuu44"
                    target="_blank"
                    rel="noreferrer"
                    className="h-full flex items-center px-3 border-r border-border text-muted-foreground hover:text-white transition-colors"
                >
                    <Twitter size={18} />
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-full flex items-center px-3 border-r border-border text-muted-foreground hover:text-white transition-colors"
                >
                    <Facebook size={18} />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-full flex items-center px-3 border-r border-border text-muted-foreground hover:text-white transition-colors"
                >
                    <Github size={18} />
                </a>
            </div>

            <a
                href="https://github.com/Trafalgar-D-water"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors cursor-pointer"
            >
                <span className="text-sm">@priyanshupatnayak</span>
                <Github size={18} />
            </a>
        </div>
    );
}
