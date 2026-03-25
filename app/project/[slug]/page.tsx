"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { project } from "@/constants/projects";

const ProjectPage = () => {
  return (
    <section className="w-full px-6 md:px-14 py-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            ← Back
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold">
            {project.title}
          </h1>

          <p className="text-neutral-400 max-w-2xl">{project.description}</p>

          <div className="flex gap-3 mt-2">
            <a
              href={project.previewLink}
              target="_blank"
              className="px-4 py-2 text-sm rounded-lg bg-white text-black font-medium"
            >
              Live Preview
            </a>

            <a
              href={project.sourceLink}
              target="_blank"
              className="px-4 py-2 text-sm rounded-lg border border-white/20 text-neutral-300"
            >
              Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-75 md:h-100 rounded-xl overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-medium">Overview</h2>
          <p className="text-neutral-400 leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-medium">Key Features</h2>

          <ul className="flex flex-col gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="text-neutral-400 flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/50" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-medium">Tech Stack</h2>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;
