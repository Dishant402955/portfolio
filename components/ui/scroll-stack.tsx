"use client";

import React, { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

export const ScrollStackItem = ({
  children,
  index,
  total,
}: {
  children: ReactNode;
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.25;
      const end = viewportHeight * 0.85;

      let p = (start - rect.top) / (start - end);
      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 - progress * 0.08;
  const translateY = index * 40 * progress;
  const opacity = 1;

  return (
    <div
      ref={ref}
      className="sticky top-[18vh] w-full"
      style={{
        zIndex: index + 1,
      }}
    >
      <div
        className="w-full px-2 md:px-6 lg:px-10 will-change-transform transition-transform duration-200"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ScrollStack = ({ children, className }: ScrollStackProps) => {
  const items = React.Children.toArray(children);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="flex flex-col gap-[22vh] pb-[35vh] w-full">
        {items.map((child, i) => (
          <ScrollStackItem key={i} index={i} total={items.length}>
            {child}
          </ScrollStackItem>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
