import React from "react";
import { Link } from "next-view-transitions";

export function Nav() {
    return (
        <nav className="absolute top-2 left-0 flex gap-6 p-4 w-auto">
            <Link
                href="/blog"
                className="text-[crimson] dark:text-[cornflowerblue] uppercase no-underline hover:underline underline-offset-8"
            >
                Blog
            </Link>
            <Link
                href="https://vportfolio-hazel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[crimson] dark:text-[cornflowerblue] uppercase no-underline hover:underline underline-offset-8"
            >
                Portfolio
            </Link>
        </nav>
    );
}

export default Nav;
