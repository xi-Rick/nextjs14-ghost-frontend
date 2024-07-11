// /app/about/page.tsx
"use client";
import { Langs } from "@/components/animated-langs";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { MaskContainer } from "@/components/ui/svg-mask";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                {/* Add loading indicator here */}
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4">
                <AnimatedText delay={0.25}>
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
                        About
                    </motion.h1>
                </AnimatedText>


                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-lg lg:text-lg font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                    >
                        My journey into the tech world began in 2010 when I started dabbling in Android app development. What started as a curiosity quickly evolved into a passion, and I found myself creating rudimentary apps just for the fun of it.
                        <Highlight className="text-black dark:text-white">
                            Now, I love creating web applications that serve a purpose, whether it&apos;s solving a problem I&apos;ve encountered or bringing a cool idea to life. It&apos;s more than just a hobby—it&apos;s a way for me to continuously learn and create.
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
                    <AnimatedText delay={0.50}>
                        <div className="flex items-center justify-center h-full">
                            <TextRevealCard
                                text="You know the business"
                                revealText="I know the chemistry"
                                className="w-full h-full"
                            >
                                <TextRevealCardTitle>
                                    Sometimes, you just need to see it.
                                </TextRevealCardTitle>
                                <TextRevealCardDescription>
                                    This is a text reveal card. Hover over the card to reveal the hidden text.
                                </TextRevealCardDescription>
                            </TextRevealCard>
                        </div>
                    </AnimatedText>

                    <AnimatedText delay={0.50}>
                        <BackgroundGradient className="rounded-[22px] p-6 h-full bg-neutral-900">
                            <h2 className="text-2xl font-bold mb-4 text-white">The Bookworm's Paradise</h2>
                            <p className="mb-4 text-white">My eclectic literary tastes span from YA fiction to Greek mythology.</p>
                            <ul className="list-disc list-inside text-white">
                                <li>Harry Potter series</li>
                                <li>Sherrilyn Kenyon's works</li>
                                <li>Owen Colfer's adventures</li>
                                <li>Rick Riordan's mythology tales</li>
                                <li>It's all documentation now.</li>
                            </ul>
                        </BackgroundGradient>
                    </AnimatedText>

                    <AnimatedText delay={0.50}>
                        <div className="w-full h-full">
                            <div
                                className={cn(
                                    "group w-full h-full cursor-pointer overflow-hidden relative card rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                    "bg-[url(/images/me.png)] bg-cover",
                                    "before:bg-[url(/images/me.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                    "hover:bg-[url(/images/me.gif)]",
                                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                    "transition-all duration-500"
                                )}
                            >
                                <div className="text relative z-50">
                                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                        Dana Davis
                                    </h1>
                                    <p className="font-normal text-base text-gray-50 relative my-4">
                                        Thanks for taking the time ♥
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedText>

                    <AnimatedText delay={0.50}>
                        <CardContainer className="h-full">
                            <CardBody className="relative group hover:shadow-2xl hover:shadow-emerald-500 hover:bg-black hover:border-white hover:text-white border-black border-[0.1] w-full h-full rounded-xl p-6">
                                <CardItem translateZ="50" className="text-xl font-bold dark:text-white">
                                    The Gaming Guru
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="dark:text-gray-300 text-sm max-w-sm mt-2">
                                    RPG enthusiast & Osu! addict
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src="/images/pc.png"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                                        alt="gaming setup"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </AnimatedText>

                    <AnimatedText delay={0.50}>
                        <div className="h-full">
                            <Langs />
                        </div>
                    </AnimatedText>

                    <AnimatedText delay={0.50}>
                        <div className="flex items-center justify-center h-full">
                            <MaskContainer
                                revealText={
                                    <p className="max-w-4xl mx-auto text-black text-center text-xl font-bold">
                                        Self-taught techie since 2010, from Android apps to web development
                                    </p>
                                }
                                className="h-full w-full border rounded-md flex items-center justify-center h-[40rem]rounded-md"
                            >
                                Writing <span className="text-blue-500">NextJS </span>applications is like crafting digital magic, where every line of code weaves together to create powerful, interactive web experiences.
                            </MaskContainer>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </div>
    );
}