import Logo from "./Logo";
import { Link } from "next-view-transitions";
import "./globals.css";

export default function Home() {
    return (
        <div>
            <header className="flex flex-col items-center justify-center gap-8 min-h-[90vh] sm:min-h-[90dvh] py-4">
                <Logo className="w-[calc(100%-32px)] max-w-[800px] translate-x-[1.5%]" collapsible />

                <nav className="flex gap-12">
                    <Link
                        href="/blog"
                        className="text-[crimson] dark:text-[cornflowerblue] uppercase no-underline hover:underline underline-offset-8 w-16 text-center"
                    >
                        Blog
                    </Link>
                </nav>
            </header>

            <main></main>
        </div>
    );
}
