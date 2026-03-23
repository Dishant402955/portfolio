"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const techGroups = [
  {
    title: "Languages",
    items: [
      {
        name: "C++",
        logo: "/cplusplus.svg",
        description:
          "It's a classic low level language i use for my problem solving practice.",
      },
      {
        name: "Python",
        logo: "/python.svg",
        description:
          "It's a language focusing on easy usability and i use it for machine learning tasks/projects.",
      },
      {
        name: "JavaScript",
        logo: "/javascript.svg",
        description:
          "It is the De Facto language for Web and i use it to build frontend, backend and even for desktop apps",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "Next.js",
        logo: "/nextdotjs.svg",
        description:
          "It's a meta-framework built on top of react with full-stack capabilties and it's a go-to choice for me when building full-stack web apps",
      },
      {
        name: "React",
        logo: "/react.svg",
        description:
          "It's a UI library with very high adoption across industry and also very solid cross-platfrom capabilities.",
      },
      {
        name: "Tailwind CSS",
        logo: "/tailwindcss.svg",
        description:
          "It's framework for writing CSS without pain and i swear i never want to go back to vanilla CSS after i started using it.",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "/nodedotjs.svg",
        description:
          "It's a javascript runtime i use to build backend server with help of frameworks like express.js & hono.js .",
      },
      {
        name: "Express",
        logo: "/express.svg",
        description:
          "It's a backend framework for Node.js which is very minimalistic & unopiniated.",
      },
      {
        name: "Hono",
        logo: "/hono.svg",
        description:
          "It's a modern day succesor to express.js focusing on edge deployments capabilities",
      },
      {
        name: "Socket.IO",
        logo: "/socketdotio.svg",
        description:
          "It's a rock-solid websocket library i use for all my real-time needs. ",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "PostgreSQL",
        logo: "/postgresql.svg",
        description:
          "It's a SQL database with extensive capabilities and it's a go-to choice for me whenever i need a relational db.",
      },
      {
        name: "MongoDB",
        logo: "/mongodb.svg",
        description:
          "It's a nosql database and also it's a go-to choice for me when i need non-relational capabilties",
      },
      {
        name: "Redis",
        logo: "/redis.svg",
        description:
          "It's a in memory db with uses cases such as to store session data and caching.",
      },
    ],
  },
  {
    title: "Platforms",
    items: [
      {
        name: "AWS",
        logo: "/aws.svg",
        description:
          "It's a very famous cloud-provider, biggest globally to be precise and also covers every kind of infrastructure need for every kind of people.",
      },
      {
        name: "Cloudflare",
        logo: "/cloudflare.svg",
        description:
          "It's a very famous hosting & security platform with global network and i use to unleash it's global infra capabilties.",
      },
      {
        name: "Vercel",
        logo: "/vercel.svg",
        description:
          "It's a hosting platform with global infra and known for it's fine-grained platform engineering and also an go-to choice for me to host my web apps.",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        name: "Git",
        logo: "/git.svg",
        description:
          "It's a version control system to handle code-bases the right way and i always praise it since the day i learned it.",
      },
      {
        name: "Electron",
        logo: "/electron.svg",
        description:
          "It's a frameowrk for building cross-platform dekstop apps with javascript, it wraps the html,css & js code around google's chromium engine & generates an binary. A ton of modern desktop are built with this framework.",
      },
      {
        name: "Ffmpeg",
        logo: "/ffmpeg.svg",
        description:
          "It's a rock-solid tool for image/video manipulation and i use it on my backend servers to do media stuff.",
      },
      {
        name: "Docker",
        logo: "/docker.svg",
        description:
          "it's a containerization technology to have an consistent dev & prod environment and i primarily use it for development purposes only.",
      },
    ],
  },
];

export const About = () => {
  const [selectedTech, setSelectedTech] = useState<any>(null);

  return (
    <section id="about" className="relative w-full px-6 md:px-14 py-28">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[6%] right-0 w-[900px] h-[900px]">
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
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="text-sm text-neutral-500 mb-4">{group.title}</p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedTech(item)}
                      className="px-3 py-1 rounded-md cursor-pointer  text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
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
                className="block border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.03] transition"
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
                className="block border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.03] transition"
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
                className="block border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.03] transition"
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
