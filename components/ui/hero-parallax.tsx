"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatedText } from "./animated-text";
import { FlipWords } from "./flip-words";
import { Spotlight } from "./spotlight";

export const HeroParallax = ({
  posts,
}: {
  posts: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = posts.slice(0, 5);
  const secondRow = posts.slice(5, 10);
  const thirdRow = posts.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[30] py-40 overflow-hidden pt-40 md:py-40 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((post) => (
            <PostCard
              post={post}
              translate={translateX}
              key={post.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((post) => (
            <PostCard
              post={post}
              translate={translateX}
              key={post.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((post) => (
            <PostCard
              post={post}
              translate={translateX}
              key={post.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { theme } = useTheme();
  const words = ["Revamp", "Overhaul", "Transform"];
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 flex flex-col items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={theme === 'white' ? 'black' : 'white'}
      />
      <AnimatedText delay={0.25}>
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center">
          NextJS 14 <br /> Ghost Frontend
        </h1>
        <span className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-center">
          <FlipWords words={words} /> your Ghost-powered blog into a visual masterpiece with this state-of-the-art React frontend. <br /> Built with the robust capabilities of Next.js, TypeScript, and the Aceternity UI library.
        </span>
      </AnimatedText>
    </div>

  );
};

export const PostCard = ({
  post,
  translate,
}: {
  post: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <AnimatedText delay={0.5}>
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={post.title}
        className="group/post h-96 w-[30rem] relative flex-shrink-0"
      >
        <Link
          href={post.link}
          className="block group-hover/post:shadow-2xl "
        >
          <Image
            src={post.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={post.title}
          />
        </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/post:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/post:opacity-100 text-white">
          {post.title}
        </h2>
      </motion.div>
    </AnimatedText>
  );
};