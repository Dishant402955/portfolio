"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { blog } from "@/constants/blogs";

export default function BlogPage() {
  return (
    <section className="w-full px-6 md:px-14 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-5"
        >
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            ← Back
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold">{blog.title}</h1>

          <p className="text-neutral-400">{blog.description}</p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col gap-10">
          {blog.content.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-neutral-300 leading-relaxed"
                  >
                    {block.value}
                  </motion.p>
                );

              case "heading":
                return (
                  <motion.h2
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-xl font-medium text-white"
                  >
                    {block.value}
                  </motion.h2>
                );

              case "image":
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img
                      src={block.src}
                      className="w-full h-75 md:h-100 object-cover"
                      alt="blog"
                    />
                  </motion.div>
                );

              case "code":
                return (
                  <motion.pre
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-neutral-900 border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"
                  >
                    <code className="text-neutral-300 whitespace-pre">
                      {block.value}
                    </code>
                  </motion.pre>
                );

              case "list":
                return (
                  <motion.ul
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2"
                  >
                    {block.items.map((item, idx) => (
                      <li key={idx} className="text-neutral-400 flex gap-2">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2" />
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
