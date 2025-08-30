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
        <div className="flex flex-col min-h-screen relative">
            {/* Theme tabs */}
            <div className="absolute top-0 right-0 flex p-4 gap-2">
                <button
                    className={`appearance-none bg-transparent rounded border-none cursor-pointer h-8 w-8 p-2 text-current opacity-33 ${
                        theme === "dark" ? "bg-blue-600/50 opacity-100" : ""
                    }`}
                    onClick={() => handleThemeChange("dark")}
                >
                    <MoonIcon />
                </button>
                <button
                    className={`appearance-none bg-transparent rounded border-none cursor-pointer h-8 w-8 p-2 text-current opacity-33 ${
                        theme === "system" ? "bg-blue-600/50 opacity-100" : ""
                    }`}
                    onClick={() => handleThemeChange("system")}
                >
                    <SystemIcon />
                </button>
                <button
                    className={`appearance-none bg-transparent rounded border-none cursor-pointer h-8 w-8 p-2 text-current opacity-33 ${
                        theme === "light" ? "bg-blue-600/50 opacity-100" : ""
                    }`}
                    onClick={() => handleThemeChange("light")}
                >
                    <SunIcon />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1">{children}</div>
        </div>
    );
}

/* Icons remain mostly unchanged, just remove stylex props */
function SystemIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 18a6 6 0 0 0 0-12v12z" />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
        </svg>
    );
}
