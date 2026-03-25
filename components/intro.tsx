"use client";
import { motion } from "motion/react";
import { useEffect } from "react";

interface IntroInterface {
  phase: "intro" | "transition" | "done";
  setPhase: (p: "intro" | "transition" | "done") => void;
}

export const Intro = ({ phase, setPhase }: IntroInterface) => {
  useEffect(() => {
    if (phase === "intro") {
      const t = setTimeout(() => setPhase("transition"), 2300);
      return () => clearTimeout(t);
    }

    if (phase === "transition") {
      const t = setTimeout(() => setPhase("done"), 900);
      return () => clearTimeout(t);
    }
  }, [phase, setPhase]);

  return (
    <motion.div
      className="fixed h-screen w-screen z-999 bg-black flex items-center justify-center"
      animate={{ opacity: phase === "transition" ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        layoutId="brand"
        animate={{
          scale: phase === "transition" ? 0.45 : 1,
          y: phase === "transition" ? -8 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <svg width="520" height="140" viewBox="0 0 520 140">
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-semibold tracking-tight"
            style={{
              fontSize: "80px",
              fill: "white",
              stroke: "white",
              strokeWidth: 1.2,
            }}
            initial={{
              strokeDasharray: 1200,
              strokeDashoffset: 1200,
              fillOpacity: 0,
            }}
            animate={{
              strokeDashoffset: 0,
              fillOpacity: 1,
            }}
            transition={{
              strokeDashoffset: {
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1],
              },
              fillOpacity: {
                delay: 1.2,
                duration: 0.6,
                ease: "easeOut",
              },
            }}
          >
            Dishant
          </motion.text>
        </svg>
      </motion.div>
    </motion.div>
  );
};
