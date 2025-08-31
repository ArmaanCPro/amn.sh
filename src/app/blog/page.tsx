import { Link } from "next-view-transitions"
import { getBlogPosts} from "./getPosts"
import { H1, P, Ul } from "@/mdx-components"
import React from "react"

export default async function BlogIndex() {
    const posts = await getBlogPosts();
    const publishedPosts = posts.filter((post) => post.published);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
            <H1 className="text-center text-balance">Posts</H1>
            <Ul className="w-full p-0 mt-xl border-b border-gray-600/25">
                {publishedPosts.map((post) => (
                    <li key={post.path}
                        className="m-0 pl-0 list-none flex flex-col gap-md py-md border-t border-gray-600/25">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-xl w-full">
                            <Link className="flex-1 text-lg sm:text-xl font-extrabold leading-tight no-underline uppercase text-current hover:text-blue-500 break-words" href={post.path}>
                                {post.title
                                ? wrapTitleWithViewTransitionNames(post.title, post.path)
                                : ""}
                            </Link>
                            <span className="shrink-0 font-mono opacity-50 text-sm sm:text-base">{post.date}</span>
                        </div>
                        <P className="leading-tight mt-0 opacity-50 w-full text-base sm:text-lg">{post.description}</P>
                    </li>
                ))}
            </Ul>
        </div>
    );
}

function wrapTitleWithViewTransitionNames(title: string, path: string = "unknown") {
    const safePath = path.split("/").pop();

    const wordCounts: { [key: string]: number } = {};
    return title.split(" ").map((origWord, index) => {
        // remove special characters
        const word = origWord.toLocaleLowerCase().replace(/[^a-z0-9\s-_]/g, "");

        const count = wordCounts[word] ?? 0;
        wordCounts[word] = (wordCounts[word] ?? 0) + 1;

        const uniqueName = "_" + safePath + "______" + word + (count > 0 ? "___" + count : "");

        return React.createElement(React.Fragment, { key: index }, [
            React.createElement('span', {
                key: uniqueName,
                className: "view-transition-name",
                'data-view-transition-name': uniqueName
            }, origWord),
            " "
        ]);
    });
}
