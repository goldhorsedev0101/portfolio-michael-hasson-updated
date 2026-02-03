// components/sections/Projects.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projects } from '@/data/projects';
import { useScrollSection } from '@/hooks/use-scroll-section';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollSection();

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-8 max-w-8xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ProjectCard
              {...project}
              isHovered={hoveredIndex === index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
