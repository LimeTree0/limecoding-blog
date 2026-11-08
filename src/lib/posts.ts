import { getCollection } from "astro:content";

export async function getPublishedPosts() {
    const posts = await getCollection("posts", ({ data }) => !data.draft);
    return posts.sort((a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
        || a.id.localeCompare(b.id),
    );
}

export function postUrl(id: string) {
    return `/posts/${id.split("/").map(encodeURIComponent).join("/")}/`;
}

export function formatDate(date: Date) {
    return date.toISOString().slice(0, 10).replaceAll("-", ".");
}
