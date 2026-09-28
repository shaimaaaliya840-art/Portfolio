import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#FAF6EE]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-5xl bg-[#FAF6EE] border-2 border-[#DECFC0] shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 max-h-[92vh] flex flex-col overflow-hidden text-[#241217]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#DECFC0] flex items-center justify-between bg-[#F3EBDD]">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#851737]">
              <span className="text-[#540D21] font-bold">{project.number}</span>
              <span className="hidden sm:inline text-[#DECFC0]">•</span>
              <span className="hidden sm:inline text-[#241217] font-semibold">{project.client}</span>
              <span className="hidden md:inline text-[#DECFC0]">•</span>
              <span className="hidden md:inline text-[#851737]">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#241217] hover:text-[#540D21] border border-[#DECFC0] hover:border-[#540D21] bg-[#EFE6D5] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 flex-1">
            {/* Title & Category */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] font-mono text-[#851737] font-bold">
                {project.category}
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-black uppercase text-[#241217]">
                {project.title}
              </h2>
              <div className="text-sm font-mono tracking-widest uppercase text-[#540D21]">
                {project.subtitle}
              </div>
            </div>

            {/* Hero Media */}
            <div className="aspect-[16/9] w-full overflow-hidden border border-[#DECFC0] bg-[#EFE6D5]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#EFE6D5] border border-[#DECFC0]">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#851737] tracking-widest font-bold">Client</div>
                <div className="text-sm font-serif font-bold text-[#241217] uppercase pt-1">{project.client}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#851737] tracking-widest font-bold">Year</div>
                <div className="text-sm font-serif font-bold text-[#241217] uppercase pt-1">{project.year}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#851737] tracking-widest font-bold">Discipline</div>
                <div className="text-sm font-serif font-bold text-[#241217] uppercase pt-1">{project.category}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#851737] tracking-widest font-bold">Role</div>
                <div className="text-sm font-serif font-bold text-[#241217] uppercase pt-1">{project.role}</div>
              </div>
            </div>

            {/* Detailed Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#540D21] font-bold">
                  The Challenge
                </div>
                <p className="text-sm font-editorial text-[#241217]/85 leading-relaxed">
                  {project.challenge || project.description}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#540D21] font-bold">
                  The Execution
                </div>
                <p className="text-sm font-editorial text-[#241217]/85 leading-relaxed">
                  {project.solution || project.description}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#540D21] font-bold">
                  The Outcome
                </div>
                <p className="text-sm font-editorial text-[#241217]/85 leading-relaxed">
                  {project.impact || 'Exhibited at Indus Design School Runway Showcase with 100% bespoke fit acclaim.'}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#DECFC0]">
              {project.tags.map((t) => (
                <span key={t} className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-[#EFE6D5] text-[#540D21] border border-[#DECFC0]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-[#DECFC0] bg-[#F3EBDD] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-widest text-[#851737] hover:text-[#540D21] transition-colors cursor-pointer"
            >
              ← Return to Presentation
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry?.();
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#540D21] hover:bg-[#851737] text-xs font-mono uppercase tracking-widest text-[#FAF6EE] transition-all cursor-pointer font-bold shadow-[0_0_15px_rgba(84,13,33,0.3)]"
            >
              <span>Inquire About This Piece</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FAF6EE]" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
