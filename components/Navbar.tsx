
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('works')}
          className="text-2xl font-extrabold tracking-tighter text-black hover:opacity-70 transition-opacity"
        >
          SOYOUNG<span className="text-pink-500">.</span>
        </button>
        
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-1 ${
                currentPage === item.id ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {item.name}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
