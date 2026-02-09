
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-pink-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            Let's build <span className="serif italic font-normal text-pink-500">something</span> iconic.
          </motion.h1>
          <p className="text-xl text-gray-500 font-medium">
            Currently accepting new projects for Q3 2024. Reach out!
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-pink-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-pink-500 outline-none transition-colors text-lg font-medium"
                  placeholder="Your beautiful name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-pink-500 outline-none transition-colors text-lg font-medium"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Project Details</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-pink-500 outline-none transition-colors text-lg font-medium resize-none"
                placeholder="Tell me about your dream brand..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={submitted}
              className={`w-full py-6 rounded-full font-bold text-xl tracking-wide transition-all duration-300 ${
                submitted 
                ? 'bg-green-500 text-white' 
                : 'bg-black text-white hover:bg-pink-500 hover:scale-[1.02]'
              }`}
            >
              {submitted ? 'Message Sent! ✨' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Direct Email</p>
            <a href="mailto:hello@soyoung.kim" className="text-2xl font-black text-gray-900 hover:text-pink-500 transition-colors">hello@soyoung.kim</a>
          </div>
          <div className="flex gap-8">
            {['Behance', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
