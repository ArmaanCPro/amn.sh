import type { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import { Code } from "bright";
import React, { JSX } from "react";
import { Link } from "next-view-transitions";

// helper to replace quotes with smart quotes
function transformChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, (child) => {
        if (typeof child === "string") {
            return child
                .replaceAll(/^"/g, " “")
                .replaceAll(/ "/g, " “")
                .replaceAll(/"/g, "”")
                .replaceAll(/ '/g, " ‘")
                .replaceAll(/'/g, "’");
        }
        return child;
    });
}

function normalizeSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-_]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

function getSlug(children: React.ReactNode): string {
    return normalizeSlug(
        React.Children.toArray(children)
            .map((child) => (typeof child === "string" ? child : ""))
            .join("")
    );
}

export function Heading({
                            level,
                            className,
                            children,
                            ...props
                        }: React.HTMLAttributes<HTMLHeadingElement> & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
    const Component = `h${level}` as keyof JSX.IntrinsicElements;
    const slug = getSlug(children);

    // Base heading styles for different levels
    const headingStyles = {
        1: "text-5xl font-bold mt-8 mb-4",      // was text-4xl
        2: "text-4xl font-bold mt-6 mb-3",      // was text-3xl
        3: "text-3xl font-semibold mt-5 mb-3",  // was text-2xl
        4: "text-2xl font-semibold mt-4 mb-2",  // was text-xl
        5: "text-xl font-medium mt-4 mb-2",     // was text-lg
        6: "text-lg font-medium mt-3 mb-2"      // was text-base
    };

    return React.createElement('a',
        {
            className: "group no-underline text-current hover:text-blue-500 transition-colors",
            id: slug,
            href: `#${slug}`
        },
        React.createElement(Component,
            {
                className: `${headingStyles[level]} ${className || ''}`,
                ...props
            },
            React.createElement('span', {
                className: "opacity-0 group-hover:opacity-50 transition-opacity mr-2"
            }, '#'),
            transformChildren(children)
        )
    );
}

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement('h1', {
        className: `text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 mb-4 break-words ${className || ''}`,
        ...props
    });
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement('h2', {
        className: `text-2xl sm:text-3xl lg:text-4xl font-bold mt-6 mb-3 break-words ${className || ''}`,
        ...props
    });
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement('h3', {
        className: `text-xl sm:text-2xl lg:text-3xl font-semibold mt-5 mb-3 break-words ${className || ''}`,
        ...props
    });
}

export function H4({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement('h4', {
        className: `text-lg sm:text-xl lg:text-2xl font-semibold mt-4 mb-2 break-words ${className || ''}`,
        ...props
    });
}

export function H5({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement('h5', {
        className: `text-base sm:text-lg lg:text-xl font-medium mt-4 mb-2 break-words ${className || ''}`,
        ...props
    });
}

export function H6({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement('h6', {
        className: `text-base sm:text-base lg:text-lg font-medium mt-3 mb-2 break-words ${className || ''}`,
        ...props
    });
}

function H1_Inner({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(Heading, {
        level: 1 as const,
        className: `text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 mb-4 break-words ${className || ''}`,
        ...props
    });
}

function H2_Inner({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(Heading, {
        level: 2 as const,
        className: `text-2xl sm:text-3xl lg:text-4xl font-bold mt-6 mb-3 break-words ${className || ''}`,
        ...props
    });
}

function H3_Inner({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(Heading, {
        level: 3 as const,
        className: `text-xl sm:text-2xl lg:text-3xl font-semibold mt-5 mb-3 break-words ${className || ''}`,
        ...props
    });
}

function H4_Inner({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(Heading, {
        level: 4 as const,
        className: `text-lg sm:text-xl lg:text-2xl font-semibold mt-4 mb-2 break-words ${className || ''}`,
        ...props
    });
}

function H5_Inner({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(Heading, {
        level: 5 as const,
        className: `text-base sm:text-lg lg:text-xl font-medium mt-4 mb-2 break-words ${className || ''}`,
        ...props
    });
}

function H6_Inner({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return React.createElement(Heading, {
        level: 6 as const,
        className: `text-base sm:text-base lg:text-lg font-medium mt-3 mb-2 break-words ${className || ''}`,
        ...props
    });
}

export function P({
                      children,
                      ...props
                  }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className="text-base sm:text-lg leading-relaxed mt-4 max-w-none break-words" {...props}>
            {transformChildren(children)}
        </p>
    );
}

export function Pre({
                        className,
                        ...props
                    }: React.HTMLAttributes<HTMLPreElement>) {
    const lang = className?.split("language-")[1] ?? "ts";
    return (
        <div className="my-md rounded p-md overflow-x-auto text-lg">
            <div>
                <Code
                    lang={lang}
                    theme="github-dark"
                    {...props}
                />
            </div>
        </div>
    );
}

export function Ul(props: React.HTMLAttributes<HTMLUListElement>) {
    return <ul className="list-disc ml-6 mt-4 space-y-2 max-w-none break-words" {...props} />;
}

export function Ol(props: React.HTMLAttributes<HTMLOListElement>) {
    return <ol className="list-decimal ml-6 mt-4 space-y-2 max-w-none break-words" {...props} />;
}

export function Li({
                       children,
                       ...props
                   }: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li className="pl-1 marker:text-rose-700" {...props}>
            {transformChildren(children)}
        </li>
    );
}

export function Blockquote(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <blockquote
            className="relative my-4 rounded border-l-2 border-orange-300 bg-gray-900/50 p-4 text-gray-300 max-w-none break-words"
            {...props}
        >
            <span className="absolute left-2 top-0 text-6xl opacity-25 -z-10">"</span>
            {props.children}
        </blockquote>
    );
}

export function A({
                      href,
                      ...props
                  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    if (href?.startsWith("/")) {
        return (
            <Link href={href} className="text-blue-500 underline" {...props} />
        );
    }
    return <a href={href} className="text-blue-500 underline" {...props} />;
}

export function Strong(props: React.HTMLAttributes<HTMLElement>) {
    return <strong className="text-teal-500 font-semibold" {...props} />;
}

export function Em(props: React.HTMLAttributes<HTMLElement>) {
    return <em className="text-orange-400 italic" {...props} />;
}

export function InlineCode(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <code
            className="rounded bg-green-950/20 border border-green-700 px-1 py-0.5 font-mono text-green-500 text-lg"
            {...props}
        />
    );
}

export function IFrame({
                           aspectRatio = 16 / 9,
                           ...props
                       }: React.IframeHTMLAttributes<HTMLIFrameElement> & { aspectRatio?: number }) {
    return (
        <iframe
            className="w-full my-6 rounded-md"
            style={{ aspectRatio: String(aspectRatio) }}
            {...props}
        />
    );
}

export function Image({
                          src,
                          alt,
                          width,
                          height,
                      }: {
    src: string;
    alt: string;
    width: number;
    height: number;
}) {
    return (
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="my-6 mx-auto max-w-full rounded-md"
        />
    );
}

export function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img {...props} className="my-6 mx-auto max-w-full rounded-md" />;
}

export function useMDXComponents(
    components: MDXComponents
): MDXComponents {
    return {
        ...components,
        h1: (props) => React.createElement(Heading, { level: 1 as const, ...props }),
        h2: (props) => React.createElement(Heading, { level: 2 as const, ...props }),
        h3: (props) => React.createElement(Heading, { level: 3 as const, ...props }),
        h4: (props) => React.createElement(Heading, { level: 4 as const, ...props }),
        h5: (props) => React.createElement(Heading, { level: 5 as const, ...props }),
        h6: (props) => React.createElement(Heading, { level: 6 as const, ...props }),
        p: P,
        pre: Pre,
        code: InlineCode,
        ul: Ul,
        ol: Ol,
        li: Li,
        blockquote: Blockquote,
        a: A,
        strong: Strong,
        em: Em,
        img: Img,
    };
}
