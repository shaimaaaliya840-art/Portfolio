import React, { useState } from 'react';
import { GraduationCap, Palette, Star, Briefcase, Cpu } from 'lucide-react';
import { PortfolioData } from '../types';
import neelgarCertificate from '../assets/images/neelgar_certificate.jpg';

interface ManifestoDualArchPageProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const ManifestoDualArchPage: React.FC<ManifestoDualArchPageProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [plaqueTab, setPlaqueTab] = useState<'experience' | 'skills' | 'dyeing' | 'personal' | 'internships'>('experience');

  const personalSkills = portfolioData.personalSkills || [
    { skill: "Storyteller & Visionary", rating: 5 },
    { skill: "Research & Development", rating: 5 },
    { skill: "Leadership & Direction", rating: 5 },
    { skill: "Time Management", rating: 5 },
    { skill: "Empathy & Cultural Resonance", rating: 5 },
    { skill: "Collaboration & Team Spirit", rating: 5 },
  ];

  const experienceWorkshops = portfolioData.experienceWorkshops || [
    "Cynotype Printing", "Clay & Pottery Craft", "Stone & Wood Carving",
    "Sculpting & Form Study", "Batik Resist Dyeing", "Shibori & Tie-Dye",
    "Silhouette & Form Art", "Basketry & Fiber Weaving"
  ];

  const dyeingSkills = portfolioData.dyeingSkills || [
    "Tie-Dye Alchemy", "Eco Dyeing Baths", "Wax Batik Technique",
    "Shibori Resist Folds", "Natural Plant Extractions"
  ];

  const hardSkills = portfolioData.hardSkills || [
    "CLO3D (3D Garment Simulation)",
    "Pattern Making & Draping", "Garment Construction",
    "Creative Direction", "Trend Research & Forecasting",
    "Styling & Runway Curation", "Moodboard & Theme Conceptualization",
    "Fabric Sourcing & Metallurgy", "Craft & Surface Exploration",
    "Knit & Crochet Work", "Hand & Machine Embroidery",
    "Fashion Photography & Framing"
  ];

  const internships = [
    {
      role: "Haute Couture Atelier Apprentice & Draping Specialist",
      organization: "Neelgar Haute Couture Atelier",
      period: "2024 — Present",
      location: "Mumbai & Ahmedabad",
      summary: "At Neelgar, I worked across creative storytelling, concept development, and fashion design development. My work included developing creative concepts, exploring design directions, fashion photography, styling, and creating hand and digital illustrations. I also contributed to building visual stories around Indian craft, culture, and contemporary fashion, translating ideas into strong visual and design outcomes. After my 3-month internship, I continued working part-time for another month on creative projects.",
      highlights: [
        "Pattern Drafting & Toile Fitting: Assisted senior designers with precise pattern manipulation and muslin draping for bespoke runway silhouettes.",
        "CLO3D Virtual Prototyping: Simulated 3D digital avatars and garment stress-maps, accelerating client fitting turnarounds.",
        "Heritage Metallurgy & Material Sourcing: Coordinated directly with master artisans in Varanasi for hand-spun pure zari and raw silk brocades."
      ]
    }
  ];

  const designerLocation = portfolioData.location || "Ahmedabad, Gujarat";

  return (
    <section
      id="manifesto-arch"
      className="relative min-h-screen py-20 px-4 sm:px-8 md:px-12 text-[#241217] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Volumetric Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* 1. Top Slide Page Meta (PAGE 06 // SPREAD 02) */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-8 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-bold">PAGE 03 · ABOUT ME // ATELIER PROFILE</span>
        </div>
        <div className="flex items-center gap-4 text-[#851737]">
          <span>SHATMA AALIYA</span>
          <span>·</span>
          <span>HAUTE COUTURE APPRENTICE</span>
          <span>·</span>
          <span>AHMEDABAD, GUJARAT</span>
        </div>
      </div>

      {/* 2. Headline: "Who Am I?" in Avonia Modern Luxury Script */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#540D21] mb-1 font-bold">
          MANIFESTO &amp; CREDENTIALS //
        </div>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-avonia font-normal tracking-normal text-[#241217] leading-tight pt-5 sm:pt-8">
          Who Am I?
        </h2>
      </div>

      {/* Interactive Experience & Skills Dossier */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Column 1 (Left): EXPERIENCES & SKILLS DOSSIER - Glowing Golden Plaque */}
        <div className="lg:col-span-12 flex flex-col justify-between space-y-4 text-left p-6 sm:p-7 wine-card overflow-hidden">
          {/* Plaque Header */}
          <div className="border-b border-[#FAF6EE]/20 pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl sm:text-4xl font-avonia font-normal tracking-normal text-[#FAF6EE]">
                Shatma Aaliya
              </h3>
              <span className="px-2 py-0.5 bg-[#FAF6EE] text-[#540D21] font-mono text-[0.625rem] font-bold tracking-widest uppercase">
                EXPERIENCE &amp; SKILLS
              </span>
            </div>
            <div className="text-[0.75rem] font-mono text-[#FAF6EE]/85 font-bold tracking-widest uppercase pt-1">
              Fashion Designer · {designerLocation}
            </div>
          </div>

          {/* Clickable Category Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {[
              { id: 'experience', label: 'Experiences (8)' },
              { id: 'skills', label: 'Hard-Skills & CLO3D' },
              { id: 'dyeing', label: 'Dyeing Alchemy' },
              { id: 'personal', label: 'Personal (5★)' },
              { id: 'internships', label: `Internships (${internships.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setPlaqueTab(tab.id as any);
                }}
                className={`px-2.5 py-1 text-[0.625rem] font-mono uppercase font-bold tracking-wider transition-all border cursor-pointer ${
                  plaqueTab === tab.id
                    ? 'bg-[#FAF6EE] text-[#540D21] border-[#FAF6EE] shadow-md'
                    : 'bg-[#FAF6EE]/10 text-[#FAF6EE]/85 hover:bg-[#FAF6EE]/20 hover:text-[#FAF6EE] border-[#FAF6EE]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Body: Experiences, Hard Skills, Dyeing, Personal Ratings & Internships */}
          <div className="min-h-[160px] py-1">
            {plaqueTab === 'experience' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>EXPERIENCES &amp; WORKSHOPS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {experienceWorkshops.map((exp, idx) => (
                    <button
                      key={idx}
                      className="px-2 py-1 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE] hover:text-[#540D21] text-[#FAF6EE] border border-[#FAF6EE]/20 text-[0.6875rem] font-mono font-medium transition-colors inline-flex items-center gap-1 shadow-sm cursor-pointer"
                      title={`Click to explore ${exp}`}
                    >
                      <span className="opacity-70">✦</span>
                      <span>{exp}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-2 text-[0.6875rem] font-mono text-[#FAF6EE]/90 border-t border-[#FAF6EE]/20 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#FAF6EE] shrink-0" />
                    <span>Neelgar Atelier · Haute Couture Apprentice (2024—Present)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#FAF6EE] shrink-0" />
                    <span>Indus University Design Studios · Craft Researcher</span>
                  </div>
                </div>
              </div>
            )}

            {plaqueTab === 'skills' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>DIGITAL &amp; TACTILE HARD-SKILLS</span>
                </div>
                {/* CLO3D Highlight Feature */}
                <button
                  className="w-full p-2 bg-[#FAF6EE] text-[#540D21] text-xs font-mono font-bold flex items-center justify-between hover:bg-[#EFE6D5] transition-colors shadow-sm cursor-pointer"
                  title="CLO3D 3D Garment Simulation"
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#540D21]" />
                    <span>CLO3D (3D Garment Simulation)</span>
                  </div>
                  <span className="text-[0.625rem] px-1.5 py-0.5 bg-[#540D21] text-[#FAF6EE] font-bold">
                    ACTIVE
                  </span>
                </button>
                <div className="flex flex-wrap gap-1.5">
                  {hardSkills.filter(s => !s.startsWith("CLO3D")).map((skill, idx) => (
                    <button
                      key={idx}
                      className="px-2 py-1 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE] hover:text-[#540D21] text-[#FAF6EE] border border-[#FAF6EE]/20 text-[0.6875rem] font-mono font-medium transition-colors inline-flex items-center gap-1 shadow-sm cursor-pointer"
                    >
                      <span className="opacity-70">✦</span>
                      <span>{skill}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {plaqueTab === 'dyeing' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>NATURAL DYEING ALCHEMY</span>
                  <span className="text-[0.625rem] font-normal text-[#FAF6EE]/75">5 Techniques</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {dyeingSkills.map((dye, idx) => (
                    <button
                      key={idx}
                      className="p-2 bg-[#FAF6EE]/10 text-[#FAF6EE] border border-[#FAF6EE]/20 hover:border-[#FAF6EE]/60 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Palette className="w-3.5 h-3.5 text-[#FAF6EE]" />
                      <span>{dye}</span>
                    </button>
                  ))}
                </div>
                <div className="text-[0.625rem] font-mono text-[#FAF6EE]/75 pt-1 italic">
                  Botanical indigo baths, wax batik, Japanese shibori and mineral discharge.
                </div>
              </div>
            )}

            {plaqueTab === 'personal' && (
              <div className="space-y-1.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>PERSONAL SKILLS RATING</span>
                  <span className="text-[0.625rem] font-bold text-[#FAF6EE]/75">5-STAR SYSTEM</span>
                </div>
                <div className="space-y-1">
                  {personalSkills.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full flex items-center justify-between text-[0.6875rem] bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/20 border border-[#FAF6EE]/20 text-[#FAF6EE] px-2.5 py-1.5 cursor-pointer transition-colors"
                    >
                      <span className="font-mono font-semibold">{item.skill}</span>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3.5 h-3.5 ${
                              star <= item.rating
                                ? "text-[#FAF6EE] fill-[#FAF6EE]"
                                : "text-[#FAF6EE]/30 fill-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {plaqueTab === 'internships' && (
              <div className="space-y-2">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>ATELIER INTERNSHIPS</span>
                  <span className="text-[0.625rem] font-bold text-[#FAF6EE]/75">{internships.length} ROLE</span>
                </div>
                <div className="space-y-1.5">
                  {internships.map((intern, idx) => (
                    <div
                      key={idx}
                      className="w-full text-left p-3 bg-[#FAF6EE]/10 border border-[#FAF6EE]/20 text-xs font-mono transition-all"
                    >
                      <div className="text-[#FAF6EE] font-bold flex items-center justify-between">
                        <span>{intern.organization}</span>
                        <span className="text-[0.625rem] text-[#540D21] bg-[#FAF6EE] px-1.5 py-0.5 border border-[#FAF6EE]">{intern.period}</span>
                      </div>
                      <div className="text-[#FAF6EE]/85 text-[0.6875rem] pt-1 font-semibold">{intern.role}</div>
                      <div className="text-[#FAF6EE]/80 text-[0.625rem] sm:text-xs pt-2 leading-relaxed">
                        {intern.summary}
                      </div>
                      {intern.organization.includes('Neelgar') && (
                        <div className="mt-4 border-t border-[#FAF6EE]/20 pt-4">
                          <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold mb-3 flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-[#FAF6EE]" />
                            Certificate of Appreciation
                          </div>
                          <img 
                            src={neelgarCertificate} 
                            alt="Neelgar Certificate of Appreciation" 
                            className="w-full max-w-[280px] border-2 border-[#FAF6EE]/20 shadow-md hover:border-[#FAF6EE] transition-colors"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
