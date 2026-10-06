// Representative stock photos (Unsplash). Replace with real project photos by swapping files
// in src/assets/photos/ (keep the same filenames) or editing this list.
import type { ImageMetadata } from 'astro';
import heroFrontYard from '../assets/photos/hero-front-yard.jpg';
import crewMowing from '../assets/photos/crew-mowing.jpg';
import lushLawn from '../assets/photos/lush-lawn.jpg';
import sprinklersLawn from '../assets/photos/sprinklers-lawn.jpg';
import sprinklerHead from '../assets/photos/sprinkler-head.jpg';
import gardenDesign from '../assets/photos/garden-design.jpg';
import flowerBeds from '../assets/photos/flower-beds.jpg';
import modernEntry from '../assets/photos/modern-entry.jpg';
import agaveGravel from '../assets/photos/agave-gravel.jpg';
import desertHome from '../assets/photos/desert-spanish-home.jpg';
import succulents from '../assets/photos/succulent-garden.jpg';
import treeArborist from '../assets/photos/tree-arborist.jpg';
import treeTrimming from '../assets/photos/tree-trimming.jpg';
import paverCircle from '../assets/photos/paver-circle.jpg';
import paverSteps from '../assets/photos/paver-steps.jpg';
import pergola from '../assets/photos/pergola-walkway.jpg';
import deck from '../assets/photos/backyard-deck.jpg';
import hedges from '../assets/photos/hedges-flowers.jpg';

export type GalleryCat = 'lawn' | 'hardscape' | 'drought' | 'design' | 'irrigation' | 'trees';

export const galleryCats: Record<GalleryCat, { en: string; es: string }> = {
  design: { en: 'Landscape Design', es: 'Diseño' },
  hardscape: { en: 'Hardscape', es: 'Hardscape' },
  drought: { en: 'Drought-Tolerant', es: 'Bajo Consumo' },
  lawn: { en: 'Lawn & Sod', es: 'Pasto' },
  irrigation: { en: 'Irrigation', es: 'Riego' },
  trees: { en: 'Trees', es: 'Árboles' },
};

export interface GalleryItem {
  image: ImageMetadata;
  cat: GalleryCat;
  alt: { en: string; es: string };
}

export const gallery: GalleryItem[] = [
  { image: heroFrontYard, cat: 'design', alt: { en: 'Manicured front yard with curved lawn, low stone wall and shrub beds', es: 'Jardín delantero con pasto curvo, muro bajo de piedra y arbustos' } },
  { image: paverCircle, cat: 'hardscape', alt: { en: 'Circular paver patio with stone seat wall', es: 'Patio circular de adoquín con muro de piedra' } },
  { image: agaveGravel, cat: 'drought', alt: { en: 'Agave and decorative gravel drought-tolerant front yard', es: 'Jardín de bajo consumo con agave y grava decorativa' } },
  { image: lushLawn, cat: 'lawn', alt: { en: 'Thick, freshly installed green lawn', es: 'Pasto verde y tupido recién instalado' } },
  { image: pergola, cat: 'hardscape', alt: { en: 'Wood pergola over a stone walkway', es: 'Pérgola de madera sobre un camino de piedra' } },
  { image: flowerBeds, cat: 'design', alt: { en: 'Colorful flower beds and lawn in front of a home', es: 'Jardineras con flores de colores y pasto frente a una casa' } },
  { image: desertHome, cat: 'drought', alt: { en: 'Spanish-style home with desert landscaping', es: 'Casa estilo español con jardín desértico' } },
  { image: sprinklersLawn, cat: 'irrigation', alt: { en: 'Sprinklers watering a green lawn', es: 'Aspersores regando un pasto verde' } },
  { image: paverSteps, cat: 'hardscape', alt: { en: 'Curved paver seating area with stone steps', es: 'Área de asientos de adoquín con escalones de piedra' } },
  { image: modernEntry, cat: 'design', alt: { en: 'Modern home entry with trimmed hedges and lawn', es: 'Entrada moderna con setos recortados y pasto' } },
  { image: succulents, cat: 'drought', alt: { en: 'Succulent and aloe garden', es: 'Jardín de suculentas y sábila' } },
  { image: treeArborist, cat: 'trees', alt: { en: 'Crew member trimming a large tree', es: 'Trabajador podando un árbol grande' } },
  { image: deck, cat: 'design', alt: { en: 'Backyard lawn with raised planter beds', es: 'Patio trasero con pasto y jardineras elevadas' } },
  { image: crewMowing, cat: 'lawn', alt: { en: 'Maintenance crew mowing and edging a lawn', es: 'Equipo de mantenimiento cortando y orillando el pasto' } },
  { image: gardenDesign, cat: 'design', alt: { en: 'Layered backyard garden with lawn and path', es: 'Jardín trasero con pasto, plantas y camino' } },
  { image: sprinklerHead, cat: 'irrigation', alt: { en: 'Sprinkler head watering at sunrise', es: 'Aspersor regando al amanecer' } },
  { image: hedges, cat: 'design', alt: { en: 'Sculpted hedges and flowering vines at a home entry', es: 'Setos esculpidos y enredaderas con flores en una entrada' } },
  { image: treeTrimming, cat: 'trees', alt: { en: 'Tree trimming above a home', es: 'Poda de árbol sobre una casa' } },
];
