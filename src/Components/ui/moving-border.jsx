
import React, { useRef, useContext } from 'react';
import { ThemeContext } from '/src/Settings/ThemeProvider.jsx';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "motion/react";
import { cn } from "/lib/utils";

export function Div({
    borderRadius = "1.75rem",
    children,
    // eslint-disable-next-line
    as: Component = "div",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}) {
    motion
    // eslint-disable-next-line
    const { theme } = useContext(ThemeContext);
    return (
        <Component
            className={cn(
                "relative overflow-hidden drop-shadow-sm drop-shadow-white/80 rounded bg-transparent p-[1px]",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}>
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
                <MovingBorder duration={duration} rx="10%" ry="10%">
                    <div
                        className={cn(
                            `h-20 w-20 bg-[radial-gradient(#fff_40%,transparent_60%)] rounded opacity-[0.8]`,
                            borderClassName
                        )} />
                </MovingBorder>
            </div>
            <div
                className={cn(
                    "relative flex h-full w-full text-sm text-white/50 antialiased rounded backdrop-blur-xl",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}>
                {children}
            </div>
        </Component>
    );
}

export const MovingBorder = ({
    children,
    duration = 10000,
    rx,
    ry,
    ...otherProps
}) => {
    const pathRef = useRef();
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}>
                <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}>
                {children}
            </motion.div>
        </>
    );
};
