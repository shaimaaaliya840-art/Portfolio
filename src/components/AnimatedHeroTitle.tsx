import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AnimatedHeroTitleProps {
  name?: string;
  onSelectWord?: (word: string) => void;
}

const DEFAULT_WORDS = [
  'drapes',
  'sculpts',
  'tailors',
  'storytells'
];

interface LetterProps {
  char: string;
  isWineAccent?: boolean;
}

// Interactive letter with 3D tilt & lift physics on hover
export const InteractiveLetter: React.FC<LetterProps> = ({ char, isWineAccent }) => {
  if (char === ' ') {
    return <span className="inline-block w-3 sm:w-4">&nbsp;</span>;
  }

  return (
    <span
      className={`h-letter select-none cursor-default ${
        isWineAccent ? 'wine-accent text-[#0C0A07]' : ''
      }`}
      data-cursor="pointer"
    >
      {char}
    </span>
  );
};

export const AnimatedHeroTitle: React.FC<AnimatedHeroTitleProps> = ({ name }) => {
  const [words] = useState<string[]>(DEFAULT_WORDS);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Continuous auto-roll matching slot machine mechanism (1.9s cadence)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 1900);
    return () => clearTimeout(timer);
  }, [currentIndex, words.length]);

  const activeWord = words[currentIndex] || words[0];

  return (
    <div
      className="relative flex flex-col gap-3 sm:gap-4 select-none"
    >
      {/* Eyebrow with Designer Name in Dark Silhouette Plaque */}
      <div className="flex items-center text-xs uppercase tracking-[0.25em] font-mono">
        <span className="px-3.5 py-1 bg-[#FAF6EE] text-[#540D21] border border-[#540D21] font-mono tracking-widest text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(84,13,33,0.4)]">
          {name || 'SHATMA AALIYA'}
        </span>
      </div>

      {/* Main Animated Heading Stack */}
      <div className="relative">
        {/* Rotated Vertical Eyebrow Label */}
        <div
          aria-hidden="true"
          className="hidden xl:block absolute -left-14 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-mono tracking-[0.35em] text-[#FAF6EE] uppercase whitespace-nowrap pointer-events-none font-bold"
        >
          COUTURE / SILHOUETTE / ARCHIVE
        </div>

        <h1 className="flex flex-col font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF6EE] leading-[1.05] drop-shadow-[0_0_24px_rgba(84,13,33,0.8)]">
          {/* Line 1: 'designer who' (with per-letter interactive physics) */}
          <span className="block whitespace-nowrap overflow-visible">
            {'designer who'.split('').map((char, index) => (
              <InteractiveLetter key={`line1-${index}-${char}`} char={char} />
            ))}
          </span>

          {/* Line 2: The Signature Slot-Machine Roll */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mt-1 sm:mt-2">
            <span
              id="scramble"
              className="relative inline-block roll-container h-[1.18em] overflow-hidden align-middle"
              style={{
                verticalAlign: 'middle',
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeWord}
                  initial={{ y: '100%', opacity: 0.2 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0.2 }}
                  transition={{
                    duration: 0.56,
                    ease: [0.22, 1.15, 0.36, 1]
                  }}
                  className="inline-flex items-center whitespace-nowrap text-[#FAF6EE] font-display drop-shadow-[0_0_28px_rgba(84,13,33,0.9)] underline decoration-[#540D21]/80 decoration-wavy underline-offset-8"
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
          </div>
        </h1>
      </div>
    </div>
  );
};
