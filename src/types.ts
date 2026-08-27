export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  benefits: string[];
  useCases: string[];
  howItWorks: string[];
  clientProvides: string[];
  considerations: string;
  disclaimer?: string;
  icon: string;
  image: string;
}

export interface SecurityTip {
  id: string;
  title: string;
  summary: string;
  details: string;
  icon: string;
}

export interface ConsultationRequest {
  name: string;
  organisation?: string;
  phone: string;
  email: string;
  serviceRequired: string;
  locationArea?: string;
  preferredContact: string;
  securityRequirement?: string;
  preferredTime?: string;
  urgency: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface PageRoute {
  path: string;
  label: string;
}
