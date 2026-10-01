import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Palette, 
  Scissors, 
  Star, 
  Briefcase, 
  Heart, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Cpu,
  Layers,
  Globe,
  Compass
} from 'lucide-react';
import { PortfolioData } from '../types';

interface ManifestoDualArchPageProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const ManifestoDualArchPage: React.FC<ManifestoDualArchPageProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [showFullCV, setShowFullCV] = useState(true);
  const [plaqueTab, setPlaqueTab] = useState<'experience' | 'skills' | 'dyeing' | 'personal' | 'internships'>('experience');
  const [dossierTab, setDossierTab] = useState<'all' | 'internships' | 'skills' | 'dyeing' | 'workshops' | 'personal'>('all');
  const [activeItem, setActiveItem] = useState<string | null>(null);

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

  const softSkills = portfolioData.softSkills || [
    "Adaptive Team Player", "Creative Intuition & Innovation",
    "Active Listener & Open to Critique", "Critical Thinking & Aesthetic Problem Solving"
  ];

  const languagesList = portfolioData.languagesList || [
    "English (Fluent)", "Hindi (Native)", "Urdu (Conversational)", "Gujarati (Regional)"
  ];

  const internships = [
    {
      role: "Haute Couture Atelier Apprentice & Draping Specialist",
      organization: "Neelgar Haute Couture Atelier",
      period: "2024 — Present",
      location: "Mumbai & Ahmedabad",
      summary: "Direct immersion under Master Couturier at Neelgar Atelier. Responsible for translating conceptual sketches into structural silhouettes, pattern precision, and textile sourcing.",
      highlights: [
        "Pattern Drafting & Toile Fitting: Assisted senior designers with precise pattern manipulation and muslin draping for bespoke runway silhouettes.",
        "CLO3D Virtual Prototyping: Simulated 3D digital avatars and garment stress-maps, accelerating client fitting turnarounds.",
        "Heritage Metallurgy & Material Sourcing: Coordinated directly with master artisans in Varanasi for hand-spun pure zari and raw silk brocades."
      ]
    }
  ];

  const designerPhone = portfolioData.callingNumber || "6351283152";
  const designerEmail = portfolioData.contactEmail || "shaimaaaliya840@gmail.com";
  const designerLocation = portfolioData.location || "Ahmedabad, Gujarat";

  return (
    <section
      id="manifesto-arch"
      className="relative min-h-screen py-20 px-4 sm:px-8 md:px-12 border-b border-[#DECFC0] bg-[#FAF6EE] text-[#241217] overflow-hidden selection:bg-[#540D21] selection:text-[#FAF6EE]"
    >
      {/* Volumetric Center Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-radial from-[#540D21]/10 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />

      {/* 1. Top Slide Page Meta (PAGE 06 // SPREAD 02) */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between border-b border-[#DECFC0] pb-3 mb-8 text-[11px] font-mono tracking-[0.25em] text-[#540D21]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#540D21] shadow-[0_0_8px_#540D21]" />
          <span className="text-[#241217] font-bold">PAGE 06 // ABOUT ME &amp; THE ATELIER</span>
          <span className="text-[#851737]">/</span>
          <span>CURRICULUM VITAE &amp; ATELIER PROFILE</span>
        </div>
        <div className="flex items-center gap-4 text-[#540D21]">
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
        <div className="lg:col-span-12 flex flex-col justify-between space-y-4 text-left p-6 sm:p-7 bg-[#EAE0CD] border-2 border-[#540D21] shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-md">
          {/* Subtle Hairline Frame */}
          <div className="absolute inset-1.5 border border-[#540D21]/20 pointer-events-none" />

          {/* Plaque Header */}
          <div className="border-b border-[#DECFC0] pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl sm:text-4xl font-avonia font-normal tracking-normal text-[#540D21]">
                Shatma Aaliya
              </h3>
              <span className="px-2 py-0.5 bg-[#540D21] text-[#FAF6EE] font-mono text-[9px] font-bold tracking-widest uppercase">
                EXPERIENCE &amp; SKILLS
              </span>
            </div>
            <div className="text-[12px] font-mono text-[#851737] font-bold tracking-widest uppercase pt-1">
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
                className={`px-2.5 py-1 text-[10px] font-mono uppercase font-bold tracking-wider transition-all border cursor-pointer ${
                  plaqueTab === tab.id
                    ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] shadow-[0_0_12px_rgba(84,13,33,0.35)]'
                    : 'bg-[#EFE6D5] text-[#241217]/80 hover:text-[#540D21] border-[#DECFC0]'
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
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center justify-between">
                  <span>EXPERIENCES &amp; WORKSHOPS</span>
                  <span className="text-[9px] font-normal text-[#851737]">Click to open</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {experienceWorkshops.map((exp, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowFullCV(true);
                        setDossierTab('workshops');
                        setActiveItem(exp);
                        document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2 py-1 bg-[#EFE6D5] hover:bg-[#540D21] hover:text-[#FAF6EE] text-[#241217] border border-[#DECFC0] text-[11px] font-mono font-medium transition-colors inline-flex items-center gap-1 shadow-sm cursor-pointer"
                      title={`Click to explore ${exp}`}
                    >
                      <span className="text-[#540D21]">✦</span>
                      <span>{exp}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-2 text-[11px] font-mono text-[#241217] border-t border-[#DECFC0] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#540D21] shrink-0" />
                    <span>Neelgar Atelier · Haute Couture Apprentice (2024—Present)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#540D21] shrink-0" />
                    <span>Indus University Design Studios · Craft Researcher</span>
                  </div>
                </div>
              </div>
            )}

            {plaqueTab === 'skills' && (
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center justify-between">
                  <span>DIGITAL &amp; TACTILE HARD-SKILLS</span>
                  <span className="text-[9px] font-normal text-[#851737]">Click to open</span>
                </div>
                {/* CLO3D Highlight Feature */}
                <button
                  onClick={() => {
                    setShowFullCV(true);
                    setDossierTab('skills');
                    setActiveItem('CLO3D');
                    document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full p-2 bg-[#540D21] text-[#FAF6EE] text-xs font-mono font-bold flex items-center justify-between hover:bg-[#6E112B] transition-colors shadow-sm cursor-pointer"
                  title="CLO3D 3D Garment Simulation"
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#FAF6EE]" />
                    <span>CLO3D (3D Garment Simulation)</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 bg-[#FAF6EE] text-[#540D21] font-bold">
                    ACTIVE
                  </span>
                </button>
                <div className="flex flex-wrap gap-1.5">
                  {hardSkills.filter(s => !s.startsWith("CLO3D")).map((skill, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowFullCV(true);
                        setDossierTab('skills');
                        setActiveItem(skill);
                        document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2 py-1 bg-[#EFE6D5] hover:bg-[#540D21] hover:text-[#FAF6EE] text-[#241217] border border-[#DECFC0] text-[11px] font-mono font-medium transition-colors inline-flex items-center gap-1 shadow-sm cursor-pointer"
                    >
                      <span className="text-[#540D21]">✦</span>
                      <span>{skill}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {plaqueTab === 'dyeing' && (
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center justify-between">
                  <span>NATURAL DYEING ALCHEMY</span>
                  <span className="text-[9px] font-normal text-[#851737]">5 Techniques</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {dyeingSkills.map((dye, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowFullCV(true);
                        setDossierTab('dyeing');
                        setActiveItem(dye);
                        document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-2 bg-[#EFE6D5] text-[#540D21] border border-[#DECFC0] hover:border-[#540D21] text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Palette className="w-3.5 h-3.5 text-[#540D21]" />
                      <span>{dye}</span>
                    </button>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-[#851737] pt-1 italic">
                  Botanical indigo baths, wax batik, Japanese shibori and mineral discharge.
                </div>
              </div>
            )}

            {plaqueTab === 'personal' && (
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center justify-between">
                  <span>PERSONAL SKILLS RATING</span>
                  <span className="text-[9px] font-bold text-[#851737]">5-STAR SYSTEM</span>
                </div>
                <div className="space-y-1">
                  {personalSkills.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowFullCV(true);
                        setDossierTab('personal' as any);
                        setActiveItem(item.skill);
                        document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full flex items-center justify-between text-[11px] bg-[#EFE6D5] hover:bg-[#241A13] border border-[#DECFC0] text-[#241217] px-2.5 py-1.5 cursor-pointer transition-colors"
                    >
                      <span className="font-mono font-semibold">{item.skill}</span>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3.5 h-3.5 ${
                              star <= item.rating
                                ? "text-[#540D21] fill-[#540D21]"
                                : "text-[#DECFC0] fill-transparent"
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
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#540D21] font-bold flex items-center justify-between">
                  <span>ATELIER INTERNSHIPS</span>
                  <span className="text-[9px] font-bold text-[#851737]">{internships.length} PAPEL</span>
                </div>
                <div className="space-y-1.5">
                  {internships.map((intern, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowFullCV(true);
                        setDossierTab('internships');
                        setActiveItem(intern.organization);
                        document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left p-2.5 bg-[#EFE6D5] border border-[#DECFC0] hover:border-[#540D21] text-xs font-mono transition-all cursor-pointer"
                    >
                      <div className="text-[#540D21] font-bold flex items-center justify-between">
                        <span>{intern.organization}</span>
                        <span className="text-[9px] text-[#851737] bg-[#FAF6EE] px-1.5 py-0.5 border border-[#DECFC0]">{intern.period}</span>
                      </div>
                      <div className="text-[#241217]/85 text-[11px] pt-0.5">{intern.role}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clickable Actions at Bottom */}
          <div className="space-y-2 pt-2 border-t border-[#DECFC0]">
            <button
              onClick={() => {
                setShowFullCV(true);
                document.getElementById('manifesto-dossier-tray')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2.5 px-3 bg-[#540D21] hover:bg-[#6E112B] text-[#FAF6EE] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              data-cursor="pointer"
            >
              <span>Explore Full CV Below</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF6EE]" />
            </button>

            <button
              onClick={() => setShowFullCV(!showFullCV)}
              className="w-full py-1.5 px-3 bg-[#EFE6D5] hover:bg-[#241A13] text-[#540D21] text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#DECFC0] cursor-pointer"
              data-cursor="pointer"
            >
              <span>{showFullCV ? 'Hide Credentials Drawer' : 'Expand Credentials Drawer'}</span>
              {showFullCV ? <ChevronUp className="w-3 h-3 text-[#540D21]" /> : <ChevronDown className="w-3 h-3 text-[#540D21]" />}
            </button>
          </div>
        </div>

      </div>

      {/* Expandable Comprehensive CV & Skills Dossier Tray */}
      <AnimatePresence>
        {showFullCV && (
          <motion.div
            id="manifesto-dossier-tray"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto mt-12 bg-[#EAE0CD] border-2 border-[#540D21] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] relative overflow-hidden"
          >
            {/* Header with Designer Identity, Contact & Multilingual Details */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#DECFC0] gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] uppercase tracking-[0.25em] font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#540D21] shadow-[0_0_8px_#540D21]" />
                  <span>CURRICULUM VITAE // COMPLETE INTERACTIVE DOSSIER</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#241217] font-bold pt-1">
                  SHATMA AALIYA — Fashion Designer
                </h3>
                <div className="text-xs font-mono text-[#851737] pt-1">
                  {designerLocation} • Phone: {designerPhone} • {designerEmail}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#540D21]">
                <span className="px-2.5 py-1 bg-[#EFE6D5] border border-[#DECFC0] text-[#241217]">
                  Language (Multilingual):
                </span>
                {languagesList.map((lang, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-[#540D21] text-[#FAF6EE] font-bold text-[10px]">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Clickable Dossier Category Filter Tabs & Active Selected Indicator */}
            <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DECFC0] pb-6">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Credentials' },
                  { id: 'internships', label: `Internships & Atelier (${internships.length})` },
                  { id: 'skills', label: 'Hard-Skills & CLO3D' },
                  { id: 'dyeing', label: 'Dyeing Alchemy (5)' },
                  { id: 'workshops', label: 'Workshops & Crafts (8)' },
                  { id: 'personal', label: 'Personal (5★)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setDossierTab(tab.id as any)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-bold transition-all border cursor-pointer ${
                      dossierTab === tab.id
                        ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] shadow-[0_0_12px_rgba(84,13,33,0.35)]'
                        : 'bg-[#EFE6D5] text-[#241217]/80 hover:text-[#540D21] border-[#DECFC0]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeItem && (
                <div className="flex items-center gap-2 text-xs font-mono bg-[#EFE6D5] text-[#540D21] px-3 py-1.5 border border-[#540D21]/60">
                  <span className="font-bold">✦ Active Focus: {activeItem}</span>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="ml-2 text-[#241217] hover:text-[#540D21] cursor-pointer"
                    title="Clear filter"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Grid of ALL Sections Present in the PDF & Apprenticeships */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              
              {/* 1. INTERNSHIPS & ATELIER APPRENTICESHIP */}
              {(dossierTab === 'all' || dossierTab === 'internships') && (
                <div className="lg:col-span-2 space-y-4 p-5 bg-[#EFE6D5] border-2 border-[#540D21] relative shadow-lg">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                      <Briefcase className="w-4 h-4 text-[#540D21]" />
                      <span>INTERNSHIPS &amp; ATELIER APPRENTICESHIP</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#540D21] text-[#FAF6EE] text-[9px] font-mono font-bold uppercase tracking-widest">
                      {internships.length} COUTURE ROLE{internships.length > 1 ? 'S' : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-1">
                    {internships.map((intern, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveItem(intern.organization)}
                        className={`p-4 bg-[#FAF6EE] border transition-all cursor-pointer space-y-3 ${
                          activeItem === intern.organization
                            ? 'border-[#540D21] ring-1 ring-[#540D21] bg-[#EFE6D5]'
                            : 'border-[#DECFC0] hover:border-[#540D21]/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                            {intern.organization}
                          </span>
                          <span className="text-[10px] font-mono text-[#851737] bg-[#EFE6D5] px-2 py-0.5 border border-[#DECFC0]">
                            {intern.period}
                          </span>
                        </div>
                        <h4 className="text-sm font-serif font-bold text-[#241217]">
                          {intern.role}
                        </h4>
                        <p className="text-xs text-[#241217]/85 leading-relaxed font-normal">
                          {intern.summary}
                        </p>
                        <div className="space-y-1.5 pt-1">
                          {intern.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="text-[11px] text-[#241217]/90 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#540D21] shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. PERSONAL SKILLS */}
              {(dossierTab === 'all' || dossierTab === 'personal') && (
                <div className="space-y-4 p-5 bg-[#EFE6D5] border border-[#540D21]/70 relative">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                      <Star className="w-4 h-4 text-[#540D21] fill-[#540D21]" />
                      <span>PERSONAL SKILLS</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#540D21]/80 tracking-widest uppercase">
                      5-STAR SYSTEM
                    </span>
                  </div>
                  <div className="space-y-2.5 pt-1">
                    {personalSkills.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveItem(item.skill)}
                        className={`flex items-center justify-between text-xs p-2 transition-all cursor-pointer ${
                          activeItem === item.skill
                            ? 'bg-[#FAF6EE] border border-[#540D21] text-[#540D21]'
                            : 'hover:bg-[#FAF6EE] text-[#241217]'
                        }`}
                      >
                        <span className="font-medium">{item.skill}</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3.5 h-3.5 ${
                                star <= item.rating
                                  ? "text-[#540D21] fill-[#540D21]"
                                  : "text-[#DECFC0] fill-transparent"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. HARD SKILLS & CLO3D SIMULATION */}
              {(dossierTab === 'all' || dossierTab === 'skills') && (
                <div className="space-y-4 p-5 bg-[#EFE6D5] border border-[#540D21]/70 relative">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                      <Scissors className="w-4 h-4 text-[#540D21]" />
                      <span>HARD-SKILLS</span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-[#540D21] text-[#FAF6EE] text-[9px] font-mono font-bold uppercase tracking-widest">
                      CLO3D ADDED
                    </span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <button
                      onClick={() => setActiveItem('CLO3D')}
                      className={`w-full p-2.5 bg-[#540D21] text-[#FAF6EE] font-bold text-xs flex items-center justify-between shadow cursor-pointer transition-transform hover:scale-[1.01] ${
                        activeItem === 'CLO3D' ? 'ring-2 ring-white' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#FAF6EE]" />
                        <span>CLO3D (3D Garment Simulation)</span>
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-wider bg-[#FAF6EE] text-[#540D21] px-1.5 py-0.5">
                        FEATURED
                      </span>
                    </button>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {hardSkills.filter(s => !s.startsWith("CLO3D")).map((skill, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveItem(skill)}
                          className={`text-xs font-mono px-2.5 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 ${
                            activeItem === skill
                              ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] font-bold'
                              : 'bg-[#FAF6EE] text-[#241217] border-[#DECFC0] hover:border-[#540D21]'
                          }`}
                        >
                          <span className="text-[#540D21]">✦</span>
                          <span>{skill}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. DYEING-SKILLS / TEXTILE ALCHEMY */}
              {(dossierTab === 'all' || dossierTab === 'dyeing') && (
                <div className="space-y-4 p-5 bg-[#EFE6D5] border border-[#DECFC0]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                      <Palette className="w-4 h-4 text-[#540D21]" />
                      <span>DYEING-SKILLS</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#851737] tracking-widest uppercase">
                      TEXTILE ALCHEMY
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {dyeingSkills.map((dye, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveItem(dye)}
                        className={`text-xs font-mono px-3 py-1.5 border flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
                          activeItem === dye
                            ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] font-bold'
                            : 'bg-[#FAF6EE] text-[#540D21] border-[#DECFC0] hover:border-[#540D21]'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-[#540D21]" />
                        <span>{dye}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] font-mono text-[#851737] pt-1 italic">
                    Specialized in chemical-free resists, slow bath indigo extraction, and mineral discharge techniques.
                  </p>
                </div>
              )}

              {/* 5. EXPERIENCE & WORKSHOPS */}
              {(dossierTab === 'all' || dossierTab === 'workshops') && (
                <div className="space-y-4 p-5 bg-[#EFE6D5] border border-[#DECFC0]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-[#540D21]" />
                      <span>EXPERIENCE &amp; WORKSHOPS</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#851737] tracking-widest uppercase">
                      8 CRAFTS
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {experienceWorkshops.map((exp, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveItem(exp)}
                        className={`p-2 border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                          activeItem === exp
                            ? 'bg-[#540D21] text-[#FAF6EE] border-[#540D21] font-bold'
                            : 'bg-[#FAF6EE] text-[#241217] border-[#DECFC0] hover:border-[#540D21]'
                        }`}
                      >
                        <span className="text-[#540D21] font-bold">✦</span>
                        <span>{exp}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. SOFT-SKILLS */}
              {(dossierTab === 'all' || dossierTab === 'personal') && (
                <div className="space-y-4 p-5 bg-[#EFE6D5] border border-[#DECFC0]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#DECFC0]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#540D21] font-bold uppercase tracking-wider">
                      <Heart className="w-4 h-4 text-[#540D21]" />
                      <span>SOFT-SKILLS</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#851737] tracking-widest uppercase">
                      VALUES
                    </span>
                  </div>
                  <ul className="space-y-2 pt-1">
                    {softSkills.map((soft, idx) => (
                      <li
                        key={idx}
                        onClick={() => setActiveItem(soft)}
                        className={`p-2 border text-xs flex items-start gap-2 cursor-pointer transition-colors ${
                          activeItem === soft
                            ? 'bg-[#EFE6D5] border-[#540D21] text-[#540D21]'
                            : 'bg-[#FAF6EE] border-[#DECFC0] text-[#241217]'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#540D21] shrink-0 mt-0.5" />
                        <span>{soft}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Bottom Footer Callout with Quick Commission Actions */}
            <div className="mt-8 pt-6 border-t border-[#DECFC0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <div className="text-[#851737]">
                SHATMA AALIYA · PORTFOLIO CV // INDUS UNIVERSITY · AHMEDABAD &amp; MUMBAI
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${designerPhone}`}
                  className="px-4 py-2 bg-[#FAF6EE] border border-[#540D21] text-[#540D21] hover:bg-[#540D21] hover:text-[#FAF6EE] font-bold uppercase transition-colors"
                >
                  Call {designerPhone}
                </a>
                <button
                  onClick={onOpenInquiry}
                  className="px-4 py-2 bg-[#540D21] text-[#FAF6EE] font-bold uppercase transition-colors hover:bg-[#6E112B]"
                >
                  Commission / Inquire
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
