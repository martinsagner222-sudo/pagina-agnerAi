import React from 'react';
import { Cpu, MapPin, Mail, Phone, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 mb-20">

          {/* Brand Column (Span 5) */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-cyan-950/30 rounded border border-cyan-900/50">
                 <Cpu className="w-6 h-6 text-cyan-400" />
               </div>
               <span className="brand-font text-2xl font-bold text-white tracking-wider">
                AGNER<span className="text-cyan-500">AI</span>
               </span>
            </div>
            
            <div className="space-y-4 border-l-2 border-white/10 pl-6">
              <h3 className="text-white font-semibold text-lg tracking-tight">
                Inteligência em Comando
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm max-w-md">
                Tecnologia avançada aplicada ao crescimento real de empresas. 
                Operação 24h, segurança, precisão e alta performance.
              </p>
            </div>
          </div>

          {/* Contact Column (Span 4) */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2">
              Contato Oficial
              <div className="h-px w-12 bg-cyan-900/50"></div>
            </h4>
            
            <div className="space-y-5">
              <a 
                href="https://wa.me/5538997365520" 
                className="group flex items-start gap-4 p-4 rounded bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 mt-1 transition-colors" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-bold mb-1">WhatsApp Executivo</span>
                  <span className="font-mono text-lg text-gray-200 group-hover:text-white tracking-tight">
                    (38) 99736-5520
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-cyan-500 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
              </a>

              <a 
                href="mailto:gabriel@agneraia.com" 
                className="group flex items-start gap-4 p-4 rounded bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 mt-1 transition-colors" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-bold mb-1">E-mail Corporativo</span>
                  <span className="text-gray-200 group-hover:text-white">
                    gabriel@agneraia.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Location Column (Span 3) */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] flex items-center gap-2">
              Localização
              <div className="h-px w-12 bg-cyan-900/50"></div>
            </h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                 <div>
                   <strong className="block text-white text-lg mb-1">Montes Claros — MG</strong>
                   <p className="text-sm text-gray-500 leading-relaxed">
                     Sede Operacional
                   </p>
                 </div>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                 <p className="text-sm text-gray-400">
                   <MapPin className="w-4 h-4 inline-block mr-2 text-gray-600" />
                   Presença em toda a região <span className="text-white">Norte de Minas</span>.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600 font-medium">
            Direitos reservados — 2025 AgnerAI
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] rounded-full border border-white/5">
            <ShieldCheck className="w-4 h-4 text-cyan-800" />
            <span className="text-xs text-gray-500">
              Soluções profissionais de IA para atendimento, vendas e expansão empresarial.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};