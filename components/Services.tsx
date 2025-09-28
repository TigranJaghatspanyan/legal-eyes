'use client'

import React from 'react';
import { 
  Building2, 
  Gavel, 
  Heart, 
  Home, 
  Shield, 
  Plane,
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const serviceIcons = [Building2, Gavel, Heart, Home, Shield, Plane];
const serviceUrls = [
  '/services/corporate-law',
  '/services/civil-litigation',
  '/services/family-law',
  '/services/real-estate-law',
  '/services/criminal-defense',
  '/services/immigration-law'
];

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f193d] mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cea858] to-[#d4b366] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#cea858]/20"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#cea858] to-[#d4b366] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0f193d] mb-4 group-hover:text-[#cea858] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link href={serviceUrls[index]}>
                  <button className="flex items-center space-x-2 text-[#cea858] font-semibold group-hover:text-[#0f193d] transition-colors duration-300">
                    <span>{t.serviceDetail.learnMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
