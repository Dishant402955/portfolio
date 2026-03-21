"use client";
import { motion } from "motion/react";
import { useEffect } from "react";

export const Intro = ({
  phase,
  setPhase,
}: {
  phase: "intro" | "transition" | "done";
  setPhase: (p: "intro" | "transition" | "done") => void;
}) => {
  useEffect(() => {
    if (phase === "intro") {
      const t = setTimeout(() => {
        setPhase("transition");
      }, 2200); // longer because of stroke animation
      return () => clearTimeout(t);
    }

    if (phase === "transition") {
      const t = setTimeout(() => {
        setPhase("done");
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [phase, setPhase]);

  return (
    <motion.div
      className="fixed h-screen w-screen z-999 bg-black flex justify-center items-center"
      animate={{ opacity: phase === "transition" ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        layoutId="brand"
        className="flex justify-center items-center"
        style={{ position: "relative", zIndex: 1000 }}
        animate={{
          scale: phase === "transition" ? 0.4 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <svg width="500" height="120" viewBox="0 0 500 120">
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-semibold"
            style={{
              fontSize: "72px",
              fill: "white",
              stroke: "white",
              strokeWidth: 1,
            }}
            initial={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              fillOpacity: 0,
            }}
            animate={{
              strokeDashoffset: 0,
              fillOpacity: 1,
            }}
            transition={{
              strokeDashoffset: {
                duration: 1.4,
                ease: "easeInOut",
              },
              fillOpacity: {
                delay: 1.2,
                duration: 0.6,
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
