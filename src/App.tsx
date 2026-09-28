/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PortfolioData, Project } from './types';
import { initialPortfolioData, initialProjects, initialTestimonials } from './data/portfolioData';
import { AtelierPalette } from './data/colorPalettes';
import { getInitialTheme, applyThemeToDocument } from './utils/themeManager';
import { CustomCursor } from './components/CustomCursor';
import { OrbitalBackground } from './components/OrbitalBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AtelierPhotoMoodboardPage } from './components/AtelierPhotoMoodboardPage';
import { KineticManifestoPage } from './components/KineticManifestoPage';
import { ManifestoDualArchPage } from './components/ManifestoDualArchPage';
import { FeedbacksCreamPage } from './components/FeedbacksCreamPage';
import { BenefitsStatsPage } from './components/BenefitsStatsPage';
import { ServicePackagesPage } from './components/ServicePackagesPage';
import { ProcessHowItWorksPage } from './components/ProcessHowItWorksPage';
import { MyWorkReelsPage } from './components/MyWorkReelsPage';
import { ObjectionStatsPage } from './components/ObjectionStatsPage';
import { ContactIvoryPage } from './components/ContactIvoryPage';
import { FloatingContactDock } from './components/FloatingContactDock';
import { ProjectModal } from './components/ProjectModal';
import { InquiryModal } from './components/InquiryModal';
import { QuickCustomizerModal } from './components/QuickCustomizerModal';
import { EditorialLookbookDeckModal } from './components/EditorialLookbookDeckModal';
import { ConceptLookbookModal } from './components/ConceptLookbookModal';
import { ColorInspirationModal } from './components/ColorInspirationModal';

