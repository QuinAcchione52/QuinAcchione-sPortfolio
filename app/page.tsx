"use client";

import { ThemeToggle } from "./theme-toggle";
import HashScroller from "@/components/HashScroller";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <HashScroller />

      <section className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white py-10 sm:py-0">
        <motion.div 
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        
        className="max-w-4xl text-center space-y-5 px-4 sm:px-6">
          <img src="/portrait.jpg" alt="Quinten Acchione" className="w-40 h-40 sm:w-60 sm:h-60 rounded-full mx-auto object-cover border-4 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110" />
          <h1 className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent text-3xl sm:text-4xl opacity-80 font-semibold transition-all duration-300">Quinten Acchione</h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200">I am Quinten Acchione, an Aerospace Engineering 
            student at Embry-Riddle Aeronautical University with a 4.0 GPA, focused on 
            applying rigorous engineering principles to real-world aerospace systems. 
            My experience spans autonomous UAS design, CubeSat payload integration, 
            and AI-driven interplanetary trajectory optimization. 
            I am driven by building high-impact flight and space technologies at
             the intersection of systems engineering, computation, and hands-on development.</p>
          <ThemeToggle />
        </motion.div>
      </section>

      <ResumeSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
