import { Link } from "next-view-transitions"
import { getBlogPosts} from "./getPosts"
import { H1, P, Ul } from "@/mdx-components"

export default async function BlogIndex() {
    const posts = await getBlogPosts();
    const publishedPosts = posts.filter((post) => post.published);

    return (
        <div>
            <H1 className="text-center text-balance">Posts</H1>
            <Ul className="w-full p-0 mt-[var(--xxl)] border-b border-solid [border-bottom-color:color-mix(in_oklch,var(--fg),transparent_75%)] [@media(min-resolution:2dppx)]:border-b-[0.5px] [@media(min-resolution:3dppx)]:border-b-[0.33px]">
                {publishedPosts.map((post) => (
                    <li className="m-0 list-none flex flex-col gap-[var(--xxs)] py-[var(--md)] border-t border-solid [border-top-color:color-mix(in_oklch,var(--fg),transparent_75%)] [@media(min-resolution:2dppx)]:border-t-[0.5px] [@media(min-resolution:3dppx)]:border-t-[0.33px]">
                        <div className="flex gap-[var(--md)] w-full">
                            <Link className="grow text-[var(--h4)] font-extrabold leading-[0.9] no-underline uppercase text-[var(--fg)] hover:text-[var(--accent)]" href={post.path}>
                                {post.title
                                ? wrapTitleWithViewTransitionNames(post.title, post.path)
                                : ""}
                            </Link>
                            <span className="shrink-0 font-mono opacity-50">{post.date}</span>
                        </div>
                        <P className="leading-[1.2] mt-0 opacity-50 w-full">{post.description}</P>
                    </li>
                ))}
            </Ul>
        </div>
    );
}

function wrapTitleWithViewTransitionNames(title: string, path: string = "unknown") {
    const safePath = path.split("/").pop();

    const wordCounts: { [key: string]: number } = {};
    return title.split(" ").map((origWord) => {
        // remove special characters
        const word = origWord.toLocaleLowerCase().replace(/[^a-z0-9\s-_]/g, "");

        const count = wordCounts[word] ?? 0;
        wordCounts[word] = (wordCounts[word] ?? 0) + 1;

        const uniqueName = "_" + safePath + "______" + word + (count > 0 ? "___" + count : "");

        return (
            <>
                <span key={uniqueName} className="view-transition-name" data-view-transition-name={uniqueName}>{origWord}</span>
            {" "}</>
        );
    });
}