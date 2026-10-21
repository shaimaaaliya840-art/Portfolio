import React, { useState } from 'react';
import { Palette, Star, Briefcase, Cpu } from 'lucide-react';
import { PortfolioData } from '../types';
import neelgarCertificate from '../assets/images/neelgar_certificate.jpg';
import cyanotypeBanner from '../assets/images/cyanotype/cyanotype_banner.jpg';
import cyanotypeNews from '../assets/images/cyanotype/cyanotype_record_news.png';
import cyanotypeExposure from '../assets/images/cyanotype/cyanotype_sun_exposure.jpg';
import cyanotypeComp from '../assets/images/cyanotype/cyanotype_composition.jpg';
import cyanotypeChems from '../assets/images/cyanotype/cyanotype_chemicals.jpg';
import lldcMannequins from '../assets/images/tailoring-geometry/lldc_mannequins_display.jpg';
import lldcPatternsBook from '../assets/images/tailoring-geometry/lldc_patterns_of_fashion_book.jpg';
import lldcDraftingBook from '../assets/images/tailoring-geometry/lldc_historical_drafting_book.jpg';
import lldcPatternDesk from '../assets/images/tailoring-geometry/lldc_pattern_cutting_desk.png';
import lldcPaperToile from '../assets/images/tailoring-geometry/lldc_3d_paper_toile.jpg';
import lldcPaperMockup from '../assets/images/tailoring-geometry/lldc_geometric_paper_mockup.png';
import seamstressCert from '../assets/images/seamstress-secret/seamstress_certificate.jpg';
import seamstressRuff from '../assets/images/seamstress-secret/seamstress_linen_ruff.png';
import seamstressLecture from '../assets/images/seamstress-secret/seamstress_lecture_presentation.png';
import seamstressStitch from '../assets/images/seamstress-secret/seamstress_hand_stitching.jpg';
import seamstressBeeswax from '../assets/images/seamstress-secret/seamstress_beeswax_tools.png';
import kutchYarnSkeins from '../assets/images/kutch-weaving/kutch_dyed_yarn_skeins.jpg';
import kutchArtisanWeaving from '../assets/images/kutch-weaving/kutch_artisan_handloom_weaving.jpg';
import kutchIndigoVat from '../assets/images/kutch-weaving/kutch_indigo_vat_immersion.jpg';
import kutchMasterWeaver from '../assets/images/kutch-weaving/kutch_master_weaver_traditional_border.jpg';
import kutchTanaBana from '../assets/images/kutch-weaving/kutch_tana_bana_warping_atelier.jpg';
import { X, ExternalLink, Sparkles } from 'lucide-react';

