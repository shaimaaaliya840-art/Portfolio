import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Droplet, Flame, Gem, Layers, Moon, Scissors, X, type LucideIcon } from 'lucide-react';

import fadingSparkPg1 from '../assets/images/fading-spark/pg 1.png';
import fadingSparkPg2 from '../assets/images/fading-spark/pg 2.png';
import fadingSparkPg3_1 from '../assets/images/fading-spark/pg 3.1.png';
import fadingSparkPg3_2 from '../assets/images/fading-spark/pg 3.2.png';
import fadingSparkPg3_3 from '../assets/images/fading-spark/pg 3.3.png';
import fadingSparkPg3_4 from '../assets/images/fading-spark/pg 3.4.png';
import fadingSparkPg3_5 from '../assets/images/fading-spark/pg 3.5.png';
import fadingSparkPg5 from '../assets/images/fading-spark/pg 5.png';
import fadingSparkBackground from '../assets/images/fading_spark_pink_fabric_background.jpg';
import abhisarikaBackground from '../assets/images/abhisarika_background.png';
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
  type?: 'single' | 'grid' | 'text' | 'collage' | 'moodboard-collage' | 'moodboard-garment2' | 'moodboard-garment3' | 'moodboard-abhisarika-garment2';
  src?: string;
  alt?: string;
  images?: { src: string; alt: string; objectPosition?: string }[];
  title?: string;
  titleImage?: string;
  paragraphs?: string[];
  imageAspect?: string;
  imageFit?: 'cover' | 'contain';
  gridCols?: number;
  layout?: 'default' | 'bento-center-stack';
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  /** Card image on the Works grid — a representative photo from the project's own pages */
  cover: string;
  /** Backdrop of the project viewer */
  background?: string;
  backgroundColor: string;
  category?: 'work' | 'workshop';
  /** Slides/pages shown in the viewer — add images here as they become available */
  pages: ProjectPage[];
}

