import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedGames } from './components/FeaturedGames';
import { Categories } from './components/Categories';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-cyan-900">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <Categories />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;