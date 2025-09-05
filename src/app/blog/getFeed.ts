import { Feed } from "feed";
import { getBlogPosts} from "./getPosts";
import { unstable_cache } from "next/cache";

export const getFeed = unstable_cache(async function getFeed() {
    const siteURL = "https://www.amn.sh";
    const feedOptions = {
        title: "amn.sh",
        language: "en",
        id: siteURL,
        link: siteURL,
        description: "Armaan Chahal's blog",
        copyright: `All rights reserved ${new Date().getFullYear()}, Armaan Chahal`,
        author: {
            name: "Armaan Chahal",
            link: `${siteURL}/blog`,
        },
    };
    const feed = new Feed(feedOptions);
    try {
        const posts = await getBlogPosts();

        posts.forEach((post) => {
            const { title, path, description = "", date = "", contentHtml = "" } = post;

            if (title == null || path == null) return;

            feed.addItem({
                title,
                id: path,
                link: `${siteURL}${path}`,
                description,
                date: new Date(date),
                author: [feedOptions.author],
                content: contentHtml, // full body for RSS
            });
        });

        return feed;
    } catch (error) {
        console.error("Error generating feed:", error);
        return feed;
    }
});