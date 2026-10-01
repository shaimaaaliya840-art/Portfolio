import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { servicePackages } from '../data/portfolioData';

interface ServicePackagesPageProps {
  onOpenInquiry: () => void;
}

export const ServicePackagesPage: React.FC<ServicePackagesPageProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="packages-page"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 08 // PACOTES DE SERVIÇOS) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-semibold">PAGE 08 · SERVICE PACKAGES &amp; COMMISSIONS</span>
        </div>
        <div className="flex items-center gap-3">
          <span>ATELIER COMMISSIONS</span>
          <span className="text-[#851737]">·</span>
          <span>TIERS 2026/27</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Distinctive Vertical Rotated Banner with Golden Glowing Plaque & Dark Silhouette Writeup */}
        <div className="w-full lg:w-28 bg-gradient-to-b from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] p-6 flex lg:flex-col items-center justify-between lg:justify-center relative shrink-0 shadow-2xl">
          <div className="absolute inset-1 border border-[#FAF6EE]/20 pointer-events-none" />
          <div className="lg:-rotate-90 whitespace-nowrap text-2xl sm:text-3xl font-avonia tracking-normal font-normal text-[#FAF6EE]">
            Service Packages
          </div>
          <div className="text-[10px] font-mono text-[#FAF6EE] font-bold uppercase tracking-widest mt-0 lg:mt-12">
            ATELIER // SHATMA
          </div>
        </div>

        {/* 4-Column Grid of Service Tiers with Golden Glowing Cards & Dark Silhouette Writeup */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {servicePackages.map((pkg) => {
            const isRec = pkg.recommended;
            return (
              <div
                key={pkg.id}
                className={`p-6 sm:p-7 border-2 flex flex-col justify-between transition-all duration-300 relative shadow-xl ${
                  isRec
                    ? 'bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-[#851737] scale-[1.02] shadow-[0_15px_40px_rgba(84,13,33,0.25)]'
                    : 'bg-[#EFE6D5] border-[#DECFC0] hover:border-[#540D21]'
                }`}
              >
                {/* Hairline Frame */}
                <div className={`absolute inset-1.5 border pointer-events-none ${isRec ? 'border-[#FAF6EE]/20' : 'border-[#241217]/10'}`} />

                {isRec && (
                  <div className="absolute -top-3.5 right-4 px-3 py-1 bg-[#FAF6EE] text-[#540D21] text-[10px] font-mono uppercase tracking-widest font-black border border-[#540D21] shadow-lg">
                    FEATURED
                  </div>
                )}

                <div>
                  <div className={`flex items-center justify-between border-b pb-3 mb-4 ${isRec ? 'border-[#FAF6EE]/20' : 'border-[#DECFC0]'}`}>
                    <span className={`font-mono text-xs font-black tracking-widest ${isRec ? 'text-[#FAF6EE]' : 'text-[#540D21]'}`}>
                      {pkg.code}
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${isRec ? 'text-[#FAF6EE]/90' : 'text-[#6B545C]'}`}>
                      {pkg.timeline}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-serif font-black uppercase tracking-tight ${isRec ? 'text-[#FAF6EE]' : 'text-[#241217]'}`}>
                    {pkg.name}
                  </h3>

                  <div className={`text-2xl sm:text-3xl font-serif font-black my-3 ${isRec ? 'text-[#FAF6EE]' : 'text-[#540D21]'}`}>
                    {pkg.price}
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className={`flex items-start gap-2 text-xs font-medium leading-relaxed ${isRec ? 'text-[#FAF6EE]/90' : 'text-[#241217]/85'}`}>
                        <span className={`font-black mt-0.5 ${isRec ? 'text-[#FAF6EE]' : 'text-[#540D21]'}`}>•</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenInquiry}
                  className={`w-full py-3 px-4 text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border ${
                    isRec
                      ? 'bg-[#FAF6EE] hover:bg-[#F3EBDD] text-[#540D21] hover:text-[#851737] border-[#FAF6EE]'
                      : 'bg-[#540D21] hover:bg-[#6E112B] text-[#FAF6EE] border-[#540D21]'
                  }`}
                  data-cursor="pointer"
                  data-cursor-text="BOOK"
                >
                  <span>Request a Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
