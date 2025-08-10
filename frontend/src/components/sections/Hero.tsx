
import { useEffect, useRef } from "react";
import gsap from "gsap";
// @ts-ignore
import SplitText from "gsap/SplitText";

const Hero = () => {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(SplitText);
        if (headlineRef.current) {
            // Split headline into chars for animation
            const split = new SplitText(headlineRef.current, { type: 'chars' });
            gsap.fromTo(
                split.chars,
                { y: 60, opacity: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.1,
                    stagger: 0.04,
                    ease: "power3.out",
                }
            );
        }
        if (subRef.current) {
            gsap.fromTo(
                subRef.current,
                { y: 40, opacity: 0, filter: "blur(8px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    delay: 0.5,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    return (
        <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.webp)' }} />
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Content above background */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
                <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold font-[f.] text-white drop-shadow-lg">Welcome to Our Store</h1>
                <p ref={subRef} className="mt-4 text-lg md:text-2xl text-white/90">Discover the latest trends and exclusive offers.</p>
            </div>
        </section>
    )
}

export default Hero