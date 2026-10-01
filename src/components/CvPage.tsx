import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { PortfolioData } from '../types';

interface CvPageProps {
  portfolioData: PortfolioData;
}

const experience = [
  'Cynotype Printing',
  'Carving, Sculpting',
  'Clay Pottery',
  'Silhouette Art',
  'Pidilite Workshop',
  'Hand Woven Basket',
  'Kolam',
  'Eco-printing'
];

const dyeingSkills = ['Tie-dye', 'Batik', 'Shibori', 'Block-printing', 'Bleaching & dyeing'];

const hardSkills = [
  'Crocheting', 'Knitting', 'Embroidery', 'Photography', 'Knotting', 'Sketching',
  'Hand Illustration', 'Pattern making', 'Styling & makeup', 'Market analyst', 'Material Sourcing'
];

const softSkills = [
  'Curiosity and observation',
  'Sensitivity towards society and environment',
  'Strong ethics and values',
  'Willingness to unlearn and relearn'
];

const cvSections = [
  { id: 'cv-experience', title: 'Experience', items: experience },
  { id: 'cv-dyeing-skills', title: 'Dyeing Skills', items: dyeingSkills },
  { id: 'cv-hard-skills', title: 'Hard Skills', items: hardSkills },
  { id: 'cv-soft-skills', title: 'Soft Skills', items: softSkills }
];

const CvSection: React.FC<{ id?: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section
    id={id}
    aria-labelledby={id ? `${id}-title` : undefined}
    className="scroll-mt-28 rounded-xs border border-[#851737]/25 bg-[#FFF9F8]/95 p-5 shadow-sm sm:p-7"
  >
    <h2 id={id ? `${id}-title` : undefined} className="mb-4 border-b border-[#540D21]/20 pb-2 font-serif text-xl font-bold uppercase tracking-wide text-[#540D21] sm:text-2xl">
      {title}
    </h2>
    {children}
  </section>
);

const CvList: React.FC<{ items: string[]; columns?: boolean }> = ({ items, columns = false }) => (
  <ul className={`grid gap-x-8 gap-y-2 font-body text-sm leading-relaxed text-[#241217] sm:text-base ${columns ? 'sm:grid-cols-2' : ''}`}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#851737]" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const CvPage: React.FC<CvPageProps> = ({ portfolioData }) => {
  const [activeSection, setActiveSection] = useState(cvSections[0].id);

  useEffect(() => {
    const sections = cvSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visibleEntries[0]) setActiveSection(visibleEntries[0].target.id);
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.15, 0.4, 0.7] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const skills = portfolioData.skills;

  return (
    <section
      id="curriculum-vitae"
      aria-label="Page 11 - Curriculum Vitae"
      className="min-h-screen bg-[#F6E1E3] px-4 pb-20 pt-24 text-[#241217] sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-5 flex flex-col items-center justify-between gap-5 rounded-xs border border-[#851737]/35 bg-gradient-to-r from-[#FFF9F8] via-[#F8E8E9] to-[#F3D0D4] p-5 text-center shadow-sm sm:flex-row sm:p-7 sm:text-left">
          <div>
            <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#851737]">
              Curriculum Vitae · 2023—2027
            </div>
            <h1 className="font-avonia text-5xl leading-none text-[#540D21] sm:text-7xl">
              {portfolioData.name}
            </h1>
            <p className="mt-2 font-body text-base text-[#540D21] sm:text-lg">
              {portfolioData.title}
            </p>
          </div>
          <a
            href="/shatma-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border border-[#540D21]/35 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#540D21] transition-colors hover:bg-[#540D21] hover:text-[#FFF9F8]"
          >
            View Full CV <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </header>

        <nav aria-label="CV sections" className="sticky top-20 z-20 mb-8 border-y border-[#540D21]/25 bg-[#FFF9F8]/95 shadow-sm backdrop-blur-sm">
          <ul className="flex snap-x snap-mandatory overflow-x-auto whitespace-nowrap">
            {cvSections.map(({ id, title }, index) => (
              <li key={id} className="flex shrink-0 items-center snap-start">
                <a
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSection(id);
                  }}
                  className={`block px-4 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-colors sm:px-6 sm:text-xs sm:tracking-[0.18em] ${activeSection === id ? 'text-[#540D21] underline decoration-2 underline-offset-[14px]' : 'text-[#851737]/75 hover:text-[#540D21]'}`}
                >
                  {title}
                </a>
                {index < cvSections.length - 1 && <span className="text-[#851737]/40" aria-hidden="true">|</span>}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-5">
          {cvSections.map(({ id, title, items }) => (
            <CvSection key={id} id={id} title={title}>
              <CvList items={items} columns />
            </CvSection>
          ))}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <CvSection title="Education">
              {portfolioData.education && (
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#241217]">{portfolioData.education.degree}</h3>
                  <p className="font-body text-sm text-[#540D21]">
                    {portfolioData.education.institution} · {portfolioData.education.period}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[#241217]">{portfolioData.education.details}</p>
                </div>
              )}
              {portfolioData.educationEntries?.map((entry) => (
                <div key={entry.title} className="border-t border-[#851737]/30 py-3">
                  <h3 className="font-serif font-bold text-[#241217]">{entry.title}</h3>
                  <p className="font-body text-sm text-[#540D21]">{entry.institution}{entry.level ? ` · ${entry.level}` : ''}</p>
                </div>
              ))}
            </CvSection>

            {portfolioData.aboutMe && (
              <CvSection title="About Me">
                <p className="font-body text-sm leading-relaxed text-[#241217] sm:text-base">{portfolioData.aboutMe}</p>
              </CvSection>
            )}

            <CvSection title="Languages & Contact">
              <CvList items={portfolioData.languagesList || skills?.languages || []} />
              <div className="mt-5 space-y-2 border-t border-[#851737]/30 pt-4 font-mono text-sm">
                <a
                  href={`mailto:${portfolioData.contactEmail}`}
                  className="block font-bold text-[#540D21] underline decoration-[#851737]/50 underline-offset-4"
                >
                  {portfolioData.contactEmail}
                </a>
                <p>{portfolioData.callingNumber} · {portfolioData.whatsappNumber}</p>
                <p>{portfolioData.location}</p>
              </div>
            </CvSection>
          </div>
        </div>
      </div>
    </section>
  );
};
