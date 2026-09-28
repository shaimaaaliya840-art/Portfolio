export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  category: 'Neelgar Archives' | 'Femme Fatale' | 'Menswear' | 'Indian Textiles' | 'Haute Editorial' | 'Spatial & Campaign' | 'Visual Identity';
  year: string;
  role: string;
  heroImage: string;
  galleryImages: string[];
  excerpt: string;
  challenge: string;
  concept: string;
  outcome: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  isCurrent?: boolean;
  isNeelgar?: boolean;
  description: string;
  deliverables: string[];
}

export interface ServicePackage {
  id: string;
  code: string;
  name: string;
  price: string;
  timeline: string;
  deliverables: string[];
  recommended?: boolean;
}

export interface VideoReel {
  id: string;
  title: string;
  caption: string;
  brandTag: string;
  duration: string;
  videoUrl?: string;
  posterImage: string;
  stats: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  checklist: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  city: string;
  tagline: string;
  heroHighlight: string;
  heroSecondary: string;
  availability: string;
  bioHeadline: string;
  bioParagraphs: string[];
  neelgarHighlight: {
    role: string;
    period: string;
    tagline: string;
    summary: string;
    achievements: string[];
  };
  pullQuote: {
    quote: string;
    author: string;
    context: string;
  };
  contactEmail: string;
  whatsappNumber: string;
  callingNumber: string;
  location?: string;
  aboutMe?: string;
  personalSkills?: {
    skill: string;
    rating: number; // 1 to 5
  }[];
  educationEntries?: {
    title: string;
    institution: string;
    level?: string;
  }[];
  experienceWorkshops?: string[];
  dyeingSkills?: string[];
  hardSkills?: string[];
  softSkills?: string[];
  languagesList?: string[];
  internships?: {
    role: string;
    organization: string;
    period: string;
    location: string;
    summary: string;
    highlights: string[];
  }[];
  socials: {
    instagram: string;
    arena: string;
    linkedin: string;
    substack: string;
  };
  skills?: {
    digitalAnd3D: string[];
    designAndAtelier: string[];
    professional: string[];
    languages: string[];
  };
  education?: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    details: string;
  };
}
