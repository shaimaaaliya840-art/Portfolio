import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Droplet, Flame, Gem, Layers, Moon, Scissors, Shirt, Sparkles, X, type LucideIcon } from 'lucide-react';

import silkAndStoneCover from '../assets/images/silk-and-stone/silk_and_stone_cover.png';
import masculineFeminineEnergyImg from '../assets/images/silk-and-stone/masculine_feminine_energy.png';
import silkAndStoneMoodboard from '../assets/images/silk-and-stone/silk_and_stone_moodboard.png';
import silkAndStoneSwatchboard from '../assets/images/silk-and-stone/silk_and_stone_swatchboard.png';
import silkAndStoneSilhouetteboard from '../assets/images/silk-and-stone/silk_and_stone_silhouetteboard.png';
import garment1Insp1Sculpture from '../assets/images/silk-and-stone/garment1_insp1_sculpture_seamless.png';
import garment1Insp2Wave from '../assets/images/silk-and-stone/garment1_insp2_wave.png';
import garment1Insp3Silk from '../assets/images/silk-and-stone/garment1_insp3_silk.png';
import garment1Insp4Basalt from '../assets/images/silk-and-stone/garment1_insp4_basalt.png';
import garment1Insp5Slate from '../assets/images/silk-and-stone/garment1_insp5_slate.png';
import silkAndStoneGarment1Inspiration from '../assets/images/silk-and-stone/silk_and_stone_garment1_inspiration.png';
import garment1InspirationLayoutHd from '../assets/images/silk-and-stone/garment1_inspiration_layout_hd.png';
import garment2InspirationLayoutHd from '../assets/images/silk-and-stone/garment2_inspiration_layout_hd.png';
import garment3InspirationLayoutHd from '../assets/images/silk-and-stone/garment3_inspiration_layout_hd.png';
import conceptModelCutout from '../assets/images/silk-and-stone/concept_model_cutout.png';
import conceptNoteExactTransparentHd from '../assets/images/silk-and-stone/concept_note_exact_transparent_hd.png';

import fadingSparkPg1 from '../assets/images/fading-spark/pg 1.png';
import fadingSparkPg2 from '../assets/images/fading-spark/pg 2.png';
import fadingSparkPg3_1 from '../assets/images/fading-spark/pg 3.1.png';
import fadingSparkPg3_2 from '../assets/images/fading-spark/pg 3.2.png';
import fadingSparkPg3_3 from '../assets/images/fading-spark/pg 3.3.png';
import fadingSparkPg3_4 from '../assets/images/fading-spark/pg 3.4.png';
import fadingSparkPg3_5 from '../assets/images/fading-spark/pg 3.5.png';
import fadingSparkPg5 from '../assets/images/fading-spark/pg 5.png';
import fadingSparkBackground from '../assets/images/fading_spark_background.png';
import abhisarikaBackground from '../assets/images/abhisarika_background.png';
import aooBackground from '../assets/images/anatomy_of_ornament_background.png';
import background1941 from '../assets/images/1941/background_1941.jpg';
import bougainvilleaArch from '../assets/images/1941/bougainvillea_arch.png';
import archedWindow from '../assets/images/1941/arched_window.png';
import italianFountain from '../assets/images/1941/italian_fountain.png';
import linenSuitMan from '../assets/images/1941/linen_suit_man.png';
import cafeDeFlore from '../assets/images/1941/cafe_de_flore.png';
import thinkPoetic from '../assets/images/1941/think_poetic.png';
import berlinVest from '../assets/images/1941/inspiration_berlin_vest.png';
import door221b from '../assets/images/1941/inspiration_221b_door.png';
import sherlockWall from '../assets/images/1941/inspiration_sherlock_wall.png';
import henrySherlock from '../assets/images/1941/inspiration_henry_sherlock.png';
import jacketScript from '../assets/images/1941/inspiration_jacket_script.png';
import trouserCuff from '../assets/images/1941/inspiration_trouser_cuff.png';
import pinstripeSuit from '../assets/images/1941/inspiration_pinstripe_suit.png';
import devSewingMachine from '../assets/images/1941/dev_sewing_machine.png';
import devPatternTable from '../assets/images/1941/dev_pattern_table.png';
import devFabricCutting from '../assets/images/1941/dev_fabric_cutting.png';
import devPinstripeJacket from '../assets/images/1941/dev_pinstripe_jacket.png';
import devTextileSwatches from '../assets/images/1941/dev_textile_swatches.png';
import devPaisleyLining from '../assets/images/1941/dev_paisley_lining.png';
import devBrassBuckle from '../assets/images/1941/dev_brass_buckle.png';
import photoEspressoCafe from '../assets/images/1941/photo_espresso_cafe.png';
import photoPinstripeStreet from '../assets/images/1941/photo_pinstripe_street.png';
import photoSpiralStaircase from '../assets/images/1941/photo_spiral_staircase.png';
import photoTieAdjustment from '../assets/images/1941/photo_tie_adjustment.png';
import photoShadowSilhouette from '../assets/images/1941/photo_shadow_silhouette.png';
import lookbookLiningSepia from '../assets/images/1941/lookbook/lookbook_1_lining_sepia.jpg';
import lookbookRailingSepia from '../assets/images/1941/lookbook/lookbook_2_railing_sepia.jpg';
import lookbookEmbroideryScript from '../assets/images/1941/lookbook/lookbook_3_embroidery_script.jpg';
import lookbookCinchSepia from '../assets/images/1941/lookbook/lookbook_4_cinch_sepia.jpg';
import lookbookWhiteBibShirt from '../assets/images/1941/lookbook/lookbook_5_white_bib_shirt.jpg';
import lookbookBougainvilleaWall from '../assets/images/1941/lookbook/lookbook_6_bougainvillea_wall.jpg';
import lookbookStepsSeatedSepia from '../assets/images/1941/lookbook/lookbook_7_steps_seated_sepia.jpg';
import lookbookCinchColor from '../assets/images/1941/lookbook/lookbook_8_cinch_color.jpg';
import lookbookLiningColor from '../assets/images/1941/lookbook/lookbook_9_lining_color.jpg';
import lookbookBougainvilleaCar from '../assets/images/1941/lookbook/lookbook_10_bougainvillea_car.jpg';
import abhisarikaMb2Mirror from '../assets/images/abhisarika/abhisarika_mb2_mirror.png';
import abhisarikaMb2Chandelier from '../assets/images/abhisarika/abhisarika_mb2_chandelier.png';
import abhisarikaMb2Cocktail from '../assets/images/abhisarika/abhisarika_mb2_cocktail.png';
import abhisarikaMb2Telephone from '../assets/images/abhisarika/abhisarika_mb2_telephone.png';
import abhisarikaMb2Vinyl from '../assets/images/abhisarika/abhisarika_mb2_vinyl.png';
import abhisarikaMb2Leopard from '../assets/images/abhisarika/abhisarika_mb2_leopard.png';
import imgCenter from '../assets/images/abhisarika/img_center.jpg';
import imgTop from '../assets/images/abhisarika/img_top.jpg';
import imgTopRight from '../assets/images/abhisarika/img_top_right.jpg';
import imgBottomLeft from '../assets/images/abhisarika/img_bottom_left.jpg';
import imgBottomRight from '../assets/images/abhisarika/img_bottom_right.jpg';
import garment1_1 from '../assets/images/abhisarika/garment1_1.jpg';
import garment1_2 from '../assets/images/abhisarika/garment1_2.jpg';
import garment1_3 from '../assets/images/abhisarika/garment1_3.jpg';
import garment1_4 from '../assets/images/abhisarika/garment1_4.jpg';
import garment2_1 from '../assets/images/abhisarika/garment2_1.jpg';
import garment2_2 from '../assets/images/abhisarika/garment2_2.jpg';
import garment2_3 from '../assets/images/abhisarika/garment2_3.png';
import garment2_4 from '../assets/images/abhisarika/garment2_4.jpg';
import garment3_1 from '../assets/images/abhisarika/garment3_1.jpg';
import garment3_2 from '../assets/images/abhisarika/garment3_2.png';
import garment3_3 from '../assets/images/abhisarika/garment3_3.jpg';
import abhisarikaMb3FanNet from '../assets/images/abhisarika/abhisarika_mb3_fan_net.png';
import abhisarikaMb3EmeraldStones from '../assets/images/abhisarika/abhisarika_mb3_emerald_stones.png';
import abhisarikaMb3BioluminescentShore from '../assets/images/abhisarika/abhisarika_mb3_bioluminescent_shore.png';
import abhisarikaMb3Swans from '../assets/images/abhisarika/abhisarika_mb3_swans.png';
import abhisarikaMb3MothWings from '../assets/images/abhisarika/abhisarika_mb3_moth_wings.png';
import abhisarikaMb3Underwater from '../assets/images/abhisarika/abhisarika_mb3_underwater.png';
import garment4_1 from '../assets/images/abhisarika/garment4_1.jpg';
import garment4_2 from '../assets/images/abhisarika/garment4_2.png';
import garment4_3 from '../assets/images/abhisarika/garment4_3.png';
import garment4_4 from '../assets/images/abhisarika/garment4_4.jpg';
import aooMbRunway from '../assets/images/anatomy-of-ornament/aoo_mb_runway.png';
import aooMbCorset from '../assets/images/anatomy-of-ornament/aoo_mb_corset.png';
import aooMbKurta from '../assets/images/anatomy-of-ornament/aoo_mb_kurta.png';
import aooMbSpool from '../assets/images/anatomy-of-ornament/aoo_mb_spool.png';
import aooMbKantha from '../assets/images/anatomy-of-ornament/aoo_mb_kantha.jpg';
import aooMbApplique from '../assets/images/anatomy-of-ornament/aoo_mb_applique.png';
import aooGarment1_1 from '../assets/images/anatomy-of-ornament/aoo_garment1_1.jpg';
import aooGarment1_2 from '../assets/images/anatomy-of-ornament/aoo_garment1_2.jpg';
import aooGarment1_3 from '../assets/images/anatomy-of-ornament/aoo_garment1_3.jpg';
import aooGarment1_4 from '../assets/images/anatomy-of-ornament/aoo_garment1_4.png';
import aooGarment2_1 from '../assets/images/anatomy-of-ornament/aoo_garment2_1.png';
import aooGarment2_2 from '../assets/images/anatomy-of-ornament/aoo_garment2_2.png';
import aooGarment2_3 from '../assets/images/anatomy-of-ornament/aoo_garment2_3.png';
import aooGarment2_4 from '../assets/images/anatomy-of-ornament/aoo_garment2_4.png';
import aooGarment3_1 from '../assets/images/anatomy-of-ornament/aoo_garment3_1.png';
import aooGarment3_2 from '../assets/images/anatomy-of-ornament/aoo_garment3_2.png';
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
import kalaLoom from '../assets/images/kutch-weaving/kutch_kala_cotton_pit_loom.jpg';
import kutchYarnSkeins from '../assets/images/kutch-weaving/kutch_dyed_yarn_skeins.jpg';
import kutchArtisanWeaving from '../assets/images/kutch-weaving/kutch_artisan_handloom_weaving.jpg';
import kutchIndigoVat from '../assets/images/kutch-weaving/kutch_indigo_vat_immersion.jpg';
import kutchMasterWeaver from '../assets/images/kutch-weaving/kutch_master_weaver_traditional_border.jpg';
import kutchTanaBana from '../assets/images/kutch-weaving/kutch_tana_bana_warping_atelier.jpg';
import aooGarment3_3 from '../assets/images/anatomy-of-ornament/aoo_garment3_3.jpg';
import aooGarment3_4 from '../assets/images/anatomy-of-ornament/aoo_garment3_4.png';
import aooGarment1 from '../assets/images/anatomy-of-ornament/garment_1.jpg';
import aooGarment2 from '../assets/images/anatomy-of-ornament/garment_2.jpg';
import aooGarment3 from '../assets/images/anatomy-of-ornament/garment_3.jpg';
import aooGarment4 from '../assets/images/anatomy-of-ornament/garment_4.jpg';
import aooGarment5 from '../assets/images/anatomy-of-ornament/garment_5.jpg';
import aooGarment6 from '../assets/images/anatomy-of-ornament/garment_6.jpg';
import aooGarment7 from '../assets/images/anatomy-of-ornament/garment_7.jpg';
import aooGarment8 from '../assets/images/anatomy-of-ornament/garment_8.jpg';
import aooGarment9 from '../assets/images/anatomy-of-ornament/garment_9.jpg';
import aooGarment10 from '../assets/images/anatomy-of-ornament/garment_10.jpg';
import aooMb3QuiltedSleeve from '../assets/images/anatomy-of-ornament/aoo_mb3_quilted_sleeve.png';
import aooMb3RunwaySuit from '../assets/images/anatomy-of-ornament/aoo_mb3_runway_navy_suit.png';
import aooMb3Postcard from '../assets/images/anatomy-of-ornament/aoo_mb3_vintage_postcard_crossstitch.png';
import aooMb3JacketBack from '../assets/images/anatomy-of-ornament/aoo_mb3_embroidered_jacket_back.png';
import aooMb3Ribbon from '../assets/images/anatomy-of-ornament/aoo_mb3_border_ribbon_transparent.png';
import aooMb2CatNecklace from '../assets/images/anatomy-of-ornament/aoo_mb2_black_cat_necklace.png';
import aooMb2CarvedLeather from '../assets/images/anatomy-of-ornament/aoo_mb2_carved_leather.png';
import aooMb2CatEyes from '../assets/images/anatomy-of-ornament/aoo_mb2_cat_eyes.png';
import aooMb2AceOfSpades from '../assets/images/anatomy-of-ornament/aoo_mb2_ace_of_spades.png';
import aooMb2FloralJacquard from '../assets/images/anatomy-of-ornament/aoo_mb2_floral_jacquard.png';
import dabu1 from '../assets/images/dabu/dabu1.png';
import dabu2 from '../assets/images/dabu/dabu2.jpg';
import dabu3 from '../assets/images/dabu/dabu3.png';
import dabu4 from '../assets/images/dabu/dabu4.jpg';
import eco1 from '../assets/images/eco/eco1.jpg';
import eco2 from '../assets/images/eco/eco2.jpg';
import eco3 from '../assets/images/eco/eco3.jpg';
import eco4 from '../assets/images/eco/eco4.jpg';
import eco5 from '../assets/images/eco/eco5.jpg';
import indigoFiltration from '../assets/images/indigo-site-visit/indigo_vat_filtration.png';
import indigoEarthenVats from '../assets/images/indigo-site-visit/indigo_earthen_vats.jpg';
import indigoFermentationBloom from '../assets/images/indigo-site-visit/indigo_fermentation_bloom.jpg';
import indigoOpenAirFacility from '../assets/images/indigo-site-visit/indigo_open_air_facility.jpg';
import coconutCutouts from '../assets/images/coconut-shell/coconut_cutout_pieces.png';
import coconutPendant from '../assets/images/coconut-shell/coconut_intricate_pendant.png';
import coconutSanding from '../assets/images/coconut-shell/coconut_sanding_wheel.png';
import coconutProducts from '../assets/images/coconut-shell/coconut_finished_products.png';
import paperWeavingRadial from '../assets/images/paper-weaving/paper_weaving_radial_base.jpg';
import paperRollingTubes from '../assets/images/paper-weaving/paper_rolling_tubes.png';
import paperTwiningSpokes from '../assets/images/paper-weaving/paper_twining_radial_spokes.png';
import paperArtisanMaterials from '../assets/images/paper-weaving/paper_artisan_materials.png';





interface ProjectPage {
  type?: 'single' | 'grid' | 'text' | 'collage' | 'moodboard-collage' | 'moodboard-garment2' | 'moodboard-garment3' | 'moodboard-abhisarika-garment2' | 'moodboard-abhisarika-garment3' | 'moodboard-silk-and-stone' | 'swatchboard-silk-and-stone' | 'concept-note-silk-and-stone' | 'silhouetteboard-silk-and-stone' | 'inspiration-garment1-silk-and-stone' | 'inspiration-garment2-silk-and-stone' | 'inspiration-garment3-silk-and-stone' | 'moodboard-1941' | 'inspiration-1941' | 'development-1941' | 'photography-1941' | 'lookbook-1941';
  src?: string;
  alt?: string;
  images?: { src: string; alt: string; objectPosition?: string }[];
  title?: string;
  subtitle?: string;
  titleImage?: string;
  paragraphs?: string[];
  textColor?: string;
  titleColor?: string;
  imageAspect?: string;
  imageFit?: 'cover' | 'contain';
  gridCols?: number;
  layout?: 'default' | 'bento-center-stack' | 'lineup';
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  previewImage?: string;
  /** Backdrop of the project viewer */
  background?: string;
  backgroundColor: string;
  category?: 'work' | 'workshop';
  /** Slides/pages shown in the viewer — add images here as they become available */
  pages: ProjectPage[];
}

