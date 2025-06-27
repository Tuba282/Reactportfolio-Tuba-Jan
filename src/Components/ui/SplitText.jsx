import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function SplitText({ text }) {
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return


            containerRef.current.style.visibility = "visible"

            const h2 = containerRef.current.querySelector("h2")
            if (!h2) return

            const { words } = splitText(h2)


            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h2 className="h2">
                {text}
            </h2>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    )
}
