import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Flame, Gem, Moon, type LucideIcon } from 'lucide-react';
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

interface ProjectPage {
  type?: 'single' | 'grid' | 'text' | 'collage';
  src?: string;
  alt?: string;
  images?: { src: string; alt: string }[];
  title?: string;
  paragraphs?: string[];
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  /** Backdrop of the project viewer */
  background?: string;
  backgroundColor: string;
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
      }
    ]
  },
  {
    id: 'anatomy-of-ornament',
    title: 'Anatomy of Ornament',
    tagline: 'Project',
    icon: Gem,
    backgroundColor: '#1A0F12',
    pages: []
  }
];

// Workshops from the "all portfolio work" deck (its WORKSHOP slide)
const WORKSHOPS = [
  { name: 'Dabu Printing' },
  { name: 'Coconut Shell Craft', note: 'Egai' },
  { name: 'Paper Weaving', note: 'Wellpaper' },
  { name: 'Eco Printing' },
  { name: 'Indigo Site Visit' },
  { name: 'Leather Craft' },
  { name: 'Cyanotype Printing' }
];

/** Full-screen viewer for one project's pages. */
const ProjectViewer: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
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

      {project.background && project.id === 'abhisarika' ? (
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
                  <div key={`grid-${i}`} className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-end gap-2 sm:gap-4 w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.images?.map((img, idx) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className={`block h-auto w-full sm:w-1/5 object-contain ${isLight ? '' : 'shadow-lg'}`}
                        style={isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {}}
                      />
                    ))}
                  </div>
                );
              }
              if (page.type === 'text') {
                return (
                  <div key={`text-${i}`} className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto px-6 py-12 gap-10">
                    {page.title && (
                      <h1 className="font-avonia text-7xl sm:text-8xl lg:text-9xl text-[#FAF6EE] uppercase tracking-widest drop-shadow-lg leading-relaxed py-4">
                        {page.title}
                      </h1>
                    )}
                    <div className="flex flex-col gap-8 text-lg sm:text-xl md:text-2xl font-serif italic font-bold text-[#FAF6EE] leading-relaxed drop-shadow-md">
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
                    
                    {/* Top Left Image */}
                    <div className="absolute top-[5%] left-0 sm:left-[5%] w-[55%] sm:w-[35%] z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[1].src} alt={page.images[1].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Top Right Image */}
                    <div className="absolute top-[15%] right-0 sm:right-[5%] w-[55%] sm:w-[35%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[2].src} alt={page.images[2].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Bottom Left Image */}
                    <div className="absolute bottom-[10%] left-0 sm:left-[5%] w-[60%] sm:w-[40%] z-30 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[3].src} alt={page.images[3].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="absolute bottom-[20%] right-0 sm:right-[2%] w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[4].src} alt={page.images[4].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Center Oval */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] sm:w-[45%] z-50 drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img 
                        src={page.images[0].src} 
                        alt={page.images[0].alt} 
                        className="w-full h-auto object-cover" 
                        style={{ borderRadius: '50%', border: '12px solid rgba(133,143,186,0.3)' }}
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
          {PROJECTS.map((project) => {
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
            {WORKSHOPS.map((workshop, i) => (
              <li
                key={workshop.name}
                className="flex items-baseline gap-4 rounded bg-[#FAF6EE]/10 px-4 py-3"
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
              </li>
            ))}
          </ol>
        </div>
      </div>

      {openProject && <ProjectViewer project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
};
