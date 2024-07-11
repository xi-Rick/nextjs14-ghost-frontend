"use client";
import WaveAnimation from "./ui/wavy-animation";

export function Wavy() {
    return (
        <div>
            <WaveAnimation
                colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
                waveWidth={50}
                blur={10}
                speed="fast"
                waveOpacity={0.5}
            >
                <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1 className="text-6xl font-bold text-center my-8 dark:text-white">Latest Posts</h1>
                </div>
            </WaveAnimation>
        </div>
    );
}
