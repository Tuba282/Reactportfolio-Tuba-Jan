import { useEffect, useRef, useId } from "react";
import { motion, useAnimation } from "motion/react";
import { cn } from "/lib/utils";

export const SparklesCore = (props) => {
    const {
        id,
        className,
        background,
        minSize = 1,
        maxSize = 3,
        speed = 4,
        particleColor = "#ffffff",
        particleDensity = 120,
    } = props;

    const canvasRef = useRef(null);
    const controls = useAnimation();
    const generatedId = useId();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles = [];
        let animationId;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const w = parent.clientWidth;
            const h = parent.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            initParticles(w, h);
        };

        const initParticles = (w, h) => {
            particles = [];
            const count = Math.min(particleDensity, Math.floor((w * h) / 1200));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: minSize + Math.random() * (maxSize - minSize),
                    opacity: Math.random(),
                    speedY: (Math.random() - 0.5) * 0.3,
                    speedX: (Math.random() - 0.5) * 0.3,
                    fadeSpeed: (Math.random() * 0.02 + 0.005) * (speed / 4),
                    fadeDir: Math.random() > 0.5 ? 1 : -1,
                });
            }
        };

        const draw = () => {
            const w = canvas.width / dpr;
            const h = canvas.height / dpr;
            ctx.clearRect(0, 0, w, h);

            if (background && background !== "transparent") {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, w, h);
            }

            particles.forEach((p) => {
                p.opacity += p.fadeSpeed * p.fadeDir;
                if (p.opacity >= 1) { p.opacity = 1; p.fadeDir = -1; }
                if (p.opacity <= 0.1) { p.opacity = 0.1; p.fadeDir = 1; }

                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
            });
            ctx.globalAlpha = 1;
            animationId = requestAnimationFrame(draw);
        };

        resize();
        draw();
        controls.start({ opacity: 1, transition: { duration: 1 } });

        const resizeObserver = new ResizeObserver(resize);
        if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

        return () => {
            cancelAnimationFrame(animationId);
            resizeObserver.disconnect();
        };
    }, [background, minSize, maxSize, speed, particleColor, particleDensity, controls]);

    return (
        <motion.div animate={controls} className={cn("opacity-0", className)}>
            <canvas
                ref={canvasRef}
                id={id || generatedId}
                className="h-full w-full"
            />
        </motion.div>
    );
};
