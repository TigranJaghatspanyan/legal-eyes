'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gavel, Scale, FileText, Shield } from 'lucide-react';

export default function CivilLitigationPage() {
  const { t } = useLanguage();

  const serviceData = {
    icon: Gavel,
    title: t.services.items[1].title,
    description: t.services.items[1].description,
    features: t.serviceDetail.features.litigation,
    benefits: t.serviceDetail.benefits.litigation,
    process: t.serviceDetail.process.litigation,
    relatedServices: t.serviceDetail.relatedServices.litigation.map((service, index) => ({
      icon: [Scale, FileText, Shield][index],
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
