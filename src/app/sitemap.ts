import { MetadataRoute } from "next";
import { getBlogPosts} from "@/app/blog/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.amn.sh";

    const posts = await getBlogPosts();

    const postUrls = posts.map(post => ({
        url: `${baseUrl}${post.path}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: "never" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        ...postUrls,
    ];
}
