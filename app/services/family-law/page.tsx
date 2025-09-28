'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceDetail } from '@/components/ServiceDetail';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Shield, Home } from 'lucide-react';

export default function FamilyLawPage() {
  const { t } = useLanguage();

  const serviceData = {
    icon: Heart,
    title: t.services.items[2].title,
    description: t.services.items[2].description,
    features: t.serviceDetail.features.family,
    benefits: t.serviceDetail.benefits.family,
    process: t.serviceDetail.process.family,
    relatedServices: t.serviceDetail.relatedServices.family.map((service, index) => ({
      icon: [Users, Home, Shield][index],
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
