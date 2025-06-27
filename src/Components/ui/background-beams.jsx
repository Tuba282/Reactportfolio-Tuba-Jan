import { cn } from "/lib/utils";

export function GridBackgroundDemo() {
    return (
        <div
            className="relative flex h-[46rem] w-full items-center justify-center bg-neutral-900 dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#ffffff29_1px,transparent_1px),linear-gradient(to_bottom,#ffffff29_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#ffffff29_1px,transparent_1px),linear-gradient(to_bottom,#ffffff29_1px,transparent_1px)]"
                )} />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        </div>
    );
}
