import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projets from "@/components/projets";
import Separation from "@/components/separation";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Separation />
      <About />
      <Projets />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
