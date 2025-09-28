'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Scale, Users, FileText } from 'lucide-react';

export default function CriminalDefensePage() {
  const { t } = useLanguage();

  const serviceData = {
    icon: Shield,
    title: t.services.items[4].title,
    description: t.services.items[4].description,
    features: t.serviceDetail.features.criminal,
    benefits: t.serviceDetail.benefits.criminal,
    process: t.serviceDetail.process.criminal,
    relatedServices: t.serviceDetail.relatedServices.criminal.map((service, index) => ({
      icon: [Scale, Users, FileText][index],
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
