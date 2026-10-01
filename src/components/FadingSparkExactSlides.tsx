import React from 'react';
import conceptNoteImage from '../assets/images/concept note.png';
import exactThemeBoardPhotoImage from '../assets/images/exact_theme_board_photo_1790705956929.jpg';

/* =========================================================================
   PAGE 1: EXACT CONCEPT NOTE SLIDE
   ========================================================================= */
export const ExactPage1ConceptNote: React.FC = () => (
  <div className="w-full aspect-[16/9] relative overflow-hidden select-none">
    <img src={conceptNoteImage} alt="Concept note" className="block h-full w-full object-contain" />
  </div>
);

/* =========================================================================
   PAGE 2: EXACT THEME BOARD SLIDE
   ========================================================================= */
export const ExactPage2ThemeBoard: React.FC = () => {
  return (
    <div className="w-full aspect-[16/9] relative overflow-hidden select-none flex items-center justify-center">
      <img
        src={exactThemeBoardPhotoImage}
        alt="The Fading Spark - Exact Theme Board Photo"
        className="w-full h-full object-cover select-none"
      />
    </div>
  );
};


/* =========================================================================
   PAGE 3: EXACT ILLUSTRATION SLIDE (5 FIGURES WITHOUT HANDWRITING)
   ========================================================================= */
export const ExactPage3Illustration: React.FC = () => {
  return (
    <div className="w-full aspect-[16/9] relative overflow-hidden select-none p-4 sm:p-8 flex items-center justify-center">
      {/* 5 Fashion Figures Line-up Clean Vector Stage */}
      <div className="relative z-10 w-full h-full max-w-[950px] mx-auto flex items-end justify-between px-2 sm:px-6 pb-2">
        <FashionFigureOutfit1 />
        <FashionFigureOutfit2 />
        <FashionFigureOutfit3 />
        <FashionFigureOutfit4 />
        <FashionFigureOutfit5 />
      </div>
    </div>
  );
};


/* =========================================================================
   PAGE 4: EXACT ILLUSTRATION EXPLANATION SLIDE (WITH RED HANDWRITING & ARROWS)
   ========================================================================= */
