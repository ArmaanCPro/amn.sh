"use client";

import { useState, ReactNode } from "react";

type Theme = "light" | "system" | "dark";

interface ThemeControlProps {
    children: ReactNode;
}

export default function ThemeControl({ children }: ThemeControlProps) {
    const [theme, setTheme] = useState<Theme>("system");

    // Update <html> class for Tailwind dark mode
    const updateHtmlClass = (theme: Theme) => {
        const html = document.documentElement;
        html.classList.remove("dark", "light");

        if (theme === "dark") html.classList.add("dark");
        else if (theme === "light") html.classList.add("light");
        // system theme: do nothing, let OS control dark/light
    };

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        updateHtmlClass(newTheme);
    };

    return (
        <body>
            <div className="fixed top-4 right-4 flex gap-1 z-50">
                <button
                    className={`
                        w-8 h-8 p-1.5 rounded-lg cursor-pointer 
                        transition-all duration-200 border-none
                        text-gray-600 dark:text-gray-400
                        hover:text-gray-800 dark:hover:text-gray-200
                        ${theme === "dark" 
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100" 
                            : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                    `}
                    onClick={() => handleThemeChange("dark")}
                    title="Dark mode"
                >
                    <MoonIcon />
                </button>
                <button
                    className={`
                        w-8 h-8 p-1.5 rounded-lg cursor-pointer 
                        transition-all duration-200 border-none
                        text-gray-600 dark:text-gray-400
                        hover:text-gray-800 dark:hover:text-gray-200
                        ${theme === "system" 
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100" 
                            : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                    `}
                    onClick={() => handleThemeChange("system")}
                    title="System mode"
                >
                    <SystemIcon />
                </button>
                <button
                    className={`
                        w-8 h-8 p-1.5 rounded-lg cursor-pointer 
                        transition-all duration-200 border-none
                        text-gray-600 dark:text-gray-400
                        hover:text-gray-800 dark:hover:text-gray-200
                        ${theme === "light" 
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100" 
                            : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                    `}
                    onClick={() => handleThemeChange("light")}
                    title="Light mode"
                >
                    <SunIcon />
                </button>
            </div>

            {children}
        </body>
    );
}

/* Icons with proper dimensions */
function SystemIcon() {
    return (
        <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-full h-full"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 18a6 6 0 0 0 0-12v12z" />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-full h-full"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-full h-full"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
        </svg>
    );
}
