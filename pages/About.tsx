
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem: React.FC<{ title: string; subtitle: string; period?: string; endPeriod?: string; isCurrent?: boolean }> = ({ title, subtitle, period, endPeriod, isCurrent }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-100 group">
    <div className="mb-2 md:mb-0">
      <h4 className="text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">{title}</h4>
      <p className="text-gray-500 font-medium">{subtitle}</p>
    </div>
    <div className="flex gap-2">
      {period && (
        <span className="px-4 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-500">
          {period}
        </span>
      )}
      {endPeriod && (
        <span className="px-4 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-500">
          {endPeriod}
        </span>
      )}
      {isCurrent && (
        <span className="px-4 py-1 rounded-full bg-pink-500 text-white text-xs font-bold">
          NOW
        </span>
      )}
    </div>
  </div>
);

const AwardItem: React.FC<{ brand: string; entries: { year: string; names: string[] }[] }> = ({ brand, entries }) => (
  <div className="py-8 border-b border-gray-100">
    <h4 className="text-sm font-black tracking-widest uppercase text-gray-400 mb-6">{brand}</h4>
    <div className="space-y-6">
      {entries.map((entry, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="w-20">
            <span className="px-4 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-600 bg-gray-50">
              {entry.year}
            </span>
          </div>
          <div className="flex-1 flex flex-wrap gap-x-6 gap-y-2">
            {entry.names.map((name, nIdx) => (
              <span key={nIdx} className="text-lg font-bold text-gray-800">{name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const About: React.FC = () => {
  const skills = ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Typography', 'Illustration', 'Motion Design', 'Creative Direction'];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
              <p>Creative Brand Designer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-pink-500 mb-4">Designer Profile</h2>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Soyoung Kim
            </h1>
            <div className="space-y-6 text-lg text-gray-600 font-medium">
              <p>
                Hello. I am Soyoung Kim, a brand designer dedicated to conveying the core essence of brands through visual language. My work goes beyond aesthetic refinement; I focus on articulating a brand’s unique narrative in the most compelling and impactful way possible.
              </p>
              <p>
                Currently, I serve as a Brand Designer at the Shinsegae Emart Brand Design Team, where I specialize in brand management and strategic identity building. With a background spanning various industries, I create deep, resonant brand experiences that bridge the gap between vision and reality.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Expertise</h3>
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

        {/* Experience Section Inspired by Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20 border-t border-gray-100">
          <div className="lg:col-span-4">
            <h2 className="text-7xl md:text-8xl font-black text-gray-200 sticky top-32 leading-none uppercase tracking-tighter select-none">
              EXPERI<br/>ENCE
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            {/* Education */}
            <section className="mb-20">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                Education
                <div className="h-1 flex-1 bg-gray-50"></div>
              </h3>
              <ExperienceItem 
                title="Hongik University" 
                subtitle="Bachelor of Visual Communication Design" 
                period="2011.3" 
                endPeriod="2016.8" 
              />
            </section>

            {/* Work History */}
            <section className="mb-20">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                Work History
                <div className="h-1 flex-1 bg-gray-50"></div>
              </h3>
              <ExperienceItem 
                title="Shinsegae Emart" 
                subtitle="Brand Design Team" 
                period="2018.8" 
                isCurrent={true}
              />
              <ExperienceItem 
                title="SAM Partners" 
                subtitle="BX Design Team" 
                period="2016.4" 
                endPeriod="2018.7" 
              />
              <ExperienceItem 
                title="Hyundai Department Store" 
                subtitle="Brand Design Team Intern" 
                period="2016.2" 
                endPeriod="2016.4" 
              />
            </section>

            {/* Awards */}
            <section>
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                Awards
                <div className="h-1 flex-1 bg-gray-50"></div>
              </h3>
              <AwardItem 
                brand="STONEBRICK" 
                entries={[
                  { year: '2019', names: ['Clio Award', 'D&AD Award', 'Dieline Award', 'Pentaward'] },
                  { year: '2020', names: ['The One Show'] }
                ]}
              />
              <AwardItem 
                brand="ANOTHER WAY OF SEEING" 
                entries={[
                  { year: '2018', names: ['IF Design Award', 'It-Award'] },
                  { year: '2019', names: ['German Design Award'] }
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
