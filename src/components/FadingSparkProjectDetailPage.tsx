import React from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft } from 'lucide-react';
import pinkFabricBackground from '../assets/images/fading_spark_pink_fabric_background.jpg';
import fadingSparkConceptImage from '../assets/images/fading_spark_concept.png';
// Pages of public/fading-spark.pdf, pre-rendered so the slide shows the artwork
// itself instead of the browser's PDF viewer chrome
import fadingSparkPage1 from '../assets/images/fading-spark/page-1.jpg';
import fadingSparkPage2 from '../assets/images/fading-spark/page-2.jpg';
import fadingSparkPage3 from '../assets/images/fading-spark/page-3.jpg';
import fadingSparkPage4 from '../assets/images/fading-spark/page-4.jpg';
import fadingSparkPage5 from '../assets/images/fading-spark/page-5.jpg';

const FADING_SPARK_PAGES = [
  { src: fadingSparkPage1, alt: 'Fading Spark — concept statement with hands bound in red thread' },
  { src: fadingSparkPage2, alt: 'Fading Spark — black and white mood board' },
  { src: fadingSparkPage3, alt: 'Fading Spark — five-look collection lineup' },
  { src: fadingSparkPage4, alt: 'Fading Spark — annotated lineup, first to fifth meeting' },
  { src: fadingSparkPage5, alt: 'Fading Spark — the five looks photographed on models' }
];

export const FadingSparkProjectPage: React.FC = () => (
  <section
    id="fading-spark-page"
    aria-label="Fading Spark"
    className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12"
  >
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <img
        src={pinkFabricBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#F5E5DF]/25" />
    </div>
    <div className="relative z-10 flex w-full max-w-6xl flex-col gap-4 sm:gap-6">
      {FADING_SPARK_PAGES.map((page, i) => (
        <img
          key={page.src}
          src={page.src}
          alt={page.alt}
          width={2000}
          height={1125}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="block h-auto w-full shadow-2xl"
        />
      ))}
    </div>
  </section>
);

interface FadingSparkProjectDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FadingSparkProjectDetailPage: React.FC<FadingSparkProjectDetailPageProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden text-[#241217]">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <img
          src={pinkFabricBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#F5E5DF]/25" />
      </div>
      <header className="relative z-20 shrink-0 bg-[#F5E5DF]/70 px-4 py-3 backdrop-blur-md sm:px-8">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 items-center gap-2 rounded-xs border border-[#540D21]/20 bg-[#F5E5DF]/85 px-3 py-2 text-xs font-mono uppercase tracking-wider font-bold text-[#540D21] shadow-sm transition-colors hover:text-[#851737] group cursor-pointer sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Atelier</span>
        </button>
      </header>
      <main className="relative z-10 flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-4 py-6">
        <img
          src={fadingSparkConceptImage}
          alt="Fading Spark concept"
          className="block h-auto max-h-full w-auto max-w-full object-contain"
        />
      </main>
    </div>,
    document.body
  );
};
