
export interface SymptomResult {
  potentialAilment: string;
  description: string;
  recommendations: string[];
  disclaimer: string;
}

export enum Dosha {
  VATA = 'Vata',
  PITTA = 'Pitta',
  KAPHA = 'Kapha'
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  duration: string;
  condition: string;
  quote: string;
  before: string[];
  after: string[];
  results: string[];
  image: string;
}
