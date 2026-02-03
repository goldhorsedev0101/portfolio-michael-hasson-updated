// components/sections/Work.tsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { workExperiences, WorkExperience } from '@/data/workExperience';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { FaBriefcase, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import Image from 'next/image';

const Work: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<WorkExperience>(workExperiences[0]);
  const { ref, isVisible } = useScrollSection();

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Companies List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="text-sm font-semibold text-foreground/70 mb-4 uppercase tracking-wider">
                Companies
              </h3>
              <div className="space-y-2">
                {workExperiences.map((experience, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveExperience(experience)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      activeExperience.company === experience.company
                        ? 'bg-primary/20 text-primary border-l-4 border-primary'
                        : 'hover:bg-muted/50 text-foreground'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-medium">{experience.company}</div>
                    <div className="text-xs text-foreground/60 mt-1">{experience.duration}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
              <h3 className="text-sm font-semibold text-foreground/70 mb-4 uppercase tracking-wider">
                Details
              </h3>
              
              <div className="mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-between gap-4 flex-wrap">
                      <span className='text-lg'>
                        {activeExperience.position}
                      </span>
                      <span className='flex items-center gap-2'>
                        <a href={`${activeExperience.logo}`} target="_blank" rel="noopener noreferrer" className="text-primary transition-colors">
                         {activeExperience.company}
                        </a>
                      </span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                      {activeExperience.location && (
                        <div className="flex items-center gap-1">
                          <span>{activeExperience.location}</span>
                        </div>
                      )}
                      <span>{activeExperience.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 mb-6">
                {activeExperience.description.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <p className="text-foreground/90 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExperience.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm"
                    >
                      {React.createElement(skill.icon, { className: "text-base" })}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
