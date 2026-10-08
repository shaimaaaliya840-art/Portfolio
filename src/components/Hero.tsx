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

const KINETIC_WORDS = ['drapes', 'tailors', 'storytells', 'sculpts'];

interface LetterProps {
  char: string;
  isWineAccent?: boolean;
  /** Headline's first letter, set in the script face (see .headline-initial) */
  isInitial?: boolean;
}

// Interactive letter with 3D tilt & lift physics on hover
const InteractiveLetter: React.FC<LetterProps> = ({ char, isWineAccent, isInitial }) => {
  if (char === ' ') {
    return <span className="inline-block w-2 sm:w-3">&nbsp;</span>;
  }

  return (
    <span
      className={`inline-block transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-4deg] select-none cursor-default ${
        isWineAccent ? 'text-[#540D21] font-semibold' : 'text-[#241217]'
      } ${isInitial ? 'headline-initial' : ''}`}
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
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 max-w-7xl mx-auto text-[#241217] selection:bg-[#540D21] selection:text-[#FAF6EE] pt-32 pb-16 overflow-hidden"
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
            <h1 className="font-avonia font-normal text-[clamp(2.5rem,min(8vw,12vh),8.125rem)] text-[#241217] tracking-normal leading-[0.9] drop-shadow-[0_2px_14px_rgba(84,13,33,0.1)]">
              {/* Letters are separate spans (for the hover wobble), so keep each word in a
                  nowrap group or narrow screens break the line mid-word ("wh / o") */}
              {'Designer who'.split(' ').map((word, w) => (
                <React.Fragment key={`dw-${w}`}>
                  {w > 0 && <InteractiveLetter char=" " />}
                  <span className="inline-block whitespace-nowrap">
                    {word.split('').map((c, i) => (
                      <InteractiveLetter key={`dw-${w}-${i}`} char={c} isInitial={w === 0 && i === 0} />
                    ))}
                  </span>
                </React.Fragment>
              ))}
            </h1>

            {/* Line 2: Giant Kinetic Tumbler for the active moving word in Avonia luxury script */}
            <div className="flex flex-col items-center justify-center relative">
              {/* Font size lives on the container so h-[2em] matches the word. The Amoresa
                  initial rises ~1.35em and drops ~0.45em, so the window needs ~2em (and the
                  word is nudged down 0.3em) or the clip cuts its swashes off */}
              <span
                id="scramble"
                className="relative inline-flex items-center justify-center roll-container h-[2em] overflow-hidden px-2 sm:px-12 font-avonia font-normal text-[clamp(2.5rem,min(8vw,12vh),8.125rem)]"
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
                    className="relative top-[0.3em] inline-flex items-baseline text-[#540D21] leading-[1.4] drop-shadow-[0_4px_24px_rgba(84,13,33,0.2)]"
                  >
                    {activeWord.split('').map((char, i) => (
                      <InteractiveLetter
                        key={`word-${activeWord}-${i}-${char}`}
                        char={char}
                        isWineAccent={true}
                        isInitial={i === 0}
                      />
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full flex items-center justify-between border-t border-[#540D21]/15 pt-3 text-[0.625rem] sm:text-xs font-mono tracking-[0.25em] text-[#540D21]/70 uppercase select-none"
      >
        <div className="flex items-center gap-2">
          <span className="animate-bounce">↓</span>
          <span>Scroll Down</span>
        </div>
        <div className="text-[0.625rem] text-[#241217]/40 hidden sm:block">
          Atelier · Silhouette · Drape · Archive
        </div>
      </motion.div>
    </section>
  );
};