interface ManifestoDualArchPageProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const ManifestoDualArchPage: React.FC<ManifestoDualArchPageProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [plaqueTab, setPlaqueTab] = useState<'experience' | 'skills' | 'dyeing' | 'personal' | 'internships'>('experience');
  const [selectedWorkshop, setSelectedWorkshop] = useState<'seamstress' | 'tailoring' | 'weaving' | 'cyanotype'>('seamstress');
  const [activeWorkshopImg, setActiveWorkshopImg] = useState<string>(seamstressCert);
  const [workshopLightbox, setWorkshopLightbox] = useState<{ src: string; caption: string } | null>(null);

  const personalSkills = portfolioData.personalSkills || [
    { skill: "Draping" },
    { skill: "Hand Illustration" },
    { skill: "Storytelling" },
    { skill: "Styling & makeup" },
    { skill: "Market analyst" },
    { skill: "Material Sourcing" },
    { skill: "Pattern making" },
  ];

  const experienceWorkshops = portfolioData.experienceWorkshops || [
    "The Seamstress's Secret (The School of Historical Dress & LLDC)",
    "The Geometry & Structure of Tailoring (LLDC Kutch)",
    "Cyanotype Printing", "Clay & Pottery Craft", "Stone & Wood Carving",
    "Sculpting & Form Study", "Batik Resist Dyeing", "Shibori & Tie-Dye",
    "Silhouette & Form Art", "Basketry & Fiber Weaving"
  ];

  const dyeingSkills = portfolioData.dyeingSkills || [
    "Tie-Dye Alchemy", "Eco Dyeing Baths", "Wax Batik Technique",
    "Shibori Resist Folds", "Natural Plant Extractions"
  ];

  const hardSkills = portfolioData.hardSkills || [
    "CLO3D (3D Garment Simulation)",
    "Pattern Making & Drafting", "Garment Construction",
    "Creative Direction", "Trend Research & Forecasting",
    "Styling & Runway Curation", "Moodboard & Theme Conceptualization",
    "Fabric Sourcing & Metallurgy", "Craft & Surface Exploration",
    "Knit & Crochet Work", "Hand & Machine Embroidery",
    "Fashion Photography & Framing"
  ];

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
              { id: 'experience', label: `Workshops (${experienceWorkshops.length})` },
              { id: 'skills', label: 'Hard-Skills & Software' },
              { id: 'dyeing', label: 'Dyeing Alchemy' },
              { id: 'personal', label: 'Personal' },
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
              <div className="space-y-3">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>WORKSHOPS</span>
                  <span className="text-[0.625rem] text-[#FAF6EE]/75 font-mono">HANDS-ON TEXTILE ARTS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {experienceWorkshops.map((exp, idx) => {
                    const isSeamstress = exp.includes('Seamstress');
                    const isTailoring = exp.includes('Tailoring') || exp.includes('LLDC');
                    const isWeaving = exp.includes('Weaving') || exp.includes('Bhujodi');
                    const isCyanotype = exp.includes('Cyanotype');
                    const isFeatured = isSeamstress || isTailoring || isWeaving || isCyanotype;
                    const isSelected = 
                      (isSeamstress && selectedWorkshop === 'seamstress') ||
                      (isTailoring && selectedWorkshop === 'tailoring') ||
                      (isWeaving && selectedWorkshop === 'weaving') ||
                      (isCyanotype && selectedWorkshop === 'cyanotype');

                    return (
                      <button
                        key={idx}
                        onClick={isFeatured ? () => {
                          if (isSeamstress) {
                            setSelectedWorkshop('seamstress');
                            setActiveWorkshopImg(seamstressCert);
                          } else if (isTailoring) {
                            setSelectedWorkshop('tailoring');
                            setActiveWorkshopImg(lldcMannequins);
                          } else if (isWeaving) {
                            setSelectedWorkshop('weaving');
                            setActiveWorkshopImg(kutchMasterWeaver);
                          } else if (isCyanotype) {
                            setSelectedWorkshop('cyanotype');
                            setActiveWorkshopImg(cyanotypeBanner);
                          }
                        } : undefined}
                        className={`px-2 py-1 text-[0.6875rem] font-mono font-medium transition-all inline-flex items-center gap-1 shadow-sm border ${
                          isSelected
                            ? 'bg-[#FAF6EE] text-[#540D21] border-[#FAF6EE] font-bold cursor-pointer'
                            : isFeatured
                            ? 'bg-[#FAF6EE]/20 hover:bg-[#FAF6EE]/40 text-[#FAF6EE] border-[#FAF6EE]/40 cursor-pointer'
                            : 'bg-[#FAF6EE]/10 text-[#FAF6EE]/80 border-[#FAF6EE]/20 cursor-default'
                        }`}
                        title={isFeatured ? `Click to view ${exp} archive & photos` : exp}
                      >
                        <span className="opacity-70">✦</span>
                        <span>{exp}</span>
                        {isFeatured && (
                          <span className={`text-[0.5625rem] px-1 py-0.2 font-bold rounded-xs ml-0.5 ${
                            isSelected ? 'bg-[#540D21] text-[#FAF6EE]' : 'bg-[#FAF6EE]/30 text-[#FAF6EE]'
                          }`}>
                            {isSeamstress ? 'LONDON & LLDC' : isTailoring ? 'LLDC KUTCH' : isWeaving ? 'BHUJODI' : 'RECORD'}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Workshop Showcase Card (Seamstress, Tailoring, or Cyanotype) */}
                {selectedWorkshop === 'seamstress' ? (
                  <div className="mt-3 border-t border-[#FAF6EE]/20 pt-3 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E5B887] animate-pulse" />
                        <span>THE SEAMSTRESS'S SECRET · SCHOOL OF HISTORICAL DRESS (LONDON) &amp; LLDC</span>
                      </div>
                      <span className="text-[#FAF6EE]/80 bg-[#FAF6EE]/10 px-1.5 py-0.5 border border-[#FAF6EE]/20 text-[0.5625rem]">
                        PATTERNS OF FASHION GLOBAL SYMPOSIUM · 4TH OCT 2026
                      </span>
                    </div>

                    {/* Main Active Photo with Zoom Preview Trigger */}
                    <div 
                      onClick={() => setWorkshopLightbox({
                        src: activeWorkshopImg,
                        caption: "Pattern of Fashion Global Symposium at LLDC, Bhuj · Under Pawl Tomaszewski (Traditional Innerwear Construction)"
                      })}
                      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden border-2 border-[#FAF6EE]/30 group cursor-pointer shadow-lg bg-black/40"
                      title="Click to view full photo"
                    >
                      <img
                        src={activeWorkshopImg}
                        alt="The Seamstress's Secret Workshop"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between pointer-events-none">
                        <div className="text-left font-mono">
                          <div className="text-[0.6875rem] font-bold text-[#FAF6EE]">
                            LLDC, Bhuj · The Secret of Seamstress
                          </div>
                          <div className="text-[0.5625rem] text-[#FAF6EE]/80">
                            Pattern of Fashion Global Symposium · Under Pawl Tomaszewski (Traditional Innerwear Construction)
                          </div>
                        </div>
                        <span className="text-[0.625rem] font-mono text-[#FAF6EE] bg-black/60 px-2 py-0.5 rounded border border-white/20">
                          View Full ↗
                        </span>
                      </div>
                    </div>

                    {/* 5-Photo Thumbnail Strip */}
                    <div className="grid grid-cols-5 gap-1.5">
                      {[
                        { img: seamstressCert, label: 'Certificate' },
                        { img: seamstressRuff, label: 'Linen Ruff' },
                        { img: seamstressLecture, label: 'Lecture' },
                        { img: seamstressStitch, label: 'Hand Stitch' },
                        { img: seamstressBeeswax, label: 'Beeswax Tools' }
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveWorkshopImg(item.img);
                          }}
                          className={`relative aspect-[4/3] rounded overflow-hidden border transition-all cursor-pointer ${
                            activeWorkshopImg === item.img
                              ? 'border-[#FAF6EE] ring-2 ring-[#FAF6EE] scale-[1.02]'
                              : 'border-[#FAF6EE]/25 opacity-70 hover:opacity-100'
                          }`}
                          title={item.label}
                        >
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[0.5rem] font-mono text-[#FAF6EE] truncate px-0.5 py-0.2 text-center">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : selectedWorkshop === 'weaving' ? (
                  <div className="mt-3 border-t border-[#FAF6EE]/20 pt-3 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                        <span>KUTCH HANDLOOM WEAVING &amp; NATURAL DYEING · BHUJODI HERITAGE</span>
                      </div>
                      <span className="text-[#FAF6EE]/80 bg-[#FAF6EE]/10 px-1.5 py-0.5 border border-[#FAF6EE]/20 text-[0.5625rem]">
                        TRADITIONAL EXTRA-WEFT &amp; PIT LOOM TEXTILES
                      </span>
                    </div>

                    {/* Main Active Photo with Zoom Preview Trigger */}
                    <div 
                      onClick={() => setWorkshopLightbox({
                        src: activeWorkshopImg,
                        caption: 'Kutch Handloom Weaving Atelier · Master artisans, traditional pit loom weaving with extra-weft motifs, raw yarn spinning, and natural indigo dyeing'
                      })}
                      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden border-2 border-[#FAF6EE]/30 group cursor-pointer shadow-lg bg-black/40"
                      title="Click to view full photo"
                    >
                      <img
                        src={activeWorkshopImg}
                        alt="Kutch Handloom Weaving Workshop"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between pointer-events-none">
                        <div className="text-left font-mono">
                          <div className="text-[0.6875rem] font-bold text-[#FAF6EE]">
                            Kutch, Gujarat · Handloom Weaving &amp; Natural Indigo Dyeing
                          </div>
                          <div className="text-[0.5625rem] text-[#FAF6EE]/80">
                            Master Vankar artisans · Pit-loom extra-weft insertion, tana-bana warping, and organic vat fermentation
                          </div>
                        </div>
                        <span className="text-[0.625rem] font-mono text-[#FAF6EE] bg-black/60 px-2 py-0.5 rounded border border-white/20">
                          View Full ↗
                        </span>
                      </div>
                    </div>

                    {/* 5-Photo Thumbnail Strip */}
                    <div className="grid grid-cols-5 gap-1.5">
                      {[
                        { img: kutchMasterWeaver, label: 'Master Weaver' },
                        { img: kutchArtisanWeaving, label: 'Handloom' },
                        { img: kutchYarnSkeins, label: 'Dyed Skeins' },
                        { img: kutchIndigoVat, label: 'Indigo Vat' },
                        { img: kutchTanaBana, label: 'Warping Atelier' }
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveWorkshopImg(item.img);
                          }}
                          className={`relative aspect-[4/3] rounded overflow-hidden border transition-all cursor-pointer ${
                            activeWorkshopImg === item.img
                              ? 'border-[#FAF6EE] ring-2 ring-[#FAF6EE] scale-[1.02]'
                              : 'border-[#FAF6EE]/25 opacity-70 hover:opacity-100'
                          }`}
                          title={item.label}
                        >
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[0.5rem] font-mono text-[#FAF6EE] truncate px-0.5 py-0.2 text-center">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : selectedWorkshop === 'tailoring' ? (
                  <div className="mt-3 border-t border-[#FAF6EE]/20 pt-3 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E5B887] animate-pulse" />
                        <span>THE GEOMETRY &amp; STRUCTURE OF TAILORING · LLDC [KUTCH]</span>
                      </div>
                      <span className="text-[#FAF6EE]/80 bg-[#FAF6EE]/10 px-1.5 py-0.5 border border-[#FAF6EE]/20 text-[0.5625rem]">
                        HISTORICAL TAILORING ARCHIVE c.1675–1795
                      </span>
                    </div>

                    {/* Main Active Photo with Zoom Preview Trigger */}
                    <div 
                      onClick={() => setWorkshopLightbox({
                        src: activeWorkshopImg,
                        caption: 'Pattern of Fashion Global Symposium at LLDC, Bhuj · Under Jenny Tiramani (The School of Historical Dress London)'
                      })}
                      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden border-2 border-[#FAF6EE]/30 group cursor-pointer shadow-lg bg-black/40"
                      title="Click to view full photo"
                    >
                      <img
                        src={activeWorkshopImg}
                        alt="The Geometry & Structure of Tailoring Workshop at LLDC Kutch"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between pointer-events-none">
                        <div className="text-left font-mono">
                          <div className="text-[0.6875rem] font-bold text-[#FAF6EE]">
                            LLDC, Bhuj · The Geometry &amp; Structure of Tailoring
                          </div>
                          <div className="text-[0.5625rem] text-[#FAF6EE]/80">
                            Pattern of Fashion Global Symposium · Under Jenny Tiramani (The School of Historical Dress London)
                          </div>
                        </div>
                        <span className="text-[0.625rem] font-mono text-[#FAF6EE] bg-black/60 px-2 py-0.5 rounded border border-white/20">
                          View Full ↗
                        </span>
                      </div>
                    </div>

                    {/* 6-Photo Thumbnail Strip */}
                    <div className="grid grid-cols-6 gap-1.5">
                      {[
                        { img: lldcMannequins, label: 'Coats Display' },
                        { img: lldcPatternsBook, label: 'Patterns Book' },
                        { img: lldcDraftingBook, label: '1712 Plates' },
                        { img: lldcPatternDesk, label: 'Cutting Desk' },
                        { img: lldcPaperToile, label: '3D Paper Toile' },
                        { img: lldcPaperMockup, label: 'Origami Fold' }
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveWorkshopImg(item.img);
                          }}
                          className={`relative aspect-[4/3] rounded overflow-hidden border transition-all cursor-pointer ${
                            activeWorkshopImg === item.img
                              ? 'border-[#FAF6EE] ring-2 ring-[#FAF6EE] scale-[1.02]'
                              : 'border-[#FAF6EE]/25 opacity-70 hover:opacity-100'
                          }`}
                          title={item.label}
                        >
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[0.5rem] font-mono text-[#FAF6EE] truncate px-0.5 py-0.2 text-center">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 border-t border-[#FAF6EE]/20 pt-3 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                        <span>CYANOTYPE PRINTING · INDUS WORLD RECORD</span>
                      </div>
                      <span className="text-[#FAF6EE]/80 bg-[#FAF6EE]/10 px-1.5 py-0.5 border border-[#FAF6EE]/20 text-[0.5625rem]">
                        560 FT TEXTILE INSTALLATION
                      </span>
                    </div>

                    {/* Main Active Photo with Zoom Preview Trigger */}
                    <div 
                      onClick={() => setWorkshopLightbox({
                        src: activeWorkshopImg,
                        caption: 'Indus Design School · Monumental Sun Printing Record Workshop'
                      })}
                      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden border-2 border-[#FAF6EE]/30 group cursor-pointer shadow-lg bg-black/40"
                      title="Click to view full photo"
                    >
                      <img
                        src={activeWorkshopImg}
                        alt="Cyanotype Printing Workshop at Indus Design School"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between pointer-events-none">
                        <div className="text-left font-mono">
                          <div className="text-[0.6875rem] font-bold text-[#FAF6EE]">
                            Indus Design School · Monumental Sun Printing Record
                          </div>
                          <div className="text-[0.5625rem] text-[#FAF6EE]/80">
                            Natural sunlight exposure using Potassium Ferricyanide &amp; Ammonium Ferric Citrate
                          </div>
                        </div>
                        <span className="text-[0.625rem] font-mono text-[#FAF6EE] bg-black/60 px-2 py-0.5 rounded border border-white/20">
                          View Full ↗
                        </span>
                      </div>
                    </div>

                    {/* 5-Photo Thumbnail Strip */}
                    <div className="grid grid-cols-5 gap-1.5">
                      {[
                        { img: cyanotypeBanner, label: 'Banner' },
                        { img: cyanotypeNews, label: 'News Record' },
                        { img: cyanotypeExposure, label: 'Sun Exposure' },
                        { img: cyanotypeComp, label: 'Composition' },
                        { img: cyanotypeChems, label: 'Chemicals' }
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveWorkshopImg(item.img);
                          }}
                          className={`relative aspect-[4/3] rounded overflow-hidden border transition-all cursor-pointer ${
                            activeWorkshopImg === item.img
                              ? 'border-[#FAF6EE] ring-2 ring-[#FAF6EE] scale-[1.02]'
                              : 'border-[#FAF6EE]/25 opacity-70 hover:opacity-100'
                          }`}
                          title={item.label}
                        >
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[0.5rem] font-mono text-[#FAF6EE] truncate px-0.5 py-0.2 text-center">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 text-[0.6875rem] font-mono text-[#FAF6EE]/90 border-t border-[#FAF6EE]/20 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#FAF6EE] shrink-0" />
                    <span>Neelgar Atelier · Design & Content Intern (22 May – Aug 2026)</span>
                  </div>
                </div>
              </div>
            )}

            {plaqueTab === 'skills' && (
              <div className="space-y-2.5">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>HARD-SKILLS &amp; SOFTWARE</span>
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
              <div className="space-y-2">
                <div className="text-[0.625rem] font-mono uppercase tracking-widest text-[#FAF6EE] font-bold flex items-center justify-between">
                  <span>PERSONAL SKILLS</span>
                  <span className="text-[0.625rem] font-bold text-[#FAF6EE]/75">{personalSkills.length} SKILLS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalSkills.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 bg-[#FAF6EE]/10 hover:bg-[#FAF6EE]/20 border border-[#FAF6EE]/20 text-[#FAF6EE] text-[0.6875rem] font-mono font-medium transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="opacity-70">✦</span>
                      <span>{item.skill}</span>
                    </div>
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

      {/* Workshop Lightbox Modal */}
      {workshopLightbox && (
        <div 
          onClick={() => setWorkshopLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center bg-[#1A121A] border-2 border-[#FAF6EE]/40 p-2 sm:p-4 shadow-2xl"
          >
            <button
              onClick={() => setWorkshopLightbox(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#540D21] border border-[#FAF6EE] text-[#FAF6EE] flex items-center justify-center hover:bg-[#851737] transition-colors cursor-pointer shadow-lg z-10"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={workshopLightbox.src}
              alt="Workshop Full View"
              className="max-h-[80vh] w-auto max-w-full object-contain border border-[#FAF6EE]/20"
            />
            <div className="pt-2 text-center font-mono text-xs text-[#FAF6EE]/90">
              {workshopLightbox.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
