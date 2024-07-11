// /components/post-list.tsx
"use client";
import { ghost } from '@/lib/ghost';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card'; // Adjust the path based on your project structure

export const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
};

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true; // Flag to track mounted component

        const fetchPosts = async () => {
            try {
                const fetchedPosts = await ghost.posts.browse({ limit: 15 });
                if (isMounted) {
                    setPosts(fetchedPosts);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Error fetching posts:', err);
                if (isMounted) {
                    setError('Failed to fetch posts. Please try again later.');
                    setLoading(false);
                }
            }
        };

        fetchPosts();

        // Cleanup function to handle component unmounting
        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <p></p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="text-6xl font-bold text-center my-8 dark:text-white">Latest Posts</h1>
                <div className="w-[40rem] relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20 ">
                {posts.map((post, index) => (
                    <CardContainer key={index} className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-auto">
                        <CardBody>
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {truncateText(post.title, 30)}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {truncateText(post.excerpt, 50)}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                {post.feature_image && (
                                    <Link href={`/post/${post.slug}`}>
                                        <img
                                            src={post.feature_image}
                                            alt={post.title}
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        />
                                    </Link>
                                )}
                            </CardItem>
                            <div className="flex justify-between items-center mt-4 overflow-hidden">
                                <Link href={`/post/${post.slug}`}>
                                    <CardItem translateZ={20} as="a" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                        Read More →
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default PostList;
