/* eslint-disable react/no-unescaped-entities */
"use client";
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import Project from "./projet";

import { useSectionInView } from "@/lib/hooks";
export default function Projets() {
  const { ref } = useSectionInView("Projets", 0.5);
  return (
    <section ref={ref} id="projets" className="scroll-mt-32 mb-28">
      <SectionHeading>Projets (en cours d'ajout)</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
