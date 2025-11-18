import React from 'react';
import { motion } from 'framer-motion';
import { GameCard } from './GameCard';
import { Game } from '../types';
import { ArrowRight } from 'lucide-react';

const DEMO_GAMES: Game[] = [
  {
    id: '1',
    title: 'Stellar Horizon',
    price: 59.99,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/seed/space/600/800',
    tags: ['Sci-Fi', 'RPG'],
    isNew: true
  },
  {
    id: '2',
    title: 'Neon Circuit',
    price: 49.99,
    salePrice: 29.99,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/seed/neon/600/800',
    tags: ['Racing', 'Cyberpunk']
  },
  {
    id: '3',
    title: 'Mythos: Reborn',
    price: 69.99,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/seed/myth/600/800',
    tags: ['Fantasy', 'Adventure'],
    isNew: true
  },
  {
    id: '4',
    title: 'Tactical Ops 4',
    price: 39.99,
    rating: 4.2,
    imageUrl: 'https://picsum.photos/seed/war/600/800',
    tags: ['FPS', 'Action']
  }
];

export const FeaturedGames: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
              TRENDING <span className="text-cyan-500">NOW</span>
            </h2>
            <p className="text-slate-400">The hottest titles everyone is playing.</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider hover:text-white transition-colors"
          >
            View All <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DEMO_GAMES.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <button className="px-8 py-3 border border-slate-700 rounded-full text-white font-bold hover:bg-slate-800 transition-colors">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
};