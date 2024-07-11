import GhostContentAPI from "@tryghost/content-api";

if (
  !process.env.NEXT_PUBLIC_GHOST_API_URL ||
  !process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY
) {
  throw new Error(
    "Please define NEXT_PUBLIC_GHOST_API_URL and NEXT_PUBLIC_GHOST_CONTENT_API_KEY environment variables inside .env.local"
  );
}

export const ghost = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY,
  version: "v5.0",
});

export async function getPost(slug: string) {
  return await ghost.posts.read({ slug }, { include: ["tags", "authors"] });
}

export async function fetchAboutPage() {
  try {
    // Use type assertion to bypass the TypeScript error
    const pages = await (ghost as any).pages.read({ slug: "about" });
    return pages.html || "";
  } catch (error) {
    console.error("Error fetching about page:", error);
    return "";
  }
}

export async function fetchComments(postId: string): Promise<Comment[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GHOST_API_URL}/members/api/comments/?filter=post_id:${postId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

export async function getPostData(slug: string) {
  try {
    const post = await getPost(slug);

    const posts = await ghost.posts.browse({
      limit: "all",
      fields: ["id", "slug", "title", "published_at"],
      order: "published_at DESC",
    });

    const currentIndex = posts.findIndex((p) => p.id === post.id);
    const adjacentPosts = {
      prev: currentIndex > 0 ? posts[currentIndex - 1] : null,
      next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    };

    return { post, adjacentPosts };
  } catch (error) {
    console.error("Error fetching post data:", error);
    throw error;
  }
}
