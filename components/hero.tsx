"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ShinyText from "./ui/ShinyText";
import { MorphingText } from "./ui/morphing-text";
import { RainbowButton } from "./ui/rainbow-button";
import { ShimmerButton } from "./ui/shimmer-button";

export const Hero = () => {
  const texts = ["Full-stack apps", "Backend systems"];
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 3200);
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
      <motion.div
        variants={container}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        className="max-w-4xl w-full flex flex-col items-center text-center"
      >
        {/* Intro */}
        <motion.div variants={item}>
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
          variants={item}
          className="mt-6 text-5xl sm:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          I build fast, precise <br />
          <span className="bg-linear-to-r from-color-3 via-color-4 to-color-5 bg-clip-text text-transparent">
            <MorphingText texts={texts} className="text-white" />
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-neutral-400 text-base sm:text-lg max-w-xl"
        >
          Focused on performance, system design, and clean architecture.
        </motion.p>

        {/* CTA */}
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
