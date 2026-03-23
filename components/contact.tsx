"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { MdContentCopy, MdDone } from "react-icons/md";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "dishantradadiya3036@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full px-6 md:px-14 py-28 relative">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-[-320px] top-[10%] w-[500px] h-[500px] opacity-90">
          <svg className="w-full h-full" viewBox="0 0 500 500">
            {/* ring */}
            <circle
              cx="250"
              cy="250"
              r="200"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="none"
            />

            {/* diagonal line */}
            <line
              x1="100"
              y1="100"
              x2="400"
              y2="400"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.6"
            />

            {/* horizontal */}
            <line
              x1="0"
              y1="250"
              x2="500"
              y2="250"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.5"
            />

            {/* nodes */}
            <circle cx="250" cy="250" r="5" fill="white" />
            <circle cx="150" cy="250" r="4" fill="rgba(255,255,255,0.85)" />
            <circle cx="350" cy="250" r="4" fill="rgba(255,255,255,0.85)" />
          </svg>
        </div>

        <div className="absolute right-[-320px] top-[10%] w-[500px] h-[500px] opacity-90">
          <svg className="w-full h-full" viewBox="0 0 500 500">
            <circle
              cx="250"
              cy="250"
              r="200"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="none"
            />

            {/* diagonal line */}
            <line
              x1="120"
              y1="50"
              x2="380"
              y2="450"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.6"
            />

            {/* angled line */}
            <line
              x1="0"
              y1="200"
              x2="500"
              y2="300"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth="1.5"
            />

            {/* nodes */}
            <circle cx="250" cy="250" r="5" fill="white" />
            <circle cx="300" cy="200" r="4" fill="rgba(255,255,255,0.85)" />
            <circle cx="200" cy="320" r="4" fill="rgba(255,255,255,0.85)" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-14 items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 items-center"
        >
          <p className="text-lg md:text-xl text-neutral-200">
            Open to opportunities and project collaborations
          </p>

          <span className="text-lg text-neutral-500 border border-white/10 px-4 py-1 rounded-full">
            Available for internships / roles
          </span>
        </motion.div>

        <div className="w-full flex flex-col sm:flex-row gap-4">
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
            className="flex-1 border border-white/20 min-w-[33%] rounded-xl p-6 bg-white/2 hover:border-white/50 hover:bg-white/[0.04] transition"
          >
            <p className="text-neutral-500 text-sm mb-2">Email</p>
            <div className="w-full flex justify-center items-center gap-x-2 ">
              <p className="text-neutral-200 font-medium truncate">{email}</p>
              <button
                onClick={copyEmail}
                className="cursor-pointer text-sm px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                {copied ? <MdDone /> : <MdContentCopy />}
              </button>
            </div>
          </motion.div>

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
            className="flex-1 border border-white/20 rounded-xl p-6 bg-white/[0.02] hover:border-white/50 hover:bg-white/[0.04] transition"
          >
            <p className="text-neutral-500 text-sm mb-2">LinkedIn</p>
            <Link
              href="https://linkedin.com/in/dishant-radadiya"
              target="_blank"
              className="text-neutral-200 font-medium hover:underline truncate"
            >
              linkedin.com/in/dishant-radadiya
            </Link>
          </motion.div>

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
            className="flex-1 border border-white/20 rounded-xl p-6 bg-white/[0.02] hover:border-white/50 hover:bg-white/[0.04] transition"
          >
            <p className="text-neutral-500 text-sm mb-2">Resume</p>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-neutral-200 font-medium hover:underline"
            >
              Download Resume →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
