import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioData } from '../types';

interface HeroProps {
  portfolioData: PortfolioData;
  onOpenColorModal?: () => void;
  onOpenInquiry?: () => void;
  onOpenDeck?: () => void;
  onOpenConceptLookbook?: () => void;
}

const KINETIC_WORDS = ['drapes', 'tailors', 'storyless', 'sculpts'];

interface LetterProps {
  char: string;
  isWineAccent?: boolean;
}

// Interactive letter with 3D tilt & lift physics on hover
const InteractiveLetter: React.FC<LetterProps> = ({ char, isWineAccent }) => {
  if (char === ' ') {
    return <span className="inline-block w-2 sm:w-3">&nbsp;</span>;
  }

  return (
    <span
      className={`inline-block transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-4deg] select-none cursor-default ${
        isWineAccent ? 'text-[#540D21] font-semibold' : 'text-[#241217]'
      }`}
    >
      {char}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ portfolioData }) => {
  const [wordIndex, setWordIndex] = useState(0);

  // Cadence for the moving hero words
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % KINETIC_WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const activeWord = KINETIC_WORDS[wordIndex];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 max-w-7xl mx-auto text-[#241217] selection:bg-[#540D21] selection:text-[#FAF6EE] py-16 overflow-hidden"
    >
      {/* Main Centerpiece: Moving kinetic title */}
      <div className="my-auto w-full flex flex-col items-center justify-center text-center py-6 sm:py-10">
        {/* Dynamic Moving Hero Section (MAIN BIG HEADLINE ON PAGE 01) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center justify-center space-y-6 sm:space-y-8"
        >
          {/* Monumental Kinetic Headline in Avonia Modern Luxury Script */}
          <div className="w-full max-w-6xl flex flex-col items-center justify-center select-none">
            {/* Line 1: "Designer who" in Avonia modern luxury script */}
            <h1 className="font-avonia font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[130px] text-[#241217] tracking-normal leading-[0.9] drop-shadow-[0_2px_14px_rgba(84,13,33,0.1)]">
              {'Designer who'.split('').map((c, i) => (
                <InteractiveLetter key={`dw-${i}`} char={c} />
              ))}
            </h1>

            {/* Line 2: Giant Kinetic Tumbler for the active moving word in Avonia luxury script */}
            <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center relative top-[1cm]">
              <span
                id="scramble"
                className="relative inline-flex items-center justify-center roll-container h-[1.32em] overflow-hidden px-6 sm:px-12 py-1 rounded-2xl bg-[#540D21]/5 border border-[#540D21]/20 shadow-[0_6px_30px_rgba(84,13,33,0.1)]"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={activeWord}
                    initial={{ y: '100%', opacity: 0.1, rotateX: -45 }}
                    animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                    exit={{ y: '-100%', opacity: 0.1, rotateX: 45 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1.15, 0.36, 1],
                    }}
                    className="inline-flex items-center font-avonia font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[130px] text-[#540D21] leading-none drop-shadow-[0_4px_24px_rgba(84,13,33,0.2)]"
                  >
                    {activeWord.split('').map((char, i) => (
                      <InteractiveLetter
                        key={`word-${activeWord}-${i}-${char}`}
                        char={char}
                        isWineAccent={true}
                      />
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>

              {/* Signature Avonia Sweeping Flourish Underline (inspired by Avonia specimen) */}
              <div className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[560px] flex items-center justify-center -mt-2 sm:-mt-3 pointer-events-none">
                <svg
                  className="w-full h-7 sm:h-11 text-[#540D21]/75"
                  viewBox="0 0 500 45"
                  fill="none"
                >
                  <path
                    d="M 30 22 C 140 40, 260 40, 390 18 C 440 9, 475 14, 485 24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <circle cx="485" cy="24" r="2.5" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full flex items-center justify-between border-t border-[#540D21]/15 pt-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#540D21]/70 uppercase select-none"
      >
        <div className="flex items-center gap-2">
          <span className="animate-bounce">↓</span>
          <span>Deslizar / Scroll Down</span>
        </div>
        <div className="text-[10px] text-[#241217]/40 hidden sm:block">
          Atelier · Silhouette · Drape · Archive
        </div>
      </motion.div>
    </section>
  );
};
