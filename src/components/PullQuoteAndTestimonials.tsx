import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface PullQuoteAndTestimonialsProps {
  testimonials: Testimonial[];
  pullQuote: {
    quote: string;
    author: string;
    context: string;
  };
}

export const PullQuoteAndTestimonials: React.FC<PullQuoteAndTestimonialsProps> = ({
  testimonials,
  pullQuote
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="manifesto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#DECFC0]/60">
      {/* Editorial Pull-Quote - The philosophical core */}
      <div className="py-16 border-b border-[#DECFC0]/60 relative">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#851737] mb-8 flex items-center gap-3">
          <span>// CORE MANIFESTO</span>
          <span className="text-[#540D21]">✦</span>
          <span>THE PULL-QUOTE</span>
        </div>

        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal italic text-[#241217] leading-[1.2] max-w-5xl">
          "{pullQuote.quote}"
        </blockquote>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#540D21]">
          <span className="text-[#241217] font-semibold">{pullQuote.author}</span>
          <span className="text-[#851737]">—</span>
          <span className="text-[#851737]">{pullQuote.context}</span>
        </div>
      </div>

      {/* Critical Reception / Testimonials Strip */}
      <div className="pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#851737] mb-2">
              CRITICAL RECEPTION
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#241217]">
              Words From Mentors, Maisons & Editors
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-[#DECFC0] hover:border-[#540D21] hover:text-[#540D21] text-[#241217] flex items-center justify-center transition-colors bg-[#EFE6D5]"
              aria-label="Previous testimonial"
              data-cursor="pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-[#851737] px-2 tabular-nums">
              0{currentIndex + 1} / 0{testimonials.length}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-[#DECFC0] hover:border-[#540D21] hover:text-[#540D21] text-[#241217] flex items-center justify-center transition-colors bg-[#EFE6D5]"
              aria-label="Next testimonial"
              data-cursor="pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card */}
        <div className="relative bg-[#EFE6D5]/70 border border-[#DECFC0] p-8 sm:p-12 transition-all backdrop-blur-sm">
          <Quote className="w-8 h-8 text-[#851737]/40 absolute top-6 right-6" />

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#241217] leading-relaxed font-light">
              "{current.quote}"
            </p>

            <div className="pt-6 border-t border-[#DECFC0]/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-base font-serif text-[#241217] font-semibold">{current.author}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#540D21] pt-0.5">
                  {current.role} • <span className="text-[#241217]">{current.organization}</span>
                </div>
              </div>
              <div className="text-xs font-mono text-[#851737]">
                SEASON {current.year}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small 3-column overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 border transition-all cursor-pointer backdrop-blur-sm ${
                idx === currentIndex
                  ? 'bg-[#EFE6D5] border-[#540D21] shadow-[0_0_15px_rgba(84,13,33,0.25)]'
                  : 'bg-[#FAF6EE]/70 border-[#DECFC0] hover:border-[#DECFC0] opacity-75'
              }`}
            >
              <div className="text-xs font-mono text-[#851737] mb-2">{t.organization}</div>
              <div className="text-sm font-serif text-[#241217] line-clamp-2">"{t.quote}"</div>
              <div className="text-[0.6875rem] font-mono text-[#540D21] mt-3">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