const PROJECTS: Project[] = [
  {
    id: 'abhisarika',
    title: 'Abhisarika',
    tagline: 'Indian Wear',
    icon: Moon,
    previewImage: garment1_1,
    background: abhisarikaBackground,
    backgroundColor: '#3E5A26',
    pages: [
      {
        type: 'text',
        title: 'Abhisarika',
        paragraphs: [
          "Abhisarika is the nayika who moves. Not the one who waits, but the one who dresses for the dark and walks into it. Her love is not passive longing — it is a journey she chooses, alone, through night, storm, and shadow, toward what she wants.",
          "This collection borrows her courage. Each look marks a stage of her passage — dusk, moonlight, darkness, storm — built in velvet, metallic silk, and sheer organza that catch light the way she moves through it: quietly, then boldly. Crescent motifs recall the moon that guides her; black and wine recall the night she isn't afraid of."
        ]
      },
      {
        type: 'collage',
        images: [
          { src: imgCenter, alt: 'Center' },
          { src: imgTop, alt: 'Top' },
          { src: imgTopRight, alt: 'Top Right' },
          { src: imgBottomLeft, alt: 'Bottom Left' },
          { src: imgBottomRight, alt: 'Bottom Right' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-1',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment1_1, alt: 'Garment 1 view 1' },
          { src: garment1_2, alt: 'Garment 1 view 2' },
          { src: garment1_3, alt: 'Garment 1 view 3' },
          { src: garment1_4, alt: 'Garment 1 view 4' }
        ]
      },
      {
        type: 'moodboard-abhisarika-garment2',
        title: 'Mood Board',
        paragraphs: [
          "MATERIAL & NOIR RESEARCH · LOOK 02:",
          "Gilded art deco glamour, crystal chandeliers, antique baroque mirrors, cocktail coupe culture, and metallic gold vinyl textures."
        ]
      },
      {
        type: 'grid',
        title: 'garment-2',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment2_1, alt: 'Garment 2 view 1' },
          { src: garment2_2, alt: 'Garment 2 view 2' },
          { src: garment2_3, alt: 'Garment 2 view 3' },
          { src: garment2_4, alt: 'Garment 2 view 4' }
        ]
      },
      {
        type: 'moodboard-abhisarika-garment3',
        title: 'Mood Board',
        paragraphs: [
          "MATERIAL & NOIR RESEARCH · LOOK 03:",
          "Emerald crystalline geology, bioluminescent nocturnal tide pools, deep-sea currents, and black-and-white swan duality in pleated textures."
        ]
      },
      {
        type: 'grid',
        title: 'garment-3',
        imageFit: 'cover',
        images: [
          { src: garment3_1, alt: 'Garment 3 view 1' },
          { src: garment3_2, alt: 'Garment 3 view 2' },
          { src: garment3_3, alt: 'Garment 3 view 3' }
        ]
      },
      {
        type: 'grid',
        title: 'garment-4',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          { src: garment4_1, alt: 'Garment 4 view 1' },
          { src: garment4_2, alt: 'Garment 4 view 2' },
          { src: garment4_3, alt: 'Garment 4 view 3' },
          { src: garment4_4, alt: 'Garment 4 view 4' }
        ],
        paragraphs: [
          "(The embellished bag carried by the model is also handcrafted by me)"
        ]
      }
    ]
  },
  {
    id: '1941',
    title: '1941',
    tagline: "Men's Wear",
    icon: Shirt,
    previewImage: linenSuitMan,
    background: background1941,
    backgroundColor: '#F7F4EE',
    pages: [
      {
        type: 'text',
        title: 'Concept Note',
        subtitle: "1941 · Men's Wear",
        textColor: '#0B2240',
        titleColor: '#0B2240',
        paragraphs: [
          "It believes elegance is not something you put on. It is something you stop interfering with.",
          "It follows sprezzatura, the art of looking effortless, as though you simply woke up this way, linen softened by sleep, collar open, nothing forced.",
          "It believes the most confident man in the room is the one who isn’t trying to be seen.",
          "To dress less is not to care less.",
          "It is to care so precisely that nothing extra remains."
        ]
      },
      {
        type: 'moodboard-1941',
        title: 'Mood Board',
        subtitle: "1941 · Sprezzatura & Architectural Heritage"
      },
      {
        type: 'inspiration-1941',
        title: 'Inspiration Board',
        subtitle: "1941 · Sartorial Mystery & British Tailoring"
      },
      {
        type: 'development-1941',
        title: 'Development Board',
        subtitle: "1941 · Craftsmanship & Tailoring Process"
      },
      {
        type: 'photography-1941',
        title: 'Photography Inspiration',
        subtitle: "1941 · Light, Shadow & Editorial Posture"
      },
      {
        type: 'lookbook-1941',
        title: 'Editorial Lookbook',
        subtitle: "1941 · The Bespoke Collection & Garment Shoot"
      }
    ]
  },
  {
    id: 'anatomy-of-ornament',
    title: 'Anatomy of Ornamentation',
    tagline: 'Indowestern',
    icon: Gem,
    previewImage: aooGarment1_1,
    background: aooBackground,
    backgroundColor: '#0a0a0a',
    pages: [
      {
        type: 'text',
        title: 'Anatomy of Ornamentation',
        paragraphs: [
          "Anatomy of Ornamentation interrogates the sacred botanical architecture of South Asian decorative traditions, taking the eternal lotus as both structural spine and aesthetic philosophy.",
          "Rather than treating ornamentation as extraneous surface embellishment, this collection deconstructs the geometry of bloom and root: the radial symmetry of unfurling petals, the tension between fragile flora and razor-sharp boned corsetry, and the resilience of a blossom that emerges pure and formidable from dark obsidian waters.",
          "Constructed in midnight velvets, unspun mulberry silks, and hand-beaten gold zardozi metallurgies, each silhouette frames the body not as a passive form, but as living, sculpted architecture of calculated seduction and absolute composure."
        ]
      },
      {
        type: 'moodboard-collage',
        title: 'Mood Board',
        paragraphs: [
          "MATERIAL & SENSORY RESEARCH:",
          "Exploration of radiant gold zardozi bullion, sunburst beadwork, and botanical filigree against midnight noir wool and structured velvet corsetry."
        ]
      },
      {
        type: 'grid',
        title: 'Garment 01',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          {
            src: aooGarment1_1,
            alt: 'Garment 01 — Architectural column silhouette beside stone steps',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment1_2,
            alt: 'Garment 01 — Intricate hand-beaded lotus zardozi bullion embroidery in carved alcove',
            objectPosition: 'center 25%'
          },
          {
            src: aooGarment1_3,
            alt: 'Garment 01 — Asymmetrical neckline, dark eyewear & avant-garde editorial poise',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment1_4,
            alt: 'Garment 01 — Cascading silk sash with handcrafted golden blossom tassel by white tree trunk',
            objectPosition: 'center 20%'
          }
        ],
        paragraphs: [
          "LOOK 01 · PADMA RADIANCE & ARCHITECTURAL SILHOUETTE",
          "Sculpted one-shoulder midnight silk column silhouette engineered with radial gold bullion lotus ornamentation emerging from the waistline, paired with an asymmetrical cascading sash anchored by a bespoke floral metallurgy tassel."
        ]
      },
      {
        type: 'moodboard-garment2',
        title: 'Mood Board',
        alt: 'Garment 02 Mood Board — Noir, Feline Architecture & Gothic Metallurgy',
        paragraphs: [
          "MATERIAL & NOIR RESEARCH · LOOK 02:",
          "Exploration of midnight obsidian textures, feline predatory architecture, gothic embossed leather, carved gothic card motifs, and dark botanical jacquard."
        ]
      },
      {
        type: 'grid',
        title: 'Garment 02',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          {
            src: aooGarment2_4,
            alt: 'Garment 02 — Frontal silhouette with sculpted wave neckline and textured beading',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment2_2,
            alt: 'Garment 02 — Scalloped strapless neckline, hand-sewn bugle beading and earrings',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment2_3,
            alt: 'Garment 02 — Architectural side profile against textured brickwork with dark eyewear',
            objectPosition: 'center 20%'
          },
          {
            src: aooGarment2_1,
            alt: 'Garment 02 — Back architecture showing bespoke eyelet lacing and fluid trouser tailoring',
            objectPosition: 'center 20%'
          }
        ],
        paragraphs: [
          "LOOK 02 · OBSIDIAN WAVE & BONED CORSETRY",
          "Sculpted midnight strapless corset featuring an organic wave neckline and vertical textured bugle bead embroidery, engineered with traditional back lacing and paired with tailored fluid silk trousers."
        ]
      },
      {
        type: 'moodboard-garment3',
        title: 'Mood Board',
        paragraphs: [
          "MATERIAL & SILHOUETTE RESEARCH · LOOK 03:",
          "Exploration of structured indigo tailoring, artisanal quilting, geometric cross-stitch motifs, and topographic contour embroidery."
        ]
      },
      {
        type: 'grid',
        title: 'Garment 03',
        layout: 'bento-center-stack',
        imageFit: 'cover',
        images: [
          {
            src: aooGarment3_1,
            alt: 'Garment 03 — Full-length architectural utility jacket silhouette in boots',
            objectPosition: 'center 35%'
          },
          {
            src: aooGarment3_2,
            alt: 'Garment 03 — Editorial portrait with dark eyewear and embroidered jacket lapels',
            objectPosition: 'center 30%'
          },
          {
            src: aooGarment3_3,
            alt: 'Garment 03 — Close-up craft detail of gold threadwork embroidery on raw indigo denim',
            objectPosition: 'center'
          },
          {
            src: aooGarment3_4,
            alt: 'Garment 03 — Dynamic side profile showcasing windblown poise and sleeve ornamentation',
            objectPosition: 'center 20%'
          }
        ],
        paragraphs: [
          "LOOK 03 · INDIGO BOTANICA & STRUCTURED OVERCOAT",
          "Raw dark indigo utility jacket tailored with wide notched lapels and flap pockets, elevated with intricate golden ochre hand-embroidered botanical motifs cascading along both sleeves, paired over a midnight mini silhouette."
        ]
      }
    ]
  },
  {
    id: 'fading-spark',
    title: 'Fading Spark',
    tagline: 'Digital Illustration',
    icon: Flame,
    previewImage: fadingSparkPg3_1,
    background: fadingSparkBackground,
    backgroundColor: '#F5E5DF',
    pages: [
      { type: 'single', src: fadingSparkPg1, alt: 'Fading Spark Page 1' },
      { type: 'single', src: fadingSparkPg2, alt: 'Fading Spark Page 2' },
      {
        type: 'grid',
        layout: 'lineup',
        images: [
          { src: fadingSparkPg3_1, alt: 'Fading Spark Page 3 Image 1' },
          { src: fadingSparkPg3_4, alt: 'Fading Spark Page 3 Image 4' },
          { src: fadingSparkPg3_5, alt: 'Fading Spark Page 3 Image 5' },
          { src: fadingSparkPg3_2, alt: 'Fading Spark Page 3 Image 2' },
          { src: fadingSparkPg3_3, alt: 'Fading Spark Page 3 Image 3' }
        ]
      },
      // Page 4 is missing, will be added later
            { type: 'single', src: fadingSparkPg5, alt: 'Fading Spark Page 5' }
    ]
  },
  {
    id: 'silk-and-stone',
    title: 'Silk & Stone',
    tagline: 'Couture & Form',
    icon: Sparkles,
    previewImage: silkAndStoneCover,
    background: silkAndStoneCover,
    backgroundColor: '#1E1917',
    pages: [
      {
        type: 'concept-note-silk-and-stone',
        title: 'Silk & Stone',
        subtitle: 'Concept Note',
        src: conceptModelCutout,
        alt: 'Silk & Stone Concept Note — ‘The Veiled Virgin’ by Giovanni Strazza'
      },
      {
        type: 'moodboard-silk-and-stone',
        title: 'Mood Board',
        src: silkAndStoneMoodboard,
        alt: 'Silk & Stone Mood Board — Classical Marble Drapery, Parisian Tailoring & Fluid Silk'
      },
      {
        type: 'swatchboard-silk-and-stone',
        title: 'Silk & Stone',
        subtitle: 'Swatch Board',
        src: silkAndStoneSwatchboard,
        alt: 'Silk & Stone Swatch Board — Textile & Material Studies'
      },
      {
        type: 'silhouetteboard-silk-and-stone',
        title: 'Silhouette Board',
        src: silkAndStoneSilhouetteboard,
        alt: 'Silk & Stone — Silhouette Board'
      },
      {
        type: 'inspiration-garment1-silk-and-stone',
        title: 'Inspiration - 01',
        subtitle: 'Silk & Stone · Garment 01',
        src: garment1InspirationLayoutHd,
        alt: 'Silk & Stone — Inspiration - 01 (Collage Layout)',
        paragraphs: [
          "Basalt is born from fire, cooled into strong, geometric columns, and water flows over it, softening its edges without force.",
          "A woman is made the same way: stone within her (structure, protection, certainty) and water within her (empathy, adaptability, flow).",
          "In this look, the dark grey colour is the basalt and the flowing drape of water, is shown by Organza black shirt Underneath."
        ]
      },
      {
        type: 'inspiration-garment2-silk-and-stone',
        title: 'Inspiration - 02',
        subtitle: 'Silk & Stone · Garment 02',
        src: garment2InspirationLayoutHd,
        alt: 'Silk & Stone — Inspiration - 02 (Collage Layout)',
        paragraphs: [
          "Hard shell, soft heart: she is protected by structure and shaped by the sea.",
          "The check is her shell, and the ruffle is where her softness shows."
        ]
      },
      {
        type: 'inspiration-garment3-silk-and-stone',
        title: 'Inspiration - 03',
        subtitle: 'Silk & Stone · Garment 03',
        src: garment3InspirationLayoutHd,
        alt: 'Silk & Stone — Inspiration - 03 (Collage Layout)',
        paragraphs: [
          "The lotus rises from dark water and opens clean, white and untouched.",
          "The navy pinstripe is the pond that shapes her, with its depth and discipline, and the petal sleeves are the bloom she chooses to show.",
          "She is not made of mud or flower: she is the strength below and the softness above."
        ]
      }
    ]
  },
  {
    id: 'dabu-printing',
    title: 'Dabu Printing',
    tagline: 'Workshop',
    category: 'workshop',
    icon: Flame, // fallback
    backgroundColor: '#16233B',
    pages: [
      {
        type: 'grid',
        title: 'Dabu Printing',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: dabu1, alt: 'Hand printing on cloth' },
          { src: dabu2, alt: 'Printing dots on fabric' },
          { src: dabu3, alt: 'Wooden printing block' },
          { src: dabu4, alt: 'Indigo dyeing vat' }
        ],
        paragraphs: [
          "AAVARAN in Udaipur is known for reviving and sustaining traditional Dabu mud-resist hand block printing from Rajasthan. Founded by Alka Sharma in 2008, Aavaran works closely with artisan communities, particularly from the Akola region near Chittorgarh.",
          "The process uses hand-carved wooden blocks to apply a resist paste made primarily from mud, lime (calcium hydroxide) and natural gum onto fabric. The fabric is then dyed, often with natural indigo, and the resist is washed away to reveal the printed motifs. Multiple rounds of Dabu printing and dyeing can be used to create layered patterns and colours.",
          "Aavaran combines this traditional craft with contemporary motifs and modern garments, while continuing to use natural dyes and focusing on artisan livelihoods and sustainable production. Its signature aesthetic is strongly associated with indigo, earthy tones and intricate hand-blocked motifs.",
          "PROCESS:",
          "Wooden block → Dabu mud resist → Natural dye/indigo → Drying & oxidation → Washing → Final hand-printed textile."
        ]
      }
    ]
  },
  {
    id: 'eco-printing',
    title: 'Eco Printing',
    tagline: 'Workshop',
    category: 'workshop',
    icon: Flame, // fallback
    backgroundColor: '#FAF6EE',
    pages: [
      {
        type: 'grid',
        title: 'Eco Printing',
        gridCols: 3,
        imageFit: 'cover',
        images: [
          { src: eco1, alt: 'Baskets of dye plants' },
          { src: eco2, alt: 'Pounding leaves portrait' },
          { src: eco3, alt: 'Pounding leaves landscape' },
          { src: eco5, alt: 'Washing dyed fabric' },
          { src: eco4, alt: 'Results of eco-printing' }
        ],
        paragraphs: [
          "Eco-printing is a process of pressing the entire dye plant against the fabric and transferring the color while the plant stays flat.",
          "Tannin-rich leaves, like - rose, guava, eucalyptus, and oaks, are used to etch their distinct mark on textiles, through the color present in the leaves. The same technique is used to dye with flowers or kitchen waste as well.",
          "Every eco-printed piece celebrates the harmonious relationship between human creativity and the environment and serves as a reminder of our communication and collaboration with nature. This elaborate process can take up to 2-3 days to dye one garment, and always results in unique, one-of-kind results, where no two pieces are alike, yet all beautiful in their own right.",
          "TYPES OF ECO-PRINTING:",
          "1. Leaf printing: Using leaves to create prints with intricate vein patterns.",
          "2. Flower pounding: Pounding flowers onto paper or fabric to create delicate, petal-like prints.",
          "3. Branch printing: Using branches to create textured, organic prints.",
          "BENEFITS OF ECO-PRINTING:",
          "1. Sustainable: Eco-printing uses natural, biodegradable materials.",
          "2. Unique: Each print is one-of-a-kind, with subtle variations.",
          "3. Creative: Eco-printing encourages experimentation and creativity.",
          "Eco-printing is a beautiful way to connect with nature and create stunning, unique prints."
        ]
      }
    ]
  },
  {
    id: 'indigo-site-visit',
    title: 'Indigo Site Visit',
    tagline: 'Workshop & Field Study',
    category: 'workshop',
    icon: Droplet,
    backgroundColor: '#0c1626',
    pages: [
      {
        type: 'grid',
        title: 'Indigo Site Visit',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: indigoEarthenVats, alt: 'Submerged earthen indigo fermentation vats with woven reed covers' },
          { src: indigoFermentationBloom, alt: 'Living indigo vat bloom with deep iridescent blue froth' },
          { src: indigoFiltration, alt: 'Suspended fabric hammock filter collecting concentrated natural indigo sediment' },
          { src: indigoOpenAirFacility, alt: 'Open-air timber and bamboo sheltered indigo dye pavilion' }
        ]
      },
      {
        type: 'text',
        title: 'Concept & Field Study',
        paragraphs: [
          "Hands-on site exploration and field research into authentic natural indigo extraction, bio-fermentation, and traditional vat dyeing.",
          "Natural indigo (Indigofera tinctoria) is an organic, living dye culture. The extraction begins by harvesting green indigo leaves, which are submerged in water to release soluble indoxyl. Through controlled mechanical aeration and agitation, oxygen converts the yellow liquid into rich blue insoluble indigotin pigment flakes.",
          "The oxidized pigment slurry is carefully drawn through suspended cloth filters, where gravity strains the excess liquid over hours to produce concentrated, pure indigo pigment paste.",
          "In the open-air workshop pavilion, subterranean clay vats are sunk directly into the earthen floor to regulate seasonal temperature. The vats are nurtured with natural alkaline buffers, slaked lime, and botanical reduction agents, fermenting the pigment into a golden-green soluble state. When hand-dipped cloth is lifted from the vat, it oxidizes in seconds upon contact with ambient air, shifting miraculously from green to enduring royal indigo.",
          "PROCESS WORKFLOW: Fresh Indigo Harvest → Water Steeping & Fermentation → Mechanical Aeration → Gravity Cloth Filtration → Earthen Clay Vat Reduction → Hand-Dipping → Aerial Oxidation → Rich Living Indigo."
        ]
      }
    ]
  },
  {
    id: 'coconut-shell-craft',
    title: 'Coconut Shell Craft',
    tagline: 'Workshop · Egai',
    category: 'workshop',
    icon: Gem,
    backgroundColor: '#1E140E',
    pages: [
      {
        type: 'grid',
        title: 'Coconut Shell Craft',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: coconutSanding, alt: 'Artisan hand-shaping and sanding coconut shell on rotary disc sander' },
          { src: coconutPendant, alt: 'Handcrafted pierced coconut shell pendant with geometric floral cut' },
          { src: coconutCutouts, alt: 'Batch collection of carved coconut shell silhouette pendants' },
          { src: coconutProducts, alt: 'Finished collection of hand-carved polished coconut shell bowls and vessels' }
        ],
        paragraphs: [
          "Here's a step-by-step guide on making a coconut shell pendant:",
          "MATERIALS NEEDED:\n- Coconut shells\n- Sandpaper\n- Drill press or hand drill\n- Jewelry saw or coping saw\n- Files and rasps\n- Polishing cloths\n- Jewelry findings (e.g., jump ring, chain)\n- Optional: paints, stains, or sealants",
          "STEP-BY-STEP PROCESS:",
          "1. Selecting the shell: Choose a suitable coconut shell with an interesting shape or pattern.",
          "2. Cleaning and drying: Clean the shell thoroughly and let it dry completely.",
          "3. Sanding: Sand the shell to smooth out any rough edges or surfaces.",
          "4. Designing: Sketch a design onto the shell or use a template.",
          "5. Cutting: Use a jewelry saw or coping saw to cut out the pendant shape.",
          "6. Drilling: Drill a hole for the jump ring or chain.",
          "7. Shaping and refining: Use files and rasps to refine the shape and smooth out edges.",
          "8. Polishing: Use polishing cloths to buff the shell and enhance its natural shine.",
          "9. Assembling: Attach the jump ring and chain to complete."
        ]
      }
    ]
  },
  {
    id: 'paper-weaving',
    title: 'Paper Weaving',
    tagline: 'Workshop · Wellpaper',
    category: 'workshop',
    icon: Layers,
    backgroundColor: '#1E1914',
    pages: [
      {
        type: 'grid',
        title: 'Paper Weaving',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: paperWeavingRadial, alt: 'Master artisan twining newspaper reeds into a radial basket base' },
          { src: paperRollingTubes, alt: 'Rolling recycled newsprint sheets into tight structural paper tubes' },
          { src: paperTwiningSpokes, alt: 'Interlacing radial warp tubes with weft twining over kolam floor patterns' },
          { src: paperArtisanMaterials, alt: 'Artisan sorting woven paper vessels, molded pulp forms, and workshop materials' }
        ],
        paragraphs: [
          "In collaboration with Wellpaper (Auroville), this workshop explores circular economy design and community-based paper craft.",
          "Wellpaper (Women Entrepreneurs Local Livelihood) transforms discarded daily newspapers into durable, structured home artifacts and sculptural vessels through traditional twining and basketry weaving techniques.",
          "CRAFT & METHODOLOGY:",
          "1. Tube Rolling: Discarded newspaper sheets are cut diagonally and rolled tightly around thin metal spindles to create uniform, high-tensile paper reeds.",
          "2. Radial Warp Setup: Strong structural paper tubes are pinned and crossed in a starburst radial pattern, forming the foundational armature.",
          "3. Twining & Interlacing: Two flexible paper reeds are continuously woven over and under the radial spokes in a paired twining pattern, building density and tensile strength.",
          "4. Architectural Shaping: The spokes are gradually turned upwards around wooden or ceramic formers to sculpt the three-dimensional curves of the vessel.",
          "5. Finishing & Water-Resistant Coating: Natural adhesives, non-toxic sealants, and botanical dyes are applied to harden the woven paper, ensuring structural longevity and moisture resistance."
        ]
      }
    ]
  },
  {
    id: 'seamstress-secret',
    title: "The Seamstress's Secret",
    tagline: 'Workshop · School of Historical Dress & LLDC',
    category: 'workshop',
    icon: Scissors,
    backgroundColor: '#181216',
    pages: [
      {
        type: 'grid',
        title: "The Seamstress's Secret",
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: seamstressCert, alt: 'Official Certificate of Participation awarded to Shatma Aaliya by Prof. Jenny Tiramani (The School of Historical Dress London) and Ami Shroff (LLDC Kutch)' },
          { src: seamstressRuff, alt: 'Handmade reconstructed 17th-century historical linen ruff with fine cartridge pleating and red LB monogram' },
          { src: seamstressLecture, alt: 'Global symposium lecture presenting 1620-30 historical linen ruff scrolling construction and couture sewing tools' },
          { src: seamstressStitch, alt: 'Fine hand-stitching on pure white linen edge using burgundy silk thread for historical decorative seam joining' },
          { src: seamstressBeeswax, alt: 'Natural honeycomb beeswax cakes and historical thread conditioning tools used for archival hand-sewing' }
        ],
        paragraphs: [
          "At LLDC, Bhuj, as part of the Pattern of Fashion Global Symposium, I attended a workshop under PAWL TOMASZEWSKI exploring the intricate stitching techniques used in traditional innerwear construction. The workshop helped me understand the precision, craftsmanship, and attention to detail involved in creating innerwear, along with the importance of stitch selection, structure, and finishing."
        ]
      }
    ]
  },
  {
    id: 'fiber-to-fabric',
    title: 'Fiber to Fabric',
    tagline: 'Workshop · Chaman Siju [Bhuj]',
    category: 'workshop',
    icon: Layers,
    backgroundColor: '#121A1A',
    pages: [
      {
        type: 'grid',
        title: 'Fiber to Fabric',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: kalaLoom, alt: 'Traditional pit loom with white Kala cotton warp threads stretched in Chaman Siju workshop in Bhuj' },
          { src: kutchMasterWeaver, alt: 'Skilled artisan Chaman Siju weaving intricate geometric extra-weft red borders on a pit loom' },
          { src: kutchArtisanWeaving, alt: 'Artisan weaving traditional Kala cotton handloom saree on shuttle loom' },
          { src: kutchYarnSkeins, alt: 'Hand-spun naturally dyed Kala cotton yarn skeins in indigo, raw bouclé wool, and earthy tones' },
          { src: kutchIndigoVat, alt: 'Artisan holding freshly dyed blue and mottled indigo yarn skeins over an active fermentation dye vat' },
          { src: kutchTanaBana, alt: 'Traditional weaving atelier showing wide horizontal warping frames (tana-bana) and spinning setup' }
        ],
        paragraphs: [
          "During our visit to Bhuj, we met Chaman Siju, a skilled artisan who transforms traditional Kala cotton into beautiful handloom sarees. The visit offered valuable insights into the traditional processes of cotton weaving, the importance of artisan craftsmanship, and the preservation of Kutch’s rich textile heritage."
        ]
      }
    ]
  },
  {
    id: 'geometry-structure-tailoring',
    title: 'The Geometry & Structure of Tailoring',
    tagline: 'Workshop · LLDC [Kutch]',
    category: 'workshop',
    icon: Layers,
    backgroundColor: '#181014',
    pages: [
      {
        type: 'grid',
        title: 'The Geometry & Structure of Tailoring',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: lldcMannequins, alt: 'Reconstructed 17th-18th century tailored coats on display mannequins at LLDC Kutch' },
          { src: lldcPatternsBook, alt: 'Janet Arnold Patterns of Fashion research desk with tools and anatomical geometry notes' },
          { src: lldcDraftingBook, alt: 'Archival master tailor drafting plates showing geometric pleats, gores, and coat patterns c.1675-1712' },
          { src: lldcPatternDesk, alt: 'Pattern cutting workspace with miniature drafting toiles, rulers, leather sketchbook, and geometry shears' },
          { src: lldcPaperToile, alt: 'Three-dimensional folded paper structural toile study of historical waistcoat silhouette' },
          { src: lldcPaperMockup, alt: 'Geometric origami paper toile study deconstructing flat pattern to 3D garment silhouette' }
        ],
        paragraphs: [
          "As part of the Pattern of Fashion Global Symposium at LLDC, Bhuj, I attended a workshop under JENNY TIRAMANI co-founder of the school of historical dress london on historical garment pattern-making, where I learned to create traditional flat patterns inspired by dressmaking techniques from 1,000-2,000 years ago. The workshop offered valuable insights into ancient construction methods, historical silhouettes, and the evolution of garment design."
        ]
      }
    ]
  },
  {
    id: 'cyanotype-printing',
    title: 'Cyanotype Printing',
    tagline: 'Monumental Workshop · Indus World Record',
    category: 'workshop',
    icon: Droplet,
    backgroundColor: '#091A30',
    pages: [
      {
        type: 'grid',
        title: 'Cyanotype Printing',
        gridCols: 2,
        imageAspect: 'aspect-[4/3]',
        imageFit: 'cover',
        images: [
          { src: cyanotypeBanner, alt: 'Indus Design School monumental cyanotype blue textile banner held by students' },
          { src: cyanotypeNews, alt: 'Newspaper coverage of the monumental cyanotype world record at Indus University' },
          { src: cyanotypeExposure, alt: 'Students stretching and sun-exposing the 560-foot cyanotype fabric across the campus grounds' },
          { src: cyanotypeComp, alt: 'Photogram composition setup with bow, phone silhouettes, and floral stencils on sensitized fabric' },
          { src: cyanotypeChems, alt: 'Potassium ferricyanide and ammonium ferric citrate chemical bottles' }
        ],
        paragraphs: [
          "RECORD-BREAKING MONUMENTAL CYANOTYPE PRINTING — INDUS DESIGN SCHOOL",
          "An ambitious architectural sun-printing workshop creating a monumental 560-foot-long, 6-foot-wide hand-coated cyanotype textile banner at Indus University, Ahmedabad — setting an unprecedented record for monumental sun-printed fabric art.",
          "CHEMISTRY & METHODOLOGY:",
          "1. Chemistry Formulation: An aqueous solution of Potassium Ferricyanide (K₃[Fe(CN)₆]) and Ammonium Ferric Citrate (C₁₂H₂₂FeN₃O₁₄) was mixed in controlled darkroom conditions, producing a light-sensitive photosensitive emulsion.",
          "2. Hand Coating & Dark Sensitizing: Yards of woven cotton fabric were uniformly hand-brushed with the iron-salt solution and dried in light-sealed studio environments.",
          "3. Outdoor Solar Photogram Exposure: Stretched outdoors under brilliant natural sunlight between 10:30 AM and 12:30 PM, incorporating negative silhouettes, typography stencils, cultural motifs, and real objects across the textile surface.",
          "4. Oxidation & Prussian Blue Fixing: Exposed in the sunlight and thoroughly water-washed, oxidizing iron ions to fix permanent insoluble Prussian Blue (ferric ferrocyanide) pigment.",
          "FEATURED IN REGIONAL PRESS: Documented in regional news as an extraordinary achievement merging 19th-century photochemical printing with modern collaborative campus installation."
        ]
      }
    ]
  }
];

