"use client";

import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/cards-demo-3";
import { cn } from "@/lib/utils";
import ScrollStack from "@/components/ui/scroll-stack";
import { items } from "@/constants/projects";

export const Projects = () => {
  return (
    <section id="projects" className="w-full pt-18 relative">
      <div className="px-4 md:px-6 lg:px-10 mb-18 flex justify-center items-center pt-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
      </div>

      <ScrollStack className="w-full">
        {items.map((item, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <div
              className="flex justify-center w-full max-md:px-8"
              key={item.id}
            >
              <Card className="relative overflow-hidden rounded-xl w-full max-w-250 h-110 bg-white dark:bg-neutral-900">
                <div className="pointer-events-none absolute inset-0">
                  <div className="beam-dot" />
                </div>

                <div
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-10  max-md:gap-4  h-full p-8 max-md:p-0",
                    isReversed && "md:flex-row-reverse",
                  )}
                >
                  <div className="w-full md:w-1/2">
                    <div className="w-full h-30 md:h-64 rounded-xl overflow-hidden">
                      <img
                        src={
                          item.thumbURL ||
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                        }
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <CardTitle className="text-2xl max-md:text-lg">
                      {item.title}
                    </CardTitle>

                    <CardDescription className="mt-3 text-basem max-md:text-sm">
                      {item.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex md:flex-wrap gap-3 mt-6">
                      <a
                        href={item.previewLink}
                        target="_blank"
                        className="px-4 py-2 text-sm max-md:text-xs rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium"
                      >
                        <span className="max-md:hidden"> Live Preview</span>
                        <span className="md:hidden">Preview</span>
                      </a>

                      <Link
                        href={`/project/${item.slug}`}
                        className="px-4 py-2 text-sm max-md:text-xs rounded-lg border border-black/20 dark:border-white/20"
                      >
                        <span className="max-md:hidden"> View Details</span>
                        <span className="md:hidden">Details</span>
                      </Link>

                      <a
                        href={item.projectLink}
                        target="_blank"
                        className="px-4 py-2 text-sm max-md:text-xs rounded-lg border border-black/20 dark:border-white/20 text-neutral-600 dark:text-neutral-300"
                      >
                        <span className="max-md:hidden">Source Code</span>
                        <span className="md:hidden">Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </ScrollStack>

      <style jsx>{`
        .beam-dot {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 9999px;
          background: linear-gradient(45deg, #ffaa40, #9c40ff);
          box-shadow: 0 0 12px #9c40ff;
          animation: travel 8s linear infinite;
        }

        @keyframes travel {
          0% {
            top: 0;
            left: 0;
          }
          25% {
            top: 0;
            left: calc(100% - 10px);
          }
          50% {
            top: calc(100% - 10px);
            left: calc(100% - 10px);
          }
          75% {
            top: calc(100% - 10px);
            left: 0;
          }
          100% {
            top: 0;
            left: 0;
          }
        }
      `}</style>
    </section>
  );
};
