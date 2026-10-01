import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { inspirationMetrics } from '../data/portfolioData';

interface BenefitsStatsPageProps {
  onOpenInquiry: () => void;
}

export const BenefitsStatsPage: React.FC<BenefitsStatsPageProps> = ({ onOpenInquiry }) => {
  const checklist = [
    "Three-dimensional pattern-making and made-to-measure toiles for real bodies",
    "Access to historic archive textiles and hand-woven handloom silks",
    "Structured bodices with high-support boning and invisible finishing",
    "Complete styling direction for runway shows, editorials and red carpets",
    "Technical consulting in oxidized zardozi embroidery and textile metalwork"
  ];

  return (
    <section
      id="benefits-stats"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 07 // BENEFÍCIOS & IMPACTO) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-semibold">PAGE 07 · ATELIER BENEFITS &amp; IMPACT</span>
        </div>
        <div className="flex items-center gap-2">
          <span>93% PROVEN EFFECTIVENESS</span>
          <Sparkles className="w-3.5 h-3.5 text-[#540D21]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Huge 93% Stat Callout on Golden Glowing Plaque */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 p-7 sm:p-9 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden backdrop-blur-md">
          {/* Subtle Hairline Frame */}
          <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

          <div className="flex items-baseline gap-2">
            <span className="text-7xl sm:text-9xl font-serif font-black text-[#FAF6EE] tracking-tighter leading-none">
              93%
            </span>
            <span className="text-3xl sm:text-4xl text-[#FAF6EE] animate-pulse">
              ✦
            </span>
          </div>

          <div className="h-0.5 w-20 bg-[#FAF6EE]" />

          <p className="text-sm sm:text-base text-[#FAF6EE] font-mono uppercase tracking-widest font-black leading-relaxed">
            Dramatically fewer fittings and alterations through advanced three-dimensional anatomical pattern-making.
          </p>

          <p className="text-xs text-[#FAF6EE]/90 font-serif italic leading-relaxed">
            "Precise cutting and internal structure ensure every piece fits like made-to-measure armor at the very first fitting."
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-[#FAF6EE] hover:bg-[#F3EBDD] border border-[#FAF6EE] text-xs font-mono uppercase tracking-[0.2em] text-[#540D21] hover:text-[#851737] transition-all duration-300 shadow-xl flex items-center gap-2 font-bold cursor-pointer"
              data-cursor="pointer"
              data-cursor-text="CHECK"
            >
              <span>Check Availability</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#540D21]" />
            </button>
          </div>
        </div>

        {/* Right Column: 5 Checklist Pillars */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] transition-all flex items-start gap-4 shadow-lg group"
            >
              <div className="w-6 h-6 rounded-full bg-[#540D21]/10 border border-[#540D21] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#540D21] transition-colors">
                <Check className="w-3.5 h-3.5 text-[#540D21] group-hover:text-[#FAF6EE] transition-colors" />
              </div>
              <span className="text-sm sm:text-base font-serif text-[#241217]/90 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
