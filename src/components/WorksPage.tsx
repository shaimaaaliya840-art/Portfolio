import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Flame, Gem, Moon, X, type LucideIcon } from 'lucide-react';
import fadingSparkPg1 from '../assets/images/fading-spark/pg 1.png';
import fadingSparkPg2 from '../assets/images/fading-spark/pg 2.png';
import fadingSparkPg3_1 from '../assets/images/fading-spark/pg 3.1.png';
import fadingSparkPg3_2 from '../assets/images/fading-spark/pg 3.2.png';
import fadingSparkPg3_3 from '../assets/images/fading-spark/pg 3.3.png';
import fadingSparkPg3_4 from '../assets/images/fading-spark/pg 3.4.png';
import fadingSparkPg3_5 from '../assets/images/fading-spark/pg 3.5.png';
import fadingSparkPg5 from '../assets/images/fading-spark/pg 5.png';
import fadingSparkBackground from '../assets/images/fading_spark_pink_fabric_background.jpg';
import abhisarikaBackground from '../assets/images/abhisarika_background.png';
import imgCenter from '../assets/images/abhisarika/img_center.jpg';
import imgTop from '../assets/images/abhisarika/img_top.jpg';
import imgTopRight from '../assets/images/abhisarika/img_top_right.jpg';
import imgBottomLeft from '../assets/images/abhisarika/img_bottom_left.jpg';
import imgBottomRight from '../assets/images/abhisarika/img_bottom_right.jpg';
import garment1_1 from '../assets/images/abhisarika/garment1_1.jpg';
import garment1_2 from '../assets/images/abhisarika/garment1_2.jpg';
import garment1_3 from '../assets/images/abhisarika/garment1_3.jpg';
import garment1_4 from '../assets/images/abhisarika/garment1_4.jpg';
import garment2_1 from '../assets/images/abhisarika/garment2_1.jpg';
import garment2_2 from '../assets/images/abhisarika/garment2_2.jpg';
import garment2_3 from '../assets/images/abhisarika/garment2_3.png';
import garment2_4 from '../assets/images/abhisarika/garment2_4.jpg';
import garment3_1 from '../assets/images/abhisarika/garment3_1.jpg';
import garment3_2 from '../assets/images/abhisarika/garment3_2.png';
import garment3_3 from '../assets/images/abhisarika/garment3_3.jpg';
import garment4_1 from '../assets/images/abhisarika/garment4_1.jpg';
import garment4_2 from '../assets/images/abhisarika/garment4_2.png';
import garment4_3 from '../assets/images/abhisarika/garment4_3.png';
import garment4_4 from '../assets/images/abhisarika/garment4_4.jpg';
import lotusImage from '../assets/images/anatomy-of-ornament/lotus.png';
import dabu1 from '../assets/images/dabu/dabu1.png';
import dabu2 from '../assets/images/dabu/dabu2.jpg';
import dabu3 from '../assets/images/dabu/dabu3.png';
import dabu4 from '../assets/images/dabu/dabu4.jpg';

interface ProjectPage {
  type?: 'single' | 'grid' | 'text' | 'collage';
  src?: string;
  alt?: string;
  images?: { src: string; alt: string }[];
  title?: string;
  paragraphs?: string[];
  imageAspect?: string;
  imageFit?: 'cover' | 'contain';
  gridCols?: number;
  layout?: 'default' | 'bento-center-stack';
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  /** Backdrop of the project viewer */
  background?: string;
  backgroundColor: string;
  category?: 'work' | 'workshop';
  /** Slides/pages shown in the viewer — add images here as they become available */
  pages: ProjectPage[];
}

