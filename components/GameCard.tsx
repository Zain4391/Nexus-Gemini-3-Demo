import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Heart } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  index: number;
}

export const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {game.isNew && (
            <span className="bg-cyan-500 text-slate-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
              New
            </span>
          )}
          {game.salePrice && (
            <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
              -{Math.round(((game.price - game.salePrice) / game.price) * 100)}%
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300 ease-out">
          <button className="p-2 bg-slate-900/80 text-white hover:text-rose-500 rounded-lg backdrop-blur-sm transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 relative z-10 bg-slate-800">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
              {game.title}
            </h3>
            <div className="flex gap-2 mt-1 text-xs text-slate-400">
              {game.tags.slice(0, 2).map(tag => (
                <span key={tag} className="border border-slate-600 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
             {game.salePrice ? (
                <>
                  <div className="text-slate-500 line-through text-sm">${game.price}</div>
                  <div className="text-cyan-400 font-bold">${game.salePrice}</div>
                </>
             ) : (
                <div className="text-cyan-400 font-bold">${game.price}</div>
             )}
          </div>
        </div>

        {/* Add to Cart Button - Appears on hover */}
        <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-[height] duration-300">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 py-2 rounded-lg font-bold hover:bg-cyan-400 transition-colors">
            <Plus className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};