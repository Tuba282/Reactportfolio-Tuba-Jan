import { cn } from "/lib/utils";
import {  motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName
}) => {
    // Merge all words into a single array of characters, adding a space after each word except the last
    motion
    const chars = words.flatMap((word, wordIdx) => {
        const charsArr = word.text.split("").map((char) => ({
            char,
            className: word.className || ""
        }));
        // Add a non-breaking space after each word except the last (no extra class)
        if (wordIdx !== words.length - 1) {
            charsArr.push({ char: "\u00A0", className: "" });
        }
        return charsArr;
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                "span.typewriter-char",
                {
                    opacity: 1,
                    display: "inline-block",
                },
                {
                    duration: 0.2,
                    delay: stagger(0.07),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView, animate]);

    const renderChars = () => (
        <motion.div ref={scope} className="inline">
            {chars.map((item, idx) => (
                <motion.span
                    key={`char-${idx}`}
                    className={cn(
                        "typewriter-char dark:text-white text-black opacity-0",
                        item.className
                    )}
                    initial={{ opacity: 0, display: "inline-block", transform: 'translateY(0.5em)' }}
                    animate={{ opacity: 1, display: "inline-block", transform: 'translateY(0)' }}
                    transition={{ duration: 0.3 }}
                >
                    {item.char}
                </motion.span>
            ))}
        </motion.div>
    );
    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl  font-bold text-center",
                className
            )}
        >
            {renderChars()}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px]  h-[48px] lg:h-[128px] md:h-[72px] ",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block mx-3 ">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black `, word.className)}>
                                    {char}
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}>
                <div
                    className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}>
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px]  h-[48px] lg:h-[128px] md:h-[72px] bg-amber-50",
                    cursorClassName
                )}></motion.span>
        </div>
    );
};
