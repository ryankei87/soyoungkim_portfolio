
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
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
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
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white py-20 px-6 lg:px-12 border-t border-black/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">SOYOUNG KIM.</h3>
              <p className="text-xl font-medium text-black/60 max-w-sm">
                Independent BX Designer creating identities with clarity and emotion.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Connect</h4>
              <div className="flex flex-col gap-3 font-bold">
                <a href="#" className="hover:underline underline-offset-4">Behance</a>
                <a href="#" className="hover:underline underline-offset-4">Instagram</a>
                <a href="#" className="hover:underline underline-offset-4">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Contact</h4>
              <a href="mailto:okhime3@gmail.com" className="font-bold hover:underline underline-offset-4">okhime3@gmail.com</a>
            </div>
          </div>
          <div className="pt-12 border-t border-black/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-black/30">
            <span>© 2024 SOYOUNG KIM</span>
            <span>SEOUL / GLOBAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
