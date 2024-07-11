"use client";
import { ReactNode, useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

// Define the props for the WaveAnimation component
interface WaveAnimationProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    colors?: string[];
    waveWidth?: number;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    children?: ReactNode; // Allow any JSX element to be passed as children
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({
    colors,
    waveWidth,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    children, // Accept children
    ...props
}) => {
    const noise = createNoise3D();
    let w: number, h: number, nt: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const getSpeed = (): number => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current!;
        ctx = canvas.getContext("2d")!;
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];

    const drawWave = (n: number) => {
        nt += getSpeed();
        for (let i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (let x = 0; x < w; x += 5) {
                const y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5);
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId: number;
    const render = () => {
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.clearRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <canvas
                ref={canvasRef}
                id="canvas"
                {...props}
            ></canvas>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none' // Allows clicks to pass through to the canvas
            }}>
                {children}
            </div>
        </div>
    );
};

export default WaveAnimation;
