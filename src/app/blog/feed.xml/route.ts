import { getFeed } from "../getFeed";

export async function GET() {
    let feed;
    try {
        feed = await getFeed();
        return new Response(feed.rss2(), {
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
            },
        });
    } catch (error) {
        console.error("Error generating feed:", error);
        return new Response("Error generating feed", { status: 500 });
    }
}

export const dynamic = "force-static";

