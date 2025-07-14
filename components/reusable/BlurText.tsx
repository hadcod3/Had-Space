import { useRef, useEffect, useState } from "react";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "10px",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
          if (onAnimationComplete) onAnimationComplete();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, onAnimationComplete]);

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out opacity-0 ${
            inView ? "opacity-100 translate-y-0" : direction === "top" ? "-translate-y-5" : "translate-y-5"
          }`}
          style={{
            transitionDelay: `${index * delay}ms`,
            filter: inView ? "blur(0px)" : "blur(8px)",
          }}
        >
          {char === " " ? "\u00A0" : char}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
