import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeaturedWorkStripProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedWorkStrip: React.FC<FeaturedWorkStripProps> = ({
  projects,
  onSelectProject
}) => {
  // Duplicated items for a continuous flowing strip
  const stripItems = [...projects, ...projects];

  return (
    <section
      id="featured"
      className="border-b border-[#DECFC0]/60 bg-[#FAF6EE]/60 backdrop-blur-sm py-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-4 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#851737] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#540D21] border border-[#540D21]/50" />
          <span className="text-[#540D21]">CURATED FEATURED-WORK STRIP</span>
        </div>
        <span className="hidden sm:inline text-[#851737]">HOVER TO PAUSE • CLICK TO INSPECT DOSSIER</span>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-6 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap py-3">
          {stripItems.map((item, idx) => (
            <button
              key={`${item.id}-${idx}`}
              onClick={() => onSelectProject(item)}
              className="inline-flex items-center gap-4 px-6 py-4 rounded-none bg-[#EFE6D5]/70 border border-[#DECFC0] hover:border-[#540D21] transition-all duration-300 text-left shrink-0 group/item backdrop-blur-sm"
              data-cursor="pointer"
              data-cursor-text="INSPECT"
            >
              <div className="w-12 h-12 overflow-hidden bg-[#FAF6EE] shrink-0 border border-[#DECFC0]">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover/item:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-3 text-[0.625rem] uppercase font-mono tracking-widest text-[#851737]">
                  <span className="text-[#540D21] font-semibold">{item.number}</span>
                  <span className="text-[#241217]/90">{item.client}</span>
                  <span className="text-[#DECFC0]">•</span>
                  <span>{item.year}</span>
                </div>
                <div className="font-serif text-lg tracking-wide text-[#241217] group-hover/item:text-[#540D21] transition-colors">
                  {item.title}
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#851737] group-hover/item:text-[#540D21] group-hover/item:translate-x-1 transition-all ml-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Inline animation keyframe style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
