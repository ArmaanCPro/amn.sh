import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // existing palette
                base: "#1e1e2e",
                crust: "#11111b",
                overlay0: "#6c7086",
                overlay1: "#7f849c",
                overlay2: "#9399b2",
                lavender: "#b4befe",
                green: "#a6e3a1",
                mauve: "#cba6f7",
                peach: "#fab387",
                teal: "#94e2d5",
                yellow: "#f9e2af",
                red: "#f38ba8",
                maroon: "#eba0ac",
                blue: "#89b4fa",

                // new semantic tokens (map to CSS variables)
                background: "var(--color-bg)",
                foreground: "var(--color-fg)",
                surface1: "var(--color-surface1)",
            },
            spacing: {
                xxxs: "0.25rem", // 4px
                xxs: "0.5rem",   // 8px
                xs: "0.75rem",   // 12px
                sm: "1rem",      // 16px
                md: "1.5rem",    // 24px
                lg: "2rem",      // 32px
                xxl: "4rem",
            },
            fontSize: {
                h1: ["2.5rem", { lineHeight: "0.9", fontWeight: "100" }],
                h2: ["2rem", { lineHeight: "1.0", fontWeight: "700" }],
                h3: ["1.75rem", { lineHeight: "1.2", fontWeight: "500" }],
                h4: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
                h5: ["1.25rem", { lineHeight: "1.5", fontWeight: "700" }],
                h6: ["1rem", { lineHeight: "1.6", fontWeight: "800" }],
                p: ["1rem", { lineHeight: "1.4", fontWeight: "400" }],
                sm: ["0.875rem", { lineHeight: "1.4" }],
            },
            fontFamily: {
                sans: ["ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["ui-monospace", "SFMono-Regular", "monospace"],

                // semantic font tokens (from CSS variables)
                variableSans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
            },
        },
    },
    darkMode: "class",
    plugins: [],
};

export default config;
