// /app/post[slug]/page.tsx
"use client";
import { AnimatedText } from "@/components/ui/animated-text";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { wrapLinksWithLinkPreview } from "@/components/wrap-links";
import { getPostData } from "@/lib/ghost";
import Image from "next/image";
import { useEffect, useState } from "react";
import AdjacentPosts from "./adjacent-post";

type Post = {
    id: string;
    title: string;
    html: string;
    feature_image: string | null;
    primary_tag: { name: string } | null;
};

type AdjacentPost = {
    id: string;
    slug: string;
    title: string;
};

type Props = {
    params: { slug: string };
};

export default function Post({ params }: Props) {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [adjacentPosts, setAdjacentPosts] = useState<{ prev: AdjacentPost | null; next: AdjacentPost | null }>({
        prev: null,
        next: null,
    });

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const data = await getPostData(params.slug);
                setPost(data.post);
                setAdjacentPosts(data.adjacentPosts);
                setError(null);
            } catch (error) {
                console.error("Error fetching post data:", error);
                setError("Failed to fetch post data.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [params.slug]);

    if (error) {
        return <p>{error}</p>;
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!post) {
        return null;
    }

    const modifiedHtml = wrapLinksWithLinkPreview(post.html || "");

    return (
        <article>
            <AnimatedText delay={0.25}>
                <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1 className="text-2xl font-bold text-center my-8 dark:text-white">
                        {post.title}
                    </h1>
                </div>
            </AnimatedText>

            <AnimatedText delay={0.50}>
                <TracingBeam className="px-6">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                        <div className="mb-10">
                            <AnimatedText delay={0.75}>
                                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                    {post.primary_tag ? post.primary_tag.name : "Blog Post"}
                                </h2>
                            </AnimatedText>

                            <div className="prose prose-lg dark:prose-invert">
                                <AnimatedText delay={1.0}>
                                    {post.feature_image && (
                                        <Image
                                            src={post.feature_image}
                                            alt={post.title}
                                            width={1000}
                                            height={600}
                                            className="rounded-lg mb-10 object-cover w-full"
                                            priority
                                        />
                                    )}
                                </AnimatedText>
                                <AnimatedText delay={1.25}>
                                    <div className="post-content dark:text-white">
                                        {modifiedHtml}
                                    </div>
                                </AnimatedText>
                            </div>
                        </div>
                    </div>
                </TracingBeam>
            </AnimatedText>

            <AnimatedText delay={0.75}>
                <AdjacentPosts adjacentPosts={adjacentPosts} />
            </AnimatedText>
        </article>
    );
}
