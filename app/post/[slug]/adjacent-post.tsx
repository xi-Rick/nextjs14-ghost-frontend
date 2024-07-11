// /app/post/[slug]/adjacent-post.tsx
import Link from 'next/link';

interface AdjacentPostsProps {
    adjacentPosts: {
        prev: {
            id: string;
            slug: string;
            title: string;
        } | null;
        next: {
            id: string;
            slug: string;
            title: string;
        } | null;
    };
}

const AdjacentPosts: React.FC<AdjacentPostsProps> = ({ adjacentPosts }) => {
    return (
        <div className="flex justify-center space-x-40 mt-40">
            {adjacentPosts.prev && (
                <Link href={`/post/${adjacentPosts.prev.slug}`}>
                    <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                        ← Prev
                    </button>
                </Link>
            )}
            {adjacentPosts.next && (
                <Link href={`/post/${adjacentPosts.next.slug}`}>
                    <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                        Next →
                    </button>
                </Link>
            )}
        </div>
    );
};

export default AdjacentPosts;
