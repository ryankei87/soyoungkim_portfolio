
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Typography', 'Illustration', 'Motion Design', 'Creative Direction'];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/soyoung/1200/1600" 
                alt="Soyoung Kim" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-lg rotate-12">
              <p>10+ Years of Design Magic</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-pink-500 mb-4">Nice to meet you</h2>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              I'm <span className="serif font-normal italic">Soyoung</span>, a Seoul-based branding designer.
            </h1>
            <div className="space-y-6 text-lg text-gray-600 font-medium">
              <p>
                Design is more than just making things look pretty. It's about finding the heartbeat of a brand and making it resonate with the world.
              </p>
              <p>
                I collaborate with founders and established brands to build visual systems that are sophisticated yet playful, elegant yet approachable. I believe in the power of colors to evoke emotions and the precision of typography to tell stories.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What I do</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-2 bg-gray-50 rounded-full text-sm font-semibold text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
