"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import ShinyText from "@/components/ui/ShinyText";
import { MorphingText } from "@/components/ui/morphing-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const Hero = () => {
  const texts = ["Full-stack apps", "Backend systems"];
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.45,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 pt-24"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.12),transparent_55%)]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.6) 0.8px, transparent 0.8px)
            `,
            backgroundSize: "14px 14px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                135deg,
                rgba(255,255,255,0.4) 0px,
                rgba(255,255,255,0.4) 1px,
                transparent 1px,
                transparent 80px
              )
            `,
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/70" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        className="max-w-7xl w-full flex flex-col items-center text-center"
      >
        <motion.div
          // @ts-expect-error  "Just expect an error broo."
          variants={item}
        >
          <ShinyText
            text="Hi, I'm Dishant"
            speed={1}
            color="#777"
            shineColor="#fff"
            spread={100}
            direction="left"
            className="text-2xl sm:text-3xl"
          />
        </motion.div>

        <motion.h1
          // @ts-expect-error  "Just expect an error broo."
          variants={item}
          className="mt-6 text-5xl sm:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          I build fast, precise <br />
          <span className="bg-linear-to-r from-color-3 via-color-4 to-color-5 bg-clip-text text-transparent">
            <MorphingText
              texts={texts}
              className="text-white text-[2.8rem] max-sm:text-4xl"
            />
          </span>
        </motion.h1>

        <motion.p
          // @ts-expect-error  "Just expect an error broo."
          variants={item}
          className="mt-6 text-neutral-400 text-base sm:text-lg max-w-xl"
        >
          Focused on performance, system design, and clean architecture.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.96 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="mt-12 flex gap-5 justify-center items-center"
        >
          <motion.a href="#projects" whileHover={{ scale: 1.06 }}>
            <ShimmerButton>View Projects</ShimmerButton>
          </motion.a>

          <motion.a href="#blog" whileHover={{ scale: 1.06 }}>
            <RainbowButton
              size="lg"
              className="text-black py-5 text-lg bg-white/90 hover:bg-white"
            >
              Read Blog
            </RainbowButton>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
