/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/public/LionelAuray.jpeg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Intro() {
  const { setActiveSection, setTimeLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="z-[99] mb-28 max-w-[50rem] text-justify sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              width={400}
              height={400}
              alt="Lionel Auray portait"
              placeholder="blur"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🐙
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, moi c'est Lionel.</span> Je suis{" "}
        <span className="font-bold">développeur front-end</span> en{" "}
        <span className="font-bold">reconversion.</span> J'ai décidé de me focus
        sur <span className="underline">React et Next.js</span>.{" "}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center flex-col sm:flex-row gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-sky-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-sky-950 dark:hover:bg-sky-800 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeLastClick(Date.now());
          }}
        >
          Contactez-moi{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/LionelAuray-CVv.pdf"
          className="group bg-white text-sky-900 px-7 py-3 flex items-center gap-2 rounded-full hover:text-sky-950 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/30 dark:text-white/60"
        >
          Mon CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-sky-900  p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-sky-950 transition cursor-pointer border border-black/10 dark:bg-white/30 dark:text-white/60"
          href="https://www.linkedin.com/in/lionelauray/"
          target="_blank"
          aria-label="Mon profil linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-sky-900  p-4 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-sky-950 transition cursor-pointer border border-black/10 dark:bg-white/30 dark:text-white/60"
          href="https://github.com/Wylenix"
          target="_blank"
          aria-label="Ma page github"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
