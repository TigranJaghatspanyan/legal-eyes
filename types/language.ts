export type Language = 'en' | 'ru' | 'hy';

export interface Translation {
  nav: {
    home: string;
    services: string;
    about: string;
    team: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    stats: {
      experience: string;
      cases: string;
      clients: string;
      success: string;
    };
  };
  team: {
    title: string;
    subtitle: string;
    members: {
      name: string;
      position: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      messageRequired: string;
      success: string;
      error: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      hoursLabel: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
  };
  serviceDetail: {
    learnMore: string;
    scheduleConsultation: string;
    callNow: string;
    keyFeatures: string;
    whyChoose: string;
    servicesQuestion: string;
    ourProcess: string;
    howWeHandle: string;
    case: string;
    relatedServicesTitle: string;
    readyToStart: string;
    contactToday: string;
    needs: string;
    getConsultation: string;
    features: {
      corporate: string[];
      litigation: string[];
      family: string[];
      realEstate: string[];
      criminal: string[];
      immigration: string[];
    };
    benefits: {
      corporate: string[];
      litigation: string[];
      family: string[];
      realEstate: string[];
      criminal: string[];
      immigration: string[];
    };
    process: {
      corporate: { step: number; title: string; description: string; }[];
      litigation: { step: number; title: string; description: string; }[];
      family: { step: number; title: string; description: string; }[];
      realEstate: { step: number; title: string; description: string; }[];
      criminal: { step: number; title: string; description: string; }[];
      immigration: { step: number; title: string; description: string; }[];
    };
    relatedServices: {
      corporate: { title: string; description: string; }[];
      litigation: { title: string; description: string; }[];
      family: { title: string; description: string; }[];
      realEstate: { title: string; description: string; }[];
      criminal: { title: string; description: string; }[];
      immigration: { title: string; description: string; }[];
    };
  };
}