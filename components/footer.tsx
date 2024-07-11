// /components/footer.tsx
import { AnimatedText } from "./ui/animated-text";
import { LinkPreview } from "./ui/link-preview";

export function Footer() {

    return (
        <AnimatedText delay={5.00}>
            <div>
                <footer className="h-[10rem] relative overflow-hidden flex flex-col items-center justify-center">
                    <span className="text-center mt-2 relative z-20 dark:text-white">
                        <div>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xl ">
                                Follow my{" "}
                                <LinkPreview url="https://github.com/xi-Rick" className="font-bold">
                                    Github
                                </LinkPreview>{" "}
                                to check out what else I'm working on
                            </p>
                            <LinkPreview
                                url="https://danadavis.dev"
                                className="font-bold bg-clip-text"
                            >
                                &copy; 2024 Dana Davis
                            </LinkPreview>
                        </div>
                    </span>
                </footer>
            </div>
        </AnimatedText>
    );
}