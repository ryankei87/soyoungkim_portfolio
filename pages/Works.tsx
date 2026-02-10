
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface WorksProps {
  onProjectSelect: (p: Project) => void;
}

const Works: React.FC<WorksProps> = ({ onProjectSelect }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const categories = useMemo(() => {
    const allCats = PROJECTS.flatMap(p => p.category.split(', '));
    return ['All', ...Array.from(new Set(allCats))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="pt-40 pb-32 px-6 lg:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Editorial Title */}
        <section className="mb-24">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[12vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            SELECTED<br/>WORK
          </motion.h1>
        </section>

        {/* Filter Bar */}
        <section className="mb-16 border-b border-black/5 pb-8 flex flex-wrap gap-x-8 gap-y-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${
                activeFilter === cat ? 'text-black' : 'text-black/20 hover:text-black/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onProjectSelect(project)}
                className={`group cursor-pointer ${idx % 3 === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden bg-gray-50 rounded-sm mb-6 ${idx % 3 === 0 ? 'aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'}`}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{project.title}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30">{project.category}</p>
                  </div>
                  <div className="text-[10px] font-black text-black/30 pt-1">
                    {project.period.split('.')[0]}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Works;
