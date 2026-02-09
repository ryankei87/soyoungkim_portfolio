
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface WorksProps {
  onProjectSelect: (p: Project) => void;
}

const Works: React.FC<WorksProps> = ({ onProjectSelect }) => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Intro Page Style */}
        <div className="mb-40 min-h-[60vh] flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-4">
              SOYOUNG KIM<br/>
              <span className="text-white/20">BX DESIGNER</span><br/>
              PORTFOLIO
            </h1>
          </motion.div>
        </div>

        {/* Selected Works Grid & List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-t border-white/10 pt-20">
          <div className="lg:col-span-4">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
              SELECTED<br/>WORKS
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => onProjectSelect(project)}
                className="group flex items-start gap-4 py-4 text-left border-b border-white/5 hover:border-pink-500 transition-colors"
              >
                <span className="text-pink-500 font-bold text-sm pt-1">{project.id}</span>
                <div>
                  <h3 className="text-xl font-bold uppercase group-hover:text-pink-500 transition-colors">{project.title}</h3>
                  <p className="text-xs text-white/40 font-medium tracking-wide">{project.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onProjectSelect(project)}
              className="group cursor-pointer aspect-[16/9] relative overflow-hidden rounded-3xl"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all p-10 flex flex-col justify-end">
                <span className="text-pink-500 font-black text-xl mb-2">{project.id}</span>
                <h3 className="text-4xl font-black uppercase italic">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
