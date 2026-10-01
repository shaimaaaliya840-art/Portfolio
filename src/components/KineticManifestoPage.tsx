import React from 'react';
import { PortfolioData } from '../types';
import { AtelierPalette } from '../data/colorPalettes';

// Words in the manifesto line that get the accent colour + underline
const SPECIAL_WORDS = ['design', 'garments', 'imagination'];

interface KineticManifestoPageProps {
  portfolioData?: PortfolioData;
  activePalette?: AtelierPalette;
  onOpenInquiry?: () => void;
  onOpenDeck?: () => void;
  onOpenDetail?: (slideIndex?: number) => void;
}

export const KineticManifestoPage: React.FC<KineticManifestoPageProps> = ({
  portfolioData,
}) => {
  // Words breakdown of the user's requested manifesto
  const sentence = "I tell stories through design, where garments meet imagination.";
  const words = sentence.split(' ');

  const aboutMeText = portfolioData?.aboutMe || "I'm a creatively driven individual with a strong foundation in cultural aesthetics and design thinking. My work is deeply rooted in exploring heritage while translating it into contemporary, functional garments. I have a keen interest in material experimentation, focusing on textures, structure, and innovative fabric use. I aim to create clothing that balances modesty, elegance, and bold expression. With an eye for detail and storytelling, I strive to design pieces that are both meaningful and wearable. My approach blends tradition with modern sensibilities to craft unique, statement-driven fashion.";

  return (
    <section
      id="kinetic-manifesto"
      // Transparent: the site-wide pink gradient (OrbitalBackground) shows through
      className="relative select-none overflow-hidden py-10 sm:py-14 md:py-16"
    >
      {/* Center Arena: Massive Kinetic Typography Runway */}
      <div className="relative z-10 w-full flex flex-col justify-center items-start overflow-hidden px-4 sm:px-10">
        {/* Page meta strip (same treatment as the contact page) */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-10 text-xs font-mono tracking-[0.25em] text-[#540D21]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#540D21]" />
            <span className="font-bold text-[#241217]">PAGE 02 · INTRODUCTION // MANIFESTO</span>
          </div>
          <span className="text-[#851737]">SHATMA AALIYA</span>
        </div>

        {/* Poetic Sub-narrative Ribbon (Exchanged to Top) */}
        <div className="px-6 mb-6 max-w-4xl flex items-center justify-between">
          <p className="text-sm sm:text-base text-[#2A1519] font-editorial leading-relaxed border-l-2 border-[#540D21]/60 pl-4 max-w-3xl text-left sm:text-justify">
            <span className="font-avonia text-3xl sm:text-4xl text-[#540D21] font-normal italic inline-block pr-1.5 leading-none align-baseline select-none">
              I
            </span>
            {aboutMeText.startsWith("I") ? aboutMeText.slice(1) : aboutMeText}
          </p>
        </div>

        {/* Manifesto line — static so it can be read: whole sentence visible, wrapping to
            fit the screen. The Amoresa initial comes from .font-avonia::first-letter. */}
        <h2 className="px-6 font-avonia text-[clamp(2.25rem,5.2vw,4.75rem)] font-normal leading-[1.3] tracking-[0.04em] text-[#241217]">
          {words.map((word, wordIdx) => {
            const isSpecial = SPECIAL_WORDS.some((w) => word.toLowerCase().includes(w));
            return (
              <React.Fragment key={`${word}-${wordIdx}`}>
                {wordIdx > 0 && ' '}
                {isSpecial ? (
                  <span className="text-[#540D21] underline decoration-[#540D21]/50 decoration-2 underline-offset-8">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </React.Fragment>
            );
          })}
        </h2>
      </div>
    </section>
  );
};
