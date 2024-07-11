// /components/animated-langs.tsx
import { AnimatedTooltip } from "./ui/animated-tooltip";
const langs = [
    {
        id: 1,
        name: "Javascript",
        designation: "6 years",
        image: "/images/js.png",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        id: 2,
        name: "React",
        designation: "3 years",
        image: "/images/react.png",
        url: "https://reactjs.org/"
    },
    {
        id: 3,
        name: "TypeScript",
        designation: "3 years",
        image: "/images/ts.png",
        url: "https://www.typescriptlang.org/"
    },
    {
        id: 4,
        name: "NextJS",
        designation: "3 years",
        image: "/images/nextjs.png",
        url: "https://nextjs.org/"
    },
    {
        id: 5,
        name: "Tailwind CSS",
        designation: "3 years",
        image: "/images/tw.png",
        url: "https://tailwindcss.com/"
    },
    {
        id: 6,
        name: "Node JS",
        designation: "6 years",
        image: "/images/node.png",
        url: "https://nodejs.org/"
    },
];

export function Langs() {
    return (
        <div className="flex flex-row items-center justify-center w-full h-full">
            <AnimatedTooltip items={langs} />
        </div>
    );
}
