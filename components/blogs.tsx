"use client";

import Link from "next/link";
import { motion } from "motion/react";

export const Blogs = () => {
  const items = [
    {
      id: 1,
      slug: "first-blog",
      title: "First Blog",
      description:
        "It's an authentication server with support for email-password, OAuth, passkey & OTP[email] & webhooks.",
      thumbURL:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      slug: "second-blog",
      title: "Second Blog",
      description:
        "A deep dive into modern web development, covering Next.js, React, and server-side rendering techniques.",
      thumbURL:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      slug: "third-blog",
      title: "Third Blog",
      description:
        "Exploring state management solutions, from Redux to Zustand and everything in between.",
      thumbURL:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      slug: "fourth-blog",
      title: "Fourth Blog",
      description:
        "Performance optimization strategies for large-scale React applications, including lazy loading and code splitting.",
      thumbURL:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      slug: "fifth-blog",
      title: "Fifth Blog",
      description:
        "Understanding TypeScript for React developers: tips, tricks, and common pitfalls.",
      thumbURL:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      slug: "sixth-blog",
      title: "Sixth Blog",
      description:
        "Building accessible web applications: ARIA, keyboard navigation, and screen reader support.",
      thumbURL:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="blog" className="w-full py-20">
      <div className="px-4 md:px-6 lg:px-10 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Blogs</h2>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.02, y: -3 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              duration: 0.3,
            }}
            className="bg-neutral-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
              <img
                src={item.thumbURL}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
                <div className="mt-3">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="inline-block px-3 py-2 text-sm font-medium rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
