"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Navbar = ({ showBrand }: { showBrand: boolean }) => {
  const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Blog", link: "#blog" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <div className="fixed top-10 w-full flex justify-center items-center h-14">
      <main className="h-full border border-white/10 w-[70%] rounded-4xl bg-neutral-900/80 flex justify-between items-center px-15">
        {/* 🔥 only appears during transition */}
        {showBrand && (
          <motion.span
            layoutId="brand"
            className="text-lg text-neutral-300 font-semibold"
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            Dishant
          </motion.span>
        )}

        <div className="h-full flex justify-center items-center gap-x-8">
          {navItems.map((item, idx) => {
            const isActive = activeHash === item.link;

            return (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setActiveHash(item.link)}
                className={cn(
                  "h-10 w-26 rounded-3xl flex justify-center items-center text-lg transition",
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:bg-neutral-900/90 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};
