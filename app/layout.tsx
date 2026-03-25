"use client";

import { Analytics } from "@vercel/analytics/next";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

interface RootLayoutInterface {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutInterface) => {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col w-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
