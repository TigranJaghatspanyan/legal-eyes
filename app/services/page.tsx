'use client'

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Services } from '@/components/Services';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-[#0f193d] to-[#1a2951] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cea858] to-[#d4b366] mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </main>
  );
}