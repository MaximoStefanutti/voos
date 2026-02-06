"use client";

import { useEffect, useRef, useState } from "react";

type RevelOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealOnSroll({
  children,
  className = "",
  delay = 0,
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

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 transalte-y-8"}
      ${className}`}
    >
      {children}
    </div>
  );
}
