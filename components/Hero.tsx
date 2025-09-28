'use client'

import React from 'react';
import { ArrowRight, Scale, Shield, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f193d] via-[#1a2951] to-[#0f193d]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f193d]/90 to-[#0f193d]/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#cea858]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#cea858]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Icons Animation */}
          <div className="flex justify-center space-x-8 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:scale-110 transition-transform duration-300">
              <Scale className="w-8 h-8 text-[#cea858]" />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-[#cea858]" />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-[#cea858]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            {t.hero.subtitle}
          </p>

          <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-[#cea858] to-[#d4b366] text-[#0f193d] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#cea858]/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};