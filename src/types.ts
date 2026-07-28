export type ServiceCategory = 'btp' | 'forage' | 'electrification' | 'all';

export interface ServiceDetail {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  deliverables: string[];
  ctaText: string;
}

export interface Project {
  id: string;
  category: ServiceCategory;
  title: string;
  location: string;
  clientType: 'Particulier' | 'Entreprise' | 'Collectivité / État';
  description: string;
  image: string;
  completionYear: string;
  metrics: { label: string; value: string }[];
}

export interface EstimateOptions {
  serviceType: 'btp' | 'forage' | 'electrification';
  projectType: string;
  surfaceOrDepth: number;
  location: string;
  urgency: 'normale' | 'urgente' | 'planification';
  includesMaintenance: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}
