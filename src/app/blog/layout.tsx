import type { Metadata } from "next"
import Logo from "../Logo"
import { Link } from "next-view-transitions"
import Nav from "../components/Nav"

export const metadata: Metadata = {
    title: "Blog | Armaan Chahal",
    description: "Blog posts about low level programming, software development, and C++",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="content-center flex flex-col items-center justify-center mb-[var(-xl)] p-[var(-sm)]">
                <Link href="/" className="flex items-center gap-[var(--sm)]">
                    <Logo className="w-[160]"/>
                </Link>
                <Nav/>
            </header>
            <main className="content-center flex flex-col items-center justify-center">
                {children}
            </main>
        </>
    )
}