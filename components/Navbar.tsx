
import React from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Works', id: 'works' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('works')}
          className="text-3xl font-black tracking-tighter text-white hover:text-pink-500 transition-colors uppercase"
        >
          SOYOUNG<span className="text-pink-500">.</span>
        </button>
        
        <div className="flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                currentPage === item.id || (currentPage === 'project-detail' && item.id === 'works') 
                  ? 'text-white' 
                  : 'text-white/30 hover:text-white'
              }`}
            >
              {item.name}
              {(currentPage === item.id || (currentPage === 'project-detail' && item.id === 'works')) && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-pink-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
