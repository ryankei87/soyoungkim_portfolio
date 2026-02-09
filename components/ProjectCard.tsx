
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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div 
        className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl"
        style={{ backgroundColor: project.color }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay info on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
          <p className="text-sm font-bold tracking-widest uppercase mb-2">{project.category}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] px-2 py-1 border border-white/40 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">{project.title}</h3>
          <p className="text-gray-500 font-medium">{project.category}</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
