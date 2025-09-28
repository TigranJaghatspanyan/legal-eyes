'use client'

import React from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface ServiceDetailProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  relatedServices: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }[];
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  icon: Icon,
  title,
  description,
  features,
  benefits,
  process,
  relatedServices
}) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f193d] to-[#1a2951] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#cea858] to-[#d4b366] rounded-2xl">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">{description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-[#cea858] to-[#d4b366] text-[#0f193d] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#cea858]/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{t.serviceDetail.scheduleConsultation}</span>
                  </button>
                </Link>
                <button className="border-2 border-[#cea858] text-[#cea858] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#cea858] hover:text-[#0f193d] transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>{t.serviceDetail.callNow}</span>
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{t.serviceDetail.keyFeatures}</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#cea858] flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f193d] mb-4">
              {t.serviceDetail.whyChoose} {title} {t.serviceDetail.servicesQuestion}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cea858] to-[#d4b366] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#cea858] to-[#d4b366] rounded-xl flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f193d]">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0f193d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.serviceDetail.ourProcess}</h2>
            <p className="text-xl text-gray-300">
              {t.serviceDetail.howWeHandle} {title.toLowerCase()} {t.serviceDetail.case}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cea858] to-[#d4b366] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#cea858] to-[#d4b366] rounded-full mx-auto mb-6 text-2xl font-bold text-[#0f193d]">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f193d] mb-4">{t.serviceDetail.relatedServicesTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#cea858] to-[#d4b366] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#cea858] to-[#d4b366] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ServiceIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f193d] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button className="flex items-center space-x-2 text-[#cea858] font-semibold group-hover:text-[#0f193d] transition-colors duration-300">
                    <span>{t.serviceDetail.learnMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f193d] to-[#1a2951] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.serviceDetail.readyToStart}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t.serviceDetail.contactToday} {title.toLowerCase()} {t.serviceDetail.needs}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#cea858] to-[#d4b366] text-[#0f193d] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#cea858]/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>{t.serviceDetail.getConsultation}</span>
              </button>
            </Link>
            <button className="border-2 border-[#cea858] text-[#cea858] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#cea858] hover:text-[#0f193d] transition-all duration-300 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
