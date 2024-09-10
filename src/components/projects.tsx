"use client";

import Project from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("#projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </section>
  );
}
