"use client";

import Link from "next/link";
import { Card, CardDescription, CardTitle } from "./ui/cards-demo-3";
import { cn } from "@/lib/utils";

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
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col px-6 md:px-14 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-16">Projects</h2>

      <div className="flex flex-col gap-16">
        {items.map((item, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <Card key={item.id} className="w-full max-w-5xl">
              <div
                className={cn(
                  "flex flex-col md:flex-row items-center gap-10",
                  isReversed && "md:flex-row-reverse",
                )}
              >
                <div className="w-full md:w-1/2">
                  <div className="w-full h-52 md:h-64 rounded-lg overflow-hidden">
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

                <div className="w-full md:w-1/2 flex flex-col">
                  <CardTitle className="text-2xl">{item.title}</CardTitle>

                  <CardDescription className="mt-3 text-base">
                    {item.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {item.previewLink && (
                      <a
                        href={item.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm rounded-lg bg-white text-black font-medium hover:opacity-90 transition"
                      >
                        Live Preview
                      </a>
                    )}

                    <Link
                      href={`/project/${item.slug}`}
                      className="px-4 py-2 text-sm rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                    >
                      View Details
                    </Link>

                    {item.projectLink && (
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm rounded-lg border border-white/20 text-neutral-300 hover:text-white hover:bg-white/10 transition"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
