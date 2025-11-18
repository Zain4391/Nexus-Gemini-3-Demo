import React from 'react';
import { motion } from 'framer-motion';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-900/10 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500" />
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            UNLOCK <span className="text-cyan-400">EXCLUSIVE</span> PERKS
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Join the Nexus Elite. Get early access to sales, exclusive beta keys, and weekly gaming news delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-slate-950 border border-slate-700 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              SUBSCRIBE
            </motion.button>
          </form>
          
          <p className="text-xs text-slate-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};