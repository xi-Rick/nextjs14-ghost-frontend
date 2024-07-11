// /components/ghost-hero-parallax.tsx
"use client";
import GhostContentAPI from '@tryghost/content-api';
import { useEffect, useState } from 'react';
import { HeroParallax } from "../components/ui/hero-parallax";

const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_GHOST_API_URL || '',
    key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || '',
    version: 'v5.0',
});

const GhostHeroParallax: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        api.posts
            .browse({ limit: 15 })
            .then((fetchedPosts) => {
                const mappedPosts = fetchedPosts.map(post => ({
                    title: post.title,
                    link: `/post/${post.slug}`,
                    thumbnail: post.feature_image || 'https://via.placeholder.com/600', // Placeholder if no feature image
                }));
                setPosts(mappedPosts);
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
            });
    }, []);

    return <HeroParallax posts={posts} />;
};

export default GhostHeroParallax;
