import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../types';

interface CoverArchHeroProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
  onOpenDeck?: () => void;
}

export const CoverArchHero: React.FC<CoverArchHeroProps> = ({
  portfolioData,
  onOpenInquiry,
  onOpenDeck
}) => {

  return (
    <section 
      id="cover-hero"
      className="relative min-h-screen bg-[#EAE0CD] text-[#FBF7EE] flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 border-b border-[#3E2F16] overflow-hidden selection:bg-[#F5D061] selection:text-[#0C0A07]"
    >
      {/* Subtle atmospheric vignette & background golden plume */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2E2213]/40 via-[#14100A]/90 to-[#0C0A07] pointer-events-none" />

      {/* Top Editorial Slide Bar / Page Marker (01 // PORTFOLIO COVER) */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#3E2F16]/60 pb-4 text-xs font-mono tracking-[0.25em] text-[#D4A02A]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F5D061] animate-pulse" />
          <span className="text-[#FBF7EE] font-semibold">PAGE 01 · COVER DOSSIER</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden sm:inline text-[#8A631E]">INDUS DESIGN SCHOOL · CLASS OF '27</span>
          {onOpenDeck && (
            <button
              onClick={onOpenDeck}
              className="px-3 py-1 bg-[#1A140D] hover:bg-[#2E2213] border border-[#3E2F16] hover:border-[#F5D061] text-[#F5D061] hover:text-[#FBF7EE] text-[10px] uppercase tracking-widest transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#F5D061]" />
              <span>Open Slide Deck (11 Pages)</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Cover Slide Centerpiece */}
      <div className="relative z-10 my-auto py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        {/* Curving Arched Typography Arc wrapper */}
        <div className="relative flex flex-col items-center">
          {/* Radial Curved / Arched Headline matching Slide 1 */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] mb-[-2rem] sm:mb-[-3rem] z-20 pointer-events-none select-none">
            <svg viewBox="0 0 500 220" className="w-full overflow-visible">
              <path
                id="curve"
                d="M 40,200 A 210,180 0 0,1 460,200"
                fill="transparent"
              />
              <text className="font-serif uppercase tracking-[0.28em] fill-[#FBF7EE] font-bold text-[28px] sm:text-[34px]">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  PORTFOLIO · COUTURE
                </textPath>
              </text>
            </svg>
          </div>

          {/* Arched Portal Model Frame */}
          <div className="relative group">
            {/* Sparkle glyphs flanking arch */}
            <div className="absolute -left-6 sm:-left-10 top-1/4 text-[#F5D061] text-xl sm:text-2xl animate-pulse">
              ✦
            </div>
            <div className="absolute -right-6 sm:-right-10 top-1/3 text-[#F5D061] text-lg sm:text-xl animate-pulse">
              ✧
            </div>
            <div className="absolute -right-4 sm:-right-8 top-2/3 text-[#8A631E] text-xs font-mono">
              [ FIG. 01 ]
            </div>

            {/* Doorway Arch Frame */}
            <div className="w-[240px] sm:w-[320px] md:w-[360px] aspect-[3/4.4] rounded-t-full border-2 border-[#540D21]/70 group-hover:border-[#F5D061] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] group-hover:shadow-[0_25px_60px_rgba(245,208,97,0.18)] bg-[#0C0A07] relative transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
                alt="Shatma Aaliya Couture Model in Doorway"
                className="w-full h-full object-cover contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Radial gradient shadow at bottom of arch */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A07] via-transparent to-amber-500/10 opacity-75" />

              {/* Inner Arch Hairline */}
              <div className="absolute inset-2 rounded-t-full border border-white/20 pointer-events-none group-hover:border-[#F5D061]/40 transition-colors" />
            </div>

            {/* "by Shatma Aaliya" signature pill at base of arch */}
            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-[#14100A] border border-[#3E2F16] rounded-full text-xs font-serif italic text-[#F5D061] tracking-wider shadow-lg">
              <span>by {portfolioData.name || 'Shatma Aaliya'}</span>
              <span className="text-[#8A631E] font-mono not-italic text-[10px]">· INDUS '27</span>
            </div>
          </div>
        </div>

        {/* Subtitle & Direct Actions */}
        <div className="mt-6 max-w-xl text-center space-y-4">
          <p className="text-sm sm:text-base text-[#F5D061]/90 font-light tracking-wide leading-relaxed font-serif italic">
            "{portfolioData.pullQuote?.quote || 'Design is never an embellishment; it is an act of calculated seduction and uncompromising discipline.'}"
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-2.5 bg-[#2E2213] hover:bg-[#423218] border border-[#F5D061] text-xs font-mono uppercase tracking-[0.2em] text-[#FBF7EE] hover:text-[#F5D061] transition-all flex items-center gap-2 shadow-lg"
              data-cursor="pointer"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F5D061]" />
            </button>

            {onOpenDeck && (
              <button
                onClick={onOpenDeck}
                className="px-5 py-2.5 bg-[#14100A] hover:bg-[#241C10] border border-[#3E2F16] hover:border-[#F5D061]/60 text-xs font-mono tracking-wider text-[#F5D061] hover:text-[#FBF7EE] transition-all flex items-center gap-2"
                data-cursor="pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F5D061]" />
                <span>View Lookbook (11 Pgs)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Navigation Prompter */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#3E2F16]/60 text-xs font-mono uppercase tracking-[0.2em] text-[#8A631E]">
        <div className="flex items-center gap-3">
          <span className="text-[#F5D061]">SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#F5D061] animate-bounce" />
        </div>

        <div className="text-[11px] text-[#D4A02A]">
          PHOTOGRAPHY · MANIFESTO · PRICING · VIDEO
        </div>
      </div>
    </section>
  );
};
