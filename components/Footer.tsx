'use client'

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceUrls = [
    '/services/corporate-law',
    '/services/civil-litigation',
    '/services/family-law',
    '/services/real-estate-law',
    '/services/criminal-defense'
  ];

  return (
    <footer className="bg-[#0f193d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Link href="/">
                  <Image
                    src="/legal_eyes_logo_light.png"
                    alt="Legal Eyes"
                    width={86}
                    height={86}
                    className="w-auto select-none"
                  />
                </Link>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                {t.footer.description}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <button
                    key={index}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-[#cea858] hover:border-[#cea858] transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">{t.footer.quickLinks}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/">
                    <button className="text-gray-300 hover:text-[#cea858] transition-colors duration-300 hover:translate-x-1 inline-block">
                      {t.nav.home}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <button className="text-gray-300 hover:text-[#cea858] transition-colors duration-300 hover:translate-x-1 inline-block">
                      {t.nav.services}
                    </button>
                  </Link>
                </li>
                {['about', 'team', 'contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="text-gray-300 hover:text-[#cea858] transition-colors duration-300 hover:translate-x-1 inline-block capitalize"
                    >
                      {t.nav[link as keyof typeof t.nav]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">{t.footer.services}</h3>
              <ul className="space-y-3">
                {t.services.items.slice(0, 5).map((service, index) => (
                  <li key={index}>
                    <Link href={serviceUrls[index]}>
                      <button className="text-gray-300 hover:text-[#cea858] transition-colors duration-300 hover:translate-x-1 inline-block">
                        {service.title}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                {t.footer.rights}
              </p>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-[#cea858] to-[#d4b366] rounded-full hover:shadow-lg hover:shadow-[#cea858]/25 transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="w-5 h-5 text-[#0f193d]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};