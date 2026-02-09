
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 3D Sphere 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-pink-300/40 to-purple-400/20 blur-xl"
      />
      
      {/* 3D Sphere 2 */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, -120, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-200/40 to-orange-300/20 blur-2xl"
      />

      {/* 3D Sphere 3 */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] right-[20%] w-24 h-24 rounded-full bg-gradient-to-bl from-cyan-200/40 to-blue-300/20 blur-lg"
      />
    </div>
  );
};

export default FloatingElements;
