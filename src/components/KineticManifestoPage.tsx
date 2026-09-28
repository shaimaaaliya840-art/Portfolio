import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { PortfolioData } from '../types';
import { AtelierPalette } from '../data/colorPalettes';

interface KineticManifestoPageProps {
  portfolioData?: PortfolioData;
  activePalette?: AtelierPalette;
  onOpenInquiry?: () => void;
  onOpenDeck?: () => void;
  onOpenDetail?: (slideIndex?: number) => void;
}

export const KineticManifestoPage: React.FC<KineticManifestoPageProps> = ({
  portfolioData,
  activePalette,
  onOpenInquiry,
  onOpenDeck,
  onOpenDetail
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textTrackRef = useRef<HTMLDivElement>(null);
  const [isDisrupted, setIsDisrupted] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);

  // Scroll tracking across a generous, slow-paced pinned section (160vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Slow, silky physics spring for graceful, gentle editorial movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 1.2,
    restDelta: 0.001
  });

  // Dynamic horizontal translation tuned to glide gently and slowly across the scroll
  const textTranslateX = useTransform(
    smoothProgress,
    [0, 1],
    ['2vw', '-22vw']
  );

  // Guillaume Zhu signature container exit effect
  const containerScale = useTransform(smoothProgress, [0.88, 1], [1, 0.985]);
  const containerBorderRadius = useTransform(
    smoothProgress,
    [0.88, 1],
    ['0px 0px 0px 0px', '0px 0px 40px 40px']
  );
  const containerOpacity = useTransform(smoothProgress, [0.94, 1], [1, 0.94]);

  // Background subtle tint shift
  const bgGlowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.35, 0.2]);

  // Words breakdown of the user's requested manifesto
  const sentence = "I tell stories through design, where garments meet imagination.";
  const words = sentence.split(' ');

  const aboutMeText = portfolioData?.aboutMe || "I'm a creatively driven individual with a strong foundation in cultural aesthetics and design thinking. My work is deeply rooted in exploring heritage while translating it into contemporary, functional garments. I have a keen interest in material experimentation, focusing on textures, structure, and innovative fabric use. I aim to create clothing that balances modesty, elegance, and bold expression. With an eye for detail and storytelling, I strive to design pieces that are both meaningful and wearable. My approach blends tradition with modern sensibilities to craft unique, statement-driven fashion.";

  // Kinetic trigger to disrupt/scatter letters and arrange back into line slowly
  const triggerKineticDisruption = () => {
    setIsDisrupted(true);
    setTimeout(() => setIsDisrupted(false), 1600);
  };

  return (
    <section
      ref={containerRef}
      id="kinetic-manifesto"
      className="relative h-[160vh] bg-black select-none"
    >
      {/* Sticky Fullscreen Pinned Stage */}
      <motion.div
        style={{
          scale: containerScale,
          borderRadius: containerBorderRadius,
          opacity: containerOpacity,
        }}
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white border-b border-white/20 transition-shadow duration-500 shadow-2xl"
      >
        {/* Subtle Ambient Grain & Hairline Matrix */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Center Arena: Massive Kinetic Typography Runway */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-start overflow-hidden px-4 sm:px-10 pt-16 sm:pt-20">
          {/* Poetic Sub-narrative Ribbon (Exchanged to Top) */}
          <div className="px-6 mb-8 max-w-4xl flex items-center justify-between">
            <p className="relative -top-[1.5cm] text-xs sm:text-sm text-[var(--color-text-muted,#D2BDCF)] font-editorial leading-relaxed border-l-2 border-[var(--color-accent,#E9D5E6)] pl-4 max-w-3xl text-justify">
              <span className="font-['Pinyon_Script','Great_Vibes','Allura',cursive] text-3xl sm:text-4xl text-[var(--color-accent,#E9D5E6)] font-normal italic inline-block pr-1.5 leading-none align-baseline select-none drop-shadow-[0_2px_12px_rgba(233,213,230,0.45)]">
                I
              </span>
              {aboutMeText.startsWith("I") ? aboutMeText.slice(1) : aboutMeText}
            </p>
          </div>

          {/* Horizontal Scrolling Typography Container - Slow, smooth transitions (Exchanged to Bottom) */}
          <div className="w-full overflow-visible py-4 sm:py-6 transition-all duration-1000 ease-out">
            <motion.div
              ref={textTrackRef}
              style={{ x: textTranslateX }}
              drag="x"
              dragConstraints={{ left: -1000, right: 100 }}
              dragElastic={0.15}
              className="flex items-center whitespace-nowrap cursor-grab active:cursor-grabbing will-change-transform"
            >
              {words.map((word, wordIdx) => {
                const isSpecial =
                  word.toLowerCase().includes('design') ||
                  word.toLowerCase().includes('garments') ||
                  word.toLowerCase().includes('imagination');

                return (
                  <span
                    key={`${word}-${wordIdx}`}
                    onMouseEnter={() => setActiveWordIndex(wordIdx)}
                    onMouseLeave={() => setActiveWordIndex(null)}
                    className="inline-flex items-baseline font-avonia leading-none tracking-normal transition-all duration-200"
                  >
                    {word.split('').map((char, charIdx) => {
                      const globalIdx = wordIdx * 10 + charIdx;
                      
                      // Kinetic initial offset that smoothly arranges in 1 sec
                      const seedY = Math.sin(globalIdx * 1.5) * 26;
                      const seedRot = Math.cos(globalIdx * 1.8) * 9;

                      return (
                        <KineticLetter
                          key={`${char}-${charIdx}`}
                          char={char}
                          seedY={seedY}
                          seedRot={seedRot}
                          isDisrupted={isDisrupted}
                          isSpecialWord={isSpecial}
                          activePalette={activePalette}
                          onDisrupt={triggerKineticDisruption}
                        />
                      );
                    })}

                    {/* Compact Word Spacer so sentence stays visually connected */}
                    <span className="inline-block w-2.5 sm:w-4 md:w-5" />
                  </span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface KineticLetterProps {
  char: string;
  seedY: number;
  seedRot: number;
  isDisrupted: boolean;
  isSpecialWord: boolean;
  activePalette?: AtelierPalette;
  onDisrupt?: () => void;
}

const KineticLetter: React.FC<KineticLetterProps> = ({
  char,
  seedY,
  seedRot,
  isDisrupted,
  isSpecialWord,
  activePalette,
  onDisrupt
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const accentColor = activePalette?.accent || 'var(--color-accent, #E9D5E6)';
  const goldColor = activePalette?.gold || 'var(--color-gold, #C98CB5)';

  return (
    <motion.span
      initial={{
        y: seedY,
        rotate: seedRot,
        opacity: 0.6
      }}
      animate={
        isDisrupted
          ? {
              y: [0, (Math.random() - 0.5) * 40, 0],
              rotate: [0, (Math.random() - 0.5) * 14, 0],
              scale: [1, 1.1, 1],
              color: goldColor,
              transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
            }
          : isHovered
          ? {
              y: -8,
              rotate: 0,
              scale: 1.06,
              color: accentColor,
              transition: { duration: 0.35 }
            }
          : {
              y: 0,
              rotate: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1]
              }
            }
      }
      onClick={onDisrupt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block transition-colors duration-200 text-[clamp(30px,4.4vw,70px)] font-normal select-none cursor-pointer tracking-normal will-change-transform ${
        isSpecialWord
          ? 'text-[var(--color-accent,#E9D5E6)] underline decoration-[var(--color-gold,#C98CB5)]/70 underline-offset-8 drop-shadow-[0_0_24px_rgba(233,213,230,0.35)]'
          : 'text-[var(--color-text-muted,#D2BDCF)] hover:text-[var(--color-accent,#E9D5E6)]'
      }`}
    >
      {char}
    </motion.span>
  );
};
