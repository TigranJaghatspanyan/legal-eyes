'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { useLanguage } from '@/contexts/LanguageContext';
import { Plane, Users, Briefcase, Shield } from 'lucide-react';

export default function ImmigrationLawPage() {
  const { t } = useLanguage();

  const serviceData = {
    icon: Plane,
    title: t.services.items[5].title,
    description: t.services.items[5].description,
    features: t.serviceDetail.features.immigration,
    benefits: t.serviceDetail.benefits.immigration,
    process: t.serviceDetail.process.immigration,
    relatedServices: t.serviceDetail.relatedServices.immigration.map((service, index) => ({
      icon: [Users, Briefcase, Shield][index],
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