const PROJECTS: Project[] = [
  {
    id: 'fading-spark',
    title: 'Fading Spark',
    tagline: 'Collection',
    icon: Flame,
    cover: fadingSparkPg3_1,
    backgroundColor: 'radial-gradient(circle at 50% 50%, #f0d5df 0%, #c4a1b0 60%, #563947 100%)',
    pages: [
      { type: 'single', src: fadingSparkPg1, alt: 'Fading Spark Page 1' },
      { type: 'single', src: fadingSparkPg2, alt: 'Fading Spark Page 2' },
      {
        type: 'grid',
        images: [
          { src: fadingSparkPg3_1, alt: 'Fading Spark Page 3 Image 1' },
          { src: fadingSparkPg3_2, alt: 'Fading Spark Page 3 Image 2' },
          { src: fadingSparkPg3_5, alt: 'Fading Spark Page 3 Image 5' },
          { src: fadingSparkPg3_4, alt: 'Fading Spark Page 3 Image 4' },
          { src: fadingSparkPg3_3, alt: 'Fading Spark Page 3 Image 3' }
        ]
      },
      // Page 4 is missing, will be added later
      { type: 'single', src: fadingSparkPg5, alt: 'Fading Spark Page 5' }
    ]
  },
  {
    id: 'abhisarika',
    title: 'Abhisarika',
    tagline: 'Neelgar Atelier',
    icon: Moon,
    cover: garment1_1,
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
    id: 'anatomy-of-ornament',
    title: 'Anatomy of Ornamentation',
    tagline: 'Project',
    icon: Gem,
    cover: aooGarment1,
    backgroundColor: '#000000',
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
    id: 'dabu-printing',
    title: 'Dabu Printing',
    tagline: 'Workshop',
    category: 'workshop',
    icon: Flame, // fallback
    cover: dabu1,
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
    cover: eco1,
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
    cover: indigoEarthenVats,
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
    cover: coconutPendant,
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
    cover: paperWeavingRadial,
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
    cover: seamstressRuff,
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
    cover: kutchArtisanWeaving,
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
    cover: lldcPaperToile,
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
    cover: cyanotypeBanner,
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
const ProjectViewer: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const isLight = project.id === 'fading-spark' || project.id === 'eco-printing';

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
      style={{ background: project.backgroundColor }}
    >
      {project.id !== 'anatomy-of-ornament' ? (
        /* Volumetric pinkish gradient bloom */
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-[#540D21]/15 via-[#851737]/5 to-transparent blur-[90px] pointer-events-none -z-10" />
      ) : null}

      {project.background && project.id === 'abhisarika' ? (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${project.background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
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
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/50 bg-black/35 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-black/55 cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Works</span>
        </button>
        {project.category !== 'workshop' && project.id !== 'fading-spark' && project.id !== 'abhisarika' && project.id !== 'anatomy-of-ornament' && (
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
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-6">
            {project.pages.map((page, i) => {
              if (page.type === 'grid') {
                return (
                  <div key={`grid-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
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
                    {page.layout === 'bento-center-stack' ? (
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
                  <div key={`text-${i}`} className="relative flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto px-6 py-12 gap-10">
                    {page.titleImage && (
                      <div className="flex justify-center w-full max-w-[600px] py-4">
                        <img src={page.titleImage} alt="Title" className="w-full h-auto object-contain mix-blend-darken" />
                      </div>
                    )}
                    {page.title && !page.titleImage && (
                      project.category === 'workshop' ? (
                        <WorkshopHeadline title={page.title} isLight={isLight} />
                      ) : (
                        <h1 className={`font-avonia ${
                          page.title.length > 15
                            ? 'text-4xl sm:text-5xl md:text-6xl tracking-wider leading-tight'
                            : 'text-6xl sm:text-7xl lg:text-8xl tracking-widest leading-relaxed'
                        } uppercase drop-shadow-lg py-4 ${isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'}`}>
                          {page.title}
                        </h1>
                      )
                    )}
                    <div className={`flex flex-col gap-6 text-base sm:text-lg md:text-xl md:text-left font-serif leading-relaxed drop-shadow-sm ${isLight ? 'text-[#540D21]' : 'text-[#FAF6EE]'}`}>
                      {page.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                );
              }
              if (page.type === 'moodboard-abhisarika-garment2') {
                return (
                  <div key={`mb-ab-g2-${i}`} className="relative flex flex-col w-full px-2 sm:px-0 pt-8 sm:pt-16 pb-4 sm:pb-8">
                    {page.title && (
                      <h2 className="font-avonia font-normal text-4xl sm:text-6xl text-center uppercase tracking-widest drop-shadow-md mb-8 sm:mb-12 text-[#FAF6EE]">
                        {page.title}
                      </h2>
                    )}

                    {/* Seamless Proportional Mood Board Collage with Zero Gaps and Zero Overlap */}
                    <div
                      className="relative w-full max-w-4xl lg:max-w-5xl mx-auto my-6 sm:my-10 select-none bg-transparent"
                      style={{ aspectRatio: '554 / 439' }}
                    >
                      {/* 1. Mirror with Candle (Top Left) */}
                      <div
                        className="absolute left-[0.00%] top-[0.00%] w-[35.20%] h-[37.50%] z-[10] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
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
                        className="absolute left-[35.20%] top-[0.00%] w-[27.26%] h-[72.00%] z-[20] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
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
                        className="absolute left-[62.46%] top-[0.00%] w-[37.54%] h-[39.00%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-xl"
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
                        className="absolute left-[0.00%] top-[37.50%] w-[35.20%] h-[62.50%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
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
                        className="absolute left-[62.46%] top-[39.00%] w-[37.54%] h-[61.00%] z-[15] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
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
                        className="absolute left-[35.20%] top-[72.00%] w-[27.26%] h-[28.00%] z-[25] cursor-pointer overflow-hidden transition-all duration-300 hover:z-40 hover:scale-[1.01] group shadow-2xl"
                        onClick={() => setSelectedImage(abhisarikaMb2Leopard)}
                      >
                        <img 
                          src={abhisarikaMb2Leopard} 
                          alt="Jeweled Panther Art Deco Mosaic" 
                          className="w-full h-full object-cover object-top" 
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
                      className="relative w-full max-w-4xl lg:max-w-5xl mx-auto my-6 sm:my-10 select-none bg-transparent"
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

                    {/* Exact Reference Proportional Collage */}
                    <div
                      className="relative w-full max-w-4xl lg:max-w-5xl mx-auto my-6 sm:my-10 select-none bg-black overflow-hidden rounded-sm shadow-2xl"
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
                      className="relative w-full max-w-4xl lg:max-w-5xl mx-auto my-6 sm:my-10 select-none"
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
                  <div key={`collage-${i}`} className="relative w-full max-w-5xl mx-auto min-h-[140vh] sm:min-h-[160vh] flex items-center justify-center py-20 mt-12 mb-24 overflow-visible">
                    
                    {/* Top Image (index 1) */}
                    <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[35%] z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[1].src} alt={page.images[1].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Left Image (index 2) - Moved from Top Right */}
                    <div className="absolute top-1/2 left-[2%] sm:left-[5%] -translate-y-1/2 w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[2].src} alt={page.images[2].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Bottom Image (index 3) - Moved from Bottom Left */}
                    <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[35%] z-30 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[3].src} alt={page.images[3].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Right Image (index 4) - Stays on Right */}
                    <div className="absolute top-1/2 right-[2%] sm:right-[5%] -translate-y-1/2 w-[50%] sm:w-[32%] z-20 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img src={page.images[4].src} alt={page.images[4].alt} className="w-full h-auto object-cover rounded-sm" />
                    </div>

                    {/* Center Oval */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] sm:w-[38%] z-50 drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] hover:z-[60] transition-transform duration-700 hover:scale-[1.03]">
                      <img 
                        src={page.images[0].src} 
                        alt={page.images[0].alt} 
                        className="w-full h-auto object-cover" 
                        style={{ borderRadius: '50%', border: '10px solid rgba(133,143,186,0.3)' }}
                      />
                    </div>
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

/** A project the viewer opens on is addressed by its own URL, e.g. #/project/abhisarika */
const PROJECT_HASH_PREFIX = '#/project/';

const readProjectIdFromHash = (): string | null => {
  const hash = window.location.hash;
  if (!hash.startsWith(PROJECT_HASH_PREFIX)) return null;
  const id = hash.slice(PROJECT_HASH_PREFIX.length);
  return PROJECTS.some((p) => p.id === id) ? id : null;
};

/** One project card: the project's own photo, then the title block. */
const ProjectCard: React.FC<{ project: Project; onOpen: (project: Project) => void }> = ({ project, onOpen }) => {
  const Icon = project.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="pointer"
      className="wine-card group flex cursor-pointer flex-col overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="relative block aspect-[4/5] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* The cream icon badge the cards carried before the photos arrived */}
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#FAF6EE] bg-[#FAF6EE] text-[#540D21] shadow-md">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </span>

      <span className="flex flex-1 flex-col items-center gap-3 px-6 py-6">
        <span className="flex flex-col items-center gap-1">
          <span className="font-avonia text-3xl font-normal leading-tight text-[#FAF6EE] sm:text-4xl">
            {project.title}
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
            {project.tagline}
          </span>
        </span>
        <span className="mt-auto font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FAF6EE] underline decoration-[#FAF6EE]/50 underline-offset-4">
          View project &#8594;
        </span>
      </span>
    </button>
  );
};

export const WorksPage: React.FC = () => {
  // The URL owns which project is open, so a project can be linked to directly and the
  // browser's Back button closes the viewer instead of leaving the site.
  const [openProjectId, setOpenProjectId] = useState<string | null>(readProjectIdFromHash);

  useEffect(() => {
    const sync = () => setOpenProjectId(readProjectIdFromHash());
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  const openProject = (project: Project) => {
    window.history.pushState({ projectViewer: project.id }, '', PROJECT_HASH_PREFIX + project.id);
    setOpenProjectId(project.id);
  };

  const closeProject = () => {
    // Opened from this page: step back, so the close button and Back agree. Landed here
    // from a shared link: replace the entry instead, or Back would leave the site.
    if (window.history.state?.projectViewer) {
      window.history.back();
    } else {
      window.history.replaceState(null, '', '#works');
      setOpenProjectId(null);
    }
  };

  const projectById = (id: string) => PROJECTS.find((p) => p.id === id);
  const activeProject = openProjectId ? projectById(openProjectId) : undefined;

  return (
    <section
      id="works"
      className="relative text-[#241217] py-20 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page meta strip (same treatment as the contact page) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DECFC0] pb-4 mb-8 text-xs font-mono tracking-[0.25em] text-[#540D21]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#540D21]" />
            <span className="font-bold text-[#241217]">PAGE 03 &#183; WORKS // PROJECTS &amp; WORKSHOPS</span>
          </div>
          <span className="text-[#851737]">SHATMA AALIYA</span>
        </div>

        <h2 className="font-avonia font-normal text-6xl sm:text-7xl md:text-8xl leading-tight pt-6 sm:pt-8 mb-12 text-[#241217]">
          Works
        </h2>

        {/* Collections — each opens that project's pages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {PROJECTS.filter((p) => p.category !== 'workshop').map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={openProject} />
          ))}
        </div>

        {/* Workshops — the same card, smaller, on the wine panel */}
        <div className="wine-card p-8 sm:p-10">
          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <h3 className="font-avonia font-normal text-4xl sm:text-5xl text-[#FAF6EE]">
              Workshop
            </h3>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FAF6EE]/85">
              Hands-on crafts &#183; {WORKSHOPS.length}
            </span>
            <span className="mt-2 w-16 h-0.5 bg-[#FAF6EE]" />
          </div>

          <ol className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {WORKSHOPS.map((workshop, i) => {
              const project = workshop.projectId ? projectById(workshop.projectId) : undefined;
              const number = String(i + 1).padStart(2, '0');

              const body = (
                <>
                  {project ? (
                    <span className="relative block aspect-[16/10] overflow-hidden">
                      <img
                        src={project.cover}
                        alt={workshop.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded bg-[#540D21]/80 px-2 py-0.5 font-mono text-xs font-bold text-[#FAF6EE] backdrop-blur-sm">
                        {number}
                      </span>
                    </span>
                  ) : null}

                  <span className="flex flex-1 flex-col gap-1 px-4 py-3">
                    <span className="flex items-baseline gap-3">
                      {project ? null : (
                        <span className="font-mono text-sm font-bold text-[#FAF6EE]/75">{number}</span>
                      )}
                      <span className="text-lg uppercase tracking-[0.04em] text-[#FAF6EE] sm:text-3xl [font-family:var(--font-readable-display)]">
                        {workshop.name}
                      </span>
                    </span>
                    {workshop.note && (
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FAF6EE]/75">
                        {workshop.note}
                      </span>
                    )}
                    {project ? (
                      <span className="mt-1 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#FAF6EE] underline decoration-[#FAF6EE]/50 underline-offset-4 sm:tracking-[0.2em]">
                        View project &#8594;
                      </span>
                    ) : (
                      <span className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FAF6EE]/45">
                        Documentation to come
                      </span>
                    )}
                  </span>
                </>
              );

              // Only a workshop with pages to show is a button; the rest stay plain list
              // items, so a visitor can tell which ones open without clicking to find out.
              return project ? (
                <li key={workshop.name} className="contents">
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    data-cursor="pointer"
                    className="group flex cursor-pointer flex-col overflow-hidden rounded bg-[#FAF6EE]/10 text-left transition-colors hover:bg-[#FAF6EE]/20"
                  >
                    {body}
                  </button>
                </li>
              ) : (
                <li
                  key={workshop.name}
                  className="flex flex-col overflow-hidden rounded bg-[#FAF6EE]/5 text-left"
                >
                  {body}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {activeProject && <ProjectViewer project={activeProject} onClose={closeProject} />}
    </section>
  );
};
