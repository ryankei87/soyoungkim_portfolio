
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-40 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <button 
          onClick={onBack}
          className="mb-16 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase hover:opacity-50 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              {project.title}
            </h1>
            <div className="space-y-10">
              <p className="text-xl font-medium text-black/70 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 gap-8 pt-8 border-t border-black/5">
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Category</h5>
                  <p className="text-sm font-bold">{project.category}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Details</h5>
                  <p className="text-sm font-medium text-black/60 leading-relaxed">{project.contribution}</p>
                </div>
                <div className="flex gap-12">
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Year</h5>
                    <p className="text-sm font-bold">{project.period.split(' ')[0]}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Client</h5>
                    <p className="text-sm font-bold">{project.partner}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            </motion.div>

            {project.conceptText && (
              <div className="py-20 border-y border-black/5">
                <h2 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-8">Concept</h2>
                <p className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
                  {project.conceptText}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-12">
              {project.secondaryImages?.map((img, i) => (
                <div key={i} className="bg-gray-50 overflow-hidden">
                  <img src={img} alt={`${project.title} detail ${i}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
