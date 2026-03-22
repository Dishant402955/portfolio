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
    <section id="contact" className="w-full px-6 md:px-14 py-28">
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
            className="flex-1 border border-white/10 min-w-[33%] rounded-xl p-6 bg-white/2 hover:border-white/20 hover:bg-white/[0.04] transition"
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
            className="flex-1 border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition"
          >
            <p className="text-neutral-500 text-sm mb-2">LinkedIn</p>
            <Link
              href="https://linkedin.com/in/dishant-radadiya"
              target="_blank"
              className="text-neutral-200 font-medium hover:underline"
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
            className="flex-1 border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition"
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