const PROJECTS: Project[] = [
  {
    id: 'fading-spark',
    title: 'Fading Spark',
    tagline: 'Collection',
    icon: Flame,
    backgroundColor: 'radial-gradient(circle at 50% 50%, #f0d5df 0%, #c4a1b0 60%, #563947 100%)',
    pages: [
      { type: 'single', src: fadingSparkPg1, alt: 'Fading Spark Page 1' },
      { type: 'single', src: fadingSparkPg2, alt: 'Fading Spark Page 2' },
      {
        type: 'grid',
        images: [
          { src: fadingSparkPg3_1, alt: 'Fading Spark Page 3 Image 1' },
          { src: fadingSparkPg3_2, alt: 'Fading Spark Page 3 Image 2' },
          { src: fadingSparkPg3_5, alt: 'Fading Spark Page 3 Image 5' },
          { src: fadingSparkPg3_4, alt: 'Fading Spark Page 3 Image 4' },
          { src: fadingSparkPg3_3, alt: 'Fading Spark Page 3 Image 3' }
        ]
      },
      // Page 4 is missing, will be added later
      { type: 'single', src: fadingSparkPg5, alt: 'Fading Spark Page 5' }
    ]
  },
  {
    id: 'abhisarika',
    title: 'Abhisarika',
    tagline: 'Neelgar Atelier',
    icon: Moon,
    background: abhisarikaBackground,
    backgroundColor: '#3E5A26',
    pages: [
      {
        type: 'text',
        title: 'Abhisarika',
        paragraphs: [
          "Abhisarika is the nayika who moves. Not the one who waits, but the one who dresses for the dark and walks into it. Her love is not passive longing — it is a journey she chooses, alone, through night, storm, and shadow, toward what she wants.",
          "This collection borrows her courage. Each look marks a stage of her passage — dusk, moonlight, darkness, storm — built in velvet, metallic silk, and sheer organza that catch light the way she moves through it: quietly, then boldly. Crescent motifs recall the moon that guides her; black and wine recall the night she isn't afraid of."
        ]
      },
      {
        type: 'collage',
        images: [
          { src: imgCenter, alt: 'Center' },
          { src: imgTop, alt: 'Top' },
          { src: imgTopRight, alt: 'Top Right' },
          { src: imgBottomLeft, alt: 'Bottom Left' },
          { src: imgBottomRight, alt: 'Bottom Right' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-1',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment1_1, alt: 'Garment 1 view 1' },
          { src: garment1_2, alt: 'Garment 1 view 2' },
          { src: garment1_3, alt: 'Garment 1 view 3' },
          { src: garment1_4, alt: 'Garment 1 view 4' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-2',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment2_1, alt: 'Garment 2 view 1' },
          { src: garment2_2, alt: 'Garment 2 view 2' },
          { src: garment2_3, alt: 'Garment 2 view 3' },
          { src: garment2_4, alt: 'Garment 2 view 4' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-3',
        imageFit: 'cover',
        images: [
          { src: garment3_1, alt: 'Garment 3 view 1' },
          { src: garment3_2, alt: 'Garment 3 view 2' },
          { src: garment3_3, alt: 'Garment 3 view 3' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-4',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment4_1, alt: 'Garment 4 view 1' },
          { src: garment4_2, alt: 'Garment 4 view 2' },
          { src: garment4_3, alt: 'Garment 4 view 3' },
          { src: garment4_4, alt: 'Garment 4 view 4' }
        ],
        paragraphs: [
          "(The embellished bag carried by the model is also handcrafted by me)"
        ]
      }
    ]
  },
  {
    id: 'anatomy-of-ornament',
    title: 'Anatomy of Ornament',
    tagline: 'Project',
    icon: Gem,
    background: lotusImage,
    backgroundColor: '#000000',
    pages: []
  },
  {
    id: 'dabu-printing',
    title: 'Dabu Printing',
    tagline: 'Workshop',
    category: 'workshop',
    icon: Flame, // fallback
    backgroundColor: '#FAF6EE',
    pages: [
      {
        type: 'text',
        paragraphs: [
          "AAVARAN in Udaipur is known for reviving and sustaining traditional Dabu mud-resist hand block printing from Rajasthan. Founded by Alka Sharma in 2008, Aavaran works closely with artisan communities, particularly from the Akola region near Chittorgarh.",
          "The process uses hand-carved wooden blocks to apply a resist paste made primarily from mud, lime (calcium hydroxide) and natural gum onto fabric. The fabric is then dyed, often with natural indigo, and the resist is washed away to reveal the printed motifs. Multiple rounds of Dabu printing and dyeing can be used to create layered patterns and colours.",
          "Aavaran combines this traditional craft with contemporary motifs and modern garments, while continuing to use natural dyes and focusing on artisan livelihoods and sustainable production. Its signature aesthetic is strongly associated with indigo, earthy tones and intricate hand-blocked motifs.",
          "PROCESS:",
          "Wooden block → Dabu mud resist → Natural dye/indigo → Drying & oxidation → Washing → Final hand-printed textile."
        ]
      },
      {
        type: 'grid',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: dabu1, alt: 'Hand printing on cloth' },
          { src: dabu2, alt: 'Printing dots on fabric' },
          { src: dabu3, alt: 'Wooden printing block' },
          { src: dabu4, alt: 'Indigo dyeing vat' }
        ]
      }
    ]
  }
];

// Workshops from the "all portfolio work" deck (its WORKSHOP slide)
const WORKSHOPS = [
  { name: 'Dabu Printing', projectId: 'dabu-printing' },
  { name: 'Coconut Shell Craft', note: 'Egai' },
  { name: 'Paper Weaving', note: 'Wellpaper' },
  { name: 'Eco Printing' },
  { name: 'Indigo Site Visit' },
  { name: 'Leather Craft' },
  { name: 'Cyanotype Printing' }
];

/** Full-screen viewer for one project's pages. */
const ProjectViewer: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Keep the page behind from scrolling while the viewer is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const isLight = project.id === 'fading-spark';

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
      style={{ background: project.backgroundColor }}
    >
      {/* Volumetric pinkish gradient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-[#540D21]/15 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {project.background && project.id === 'anatomy-of-ornament' ? (
        <>
          <img
            src={project.background}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-16 w-[300px] sm:w-[450px] md:w-[600px] max-w-[70vw] object-contain opacity-90"
          />
          <img
            src={project.background}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 w-[300px] sm:w-[450px] md:w-[600px] max-w-[70vw] object-contain opacity-90 rotate-180"
          />
        </>
      ) : project.background && project.id === 'abhisarika' ? (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${project.background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
      ) : project.background ? (
        <img
          src={project.background}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : null}

      <header className="relative z-20 flex shrink-0 items-center gap-4 px-4 py-3 sm:px-8 sm:py-4">
        <button
          type="button"
          onClick={onClose}
          data-cursor="pointer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/50 bg-black/35 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-black/55 cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Works</span>
        </button>
        {project.id !== 'fading-spark' && project.id !== 'abhisarika' && (
          <h2
            className={`font-avonia font-normal text-3xl sm:text-5xl leading-tight ${
              isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
            }`}
          >
            {project.title}
          </h2>
        )}
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto px-4 pb-10 sm:px-8">
        {project.pages.length > 0 ? (
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-6">
            {project.pages.map((page, i) => {
              if (page.type === 'grid') {
                return (
                  <div key={`grid-${i}`} className="flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className={`font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 ${
                        isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
                      }`}>
                        {page.title}
                      </h2>
                    )}
                    {page.layout === 'bento-center-stack' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-2 sm:gap-4 w-full h-[80vh] sm:h-[85vh]">
                        {page.images?.map((img, idx) => {
                          let placementClass = '';
                          if (idx === 0) placementClass = 'sm:col-start-1 sm:row-start-1 sm:row-span-2';
                          else if (idx === 1) placementClass = 'sm:col-start-2 sm:row-start-1 sm:row-span-1';
                          else if (idx === 2) placementClass = 'sm:col-start-2 sm:row-start-2 sm:row-span-1';
                          else if (idx === 3) placementClass = 'sm:col-start-3 sm:row-start-1 sm:row-span-2';
                          
                          return (
                            <div key={img.src} className={`relative w-full h-full overflow-hidden rounded-sm ${placementClass} ${isLight ? '' : 'shadow-lg'}`}>
                              <img
                                src={img.src}
                                alt={img.alt}
                                onClick={() => setSelectedImage(img.src)}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="block w-full h-full object-cover cursor-pointer transition-transform hover:scale-[1.03]"
                                style={isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {}}
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={`w-full ${page.gridCols === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6' : 'flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 h-auto sm:h-[85vh]'}`}>
                        {page.images?.map((img, idx) => (
                          <div key={img.src} className={`relative overflow-hidden w-full ${page.gridCols === 2 ? '' : 'sm:flex-1 h-full'}`}>
                            <img
                              src={img.src}
                              alt={img.alt}
                              onClick={() => setSelectedImage(img.src)}
                              loading={i === 0 ? 'eager' : 'lazy'}
                              decoding="async"
                              className={`block w-full h-full cursor-pointer transition-transform hover:scale-[1.03] rounded-sm ${page.imageAspect || ''} ${page.imageFit ? `object-${page.imageFit}` : 'object-contain'} ${isLight ? '' : 'shadow-lg'}`}
                              style={isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {}}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 mx-auto max-w-2xl text-center">
                        {page.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className={`font-serif italic text-lg sm:text-xl tracking-wide leading-relaxed ${isLight ? 'text-[#540D21]/80' : 'text-white/80'} ${pIdx > 0 ? 'mt-4' : ''}`}>
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'text') {
                return (
                  <div key={`text-${i}`} className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto px-6 py-12 gap-10">
                    {page.title && (
                      <h1 className={`font-avonia text-7xl sm:text-8xl lg:text-9xl uppercase tracking-widest drop-shadow-lg leading-relaxed py-4 ${isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'}`}>
                        {page.title}
                      </h1>
                    )}
                    <div className={`flex flex-col gap-6 text-base sm:text-lg md:text-xl md:text-left font-serif leading-relaxed drop-shadow-sm ${isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'}`}>
                      {page.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                );
              }
              if (page.type === 'collage' && page.images) {
                return (
                  <div key={`collage-${i}`} className="relative w-full max-w-5xl mx-auto min-h-[140vh] sm:min-h-[160vh] flex items-center justify-center py-20 mt-12 mb-24 overflow-visible">
                    
                    {/* Top Image (index 1) */}
                    <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[35%] z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[1].src} alt={page.images[1].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Left Image (index 2) - Moved from Top Right */}
                    <div className="absolute top-1/2 left-[2%] sm:left-[5%] -translate-y-1/2 w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[2].src} alt={page.images[2].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Bottom Image (index 3) - Moved from Bottom Left */}
                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[35%] z-30 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[3].src} alt={page.images[3].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Right Image (index 4) - Stays on Right */}
                    <div className="absolute top-1/2 right-[2%] sm:right-[5%] -translate-y-1/2 w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[4].src} alt={page.images[4].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Center Oval */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] sm:w-[38%] z-50 drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img 
                        src={page.images[0].src} 
                        alt={page.images[0].alt} 
                        className="w-full h-auto object-cover" 
                        style={{ borderRadius: '50%', border: '10px solid rgba(133,143,186,0.3)' }}
                      />
                    </div>
                  </div>
                );
              }
              return (
                <img
                  key={page.src || i}
                  src={page.src}
                  alt={page.alt}
                  width={2000}
                  height={1125}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`block h-auto w-full object-contain ${isLight ? '' : 'drop-shadow-2xl'}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="rounded-sm border border-white/30 bg-black/40 px-6 py-4 text-center text-sm font-mono uppercase tracking-[0.2em] text-[#FAF6EE] backdrop-blur-sm">
              Project pages coming soon
            </p>
          </div>
        )}

        {selectedImage && createPortal(
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-full max-w-full object-contain drop-shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>,
          document.body
        )}
      </main>
    </div>,
    document.body
  );
};

export const WorksPage: React.FC = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section
      id="works"
      className="relative text-[#241217] py-20 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page meta strip (same treatment as the contact page) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-8 text-xs font-mono tracking-[0.25em] text-[#540D21]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#540D21]" />
            <span className="font-bold text-[#241217]">PAGE 04 · WORKS // PROJECTS &amp; WORKSHOPS</span>
          </div>
          <span className="text-[#851737]">SHATMA AALIYA</span>
        </div>

        <h2 className="font-avonia font-normal text-6xl sm:text-7xl md:text-8xl leading-tight pt-6 sm:pt-8 mb-12 text-[#241217]">
          Works
        </h2>

        {/* Project icons — each opens that project's pages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {PROJECTS.filter(p => p.category !== 'workshop').map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setOpenProject(project)}
                data-cursor="pointer"
                className="wine-card group flex flex-col items-center gap-5 px-6 py-10 text-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Cream icon circle, like the contact page's action icons */}
                <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-10 w-10" strokeWidth={1.5} />
                </span>
                <span className="flex flex-col items-center gap-1">
                  <span className="font-avonia font-normal text-3xl sm:text-4xl leading-tight text-[#FAF6EE]">
                    {project.title}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
                    {project.tagline}
                  </span>
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FAF6EE] underline decoration-[#FAF6EE]/50 underline-offset-4">
                  View project →
                </span>
              </button>
            );
          })}
        </div>

        {/* Workshops — one wine card with detail rows, like the contact page's CALL / WHATSAPP rows */}
        <div className="wine-card p-8 sm:p-10">
          <div className="flex flex-col items-center text-center gap-2 mb-6">
            <h3 className="font-avonia font-normal text-4xl sm:text-5xl text-[#FAF6EE]">
              Workshop
            </h3>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
              Hands-on crafts · {WORKSHOPS.length}
            </span>
            <span className="mt-2 w-16 h-0.5 bg-[#FAF6EE]" />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {WORKSHOPS.map((workshop, i) => {
              const Tag = workshop.projectId ? 'button' : 'li';
              return (
                <Tag
                  key={workshop.name}
                  onClick={workshop.projectId ? () => {
                    const p = PROJECTS.find(proj => proj.id === workshop.projectId);
                    if (p) setOpenProject(p);
                  } : undefined}
                  className={`flex items-baseline gap-4 rounded bg-[#FAF6EE]/10 px-4 py-3 text-left ${workshop.projectId ? 'cursor-pointer hover:bg-[#FAF6EE]/20 transition-colors' : ''}`}
                >
                  <span className="font-mono text-sm font-bold text-[#FAF6EE]/75">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-2xl sm:text-3xl uppercase tracking-[0.04em] text-[#FAF6EE] [font-family:var(--font-readable-display)]">
                      {workshop.name}
                    </span>
                    {workshop.note && (
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FAF6EE]/75">
                        {workshop.note}
                      </span>
                    )}
                  </span>
                </Tag>
              );
            })}
          </ol>
        </div>
      </div>

      {openProject && <ProjectViewer project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
};
