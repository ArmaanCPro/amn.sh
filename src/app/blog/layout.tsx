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
        <div className="min-h-screen px-4 sm:px-6 lg:px-8">
            <header className="content-center flex flex-col items-center justify-center mb-xl p-sm max-w-4xl mx-auto">
                <Link href="/" className="flex items-center gap-sm">
                    <Logo className="w-[160]"/>
                </Link>
                <Nav/>
            </header>
            <main className="content-center flex flex-col items-center justify-center max-w-4xl mx-auto">
                {children}
            </main>
        </div>
    )
}