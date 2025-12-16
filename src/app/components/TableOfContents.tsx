"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type Heading = {
    id: string;
    text: string;
    level: number; // numeric heading level, e.g. 2 for h2
};

type Props = {
    from?: "h2" | "h3";
    to?: "h3" | "h4";
};

export function TableOfContents({ from = "h2", to = "h3" }: Props) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const levels = range(from, to);

        const nodes = Array.from(
            document.querySelectorAll(levels.map((l) => `article ${l}`).join(","))
        ) as HTMLHeadingElement[];

        const data = nodes
            .map((node) => {
                const id = (node.closest("[id]") as HTMLElement | null)?.id ?? node.id ?? "";
                const level = Number(node.tagName[1]); // "H2" -> 2, "H3" -> 3

                return {
                    id,
                    text: node.innerText.split("#")[1].trim() ?? "",
                    level,
                };
            })
            .filter((h) => h.id.length > 0);

        setHeadings(data);
    }, [from, to]);

    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        break;
                    }
                }
            },
            {
                rootMargin: "0% 0% -70% 0%",
                threshold: 0.1,
            }
        );

        headings.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    const baseLevel = Number(from[1]);

    return (
        <nav
            aria-label="Table of contents"
            className="my-10 rounded-2xl border border-border/50 bg-muted/30 px-6 py-5"
        >
            <p className="mb-3 text-sm font-medium text-muted-foreground">On this page</p>

            <ul className="space-y-1">
                {headings.map((h) => {
                    const indent = Math.max(0, h.level - baseLevel);

                    return (
                        <li
                            key={h.id}
                            className={clsx(
                                "transition-colors",
                                indent >= 1 && "ml-4"
                            )}
                        >
                            <a
                                href={`#${h.id}`}
                                className={clsx(
                                    "block text-sm leading-6",
                                    activeId === h.id
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {h.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

function range(from: string, to: string) {
    const start = Number(from[1]);
    const end = Number(to[1]);
    return Array.from({ length: end - start + 1 }, (_, i) => `h${start + i}`);
}
