import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';
import coutureModelImage from '../assets/images/couture_silhouette_model_glow_1790239282031.jpg';

interface ProcessHowItWorksPageProps {
  onOpenInquiry: () => void;
}

export const ProcessHowItWorksPage: React.FC<ProcessHowItWorksPageProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="how-it-works"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 08 // COMO FUNCIONA) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-semibold">PAGE 08 · COMO FUNCIONA // METODOLOGIA DE ATELIER</span>
        </div>
        <div className="flex items-center gap-2">
          <span>ETAPAS 01 — 03</span>
          <Sparkles className="w-3.5 h-3.5 text-[#540D21]" />
        </div>
      </div>

      {/* Header with Dark Silhouette on Glowing Backdrop */}
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-3">
          <h2 className="text-5xl sm:text-6xl font-avonia font-normal tracking-normal text-[#540D21] drop-shadow-[0_4px_25px_rgba(84,13,33,0.15)] leading-tight">
            Como Funciona
          </h2>
          <span className="text-2xl text-[#540D21] animate-pulse">✦</span>
        </div>
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#540D21] pt-2 font-bold">
          Do Primeiro Contato ao Vestir da Silhueta Final
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left 3 Step Columns with Golden Glowing Plaques & Dark Silhouette Writeup */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((stepItem) => (
            <div
              key={stepItem.step}
              className="p-6 sm:p-7 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden backdrop-blur-md flex flex-col justify-between"
            >
              <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-[#FAF6EE]/20 pb-3 mb-4">
                  <span className="text-2xl font-serif font-black text-[#FAF6EE]">
                    {stepItem.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#FAF6EE] uppercase tracking-widest font-black">
                    FASE
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-black uppercase text-[#FAF6EE] mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-[#FAF6EE]/90 font-medium leading-relaxed mb-4">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF6EE]/20 flex items-center justify-between text-[11px] font-mono font-bold text-[#FAF6EE]">
                <span>ETAPA VERIFICADA</span>
                <Check className="w-3.5 h-3.5 text-[#FAF6EE]" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Arched Model Portrait Vignette */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="w-[240px] sm:w-[280px] aspect-[3/4.2] rounded-t-full border-2 border-[#540D21] p-2 bg-[#EFE6D5] shadow-[0_20px_40px_rgba(84,13,33,0.18)] overflow-hidden relative">
              <div className="w-full h-full rounded-t-full overflow-hidden relative">
                <img
                  src={coutureModelImage}
                  alt="Couture Model Silhouette"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/75 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
