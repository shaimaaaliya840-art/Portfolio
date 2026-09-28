import React from 'react';
import { motion } from 'motion/react';
import { PortfolioData, ExperienceItem } from '../types';
import { experienceTimeline, editorialTenets } from '../data/portfolioData';
import { CheckCircle2, Sparkles } from 'lucide-react';
import ladyArchImage from '../assets/images/lady_silhouette_golden_arch_1790239245140.jpg';

interface AboutAndExperienceProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const AboutAndExperience: React.FC<AboutAndExperienceProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const neelgar = portfolioData.neelgarHighlight;

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#DECFC0]/60 space-y-28 relative">
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* 1. About / Personal Editorial Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#540D21] flex items-center gap-2 font-bold">
            <span>// ABOUT & PERSONAL AESTHETIC</span>
            <span className="text-[#540D21]">✦</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#241217] leading-tight">
            {portfolioData.bioHeadline}
          </h2>

          <div className="relative aspect-[3/4.2] w-full max-w-md overflow-hidden border-2 border-[#540D21] bg-[#FAF6EE] shadow-[0_20px_40px_rgba(84,13,33,0.18)] rounded-t-full">
            <img
              src={ladyArchImage}
              alt="Shatma Aaliya in Dark Silhouette Backlit by Glowing Gold"
              className="w-full h-full object-cover contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/75 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold">
              <span>SHATMA AALIYA</span>
              <span>INDUS DESIGN SCHOOL</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 lg:pt-14">
          {/* Bio Writeup in Glowing Golden Plaque with Dark Silhouette Writeup */}
          <div className="space-y-6 text-base sm:text-lg text-[#FAF6EE]/85 font-normal leading-relaxed p-7 sm:p-9 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />
            {portfolioData.bioParagraphs.map((p, idx) => (
              <p key={idx} className="border-l-2 border-[#FAF6EE]/30 pl-5">
                {p}
              </p>
            ))}
          </div>

          {/* Editorial Tenets with Golden Glowing Cards & Dark Silhouette Writeup */}
          <div className="pt-8 border-t border-[#DECFC0]/60">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#540D21] mb-6 font-bold">
              THE THREE ATELIER TENETS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {editorialTenets.map((tenet) => (
                <div key={tenet.number} className="bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] p-5 space-y-2 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-1 border border-[#FAF6EE]/20 pointer-events-none" />
                  <div className="text-xs font-mono text-[#FAF6EE] font-black">{tenet.number}</div>
                  <div className="text-base font-serif font-black text-[#FAF6EE]">{tenet.title}</div>
                  <div className="text-[11px] font-mono uppercase text-[#FAF6EE]/85 font-bold">{tenet.subtitle}</div>
                  <p className="text-xs text-[#FAF6EE] leading-normal pt-2 font-normal">
                    {tenet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Neelgar Work Experience Feature Highlight */}
      <div id="neelgar-experience" className="bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] p-8 sm:p-12 relative overflow-hidden shadow-[0_25px_40px_rgba(84,13,33,0.18)] text-[#FAF6EE]">
        <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#FAF6EE]/20 pb-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#FAF6EE] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#FAF6EE]" />
                <span>ATELIER TENURE // 2024—PRESENT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#FAF6EE] pt-2">
                Neelgar Atelier & Couture
              </h3>
              <div className="text-sm font-mono tracking-widest text-[#FAF6EE]/85 font-bold uppercase pt-1">
                {neelgar.role} • Ahmedabad & Mumbai
              </div>
            </div>

            <div className="px-4 py-2 bg-[#FAF6EE] border border-[#FAF6EE] text-xs font-mono tracking-widest uppercase text-[#540D21] self-start md:self-auto font-bold shadow-md">
              HAUTE COUTURE ARCHIVE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-lg sm:text-xl font-serif text-[#FAF6EE] italic font-bold">
                "{neelgar.tagline}"
              </div>
              <p className="text-sm text-[#FAF6EE] leading-relaxed font-normal">
                {neelgar.summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FAF6EE]/85 font-bold">
                  KEY DELIVERABLES & MONUMENTS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {neelgar.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#FAF6EE] border border-[#FAF6EE] shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#540D21] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#241217] font-light leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden border-2 border-[#FAF6EE] bg-[#FAF6EE] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                  alt="Neelgar Couture Detail"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden border-2 border-[#FAF6EE] bg-[#FAF6EE] mt-6 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                  alt="Neelgar Runway Monograph"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Complete Chronological Career Timeline with Golden Glowing Cards & Dark Silhouette Writeup */}
      <div id="experience" className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#DECFC0]/60 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#540D21] font-bold">
              CURRICULUM VITAE
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#241217] pt-1">
              Professional & Academic Trajectory
            </h3>
          </div>
          <span className="text-xs font-mono text-[#540D21] font-bold">2023 — 2027</span>
        </div>

        <div className="space-y-6">
          {experienceTimeline.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 border-2 bg-gradient-to-br from-[#540D21] via-[#851737] to-[#A63856] border-[#540D21] shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-serif font-black text-[#FAF6EE]">{item.company}</h4>
                  {item.isNeelgar && (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF6EE] text-[#540D21] font-bold">
                      COUTURE APPRENTICESHIP
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-[#EFE6D5] tracking-wider uppercase font-bold">
                  {item.period} • {item.location}
                </div>
              </div>

              <div className="text-sm font-mono text-[#FAF6EE] font-black uppercase tracking-wider pb-3">
                {item.role}
              </div>

              <p className="text-sm text-[#FAF6EE] leading-relaxed max-w-3xl font-normal">
                {item.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#FAF6EE]/20 flex flex-wrap gap-2">
                {item.deliverables.map((deliv, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono text-[#540D21] px-2.5 py-1 bg-[#FAF6EE] border border-[#FAF6EE] font-semibold"
                  >
                    • {deliv}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
