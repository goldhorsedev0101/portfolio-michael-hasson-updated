'use client'
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Work from "@/components/sections/Work";
import { AnimatePresence } from 'framer-motion';
import Terminal from '@/components/Terminal';
import HeroTitle from '@/components/HeroTitle';
import Projects from "@/components/sections/Projects";
import SkillsGrid from '@/components/SkillsGrid';

const Home = () => {
  return (
    <AnimatePresence>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto pt-16 sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroTitle />
          <AboutMe />
        <SkillsGrid />
        <Terminal />
        <Work />
          <Projects/>
        <Contact />
      </div>
    </main>
    </AnimatePresence>
  );
}

export default Home;