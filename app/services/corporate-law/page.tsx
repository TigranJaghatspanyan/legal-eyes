'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, FileText, Users, Shield, Briefcase, Scale } from 'lucide-react';

export default function CorporateLawPage() {
  const { t } = useLanguage();

  const serviceData = {
    icon: Building2,
    title: t.services.items[0].title,
    description: t.services.items[0].description,
    features: t.serviceDetail.features.corporate,
    benefits: t.serviceDetail.benefits.corporate,
    process: t.serviceDetail.process.corporate,
    relatedServices: t.serviceDetail.relatedServices.corporate.map((service, index) => ({
      icon: [FileText, Users, Shield][index],
      title: service.title,
      description: service.description
    }))
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServiceDetail {...serviceData} />
      </div>
      <Footer />
    </main>
  );
}
