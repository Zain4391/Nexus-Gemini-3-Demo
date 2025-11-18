import React from 'react';
import { Gamepad2, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Gamepad2 className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-black tracking-widest uppercase text-white">
                NEXUS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The ultimate destination for digital entertainment. We bring you the latest games, exclusive deals, and a community of passionate gamers.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Coming Soon</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Deals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">About</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Nexus Gaming Store. All rights reserved.
          </p>
          <div className="flex gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};