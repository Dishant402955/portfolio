"use client";

import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/intro";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"intro" | "transition" | "done">("intro");

  return (
    <>
      <Navbar showBrand={phase !== "intro"} />

      <AnimatePresence>
        {phase !== "done" && <Intro phase={phase} setPhase={setPhase} />}
      </AnimatePresence>

      {children}
    </>
  );
}
