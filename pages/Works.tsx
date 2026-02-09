
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import FloatingElements from '../components/FloatingElements';

const Works: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6">
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter"
          >
            Crafting <span className="text-pink-500 italic serif font-normal">Memorable</span> Brands
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            I specialize in building visual identities that tell unique stories through color, typography, and emotion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
