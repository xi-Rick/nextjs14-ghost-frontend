import React, { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

type Comment = {
    id: string;
    html: string;
    created_at: string;
};

const Comments: React.FC<{ postId: string }> = ({ postId }) => {
    const [comments, setComments] = useState<Comment[] | null>(null);
    const [commentText, setCommentText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_GHOST_API_URL}/members/api/comments?post=${postId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch comments");
                }
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Error fetching comments:", error);
                setError("Failed to load comments.");
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_GHOST_API_URL}/members/api/comments?post=${postId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postId,
                    author: "Anonymous", // Replace with dynamic author if available
                    text: commentText,
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to add comment");
            }
            const newComment = await response.json();
            setComments((prevComments) => (prevComments ? [...prevComments, newComment] : [newComment]));
            setCommentText("");
        } catch (error) {
            console.error("Error posting comment:", error);
            setError("Failed to post comment.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    };

    const placeholders = [
        "What's your comment?",
        "Share your thoughts...",
        "Any feedback?",
        "Enter your comment here...",
    ];

    if (loading) {
        return <p>Loading comments...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Comments</h2>

            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className="comment mb-4">
                        <div dangerouslySetInnerHTML={{ __html: comment.html }} />
                        <p className="text-sm text-gray-500">
                            Posted on: {new Date(comment.created_at).toLocaleDateString()}
                        </p>
                    </div>
                ))
            ) : (
                <p>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
};

export default Comments;
