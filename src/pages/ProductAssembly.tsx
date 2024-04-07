import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ProductAssembly.css";

const ProductAssembly: React.FC = () => {
  const part1Ref = useRef<HTMLDivElement>(null);
  const part2Ref = useRef<HTMLDivElement>(null);
  const part3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure elements are not null
    if (part1Ref.current && part2Ref.current && part3Ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#assemblyContainer",
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(part1Ref.current, { x: 0, y: 0, duration: 1 })
        .to(part2Ref.current, { x: 0, y: 0, duration: 1 })
        .to(part3Ref.current, { x: 0, y: 0, duration: 1 });
    }
  }, []);

  return (
    <div id="assemblyContainer" style={{ height: "150vh", background: "#f0f0f0" }}>
      <div ref={part1Ref} className="product-part" style={partStyle(100, -300, -100)}>
        Part 1
      </div>
      <div ref={part2Ref} className="product-part" style={partStyle(100, 300, -50)}>
        Part 2
      </div>
      <div ref={part3Ref} className="product-part" style={partStyle(100, -100, 200)}>
        Part 3
      </div>
    </div>
  );
};

const partStyle = (size: number, startX: number, startY: number): React.CSSProperties => ({
  width: `${size}px`,
  height: `${size}px`,
  background: "royalblue",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: `calc(50% + ${startX}px)`,
  top: `50%`,
  transform: `translateY(${startY}px)`,
});

export default ProductAssembly;
