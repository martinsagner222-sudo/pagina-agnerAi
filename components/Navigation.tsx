import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setView('home')}
        >
          <div className="p-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <Cpu className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="brand-font text-xl font-bold tracking-wider text-white">
            AGNER<span className="text-cyan-400">AI</span>
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setView('home')}
            className={`hidden md:block text-sm font-medium transition-colors hover:text-cyan-400 ${currentView === 'home' ? 'text-white' : 'text-gray-400'}`}
          >
            Home
          </button>
          
          <button
            onClick={() => setView('demo')}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300
              ${currentView === 'demo' 
                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                : 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'}
            `}
          >
            Receber Demonstração
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};