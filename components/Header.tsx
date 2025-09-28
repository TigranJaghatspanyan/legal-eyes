'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, t, changeLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }

    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  const navItems = [
    { key: 'home', href: 'home' },
    { key: 'services', href: 'services' },
    { key: 'about', href: 'about' },
    { key: 'team', href: 'team' },
    { key: 'contact', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
        : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/legal_eyes_logo.png"
              alt="Legal Eyes"
              width={48}
              height={48}
              className="h-12 w-auto select-none"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  if (item.key === 'services') {
                    router.push('/services');
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="font-medium transition-all duration-300 hover:scale-105 text-gray-700 hover:text-[#cea858]"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={changeLanguage}
            />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-300 text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200/50">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  if (item.key === 'services') {
                    router.push('/services');
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#cea858] hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
