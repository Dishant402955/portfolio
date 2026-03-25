"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/intro";

interface HomeLayoutInterface {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutInterface) => {
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
};

export default HomeLayout;
