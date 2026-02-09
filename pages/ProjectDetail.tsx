
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="mb-10 flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:text-pink-500 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to list
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="text-pink-500 font-black text-2xl">{project.id}</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-2">
                {project.title}
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg font-medium leading-relaxed border-l-4 border-pink-500 pl-6 py-2">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-gray-100">
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Category</h5>
                  <p className="text-sm font-bold">{project.category}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Period</h5>
                  <p className="text-sm font-bold">{project.period}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Partner</h5>
                  <p className="text-sm font-bold">{project.partner}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Tags</h5>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(t => <span key={t} className="text-[10px] font-bold">#{t}</span>)}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Contribution</h5>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">{project.contribution}</p>
              </div>
            </div>
          </div>

          {/* Project Imagery & Concept */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl mb-20 bg-gray-50"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto" />
            </motion.div>

            {project.conceptText && (
              <div className="mb-20">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-300 mb-8 border-b border-gray-100 pb-2 inline-block">Concept</h2>
                <p className="text-2xl font-bold leading-snug md:w-4/5 text-gray-800">
                  {project.conceptText}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.secondaryImages?.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg">
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
