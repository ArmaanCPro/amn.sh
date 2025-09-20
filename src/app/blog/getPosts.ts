
import fs from "fs/promises";
import path from "path";
import { unstable_cache } from "next/cache";
import * as runtime from "react/jsx-runtime";
import { evaluate, compile } from "@mdx-js/mdx"
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, "(posts)");

export type PostMeta = {
    title?: string;
    description?: string;
    date?: string;
    published?: boolean;
    tags?: string[];
};

export const getBlogPosts = unstable_cache(async () => {
    console.log("Blog directory:", blogDir);

    try {
        const blogs = await fs.readdir(blogDir);
        console.log("Found directories:", blogs);

        // filter for folders
        const blogsPathAndTitles = blogs.map(async (blog) => {
            const blogPath = path.join(blogDir, blog);
            const stat = await fs.stat(blogPath);

            if (!stat.isDirectory()) {
                console.log(`${blog} is not a directory`);
                return null;
            }

            const filesWithinFolder = await fs.readdir(blogPath);

            if (!filesWithinFolder.includes("page.mdx")) {
                console.log(`No page.mdx found in ${blog}`);
                return null;
            }

            const filePath = path.join(blogPath, "page.mdx");
            const file = await fs.readFile(filePath, "utf-8");

            const lines = file.split("\n");
            const firstImport = lines.findIndex((line) => line.startsWith("import "));

            const relevantContent = lines.slice(0, firstImport).join("\n");

            const bodyContent = lines.slice(firstImport).join("\n");

            try {
                const { metadata }: { metadata?: PostMeta } = (await evaluate(
                    relevantContent,
                    { ...runtime }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                )) as any;

                if (metadata == null) {
                    console.log(`No metadata found for ${blog}`);
                    return null;
                }

                // turn MDX into HTML for RSS feeds
                const compiled = await compile(bodyContent, { outputFormat: "program" });
                const html = String(compiled);

                return { ...metadata, path: "/blog/" + blog, contentMDX: bodyContent, contentHtml: html };
            } catch (evalError) {
                console.error(`Error evaluating ${blog}:`, evalError);
                return null;
            }
        });

        const maybePostsResolved = await Promise.all(blogsPathAndTitles);

        const filteredPosts = maybePostsResolved
            .filter((post) => post != null)
            .sort((a, b) =>
                a.date != null && b.date != null ? b.date.localeCompare(a.date) : 0
            );

        return filteredPosts;

    } catch (error) {
        console.error("Error in getBlogPosts:", error);
        return [];
    }
})