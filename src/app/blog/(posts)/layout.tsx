import type { ReactNode } from "react";

export default function PostsLayout({ children }: { children: ReactNode }) {
    return (
        <article className="contents">
            {children}
        </article>
    );
}
