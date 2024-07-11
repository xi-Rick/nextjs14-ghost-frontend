interface AnimatedTextProps {
    delay: number;
    children: React.ReactNode;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ delay, children }) => (
    <div
        className={`animate-fade-up opacity-0`}
        style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
        {children}
    </div>
);