// Workshops from the "all portfolio work" deck (its WORKSHOP slide)
const WORKSHOPS = [
  { name: "The Seamstress's Secret", note: "School of Historical Dress & LLDC", projectId: "seamstress-secret" },
  { name: 'The Geometry & Structure of Tailoring', note: 'LLDC [Kutch]', projectId: 'geometry-structure-tailoring' },
  { name: 'Fiber to Fabric', note: 'Chaman Siju · Bhuj', projectId: 'fiber-to-fabric' },
  { name: 'Dabu Printing', projectId: 'dabu-printing' },
  { name: 'Coconut Shell Craft', note: 'Egai', projectId: 'coconut-shell-craft' },
  { name: 'Paper Weaving', note: 'Wellpaper', projectId: 'paper-weaving' },
  { name: 'Eco Printing', projectId: 'eco-printing' },
  { name: 'Indigo Site Visit', projectId: 'indigo-site-visit' },
  { name: 'Leather Craft' },
  { name: 'Cyanotype Printing', note: 'Indus Record', projectId: 'cyanotype-printing' }
];

/** Editorial headline for workshop project modals */
const WorkshopHeadline: React.FC<{ title: string; isLight?: boolean }> = ({ title, isLight }) => {
  if (!title) return null;
  const trimmed = title.trim();

  // If the title starts with "The " or is a longer multi-word title:
  // Render in the prestigious Avonia couture display typography so full words stay beautifully balanced!
  const isMultiWordOrThe = trimmed.toLowerCase().startsWith('the ') || trimmed.split(/\s+/).length > 3;

  if (isMultiWordOrThe) {
    return (
      <div className="flex items-center justify-center w-full pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 select-none">
        <h2
          className={`font-avonia font-normal text-3xl sm:text-5xl md:text-6xl text-center uppercase tracking-widest drop-shadow-md max-w-4xl leading-tight ${
            isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
          }`}
        >
          {trimmed}
        </h2>
      </div>
    );
  }

  // For short craft workshop titles (e.g. "Dabu Printing", "Eco Printing", "Cyanotype Printing"):
  // Keep the first letter and the rest of the first word locked in whitespace-nowrap so it NEVER orphans the initial letter!
  const words = trimmed.split(/\s+/);
  const firstWord = words[0];
  const firstLetter = firstWord.charAt(0).toUpperCase();
  const firstWordRest = firstWord.slice(1).toUpperCase();
  const restOfWords = words.slice(1).join(' ').toUpperCase();

  return (
    <div className="flex items-center justify-center w-full pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 select-none text-center">
      <h2
        className={`inline-block text-center tracking-normal drop-shadow-md ${
          isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
        }`}
      >
        <span className="inline-flex items-baseline whitespace-nowrap">
          <span
            className="font-['Amoresa','Great_Vibes',cursive] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal inline-block pr-1 select-none transform -translate-y-1"
            style={{ lineHeight: 1.15 }}
          >
            {firstLetter}
          </span>
          <span className="font-['Perandory_Condensed','Bodoni_Moda',Georgia,serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.16em] sm:tracking-[0.2em] uppercase">
            {firstWordRest}
          </span>
        </span>
        {restOfWords && (
          <span className="font-['Perandory_Condensed','Bodoni_Moda',Georgia,serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.16em] sm:tracking-[0.2em] uppercase pl-2">
            {restOfWords}
          </span>
        )}
      </h2>
    </div>
  );
};

