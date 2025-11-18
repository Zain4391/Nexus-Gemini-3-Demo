import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play, Star, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "Cyber Odyssey 2077",
    subtitle: "Ultimate Edition",
    genre: "RPG",
    price: "$59.99",
    rating: 5,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Cyberpunk", "Open World"]
  },
  {
    id: 2,
    title: "Apex Racers: Velocity",
    subtitle: "Season 4 Pass",
    genre: "Racing",
    price: "$49.99",
    rating: 4,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    tags: ["Sim", "Multiplayer"]
  },
  {
    id: 3,
    title: "Void Walker",
    subtitle: "Darkness Falls",
    genre: "Action",
    price: "$69.99",
    rating: 5,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Stealth", "Story"]
  }
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, statsRef.current, badgeRef.current], { 
        y: 50, 
        opacity: 0 
      });
      gsap.set(imageRef.current, { x: 50, opacity: 0, scale: 0.95 });

      // Sequence
      tl.to(badgeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5
      })
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1
      }, "-=0.3")
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8
      }, "-=0.6")
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8
      }, "-=0.6")
      .to(statsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8
      }, "-=0.6")
      .to(imageRef.current, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
      }, "-=1.2");

      // Subtle float animation for background elements
      gsap.to(".floating-orb", {
        y: "30px",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.5
      });
      
      // Note: Removed specific .hero-card-content animation as it's now handled by Framer Motion

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-12 lg:pt-0 lg:pb-0"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(15,23,42,0.4),rgba(15,23,42,1))]" />
        <div className="floating-orb absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="floating-orb absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pr-12">
            
            {/* Badge */}
            <div ref={badgeRef} className="flex items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                <Zap className="w-3 h-3 fill-current" />
                <span>Next Gen Available</span>
              </div>
            </div>

            <div className="relative">
              <h1 ref={titleRef} className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 pb-2">
                  BEYOND
                </span>
                <span 
                  className="block text-transparent"
                  style={{ 
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                    color: 'transparent'
                  }}
                >
                  LIMITS
                </span>
              </h1>
              {/* Decorative text behind */}
              <span className="absolute -top-12 -left-8 text-[10rem] md:text-[12rem] font-black text-slate-800/20 -z-10 select-none pointer-events-none blur-[2px]">
                01
              </span>
            </div>
            
            <p ref={subtitleRef} className="text-lg text-slate-400 max-w-xl font-light leading-relaxed border-l-2 border-cyan-500/50 pl-6">
              Dive into an ecosystem where reality blurs with the digital. High-fidelity rendering, zero-latency response, and worlds that breathe.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 pt-2">
              <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold text-lg uppercase tracking-wider overflow-hidden rounded-sm transition-transform hover:-translate-y-1">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Pre-Order Now <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              
              <button className="px-8 py-4 border border-slate-700 text-slate-300 font-bold text-lg uppercase tracking-wider hover:border-white hover:text-white transition-all hover:-translate-y-1 rounded-sm flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Trailer</span>
              </button>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800/50 max-w-md">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">98<span className="text-cyan-500 text-lg">%</span></div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Rating</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">4K<span className="text-cyan-500 text-lg">+</span></div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Textures</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">120</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">FPS Capable</div>
              </div>
            </div>
          </div>

          {/* Right Image Area - 5 Columns */}
          <div ref={imageRef} className="lg:col-span-5 relative h-full flex items-center justify-center perspective-1000">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md lg:max-w-full mx-auto">
              
              {/* Main Card Container Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl rotate-3 border border-slate-700/50" />
              
              {/* Carousel Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-slate-700 bg-slate-900">
                
                <AnimatePresence mode='sync'>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={CAROUSEL_ITEMS[currentSlide].image} 
                      alt={CAROUSEL_ITEMS[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Indicators */}
                <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                  {CAROUSEL_ITEMS.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`h-1 rounded-full cursor-pointer ${idx === currentSlide ? 'bg-white' : 'bg-white/20'}`}
                      animate={{ width: idx === currentSlide ? 24 : 8 }}
                      onClick={() => setCurrentSlide(idx)}
                    />
                  ))}
                </div>

                {/* Floating Info Card */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentSlide}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20"
                  >
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-5 rounded-xl shadow-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                           <h3 className="text-xl font-bold text-white leading-tight">{CAROUSEL_ITEMS[currentSlide].title}</h3>
                           <p className="text-sm text-cyan-400 font-medium mt-1">{CAROUSEL_ITEMS[currentSlide].subtitle}</p>
                        </div>
                        <div className="bg-slate-800 text-xs font-bold px-2 py-1 rounded uppercase border border-slate-700">
                          {CAROUSEL_ITEMS[currentSlide].genre}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 border-t border-white/5 pt-3">
                        <div className="flex gap-1 text-yellow-500">
                          {[...Array(CAROUSEL_ITEMS[currentSlide].rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-white">{CAROUSEL_ITEMS[currentSlide].price}</span>
                          <button className="bg-white text-slate-900 rounded-full p-1.5 hover:bg-cyan-400 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-40 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-rose-500 to-orange-600 rounded-full blur-3xl opacity-30 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};