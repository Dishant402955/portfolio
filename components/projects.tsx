"use client";

import Link from "next/link";
import { Card, CardDescription, CardTitle } from "./ui/cards-demo-3";
import { cn } from "@/lib/utils";
import ScrollStack from "@/components/ui/scroll-stack";

export const Projects = () => {
  const items = [
    {
      id: 1,
      slug: "cross-platform-clipboard",
      title: "Cross-Platform Clipboard",
      description:
        "It's a cross platform clipboard with end-to-end encryption & real-time sync supporting Android, iOS, Windows , built purely for productivity purposes",
      previewLink: "https://example.com",
      projectLink: "https://github.com/example",
      thumbURL: "",
      techStack: [
        { name: "Nextjs", logo: "" },
        { name: "Shadcn UI", logo: "" },
        { name: "Appwrite", logo: "" },
      ],
    },
    {
      id: 2,
      slug: "personal-knowledge-OS",
      title: "Personal Knowledge OS",
      description:
        "It's a system to management modern personal knowledge with an web interface, built purely for productivity purposes",
      previewLink: "https://example.com",
      projectLink: "https://github.com/example",
      thumbURL: "",
      techStack: [
        { name: "Nextjs", logo: "" },
        { name: "Shadcn UI", logo: "" },
        { name: "Appwrite", logo: "" },
        { name: "PostgreSQL", logo: "" },
      ],
    },
    {
      id: 3,
      slug: "auth-server",
      title: "Auth server",
      description:
        "It's a authentication server with support for email-password, OAuth, passkey & OTP[email] & webhooks.",
      previewLink: "https://example.com",
      projectLink: "https://github.com/example",
      thumbURL: "",
      techStack: [
        { name: "Nextjs", logo: "" },
        { name: "Shadcn UI", logo: "" },
        { name: "Honojs", logo: "" },
        { name: "PostgreSQL", logo: "" },
      ],
    },
    {
      id: 4,
      slug: "secrets-management-service",
      title: "Secrets Manager",
      description:
        "It's a Secrets vault to store your API keys as well to enable Bring-Your-Own-Keys architecture without hasitation with help of a CLI, web interface & API endpoints.",
      previewLink: "https://example.com",
      projectLink: "https://github.com/example",
      thumbURL: "",
      techStack: [
        { name: "Nextjs", logo: "" },
        { name: "Shadcn UI", logo: "" },
        { name: "Honojs", logo: "" },
      ],
    },
    {
      id: 5,
      slug: "screen-recording-and-instant-sharing",
      title: "Screen recording & instant sharing app",
      description:
        "It's a cross platform screen recording & instant sharing app.",
      previewLink: "https://example.com",
      projectLink: "https://github.com/example",
      thumbURL: "",
      techStack: [
        { name: "Nextjs", logo: "" },
        { name: "Shadcn UI", logo: "" },
        { name: "Electronjs", logo: "" },
        { name: "Honojs", logo: "" },
        { name: "PostgreSQL", logo: "" },
      ],
    },
  ];

  return (
    <section id="projects" className="w-full pt-18 pb-10 relative">
      <div className="px-4 md:px-6 lg:px-10 mb-24 flex justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
      </div>

      <ScrollStack className="w-full">
        {items.map((item, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <div className="flex justify-center w-full" key={item.id}>
              <Card className="relative overflow-hidden rounded-xl w-full max-w-[1000px] h-[440px] bg-white dark:bg-neutral-900">
                <div className="pointer-events-none absolute inset-0">
                  <div className="beam-dot" />
                </div>

                <div
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-10 h-full p-8",
                    isReversed && "md:flex-row-reverse",
                  )}
                >
                  <div className="w-full md:w-1/2">
                    <div className="w-full h-56 md:h-64 rounded-xl overflow-hidden">
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
                    <CardTitle className="text-2xl">{item.title}</CardTitle>

                    <CardDescription className="mt-3 text-base">
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

                    <div className="flex flex-wrap gap-3 mt-6">
                      <a
                        href={item.previewLink}
                        target="_blank"
                        className="px-4 py-2 text-sm rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium"
                      >
                        Live Preview
                      </a>

                      <Link
                        href={`/project/${item.slug}`}
                        className="px-4 py-2 text-sm rounded-lg border border-black/20 dark:border-white/20"
                      >
                        View Details
                      </Link>

                      <a
                        href={item.projectLink}
                        target="_blank"
                        className="px-4 py-2 text-sm rounded-lg border border-black/20 dark:border-white/20 text-neutral-600 dark:text-neutral-300"
                      >
                        Source Code
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
