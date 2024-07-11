// /app/projects/page.tsx
"use client";
import { truncateText } from '@/components/post-list';
import { PinContainer } from '@/components/ui/3d-pin';
import { AnimatedText } from '@/components/ui/animated-text';
import { ghost } from '@/lib/ghost';
import { IconClipboardCopy } from "@tabler/icons-react";
import type { Post } from '@tryghost/content-api';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Projects() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await ghost.posts.browse({
                    filter: 'tag:projects',
                    limit: 'all'
                });
                setPosts(fetchedPosts);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

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

    const content = posts.map((post, i) => ({
        title: post.title || '',
        description: post.excerpt || '',
        slug: post.slug || '',
        header: (
            <div className="h-full w-full flex items-center justify-center text-white">
                {post.feature_image && (
                    <Image
                        src={post.feature_image}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt={post.title || ''}
                    />
                )}
            </div>
        ),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    }));

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Projects
                </motion.h1>
                <AnimatedText delay={0.50}>
                    <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20">
                        {content.map((post, i) => (
                            <PinContainer
                                key={i}
                                title={post.title}
                                href={`/post/${post.slug}`}
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                    {post.header}
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                        {post.title}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-white ">
                                            {truncateText(post.description, 150)}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                                </div>
                            </PinContainer>
                        ))}
                    </div>
                </AnimatedText>
            </div>

        </div>
    );
}
