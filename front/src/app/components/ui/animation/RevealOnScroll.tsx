"use client";

import { useEffect, useRef, useState } from "react";

type RevelOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevelOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    const elemnt = ref.current;
    if (!elemnt) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setvisible(true);
          observer.unobserve(elemnt);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -120px 0px" },
    );
    observer.observe(elemnt);
    return () => observer.disconnect();
  }, []);

  const baseStyles = "transition-all duration-700 ease-out";

  const hiddenStyles = {
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    up: "opacity-0 transate-y-10",
    down: "opacity-0 -transalte-y-10",
  };

  const visibleStyles = "opacity-100 transalte-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${baseStyles} ${
        visible ? visibleStyles : hiddenStyles[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
