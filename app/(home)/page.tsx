import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Blogs } from "@/components/blogs";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SectionSeparator } from "@/components/section-seperator";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Hero />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Blogs />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Contact />
    </div>
  );
};

export default Home;
