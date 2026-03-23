"use client";

import { motion } from "motion/react";
import Link from "next/link";

type Block =
  | { type: "paragraph"; value: string }
  | { type: "heading"; value: string }
  | { type: "image"; src: string }
  | { type: "code"; language: string; value: string }
  | { type: "list"; items: string[] };

export default function BlogPage() {
  const blog: {
    title: string;
    description: string;
    content: Block[];
  } = {
    title: "Building a Cross-Platform Clipboard",
    description:
      "A deep dive into building a real-time, encrypted clipboard system across devices.",
    content: [
      {
        type: "paragraph",
        value:
          "Copy-paste feels simple until you try to extend it across devices. What starts as a utility quickly becomes a distributed system.",
      },

      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      },

      {
        type: "heading",
        value: "The Real Problem",
      },

      {
        type: "list",
        items: [
          "How do you sync instantly?",
          "How do you handle multiple devices?",
          "How do you keep data secure?",
        ],
      },

      {
        type: "paragraph",
        value:
          "The moment you introduce real-time sync and encryption, complexity increases dramatically.",
      },

      {
        type: "heading",
        value: "Real-Time Sync",
      },

      {
        type: "paragraph",
        value:
          "Polling is too slow. WebSockets provide a persistent connection and real-time updates.",
      },

      {
        type: "code",
        language: "ts",
        value: `const socket = new WebSocket("wss://example.com");

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateClipboard(data);
};`,
      },

      {
        type: "paragraph",
        value:
          "Even 200ms delay can break the experience. Clipboard UX is extremely latency sensitive.",
      },

      {
        type: "image",
        src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200&auto=format&fit=crop",
      },

      {
        type: "heading",
        value: "Encryption Layer",
      },

      {
        type: "paragraph",
        value:
          "Security is critical because clipboard data often contains sensitive information.",
      },

      {
        type: "code",
        language: "ts",
        value: `import crypto from "crypto";

function encrypt(text: string, key: string) {
  const cipher = crypto.createCipher("aes-256-cbc", key);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}`,
      },

      {
        type: "heading",
        value: "State Management",
      },

      {
        type: "code",
        language: "ts",
        value: `type ClipboardState = {
  content: string;
  updatedAt: number;
  deviceId: string;
};`,
      },

      {
        type: "paragraph",
        value:
          "We use timestamps to determine which clipboard version is the latest.",
      },

      {
        type: "heading",
        value: "Challenges",
      },

      {
        type: "list",
        items: [
          "Conflict resolution across devices",
          "Offline sync handling",
          "Maintaining encryption performance",
        ],
      },

      {
        type: "paragraph",
        value:
          "Each of these problems required careful trade-offs between performance and reliability.",
      },

      {
        type: "heading",
        value: "Final Thoughts",
      },

      {
        type: "paragraph",
        value:
          "This project taught me that real-time systems are deceptively complex, and UX expectations define architecture more than anything else.",
      },
    ],
  };

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
                      className="w-full h-[300px] md:h-[400px] object-cover"
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
