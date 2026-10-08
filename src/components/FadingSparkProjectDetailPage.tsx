import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, X } from 'lucide-react';
import pinkFabricBackground from '../assets/images/fading_spark_pink_fabric_background.jpg';
import fadingSparkConceptImage from '../assets/images/fading_spark_concept.png';
// Pages of public/fading-spark.pdf, pre-rendered so the slide shows the artwork
// itself instead of the browser's PDF viewer chrome
import fadingSparkPg1 from '../assets/images/fading-spark/pg 1.png';
import fadingSparkPg2 from '../assets/images/fading-spark/pg 2.png';
import fadingSparkPg3_1 from '../assets/images/fading-spark/pg 3.1.png';
import fadingSparkPg3_2 from '../assets/images/fading-spark/pg 3.2.png';
import fadingSparkPg3_3 from '../assets/images/fading-spark/pg 3.3.png';
import fadingSparkPg3_4 from '../assets/images/fading-spark/pg 3.4.png';
import fadingSparkPg3_5 from '../assets/images/fading-spark/pg 3.5.png';
import fadingSparkPg5 from '../assets/images/fading-spark/pg 5.png';

const FADING_SPARK_PAGES: any[] = [
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
  { type: 'single', src: fadingSparkPg5, alt: 'Fading Spark Page 5' }
];

export const FadingSparkProjectPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
  <section
    id="fading-spark-page"
    aria-label="Fading Spark"
    className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12"
  >
    <div 
      className="pointer-events-none absolute inset-0 z-0" 
      style={{ background: 'radial-gradient(circle at 50% 50%, #f0d5df 0%, #c4a1b0 60%, #563947 100%)' }} 
      aria-hidden="true" 
    />
    <div className="relative z-10 flex w-full max-w-6xl flex-col gap-4 sm:gap-6">
      {FADING_SPARK_PAGES.map((page, i) => {
        if (page.type === 'grid') {
          return (
            <div key={`grid-${i}`} className="flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
              {page.title && (
                <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#540D21]">
                  {page.title}
                </h2>
              )}
              <div className={`w-full ${page.gridCols === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6' : 'flex flex-row flex-wrap sm:flex-nowrap justify-center items-end gap-2 sm:gap-4'}`}>
                {page.images?.map((img: any, idx: number) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    onClick={() => setSelectedImage(img.src)}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`block w-full cursor-pointer transition-transform hover:scale-[1.02] ${page.gridCols === 2 ? '' : 'sm:flex-1'} rounded-sm ${page.imageAspect || 'h-auto'} ${page.imageFit ? `object-${page.imageFit}` : 'object-contain'}`}
                    style={{ filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' }}
                  />
                ))}
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
            className="block h-auto w-full object-contain"
          />
        );
      })}
    </div>

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
          onClick={(e) => e.stopPropagation()}
        />
      </div>,
      document.body
    )}
  </section>
  );
};

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
    <div 
      className="pointer-events-none absolute inset-0 z-0" 
      style={{ background: 'radial-gradient(circle at 50% 50%, #f0d5df 0%, #c4a1b0 60%, #563947 100%)' }} 
      aria-hidden="true" 
    />
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
      <main className="relative z-10 flex min-h-0 flex-1 items-start justify-center overflow-y-auto w-full">
        <FadingSparkProjectPage />
      </main>
    </div>,
    document.body
  );
};