export const ExactPage4IllustrationExplanation: React.FC = () => {
  return (
    <div className="w-full aspect-[16/9] relative overflow-hidden select-none p-4 sm:p-8 flex items-center justify-center">
      {/* Figures Container */}
      <div className="relative z-10 w-full h-full max-w-[950px] mx-auto flex items-end justify-between px-2 sm:px-6 pb-2">
        {/* Figure 1 with Red Handwritten Notes */}
        <div className="relative h-full flex flex-col items-center justify-between flex-1">
          {/* Red Handwritten Annotation Top */}
          <div className="text-left font-['Caveat','Nanum_Pen_Script','Architects_Daughter',cursive] text-[#8C1322] font-semibold text-[0.625rem] sm:text-[0.8125rem] md:text-[0.9375rem] lg:text-[1.0625rem] leading-tight pt-1 sm:pt-2 w-full pl-1">
            <p className="font-bold text-xs sm:text-base md:text-lg">1st meeting</p>
            <p>fresh, crisp, perfect.</p>
            <p>enthusiasm walks in,</p>
            <p>questions, curiosity -</p>
            <p>'tell me more...'</p>
            <p>yet professional: the</p>
            <p>collar & cuffs show it</p>
          </div>

          {/* SVG Red Drawn Loops & Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 200 450">
            {/* Arrow from notes down to collar */}
            <path d="M 30,120 Q 15,200 65,220" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="85" cy="225" r="16" fill="none" stroke="#9E182B" strokeWidth="2.5" />
            {/* Circle around cuffs */}
            <circle cx="48" cy="340" r="14" fill="none" stroke="#9E182B" strokeWidth="2.5" />
            <circle cx="122" cy="340" r="14" fill="none" stroke="#9E182B" strokeWidth="2.5" />
          </svg>

          <FashionFigureOutfit1 />
        </div>

        {/* Figure 2 with Red Handwritten Notes */}
        <div className="relative h-full flex flex-col items-center justify-between flex-1">
          <div className="text-left font-['Caveat','Nanum_Pen_Script','Architects_Daughter',cursive] text-[#8C1322] font-semibold text-[0.625rem] sm:text-[0.8125rem] md:text-[0.9375rem] lg:text-[1.0625rem] leading-tight pt-1 sm:pt-2 w-full pl-1">
            <p className="font-bold text-xs sm:text-base md:text-lg">2nd meeting</p>
            <p>still formal - the pants</p>
            <p>hold the line, but the</p>
            <p>red top whispers</p>
            <p>a little flirting...</p>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 200 450">
            <path d="M 40,110 Q 75,170 85,215" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 80,210 L 85,218 L 92,212" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          <FashionFigureOutfit2 />
        </div>

        {/* Figure 3 with Red Handwritten Notes */}
        <div className="relative h-full flex flex-col items-center justify-between flex-1">
          <div className="text-left font-['Caveat','Nanum_Pen_Script','Architects_Daughter',cursive] text-[#8C1322] font-semibold text-[0.625rem] sm:text-[0.8125rem] md:text-[0.9375rem] lg:text-[1.0625rem] leading-tight pt-1 sm:pt-2 w-full pl-1">
            <p className="font-bold text-xs sm:text-base md:text-lg">3rd meeting</p>
            <p>red puffed bows -</p>
            <p>softness & a bubbly,</p>
            <p>playful nature</p>
            <p>coming up</p>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 200 450">
            <path d="M 30,100 Q 10,180 50,225" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="58" cy="235" r="18" fill="none" stroke="#9E182B" strokeWidth="2.5" />
            <circle cx="126" cy="235" r="18" fill="none" stroke="#9E182B" strokeWidth="2.5" />
          </svg>

          <FashionFigureOutfit3 />
        </div>

        {/* Figure 4 with Red Handwritten Notes */}
        <div className="relative h-full flex flex-col items-center justify-between flex-1">
          <div className="text-left font-['Caveat','Nanum_Pen_Script','Architects_Daughter',cursive] text-[#8C1322] font-semibold text-[0.625rem] sm:text-[0.8125rem] md:text-[0.9375rem] lg:text-[1.0625rem] leading-tight pt-1 sm:pt-2 w-full pl-1">
            <p className="font-bold text-xs sm:text-base md:text-lg">4th meeting</p>
            <p>red gown - modest yet</p>
            <p>curvy & bold. no formality,</p>
            <p>everything confessed,</p>
            <p>nothing left unsaid</p>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 200 450">
            <path d="M 35,100 Q 15,190 70,210" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 62,206 L 70,210 L 68,218" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          <FashionFigureOutfit4 />
        </div>

        {/* Figure 5 with Red Handwritten Notes */}
        <div className="relative h-full flex flex-col items-center justify-between flex-1">
          <div className="text-left font-['Caveat','Nanum_Pen_Script','Architects_Daughter',cursive] text-[#8C1322] font-semibold text-[0.625rem] sm:text-[0.8125rem] md:text-[0.9375rem] lg:text-[1.0625rem] leading-tight pt-1 sm:pt-2 w-full pl-1">
            <p className="font-bold text-xs sm:text-base md:text-lg">5th meeting</p>
            <p>comfort. boredom creeps</p>
            <p>in - no prep, full chill,</p>
            <p>nothing new to know,</p>
            <p>nothing left to ask</p>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 200 450">
            <path d="M 30,100 Q 10,180 50,230" fill="none" stroke="#9E182B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="52" cy="245" r="16" fill="none" stroke="#9E182B" strokeWidth="2.5" />
            <circle cx="128" cy="245" r="16" fill="none" stroke="#9E182B" strokeWidth="2.5" />
          </svg>

          <FashionFigureOutfit5 />
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   INDIVIDUAL FASHION FIGURE SVG CROQUIS (EXACT MATCHING USER PDF PAGES 3 & 4)
   ========================================================================= */

// Outfit 1: Blush Pinafore Dress + White Poplin Shirt with Puffed Cuffs
const FashionFigureOutfit1: React.FC = () => {
  return (
    <div className="w-[18%] max-w-[150px] h-[78%] flex flex-col items-center justify-end relative">
      <svg viewBox="0 0 100 320" className="w-full h-full">
        {/* Head & Hair */}
        <path d="M42,25 C42,15 58,15 58,25 C58,35 42,35 42,25 Z" fill="#F8DFD4" />
        {/* Eyes & delicate face */}
        <circle cx="47" cy="24" r="1" fill="#4A342D" />
        <circle cx="53" cy="24" r="1" fill="#4A342D" />
        <path d="M48,29 Q50,31 52,29" fill="none" stroke="#C26A76" strokeWidth="0.8" />
        {/* Long dark brown center-parted hair */}
        <path d="M38,20 C38,10 62,10 62,20 C64,45 60,65 58,72 L55,72 C55,45 54,32 50,22 C46,32 45,45 45,72 L42,72 C40,65 36,45 38,20 Z" fill="#2B1E1A" />

        {/* Neck */}
        <rect x="48" y="32" width="4" height="8" fill="#F8DFD4" />

        {/* White Collared Shirt */}
        <path d="M42,40 L50,46 L58,40 L62,55 L38,55 Z" fill="#FFFFFF" stroke="#E2E2E2" strokeWidth="0.5" />
        {/* Collar wings */}
        <path d="M48,40 L44,45 L50,45 Z" fill="#F5F5F5" stroke="#D1D1D1" strokeWidth="0.5" />
        <path d="M52,40 L56,45 L50,45 Z" fill="#F5F5F5" stroke="#D1D1D1" strokeWidth="0.5" />

        {/* White Puffed Sleeves with Cuffs */}
        <path d="M38,44 Q30,65 35,90 L39,90 Q34,68 41,52 Z" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="0.5" />
        <path d="M62,44 Q70,65 65,90 L61,90 Q66,68 59,52 Z" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="0.5" />
        {/* Cuffs */}
        <rect x="33" y="88" width="6" height="4" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />
        <rect x="61" y="88" width="6" height="4" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />

        {/* Hands */}
        <circle cx="36" cy="95" r="2.5" fill="#F8DFD4" />
        <circle cx="64" cy="95" r="2.5" fill="#F8DFD4" />

        {/* Blush Pink Suspender Pinafore Dress */}
        <path d="M43,45 L45,65 L37,180 L63,180 L55,65 L57,45 Z" fill="#C98B99" />
        {/* Suspenders & Placket with 4 White Buttons */}
        <path d="M44,45 L46,80 L54,80 L56,45 Z" fill="#BC7988" />
        <circle cx="48" cy="90" r="1.5" fill="#FFFFFF" />
        <circle cx="52" cy="90" r="1.5" fill="#FFFFFF" />
        <circle cx="48" cy="105" r="1.5" fill="#FFFFFF" />
        <circle cx="52" cy="105" r="1.5" fill="#FFFFFF" />
        <circle cx="48" cy="120" r="1.5" fill="#FFFFFF" />
        <circle cx="52" cy="120" r="1.5" fill="#FFFFFF" />

        {/* Slender Legs */}
        <rect x="44" y="180" width="4.5" height="110" fill="#F8DFD4" rx="2" />
        <rect x="51.5" y="180" width="4.5" height="110" fill="#F8DFD4" rx="2" />

        {/* Bare Feet with Delicate White Ribbon Ankle Tie */}
        <path d="M42,288 L49,288 L46,295 Z" fill="#F8DFD4" />
        <path d="M51,288 L58,288 L55,295 Z" fill="#F8DFD4" />
        <rect x="43" y="286" width="6" height="1.5" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />
        <rect x="51" y="286" width="6" height="1.5" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

// Outfit 2: Crimson Off-Shoulder Top + Black Wide-Leg Trousers
const FashionFigureOutfit2: React.FC = () => {
  return (
    <div className="w-[18%] max-w-[150px] h-[78%] flex flex-col items-center justify-end relative">
      <svg viewBox="0 0 100 320" className="w-full h-full">
        {/* Head & Hair */}
        <path d="M42,25 C42,15 58,15 58,25 C58,35 42,35 42,25 Z" fill="#F8DFD4" />
        <circle cx="47" cy="24" r="1" fill="#4A342D" />
        <circle cx="53" cy="24" r="1" fill="#4A342D" />
        <path d="M48,29 Q50,31 52,29" fill="none" stroke="#C26A76" strokeWidth="0.8" />
        <path d="M38,20 C38,10 62,10 62,20 C64,45 60,65 58,72 L55,72 C55,45 54,32 50,22 C46,32 45,45 45,72 L42,72 C40,65 36,45 38,20 Z" fill="#2B1E1A" />
        <rect x="48" y="32" width="4" height="8" fill="#F8DFD4" />

        {/* Off-the-Shoulder Crimson Velvet Top */}
        <path d="M34,48 Q50,42 66,48 L65,95 L35,95 Z" fill="#580E1C" />
        {/* Sheer Collarbone Inset & Curved Velvet Neckline */}
        <path d="M38,48 Q50,56 62,48 L64,65 Q50,72 36,65 Z" fill="#841A2E" />

        {/* Tight Long Sleeves */}
        <path d="M34,48 L28,95 L33,95 L37,55 Z" fill="#580E1C" />
        <path d="M66,48 L72,95 L67,95 L63,55 Z" fill="#580E1C" />
        <circle cx="30" cy="98" r="2.5" fill="#F8DFD4" />
        <circle cx="70" cy="98" r="2.5" fill="#F8DFD4" />

        {/* Black Wide-Leg Palazzo Trousers */}
        <path d="M35,92 L65,92 L69,285 L52,285 L50,140 L48,285 L31,285 Z" fill="#13171F" />
        {/* Deep Crease line */}
        <line x1="40" y1="100" x2="40" y2="280" stroke="#252A36" strokeWidth="0.7" />
        <line x1="60" y1="100" x2="60" y2="280" stroke="#252A36" strokeWidth="0.7" />

        {/* Bare Feet */}
        <path d="M37,284 L43,284 L41,291 Z" fill="#F8DFD4" />
        <path d="M57,284 L63,284 L61,291 Z" fill="#F8DFD4" />
      </svg>
    </div>
  );
};

// Outfit 3: Red Strapless Dress with White Crosses + White Organza Puff Bows
const FashionFigureOutfit3: React.FC = () => {
  return (
    <div className="w-[18%] max-w-[150px] h-[78%] flex flex-col items-center justify-end relative">
      <svg viewBox="0 0 100 320" className="w-full h-full">
        {/* Head & Hair */}
        <path d="M42,25 C42,15 58,15 58,25 C58,35 42,35 42,25 Z" fill="#F8DFD4" />
        <circle cx="47" cy="24" r="1" fill="#4A342D" />
        <circle cx="53" cy="24" r="1" fill="#4A342D" />
        <path d="M48,29 Q50,31 52,29" fill="none" stroke="#C26A76" strokeWidth="0.8" />
        <path d="M38,20 C38,10 62,10 62,20 C64,45 60,65 58,72 L55,72 C55,45 54,32 50,22 C46,32 45,45 45,72 L42,72 C40,65 36,45 38,20 Z" fill="#2B1E1A" />
        <rect x="48" y="32" width="4" height="8" fill="#F8DFD4" />

        {/* Slender Arms */}
        <path d="M40,50 L35,115 L38,115 L43,55 Z" fill="#F8DFD4" />
        <path d="M60,50 L65,115 L62,115 L57,55 Z" fill="#F8DFD4" />
        <circle cx="36" cy="118" r="2.5" fill="#F8DFD4" />
        <circle cx="64" cy="118" r="2.5" fill="#F8DFD4" />

        {/* White Translucent Organza Puff Bow Sleeves */}
        <path d="M30,52 Q22,72 38,82 Q42,65 30,52 Z" fill="#FFFFFF" fillOpacity="0.85" stroke="#E0E0E0" strokeWidth="0.5" />
        <path d="M70,52 Q78,72 62,82 Q58,65 70,52 Z" fill="#FFFFFF" fillOpacity="0.85" stroke="#E0E0E0" strokeWidth="0.5" />

        {/* Strapless Red Sheath Midi Dress */}
        <path d="M42,50 L58,50 L61,85 L60,205 L40,205 L39,85 Z" fill="#A81C35" />

        {/* Dotted White Sparkle / Cross Embroidery Motifs */}
        {[
          [50, 60], [45, 75], [55, 75], [50, 90],
          [44, 105], [56, 105], [50, 120], [45, 135],
          [55, 135], [50, 150], [44, 165], [56, 165],
          [50, 180], [45, 195], [55, 195]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <line x1={cx - 1.2} y1={cy} x2={cx + 1.2} y2={cy} stroke="#FFFFFF" strokeWidth="0.8" />
            <line x1={cx} y1={cy - 1.2} x2={cx} y2={cy + 1.2} stroke="#FFFFFF" strokeWidth="0.8" />
          </g>
        ))}

        {/* Slender Legs */}
        <rect x="44" y="205" width="4.5" height="85" fill="#F8DFD4" rx="2" />
        <rect x="51.5" y="205" width="4.5" height="85" fill="#F8DFD4" rx="2" />
        <path d="M42,288 L49,288 L46,295 Z" fill="#F8DFD4" />
        <path d="M51,288 L58,288 L55,295 Z" fill="#F8DFD4" />
      </svg>
    </div>
  );
};

// Outfit 4: Dramatic Sculptural Crimson Floor-Length Gown
const FashionFigureOutfit4: React.FC = () => {
  return (
    <div className="w-[18%] max-w-[150px] h-[78%] flex flex-col items-center justify-end relative">
      <svg viewBox="0 0 100 320" className="w-full h-full">
        {/* Head & Hair */}
        <path d="M42,25 C42,15 58,15 58,25 C58,35 42,35 42,25 Z" fill="#F8DFD4" />
        <circle cx="47" cy="24" r="1" fill="#4A342D" />
        <circle cx="53" cy="24" r="1" fill="#4A342D" />
        <path d="M48,29 Q50,31 52,29" fill="none" stroke="#C26A76" strokeWidth="0.8" />
        <path d="M38,20 C38,10 62,10 62,20 C64,45 60,65 58,72 L55,72 C55,45 54,32 50,22 C46,32 45,45 45,72 L42,72 C40,65 36,45 38,20 Z" fill="#2B1E1A" />

        {/* High Halter Neck Collar */}
        <path d="M46,35 L54,35 L56,44 L44,44 Z" fill="#580C1B" />

        {/* Bare Shoulders & Arms */}
        <path d="M44,44 L35,110 L39,110 L46,50 Z" fill="#F8DFD4" />
        <path d="M56,44 L65,110 L61,110 L54,50 Z" fill="#F8DFD4" />
        <circle cx="36" cy="112" r="2.5" fill="#F8DFD4" />
        <circle cx="64" cy="112" r="2.5" fill="#F8DFD4" />

        {/* Floor-Length Crimson Sculptural Gown with Cascading Swirl Folds */}
        <path d="M45,44 Q50,47 55,44 L58,85 Q62,130 57,175 Q68,230 73,290 L27,290 Q32,230 43,175 Q38,130 42,85 Z" fill="#6B0F22" />

        {/* Organic Drapery Swirl Highlights */}
        <path d="M48,50 Q43,80 50,110 Q58,150 48,190 Q40,240 34,290" fill="none" stroke="#480A16" strokeWidth="1.8" />
        <path d="M52,50 Q56,80 52,110 Q46,150 54,190 Q62,240 68,290" fill="none" stroke="#8C1830" strokeWidth="1.5" />
        <path d="M50,90 Q45,120 48,160 Q52,210 44,260" fill="none" stroke="#480A16" strokeWidth="1.4" />
      </svg>
    </div>
  );
};

// Outfit 5: Oversized Sage-Green Tee + Loose Black Lounge Pants
const FashionFigureOutfit5: React.FC = () => {
  return (
    <div className="w-[18%] max-w-[150px] h-[78%] flex flex-col items-center justify-end relative">
      <svg viewBox="0 0 100 320" className="w-full h-full">
        {/* Head & Hair */}
        <path d="M42,25 C42,15 58,15 58,25 C58,35 42,35 42,25 Z" fill="#F8DFD4" />
        <circle cx="47" cy="24" r="1" fill="#4A342D" />
        <circle cx="53" cy="24" r="1" fill="#4A342D" />
        <path d="M48,29 Q50,31 52,29" fill="none" stroke="#C26A76" strokeWidth="0.8" />
        <path d="M38,20 C38,10 62,10 62,20 C64,45 60,65 58,72 L55,72 C55,45 54,32 50,22 C46,32 45,45 45,72 L42,72 C40,65 36,45 38,20 Z" fill="#2B1E1A" />
        <rect x="48" y="32" width="4" height="8" fill="#F8DFD4" />

        {/* Relaxed Oversized Mint-Sage Green Drape T-Shirt */}
        <path d="M42,40 Q50,44 58,40 L68,52 L62,88 L58,80 L59,120 L41,120 L42,80 L38,88 L32,52 Z" fill="#CCD8CC" stroke="#BACAB9" strokeWidth="0.5" />
        {/* Neckline */}
        <path d="M45,40 Q50,46 55,40" fill="none" stroke="#A8BCA7" strokeWidth="1" />

        {/* Forearms & Hands */}
        <path d="M36,80 L33,115 L36,115 L39,82 Z" fill="#F8DFD4" />
        <path d="M64,80 L67,115 L64,115 L61,82 Z" fill="#F8DFD4" />
        <circle cx="34" cy="118" r="2.5" fill="#F8DFD4" />
        <circle cx="66" cy="118" r="2.5" fill="#F8DFD4" />

        {/* Loose Flowing Black Lounge Pants */}
        <path d="M41,118 L59,118 L64,285 L51,285 L50,150 L49,285 L36,285 Z" fill="#15171B" />
        <path d="M36,285 Q39,260 38,220" fill="none" stroke="#2D323A" strokeWidth="0.8" />
        <path d="M64,285 Q61,260 62,220" fill="none" stroke="#2D323A" strokeWidth="0.8" />

        {/* Bare Feet */}
        <path d="M40,284 L46,284 L44,291 Z" fill="#F8DFD4" />
        <path d="M54,284 L60,284 L58,291 Z" fill="#F8DFD4" />
      </svg>
    </div>
  );
};

