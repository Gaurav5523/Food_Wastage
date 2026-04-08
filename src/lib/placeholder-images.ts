export interface PlaceHolderImage {
  id: string;
  imageUrl: string;
  description: string;
  imageHint: string;
}

export const PlaceHolderImages: PlaceHolderImage[] = [
  {
    id: 'hero-image',
    imageUrl: 'https://picsum.photos/seed/restaurant-waste/1920/1080',
    description: 'A professional kitchen with food waste being sorted.',
    imageHint: 'A high-end restaurant kitchen where chefs are busy, but there is a clear focus on a bin with some food waste being analyzed by a digital overlay.',
  },
  {
    id: 'feature-1',
    imageUrl: 'https://picsum.photos/seed/ai-analysis/800/600',
    description: 'AI analyzing a plate of food waste.',
    imageHint: 'A close-up of a smartphone screen showing a photo of a half-eaten plate of pasta. Digital bounding boxes and labels identify the food types.',
  },
  {
    id: 'feature-2',
    imageUrl: 'https://picsum.photos/seed/dashboard-insights/800/600',
    description: 'A dashboard showing waste trends.',
    imageHint: 'A clean, modern web dashboard with colorful bar charts and pie charts showing food waste statistics over time.',
  },
  {
    id: 'feature-3',
    imageUrl: 'https://picsum.photos/seed/smart-tips/800/600',
    description: 'Actionable tips for waste reduction.',
    imageHint: 'A list of clear, actionable tips on a screen, like "Reduce potato portion by 10%" or "Check fridge temperature settings".',
  },
  {
    id: 'how-it-works-1',
    imageUrl: 'https://picsum.photos/seed/snap-photo/800/600',
    description: 'Taking a photo of food waste.',
    imageHint: 'A person holding a smartphone and taking a photo of a bin containing food scraps in a kitchen.',
  },
  {
    id: 'how-it-works-2',
    imageUrl: 'https://picsum.photos/seed/ai-processing/800/600',
    description: 'AI processing the image.',
    imageHint: 'A conceptual image of a circuit board with a glowing brain icon, representing AI processing food waste data.',
  },
  {
    id: 'how-it-works-3',
    imageUrl: 'https://picsum.photos/seed/action-plan/800/600',
    description: 'Implementing a waste reduction plan.',
    imageHint: 'A chef looking at a tablet in a kitchen, smiling as they see their waste reduction progress.',
  },
];