export default function App() {
  // Color inspiration & theme state
  const [activePalette, setActivePalette] = useState<AtelierPalette>(getInitialTheme);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  useEffect(() => {
    applyThemeToDocument(activePalette);
  }, [activePalette]);

  const handleSelectPalette = (newPalette: AtelierPalette) => {
    setActivePalette(newPalette);
    applyThemeToDocument(newPalette);
  };
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('shatma_portfolio_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          ...parsed,
          contactEmail: parsed.contactEmail || initialPortfolioData.contactEmail,
          whatsappNumber: parsed.whatsappNumber || initialPortfolioData.whatsappNumber,
          callingNumber: initialPortfolioData.callingNumber,
          location: initialPortfolioData.location,
          aboutMe: initialPortfolioData.aboutMe,
          personalSkills: initialPortfolioData.personalSkills,
          educationEntries: initialPortfolioData.educationEntries,
          experienceWorkshops: initialPortfolioData.experienceWorkshops,
          dyeingSkills: initialPortfolioData.dyeingSkills,
          hardSkills: initialPortfolioData.hardSkills,
          softSkills: initialPortfolioData.softSkills,
          languagesList: initialPortfolioData.languagesList,
          internships: initialPortfolioData.internships,
          skills: initialPortfolioData.skills,
          socials: {
            ...initialPortfolioData.socials,
            ...(parsed.socials || {})
          }
        };
      }
    } catch (e) {
      console.error('Failed to load portfolio cache', e);
    }
    return initialPortfolioData;
  });

  const [projects] = useState<Project[]>(initialProjects);
  const [testimonials] = useState(initialTestimonials);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [isConceptLookbookOpen, setIsConceptLookbookOpen] = useState(false);
  const [conceptLookbookInitialSlide, setConceptLookbookInitialSlide] = useState(0);

  const handleOpenConceptLookbook = (initialSlide: number = 0) => {
    setConceptLookbookInitialSlide(initialSlide);
    setIsConceptLookbookOpen(true);
  };

  const handleSaveCustomizer = (newData: PortfolioData) => {
    setPortfolioData(newData);
    try {
      localStorage.setItem('shatma_portfolio_data', JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save portfolio cache', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#241217] font-sans selection:bg-[#540D21] selection:text-[#FAF6EE] relative overflow-x-hidden">
      {/* Volumetric golden light & amber smoke atmosphere */}
      <OrbitalBackground />

      {/* Haute couture precision cursor */}
      <CustomCursor />

      {/* Top Navigation Bar: Slide presentation navigation */}
      <Navbar
        portfolioData={portfolioData}
        activePalette={activePalette}
        onOpenColorModal={() => setIsColorModalOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenDeck={() => setIsDeckOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Sequential Presentation Flow */}
      <main className="relative z-10">
        {/* SLIDE 01: Hero Cover Presentation */}
        <Hero
          portfolioData={portfolioData}
          onOpenColorModal={() => setIsColorModalOpen(true)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenDeck={() => setIsDeckOpen(true)}
          onOpenConceptLookbook={() => handleOpenConceptLookbook(1)}
        />

        {/* SLIDE 02: Kinetic Storytelling Manifesto */}
        <KineticManifestoPage
          activePalette={activePalette}
          portfolioData={portfolioData}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenDeck={() => setIsDeckOpen(true)}
          onOpenDetail={(slideIndex = 0) => handleOpenConceptLookbook(slideIndex)}
        />

        {/* SLIDE 03: Inspiração de Cores & Materialidade do Atelier */}
        <AtelierPhotoMoodboardPage
          activePalette={activePalette}
          onOpenColorModal={() => setIsColorModalOpen(true)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* SLIDE 04: Dual Arch Quem Sou Eu & Atelier Profile Dossier */}
        <ManifestoDualArchPage
          portfolioData={portfolioData}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenDetail={(slideIndex = 0) => handleOpenConceptLookbook(slideIndex)}
        />

        {/* SLIDE 05: Feedbacks & Mentors Commendations */}
        <FeedbacksCreamPage
          testimonials={testimonials}
        />

        {/* SLIDE 06: Benefícios do Atelier & 93% Stat */}
        <BenefitsStatsPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* SLIDE 07: Pacotes de Serviços & Commission Tiers */}
        <ServicePackagesPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* SLIDE 08: Como Funciona Methodology */}
        <ProcessHowItWorksPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* SLIDE 09: My Work & Runway Video Reels */}
        <MyWorkReelsPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* SLIDE 10: Validação & Diagnóstico */}
        <ObjectionStatsPage
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* SLIDE 11: Vamos Trabalhar Juntos & Contato */}
        <ContactIvoryPage
          portfolioData={portfolioData}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      </main>

      {/* Floating Quick Action & Slide Progress Dock */}
      <FloatingContactDock
        portfolioData={portfolioData}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenColorModal={() => setIsColorModalOpen(true)}
      />

      {/* Project Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Inquiry & Bespoke Commission Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        portfolioData={portfolioData}
      />

      {/* Quick Customizer Modal */}
      <QuickCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        portfolioData={portfolioData}
        onSave={handleSaveCustomizer}
      />

      {/* Interactive Editorial Lookbook Deck Modal */}
      <EditorialLookbookDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        portfolioData={portfolioData}
        projects={projects}
        testimonials={testimonials}
        onOpenInquiry={() => {
          setIsDeckOpen(false);
          setIsInquiryOpen(true);
        }}
      />

      {/* Interactive Concept Note, Theme Board & Board Lookbook Modal */}
      <ConceptLookbookModal
        isOpen={isConceptLookbookOpen}
        onClose={() => setIsConceptLookbookOpen(false)}
        portfolioData={portfolioData}
        initialSlideIndex={conceptLookbookInitialSlide}
        onOpenInquiry={() => {
          setIsConceptLookbookOpen(false);
          setIsInquiryOpen(true);
        }}
      />

      {/* Atelier Color Inspiration & Chromatic Materiality Modal */}
      <ColorInspirationModal
        isOpen={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
        activePalette={activePalette}
        onSelectPalette={handleSelectPalette}
      />
    </div>
  );
}
