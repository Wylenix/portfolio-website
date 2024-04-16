"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const { ref } = useSectionInView("Propos");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="propos"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Après un premier DUT sur les métiers du multimédia et de l'internet,
        J'ai d'abord décider de m'orienter vers les métiers du marketing
        digitale{" "}
        <span className="font-medium">
          et notamment en axant mon parcours sur le référencement et la
          conversion
        </span>
        .{" "}
        <span className="italic">
          Par la suite d'autres chemins et choix de vie se sont offert à moi et
          j'ai eu l'occasion d'ouvrir un restaurant sur Lyon
        </span>{" "}
        ce qui a été une aventure intense et enrichissante. J'ai finalement
        décidé de revenir à ma première passion{" "}
        <span className="underline">la programmation.</span> J'adore donnée vie
        à la data et me penché sur la résolution de problème. Dans un premier
        temps ma stack s'articule autour de{" "}
        <span className="font-medium">React, Next.js et Typescript</span>.
      </p>
      <p>
        Je suis aussi familier avec Node.js et Tailwind CSS. Je suis toujours
        friand de partir à la découverte de nouveaux outils et de nouveaux
        challenges{" "}
        <span className="font-medium">
          Je recherche aujourd'hui un poste à plein temps
        </span>{" "}
        comme développeur front-end.
      </p>
      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
