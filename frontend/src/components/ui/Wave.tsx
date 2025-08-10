import { useEffect, useRef } from "react";

export default function ParallaxWaves() {
  const wave1 = useRef(null);
  const wave2 = useRef(null);
  const wave3 = useRef(null);

  useEffect(() => {
    let offset1 = 0;
    let offset2 = 0;
    let offset3 = 0;
    const waveWidth = 1200; // matches single wave segment width

    const animate = () => {
      offset1 = (offset1 - 0.3) % waveWidth; // slowest
      offset2 = (offset2 - 0.6) % waveWidth; // medium
      offset3 = (offset3 - 1.0) % waveWidth; // fastest

      if (wave1.current) wave1.current.setAttribute("transform", `translate(${offset1} 0)`);
      if (wave2.current) wave2.current.setAttribute("transform", `translate(${offset2} 0)`);
      if (wave3.current) wave3.current.setAttribute("transform", `translate(${offset3} 0)`);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-full h-32 overflow-hidden bg-black">
      <svg
        className="absolute bottom-0 left-0 w-[300%] h-32"
        viewBox="0 0 2400 100"
        preserveAspectRatio="none"
      >
        {/* Wave 1 - Slow */}
        <g ref={wave1} className="fill-gray-900 opacity-50">
          <path d="M0 30 Q 300 60 600 30 T 1200 30 V100 H0 Z" />
          <path d="M1200 30 Q 1500 60 1800 30 T 2400 30 V100 H1200 Z" />
        </g>

        {/* Wave 2 - Medium */}
        <g ref={wave2} className="fill-gray-800 opacity-70">
          <path d="M0 50 Q 300 20 600 50 T 1200 50 V100 H0 Z" />
          <path d="M1200 50 Q 1500 20 1800 50 T 2400 50 V100 H1200 Z" />
        </g>

        {/* Wave 3 - Fast */}
        <g ref={wave3} className="fill-gray-700 opacity-90">
          <path d="M0 70 Q 300 100 600 70 T 1200 70 V100 H0 Z" />
          <path d="M1200 70 Q 1500 100 1800 70 T 2400 70 V100 H1200 Z" />
        </g>
      </svg>
    </div>
  );
}
