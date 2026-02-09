
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import { Project } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('works');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProject]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'works':
        return <Works onProjectSelect={handleOpenProject} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'project-detail':
        return selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => {
              setCurrentPage('works');
              setSelectedProject(null);
            }} 
          />
        ) : <Works onProjectSelect={handleOpenProject} />;
      default:
        return <Works onProjectSelect={handleOpenProject} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-pink-500 selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={(p) => {
        setCurrentPage(p);
        setSelectedProject(null);
      }} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (selectedProject?.id || '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent PDF-style Timeline Footer */}
      <footer className="bg-[#111111] py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-white/20 font-black italic select-none mb-12">
            <span className="text-2xl md:text-5xl px-6 py-2 border border-white/10 rounded-full">2016</span>
            <div className="flex-1 h-[1px] bg-white/5 mx-8"></div>
            <span className="text-2xl md:text-5xl px-6 py-2 border border-white/10 rounded-full">2024</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
            <p>© SOYOUNG KIM BX DESIGNER PORTFOLIO</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Behance</a>
              <a href="mailto:okhime3@gmail.com" className="hover:text-pink-500 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
