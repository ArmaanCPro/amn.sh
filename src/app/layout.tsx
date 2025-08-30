import type {Metadata} from 'next';
import {ViewTransitions} from "next-view-transitions";
import ThemeControl from "./ThemeControl";
import "./globals.css";

import {Analytics} from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: "Armaan Chahal",
    description: "Personal website and blog of Armaan Chahal.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en" className="box-border dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Libre+Baskerville:ital@1&display=block"
                    rel="stylesheet"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-96x96.png"
                    sizes="96x96"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <meta name="apple-mobile-web-app-title" content="MyWebSite"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </head>

            <ThemeControl>
                {children}
                <footer className="text-muted font-sans mt-16 py-8 text-center">
                    All Rights Reserved.
                </footer>
            </ThemeControl>

            <Analytics/>
            <SpeedInsights/>

            </html>
        </ViewTransitions>
    );
}