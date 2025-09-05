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
            <header className="w-full max-w-full px-4 sm:px-6 py-3 flex flex-col items-center gap-2 mb-6">
                <Link href="/" className="flex items-center justify-center">
                    <Logo className="w-[120px] sm:w-[160px] h-auto" />
                </Link>
                <Nav/>
            </header>
            <main className="content-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
                {children}
            </main>
        </>
    )
}
