import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const DemoView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6 animate-fade-in">
        <div className="text-center space-y-6 max-w-lg mx-auto p-12 border border-cyan-500/30 bg-cyan-950/10 rounded-lg backdrop-blur-md">
          <div className="inline-flex p-4 bg-cyan-500/20 rounded-full mb-4">
            <CheckCircle className="w-16 h-16 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Recebido!</h2>
          <p className="text-gray-300 text-lg">
            Em breve você receberá sua demonstração personalizada.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm text-gray-500 hover:text-white underline transition-colors"
          >
            Voltar ao formulário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 animate-fade-in relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solicitar Demonstração
          </h2>
          <p className="text-gray-400">
            Prefere que eu entre em contato? Deixe seus dados e enviarei uma demonstração personalizada para o seu negócio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm shadow-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome completo</label>
            <input 
              type="text" 
              id="name"
              required
              className="w-full bg-black/50 border border-white/10 rounded p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-mail corporativo</label>
            <input 
              type="email" 
              id="email"
              required
              className="w-full bg-black/50 border border-white/10 rounded p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
            <input 
              type="tel" 
              id="whatsapp"
              required
              className="w-full bg-black/50 border border-white/10 rounded p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="+55 (DDD) 00000-0000"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.4)] hover:shadow-[0_0_25px_rgba(8,145,178,0.6)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : (
              <>
                Enviar meus dados
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};