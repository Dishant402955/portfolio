type Block =
  | { type: "paragraph"; value: string }
  | { type: "heading"; value: string }
  | { type: "image"; src: string }
  | { type: "code"; language: string; value: string }
  | { type: "list"; items: string[] };

export const blog: {
  title: string;
  description: string;
  content: Block[];
} = {
  title: "Building a Cross-Platform Clipboard",
  description:
    "A deep dive into building a real-time, encrypted clipboard system across devices.",
  content: [
    {
      type: "paragraph",
      value:
        "Copy-paste feels simple until you try to extend it across devices. What starts as a utility quickly becomes a distributed system.",
    },

    {
      type: "image",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      type: "heading",
      value: "The Real Problem",
    },

    {
      type: "list",
      items: [
        "How do you sync instantly?",
        "How do you handle multiple devices?",
        "How do you keep data secure?",
      ],
    },

    {
      type: "paragraph",
      value:
        "The moment you introduce real-time sync and encryption, complexity increases dramatically.",
    },

    {
      type: "heading",
      value: "Real-Time Sync",
    },

    {
      type: "paragraph",
      value:
        "Polling is too slow. WebSockets provide a persistent connection and real-time updates.",
    },

    {
      type: "code",
      language: "ts",
      value: `const socket = new WebSocket("wss://example.com");

              socket.onmessage = (event) => {
              const data = JSON.parse(event.data);
              updateClipboard(data);
              };`,
    },

    {
      type: "paragraph",
      value:
        "Even 200ms delay can break the experience. Clipboard UX is extremely latency sensitive.",
    },

    {
      type: "image",
      src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200&auto=format&fit=crop",
    },

    {
      type: "heading",
      value: "Encryption Layer",
    },

    {
      type: "paragraph",
      value:
        "Security is critical because clipboard data often contains sensitive information.",
    },

    {
      type: "code",
      language: "ts",
      value: `import crypto from "crypto";

              function encrypt(text: string, key: string) {
              const cipher = crypto.createCipher("aes-256-cbc", key);
              return cipher.update(text, "utf8", "hex") + cipher.final("hex");
              }`,
    },

    {
      type: "heading",
      value: "State Management",
    },

    {
      type: "code",
      language: "ts",
      value: `type ClipboardState = {
              content: string;
              updatedAt: number;
              deviceId: string;
              };`,
    },

    {
      type: "paragraph",
      value:
        "We use timestamps to determine which clipboard version is the latest.",
    },

    {
      type: "heading",
      value: "Challenges",
    },

    {
      type: "list",
      items: [
        "Conflict resolution across devices",
        "Offline sync handling",
        "Maintaining encryption performance",
      ],
    },

    {
      type: "paragraph",
      value:
        "Each of these problems required careful trade-offs between performance and reliability.",
    },

    {
      type: "heading",
      value: "Final Thoughts",
    },

    {
      type: "paragraph",
      value:
        "This project taught me that real-time systems are deceptively complex, and UX expectations define architecture more than anything else.",
    },
  ],
};

export const items = [
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