/** Full-screen viewer for one project's pages. */
const DualEnergyDiagram: React.FC<{ onZoom?: () => void }> = ({ onZoom }) => {
  // 12 alternating / staggered traits matching the exact zipper layout:
  const alternatingBars: { side: 'left' | 'right'; label: string; width: string }[] = [
    { side: 'right', label: 'Empathy', width: '60%' },
    { side: 'left', label: 'Protection', width: '92%' },
    { side: 'right', label: 'Responsibile', width: '68%' },
    { side: 'left', label: 'Direction', width: '86%' },
    { side: 'right', label: 'Nurture', width: '88%' },
    { side: 'left', label: 'Control', width: '70%' },
    { side: 'right', label: 'Communicator', width: '98%' },
    { side: 'left', label: 'Nurture', width: '90%' },
    { side: 'right', label: 'Expressive', width: '78%' },
    { side: 'left', label: 'Responsibility', width: '68%' },
    { side: 'right', label: 'Adaptive', width: '96%' },
    { side: 'left', label: 'Certainty', width: '60%' },
  ];

  return (
    <div
      onClick={onZoom}
      className="w-full max-w-2xl sm:max-w-3xl mx-auto my-12 pt-8 flex flex-col items-center select-none cursor-pointer group"
      title="Silk & Stone Energy Continuum — Click to view full image"
    >
      {/* Top Labels: Left and Right */}
      <div className="w-full flex items-center justify-between px-1 sm:px-3 mb-2 sm:mb-3">
        <span className="font-serif font-bold text-sm sm:text-base md:text-xl text-[#FFA7E4] tracking-wide">
          Masculine energy
        </span>
        <span className="font-serif font-bold text-sm sm:text-base md:text-xl text-[#FFA7E4] tracking-wide">
          Feminine energy
        </span>
      </div>

      {/* Axis: o ---------------- Women ---------------- o */}
      <div className="w-full flex items-center justify-between relative px-3 sm:px-8 my-1 mb-6 sm:mb-8">
        {/* Left endpoint circle */}
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#FFA7E4] bg-[#1E1917] shrink-0 shadow-[0_0_8px_rgba(255,167,228,0.5)]" />

        {/* Left connecting line */}
        <div className="flex-1 h-[1.5px] bg-[#FFA7E4] mx-2 sm:mx-4 shadow-[0_0_6px_rgba(255,167,228,0.4)]" />

        {/* Center Women text */}
        <span className="font-serif font-bold text-base sm:text-xl md:text-2xl text-[#FFA7E4] tracking-wider px-3 sm:px-6 shrink-0 drop-shadow-[0_0_10px_rgba(255,167,228,0.4)]">
          Women
        </span>

        {/* Right connecting line */}
        <div className="flex-1 h-[1.5px] bg-[#FFA7E4] mx-2 sm:mx-4 shadow-[0_0_6px_rgba(255,167,228,0.4)]" />

        {/* Right endpoint circle */}
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#FFA7E4] bg-[#1E1917] shrink-0 shadow-[0_0_8px_rgba(255,167,228,0.5)]" />
      </div>

      {/* Alternating Zipper Bars Container */}
      <div className="w-full flex flex-col gap-1.5 sm:gap-2 my-2">
        {alternatingBars.map((bar, idx) => (
          <div key={idx} className="w-full flex items-center">
            {/* Left Slot (Masculine bars right-aligned towards center) */}
            <div className="w-1/2 flex justify-end pr-1 sm:pr-2">
              {bar.side === 'left' && (
                <div
                  style={{ width: bar.width }}
                  className="h-6 sm:h-7 md:h-8 rounded-[2px] bg-gradient-to-r from-[#B4D3E8] via-[#E8F1F7] to-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  <span className="font-serif font-semibold text-[11px] sm:text-xs md:text-sm text-[#111111] tracking-wide px-2 whitespace-nowrap">
                    {bar.label}
                  </span>
                </div>
              )}
            </div>

            {/* Center Spine Divider Gutter */}
            <div className="w-[1.5px] h-6 sm:h-7 md:h-8 bg-transparent shrink-0" />

            {/* Right Slot (Feminine bars left-aligned from center) */}
            <div className="w-1/2 flex justify-start pl-1 sm:pl-2">
              {bar.side === 'right' && (
                <div
                  style={{ width: bar.width }}
                  className="h-6 sm:h-7 md:h-8 rounded-[2px] bg-gradient-to-r from-white via-[#FCE4F0] to-[#F8B4D9] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  <span className="font-serif font-semibold text-[11px] sm:text-xs md:text-sm text-[#111111] tracking-wide px-2 whitespace-nowrap">
                    {bar.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="mt-8 sm:mt-12 text-center px-4">
        <p className="font-serif font-bold text-base sm:text-xl md:text-2xl text-[#FFA7E4] tracking-wide drop-shadow-md">
          &ldquo;Both energies live in her, The moment decides which one leads.&rdquo;
        </p>
      </div>
    </div>
  );
};

const ProjectViewer: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lookbookView, setLookbookView] = useState<'spreads' | 'grid'>('spreads');
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Keep the page behind from scrolling while the viewer is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const isLight = project.id === 'fading-spark' || project.id === 'eco-printing' || project.id === '1941';

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
      style={{ background: project.backgroundColor }}
    >
      {project.id !== 'anatomy-of-ornament' && project.id !== '1941' ? (
        /* Volumetric pinkish gradient bloom */
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-[#540D21]/15 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />
      ) : null}

      {project.background && (project.id === 'abhisarika' || project.id === 'fading-spark' || project.id === 'anatomy-of-ornament' || project.id === '1941' || project.id === 'silk-and-stone') ? (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full opacity-100"
          style={{
            backgroundImage: `url(${project.background})`,
            backgroundRepeat: project.id === '1941' ? 'no-repeat' : 'repeat',
            backgroundSize: project.id === 'anatomy-of-ornament' ? '460px auto' : project.id === '1941' ? 'cover' : project.id === 'silk-and-stone' ? '300px auto' : '650px auto',
            backgroundPosition: 'center top',
            backgroundColor: project.backgroundColor
          }}
        >
          {project.id === 'silk-and-stone' && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1917]/75 via-[#1E1917]/55 to-[#1E1917]/85" />
          )}
        </div>
      ) : project.background ? (
        <img
          src={project.background}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : null}

      <header className="relative z-20 flex shrink-0 items-center gap-4 px-4 py-3 sm:px-8 sm:py-4">
        <button
          type="button"
          onClick={onClose}
          data-cursor="pointer"
          className={`inline-flex min-h-11 items-center gap-2 rounded-full border ${
            project.id === '1941'
              ? 'border-[#0B2240]/25 bg-white/90 text-[#0B2240] hover:bg-[#0B2240] hover:text-white shadow-sm'
              : 'border-white/50 bg-black/35 text-white hover:bg-black/55'
          } px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm transition-colors cursor-pointer group`}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Works</span>
        </button>
        {project.category !== 'workshop' && project.id !== 'fading-spark' && project.id !== 'abhisarika' && project.id !== 'anatomy-of-ornament' && project.id !== '1941' && project.id !== 'silk-and-stone' && (
          <h2
            className={`font-avonia font-normal text-3xl sm:text-5xl leading-tight ${
              isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
            }`}
          >
            {project.title}
          </h2>
        )}
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto px-4 pb-10 sm:px-8">
        {project.pages.length > 0 ? (
          <div className={`mx-auto flex w-full flex-col gap-4 sm:gap-6 ${project.id === 'silk-and-stone' ? 'max-w-[98vw] xl:max-w-[1750px] 2xl:max-w-[1900px] px-1 sm:px-4' : project.id === 'fading-spark' || project.id === '1941' || project.id === 'anatomy-of-ornament' || project.id === 'abhisarika' ? 'max-w-7xl xl:max-w-[1450px] 2xl:max-w-[1600px] px-2 sm:px-6' : 'max-w-6xl'}`}>

            {project.pages.map((page, i) => {
              if (page.type === 'grid') {
                return (
                  <div key={`grid-${i}`} className={`relative flex flex-col w-full px-2 sm:px-0 ${project.id === 'fading-spark' ? 'pt-4 sm:pt-8 pb-4 sm:pb-8' : 'pt-8 sm:pt-16 pb-4 sm:pb-8'}`}>
                    {page.titleImage && (
                      <div className="flex justify-center w-full max-w-[500px] mx-auto py-2 mb-8">
                        <img src={page.titleImage} alt="Title" className={`w-full h-auto object-contain ${isLight ? 'mix-blend-darken' : ''}`} />
                      </div>
                    )}

                    {page.title && !page.titleImage && (
                      project.category === 'workshop' ? (
                        <WorkshopHeadline title={page.title} isLight={isLight} />
                      ) : (
                        <h2 className={`font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 ${
                          isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'
                        }`}>
                          {page.title}
                        </h2>
                      )
                    )}
                    {page.layout === 'lineup' || (project.id === 'fading-spark' && page.type === 'grid') ? (
                      <div className="w-full flex justify-center items-end py-1 sm:py-4 overflow-x-auto">
                        <div className="flex flex-row items-end justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 min-w-[640px] w-full max-w-[1400px] px-2 sm:px-4">
                          {page.images?.map((img, idx) => (
                            <div
                              key={img.src}
                              className="flex-1 flex flex-col items-center justify-end group cursor-pointer"
                              onClick={() => setSelectedImage(img.src)}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="w-auto h-[56vh] sm:h-[64vh] md:h-[70vh] lg:h-[74vh] max-h-[760px] max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-4"
                                style={{
                                  filter: 'drop-shadow(0 14px 28px rgba(84,13,33,0.22))'
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : page.layout === 'bento-center-stack' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-3 sm:gap-4 w-full h-auto sm:h-[85vh]">
                        {page.images?.map((img, idx) => {
                          let placementClass = '';
                          if (idx === 0) placementClass = 'sm:col-start-1 sm:row-start-1 sm:row-span-2';
                          else if (idx === 1) placementClass = 'sm:col-start-2 sm:row-start-1 sm:row-span-1';
                          else if (idx === 2) placementClass = 'sm:col-start-2 sm:row-start-2 sm:row-span-1';
                          else if (idx === 3) placementClass = 'sm:col-start-3 sm:row-start-1 sm:row-span-2';
                          
                          return (
                            <div
                              key={img.src}
                              className={`group relative w-full h-[65vh] sm:h-full overflow-hidden rounded-sm ${placementClass} ${
                                isLight ? '' : 'shadow-2xl'
                              }`}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                onClick={() => setSelectedImage(img.src)}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="block w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-[1.03]"
                                style={{
                                  objectPosition: img.objectPosition || 'center',
                                  ...(isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {})
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                                <span className="text-[11px] uppercase tracking-widest text-[#FAF6EE] font-mono bg-black/50 px-2 py-1 backdrop-blur-sm rounded-xs border border-white/15">
                                  Click to enlarge
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={`w-full ${
                        page.gridCols === 2
                          ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
                          : page.gridCols === 1
                          ? 'flex justify-center max-w-5xl mx-auto'
                          : 'flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 h-auto sm:h-[85vh]'
                      }`}>
                        {page.images?.map((img, idx) => (
                          <div key={img.src} className={`relative overflow-hidden w-full ${
                            page.gridCols === 2 ? '' : page.gridCols === 1 ? 'max-w-5xl flex justify-center' : 'sm:flex-1 h-full'
                          }`}>
                            <img
                              src={img.src}
                              alt={img.alt}
                              onClick={() => setSelectedImage(img.src)}
                              loading={i === 0 ? 'eager' : 'lazy'}
                              decoding="async"
                              className={`block w-full h-full cursor-pointer transition-transform hover:scale-[1.03] rounded-sm ${page.imageAspect || ''} ${page.imageFit ? `object-${page.imageFit}` : 'object-contain'} ${isLight ? '' : 'shadow-lg'}`}
                              style={{
                                objectPosition: img.objectPosition || 'center',
                                ...(isLight ? { filter: 'drop-shadow(0 10px 15px rgba(84,13,33,0.1))' } : {})
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className={`flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm ${isLight ? 'text-[#540D21]/90' : 'text-white/90'}`}>
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'text') {
                return (
                  <div key={`text-${i}`} className={`relative flex flex-col items-center justify-center min-h-[70vh] text-center ${project.id === 'silk-and-stone' ? 'max-w-6xl xl:max-w-7xl' : 'max-w-4xl'} mx-auto px-4 sm:px-6 py-8 sm:py-12 gap-8`}>
                    {project.id === '1941' ? (
                      <div className="w-full max-w-4xl lg:max-w-5xl flex flex-col items-center gap-10 sm:gap-14 text-center my-6 sm:my-10">
                        <div className="flex flex-col items-center text-center">
                          {page.subtitle && (
                            <span className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase font-bold text-[#0B2240] mb-6 sm:mb-8">
                              {page.subtitle}
                            </span>
                          )}
                          <h1 className="font-avonia text-5xl sm:text-7xl md:text-8xl tracking-widest uppercase pt-2 pb-2 text-[#0B2240] leading-tight drop-shadow-sm">
                            {page.title}
                          </h1>
                          <div className="w-20 sm:w-28 h-[2px] bg-[#0B2240]/40 mt-5 sm:mt-6" />
                        </div>
                        <div className="flex flex-col gap-8 sm:gap-10 text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-serif font-normal leading-relaxed sm:leading-[1.75] text-[#0B2240] text-center md:text-left drop-shadow-xs">
                          {page.paragraphs?.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        {page.titleImage && (
                          <div className="flex justify-center w-full max-w-[600px] py-4">
                            <img src={page.titleImage} alt="Title" className="w-full h-auto object-contain mix-blend-darken" />
                          </div>
                        )}
                        {page.title && !page.titleImage && (
                          project.category === 'workshop' ? (
                            <WorkshopHeadline title={page.title} isLight={isLight} />
                          ) : (
                            <div className="flex flex-col items-center mb-4 text-center">
                              {project.id === 'silk-and-stone' ? (
                                <>
                                  <h1
                                    className="font-avonia text-6xl sm:text-7xl lg:text-8xl tracking-widest leading-tight uppercase drop-shadow-md pt-2 pb-1"
                                    style={{ color: page.titleColor || page.textColor || '#FFA7E4' }}
                                  >
                                    {page.title}
                                  </h1>
                                  {page.subtitle && (
                                    <span
                                      className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase font-bold mt-2 mb-4"
                                      style={{ color: page.titleColor || page.textColor || '#FFA7E4' }}
                                    >
                                      {page.subtitle}
                                    </span>
                                  )}
                                  <div className="w-16 sm:w-24 h-[1.5px] bg-[#FFA7E4]/50 mb-6 sm:mb-8" />
                                </>
                              ) : (
                                <>
                                  {page.subtitle && (
                                    <span
                                      className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase font-bold mb-6 sm:mb-8"
                                      style={{ color: page.titleColor || page.textColor || (isLight ? '#540D21' : '#FAF6EE') }}
                                    >
                                      {page.subtitle}
                                    </span>
                                  )}
                                  <h1
                                    className={`${
                                      /^\d/.test(page.title)
                                        ? '[font-family:var(--font-readable-display)] tracking-[0.08em] [font-variant-numeric:lining-nums]'
                                        : 'font-avonia'
                                    } ${
                                      page.title.length > 15
                                        ? 'text-4xl sm:text-5xl md:text-6xl tracking-wider leading-tight'
                                        : 'text-6xl sm:text-7xl lg:text-8xl tracking-widest leading-relaxed'
                                    } uppercase drop-shadow-md py-2`}
                                    style={{ color: page.titleColor || page.textColor || (isLight ? '#540D21' : '#FAF6EE') }}
                                  >
                                    {page.title}
                                  </h1>
                                </>
                              )}
                            </div>
                          )
                        )}
                        {project.id === 'silk-and-stone' ? (
                          <>
                            {/* Editorial Magazine Layout: Left Column, Center Cutout Model, Right Column */}
                            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 my-4 sm:my-8 text-left">
                              {/* Left Column Text with Giant Pink Drop Cap 'A' */}
                              <div className="flex-1 flex flex-col justify-center space-y-6 lg:pr-4">
                                <p className="font-serif text-base sm:text-lg md:text-xl text-[#F8B4D9] leading-relaxed drop-shadow-sm text-justify sm:text-left">
                                  <span className="float-left text-6xl sm:text-7xl md:text-8xl font-serif font-light text-[#FFA7E4] leading-[0.75] pr-3 pt-1 uppercase drop-shadow-md">
                                    A
                                  </span>
                                  woman is not made of one kind of strength. She can be soft without being weak; she can be powerful without becoming hard. She can nurture and lead, surrender and command, be delicate and fierce — all at once.
                                </p>
                                <p className="font-serif text-base sm:text-lg md:text-xl text-[#F8B4D9] leading-relaxed drop-shadow-sm text-justify sm:text-left">
                                  Femininity and masculinity are not opposites fighting within her. They are two energies that shape who she is.
                                </p>
                              </div>

                                                            {/* Center Veiled Virgin Marble Sculpture */}
                              <div
                                className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] shrink-0 flex flex-col justify-center items-center my-4 lg:my-0 select-none cursor-pointer group relative"
                                onClick={() => setSelectedImage(conceptModelCutout)}
                                title="Click to view full image"
                              >
                                {/* Soft atmospheric pink aura behind the sculpture */}
                                <div className="absolute inset-0 bg-[#FFA7E4]/12 rounded-full blur-3xl pointer-events-none scale-75 group-hover:scale-95 transition-transform duration-700" />
                                <img
                                  src={conceptModelCutout}
                                  alt="Silk & Stone — 'The Veiled Virgin' by Giovanni Strazza"
                                  className="relative z-10 w-full h-auto max-h-[48vh] sm:max-h-[52vh] object-contain block mx-auto filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(255,167,228,0.22)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                />
                                {/* Sculpture Title & Sculptor Credit */}
                                <div className="relative z-10 mt-3 sm:mt-4 text-center px-2">
                                  <span className="block font-serif italic text-xs sm:text-sm md:text-base text-[#FFA7E4] tracking-wide drop-shadow-sm">
                                    &lsquo;The Veiled Virgin&rsquo;
                                  </span>
                                  <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F8B4D9]/80 mt-0.5">
                                    by Giovanni Strazza
                                  </span>
                                </div>
                              </div>

                              {/* Right Column Text */}
                              <div className="flex-1 flex flex-col justify-center space-y-6 lg:pl-4">
                                <p className="font-serif text-base sm:text-lg md:text-xl text-[#F8B4D9] leading-relaxed drop-shadow-sm text-justify sm:text-left">
                                  This collection explores that space between softness and strength — where sharp structures meet gentle curves, where masculine tailoring meets feminine movement, and where vulnerability becomes a form of power.
                                </p>
                                <div className="space-y-3">
                                  <p className="font-serif text-base sm:text-lg md:text-xl text-[#F8B4D9] leading-relaxed drop-shadow-sm text-justify sm:text-left">
                                    Because being a woman is not about choosing between strength and softness.
                                  </p>
                                  <p className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-[#FFA7E4] tracking-wide drop-shadow-md">
                                    It’s about having the freedom to be all.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Energy Continuum Axis + Staggered Zipper Graph */}
                            <DualEnergyDiagram onZoom={() => setSelectedImage(masculineFeminineEnergyImg)} />
                          </>
                        ) : (
                          <div
                            className={`flex flex-col gap-6 text-base sm:text-lg md:text-xl md:text-left font-serif leading-relaxed drop-shadow-sm ${
                              !page.textColor && (isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]')
                            }`}
                            style={page.textColor ? { color: page.textColor } : undefined}
                          >
                            {page.paragraphs?.map((p, pIdx) => (
                              <p key={pIdx}>{p}</p>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              }
              if (page.type === 'concept-note-silk-and-stone') {
                return (
                  <div key={`cn-silk-stone-${i}`} className="relative flex flex-col w-full px-2 sm:px-4 pt-2 sm:pt-4 pb-4 sm:pb-8 items-center">
                    {/* Header: Silk & Stone / Concept Note — Restored Exactly As Written Before */}
                    <div className="flex flex-col items-center mb-2 sm:mb-4 text-center select-none">
                      <h1 className="font-avonia text-6xl sm:text-7xl lg:text-8xl tracking-widest leading-tight uppercase text-[#FFA7E4] drop-shadow-md pt-1 pb-0">
                        Silk & Stone
                      </h1>
                      <span className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase font-bold text-[#FFA7E4] mt-1 mb-2">
                        Concept Note
                      </span>
                      <div className="w-16 sm:w-24 h-[1.5px] bg-[#FFA7E4]/50 mb-3 sm:mb-4" />
                    </div>

                    {/* Circular Contoured Editorial Layout with Center-Aligned Typography & Transparent Marble Bust */}
                    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8 xl:gap-14 relative mt-1 sm:mt-2 mb-2 sm:mb-4">
                      {/* Left Column: Contoured Poetic Stanzas */}
                      <div className="flex-1 flex flex-col items-center justify-start space-y-5 sm:space-y-6 text-center max-w-sm lg:max-w-md select-none pt-0 lg:pt-3">
                        {/* Stanza 1: Arcs gently around the upper veil & head */}
                        <div className="flex flex-col items-center text-center space-y-1">
                          <div className="flex items-baseline justify-center gap-2 mb-1">
                            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FFA7E4] font-light leading-none drop-shadow-md">
                              A
                            </span>
                            <span className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                              woman is not made of one kind of strength.
                            </span>
                          </div>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            She can be soft without being weak;
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            she can be powerful without becoming hard.
                          </p>
                        </div>

                        {/* Stanza 2: Contours along mid-veil and shoulder */}
                        <div className="flex flex-col items-center text-center space-y-1">
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            She can nurture and lead,
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            surrender and command,
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            be delicate and fierce — all at once.
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            Femininity and masculinity
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            are not opposites fighting within her.
                          </p>
                        </div>

                        {/* Stanza 3: Tucks gently in near pedestal */}
                        <div className="flex flex-col items-center text-center space-y-1">
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            They are two energies
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            that shape who she is.
                          </p>
                        </div>
                      </div>

                      {/* Center: Centered Veiled Virgin Marble Sculpture */}
                      <div
                        className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[390px] xl:w-[430px] shrink-0 flex flex-col justify-center items-center my-6 lg:my-0 select-none cursor-pointer group relative"
                        onClick={() => setSelectedImage(conceptModelCutout)}
                        title="Click to view full image"
                      >
                        {/* Soft atmospheric pink aura behind the marble sculpture */}
                        <div className="absolute inset-0 bg-[#FFA7E4]/14 rounded-full blur-3xl pointer-events-none scale-90 group-hover:scale-105 transition-transform duration-700" />
                        <img
                          src={conceptModelCutout}
                          alt="Silk & Stone — ‘The Veiled Virgin’ by Giovanni Strazza"
                          className="relative z-10 w-full h-auto max-h-[52vh] sm:max-h-[58vh] object-contain block mx-auto filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(255,167,228,0.2)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />

                        {/* Sculpture Attribution — Centered Directly Under the Sculpture */}
                        <div className="relative z-10 mt-3 sm:mt-4 text-center px-2 select-none">
                          <span className="block font-serif italic text-base sm:text-lg md:text-xl text-[#FFA7E4] tracking-wide drop-shadow-sm">
                            &ldquo;The Veiled Virgin&rdquo;
                          </span>
                          <span className="block font-mono text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#F8B4D9] mt-1 drop-shadow-sm">
                            BY GIOVANNI STRAZZA
                          </span>
                        </div>
                      </div>

                      {/* Right Column: Contoured Poetic Stanzas */}
                      <div className="flex-1 flex flex-col items-center justify-start space-y-5 sm:space-y-6 text-center max-w-sm lg:max-w-md select-none pt-0 lg:pt-3">
                        {/* Stanza 4: Arcs over crown and down right veil */}
                        <div className="flex flex-col items-center text-center space-y-1">
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            This collection explores
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            that space between softness and strength —
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            where sharp structures meet gentle curves,
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            where masculine tailoring meets
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            feminine movement, and where
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            vulnerability becomes a form of power.
                          </p>
                        </div>

                        {/* Stanza 5: Flows along right shoulder */}
                        <div className="flex flex-col items-center text-center space-y-1">
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            Because being a woman
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            is not about choosing between
                          </p>
                          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F8B4D9] leading-relaxed drop-shadow-sm">
                            strength and softness.
                          </p>
                          <p className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#FFA7E4] tracking-wide drop-shadow-md pt-1">
                            It’s about having the freedom to be all.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Energy Continuum Axis + Staggered Zipper Graph */}
                    <div className="w-full mt-8 sm:mt-12">
                      <DualEnergyDiagram onZoom={() => setSelectedImage(masculineFeminineEnergyImg)} />
                    </div>
                  </div>
                );
              }
              if (page.type === 'moodboard-silk-and-stone') {
                return (
                  <div key={`mb-silk-stone-${i}`} className="relative flex flex-col w-full px-0 sm:px-2 py-4 sm:py-8 items-center">
                    {/* Header: MOOD BOARD written directly over it in signature pink theme */}
                    <div className="flex flex-col items-center mb-6 sm:mb-10 text-center select-none">
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest text-[#FFA7E4] leading-tight drop-shadow-md">
                        Mood Board
                      </h2>
                    </div>

                    {/* Grand Scale Transparent Mood Board */}
                    <div
                      className="relative w-full max-w-[92vw] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1450px] mx-auto select-none cursor-pointer flex justify-center items-center"
                      onClick={() => setSelectedImage(silkAndStoneMoodboard)}
                      title="Click to view full-screen image"
                    >
                      <img
                        src={silkAndStoneMoodboard}
                        alt={page.alt || 'Silk & Stone Mood Board'}
                        loading="eager"
                        decoding="async"
                        className="w-auto h-auto max-h-[72vh] sm:max-h-[75vh] max-w-[88vw] object-contain block mx-auto transition-transform duration-700 ease-out hover:scale-[1.01] filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
                      />
                    </div>
                  </div>
                );
              }
              if (page.type === 'swatchboard-silk-and-stone') {
                return (
                  <div key={`swatch-silk-stone-${i}`} className="relative flex flex-col w-full px-0 sm:px-2 py-6 sm:py-12 items-center">
                    {/* Header: SILK & STONE / SWATCH BOARD */}
                    <div className="flex flex-col items-center mb-6 sm:mb-10 text-center">
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest text-[#FFA7E4] leading-tight drop-shadow-md">
                        {page.title || 'Silk & Stone'}
                      </h2>
                      {page.subtitle && (
                        <span className="text-xs sm:text-sm md:text-base font-serif font-normal tracking-[0.35em] uppercase text-[#FFA7E4] mt-2 sm:mt-3 drop-shadow-sm">
                          {page.subtitle}
                        </span>
                      )}
                    </div>

                    {/* Swatch Board Presentation - Floating without black background, Ultra-HD */}
                    <div
                      className="relative w-full max-w-[92vw] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1450px] mx-auto select-none cursor-pointer"
                      onClick={() => setSelectedImage(silkAndStoneSwatchboard)}
                      title="Click to view full-resolution swatch board"
                    >
                      <img
                        src={silkAndStoneSwatchboard}
                        alt={page.alt || 'Silk & Stone Swatch Board'}
                        loading="eager"
                        decoding="async"
                        className="w-full h-auto max-h-[72vh] sm:max-h-[75vh] max-w-[88vw] object-contain block mx-auto rounded-sm transition-transform duration-700 ease-out hover:scale-[1.01] filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
                      />
                    </div>
                  </div>
                );
              }
              if (page.type === 'silhouetteboard-silk-and-stone') {
                return (
                  <div key={`sil-silk-stone-${i}`} className="relative flex flex-col w-full px-0 sm:px-2 py-4 sm:py-8 items-center">
                    {/* Header: SILHOUETTE BOARD */}
                    <div className="flex flex-col items-center mb-6 sm:mb-8 text-center select-none">
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest text-[#FFA7E4] leading-tight drop-shadow-md">
                        Silhouette Board
                      </h2>
                    </div>

                    {/* Exact Silhouette Board Strip — Preserving exact compact scale */}
                    <div
                      className="relative w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto select-none cursor-pointer flex justify-center items-center group px-2 sm:px-4"
                      onClick={() => setSelectedImage(silkAndStoneSilhouetteboard)}
                      title="Click to view full-resolution silhouette board"
                    >
                      <img
                        src={silkAndStoneSilhouetteboard}
                        alt={page.alt || 'Silk & Stone — Silhouette Board'}
                        loading="eager"
                        decoding="async"
                        className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] md:max-h-[340px] lg:max-h-[360px] object-contain block mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(255,167,228,0.12)]"
                      />
                    </div>
                  </div>
                );
              }
              if (page.type === 'inspiration-garment1-silk-and-stone') {
                return (
                  <div key={`insp-g1-${i}`} className="relative flex flex-col w-full px-0 sm:px-2 py-4 sm:py-8 items-center">
                    {/* Header: INSPIRATION / - 01 */}
                    <div className="flex flex-col items-center mb-6 sm:mb-10 text-center select-none">
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest text-[#FFA7E4] leading-tight drop-shadow-md">
                        <span className="block">Inspiration</span>
                        <span className="block mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl tracking-[0.25em]">- 01</span>
                      </h2>
                    </div>

                    {/* Grand Scale Transparent Inspiration Collage — IN THIS EXACT LAYOUT */}
                    <div
                      className="relative w-full max-w-[92vw] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1450px] mx-auto select-none cursor-pointer flex justify-center items-center group"
                      onClick={() => setSelectedImage(garment1InspirationLayoutHd)}
                      title="Click to view full-resolution collage"
                    >
                      <img
                        src={garment1InspirationLayoutHd}
                        alt={page.alt || 'Silk & Stone — Inspiration - 01'}
                        loading="eager"
                        decoding="async"
                        className="w-auto h-auto max-h-[72vh] sm:max-h-[75vh] max-w-[88vw] object-contain block mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01] filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] drop-shadow-[0_0_35px_rgba(255,167,228,0.12)]"
                      />
                    </div>

                    {/* Concept note just after inspiration board — formatted in max 3 lines */}
                    <div className="mt-8 sm:mt-12 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 select-none">
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[11px] sm:text-xs font-mono tracking-[0.35em] uppercase text-[#FFA7E4] font-bold mb-3 sm:mb-4">
                          Concept Note
                        </span>
                        <div className="w-12 sm:w-16 h-[1.5px] bg-[#FFA7E4]/50 mb-5 sm:mb-6" />

                        <div className="flex flex-col gap-2.5 sm:gap-3 font-serif italic text-sm sm:text-[15px] md:text-base lg:text-[1.05rem] xl:text-[1.1rem] leading-relaxed text-[#FEDEE1] drop-shadow-sm max-w-[1350px] text-center">
                          <p className="whitespace-normal xl:whitespace-nowrap">
                            Basalt is born from fire, cooled into strong, geometric columns, and water flows over it, softening its edges without force.
                          </p>
                          <p className="whitespace-normal xl:whitespace-nowrap">
                            A woman is made the same way: stone within her (structure, protection, certainty) and water within her (empathy, adaptability, flow).
                          </p>
                          <p className="whitespace-normal xl:whitespace-nowrap">
                            In this look, the dark grey colour is the basalt and the flowing drape of water, is shown by Organza black shirt Underneath.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (page.type === 'inspiration-garment2-silk-and-stone') {
                return (
                  <div key={`insp-g2-${i}`} className="relative flex flex-col w-full px-0 sm:px-2 py-4 sm:py-8 items-center">
                    {/* Header: INSPIRATION / - 02 */}
                    <div className="flex flex-col items-center mb-6 sm:mb-10 text-center select-none">
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest text-[#FFA7E4] leading-tight drop-shadow-md">
                        <span className="block">Inspiration</span>
                        <span className="block mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl tracking-[0.25em]">- 02</span>
                      </h2>
                    </div>

                    {/* Grand Scale Transparent Inspiration Collage */}
                    <div
                      className="relative w-full max-w-[92vw] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1450px] mx-auto select-none cursor-pointer flex justify-center items-center group"
                      onClick={() => setSelectedImage(garment2InspirationLayoutHd)}
                      title="Click to view full-resolution collage"
                    >
                      <img
                        src={garment2InspirationLayoutHd}
                        alt={page.alt || 'Silk & Stone — Inspiration - 02'}
                        loading="eager"
                        decoding="async"
                        className="w-auto h-auto max-h-[72vh] sm:max-h-[75vh] max-w-[88vw] object-contain block mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01] filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] drop-shadow-[0_0_35px_rgba(255,167,228,0.12)]"
                      />
                    </div>

                    {/* Concept note if present */}
                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 select-none">
                        <div className="flex flex-col items-center text-center">
                          <span className="text-[11px] sm:text-xs font-mono tracking-[0.35em] uppercase text-[#FFA7E4] font-bold mb-3 sm:mb-4">
                            Concept Note
                          </span>
                          <div className="w-12 sm:w-16 h-[1.5px] bg-[#FFA7E4]/50 mb-5 sm:mb-6" />

                          <div className="flex flex-col gap-2.5 sm:gap-3 font-serif italic text-sm sm:text-[15px] md:text-base lg:text-[1.05rem] xl:text-[1.1rem] leading-relaxed text-[#FEDEE1] drop-shadow-sm max-w-[1350px] text-center">
                            {page.paragraphs.map((para, pIdx) => (
                              <p key={pIdx} className="whitespace-normal xl:whitespace-nowrap">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'inspiration-garment3-silk-and-stone') {
                return (
                  <div key={`insp-g3-${i}`} className="relative flex flex-col w-full px-0 sm:px-2 py-4 sm:py-8 items-center">
                    {/* Header: INSPIRATION / - 03 */}
                    <div className="flex flex-col items-center mb-6 sm:mb-10 text-center select-none">
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest text-[#FFA7E4] leading-tight drop-shadow-md">
                        <span className="block">Inspiration</span>
                        <span className="block mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl tracking-[0.25em]">- 03</span>
                      </h2>
                    </div>

                    {/* Grand Scale Transparent Inspiration Collage */}
                    <div
                      className="relative w-full max-w-[92vw] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1450px] mx-auto select-none cursor-pointer flex justify-center items-center group"
                      onClick={() => setSelectedImage(garment3InspirationLayoutHd)}
                      title="Click to view full-resolution collage"
                    >
                      <img
                        src={garment3InspirationLayoutHd}
                        alt={page.alt || 'Silk & Stone — Inspiration - 03'}
                        loading="eager"
                        decoding="async"
                        className="w-auto h-auto max-h-[72vh] sm:max-h-[75vh] max-w-[88vw] object-contain block mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01] filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] drop-shadow-[0_0_35px_rgba(255,167,228,0.12)]"
                      />
                    </div>

                    {/* Concept note if present */}
                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 select-none">
                        <div className="flex flex-col items-center text-center">
                          <span className="text-[11px] sm:text-xs font-mono tracking-[0.35em] uppercase text-[#FFA7E4] font-bold mb-3 sm:mb-4">
                            Concept Note
                          </span>
                          <div className="w-12 sm:w-16 h-[1.5px] bg-[#FFA7E4]/50 mb-5 sm:mb-6" />

                          <div className="flex flex-col gap-2.5 sm:gap-3 font-serif italic text-sm sm:text-[15px] md:text-base lg:text-[1.05rem] xl:text-[1.1rem] leading-relaxed text-[#FEDEE1] drop-shadow-sm max-w-[1350px] text-center">
                            {page.paragraphs.map((para, pIdx) => (
                              <p key={pIdx} className="whitespace-normal xl:whitespace-nowrap">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'moodboard-1941') {
                return (
                  <div key={`mb-1941-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
                      {page.subtitle && (
                        <span className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase font-bold text-[#0B2240] mb-6 sm:mb-8">
                          {page.subtitle}
                        </span>
                      )}
                      {page.title && (
                        <h2 className="font-avonia font-normal text-5xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest text-[#0B2240] pt-2 pb-2 leading-tight drop-shadow-sm">
                          {page.title}
                        </h2>
                      )}
                    </div>

                    {/* Grand Proportional Collage (Seamless floating composition, zero black container box) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-4 sm:my-8 select-none bg-transparent"
                      style={{ aspectRatio: '698 / 448' }}
                    >
                      {/* 1. Bougainvillea & Stone Building (Top Left) */}
                      <div
                        className="absolute left-[0.00%] top-[8.03%] w-[31.95%] h-[70.99%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl rounded-xs"
                        onClick={() => setSelectedImage(bougainvilleaArch)}
                      >
                        <img
                          src={bougainvilleaArch}
                          alt="Bougainvillea & Stone Building"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Bougainvillea</span>
                        </div>
                      </div>

                      {/* 2. White Stucco Wall with Arched Wrought-Iron Window (Bottom Left) */}
                      <div
                        className="absolute left-[10.02%] top-[37.50%] w-[27.94%] h-[57.82%] z-[20] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl rounded-xs"
                        onClick={() => setSelectedImage(archedWindow)}
                      >
                        <img
                          src={archedWindow}
                          alt="Arched Window & Ivy"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Arched Window</span>
                        </div>
                      </div>

                      {/* 3. Fountain Courtyard with Classical Statue & Crests (Top Center) */}
                      <div
                        className="absolute left-[31.95%] top-[0.00%] w-[26.65%] h-[52.46%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl rounded-xs"
                        onClick={() => setSelectedImage(italianFountain)}
                      >
                        <img
                          src={italianFountain}
                          alt="Classical Italian Fountain"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Italian Fountain</span>
                        </div>
                      </div>

                      {/* 4. Man in Linen Suit by Balustrade (Bottom Center) */}
                      <div
                        className="absolute left-[37.96%] top-[51.78%] w-[30.23%] h-[48.22%] z-[25] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl rounded-xs"
                        onClick={() => setSelectedImage(linenSuitMan)}
                      >
                        <img
                          src={linenSuitMan}
                          alt="Linen Suit Sprezzatura"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Linen Suit</span>
                        </div>
                      </div>

                      {/* 5. Café de Flore Bistro Table (Top Right) */}
                      <div
                        className="absolute left-[58.60%] top-[9.38%] w-[25.07%] h-[68.75%] z-[12] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl rounded-xs"
                        onClick={() => setSelectedImage(cafeDeFlore)}
                      >
                        <img
                          src={cafeDeFlore}
                          alt="Café de Flore Table"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Café de Flore</span>
                        </div>
                      </div>

                      {/* 6. Weathered Wall with 'Think Poetic' (Far Right) */}
                      <div
                        className="absolute left-[83.67%] top-[25.67%] w-[16.33%] h-[67.86%] z-[18] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl rounded-xs"
                        onClick={() => setSelectedImage(thinkPoetic)}
                      >
                        <img
                          src={thinkPoetic}
                          alt="Think Poetic"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Think Poetic</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-[#FAF6EE]/85">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'inspiration-1941') {
                return (
                  <div key={`insp-1941-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
                      {page.subtitle && (
                        <span className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase font-bold text-[#0B2240] mb-6 sm:mb-8">
                          {page.subtitle}
                        </span>
                      )}
                      {page.title && (
                        <h2 className="font-avonia font-normal text-5xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest text-[#0B2240] pt-2 pb-2 leading-tight drop-shadow-sm">
                          {page.title}
                        </h2>
                      )}
                    </div>

                    {/* Grand Proportional Collage (Seamless floating composition, zero black container box) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-4 sm:my-8 select-none bg-transparent"
                      style={{ aspectRatio: '722 / 404' }}
                    >
                      {/* 1. Pedro Alonso · Berlin holding wine glass (Left, 348x773 -> 0.4502 ratio) */}
                      <div
                        className="absolute left-[0.00%] top-[5.93%] w-[20.14%] h-[79.87%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(berlinVest)}
                      >
                        <img
                          src={berlinVest}
                          alt="Pedro Alonso · Berlin"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Sartorial Nonchalance</span>
                        </div>
                      </div>

                      {/* 2. 221B Baker Street Black Wooden Door (Center Left Overlap, 365x713 -> 0.5119 ratio) */}
                      <div
                        className="absolute left-[18.55%] top-[15.58%] w-[24.18%] h-[84.33%] z-[20] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                        onClick={() => setSelectedImage(door221b)}
                      >
                        <img
                          src={door221b}
                          alt="221B Baker Street Door"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">221B Baker St</span>
                        </div>
                      </div>

                      {/* 3. Sherlock Investigative Newsprint Collage (Top Center) */}
                      <div
                        className="absolute left-[28.66%] top-[0.00%] w-[29.09%] h-[48.22%] z-[5] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(sherlockWall)}
                      >
                        <img
                          src={sherlockWall}
                          alt="Sherlock Newsprint Wall"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Investigative Newsprint</span>
                        </div>
                      </div>

                      {/* 4. Henry Cavill as Sherlock in Library (Top Right Center, 384x476 -> 0.8067 ratio) */}
                      <div
                        className="absolute left-[53.59%] top-[5.93%] w-[22.16%] h-[49.04%] z-[12] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(henrySherlock)}
                      >
                        <img
                          src={henrySherlock}
                          alt="Henry Cavill · Sherlock"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Victorian Intellect</span>
                        </div>
                      </div>

                      {/* 5. Tailored Jacket Script Calligraphy (Bottom Center, 312x470 -> 0.6638 ratio) */}
                      <div
                        className="absolute left-[38.78%] top-[48.22%] w-[19.21%] h-[51.69%] z-[16] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(jacketScript)}
                      >
                        <img
                          src={jacketScript}
                          alt="Tailored Jacket Script"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Calligraphy Script</span>
                        </div>
                      </div>

                      {/* 6. Tailored White Trouser Hem with Tab Cuff (Bottom Right Center, 281x351 -> 0.8006 ratio) */}
                      <div
                        className="absolute left-[57.75%] top-[59.84%] w-[18.00%] h-[40.16%] z-[18] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                        onClick={() => setSelectedImage(trouserCuff)}
                      >
                        <img
                          src={trouserCuff}
                          alt="Tailored Tab Cuff"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Bespoke Tab Cuff</span>
                        </div>
                      </div>

                      {/* 7. Álvaro Morte in Pinstripe Suit (Far Right, 419x744 -> 0.5632 ratio) */}
                      <div
                        className="absolute left-[75.75%] top-[16.56%] w-[24.25%] h-[76.91%] z-[14] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(pinstripeSuit)}
                      >
                        <img
                          src={pinstripeSuit}
                          alt="Álvaro Morte · Pinstripe Suit"
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Pinstripe Tailoring</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-[#FAF6EE]/85">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'development-1941') {
                return (
                  <div key={`dev-1941-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
                      {page.subtitle && (
                        <span className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase font-bold text-[#0B2240] mb-6 sm:mb-8">
                          {page.subtitle}
                        </span>
                      )}
                      {page.title && (
                        <h2 className="font-avonia font-normal text-5xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest text-[#0B2240] pt-2 pb-2 leading-tight drop-shadow-sm">
                          {page.title}
                        </h2>
                      )}
                    </div>

                    {/* Grand Proportional Collage (Seamless floating composition, zero black container box) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-4 sm:my-8 select-none bg-transparent"
                      style={{ aspectRatio: '697 / 442' }}
                    >
                      {/* 1. Industrial Sewing Machine Workstation (Left) */}
                      <div
                        className="absolute left-[0.00%] top-[16.74%] w-[30.27%] h-[73.98%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(devSewingMachine)}
                      >
                        <img
                          src={devSewingMachine}
                          alt="Industrial Sewing Machine Workstation"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Machine Construction</span>
                        </div>
                      </div>

                      {/* 2. Tailoring Pattern Layout on Wood Cutting Table (Center Top) */}
                      <div
                        className="absolute left-[22.81%] top-[0.00%] w-[39.74%] h-[46.83%] z-[5] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(devPatternTable)}
                      >
                        <img
                          src={devPatternTable}
                          alt="Pattern Drafting & Paisley Interlining"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Pattern Engineering</span>
                        </div>
                      </div>

                      {/* 3. Navy Wool Fabric & Master Pattern Cutting Table (Center Bottom) */}
                      <div
                        className="absolute left-[30.41%] top-[46.83%] w-[32.14%] h-[53.17%] z-[8] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(devFabricCutting)}
                      >
                        <img
                          src={devFabricCutting}
                          alt="Master Fabric Cutting & Lay"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Bespoke Cutting Lay</span>
                        </div>
                      </div>

                      {/* 4. Grey Pinstripe Jacket Tailoring & Chalk Markings (Center Right Top) */}
                      <div
                        className="absolute left-[60.26%] top-[13.12%] w-[23.68%] h-[49.77%] z-[12] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(devPinstripeJacket)}
                      >
                        <img
                          src={devPinstripeJacket}
                          alt="Pinstripe Tailoring & Chalk Balance Marks"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Tailor's Chalk Balance</span>
                        </div>
                      </div>

                      {/* 5. Curated Textile Swatches Roll (Far Right) */}
                      <div
                        className="absolute left-[84.07%] top-[21.04%] w-[15.93%] h-[57.01%] z-[14] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(devTextileSwatches)}
                      >
                        <img
                          src={devTextileSwatches}
                          alt="Curated Textile Swatches"
                          className="w-full h-full object-cover object-[75%_center]"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Sartorial Palette</span>
                        </div>
                      </div>

                      {/* 6. Rich Copper Paisley Jacquard Lining in Hand (Bottom Center Right) */}
                      <div
                        className="absolute left-[62.55%] top-[60.40%] w-[14.49%] h-[39.59%] z-[16] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(devPaisleyLining)}
                      >
                        <img
                          src={devPaisleyLining}
                          alt="Copper Paisley Jacquard Lining"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Internal Paisley Lining</span>
                        </div>
                      </div>

                      {/* 7. Solid Brass Cinch Back Vest Buckle (Bottom Right) */}
                      <div
                        className="absolute left-[77.04%] top-[78.05%] w-[16.08%] h-[21.95%] z-[18] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                        onClick={() => setSelectedImage(devBrassBuckle)}
                      >
                        <img
                          src={devBrassBuckle}
                          alt="Solid Brass Cinch Back Buckle"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Vintage Brass Hardware</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-[#FAF6EE]/85">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'photography-1941') {
                return (
                  <div key={`photo-1941-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
                      {page.subtitle && (
                        <span className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase font-bold text-[#0B2240] mb-6 sm:mb-8">
                          {page.subtitle}
                        </span>
                      )}
                      {page.title && (
                        <h2 className="font-avonia font-normal text-5xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest text-[#0B2240] pt-2 pb-2 leading-tight drop-shadow-sm">
                          {page.title}
                        </h2>
                      )}
                    </div>

                    {/* Grand Proportional Collage (Seamless floating composition, zero black container box) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-4 sm:my-8 select-none bg-transparent"
                      style={{ aspectRatio: '738 / 444' }}
                    >
                      {/* 1. Afternoon Terrace Espresso Ritual (Far Left) */}
                      <div
                        className="absolute left-[0.00%] top-[13.51%] w-[27.37%] h-[81.08%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                        onClick={() => setSelectedImage(photoEspressoCafe)}
                      >
                        <img
                          src={photoEspressoCafe}
                          alt="Afternoon Terrace Espresso Ritual"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Terrace Ritual</span>
                        </div>
                      </div>

                      {/* 2. Pinstripe Double-Breasted Suit by Street Lamppost (Center Top) */}
                      <div
                        className="absolute left-[32.39%] top-[0.00%] w-[35.78%] h-[57.43%] z-[5] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(photoPinstripeStreet)}
                      >
                        <img
                          src={photoPinstripeStreet}
                          alt="Pinstripe Street Nonchalance"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Savile Row Nonchalance</span>
                        </div>
                      </div>

                      {/* 3. Architectural Spiral Staircase Perspective (Center Bottom) */}
                      <div
                        className="absolute left-[27.78%] top-[40.09%] w-[24.12%] h-[58.78%] z-[8] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(photoSpiralStaircase)}
                      >
                        <img
                          src={photoSpiralStaircase}
                          alt="Architectural Staircase Perspective"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Architectural Perspective</span>
                        </div>
                      </div>

                      {/* 4. High-Contrast Monochrome Overcoat Silhouette on Stairs (Rightmost) */}
                      <div
                        className="absolute left-[75.74%] top-[13.51%] w-[24.26%] h-[64.41%] z-[6] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(photoShadowSilhouette)}
                      >
                        <img
                          src={photoShadowSilhouette}
                          alt="High-Contrast Overcoat Silhouette"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Monochrome Silhouette</span>
                        </div>
                      </div>

                      {/* 5. Tactile Tie & Watch Adjustment in Textured Suit (Center Right Foreground) */}
                      <div
                        className="absolute left-[52.04%] top-[34.24%] w-[23.71%] h-[65.76%] z-[20] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                        onClick={() => setSelectedImage(photoTieAdjustment)}
                      >
                        <img
                          src={photoTieAdjustment}
                          alt="Tactile Tie & Watch Adjustment"
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Sartorial Detail</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-[#FAF6EE]/85">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'lookbook-1941') {
                return (
                  <div key={`lookbook-1941-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
                      {page.subtitle && (
                        <span className="text-sm sm:text-base md:text-lg font-mono tracking-[0.35em] uppercase font-bold text-[#0B2240] mb-6 sm:mb-8">
                          {page.subtitle}
                        </span>
                      )}
                      {page.title && (
                        <h2 className="font-avonia font-normal text-5xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest text-[#0B2240] pt-2 pb-2 leading-tight drop-shadow-sm">
                          {page.title}
                        </h2>
                      )}

                      {/* Layout Mode Switcher */}
                      <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6">
                        <button
                          type="button"
                          onClick={() => setLookbookView('spreads')}
                          className={`px-3.5 sm:px-5 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-full border cursor-pointer ${
                            lookbookView === 'spreads'
                              ? 'border-[#0B2240] bg-[#0B2240] text-white font-bold shadow-sm scale-105'
                              : 'border-[#0B2240]/25 text-[#0B2240]/70 hover:border-[#0B2240] hover:text-[#0B2240]'
                          }`}
                        >
                          Curated Spreads
                        </button>
                        <button
                          type="button"
                          onClick={() => setLookbookView('grid')}
                          className={`px-3.5 sm:px-5 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-full border cursor-pointer ${
                            lookbookView === 'grid'
                              ? 'border-[#0B2240] bg-[#0B2240] text-white font-bold shadow-sm scale-105'
                              : 'border-[#0B2240]/25 text-[#0B2240]/70 hover:border-[#0B2240] hover:text-[#0B2240]'
                          }`}
                        >
                          Editorial Gallery
                        </button>
                      </div>
                    </div>

                    {lookbookView === 'spreads' ? (
                      <div className="flex flex-col gap-10 sm:gap-16 w-full">
                        {/* Act I: Sartorial Silhouette */}
                        <div className="flex flex-col w-full">
                          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                            <div className="h-[1px] w-8 sm:w-20 bg-[#0B2240]/20" />
                            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#0B2240]/80 font-semibold text-center">
                              Act I · Sartorial Posture & Street Tailoring
                            </span>
                            <div className="h-[1px] w-8 sm:w-20 bg-[#0B2240]/20" />
                          </div>

                          {/* Spread 1 Proportional Container (Zero Artificial Background, Seamless Floating HD) */}
                          <div
                            className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto select-none bg-transparent"
                            style={{ aspectRatio: '1200 / 680' }}
                          >
                            {/* 1. Railing Sepia (Left Hero Portrait) */}
                            <div
                              className="absolute left-[0.00%] top-[4.41%] w-[34.50%] h-[91.18%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                              onClick={() => setSelectedImage(lookbookRailingSepia)}
                            >
                              <img
                                src={lookbookRailingSepia}
                                alt="Sartorial Posture · Road Railing"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Sartorial Posture · Road Railing</span>
                              </div>
                            </div>

                            {/* 2. Collar Script (Center Top Landscape) */}
                            <div
                              className="absolute left-[31.00%] top-[2.00%] w-[38.33%] h-[45.15%] z-[8] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                              onClick={() => setSelectedImage(lookbookEmbroideryScript)}
                            >
                              <img
                                src={lookbookEmbroideryScript}
                                alt="Collar Calligraphy · L'Arte Della Stravaganza Sottile"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Collar Calligraphy · L'Arte Della Stravaganza Sottile</span>
                              </div>
                            </div>

                            {/* 3. Seated Steps (Center Bottom Portrait) */}
                            <div
                              className="absolute left-[32.50%] top-[44.00%] w-[19.42%] h-[51.47%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                              onClick={() => setSelectedImage(lookbookStepsSeatedSepia)}
                            >
                              <img
                                src={lookbookStepsSeatedSepia}
                                alt="Nonchalant Ease · Concrete Steps"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Nonchalant Ease · Concrete Steps</span>
                              </div>
                            </div>

                            {/* 4. Cinch Sepia (Right Top Portrait) */}
                            <div
                              className="absolute left-[77.00%] top-[2.00%] w-[17.75%] h-[47.06%] z-[9] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                              onClick={() => setSelectedImage(lookbookCinchSepia)}
                            >
                              <img
                                src={lookbookCinchSepia}
                                alt="Waistband Hardware · Brass Cinch Tab"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Waistband Hardware · Brass Cinch Tab</span>
                              </div>
                            </div>

                            {/* 5. Lining Sepia (Right Bottom Portrait) */}
                            <div
                              className="absolute left-[55.50%] top-[40.00%] w-[21.08%] h-[55.88%] z-[12] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                              onClick={() => setSelectedImage(lookbookLiningSepia)}
                            >
                              <img
                                src={lookbookLiningSepia}
                                alt="Interior Reveal · Copper Paisley Jacquard"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Interior Reveal · Copper Paisley Jacquard</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Act II: Sprezzatura & Mediterranean Light */}
                        <div className="flex flex-col w-full">
                          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                            <div className="h-[1px] w-8 sm:w-20 bg-[#0B2240]/20" />
                            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#0B2240]/80 font-semibold text-center">
                              Act II · Sprezzatura & Mediterranean Light
                            </span>
                            <div className="h-[1px] w-8 sm:w-20 bg-[#0B2240]/20" />
                          </div>

                          {/* Spread 2 Proportional Container (Zero Artificial Background, Seamless Floating HD) */}
                          <div
                            className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto select-none bg-transparent"
                            style={{ aspectRatio: '1200 / 680' }}
                          >
                            {/* 6. Walking White Bib Shirt (Left Top Landscape) */}
                            <div
                              className="absolute left-[0.00%] top-[2.00%] w-[40.00%] h-[46.91%] z-[8] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                              onClick={() => setSelectedImage(lookbookWhiteBibShirt)}
                            >
                              <img
                                src={lookbookWhiteBibShirt}
                                alt="Curved Bib Architecture · Walking Posture"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Curved Bib Architecture · Walking Posture</span>
                              </div>
                            </div>

                            {/* 7. Cinch Color (Left Bottom Portrait) */}
                            <div
                              className="absolute left-[6.00%] top-[44.00%] w-[19.42%] h-[51.47%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                              onClick={() => setSelectedImage(lookbookCinchColor)}
                            >
                              <img
                                src={lookbookCinchColor}
                                alt="Solid Brass Hardware · Golden Sunlight"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Solid Brass Hardware · Golden Sunlight</span>
                              </div>
                            </div>

                            {/* 8. Bougainvillea Wall (Center Portrait) */}
                            <div
                              className="absolute left-[35.00%] top-[7.00%] w-[32.25%] h-[85.29%] z-[12] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                              onClick={() => setSelectedImage(lookbookBougainvilleaWall)}
                            >
                              <img
                                src={lookbookBougainvilleaWall}
                                alt="Bougainvillea Contrast · Architectural Wall"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Bougainvillea Contrast · Architectural Wall</span>
                              </div>
                            </div>

                            {/* 9. Lining Color (Right Top Portrait) */}
                            <div
                              className="absolute left-[78.00%] top-[2.00%] w-[17.75%] h-[47.06%] z-[9] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-xl"
                              onClick={() => setSelectedImage(lookbookLiningColor)}
                            >
                              <img
                                src={lookbookLiningColor}
                                alt="Sartorial Secret · Warm Copper Lining"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Sartorial Secret · Warm Copper Lining</span>
                              </div>
                            </div>

                            {/* 10. Bougainvillea Car (Right Hero Portrait) */}
                            <div
                              className="absolute left-[65.00%] top-[20.00%] w-[28.83%] h-[76.47%] z-[14] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.02] group shadow-2xl"
                              onClick={() => setSelectedImage(lookbookBougainvilleaCar)}
                            >
                              <img
                                src={lookbookBougainvilleaCar}
                                alt="The Living Garment · Bougainvillea Canopy"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 pointer-events-none">
                                <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">The Living Garment · Bougainvillea Canopy</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Editorial Gallery Grid View */
                      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 my-4 sm:my-8">
                        {[
                          { src: lookbookRailingSepia, title: "Sartorial Posture · Road Railing", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookEmbroideryScript, title: "Collar Calligraphy · L'Arte Della Stravaganza", aspect: "aspect-[3/2]", colSpan: "sm:col-span-2" },
                          { src: lookbookStepsSeatedSepia, title: "Nonchalant Ease · Concrete Steps", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookCinchSepia, title: "Waistband Hardware · Brass Cinch Tab", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookLiningSepia, title: "Interior Reveal · Copper Paisley Jacquard", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookWhiteBibShirt, title: "Curved Bib Architecture · Walking Posture", aspect: "aspect-[3/2]", colSpan: "sm:col-span-2" },
                          { src: lookbookCinchColor, title: "Solid Brass Hardware · Golden Sunlight", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookBougainvilleaWall, title: "Bougainvillea Contrast · Architectural Wall", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookLiningColor, title: "Sartorial Secret · Warm Copper Lining", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" },
                          { src: lookbookBougainvilleaCar, title: "The Living Garment · Bougainvillea Canopy", aspect: "aspect-[2/3]", colSpan: "sm:col-span-1" }
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={`relative overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${item.colSpan}`}
                            onClick={() => setSelectedImage(item.src)}
                          >
                            <div className={`w-full ${item.aspect} overflow-hidden`}>
                              <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                              <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-2 py-1 shadow-md backdrop-blur-sm">
                                {item.title}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-[#FAF6EE]/85">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (page.type === 'moodboard-abhisarika-garment2') {
                return (
                  <div key={`mb-ab-g2-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-6 sm:mb-10 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* Grand Full-Width Mood Board Collage (Zero Artificial Black Background, Seamless Composition) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-4 sm:my-8 select-none bg-transparent"
                      style={{ aspectRatio: '554 / 439' }}
                    >
                      {/* 1. Mirror with Candle (Top Left) */}
                      <div
                        className="absolute left-[0.00%] top-[0.00%] w-[35.20%] h-[38.50%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Mirror)}
                      >
                        <img 
                          src={abhisarikaMb2Mirror} 
                          alt="Gilded Baroque Mirror & Candlestick" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Gilded Mirror</span>
                        </div>
                      </div>

                      {/* 2. Cascading Crystal Chandelier (Top Center) */}
                      <div
                        className="absolute left-[35.20%] top-[0.00%] w-[28.00%] h-[72.00%] z-[20] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Chandelier)}
                      >
                        <img 
                          src={abhisarikaMb2Chandelier} 
                          alt="Cascading Crystal Chandelier" 
                          className="w-full h-full object-cover object-top" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Crystal Chandelier</span>
                        </div>
                      </div>

                      {/* 3. Cocktail Coupe with Menu (Top Right) */}
                      <div
                        className="absolute left-[63.20%] top-[0.00%] w-[36.80%] h-[39.50%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Cocktail)}
                      >
                        <img 
                          src={abhisarikaMb2Cocktail} 
                          alt="Amber Cocktail Coupe with Dried Citrus" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Coupe & Menu</span>
                        </div>
                      </div>

                      {/* 4. Vintage Telephone in Hand (Bottom Left) */}
                      <div
                        className="absolute left-[0.00%] top-[38.50%] w-[35.20%] h-[61.50%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Telephone)}
                      >
                        <img 
                          src={abhisarikaMb2Telephone} 
                          alt="Gilded Rotary Telephone in Hand" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Gilded Telephone</span>
                        </div>
                      </div>

                      {/* 5. Gold Metallic Vinyl on Turntable (Bottom Right) */}
                      <div
                        className="absolute left-[63.20%] top-[39.50%] w-[36.80%] h-[60.50%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Vinyl)}
                      >
                        <img 
                          src={abhisarikaMb2Vinyl} 
                          alt="Gold Metallic Vinyl Record on Turntable" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Metallic Vinyl</span>
                        </div>
                      </div>

                      {/* 6. Jeweled Panther Art Deco Mosaic (Bottom Center Arch) */}
                      <div
                        className="absolute left-[35.20%] top-[72.00%] w-[28.00%] h-[28.00%] z-[25] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Leopard)}
                      >
                        <img 
                          src={abhisarikaMb2Leopard} 
                          alt="Jeweled Panther Art Deco Mosaic" 
                          className="w-full h-full object-contain object-bottom" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Art Deco Panther</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-4 text-base sm:text-lg font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'moodboard-abhisarika-garment3') {
                return (
                  <div key={`mb-ab-g3-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* High-Resolution Interactive Mood Board Collage (Layout Reference Composition, Seamless Transparent Canvas) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-6 sm:my-10 select-none bg-transparent"
                      style={{ aspectRatio: '1024 / 490' }}
                    >
                      {/* 1. Pleated Turquoise Fan Netting (Left Column) */}
                      <div
                        className="absolute left-[0.00%] top-[10.50%] w-[29.03%] h-[89.50%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
                        onClick={() => setSelectedImage(abhisarikaMb3FanNet)}
                      >
                        <img 
                          src={abhisarikaMb3FanNet} 
                          alt="Pleated Turquoise Fan Netting" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Pleated Fan Net</span>
                        </div>
                      </div>

                      {/* 2. Emerald Mineral Crystals with Gold Veining (Top Mid-Left) */}
                      <div
                        className="absolute left-[29.03%] top-[0.00%] w-[25.35%] h-[39.47%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
                        onClick={() => setSelectedImage(abhisarikaMb3EmeraldStones)}
                      >
                        <img 
                          src={abhisarikaMb3EmeraldStones} 
                          alt="Emerald Mineral Crystals with Gold Veining" 
                          className="w-full h-full object-cover object-top" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Emerald Kintsugi</span>
                        </div>
                      </div>

                      {/* 3. Bioluminescent Nocturnal Shoreline & Starry Sky (Top Mid-Right) */}
                      <div
                        className="absolute left-[54.38%] top-[0.00%] w-[19.32%] h-[60.53%] z-[20] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb3BioluminescentShore)}
                      >
                        <img 
                          src={abhisarikaMb3BioluminescentShore} 
                          alt="Bioluminescent Nocturnal Shoreline & Starry Sky" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Bioluminescent Tide</span>
                        </div>
                      </div>

                      {/* 4. Duality of Black and White Swans (Middle Center) */}
                      <div
                        className="absolute left-[29.03%] top-[39.47%] w-[25.35%] h-[21.06%] z-[25] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
                        onClick={() => setSelectedImage(abhisarikaMb3Swans)}
                      >
                        <img 
                          src={abhisarikaMb3Swans} 
                          alt="Duality of Black and White Swans" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Swan Duality</span>
                        </div>
                      </div>

                      {/* 5. Dark Nocturnal Moth Wings Texture (Bottom Center - Spanning full width between Fan Net & Underwater) */}
                      <div
                        className="absolute left-[29.03%] top-[60.53%] w-[44.67%] h-[39.47%] z-[30] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb3MothWings)}
                      >
                        <img 
                          src={abhisarikaMb3MothWings} 
                          alt="Dark Nocturnal Moth Wings Texture" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Nocturnal Wings</span>
                        </div>
                      </div>

                      {/* 6. Deep Ocean Bubbles and Marine Abyss (Right Column) */}
                      <div
                        className="absolute left-[73.70%] top-[14.50%] w-[26.30%] h-[85.50%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
                        onClick={() => setSelectedImage(abhisarikaMb3Underwater)}
                      >
                        <img 
                          src={abhisarikaMb3Underwater} 
                          alt="Deep Ocean Bubbles and Marine Abyss" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Deep Abyss</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-4 text-base sm:text-lg font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'moodboard-garment2') {
                return (
                  <div key={`mb-g2-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* High-Resolution Interactive Mood Board Collage (Layout Reference Composition, No Artificial Background) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-6 sm:my-10 select-none bg-transparent"
                      style={{ aspectRatio: '632 / 428' }}
                    >
                      {/* 1. Carved Black Leather Architectural Panel (Center-Left: Left=25.95%, Top=0%, Width=27.53%, Height=74.94%) */}
                      <div
                        className="absolute left-[25.95%] top-0 w-[27.53%] h-[74.94%] z-[20] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.02] group shadow-xl"
                        onClick={() => setSelectedImage(aooMb2CarvedLeather)}
                      >
                        <img 
                          src={aooMb2CarvedLeather} 
                          alt="Gothic Carved Floral Leather Architecture" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Embossed Leather</span>
                        </div>
                      </div>

                      {/* 2. Black Cat Glowing Eyes (Top Right: Left=53.48%, Top=0%, Width=46.52%, Height=30.0%) */}
                      <div
                        className="absolute left-[53.48%] top-0 w-[46.52%] h-[30.0%] z-[10] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.02] group shadow-lg"
                        onClick={() => setSelectedImage(aooMb2CatEyes)}
                      >
                        <img 
                          src={aooMb2CatEyes} 
                          alt="Predatory Feline Green Gaze in Obsidian Shadow" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Predatory Gaze</span>
                        </div>
                      </div>

                      {/* 3. Black Cat with Diamond Choker (Far Left: Left=0%, Top=30.0%, Width=25.95%, Height=42.62%) */}
                      <div
                        className="absolute left-0 top-[30.0%] w-[25.95%] h-[42.62%] z-[15] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.02] group shadow-lg"
                        onClick={() => setSelectedImage(aooMb2CatNecklace)}
                      >
                        <img 
                          src={aooMb2CatNecklace} 
                          alt="Black Panther / Feline Noir with Diamond Choker" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Feline Noir</span>
                        </div>
                      </div>

                      {/* 4. Midnight Floral Botanical Jacquard (Far Right: Left=79.75%, Top=30.0%, Width=20.25%, Height=42.62%) */}
                      <div
                        className="absolute left-[79.75%] top-[30.0%] w-[20.25%] h-[42.62%] z-[15] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.02] group shadow-lg"
                        onClick={() => setSelectedImage(aooMb2FloralJacquard)}
                      >
                        <img 
                          src={aooMb2FloralJacquard} 
                          alt="Midnight Blue Botanical Floral Jacquard & Threadwork" 
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Midnight Jacquard</span>
                        </div>
                      </div>

                      {/* 5. Ace of Spades Gothic Metallurgy Card (Center-Front: Left=51.27%, Top=30.0%, Width=29.9%, Height=70.0%) */}
                      <div
                        className="absolute left-[51.27%] top-[30.0%] w-[29.9%] h-[70.0%] z-[30] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.04] group drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
                        onClick={() => setSelectedImage(aooMb2AceOfSpades)}
                      >
                        <img 
                          src={aooMb2AceOfSpades} 
                          alt="Ornate Carved Stone Ace of Spades with Faceted Black Diamond" 
                          className="w-full h-full object-contain filter drop-shadow-md" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Gothic Metallurgy</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-4 text-base sm:text-lg font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'moodboard-garment3') {
                return (
                  <div key={`mb-g3-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* Exact Reference Proportional Collage (Seamless floating composition) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-6 sm:my-10 select-none bg-transparent"
                      style={{ aspectRatio: '801 / 447' }}
                    >
                      {/* 1. Upper Red Embroidery Band: pushed upward above model, zero overlap */}
                      <div 
                        className="absolute left-[26%] top-[2%] w-[25.5%] h-[10.5%] opacity-100 z-[25] pointer-events-none drop-shadow-md"
                        style={{
                          backgroundImage: `url(${aooMb3Ribbon})`,
                          backgroundRepeat: 'repeat-x',
                          backgroundSize: 'auto 100%',
                          backgroundPosition: 'left center'
                        }}
                      />

                      {/* 2. Lower Red Embroidery Band (Right): layered under jacket hem across postcard border as marked */}
                      <div 
                        className="absolute right-0 top-[64%] w-[24.5%] h-[10.5%] opacity-100 z-[25] pointer-events-none drop-shadow-md"
                        style={{
                          backgroundImage: `url(${aooMb3Ribbon})`,
                          backgroundRepeat: 'repeat-x',
                          backgroundSize: 'auto 100%',
                          backgroundPosition: 'left center'
                        }}
                      />

                      {/* 3. Quilted Sleeve (Top Left: X=0%, Y=0%, W=26%, H=63%) */}
                      <div
                        className="absolute left-0 top-0 w-[26%] h-[63%] z-[15] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-lg"
                        onClick={() => setSelectedImage(aooMb3QuiltedSleeve)}
                      >
                        <img 
                          src={aooMb3QuiltedSleeve} 
                          alt="Kantha / Sashiko Quilted Sleeve" 
                          className="w-full h-full object-cover object-left-top" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Quilted Sleeve</span>
                        </div>
                      </div>

                      {/* 4. Runway Model in Navy Structured Suit (Center-Left: X=25.5%, Bottom=0%, W=26%, H=70%) */}
                      <div
                        className="absolute left-[25.5%] bottom-0 w-[26%] h-[87.5%] z-[20] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-2xl"
                        onClick={() => setSelectedImage(aooMb3RunwaySuit)}
                      >
                        <img 
                          src={aooMb3RunwaySuit} 
                          alt="Hourglass Double-Breasted Runway Suit" 
                          className="w-full h-full object-cover object-top" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Tailored Blazer</span>
                        </div>
                      </div>

                      {/* 5. Vintage Postcard with Red Cross-Stitch Embroidery (Center: X=51.5%, Top=8.5%, W=24.5%, H=78.5%) */}
                      <div
                        className="absolute left-[51.5%] top-[8.5%] w-[24.5%] h-[78.5%] z-[30] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.04] group drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                        onClick={() => setSelectedImage(aooMb3Postcard)}
                      >
                        <img 
                          src={aooMb3Postcard} 
                          alt="Archival Postcard with Hand-Embroidered Cross-Stitch Motif" 
                          className="w-full h-full object-contain filter drop-shadow-md" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Archival Postcard</span>
                        </div>
                      </div>

                      {/* 6. Jacket Back with Topographic Threadwork (Top Right: Right=0%, Top=0%, W=25%, H=63%) */}
                      <div
                        className="absolute right-0 top-0 w-[25%] h-[63%] z-[15] cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-lg"
                        onClick={() => setSelectedImage(aooMb3JacketBack)}
                      >
                        <img 
                          src={aooMb3JacketBack} 
                          alt="Topographic Contour Threadwork Embroidery on Jacket Back" 
                          className="w-full h-full object-cover object-top" 
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Contour Threadwork</span>
                        </div>
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-4 text-base sm:text-lg font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'moodboard-collage') {
                return (
                  <div key={`mb-collage-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* Exact Reference Proportional Collage (Truly Center Aligned) */}
                    <div
                      className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1380px] mx-auto my-6 sm:my-10 select-none bg-transparent"
                      style={{ aspectRatio: '635 / 447' }}
                    >
                      {/* 1. Spool in carved wood tray (Left bottom: X=0%, W=18.27%, H=66.44%) */}
                      <div
                        className="absolute left-0 bottom-0 w-[18.27%] h-[66.44%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbSpool)}
                      >
                        <img src={aooMbSpool} alt="Gold Zari Spool in Carved Tray" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Gold Spool</span>
                        </div>
                      </div>

                      {/* 2. Terracotta Kantha (Bottom Center: X=26.93%, W=28.66%, H=43.62%) */}
                      <div
                        className="absolute left-[26.93%] bottom-0 w-[28.66%] h-[43.62%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbKantha)}
                      >
                        <img src={aooMbKantha} alt="Terracotta Kantha Embroidery" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Kantha Ground</span>
                        </div>
                      </div>

                      {/* 3. Embroidered Kurta with Teal Wall (Top Right: X=52.91%, W=26.93%, H=35.79%) */}
                      <div
                        className="absolute left-[52.91%] top-0 w-[26.93%] h-[35.79%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbKurta)}
                      >
                        <img src={aooMbKurta} alt="Embroidered Kurta on Teal Wall" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Zardozi Kurta</span>
                        </div>
                      </div>

                      {/* 4. Sunburst Corset on Mannequin (Bottom Right: X=52.91%, W=31.65%, H=64.21%) */}
                      <div
                        className="absolute left-[52.91%] bottom-0 w-[31.65%] h-[64.21%] z-10 cursor-pointer overflow-hidden transition-all duration-500 hover:z-40 hover:scale-[1.03] group shadow-lg rounded-sm"
                        onClick={() => setSelectedImage(aooMbCorset)}
                      >
                        <img src={aooMbCorset} alt="Sunburst Beaded Corset" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Sunburst Corset</span>
                        </div>
                      </div>

                      {/* 5. Runway Model Christy Turlington (Center Hero: X=18.43%, Y=5.37%, W=34.49%, H=70.25%) */}
                      <div
                        className="absolute left-[18.43%] top-[5.37%] w-[34.49%] h-[70.25%] z-20 cursor-pointer overflow-hidden shadow-2xl transition-all duration-500 hover:z-40 hover:scale-[1.03] group rounded-sm"
                        onClick={() => setSelectedImage(aooMbRunway)}
                      >
                        <img src={aooMbRunway} alt="Archival Runway Model" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] uppercase font-mono text-[#FAF6EE] tracking-widest bg-black/70 px-1.5 py-0.5 shadow-md backdrop-blur-sm">Runway Silhouette</span>
                        </div>
                      </div>

                      {/* 6. Applique Left (Floating Top Left, Oriented Rightward: X=2.99%, Y=2.68%, W=16.69%, H=53.02%) */}
                      <div
                        className="absolute left-[2.99%] top-[2.68%] w-[16.69%] h-[53.02%] z-30 cursor-pointer transition-all duration-500 hover:z-40 hover:scale-[1.06] group pointer-events-auto"
                        onClick={() => setSelectedImage(aooMbApplique)}
                      >
                        <img
                          src={aooMbApplique}
                          alt="Gold Botanical Applique"
                          style={{ transform: 'scaleX(-1)' }}
                          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                        />
                      </div>

                      {/* 7. Applique Right (Floating Lower Right: X=83.31%, Bottom=0%, W=16.69%, H=46.98%) */}
                      <div
                        className="absolute left-[83.31%] bottom-0 w-[16.69%] h-[46.98%] z-30 cursor-pointer transition-all duration-500 hover:z-40 hover:scale-[1.06] group pointer-events-auto"
                        onClick={() => setSelectedImage(aooMbApplique)}
                      >
                        <img
                          src={aooMbApplique}
                          alt="Gold Botanical Applique"
                          className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                        />
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (page.type === 'collage' && page.images) {
                return (
                  <div key={`collage-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-4 sm:pt-8 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-6 sm:mb-10 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* Proportional Diamond Mood Board Collage (Maintains Exact Proportions & Clustering on Phones and Desktops Alike) */}
                    <div
                      className="relative w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] mx-auto my-4 sm:my-8 select-none bg-transparent"
                      style={{ aspectRatio: '1000 / 940' }}
                    >
                      {/* Top Image (index 1) */}
                      <div 
                        className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[48%] sm:w-[46%] z-10 cursor-pointer drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:z-50 hover:scale-[1.03] group"
                        onClick={() => setSelectedImage(page.images![1].src)}
                      >
                        <img 
                          src={page.images[1].src} 
                          alt={page.images[1].alt} 
                          className="w-full h-auto object-cover rounded-sm shadow-md" 
                        />
                      </div>

                      {/* Left Image (index 2) */}
                      <div 
                        className="absolute top-1/2 left-[3%] sm:left-[4%] -translate-y-1/2 w-[35%] sm:w-[33%] z-20 cursor-pointer drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] transition-all duration-500 hover:z-50 hover:scale-[1.03] group"
                        onClick={() => setSelectedImage(page.images![2].src)}
                      >
                        <img 
                          src={page.images[2].src} 
                          alt={page.images[2].alt} 
                          className="w-full h-auto object-cover rounded-sm shadow-md" 
                        />
                      </div>

                      {/* Bottom Image (index 3) */}
                      <div 
                        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[42%] sm:w-[40%] z-15 cursor-pointer drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:z-50 hover:scale-[1.03] group"
                        onClick={() => setSelectedImage(page.images![3].src)}
                      >
                        <img 
                          src={page.images[3].src} 
                          alt={page.images[3].alt} 
                          className="w-full h-auto object-cover rounded-sm shadow-md" 
                        />
                      </div>

                      {/* Right Image (index 4) */}
                      <div 
                        className="absolute top-1/2 right-[3%] sm:right-[4%] -translate-y-1/2 w-[35%] sm:w-[33%] z-20 cursor-pointer drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] transition-all duration-500 hover:z-50 hover:scale-[1.03] group"
                        onClick={() => setSelectedImage(page.images![4].src)}
                      >
                        <img 
                          src={page.images[4].src} 
                          alt={page.images[4].alt} 
                          className="w-full h-auto object-cover rounded-sm shadow-md" 
                        />
                      </div>

                      {/* Center Oval */}
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] sm:w-[36%] z-40 cursor-pointer drop-shadow-[0_22px_45px_rgba(0,0,0,0.75)] transition-all duration-500 hover:z-50 hover:scale-[1.03] group"
                        onClick={() => setSelectedImage(page.images![0].src)}
                      >
                        <img 
                          src={page.images[0].src} 
                          alt={page.images[0].alt} 
                          className="w-full h-auto object-cover" 
                          style={{ 
                            borderRadius: '50%', 
                            border: '7px solid rgba(133,143,186,0.38)' 
                          }}
                        />
                      </div>
                    </div>

                    {page.paragraphs && page.paragraphs.length > 0 && (
                      <div className="mt-8 sm:mt-12 mx-auto w-full max-w-4xl text-center md:text-left">
                        <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl font-serif leading-relaxed drop-shadow-sm text-white/90">
                          {page.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
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
                  className={`block h-auto w-full object-contain ${isLight ? '' : 'drop-shadow-2xl'}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="rounded-sm border border-white/30 bg-black/40 px-6 py-4 text-center text-sm font-mono uppercase tracking-[0.2em] text-[#FAF6EE] backdrop-blur-sm">
              Project pages coming soon
            </p>
          </div>
        )}

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
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>,
          document.body
        )}
      </main>
    </div>,
    document.body
  );
};

const WorkCard: React.FC<{
  project: Project;
  onOpen: () => void;
}> = ({ project, onOpen }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="wine-card group relative flex flex-col items-center justify-center gap-5 px-6 py-12 text-center transition-all duration-500 hover:-translate-y-1.5 cursor-pointer md:cursor-none overflow-hidden select-none min-h-[320px]"
    >
      {/* Garment inside — card becomes transparent on hover to reveal the couture garment */}
      {project.previewImage && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out overflow-hidden">
          <img
            src={project.previewImage}
            alt={`${project.title} Garment`}
            className="w-full h-full object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
          />
          {/* Elegant luxury vignette overlay ensuring text and icons remain crisp while garment shines */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F080F]/90 via-[#3D0A18]/45 to-black/25" />
        </div>
      )}

      {/* Floating cursor badge that grows and reads "View" over the work card */}
      <div
        className="pointer-events-none absolute z-30 hidden md:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: isHovered ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.3})`,
          transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF6EE] text-[#540D21] border border-[#540D21]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[0.625rem] font-mono font-bold tracking-[0.2em] uppercase">
            VIEW
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Cream icon circle */}
        <span className="flex h-20 w-20 sm:h-22 sm:w-22 xl:h-24 xl:w-24 items-center justify-center rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(250,246,238,0.2)]">
          <Icon className="h-8 w-8 xl:h-10 xl:w-10" strokeWidth={1.5} />
        </span>
        <div className="flex flex-col items-center gap-2">
          <span className={`font-normal text-2xl sm:text-3xl xl:text-4xl leading-tight text-[#FAF6EE] drop-shadow-md ${
            /^\d/.test(project.title)
              ? '[font-family:var(--font-readable-display)] tracking-[0.08em] [font-variant-numeric:lining-nums]'
              : 'font-avonia'
          }`}>
            {project.title}
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FAF6EE]/85 drop-shadow-sm">
            {project.tagline}
          </span>
        </div>
      </div>
    </button>
  );
};

export const WorksPage: React.FC = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleOpenWorkshop = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectId?: string }>;
      const projectId = customEvent.detail?.projectId;
      if (projectId) {
        const p = PROJECTS.find(proj => proj.id === projectId);
        if (p) {
          setOpenProject(p);
        }
      }
    };
    window.addEventListener('open-workshop-project', handleOpenWorkshop);
    if (window.location.hash) {
      const matched = PROJECTS.find(proj => proj.id === window.location.hash.replace('#', ''));
      if (matched) setOpenProject(matched);
    }
    return () => window.removeEventListener('open-workshop-project', handleOpenWorkshop);
  }, []);

  return (
    <>
      {/* PAGE 02: WORKS // COLLECTIONS & PROJECTS */}
      <section
        id="works"
        className="relative text-[#241217] pt-3 sm:pt-4 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 overflow-hidden scroll-mt-16"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Page meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-6 sm:mb-8 text-xs font-mono tracking-[0.25em] text-[#540D21]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#540D21]" />
              <span className="font-bold text-[#241217]">PAGE 02</span>
            </div>
            <span className="text-[#851737]">SHATMA AALIYA</span>
          </div>

          <h2 className="font-avonia font-normal text-6xl sm:text-7xl md:text-8xl leading-tight pt-4 sm:pt-6 mb-10 text-[#241217]">
            Works
          </h2>

          {/* Project icons — each opens that project's pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {PROJECTS.filter(p => p.category !== 'workshop').map((project) => (
              <WorkCard
                key={project.id}
                project={project}
                onOpen={() => setOpenProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 03: WORKSHOPS // HANDS-ON CRAFTS & RESEARCH */}
      <section
        id="workshops"
        className="relative text-[#241217] py-16 sm:py-20 px-4 sm:px-8 md:px-12 overflow-hidden scroll-mt-16"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Page meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-8 text-xs font-mono tracking-[0.25em] text-[#540D21]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#540D21]" />
              <span className="font-bold text-[#241217]">PAGE 03</span>
            </div>
            <span className="text-[#851737]">SHATMA AALIYA</span>
          </div>

          {/* Workshops — one wine card with detail rows, like the contact page's CALL / WHATSAPP rows */}
          <div className="wine-card p-8 sm:p-10">
            <div className="flex flex-col items-center text-center gap-2 mb-6">
              <h3 className="font-avonia font-normal text-4xl sm:text-5xl text-[#FAF6EE]">
                Workshop
              </h3>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
                Hands-on crafts · {WORKSHOPS.length}
              </span>
              <span className="mt-2 w-16 h-0.5 bg-[#FAF6EE]" />
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {WORKSHOPS.map((workshop, i) => {
                const Tag = workshop.projectId ? 'button' : 'li';
                return (
                  <Tag
                    key={workshop.name}
                    onClick={workshop.projectId ? () => {
                      const p = PROJECTS.find(proj => proj.id === workshop.projectId);
                      if (p) setOpenProject(p);
                    } : undefined}
                    className={`flex items-baseline gap-4 rounded bg-[#FAF6EE]/10 px-4 py-3 text-left ${workshop.projectId ? 'cursor-pointer hover:bg-[#FAF6EE]/20 transition-colors' : ''}`}
                  >
                    <span className="font-mono text-sm font-bold text-[#FAF6EE]/75">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-2xl sm:text-3xl uppercase tracking-[0.04em] text-[#FAF6EE] [font-family:var(--font-readable-display)]">
                        {workshop.name}
                      </span>
                      {workshop.note && (
                        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FAF6EE]/75">
                          {workshop.note}
                        </span>
                      )}
                    </span>
                  </Tag>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {openProject && <ProjectViewer project={openProject} onClose={() => setOpenProject(null)} />}
    </>
  );
};
