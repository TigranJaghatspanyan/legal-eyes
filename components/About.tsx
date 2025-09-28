'use client'

import React from 'react';
import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, value: '15+', label: t.about.stats.experience },
    { icon: Trophy, value: '2,500+', label: t.about.stats.cases },
    { icon: Users, value: '5,000+', label: t.about.stats.clients },
    { icon: CheckCircle, value: '98%', label: t.about.stats.success }
  ];

  return (
    <section id="about" className="py-20 bg-[#0f193d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.about.title}
            </h2>
            <p className="text-xl text-[#cea858] mb-6 font-semibold">
              {t.about.subtitle}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              {t.about.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#cea858] flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#cea858] to-[#d4b366] rounded-2xl mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};