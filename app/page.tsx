import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <Hero />
      <Projects />
    </div>
  );
}
