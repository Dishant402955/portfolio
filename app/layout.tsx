"use client";

import "./globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/intro";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"intro" | "transition" | "done">("intro");

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col w-full">
        {/* 🔥 Navbar knows when to show brand */}
        <Navbar showBrand={phase !== "intro"} />

        <AnimatePresence>
          {phase !== "done" && <Intro phase={phase} setPhase={setPhase} />}
        </AnimatePresence>

        {children}
      </body>
    </html>
  );
}
