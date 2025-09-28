'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, FileText, Scale, Shield } from 'lucide-react';

export default function RealEstateLawPage() {
  const { t } = useLanguage();

  const serviceData = {
    icon: Home,
    title: t.services.items[3].title,
    description: t.services.items[3].description,
    features: t.serviceDetail.features.realEstate,
    benefits: t.serviceDetail.benefits.realEstate,
    process: t.serviceDetail.process.realEstate,
    relatedServices: t.serviceDetail.relatedServices.realEstate.map((service, index) => ({
      icon: [FileText, Scale, Shield][index],
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
