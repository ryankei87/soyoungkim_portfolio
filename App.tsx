
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('works');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'works':
        return <Works key="works" />;
      case 'about':
        return <About key="about" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Works key="works" />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-pink-200">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 font-medium">
            © 2024 Soyoung Kim. Handcrafted with passion.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => setCurrentPage('works')}
              className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Works
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest"
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
