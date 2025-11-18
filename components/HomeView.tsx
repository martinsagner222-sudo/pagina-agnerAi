import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, TrendingUp, MessageSquare, XCircle } from 'lucide-react';
import { ViewState } from '../App';

interface HomeViewProps {
  setView: (view: ViewState) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5538997365520', '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* 1. HERO IMPACTANTE */}
      <section className="relative py-20 md:py-32 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Seu negócio funcionando <span className="text-cyan-400 glow-text">24h</span> sem funcionários.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Ative seu agente de IA agora e teste grátis por 7 dias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg uppercase tracking-wider rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Ativar Teste Grátis
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white/50 text-white font-medium text-lg uppercase tracking-wider rounded-sm bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* 2. BENEFÍCIO PRINCIPAL & 6. DIFERENCIAÇÃO */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Eficiência Sobre-Humana</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  “Onde antes 5 pessoas eram necessárias, agora <span className="text-cyan-400 font-semibold">1 agente de IA</span> faz com mais precisão e sem descanso.”
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                   <div className="p-2 bg-orange-500/10 rounded border border-orange-500/30">
                      <Zap className="w-6 h-6 text-orange-400" />
                   </div>
                   <div>
                      <h3 className="font-bold text-white text-lg">Automação é o passado</h3>
                      <p className="text-gray-400 text-sm">Agente de IA é o novo funcionário perfeito: responde, vende, agenda e opera 24h.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Visual Element illustrating logic */}
            <div className="relative p-1 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-lg">
              <div className="bg-[#080808] p-8 rounded-lg border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="relative z-10 space-y-4">
                   <div className="flex justify-between text-sm text-gray-500 uppercase tracking-widest mb-2">
                      <span>Status do Sistema</span>
                      <span className="text-green-400 animate-pulse">● Online</span>
                   </div>
                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-cyan-500 animate-[shimmer_2s_infinite]"></div>
                   </div>
                   <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-white/5 rounded border border-white/5">
                        <div className="text-2xl font-bold text-white">0s</div>
                        <div className="text-xs text-gray-400">Tempo de Resposta</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded border border-white/5">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-xs text-gray-400">Disponibilidade</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFERTA DE PLANOS (3 VARIAÇÕES) */}
      <section className="py-24 px-6 relative bg-[#080808]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold text-white">Escolha seu nível de inteligência operacional.</h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
               Todos os planos ativam seu negócio 24h. O plano Inteligente inclui página grátis e 7 dias do PRO.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Plano 1: Essencial */}
            <div className="relative p-6 bg-[#0a0a0a] border border-white/5 rounded-lg hover:border-white/10 transition-all group h-full flex flex-col">
               <div className="mb-6">
                 <h3 className="text-lg font-medium text-gray-400 uppercase tracking-wider">Plano Essencial</h3>
                 <div className="flex items-baseline mt-4 mb-1">
                   <span className="text-sm text-gray-500 mr-1">R$</span>
                   <span className="text-4xl font-bold text-white">197</span>
                 </div>
                 <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Pagamento Único</p>
                 <p className="text-sm text-gray-500 h-10">Para quem quer só o básico.</p>
               </div>
               
               <ul className="space-y-3 mb-8 text-sm flex-grow">
                 {["Respostas automáticas simples", "Agendamentos básicos", "Captura de leads", "Funcionamento 24h"].map(i => (
                   <li key={i} className="flex items-start gap-2 text-gray-300">
                     <CheckCircle2 className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                     <span>{i}</span>
                   </li>
                 ))}
                 {["Sem ajustes avançados", "Sem personalização"].map(i => (
                   <li key={i} className="flex items-start gap-2 text-gray-600">
                     <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                     <span>{i}</span>
                   </li>
                 ))}
               </ul>

               <div className="mt-auto pt-6 border-t border-white/5">
                 <p className="text-xs text-gray-500 italic mb-4 min-h-[32px]">“Funciona, mas é limitado. Ideal apenas para testes.”</p>
                 <button onClick={handleWhatsAppClick} className="w-full py-3 border border-white/10 hover:bg-white/5 text-gray-300 font-bold uppercase tracking-wider text-sm rounded-sm transition-colors">
                   Ativar Essencial
                 </button>
               </div>
            </div>

            {/* Plano 2: Inteligente (DESTAQUE) */}
            <div className="relative p-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-xl transform md:-translate-y-4 shadow-[0_0_40px_rgba(6,182,212,0.2)] z-10">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-cyan-500/50">
                 Mais Vendido
               </div>
               <div className="h-full bg-[#090909] p-8 rounded-[10px] relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Zap className="w-24 h-24 text-cyan-500" />
                 </div>
                 
                 <div className="mb-6 relative z-10">
                   <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-wider">Plano Inteligente</h3>
                   <div className="flex items-baseline mt-4 mb-1">
                     <span className="text-sm text-gray-500 mr-1">R$</span>
                     <span className="text-5xl font-bold text-white">297</span>
                   </div>
                   <p className="text-xs text-cyan-400/80 uppercase tracking-wider font-bold mb-4">Pagamento Único</p>
                   <p className="text-sm text-gray-400 h-10">A escolha mais equilibrada e inteligente.</p>
                 </div>

                 <ul className="space-y-3 mb-8 relative z-10 flex-grow">
                   {[
                     "Respostas inteligentes com IA",
                     "Agendamentos completos",
                     "Funis de vendas automáticos",
                     "Captação + qualificação de leads",
                     "Operação 24h com lógica avançada",
                     "7 dias de teste do PRO grátis incluso",
                     "Suporte direto via WhatsApp"
                   ].map(i => (
                     <li key={i} className="flex items-start gap-2 text-gray-200">
                       <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                       <span className="text-sm">{i}</span>
                     </li>
                   ))}
                 </ul>
                 
                 {/* Bônus Exclusivo */}
                 <div className="p-4 bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500 mb-8 relative z-10">
                    <p className="text-xs text-orange-200 leading-relaxed">
                      <strong className="text-orange-400 block mb-1 uppercase text-[10px] tracking-wider">Bônus Exclusivo</strong>
                      Página simples profissional GRÁTIS ao ativar.
                    </p>
                 </div>

                 <div className="mt-auto relative z-10">
                   <p className="text-xs text-gray-400 italic mb-4 min-h-[32px]">“O plano perfeito para começar forte e já sentir a diferença em 7 dias.”</p>
                   <button onClick={handleWhatsAppClick} className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider rounded-sm transition-colors shadow-lg shadow-cyan-500/20 hover:scale-[1.02]">
                     Ativar Inteligente
                   </button>
                 </div>
               </div>
            </div>

            {/* Plano 3: PRO Dominante */}
            <div className="relative p-6 bg-[#0a0a0a] border border-white/5 rounded-lg hover:border-white/10 transition-all group h-full flex flex-col">
               <div className="mb-6">
                 <h3 className="text-lg font-medium text-purple-400 uppercase tracking-wider">PRO Dominante</h3>
                 <div className="flex items-baseline mt-4 mb-1">
                   <span className="text-sm text-gray-500 mr-1">R$</span>
                   <span className="text-4xl font-bold text-white">497</span>
                 </div>
                 <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Pagamento Único</p>
                 <p className="text-sm text-gray-500 h-10">Para substituir equipe inteira.</p>
               </div>
               
               <ul className="space-y-3 mb-8 text-sm flex-grow">
                 <li className="flex items-center gap-2 text-white font-medium">
                     <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                     <span>Tudo do plano Inteligente</span>
                 </li>
                 {[
                   "Fluxos avançados personalizados",
                   "Integração Google Agenda / CRM",
                   "Múltiplos números & páginas",
                   "Scripts exclusivos de IA vendas",
                   "Automação de follow-up",
                   "Ajustes semanais",
                   "Suporte prioritário"
                 ].map(i => (
                   <li key={i} className="flex items-start gap-2 text-gray-300">
                     <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                     <span>{i}</span>
                   </li>
                 ))}
               </ul>

               <div className="mt-auto pt-6 border-t border-white/5">
                 <p className="text-xs text-gray-500 italic mb-4 min-h-[32px]">“Máxima performance. Para quem quer nascer grande.”</p>
                 <button onClick={handleWhatsAppClick} className="w-full py-3 border border-purple-500/30 hover:bg-purple-500/10 text-purple-400 font-bold uppercase tracking-wider text-sm rounded-sm transition-colors">
                   Ativar PRO
                 </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROVA INVISÍVEL */}
      <section className="py-12 border-y border-white/5 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <TrendingUp className="w-8 h-8 text-gray-500 mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-light text-gray-400 italic">
            “Negócios inteligentes estão migrando para agentes de IA porque <span className="text-white not-italic font-medium">tempo é dinheiro</span>.”
          </p>
        </div>
      </section>

      {/* 7. UPGRADE APÓS 7 DIAS */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-white">Como funciona o Upgrade?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-white/5 rounded bg-white/[0.02]">
              <div className="text-cyan-400 font-bold text-xl mb-2">01. Teste</div>
              <p className="text-gray-400 text-sm">Você usa tudo grátis por 7 dias para validar o retorno.</p>
            </div>
            <div className="p-6 border border-white/5 rounded bg-white/[0.02]">
              <div className="text-cyan-400 font-bold text-xl mb-2">02. Decisão</div>
              <p className="text-gray-400 text-sm">Se gostar, migra para o PRO com desconto exclusivo.</p>
            </div>
            <div className="p-6 border border-white/5 rounded bg-white/[0.02]">
              <div className="text-cyan-400 font-bold text-xl mb-2">03. Escala</div>
              <p className="text-gray-400 text-sm">Processo simples, rápido e sem interrupções.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Quem testa por 7 dias não volta ao modelo antigo.
          </h2>
          <p className="text-xl text-gray-400 mb-10">Ative agora seu agente de IA grátis por 7 dias.</p>
          
          <button 
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xl uppercase tracking-wider rounded-sm shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
          >
            <ShieldCheck className="w-6 h-6" />
            Garantir Meu Teste
          </button>
        </div>
      </section>
    </div>
  );
};