import { ElementType } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
}

export interface JourneyStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}
