
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div 
        className="relative aspect-[4/5] overflow-hidden rounded-[40px] mb-8 shadow-xl transition-all duration-500 group-hover:shadow-3xl group-hover:ring-8 group-hover:ring-pink-50"
        style={{ backgroundColor: project.color }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay info on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10 text-white">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 text-pink-300">{project.category}</p>
          <p className="text-lg font-medium leading-snug mb-6 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start px-2">
        <div>
          <div className="flex items-baseline gap-4 mb-1">
            <span className="text-pink-500 font-black text-sm tracking-tighter">{project.id}</span>
            <h3 className="text-2xl font-black text-gray-900 group-hover:text-pink-500 transition-colors tracking-tight leading-tight uppercase">{project.title}</h3>
          </div>
          <p className="text-gray-400 font-semibold tracking-wide text-xs uppercase pl-8">{project.category}</p>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
