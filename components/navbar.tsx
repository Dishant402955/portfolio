"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MdMenu } from "react-icons/md";

export const Navbar = ({ showBrand }: { showBrand: boolean }) => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Blog", link: "#blog" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const [activeHash, setActiveHash] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.link.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let isScrolling = false;

    const handleScroll = () => {
      isScrolling = true;

      let currentSection = sections[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        // section whose top is closest but still above mid screen
        if (rect.top <= window.innerHeight * 0.4) {
          currentSection = section;
        }
      }

      const newHash = `#${currentSection.id}`;

      if (newHash !== activeHash) {
        setActiveHash(newHash);
        history.replaceState(null, "", newHash);
      }

      // reset scroll flag after frame
      requestAnimationFrame(() => {
        isScrolling = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeHash]);

  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: showBrand ? 1 : 0, y: showBrand ? 0 : -10 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "w-full max-w-4xl h-14",
          "flex items-center justify-between px-6",
          "rounded-full border border-white/30",
          "bg-neutral-900/60 backdrop-blur-xl",
        )}
      >
        {showBrand && (
          <motion.span
            layoutId="brand"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Dishant
          </motion.span>
        )}

        <div className="relative px-5 py-2 text-base font-medium">
          {navItems.map((item) => {
            const isActive = activeHash === item.link;

            return (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setActiveHash(item.link)}
                className="relative px-4 py-1.5 text-sm font-medium max-md:hidden"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white",
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-base text-neutral-300"
        >
          <MdMenu />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 w-full max-w-3xl px-4 md:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeHash === item.link;

                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => {
                      setActiveHash(item.link);
                      setOpen(false);
                    }}
                    className={cn(
                      "px-5 py-3 rounded-xl text-base font-medium",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-neutral-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
