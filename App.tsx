import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { DemoView } from './components/DemoView';
import { Footer } from './components/Footer';

// Define available views
export type ViewState = 'home' | 'demo';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-gray-200 overflow-x-hidden selection:bg-cyan-500/30">
      <Navigation currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow pt-20">
        {currentView === 'home' ? (
          <HomeView setView={setCurrentView} />
        ) : (
          <DemoView />
        )}
      </main>

      <Footer />
    </div>
  );
}