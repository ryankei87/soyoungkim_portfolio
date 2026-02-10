
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('works')}
          className="text-2xl font-black tracking-tighter text-black uppercase"
        >
          SOYOUNG<span className="text-pink-500">.</span>
        </button>
        
        <div className="flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                currentPage === item.id || (currentPage === 'project-detail' && item.id === 'works') 
                  ? 'text-black' 
                  : 'text-black/30 hover:text-black'
              }`}
            >
              {item.name}
              {(currentPage === item.id || (currentPage === 'project-detail' && item.id === 'works')) && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
