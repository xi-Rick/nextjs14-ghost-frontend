// /app/api/comments.tsx
import { NextApiRequest, NextApiResponse } from "next";

type Comment = {
  id: string;
  post_id: string;
  author: string;
  content: string;
};

async function fetchComments(postId: string): Promise<Comment[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GHOST_API_URL}/members/api/comments/?filter=post_id:${postId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
}

async function addComment(
  postId: string,
  author: string,
  content: string
): Promise<Comment> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GHOST_API_URL}/members/api/comments?post=${postId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Ghost ${process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY}`,
      },
      body: JSON.stringify({
        post_id: postId,
        author,
        content,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add comment");
  }
  return response.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { post } = req.query;

      if (!post || typeof post !== "string") {
        return res.status(400).json({ error: "Post slug is required" });
      }

      const comments = await fetchComments(post);
      return res.status(200).json(comments);
    } else if (req.method === "POST") {
      const { postId, author, text } = req.body;

      if (!postId || !author || !text) {
        return res
          .status(400)
          .json({ error: "postId, author, and text are required" });
      }

      const newComment = await addComment(postId, author, text);
      return res.status(201).json(newComment);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
