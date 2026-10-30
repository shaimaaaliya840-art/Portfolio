import React, { useState } from 'react';
import { Palette, Star, Cpu, ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../types';
import { AtelierPalette } from '../data/colorPalettes';
import neelgarCertificate from '../assets/images/neelgar_certificate.jpg';

// Words in the manifesto line that get the accent colour + underline
const SPECIAL_WORDS = ['design', 'garments', 'imagination'];

interface ManifestoDualArchPageProps {
  portfolioData: PortfolioData;
  activePalette?: AtelierPalette;
  onOpenInquiry: () => void;
  onOpenDeck?: () => void;
  onOpenDetail?: (slideIndex?: number) => void;
}

export const ManifestoDualArchPage: React.FC<ManifestoDualArchPageProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [plaqueTab, setPlaqueTab] = useState<'personal' | 'software' | 'hard-skills' | 'dyeing' | 'experience' | 'internships'>('personal');

  // Words breakdown of the manifesto line
  const sentence = "I tell stories through design, where garments meet imagination.";
  const words = sentence.split(' ');

  const aboutMeText = portfolioData?.aboutMe || "I'm a creatively driven individual with a strong foundation in cultural aesthetics and design thinking. My work is deeply rooted in exploring heritage while translating it into contemporary, functional garments. I have a keen interest in material experimentation, focusing on textures, structure, and innovative fabric use. I aim to create clothing that balances modesty, elegance, and bold expression. With an eye for detail and storytelling, I strive to design pieces that are both meaningful and wearable. My approach blends tradition with modern sensibilities to craft unique, statement-driven fashion.";

  const personalSkills = portfolioData.personalSkills || [
    { skill: "Draping" },
    { skill: "Hand Illustration" },
    { skill: "Storytelling" },
    { skill: "Styling & makeup" },
    { skill: "Market analyst" },
    { skill: "Material Sourcing" },
    { skill: "Pattern making" },
  ];

  const EXCLUDED_WORKSHOPS = ['carving', 'sculpting', 'clay', 'pottery', 'porttery', 'silhouette', 'kolam'];
  const rawExperienceWorkshops = portfolioData.experienceWorkshops || [
    "The Seamstress's Secret (The School of Historical Dress & LLDC)",
    "The Geometry & Structure of Tailoring (LLDC Kutch)",
    "Fiber to Fabric (Chaman Siju · Bhuj)",
    "Cyanotype Printing",
    "Pidilite Workshop",
    "Hand woven basket",
    "Eco-printing",
    "Indigo Site Visit",
    "Coconut Shell Craft (Egai)"
  ];
  const experienceWorkshops = rawExperienceWorkshops.filter(exp =>
    !EXCLUDED_WORKSHOPS.some(ex => exp.toLowerCase().includes(ex))
  );

  const dyeingSkills = portfolioData.dyeingSkills || [
    "Tie-Dye Alchemy", "Eco Dyeing Baths", "Wax Batik Technique",
    "Shibori Resist Folds", "Natural Plant Extractions"
  ];

    const softwareSkills = [
    {
      name: 'Adobe Illustrator',
      subtitle: 'Technical fashion flats, vector sketches & spec sheets',
      badge: 'Vector'
    },
    {
      name: 'Photoshop',
      subtitle: 'Digital rendering, textile textures & concept moodboards',
      badge: 'Digital'
    },
    {
      name: 'CorelDRAW',
      subtitle: 'Precision print layouts, motif repeats & vector art',
      badge: 'Graphics'
    },
    {
      name: 'CLO3D',
      subtitle: '3D garment simulation, digital drape & virtual toile',
      badge: '3D CAD'
    }
  ];

  const hardSkills = (portfolioData.hardSkills || [
    "Crocheting",
    "Knitting",
    "Embroidery",
    "Knotting",
    "Photography",
    "Sketching",
    "Pattern Making & Drafting",
    "Garment Construction",
    "Creative Direction",
    "Fabric Sourcing & Metallurgy",
    "Craft & Surface Exploration"
  ]).filter(s => !s.toUpperCase().includes('CLO3D'));

  const internships = [
    {
      role: "Design & Content Intern",
      organization: "Neelgar Haute Couture Atelier",
      period: "22 May – Aug 2026 (internship + part-time)",
      location: "Mumbai & Ahmedabad",
      summary: "At Neelgar, I worked across creative storytelling, concept development, and fashion design development. My work included developing creative concepts, exploring design directions, fashion photography, styling, and creating hand and digital illustrations. I also contributed to building visual stories around Indian craft, culture, and contemporary fashion, translating ideas into strong visual and design outcomes. After my 3-month internship, I continued working part-time for another month on creative projects.",
      highlights: [
        "Pattern Drafting & Toile Fitting: Assisted senior designers with precise pattern manipulation and muslin prototyping for bespoke runway silhouettes.",
        "CLO3D Virtual Prototyping: Simulated 3D digital avatars and garment stress-maps, accelerating client fitting turnarounds.",
        "Heritage Metallurgy & Material Sourcing: Coordinated directly with master artisans in Varanasi for hand-spun pure zari and raw silk brocades."
      ]
    }
  ];

  const designerLocation = portfolioData.location || "Ahmedabad, Gujarat";

  const handleWorkshopClick = (workshopName: string) => {
    // 1. Smoothly scroll to the Workshop section in Works
    const el = document.getElementById('workshops') || document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 2. Map workshop names to interactive project dossiers if available
    const mapping: Record<string, string> = {
      'seamstress': 'seamstress-secret',
      'geometry': 'geometry-structure-tailoring',
      'tailoring': 'geometry-structure-tailoring',
      'fiber to fabric': 'fiber-to-fabric',
      'cyanotype': 'cyanotype-printing',
      'eco': 'eco-printing',
      'indigo': 'indigo-site-visit',
      'coconut': 'coconut-shell-craft',
      'dabu': 'dabu-printing',
      'paper weaving': 'paper-weaving'
    };

    const lower = workshopName.toLowerCase();
    let matchedId = '';
    for (const [key, projId] of Object.entries(mapping)) {
      if (lower.includes(key)) {
        matchedId = projId;
        break;
      }
    }

    if (matchedId) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('open-workshop-project', { detail: { projectId: matchedId } }));
      }, 400);
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen pt-3 sm:pt-4 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 text-[#241217] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE] scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <div id="who-am-i" className="absolute -top-24 pointer-events-none" />
      <div id="kinetic-manifesto" className="absolute -top-24 pointer-events-none" />
      <div id="manifesto-arch" className="absolute -top-24 pointer-events-none" />

      {/* Volumetric Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* 1. Top Slide Page Meta */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-10 sm:mb-14 text-xs font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#540D21]" />
          <span className="text-[#241217] font-bold">PAGE 02 · WHO AM I // ATELIER PROFILE &amp; MANIFESTO</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#851737]">
          <span>SHATMA AALIYA</span>
        </div>
      </div>

      {/* 3. Kinetic Storytelling Manifesto Headline */}
      <div className="max-w-7xl mx-auto mb-14 sm:mb-20 md:mb-24">
        <h3 className="font-avonia text-[clamp(1.85rem,4.2vw,3.75rem)] font-normal leading-[1.35] tracking-[0.04em] text-[#241217]">
          {words.map((word, wordIdx) => {
            const isSpecial = SPECIAL_WORDS.some((w) => word.toLowerCase().includes(w));
            return (
              <React.Fragment key={`${word}-${wordIdx}`}>
                {wordIdx > 0 && ' '}
                {isSpecial ? (
                  <span className="text-[#540D21] underline decoration-[#540D21]/50 decoration-2 underline-offset-8">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </React.Fragment>
            );
          })}
        </h3>
      </div>

      {/* 4. Poetic Sub-narrative Narrative Bio */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-24 md:mb-28">
        <p className="text-sm sm:text-base md:text-lg text-[#2A1519] font-editorial leading-relaxed sm:leading-[1.85] border-l-2 border-[#540D21]/60 pl-5 sm:pl-6 max-w-4xl text-left sm:text-justify">
          <span className="font-avonia text-3xl sm:text-4xl text-[#540D21] font-normal italic inline-block pr-1.5 leading-none align-baseline select-none">
            I
          </span>
          {aboutMeText.startsWith("I") ? aboutMeText.slice(1) : aboutMeText}
        </p>
      </div>

      {/* 5. Interactive Experience & Skills Dossier */}
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
                WORKSHOPS &amp; SKILLS
              </span>
            </div>
            <div className="text-[0.75rem] font-mono text-[#FAF6EE]/85 font-bold tracking-widest uppercase pt-1">
              Fashion Designer · {designerLocation}
            </div>
          </div>

          {/* Clickable Category Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {[
              { id: 'personal', label: 'Personal' },
              { id: 'software', label: 'Software' },
              { id: 'hard-skills', label: 'Hard Skills' },
              { id: 'dyeing', label: 'Dyeing' },
              { id: 'experience', label: `Workshops (${experienceWorkshops.length})` },
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

          {/* Dynamic Tab Body: Personal, Software, Hard Skills, Dyeing, Workshops, Internships */}
          <div className="min-h-[160px] py-1">
            {/* 1. PERSONAL */}
            {plaqueTab === 'personal' && (
              <div className="space-y-2">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>PERSONAL PROFICIENCIES</span>
                  <span className="text-[0.625rem] font-bold text-[#FAF6EE]/75">{personalSkills.length} SKILLS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalSkills.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/20 border border-[#FAF6EE]/20 text-[#FAF6EE] text-[0.6875rem] font-mono font-medium transition-colors inline-flex items-center gap-1.5 shadow-xs rounded-xs"
                    >
                      <span className="opacity-70 text-amber-200">✦</span>
                      <span>{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. SOFTWARE */}
            {plaqueTab === 'software' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>CREATIVE &amp; CAD SOFTWARE</span>
                  <span className="text-[0.625rem] font-bold text-[#FAF6EE]/75">{softwareSkills.length} TOOLS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {softwareSkills.map((sw, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/20 border border-[#FAF6EE]/20 text-[#FAF6EE] transition-all flex items-center justify-between shadow-xs rounded-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <Cpu className="w-4 h-4 text-amber-200 shrink-0" />
                        <div>
                          <div className="text-xs font-mono font-bold text-[#FAF6EE]">{sw.name}</div>
                          <div className="text-[0.625rem] text-[#FAF6EE]/70 font-mono leading-tight">{sw.subtitle}</div>
                        </div>
                      </div>
                      <span className="text-[0.5625rem] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-[#FAF6EE]/15 border border-[#FAF6EE]/30 text-[#FAF6EE] font-bold shrink-0 ml-2">
                        {sw.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. HARD SKILLS */}
            {plaqueTab === 'hard-skills' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>ATELIER HARD SKILLS</span>
                  <span className="text-[0.625rem] font-bold text-[#FAF6EE]/75">{hardSkills.length} SKILLS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {hardSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/20 text-[#FAF6EE] border border-[#FAF6EE]/20 text-[0.6875rem] font-mono font-medium transition-colors inline-flex items-center gap-1.5 shadow-xs rounded-xs"
                    >
                      <span className="opacity-70 text-amber-200">✦</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. DYEING */}
            {plaqueTab === 'dyeing' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>NATURAL DYEING ALCHEMY</span>
                  <span className="text-[0.625rem] font-normal text-[#FAF6EE]/75">{dyeingSkills.length} Techniques</span>
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

            {/* 5. WORKSHOPS */}
            {plaqueTab === 'experience' && (
              <div className="space-y-3">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span>WORKSHOPS</span>
                    <span className="text-[0.5625rem] text-[#FAF6EE]/60 font-normal hidden sm:inline">· CLICK TO EXPLORE</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('workshops') || document.getElementById('works');
                      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-[0.625rem] text-[#FAF6EE] hover:text-white font-mono uppercase tracking-wider underline decoration-[#FAF6EE]/50 hover:decoration-white underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Workshop Page</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {experienceWorkshops.map((exp, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleWorkshopClick(exp)}
                      className="px-2.5 py-1.5 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/25 text-[#FAF6EE] hover:text-white border border-[#FAF6EE]/20 hover:border-[#FAF6EE]/60 text-[0.6875rem] font-mono font-medium inline-flex items-center gap-1.5 shadow-xs transition-all duration-200 cursor-pointer group rounded-xs hover:scale-[1.02] active:scale-[0.98]"
                      title="Click to view this workshop on the Works page"
                    >
                      <span className="opacity-70 group-hover:opacity-100 text-amber-200 transition-opacity">✦</span>
                      <span>{exp}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity ml-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 6. INTERNSHIPS */}
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
