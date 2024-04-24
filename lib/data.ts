import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import netfliclone from "@/public/netflixclone.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Propos",
    hash: "#propos",
  },
  {
    name: "Projets",
    hash: "#projets",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Reconversion Développeur Front-End",
    location: "Lyon",
    description: "Fraichement reconverti et prêt à en découdre",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Associé gérant",
    location: "Lyon",
    description:
      "Création et gestion d’un restaurant sur Lyon. Conception, business plan, tenancier.  ",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Responsable marketing et communication",
    location: "Lyon",
    description:
      "Définition du plan media et de la stratégie webmarketing globale - Gestion de projet - Suivi et analyse des indicateurs.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Clone de Netflix",
    description:
      "Projet de formation - Clone front-end Netflix - Fetching, Skeletons, React Router",
    tags: ["React", "Material UI", "Cypress", "Axios"],
    imageUrl: netfliclone,
  },
  {
    title: "En cours de réalisation",
    description:
      "Si rapiunt rapacium nisi nobis volatu optandi nec inveniri dispexerint inmorantur discursantes inmorantur",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "En cours de réalisation",
    description:
      "Si rapiunt rapacium nisi nobis volatu optandi nec inveniri dispexerint inmorantur discursantes inmorantur ",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Framer Motion",
] as const;
