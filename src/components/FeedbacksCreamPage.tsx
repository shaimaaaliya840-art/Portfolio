import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

interface FeedbacksCreamPageProps {
  testimonials: Testimonial[];
}

export const FeedbacksCreamPage: React.FC<FeedbacksCreamPageProps> = ({ testimonials }) => {
  return (
    <section
      id="feedbacks-page"
      className="relative min-h-screen py-20 px-6 sm:px-12 border-b border-[#DECFC0] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Background Volumetric Golden Aura Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* Top Slide Page Meta (PAGE 04 // FEEDBACKS & REVIEWS) */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#DECFC0] pb-4 mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-semibold">PAGE 04 · FEEDBACKS DOS MENTORES E CLIENTES</span>
        </div>
        <div className="flex items-center gap-2">
          <span>NEELGAR ATELIER · INDUS JURY</span>
          <Sparkles className="w-3.5 h-3.5 text-[#540D21]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bold Display Title + Sparkle */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-4 text-left p-6 sm:p-7 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_20px_40px_rgba(84,13,33,0.18)] relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-1.5 border border-[#FAF6EE]/20 pointer-events-none" />

          <div className="flex items-center gap-2">
            <h2 className="text-4xl sm:text-5xl font-avonia font-normal capitalize tracking-normal text-[#FAF6EE] leading-none">
              Feedbacks
            </h2>
            <div className="text-[#FAF6EE] text-2xl animate-pulse font-black">
              ✦
            </div>
          </div>

          <div className="h-0.5 w-16 bg-[#FAF6EE]" />

          <p className="text-xs font-mono uppercase tracking-widest text-[#FAF6EE]/90 leading-relaxed font-bold">
            Depoimentos de fundadores de marcas, diretores criativos e mestres de alta costura.
          </p>

          <div className="pt-2 text-[11px] font-mono text-[#FAF6EE] font-black border-t border-[#FAF6EE]/20">
            [ 100% COMMENDATION RATE ]
          </div>
        </div>

        {/* Center Column: Arched Mentor Vignette */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group">
            {/* Arched Portrait Frame */}
            <div className="w-[210px] sm:w-[250px] aspect-[3/4.2] rounded-t-full border-2 border-[#540D21] p-2 bg-[#EFE6D5] shadow-[0_20px_40px_rgba(84,13,33,0.18)] overflow-hidden relative">
              <div className="w-full h-full rounded-t-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Fashion Director / Creative Mentor"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE]/75 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Feedback Cards */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {testimonials && testimonials.length > 0 ? (
            testimonials.slice(0, 2).map((item, idx) => (
              <div
                key={item.id || idx}
                className="p-5 sm:p-6 bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] transition-all relative space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#540D21]">
                  <span className="font-bold">{item.author || (item as any).name || 'Master Couturier'}</span>
                  <span>{item.organization || (item as any).company || 'Neelgar Atelier'}</span>
                </div>
                <p className="text-sm font-serif italic text-[#241217]/90 leading-relaxed">
                  "{item.quote || (item as any).content}"
                </p>
                <div className="text-[10px] font-mono text-[#851737] uppercase tracking-wider">
                  {item.role || 'Fashion Director'} · {item.year || '2026'}
                </div>
              </div>
            ))
          ) : (
            <div className="p-5 sm:p-6 bg-[#EFE6D5] border border-[#DECFC0] space-y-3">
              <p className="text-sm font-serif italic text-[#241217]">
                "Shatma demonstra maestria inigualável em modelagem tridimensional e tingimento botânico."
              </p>
              <div className="text-xs font-mono text-[#540D21]">
                Diretoria Criativa · Neelgar Atelier
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
