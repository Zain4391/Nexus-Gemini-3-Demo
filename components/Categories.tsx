import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Crosshair, Car, Ghost, Box, Cpu } from 'lucide-react';

const CATEGORIES = [
  { name: 'Action RPG', icon: Sword, color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/50' },
  { name: 'FPS', icon: Crosshair, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/50' },
  { name: 'Racing', icon: Car, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'hover:border-amber-500/50' },
  { name: 'Horror', icon: Ghost, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'hover:border-purple-500/50' },
  { name: 'Strategy', icon: Box, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/50' },
  { name: 'Sci-Fi', icon: Cpu, color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/50' },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
            Browse by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Genre</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`
                  flex flex-col items-center justify-center p-6 
                  bg-slate-800/50 backdrop-blur-sm rounded-xl 
                  border border-slate-700 cursor-pointer 
                  transition-colors duration-300 ${cat.border} group
                `}
              >
                <div className={`p-4 rounded-full mb-4 ${cat.bg} ${cat.color} group-hover:bg-white group-hover:bg-opacity-10 transition-colors`}>
                  <Icon className="w-8 h-8" />
                </div>
                <span className="font-bold text-slate-300 group-hover:text-white">{cat.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};