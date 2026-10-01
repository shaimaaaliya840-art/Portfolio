import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');

  const categories = [
    'All Works',
    'Neelgar Archives',
    'Femme Fatale',
    'Menswear',
    'Indian Textiles'
  ];

  const filteredProjects = activeCategory === 'All Works'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#DECFC0]/60">
      {/* Header & Category Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#DECFC0]/60">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#851737] font-mono">
            <span>// ARCHIVAL INDEX</span>
            <span className="text-[#540D21]">✦</span>
            <span>2023—2027</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#241217] tracking-tight">
            Selected Works
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const count = category === 'All Works' 
              ? projects.length 
              : projects.filter(p => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-none text-xs tracking-[0.15em] uppercase font-sans transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#EFE6D5] text-[#540D21] border-[#540D21] shadow-[0_0_12px_rgba(84,13,33,0.3)] font-semibold'
                    : 'bg-transparent text-[#851737] border-[#DECFC0] hover:border-[#540D21] hover:text-[#241217]'
                }`}
                data-cursor="pointer"
              >
                <span>{category}</span>
                <span className="ml-1.5 text-[0.625rem] font-mono opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-[#EFE6D5]/80 border-2 border-[#DECFC0] hover:border-[#540D21] p-6 sm:p-8 transition-all duration-300 relative backdrop-blur-sm shadow-xl"
              data-cursor="pointer"
              data-cursor-text="INSPECT"
            >
              {/* Corner Framing Marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#DECFC0] group-hover:border-[#540D21] transition-colors" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#DECFC0] group-hover:border-[#540D21] transition-colors" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#DECFC0] group-hover:border-[#540D21] transition-colors" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#DECFC0] group-hover:border-[#540D21] transition-colors" />

              {/* Card Meta Top */}
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#851737] pb-4">
                <span className="text-[#540D21] font-semibold">{project.number}</span>
                <div className="flex items-center gap-3">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Card Visual with Editorial Ratio */}
              <div className="aspect-[16/10] overflow-hidden bg-[#FAF6EE] relative mb-6 border border-[#DECFC0]/70">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Tag Pill overlay */}
                <div className="absolute bottom-3 left-3 bg-[#FAF6EE]/90 backdrop-blur-sm px-2.5 py-1 text-[0.625rem] uppercase font-mono tracking-widest text-[#540D21] border border-[#DECFC0]">
                  {project.client}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-none bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#DECFC0] group-hover:border-[#540D21] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#241217] group-hover:text-[#540D21] transition-colors" />
                </div>
              </div>

              {/* Project Title & Narrative in Golden Glowing Plaque with Dark Silhouette Writeup */}
              <div className="flex flex-col gap-2 p-5 bg-gradient-to-br from-[#540D21] via-[#75122F] to-[#380612] border-2 border-[#851737] shadow-[0_15px_40px_rgba(84,13,33,0.18)] relative overflow-hidden text-[#FAF6EE] mt-3">
                <div className="absolute inset-1 border border-[#FAF6EE]/20 pointer-events-none" />
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#FAF6EE] tracking-tight">
                  {project.title}
                </h3>
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#FAF6EE] font-bold">
                  {project.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#FAF6EE]/90 font-medium leading-relaxed pt-2 line-clamp-2">
                  {project.excerpt}
                </p>

                {/* Tags strip inside plaque */}
                <div className="mt-4 pt-3 border-t border-[#FAF6EE]/20 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.625rem] tracking-wider uppercase font-mono px-2.5 py-1 bg-[#FAF6EE] text-[#540D21] font-bold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
