import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, HelpCircle } from 'lucide-react';
import { inspirationMetrics } from '../data/portfolioData';

interface ObjectionStatsPageProps {
  onOpenInquiry: () => void;
}

export const ObjectionStatsPage: React.FC<ObjectionStatsPageProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="objection-stats"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE] flex flex-col justify-between"
    >
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 09 // AINDA NÃO TEM CERTEZA?) */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-semibold">PAGE 09 · VALIDAÇÃO &amp; DECISÃO DE ATELIER</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span>MÉTRICAS COMPROVADAS</span>
          <Sparkles className="w-3 h-3 text-[#540D21]" />
        </div>
      </div>

      {/* Main Grid: Left Question & Reassurance, Right Big Metrics (70%, 73%, 84%) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto py-6">
        {/* Left Column: Golden Glowing Plaque with Dark Silhouette Writeup */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left p-7 sm:p-9 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden backdrop-blur-md">
          {/* Subtle Hairline Frame */}
          <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6EE] text-[#540D21] text-[10px] font-mono uppercase tracking-[0.2em] w-fit font-bold shadow-md">
            <HelpCircle className="w-3 h-3 text-[#540D21]" />
            <span>DIAGNÓSTICO EXCLUSIVO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF6EE] leading-[1.15] font-black">
            Ainda não tem certeza se alta-costura é o que você precisa?
          </h2>

          <p className="text-base sm:text-lg text-[#FAF6EE]/95 font-serif italic leading-relaxed font-bold">
            "Cada encomenda comissionada a Shatma Aaliya passa por uma sessão diagnóstica de anatomia, pesquisa de tecidos históricos em teares manuais e modelagem arquitetônica tridimensional sem concessões."
          </p>

          <p className="text-xs sm:text-sm text-[#FAF6EE]/85 font-normal leading-relaxed">
            Não produzimos vestuário comum. Construímos armaduras de presença cênica para noivas de alta distinção, tapetes vermelhos e mulheres que exigem autoridade e beleza letal.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenInquiry}
              id="objection-inquire-btn"
              className="px-8 py-3.5 bg-[#FAF6EE] hover:bg-[#F3EBDD] border border-[#FAF6EE] text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] hover:text-[#851737] transition-all duration-300 shadow-xl flex items-center gap-3 w-fit font-bold cursor-pointer"
              data-cursor="pointer"
              data-cursor-text="CONSULTAR"
            >
              <span>Trabalhe Comigo</span>
              <ArrowUpRight className="w-4 h-4 text-[#540D21]" />
            </button>
          </div>
        </div>

        {/* Right Column: 70%, 73%, 84% Metrics with Golden Glowing Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {inspirationMetrics.secondaryStats.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl relative"
            >
              <div className="space-y-1 max-w-md">
                <div className="text-xs font-mono text-[#540D21] uppercase tracking-widest font-bold">
                  {metric.label}
                </div>
                <p className="text-sm font-serif text-[#241217]/85 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="text-5xl sm:text-6xl font-serif font-black text-[#540D21] tracking-tight shrink-0">
                {metric.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
