export interface SubService {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  subServices: SubService[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  demoUrl: string;
  clientName: string;
  timeline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PricePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  deliveryTime: string;
  isPopular?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}
