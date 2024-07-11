// /app/page.tsx
import GhostHeroParallax from '../components/ghost-hero-parallax';
import PostList from '../components/post-list';

export default async function Home() {

  return (
    <main>
      <div>
        <GhostHeroParallax />
        <PostList />
      </div>
    </main>
  );
}
