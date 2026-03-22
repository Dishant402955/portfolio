import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Blogs } from "@/components/blogs";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <Hero />
      <Projects />
      <Blogs />
      <About />
      <Contact />
    </div>
  );
}
