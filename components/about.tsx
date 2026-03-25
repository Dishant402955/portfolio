"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { techGroups } from "@/constants/about";

export const About = () => {
  const [selectedTech, setSelectedTech] = useState<any>(null);

  return (
    <section id="about" className="relative w-full px-6 md:px-14 py-28">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[6%] right-0 w-225 h-225 max-md:h-120 max-md:w-120">
          <svg className="w-full h-full" viewBox="0 0 900 900">
            {/* OUTER ORBIT */}
            <g className="origin-[100%_50%] animate-[spin_110s_linear_infinite]">
              <circle
                cx="900"
                cy="450"
                r="420"
                stroke="rgba(255,255,255,0.34)"
                strokeWidth="1.8"
                fill="none"
              />

              {/* 4 evenly spaced stars */}
              <g transform="rotate(0 900 450)">
                <circle cx="480" cy="450" r="5" fill="white" />
              </g>
              <g transform="rotate(90 900 450)">
                <circle
                  cx="480"
                  cy="450"
                  r="4.5"
                  fill="rgba(255,255,255,0.85)"
                />
              </g>
              <g transform="rotate(180 900 450)">
                <circle cx="480" cy="450" r="4" fill="rgba(255,255,255,0.75)" />
              </g>
              <g transform="rotate(270 900 450)">
                <circle
                  cx="480"
                  cy="450"
                  r="4.5"
                  fill="rgba(255,255,255,0.9)"
                />
              </g>
            </g>

            {/* MID ORBIT */}
            <g className="origin-[100%_50%] animate-[spin_85s_linear_infinite]">
              <circle
                cx="900"
                cy="450"
                r="330"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.6"
                fill="none"
              />

              <g transform="rotate(0 900 450)">
                <circle
                  cx="570"
                  cy="450"
                  r="4.5"
                  fill="rgba(255,255,255,0.9)"
                />
              </g>
              <g transform="rotate(120 900 450)">
                <circle cx="570" cy="450" r="4" fill="rgba(255,255,255,0.7)" />
              </g>
              <g transform="rotate(240 900 450)">
                <circle
                  cx="570"
                  cy="450"
                  r="4.2"
                  fill="rgba(255,255,255,0.8)"
                />
              </g>
            </g>

            {/* INNER ORBIT */}
            <g className="origin-[100%_50%] animate-[spin_65s_linear_infinite]">
              <circle
                cx="900"
                cy="450"
                r="250"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.4"
                fill="none"
              />

              <g transform="rotate(0 900 450)">
                <circle cx="650" cy="450" r="4" fill="rgba(255,255,255,0.85)" />
              </g>
              <g transform="rotate(120 900 450)">
                <circle
                  cx="650"
                  cy="450"
                  r="3.5"
                  fill="rgba(255,255,255,0.65)"
                />
              </g>
              <g transform="rotate(240 900 450)">
                <circle
                  cx="650"
                  cy="450"
                  r="3.8"
                  fill="rgba(255,255,255,0.75)"
                />
              </g>
            </g>

            {/* CORE ORBIT */}
            <g className="origin-[100%_50%] animate-[spin_50s_linear_infinite]">
              <circle
                cx="900"
                cy="450"
                r="170"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.3"
                fill="none"
              />

              <g transform="rotate(0 900 450)">
                <circle
                  cx="730"
                  cy="450"
                  r="3.5"
                  fill="rgba(255,255,255,0.75)"
                />
              </g>
              <g transform="rotate(180 900 450)">
                <circle cx="730" cy="450" r="3" fill="rgba(255,255,255,0.55)" />
              </g>
            </g>
          </svg>

          {/* 🔥 CORRECT VISIBILITY CONTROL */}
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 90%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 90%)",
            }}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <h2 className="text-3xl md:text-4xl font-semibold">About</h2>

        {/* Intro */}
        <div className="max-w-3xl flex flex-col gap-6">
          <p className="text-lg md:text-xl text-neutral-200">
            I’m a pre-final year Computer Science student at IIIT Surat, focused
            on building scalable and reliable systems.
          </p>
          <p className="text-neutral-400">
            I primarily work on backend systems and full-stack applications,
            focusing on clean architecture, performance, and usability.
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-col gap-8">
          <h3 className="text-lg font-medium text-neutral-300">Tools I Use</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-fit">
            {techGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="rounded-xl border border-white/20 bg-white/2 p-5"
              >
                <p className="text-sm text-neutral-500 mb-4">{group.title}</p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedTech(item)}
                      className="px-3 py-1 rounded-md cursor-pointer
                      text-sm bg-white/5 border border-white/20 hover:bg-white/10 transition
                      flex justify-center items-center gap-x-2 max-md:text-xs"
                    >
                      <Image
                        height={15}
                        width={15}
                        alt="logo"
                        src={item.logo}
                        className="text-white"
                      />
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROFILES */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-medium text-neutral-300">Profiles</h3>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 0.3,
              }}
              className="flex-1"
            >
              <Link
                href="https://github.com/Dishant402955"
                target="_blank"
                className="block border border-white/20 rounded-xl p-5 hover:border-white/50 hover:bg-white/3 transition"
              >
                <p className="text-neutral-400 text-sm mb-1">GitHub</p>
                <p className="text-neutral-200 font-medium">
                  github.com/Dishant402955
                </p>
              </Link>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 0.3,
              }}
              className="flex-1"
            >
              <Link
                href="https://linkedin.com/in/dishant-radadiya"
                target="_blank"
                className="block border border-white/20 rounded-xl p-5 hover:border-white/50 hover:bg-white/3 transition"
              >
                <p className="text-neutral-400 text-sm mb-1">LinkedIn</p>
                <p className="text-neutral-200 font-medium">
                  linkedin.com/in/dishant-radadiya
                </p>
              </Link>
            </motion.div>

            {/* LeetCode */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 0.3,
              }}
              className="flex-1"
            >
              <Link
                href="https://leetcode.com/u/dishantradadiya3036"
                target="_blank"
                className="block border border-white/20 rounded-xl p-5 hover:border-white/50 hover:bg-white/3 transition"
              >
                <p className="text-neutral-400 text-sm mb-1">LeetCode</p>
                <p className="text-neutral-200 font-medium">
                  leetcode.com/u/dishantradadiya3036
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-white/10 rounded-xl p-6 w-[90%] max-w-md"
            >
              {/* Logo */}
              <div className="mb-4">
                <Image
                  height={30}
                  width={30}
                  alt="logo"
                  src={selectedTech.logo}
                  className="text-white"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedTech.name}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm">
                {selectedTech.description || "Add description here."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
